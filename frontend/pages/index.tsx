// dependencies
import { useEffect, useState, useContext } from 'react';
import { NextPage } from 'next';
import GlobalInfoContext, { GlobalInfoContextInterface } from '../src/context/GlobalInfoContext';
import GlobalInfo from '../src/interfaces/GlobalInfo';
import { api, useApi } from '../src/api';
import styled from 'styled-components';

// types
import type { FormEvent, ChangeEvent } from 'react';

// interfaces
import Question from '../src/interfaces/Question';
import RankedUser from '../src/interfaces/RankedUser';
import Answer from '../src/interfaces/Answer';

// components
import AuthForm from '../src/components/AuthForm';
import QuestionForm from '../src/components/QuestionForm';
import Ranking from '../src/components/Ranking';
import Popups from '../src/components/Popups';
import Timer from '../src/components/Timer';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(/background.png);
  height: 100%;
`;

const Container = styled.div`
  background: #fff;
  padding: 1rem;
  box-shadow: inset 0 -.25rem #dee2e6;
  border-radius: .5rem;
`;

interface Props {
  questions: Question[]
}

const Home: NextPage<Props> = ({ questions }) => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);
  const [answers, setAnswers] = useState<Array<Answer>>([]);
  const [doSaveTime, setDoSaveTime] = useState<boolean>(false);

  const { context: globalInfoContext, setContext: setGlobalInfoContext }: GlobalInfoContextInterface = useContext(GlobalInfoContext);

  const { data: rankingData, isLoading, mutate: rankingMutate } = useApi<Array<RankedUser>>('/ranking');

  const filteredQuestions = questions.filter(({ id }) => answers.filter(ans => ans.question === id).length === 0);

  useEffect(() => {
    // salva o usuario no ranking caso as perguntas tenham acabado
    if (!filteredQuestions.length) {
      setDoSaveTime(true);
      userRank();
    }
  }, [answers]);

  const userRank = async () => {
    try {
      const { data } = await api.post('ranking', {
        username: globalInfoContext?.user?.name,
        answers,
        time: globalInfoContext?.time
      });

      // atualiza o ranking
      rankingMutate();
    } catch (err) {
      console.log(err)
    }
  };


  return (
    <Wrapper>
      <Popups />
      <Container >
        {
          globalInfoContext?.user?.name && filteredQuestions.length &&
          <Timer />
        }
        {
          !globalInfoContext?.user?.name ?
          <AuthForm /> :
          filteredQuestions.length ?
          filteredQuestions.map((question) => (
            <QuestionForm 
              key={question.id}
              questionNumber={currentQuestionNumber}
              saveAnswer={(chosenAlternativeId: number) => {
                setAnswers(state => [...state, { question: question.id, alternative: chosenAlternativeId }]);
              }}
              next={() => {
                setCurrentQuestionNumber(state => state+1);
              }}
              previous={() => {
                setAnswers(state => state.filter((ans => ans.question !== question.id)));
                setCurrentQuestionNumber(state => state-1);
              }}
              {...question}
            />
          ))
          [Math.floor(Math.random()*(filteredQuestions.length))] :
          <Ranking 
            data={rankingData}
            reset={() => {
              setCurrentQuestionNumber(1);
              setAnswers([]);
              setGlobalInfoContext((state: GlobalInfo) => ({ ...state, user: { name: '' } }));
            }}
          />
          
        }
      </Container>
      
    </Wrapper>
  );
}

export const getStaticProps = async () => {
  const { data: questions } = await api.get('/questions');

  function shuffle(array: any[]) {
    let m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

  // mistura as alternativas antes de mandar pra props
  return {
    props: {
      questions: questions.map((question: Question) => ({ ...question, alternatives: shuffle(question.alternatives) }))
    }
  };
};

export default Home;