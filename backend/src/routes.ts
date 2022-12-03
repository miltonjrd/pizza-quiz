import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

import Answer from './interfaces/Answer';

const routes = Router();
const prisma = new PrismaClient();

routes.get('/questions', async (req: Request, res: Response) => {
  const questions = await prisma.question.findMany({
    include: {
      alternatives: {
        select: {
          id: true,
          phrase: true
        }
      },
    },
  });

  res.json(questions);
});

routes.get('/ranking', async (req: Request, res: Response) => {
  const ranking = await prisma.ranking.findMany({
    orderBy: {
      score: 'desc'
    }
  });

  res.json(ranking);
});

routes.post('/ranking', async (req: Request, res: Response) => {
  const answers: number[] = req.body.answers?.map((answer: Answer) => answer.alternative);
  const correctAlternatives: number = await prisma.alternative.count({
    where: {
      id: {
        in: answers 
      },
      correct: true
    }
  });

  await prisma.ranking.create({
    data: {
      username: req.body.username,
      score: correctAlternatives,
      time: req.body.time
    }
  });

  res.status(200).json();
});

export default routes;