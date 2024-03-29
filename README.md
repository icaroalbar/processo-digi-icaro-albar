# Projeto teste Digi Icaro Albar

Esse é um teste para manipular o arquivo products.json localizado no link abaixo:
https://github.com/eduardovianna/digi

Essa simples aplicação, simula um site de compras que conseguimos adicionar produtos do carrinho de compras.

## Principais tecnologias usadas

Nessa aplicação, foi realizada com [Vite JS](https://vitejs.dev/) com template de React com typescript pois deixa a aplicação mais leve e performática.

Como é para um teste essa aplicação, utilizei uma ferramenta chamada [Json Server](https://www.npmjs.com/package/json-server) que simula um back end para realizar requisições e utilizamos o arquivo products.json para simular o mesmo. Para fazer a requisição, utilizamos a biblioteca chamada [SWR](https://swr.vercel.app/) para consumir às APIs e colocar em cache para melhorar a performace da aplicação sem realizar requisições desnecessárias.

Para deixar a aplicação com uma aparência mais intuitiva, código mais organizado, uma entrega mais rápida; Utilizei os componentes de UI descrivtos abaixo:

- [Shadcn/ui](https://ui.shadcn.com/) - Componetes prontos de UI com acessibilidade juntamente com a biblioteca [Radix/ui](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/) - Não poderia faltar uma estrutura de CSS que nos ajuda na aparência de nossas aplicações e na sua responsividade e qualquer tipo de tela. Essa ferramente, é uma das melhores que eu já trabalhei em minha carreira!

- [Prettier](https://prettier.io/) - Para padronizar a identação do nosso código tanto em aplicações desenvolvidas apenas por uma pessoas mas também por uma equipe. A ferramenta [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) ajuda também a criar uma ordem de como as className ficam organizada no código e é muito interessante conhecer para quem utiliza Tailwind CSS e não conhece essa ferramenta.

- [Lucide Icons](https://lucide.dev/) - biblioteca de ícones utilizada na aplicação no formato SVG.

## Instruções de execução

Vou explicar agora como podemos executar a aplicação:
OBS: Antes de tudo precisamos ter o [Node JS](https://nodejs.org/en) instalado na máquina que vai executar a aplicação.

### Donwload da aplicação

Baixe o repositório no reposiório do GitHub [clicando aqui](https://github.com/icaroalbar/processo-digi-icaro-albar) ou caso tenha o [Git](https://git-scm.com/) instalado em sua máquina, utilize o comando abaixo:

```js**
git clone https://github.com/icaroalbar/processo-digi-icaro-albar.git
```

### Branches da aplicação

A aplicação foi realizada com a estratégia de estratégia de Gitflow com as seguintes branch:

- `main` - branch de produção;
- `develop` - branch de desenvolvimento;
- `feature/global-structure` - branch feature da estrutura base de todas as outras features;
- `feature/page-home` - branch feature da página principal;
- `feature/page-product` - branch feature da página de produtos;
- `feature/page-cart` - branch feature da página da lista de produtos selecionado;

### Instalando depemdências

Depois que estiver com o repositório baixado, precisamos instalar às dempedências com um dos seguintes comandos:

NPM

```js**
  npm i
```

YARN

```js**
  yarn
```

PNPM

```js**
  pnpm i
```

### Executar aplicação

Para executar a aplicação, usaremos a branch `main` para executar o teste. Caso não esteja na branch correta, utilize o comando abaixo:

```js**
  git checkout -b main origin/main
```

A aplicação será executada em `http://localhost/` em três portas pois teremos dois de back end que seria os dados dos produtos e outro do carrinho de compras e do front end.

As portas utilizadas serão às seguintes:

- `http://localhost:5173/` - Server do front end;
- `http://localhost:3001/` - Server do back end de produtos;
- `http://localhost:3002/` - Server do back end da lista do carrinho de compras.

Utilizei uma biblioteca chamada [Concurrently](https://www.npmjs.com/package/concurrently) que com ela podemos executar os três server apenas com um comando e o mesmo comando no arquivo `package.json` ficou na seguinte maneira:

```js**
  "dev": "concurrently \"json-server --watch data/products.json --port 3001\" \"json-server --watch data/cart.json --port 3002\" \"vite\"",
```

Conforme foi visto acima, podemos usar o comando `dev` com um dos gerenciadores de pacote para ativar todos os servers e acessar nossa aplicação.

NPM

```js**
  npm run dev
```

YARN

```js**
  yarn dev
```

PNPM

```js**
  PNPM dev
```

Mensagem:

```js**
$ concurrently "json-server --watch data/products.json --port 3001" "json-server --watch data/cart.json --port 3002" "vite"
[0] --watch/-w can be omitted, JSON Server 1+ watches for file changes by default
[1] --watch/-w can be omitted, JSON Server 1+ watches for file changes by default
[0] JSON Server started on PORT :3001
[0] Press CTRL-C to stop
[0] Watching data/products.json...
[0]
[0] ♡⸜(˶˃ ᵕ ˂˶)⸝♡
[0]
[0] Index:
[0] http://localhost:3001/
[0]
[0] Static files:
[0] Serving ./public directory if it exists
[0]
[1] JSON Server started on PORT :3002
[1] Press CTRL-C to stop
[1] Watching data/cart.json...
[1]
[1] ( ˶ˆ ᗜ ˆ˵ )
[1]
[1] Index:
[1] http://localhost:3002/
[1]
[1] Static files:
[1] Serving ./public directory if it exists
[1]
[1] Endpoints:
[1] http://localhost:3002/cart
[0] Endpoints:
[0] http://localhost:3001/products
[2]
[2]   VITE v5.2.6  ready in 1030 ms
[2]
[2]   ➜  Local:   http://localhost:5173/
[2]   ➜  Network: use --host to expose
```

Assim que aparecer a mensagem acima no terminal, podemos acessar nossa aplicação através do link [http://localhost:5173/](http://localhost:5173/) utilizando qualquer navegador de sua preferência.

Agora você pode explorar a aplicação desenvolvida:
![Imagem Home](document\home.jpg)

Créditos:<br>
Icaro Albar<br>

[GitHub](https://github.com/icaroalbar);<br>
[Linkedin](https://www.linkedin.com/in/icaro-albar/);
