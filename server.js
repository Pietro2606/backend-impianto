import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// 🔄 Recupera gli ultimi eventi
app.get('/api/eventi-recenti', async (req, res) => {
  try {
    const eventi = await prisma.eventoImpianto.findMany({
      orderBy: { orario: 'desc' },
      take: 10,
    });
    res.json(eventi);
  } catch (err) {
    console.error('Errore nel recupero degli eventi:', err);
    res.status(500).json({ errore: 'Errore del server' });
  }
});

// 🚀 Invia un nuovo comando
app.post('/api/comando', async (req, res) => {
  const { tipo, valore, impiantoId } = req.body;
  try {
    const evento = await prisma.eventoImpianto.create({
      data: {
        tipo,
        valore,
        impiantoId,
        orario: new Date(),
      },
    });
    res.json(evento);
  } catch (err) {
    console.error('Errore nella creazione del comando:', err);
    res.status(500).json({ errore: 'Errore del server' });
  }
});

// 🟢 Avvio server
app.listen(PORT, () => {
  console.log(`🚀 Backend in ascolto su http://localhost:${PORT}`);
});
