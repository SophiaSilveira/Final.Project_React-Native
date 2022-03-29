# Final.Project_React-Native
A repository for the AppI module.

Autores: Sophia Mendes da Silveira && João Pedro Bertoletti.
Git João: https://github.com/JPedroSB

Temática- Auxiliar culinário: Aplicativo culinário para você, indeciso ou não, chefe de cozinha iniciante ou profissional a decidir seu prato(rango) do dia ou    simplesmente aprender a cozinhar aquele prato pro seu/sua crush ou pra matar aquela vontade.

<h1> Pré-requisitos e tecnologias utilizadas:<h1>
1. NPM ou yarn- instalado;
2. Node;
3. SDK Android Studio;
4. Emulador(pode ser do próprio Android studio;
5. Git- Repositórios;
6. Clonar o repositório git;
7. Dar init no projeto react-native.


Um pouco sobre a variável de ambiente: Neste trabalho foi utilizada a IDE Android Studio, que é um ambiente de desenvolvimento integrado para desenvolver para a plataforma Android. Para isto foram necessárias certas configurações, como a instalação do Node e o init no projeto, passos que você pode encontrar em: https://reactnative.dev/docs/environment-setup


Neste trabalho será utilizamos o React-native, que é uma biblioteca Javascript criada pelo Facebook. Para mais informações, tutoriais de instalação dos requisitos, e exemplos funcionais, acesse: https://reactnative.dev/docs/getting-started


Comandos para utilizar o App:

 1. Após clonar o repositório e iniciar seu emulador, vá ao prompt de comando ou terminal do Android Studio, entre dentro da pasta do projeto (o caminho será parecido com ' C:\APPIAndroid\ProjFinal\Final.Project_React-Native\ProfetaDoRango' e dê:
       
           npx react-native run-android
       
       
 2. Caso você já tenha instalado o npm, e o terminal devolva uma mensagem pedindo para você instala-lo, tente:
 
           yarn install
      
   e de o comando 1 novamente.
 
      
 3. Caso o terminal indique um problema no 'GRADLE' do projeto, abra o arquivo "gradle.properties", que se encontra em 'ProfetaDoRango/Android/gradle.properties',  e insira depois da última linha o seguinte: 

           org.gradle.jvmargs=-Xmx1536M --add-exports=java.base/sun.nio.ch=ALL-UNNAMED --add-opens=java.base/java.lang=ALL-UNNAMED --add-      opens=java.base/java.lang.reflect=ALL-UNNAMED --add-opens=java.base/java.io=ALL-UNNAMED --add-exports=jdk.unsupported/sun.misc=ALL-UNNAMED

  e de o comando 1 novamente.


Linha de Trabalho:
 Utilizamos a própria Main, para a atualização dos arquivos;

Palheta de cores:
 ff9939;

 #ffffff; #efefef; #fdeca6; #585858; #111; #bebebe; #ffb875; #000; #c1c1c1; #ffdcbb; #ffaa5a;

![palheta de cores](https://user-images.githubusercontent.com/89792528/160531225-b76be5c5-a01b-4d91-a999-6fb17ee5c170.png)



-14/03/2022: Base Wireframe sem SplashScreen:

![image](https://user-images.githubusercontent.com/89554510/158917524-2c45a0ef-3443-4905-8e35-8adaaf2ad21d.png)


-15/03/2022: Observação da experiência de usuário-UX:

![image](https://user-images.githubusercontent.com/89554510/159123372-991f9ce1-df84-4ec9-9ea1-adcd208936bd.png)


16/03/2022: Atualização do Wireframe:


Tela do SplashScreen:

![Tela de inicio do app](https://user-images.githubusercontent.com/89792528/159138277-2856fc74-782e-4794-9809-b0a8fe3bb17c.png)


Tela do Login:

![Tela de login](https://user-images.githubusercontent.com/89792528/159138293-0c5b62ad-8293-4e7e-811f-71a265e40b4b.png)


Tela inicial das receitas:

![tela inicial de receitas - tela final](https://user-images.githubusercontent.com/89792528/159138298-64f0ec0e-1e94-4ad7-a885-9959b3f9e2bf.png)


Tela da receita escolhida:

![Tela da receita primeira parte 1](https://user-images.githubusercontent.com/89792528/159138327-cfeea888-eabe-4507-889e-0bae64e26ac6.png)

![Tela da receita primeira parte 2](https://user-images.githubusercontent.com/89792528/159138332-18d4bd9f-9bc3-4d3e-b9b1-c39f6734a070.png)



17/03/2022: Separação MVN:

![image](https://user-images.githubusercontent.com/89554510/160684755-514790b6-bd3a-4a4d-ad0e-a6feb644baa0.png)

-Dentro dos diretórios das Telas encontram-se os arquivos index.js.

![image](https://user-images.githubusercontent.com/89554510/160684966-6ed9675f-848e-4526-97b6-b4af9722d2fe.png)


19 e 20/03/2022: Escolha do banco de dados Sqlite.
 *Conforme modelo disposto na documentação: https://aboutreact.com/example-of-sqlite-database-in-react-native/

 1- *Nome: Profeta do Rango.

 2-Icone:
 
 ![image](https://user-images.githubusercontent.com/89554510/160508500-59b9e00c-cc6b-4d6d-b3ad-2ef93aedd762.png)

 3- Init no Projeto.


21/03/2022: Criação do banco de Dados e inicio dos testes para as funções que seriam utilizadas como: registro, login, delete de login entre outros.


25 há 30/03/2022: Integração das funcionalidades testadas com o exigido e estilização das telas.

Tela inicial:

  ![image](https://user-images.githubusercontent.com/89554510/160685225-5519ce3a-b2a7-45a7-85f4-2e00ee3b8cff.png)


Tela de Registrar Usuário:

  ![image](https://user-images.githubusercontent.com/89554510/160685332-61b7a4bc-fef0-41f8-9531-b3874fed9e05.png)


Tela de Login Usuário:

  ![image](https://user-images.githubusercontent.com/89554510/160685482-932a56bb-cb7c-4e4a-bf7a-2b0d0bb84be3.png)


Tela Home:

  ![image](https://user-images.githubusercontent.com/89554510/160685725-ce1efcc7-6f51-441c-b614-117a28f9463a.png)


Tela Receita:
parte1 -

  ![image](https://user-images.githubusercontent.com/89554510/160685833-cca3d65e-24f1-459f-99e6-cfe1da26ec35.png)

parte2 - 

  ![image](https://user-images.githubusercontent.com/89554510/160686055-4b39639a-ce28-4126-a8ae-5de2e4190bb8.png)


parte3 - 

  ![image](https://user-images.githubusercontent.com/89554510/160686186-5b08e2e9-384c-465d-a8a8-8dc08a7aa0ec.png)


Tela Registrar Sugestões:
parte1 -

  ![image](https://user-images.githubusercontent.com/89554510/160686452-0b5c7b47-8e84-470c-a754-615071f67871.png)


parte2-

  ![image](https://user-images.githubusercontent.com/89554510/160686599-cc705a1b-3a00-4284-bcac-a0b93ffa7ede.png)


parte3-

  ![image](https://user-images.githubusercontent.com/89554510/160686690-aae8d485-86b5-4137-aacd-e567e1c49391.png)


Tela Visualizar e Atualizar Usuário:

  ![image](https://user-images.githubusercontent.com/89554510/160686869-c13ad349-18aa-4102-b9e4-4876403944fe.png)


Tela Login Adm: User préviamente cadastrado, ao utilizar a aplicação pela primeira vez deve-se utilizar este!

  ![image](https://user-images.githubusercontent.com/89554510/160687242-712ff3d1-4450-4f9d-9caa-6f442c0feb04.png)


Tela Home Adm:

  ![image](https://user-images.githubusercontent.com/89554510/160687507-c2d85bc9-8c28-4756-8526-b3d849fa58a2.png)


Tela Registrar Adm;

![image](https://user-images.githubusercontent.com/89554510/160687601-7a2f2c99-195e-48af-a340-ab20ee61f277.png)


Tela Ver Todos Adm: Conforme os adm forem registrados a lista aumentará.

![image](https://user-images.githubusercontent.com/89554510/160687727-5949aeec-13df-4d6e-98f5-4f5be2940045.png)


Tela Registrar Receita;

parte1-

  ![image](https://user-images.githubusercontent.com/89554510/160687969-2637dfa7-856e-451c-b872-4592afda5cc0.png)


parte2-

  ![image](https://user-images.githubusercontent.com/89554510/160688074-8423c188-1609-4049-8f88-bec618d86306.png)


Tela Viazualizar Sugestões;

pate1- 

  ![image](https://user-images.githubusercontent.com/89554510/160688230-6ee8d77b-8742-44e7-adc8-ebb53f8465e7.png)


parte2-

![image](https://user-images.githubusercontent.com/89554510/160688350-365c3186-c952-453f-b9de-7213fefc791c.png)



Aqui chegamos ao fim do APP! Esperamos que tenha lhe sido útil.

Licença: Utilizamos a licença MIT.
