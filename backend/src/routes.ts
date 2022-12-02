import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

import Answer from './interfaces/Answer';

const routes = Router();
const prisma = new PrismaClient();

routes.get('/questions', async (req: Request, res: Response) => {
  /*const questions = await prisma.question.findMany({
    include: {
      alternatives: {
        select: {
          phrase: true
        }
      },
    },
  });*/

  const questions = await prisma.question.count();

  res.json(questions);
});

routes.get('/ranking', async (req: Request, res: Response) => {
  const ranking = await prisma.ranking.findMany({
    orderBy: {
      time: 'asc'
    }
  });

  res.json(ranking);
});

routes.post('/ranking', async (req: Request, res: Response) => {
  const answers = req.answers?.map((answer: Answer) => answer.question)
  const correctAlternatives =  await prisma.alternative.findMany({
    where: {
      id: {
        in: answers 
      },
      correct: true
    }
  });

  /*await prisma.ranking.create({
    data: {
      username: req.username as string,
      score: correctAlternatives.length
    }
  });*/
});

export default routes;