<h1>CRUD com MongoDB</h1>
<p>API que conecta a um banco de dados MongoDB, faz requisições e recebe respostas.</p>

<h1>Como rodar a aplicação</h1>
<p>Usando o terminal, clone o repositório:<br>
<code>git clone https://github.com/Balokbk/CRUD-com-MongoDB</code></p>

<p>Instale os módulos com o npm na pasta raiz:<br>
<code>npm install</code></p>

<p>(Opicional)Crie uma '.env' na pasta raiz para fazer a conexão com o banco de dados:<br>
<a href='https://www.freecodecamp.org/portuguese/news/como-usar-variaveis-de-ambiente-do-node-com-um-arquivo-dotenv-para-node-js-e-npm/'>Clique aqui para saber como criar uma '.env'</a></p>

<p>Vá para o arquivo chamado 'dbConnect.js':<br>
Ele fica no caminho <code>'./src/config/dbConnect.js'</code><br>Depois edite o placeHolder <code>/*&ltconnection&gt*/</code> pela sua string de conexão do banco de dados.</p>

<p>Por fim execute o comando <code>npm run dev</code> para inciar o servidor na porta 3000.</p>

<h1>Modelos</h1>
<p>Os modelos para esse banco de dados são os seguintes: Autor, Editora e Livro. Sendo necessário criar Editora e Autor primeiro, visto que seus Id's são referenciados no modelo Livro.</p>
<p><strong>Modelos:</strong></p>
<code><strong>Livro:</strong></code>
<p><code>titulo</code>:String<br><code>preco</code>:Int/Number<br><code>paginas</code>:Int/Number<br><code>editora</code>:Id_Editora<br><code>autor</code>:Id_Autor</p>
<code><strong>Autor:</strong></code>
<p><code>nome</code>:String<br><code>nacionalidade</code>:String</p>
<code><strong>Editora:</strong></code>
<p><code>nomeEditora</code>:String</p>

<h1>Rotas</h1>
<p>Todos os métodos HTTP para o Crud estão nesta api, então <code>get</code>, <code>post</code>, <code>put</code> e <code>delete</code>.</p>
<p>O domínio vai ser <code>http://localhost:3000</code>. A seguir dele, aí vem as rotas.</p>

<p><strong>Rotas:</strong></p>
<p>Retorna a lista dos dados de cada Modelo:<br><code>http://localhost:3000/livros</code><br><code>http://localhost:3000/autores</code><br><code>http://localhost:3000/editoras</code>.</p>

<p>É possível buscar por id:<br><code><code>http://localhost:3000/livros/&ltid_do_livro&gt</code></code><br>Para usar os métodos <code>post</code>, <code>put</code> e <code>delete</code> também se usa a mesma rota.</p>

<p>Há uma rota de busca:<br><code>http://localhost:3000/livros/busca/?&lt chave=valor &gt</code>.</p>

<p>Caso queira editar a paginação da amostragem, se pode colocar mais condições após o '?'<br><code>http://localhost:3000/livros?limite=X&pagina=X&ordenacao=chave:&lt-1 ou 1&gt</code>.<br><code>limite</code> é quantos dados serão mostrados por páginas.<br><code>pagina</code> é qual a página que será mostrada.<br><code>ordenacao</code> precisa da chave que deseja usar para ordenar, após os dois pontos o 1 ou -1 diz se será crescente ou decrescente.</p>
