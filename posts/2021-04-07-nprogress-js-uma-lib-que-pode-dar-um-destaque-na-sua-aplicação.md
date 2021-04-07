---
title: NProgress.js uma lib que pode dar um destaque na sua aplicação.
description: Feedbacks visuais das interações do usuário com a aplicação.
date: 2021-04-06 08:47:54
thumbnail: assets/img/react-nprogress.gif
category: react
background: "#61DBFB"
---

Você já deve ter feito uma aplicação completa ou parte dela que funciona da seguinte forma:
Usuário faz alguma interação com um botão, um link, um redirect, após a interação nada acontece e em um passe de mágica algo muda na aplicação (insere o registro, edita o registro, redireciona para página correta).

Para corrigir esse problema eu vou falar um pouco sobre a biblioteca pouco conhecida nprogress(https://ricostacruz.com/nprogress/). Com ela nós podemos incluir uma amigável progress bar e um spinner que indica que algo está sendo processado. Após o o término do processo você concluí a progress  e esconde o spinner, vou mostrar um exemplo que fiz um app usando next js.



```jsx
import NProgress from 'nprogress';
import Router from 'next/router';



Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
...


```

Apenas com o código acima que foi colocado na page principal da minha aplicação (_app.js) eu já consigo dar o feedback visual sempre que o usuário está navegando entre as rotas da aplicação.
Agora digamos que eu dei um submit em um formulário que vai enviar um post com os dados desse formulário para uma API, esse processo vai demorar alguns segundos e eu quero alertar o usuário que a solicitação está sendo processo então:

```jsx

import NProgress from 'nprogress';




const meuComponente= () => {




  const enviaDadosParaApi= async (cliente) => {

    NProgress.start(); //inicia progressbar + spinner
    try {
      await requisicaoHttpPost(payload); //requisição http que pode demorar.
    } catch (e) {
      //trata erro se houver
    } finally {
      NProgress.done(); // se der sucesso ou erro completa a progress bar e esconde o spinner.
    }
  };
...

```






### Conclusão

Em muitos casos, com poucas linhas de código conseguimos dar uma experiência muito mais rica para o usuário. Sempre é importante ser critico ao seu desenvolvimento e analisar o que pode ser melhorado, sempre existe algo 😉

