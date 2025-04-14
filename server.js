import express from 'express';
import cors from 'cors';
import pkg from '@prisma/client';

const { PrismaClient } = pkg;
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/api/eventi-recenti', async (req, res) => {
  const eventi = await prisma.eventoImpianto.findMany({
    orderBy: { orario: 'desc' },
    take: 10,
    include: { impianto: true, utente: true }
  });
  res.json(eventi);
});

app.post('/api/comando', async (req, res) => {
  const { tipo, valore, impiantoId, utenteId } = req.body;
  const evento = await prisma.eventoImpianto.create({
    data: {
      tipo,
      valore,
      impiantoId: Number(impiantoId),
      utenteId: utenteId ? Number(utenteId) : null
    }
  });
  res.json(evento);
});

app.listen(4000, () => {
  console.log('🚀 Backend in ascolto su http://localhost:4000');
});
