#!/bin/bash
echo "🔧 Installazione dipendenze..."
npm install

echo "⚙️  Generazione Prisma Client..."
npx prisma generate --schema=prisma/schema.prisma

echo "🛠  Esecuzione migrazione (init)..."
npx prisma migrate dev --name init --schema=prisma/schema.prisma

echo "🚀 Avvio server backend..."
node server.js
