# README.md

# React Cart App

Este é um projeto de carrinho de compras desenvolvido em React utilizando a Context API e o `useReducer` para gerenciar o estado do carrinho. A aplicação persiste os dados nos cookies ou no localStorage e utiliza a biblioteca Stitches para estilização.

## Estrutura do Projeto

```
react-cart-app
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Cart.tsx
│   │   ├── CartItem.tsx
│   │   └── Product.tsx
│   ├── context
│   │   └── CartContext.tsx
│   ├── hooks
│   │   └── useCart.ts
│   ├── reducers
│   │   └── cartReducer.ts
│   ├── styles
│   │   └── stitches.config.ts
│   ├── utils
│   │   └── storage.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── types.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/react-cart-app.git
   ```

2. Navegue até o diretório do projeto:
   ```
   cd react-cart-app
   ```

3. Instale as dependências:
   ```
   npm install
   ```

## Uso

Para iniciar a aplicação, execute o seguinte comando:

```
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## Deploy

Após a implementação, a aplicação pode ser implantada na Vercel ou em outra plataforma de sua escolha. 

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. 

## Licença

Este projeto está licenciado sob a MIT License.