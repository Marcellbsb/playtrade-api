import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
    name: String,
    platform: String,
    genre: String,
    releaseYear: Number,
    description: String,
});

const Game = mongoose.model('Game', GameSchema);

export default Game;
