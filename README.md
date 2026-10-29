# Portifólio — Otávio Volpe

Portfólio pessoal em desenvolvimento, construído em etapas pequenas e versionadas.

## Etapa 1

Tela de apresentação responsiva, identidade escura com verde e link para o GitHub. Apresentação como desenvolvedor de software, sem limitar a uma área.

## Etapa 2 — Projetos

Seção com Dayvilo e J Araujo, capturas reais das páginas públicas, descrições e links externos. As imagens estão em `assets/` e podem ser atualizadas quando os projetos mudarem. O botão inicial e o link no cabeçalho levam à seção. As descrições apresentam os produtos; detalhes de participação e tecnologias serão adicionados após confirmação do autor.

## Etapa 3 — Tecnologias

Grade com Angular, CSS, Git, GitHub, HTML, Java, JavaScript, Kanban, Looker, MySQL, PostgreSQL, Power BI, Python, Quarkus, REST API, Scrum, Spring, TypeScript. Todas as habilidades têm o mesmo tratamento visual e aparecem em ordem alfabética, sem priorizar uma tecnologia. Seção acessível pelo menu, responsiva e sem escalas de proficiência. Não atribui tecnologias a projetos cuja implementação ainda não foi confirmada.

## Etapa 4 — Sobre mim

Apresentação pessoal com abertura a diferentes áreas do desenvolvimento e interesses compartilhados pelo autor: futebol, muay thai, música e conversas, apresentados somente no texto. A seção não inclui formação, tempo de experiência ou histórico profissional não confirmados. Link "Sobre" no menu, com navegação em duas linhas nas telas pequenas.

## Etapa 5 — Contato

Seção “Vamos conversar?” com e-mail em destaque e links diretos para WhatsApp, LinkedIn e Instagram, escolhidos pelo autor. O WhatsApp usa o código do Brasil (+55). Link “Contato” no menu e disposição adaptada para celular. O e-mail abre o aplicativo de e-mail; os demais canais abrem em uma nova aba.

## Rodar localmente

Requer Node.js 20 ou superior. Não há dependências para instalar.

```sh
npm run dev
```

Abra http://127.0.0.1:5173. Atualize o navegador após editar um arquivo. Encerre o servidor com Ctrl+C.

## Estrutura

- `index.html`: conteúdo e estrutura semântica.
- `styles.css`: identidade visual e adaptação para celular.
- `favicon.svg`: ícone da aba.
- `scripts/dev.mjs`: servidor local; expõe apenas os arquivos da página.

As fontes DM Sans e Space Grotesk vêm do Google Fonts. Sem conexão, a página usa fontes locais alternativas.

## Próximas etapas

1. Ajustar a apresentação após revisão visual.
2. Detalhar a participação nos projetos.
3. Revisar acessibilidade, desempenho e apresentação ao compartilhar o site.

## Fluxo de trabalho

As alterações são preparadas e verificadas em pequenos lotes. O autor revisa e executa commit e push. O GitHub Pages publica automaticamente a branch `main` em https://otaviovolpe.github.io/portifolio/.
