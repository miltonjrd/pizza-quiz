// dependencies
import { useState } from "react";
import styled from "styled-components";

// types
import type { FormEvent } from "react";

// interfaces
import Question from "../interfaces/Question";
import next from "next";

const Form = styled.form`
  width: 800px;
`;

const Alternative = styled.label`
  cursor: pointer;

  div {
    border: 1px solid #dee2e6;
    border-radius: .5rem;
    box-shadow: inset 0 -.25rem 0 #dee2e6;
    padding: 1rem;
    transition: box-shadow, border ease-out .2s;

    :hover {
      border-color: #FFDC8150;
      box-shadow: inset 0 -.25rem 0 #FFDC8150;
    }
  }

  input[type="radio"]:checked + div { 
    border-color: #FFDC81;
    box-shadow: inset 0 -.25rem 0 #FFDC81;
  }
`;

interface Props extends Question{
  questionNumber: number,
  next: (alternativeId: number) => void,
  previous: () => void
};

const QuestionForm = ({ id, phrase, alternatives, questionNumber, next, previous }: Props) => {
  const [alternative, setAlternative] = useState<number>(0);
  const [canSubmit, setCanSubmit] = useState(false);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    
    setCanSubmit(false);
    next(alternative);
  };

  const handleBackwardBtn = () => {
    setCanSubmit(false);
    previous();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h4 className="mb-4">{questionNumber}. {phrase}</h4>
      <div className="d-flex flex-column gap-3">
        {
          alternatives.map(alt => (
            <Alternative key={alt.id}>
              <input 
                type="radio" 
                name="answer" 
                className="d-none" 
                onChange={() => {
                  setCanSubmit(true);
                  setAlternative(alt.id);
                }} 
              />
              <div>{alt.phrase}</div>
            </Alternative>
          ))
        }
      </div>
      <div className="d-flex justify-content-between mt-4">
        <button 
          className="btn btn-danger fw-bold px-5"
          type="button"
        >
          Voltar
        </button>
        <button 
          className="btn btn-primary fw-bold px-5"
          type="submit"
          disabled={!canSubmit}
        >
          Próximo
        </button>
      </div>
    </Form>
  );
};

export default QuestionForm;