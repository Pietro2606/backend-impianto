const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Rotta di benvenuto
app.get("/", (req, res) => {
  res.send("✅ sito in costruzione");
});

// Esempio di rotta API (da personalizzare)
app.get("/impianti", async (req, res) => {
  try {
    const impianti = await prisma.impianto.findMany();
    res.json(impianti);
  } catch (error) {
    res.status(500).json({ error: "Errore nel recupero degli impianti." });
  }
});

// Avvio del server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Backend in ascolto su http://localhost:${PORT}`);
});
