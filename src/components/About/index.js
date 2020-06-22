import React from 'react';

import * as S from './styled';

const About = () => (
  <>
    <S.AboutHeader>
      <S.AboutTitle>Sobre mim</S.AboutTitle>
    </S.AboutHeader>
    <S.MainContent>
      <p>
        Meu nome é Luís Rabock, tenho 29 anos, nasci em Jaraguá do Sul santa
        catarina, apaixonado por desenvolvimento WEB e viagens.
      </p>
      <br />
      <p>
        Trabaho como desenvolvedor full Stack à três anos, trabalhei na empresa
        Systêxtil e abri minha empresa a RocketLab.
      </p>
      <h2>Habilidades</h2>
      <ul>
        <li>Java</li>
        <li>Node</li>
        <li>Javascript</li>
        <li>React / Redux / Hooks</li>
        <li>React Native</li>
        <li>GraphQL</li>
        <li>Git [Github e bitbucket]</li>
        <li>HTML / CSS</li>
        <li>Testes unitários com jest, enzyme e supertest</li>
        <li>Gatsby</li>
        <li> OracleDb, Mysql, PostgreSQL e MongoDb</li>
      </ul>
    </S.MainContent>
  </>
);

export default About;
