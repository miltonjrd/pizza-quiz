// dependencies
import { useEffect, useState, useContext } from 'react';
import GlobalInfoContext, { GlobalInfoContextInterface } from '../src/context/GlobalInfoContext';
import GlobalInfo from '../src/interfaces/GlobalInfo';
import { api } from '../src/api';
import styled from 'styled-components';

// types
import type { FormEvent, ChangeEvent } from 'react';

// interfaces
import Question from '../src/interfaces/Question';
import RankedUser from '../src/interfaces/RankedUser';
import Answer from '../src/interfaces/Answer';

// components
import QuestionForm from '../src/components/QuestionForm';
import Ranking from '../src/components/Ranking';

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Input = styled.input`
  background: #fff;
  width: 100%;
  border: 1px solid #dee2e6;
  box-shadow: inset 0 -.25rem #dee2e6;
  border-radius: .25rem;
  padding: .5rem;
`;

const Home = ({ questions }: { questions: Array<Question> }) => {
  const [form, setForm] = useState<{ name?: string}>({
    name: ''
  });
  const [time, setTime] = useState<number>(0);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);
  const [answers, setAnswers] = useState<Array<Answer>>([]);

  const { context: globalInfoContext, setContext: setGlobalInfoContext }: GlobalInfoContextInterface = useContext(GlobalInfoContext);

  const handleControlledInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setForm({ [evt.target.name]: evt.target.value });
  };

  const handleNameSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    /*const interval = setInterval(() => {
      setTime(state => state+1);
    }, 1000);*/

    setGlobalInfoContext((state: GlobalInfo): GlobalInfo => ({ 
      ...state, 
      user: { 
        name: form.name! 
      }
    }));
    setForm({ name: '' });
    
  };

  const filteredQuestions = questions.filter(({ id }) => answers.filter(ans => ans.question === id).length === 0);
  console.log(answers)

  return (
    <Wrapper>
      <Container >
        {
          !globalInfoContext?.user?.name ?
          <Form className="text-center" onSubmit={handleNameSubmit}>
            <h3>Pizza Quiz</h3>
            <p style={{ lineHeight: 1.2 }}>O que você sabe sobre pizza?<br />Teste o seu conhecimento com este quiz!</p>
            <Input name="name" placeholder='Seu nome' className="mt-4" value={form.name} onChange={handleControlledInput} autoComplete="off" />
            <button className="btn btn-primary w-50 align-self-center mt-3" type="submit">Jogar</button>
          </Form> :
          filteredQuestions.length ?
          filteredQuestions.map((question) => (
            <QuestionForm 
              key={question.id}
              questionNumber={currentQuestionNumber}
              next={(alternativeId) => {
                setAnswers(state => [...state, { question: question.id, alternative: alternativeId }]);
                setCurrentQuestionNumber(state => state+1);
              }}
              previous={() => {
                setAnswers(state => state.filter((ans => ans.question !== question.id)));
                setCurrentQuestionNumber(state => state+1);
              }}
              {...question}
            />
          ))
          [Math.floor(Math.random()*(filteredQuestions.length))] :
          <Ranking 
            answers={answers}
            reset={() => {
              setCurrentQuestionNumber(1);
              setAnswers([]);
              setGlobalInfoContext((state) => ({ ...state, user: { name: '' } }));
            }}
          />
          
        }
      </Container>
      
    </Wrapper>
  );
}

export const getStaticProps = async () => {
  const { data: questions } = await api.get('/questions');

  return {
    props: {
      questions
    }
  };
};

export default Home;