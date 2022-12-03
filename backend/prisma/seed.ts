import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.question.create({
    data: {
      phrase: 'Quantos pedaços tem a pizza média?',
      alternatives: {
        create: [
          {
            phrase: '6',
            correct: true
          },
          {
            phrase: '5',
            correct: false
          },
          {
            phrase: '3',
            correct: false
          },
          {
            phrase: '8',
            correct: false
          },
          {
            phrase: '7',
            correct: false
          }
        ]
      }
    }
  });

  await prisma.question.create({
    data: {
      phrase: 'Qual a diferença entre uma pizza pequena e uma grande?',
      alternatives: {
        create: [
          {
            phrase: 'A pequena possui 4 pedaços e a grande 8',
            correct: true
          },
          {
            phrase: 'A pequena possui 3 pedaços e a grande 6',
            correct: false
          },
          {
            phrase: 'A pequena possui 2 pedaços e a grande 10',
            correct: false
          },
          {
            phrase: 'A pequena possui 6 pedaços e a grande 8',
            correct: false
          },
          {
            phrase: 'A pequena possui 4 pedaços e a grande 6',
            correct: false
          }
        ]
      }
    }
  });

  await prisma.question.create({
    data: {
      phrase: 'Qual das pizzas a seguir é de creme?',
      alternatives: {
        create: [
          {
            phrase: 'Lombo ao creme',
            correct: true
          },
          {
            phrase: 'Calabresa',
            correct: false
          },
          {
            phrase: 'Cremosa',
            correct: false
          },
          {
            phrase: 'Frango catupiry',
            correct: false
          },
          {
            phrase: 'Marguerita',
            correct: false
          }
        ]
      }
    }
  });

  await prisma.question.create({
    data: {
      phrase: 'Afinal, onde a pizza foi inventada?',
      alternatives: {
        create: [
          {
            phrase: 'Marrocos',
            correct: true
          },
          {
            phrase: 'Egito',
            correct: false
          },
          {
            phrase: 'Italia',
            correct: false
          },
          {
            phrase: 'China',
            correct: false
          },
          {
            phrase: 'Brasil',
            correct: false
          }
        ]
      }
    }
  });

  await prisma.question.create({
    data: {
      phrase: 'Qual o sabor de pizza mais pedido no Brasil?',
      alternatives: {
        create: [
          {
            phrase: 'Quatro queijos',
            correct: true
          },
          {
            phrase: 'Marguerita',
            correct: false
          },
          {
            phrase: 'Calabresa',
            correct: false
          },
          {
            phrase: 'Portuguesa',
            correct: false
          },
          {
            phrase: 'Mussarela',
            correct: false
          }
        ]
      }
    }
  });

  await prisma.question.create({
    data: {
      phrase: 'Qual foi a primeira pizza feita numa pizzaria?',
      alternatives: {
        create: [
          {
            phrase: 'Calabresa',
            correct: true
          },
          {
            phrase: 'Portuguesa',
            correct: false
          },
          {
            phrase: 'Frango com catupiry',
            correct: false
          },
          {
            phrase: 'Mussarela',
            correct: false
          },
          {
            phrase: 'Três queijos',
            correct: false
          }
        ]
      }
    }
  });

  await prisma.question.create({
    data: {
      phrase: 'Qual dessas pizzas não contém cebola?',
      alternatives: {
        create: [
          {
            phrase: 'Mussarela',
            correct: true
          },
          {
            phrase: 'Calabresa',
            correct: false
          },
          {
            phrase: 'Bacon',
            correct: false
          },
          {
            phrase: 'Portuguesa',
            correct: false
          },
          {
            phrase: 'Toscana',
            correct: false
          }
        ]
      }
    }
  });

  await prisma.question.create({
    data: {
      phrase: 'A pizza de três queijos é composta por: mussarela, provolone e:',
      alternatives: {
        create: [
          {
            phrase: 'Catupiry',
            correct: true
          },
          {
            phrase: 'Parmesão',
            correct: false
          },
          {
            phrase: 'Gorgonzola',
            correct: false
          },
          {
            phrase: 'Provolone',
            correct: false
          },
          {
            phrase: 'Mussarela',
            correct: false
          }
        ]
      }
    }
  });

  await prisma.question.create({
    data: {
      phrase: 'Quais são os ingredientes de uma pizza de quatro queijos?',
      alternatives: {
        create: [
          {
            phrase: 'Mussarela, provolone, gongorzola e parmesão',
            correct: true
          },
          {
            phrase: 'Mussarela, cheddar, gorgonzola e peperoni',
            correct: false
          },
          {
            phrase: 'Cheddar, creme-cheese, parmesão e catupiry',
            correct: false
          },
          {
            phrase: 'Mussarela, picles, molho de tomate e cheddar',
            correct: false
          },
          {
            phrase: 'Mussarela, queijo minas, molho de tomate e catupiry',
            correct: false
          }
        ]
      }
    }
  });
};

main();