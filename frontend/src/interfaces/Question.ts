export interface Alternative {
  id: number,
  phrase: string
};

interface Question {
  id: number,
  phrase: string,
  alternatives: Array<Alternative>
};

export default Question;