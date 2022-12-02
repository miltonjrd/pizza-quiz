import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.question.create({
    data: {
      phrase: 'Qual desses ingredientes não está incluso na pizza de 4 queijos?',
      alternatives: {
        create: [
          {
            phrase: 'Queijo',
            correct: false
          },
          {
            phrase: 'Picanha',
            correct: true
          },
          {
            phrase: 'Orégano',
            correct: false
          },
          {
            phrase: 'Catupiry',
            correct: false
          }
        ]
      }
    },
  });

  await prisma.question.create({
    data: {
      phrase: 'Quantas rodelas de calabresa têm na pizza de queijo?',
      alternatives: {
        create: [
          {
            phrase: '12',
            correct: false
          },
          {
            phrase: '2',
            correct: false
          },
          {
            phrase: '31',
            correct: false
          },
          {
            phrase: 'Nenhuma',
            correct: true
          }
        ]
      }
    }
  });

  await prisma.ranking.create({
    data: {
      username: 'Geefi',
      correct: 2,
      time: 20
    }
  });
};

main();