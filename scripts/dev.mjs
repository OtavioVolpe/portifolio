import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const routes = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/styles.css', ['styles.css', 'text/css; charset=utf-8']],
  ['/favicon.svg', ['favicon.svg', 'image/svg+xml']],
]);
const server = createServer(async (req, res) => {
  const route = routes.get(new URL(req.url, 'http://localhost').pathname);
  if (!route) { res.writeHead(404); res.end('Não encontrado'); return; }
  try {
    const content = await readFile(fileURLToPath(new URL(route[0], root)));
    res.writeHead(200, { 'Content-Type': route[1], 'Cache-Control': 'no-store' });
    res.end(content);
  } catch {
    res.writeHead(500); res.end('Erro ao carregar arquivo');
  }
});
server.on('error', (error) => { console.error(error.message); process.exitCode = 1; });
server.listen(5173, '127.0.0.1', () => console.log('Local: http://127.0.0.1:5173'));
