import Answer from './src/interfaces/Answer';

declare global {
  namespace Express {
    interface Request {
      answers?: Answer[]
    }
  }
}

export {};