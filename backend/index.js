import express from "express"
import mongoose from "mongoose"
import cors from "cors"


const app = express()
app.use(express.json())
app.use(cors())
const port = 3000
// Conexão com o banco de dados MongoDB
mongoose.connect("mongodb+srv://devmarcellbsb:Srh14123df@playtrade.ttqwr.mongodb.net/?retryWrites=true&w=majority&appName=PlayTrade")
  .then(() => console.log("Conectado ao banco de dados"))
  .catch(err => console.error("Erro ao conectar ao banco de dados:", err));

const User = mongoose.model('User', {
  name: String,
  email: String,
  senha: String,
  confirmar: String,
});
app.get('/', async (req, res) => {
  const users = await User.find();
  return res.status(200).json(users);
});
app.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json({ message: 'Usuário excluído com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor' });
  }
});
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  try {
    const user = await User.findOne({ email, senha });
    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }
    return res.status(200).json({ message: 'Login bem-sucedido' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor' });
  }
});
app.post('/cadastro', async (req, res) => {
  const { name, email, senha, confirmar } = req.body;
  if (senha !== confirmar) {
    return res.status(400).json({ message: 'Senha e confirmar senha não conferem' });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email já cadastrado' });
    }
    const newUser = new User({ name, email, senha, confirmar });
    await newUser.save();
    return res.status(201).json({ message: 'Cadastro realizado com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor' });
  }
});
app.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { name, email, senha, confirmar } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, { name, email, senha, confirmar }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor' });
  }
});

const GamesSchema = new mongoose.Schema({
  "image_url": String,
  "title": String,
	"description": String,
	"platform": String,
	"gender": String,
	"age": Number	
});

const Games = mongoose.model('Games', GamesSchema);

app.get('/games', async (req, res) => {
  try {
    const games = await Games.find();
    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor' });
  }
});

app.post('/games', async (req, res) => {
  const { title, gender, description, age, image_url, platform } = req.body;

  try {
    const novoGame = new Games({ title, gender, description, age, image_url, platform });
    await novoGame.save();
    return res.status(201).json({ message: 'Jogo cadastrado com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor' });
  }
});

app.put('/games/:id', async (req, res) => {
  const id = req.params.id;
  const { title, gender, description, age, image_url, platform } = req.body;

  try {
    const gameAtualizado = await Games.findByIdAndUpdate(id, { title, gender, description, age, image_url, platform }, { new: true });
    if (!gameAtualizado) {
      return res.status(404).json({ message: 'Jogo não encontrado' });
    }
    return res.status(200).json(gameAtualizado);
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor' });
  }
});

app.delete('/games/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const gameDeletado = await Games.findByIdAndDelete(id);
    if (!gameDeletado) {
      return res.status(404).json({ message: 'Jogo não encontrado' });
    }
    return res.status(200).json({ message: 'Jogo deletado com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor' });
  }
});

app.listen(port, () => {
  console.log('Servidor rodando na porta', port);
});





