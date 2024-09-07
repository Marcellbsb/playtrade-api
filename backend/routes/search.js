import express from 'express';
import Game from '../models/Game';

const router = express.Router();

router.get('/search', async (req, res) => {
    const { query } = req.query;

    try {
        const games = await Game.find({
            name: { $regex: query, $options: 'i' } // 'i' para case-insensitive
        });

        res.json(games);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar jogos' });
    }
});

export default router;
