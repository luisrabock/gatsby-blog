---
title: '.ENV e React Native '
description: Uma forma fácil de setar variáveis de ambiente em modo de desenvolvimento.
date: 2020-06-22 08:27:06
image: assets/img/1_xdi2cseawxu95iekandfuq.png
category: react
background: '#61DBFB'
---

Quando você está trabalhando em um projeto e está usando SECRET KEY, API KEYS, informações de banco, a melhor forma é não expor esses dados em algum repositório publico e para não ficar controlando manualmente, existem algumas ferramentas que podem te ajudar. Uma dessas ferramentas é o react-native-dotenv, digamos que você quer montar uma requisição para uma API:

```jsx
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer dxpdo452d22ds6djdjxcksllhunnop`,
  },
});
```

Da forma acima você está expondo sua API_KEY para que alguém possa usar, com o react-native-dotenv você pode usar da seguinte forma. Primeiro crie um arquivo .env e salve a API_KEY dentro dele:

`API_KEY=dxpdo452d22ds6djdjxcksllhunnop`

Inclua .env\* no seu gitignore:

`#dotenv environment variable files`
`.env*`

Instale o react-native-dotenv com:

```text
yarn add react-native-dotenv -D
```

Ou com NPM:

```text
npm install react-native-dotenv --save-dev
```

Modifique o seu código para buscar a API_KEY do react-native-dotenv, que por baixo dos panos vai buscar do seu arquivo .env.

```jsx
import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
```

### Conclusão

É bem fácil usar o react-native-dotenv e ajuda bastante a controlar as variáveis de ambiente em modo de desenvolvimento com segurança.
Espero que essa informação tenha sido bacana pra vocês.
