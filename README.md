# Final.Project_React-Native
A repository for the AppI module.

<h2> Autores: Sophia Mendes da Silveira && João Pedro Bertoletti. </h2>
<h3>Git João: https://github.com/JPedroSB </h3>

<h3> Temática- </h3> Auxiliar culinário: Aplicativo culinário para você, indeciso ou não, chefe de cozinha iniciante ou profissional a decidir seu prato(rango) do dia ou    simplesmente aprender a cozinhar aquele prato pro seu/sua crush ou pra matar aquela vontade.


<h3> Pré-requisitos e tecnologias utilizadas: </h3>
 
1. NPM ou yarn- instalado;
2. Node;
3. SDK Android Studio;
4. Emulador(pode ser do próprio Android studio;
5. Git- Repositórios;
6. Clonar o repositório git;
7. Dar init no projeto react-native.


<h3> Um pouco sobre a variável de ambiente: </h3> Neste trabalho foi utilizada a IDE Android Studio, que é um ambiente de desenvolvimento integrado para desenvolver para a plataforma Android. Para isto foram necessárias certas configurações, como a instalação do Node e o init no projeto, passos que você pode encontrar em: https://reactnative.dev/docs/environment-setup


<h3> Neste trabalho utilizamos o React-native, que é uma biblioteca Javascript criada pelo Facebook. Para mais informações como, exemplos funcionais e explicação acerca dos componentes, acesse: https://reactnative.dev/docs/getting-started </h3>


<h3> Comandos para utilizar o App: </h3>

 1. Após clonar o repositório e iniciar seu emulador, vá ao prompt de comando ou terminal do Android Studio, entre dentro da pasta do projeto (o caminho será parecido com ' C:\APPIAndroid\ProjFinal\Final.Project_React-Native\ProfetaDoRango' e dê:
       
           npx react-native run-android
       
       
 2. Caso você já tenha instalado o npm, e o terminal devolva uma mensagem pedindo para você instala-lo, tente:
 
           yarn install
      
   e de o comando 1 novamente.
 
      
 3. Caso o terminal indique um problema no 'GRADLE' do projeto, abra o arquivo "gradle.properties", que se encontra em 'ProfetaDoRango/Android/gradle.properties',  e insira depois da última linha o seguinte: 

           org.gradle.jvmargs=-Xmx1536M --add-exports=java.base/sun.nio.ch=ALL-UNNAMED --add-opens=java.base/java.lang=ALL-UNNAMED --add-      opens=java.base/java.lang.reflect=ALL-UNNAMED --add-opens=java.base/java.io=ALL-UNNAMED --add-exports=jdk.unsupported/sun.misc=ALL-UNNAMED

  e de o comando 1 novamente.


<h3> Caso a instalação dos pré-requisitos seja feita corretamente, o projeto deve rodar do seguinte modo: https://drive.google.com/drive/folders/1B4vfTFC5jZNEozLFeibOe1NE8WfkqStX?usp=sharing </h3>

<h3>Linha de Trabalho: Utilizamos a própria Main, para a atualização dos arquivos; </h3>


<h3> Palheta de cores: </h3>
 ff9939;

 #ffffff; #efefef; #fdeca6; #585858; #111; #bebebe; #ffb875; #000; #c1c1c1; #ffdcbb; #ffaa5a;

![palheta de cores](https://user-images.githubusercontent.com/89792528/160531225-b76be5c5-a01b-4d91-a999-6fb17ee5c170.png)



<h3>14/03/2022: Base Wireframe sem SplashScreen:
 
 <img src="https://user-images.githubusercontent.com/89554510/158917524-2c45a0ef-3443-4905-8e35-8adaaf2ad21d.png" width="500" height="700" />

</h3>

<h3>15/03/2022: Observação da experiência de usuário-UX:

![image](https://user-images.githubusercontent.com/89554510/159123372-991f9ce1-df84-4ec9-9ea1-adcd208936bd.png)
</h3>

<h3>16/03/2022: Atualização do Wireframe: </h3>


Tela do SplashScreen:

<img src="https://user-images.githubusercontent.com/89792528/159138277-2856fc74-782e-4794-9809-b0a8fe3bb17c.png" width="300" height="500" />


Tela do Login:

<img src="https://user-images.githubusercontent.com/89792528/159138293-0c5b62ad-8293-4e7e-811f-71a265e40b4b.png" width="300" height="500" />


Tela inicial das receitas:

<img src="https://user-images.githubusercontent.com/89792528/159138298-64f0ec0e-1e94-4ad7-a885-9959b3f9e2bf.png" width="300" height="500" />


Tela da receita escolhida:

<img src="https://user-images.githubusercontent.com/89792528/159138327-cfeea888-eabe-4507-889e-0bae64e26ac6.png" width="300" height="500" />

<img src="https://user-images.githubusercontent.com/89792528/159138332-18d4bd9f-9bc3-4d3e-b9b1-c39f6734a070.png" width="300" height="500" />


<h3> 17/03/2022: Separação MVN:</h3>
 
 <img src="https://user-images.githubusercontent.com/89554510/160684755-514790b6-bd3a-4a4d-ad0e-a6feb644baa0.png" width="350" height="550" />


-Dentro dos diretórios das Telas encontram-se os arquivos index.js.
 
 <img src="https://user-images.githubusercontent.com/89554510/160684966-6ed9675f-848e-4526-97b6-b4af9722d2fe.png" width="350" height="550" />


19 e 20/03/2022: Escolha do banco de dados Sqlite. </h3>
 *Conforme modelo disposto na documentação: https://aboutreact.com/example-of-sqlite-database-in-react-native/

 1- *Nome: Profeta do Rango.

 2-Icone:
 
 <img src="https://user-images.githubusercontent.com/89554510/160508500-59b9e00c-cc6b-4d6d-b3ad-2ef93aedd762.png" width="300" height="500" />
 
 3- Init no Projeto.


<h3> 21/03/2022: Criação do banco de Dados e inicio dos testes para as funções que seriam utilizadas como: registro, login, delete de login entre outros. </h3>


<h3> 25 há 29/03/2022: Integração das funcionalidades testadas com o exigido e estilização das telas. </h3>

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

parte1-

  ![image](https://user-images.githubusercontent.com/89554510/160688230-6ee8d77b-8742-44e7-adc8-ebb53f8465e7.png) 


parte2-

![image](https://user-images.githubusercontent.com/89554510/160688350-365c3186-c952-453f-b9de-7213fefc791c.png)



<h2>Aqui chegamos ao fim do APP! Esperamos que tenha lhe sido útil.</h2>

<h3>Licença: Utilizamos a licença MIT.</h3>
