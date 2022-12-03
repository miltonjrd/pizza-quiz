import { useState, useContext, FormEvent, ChangeEvent } from "react";
import { NextPage } from "next"
import styled from "styled-components";

// interfaces
import GlobalInfo from "../interfaces/GlobalInfo";

// context 
import GlobalInfoContext, { GlobalInfoContextInterface } from "../context/GlobalInfoContext";
import PopupContext from "../context/PopupContext";

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

const AuthForm: NextPage = () => {
  const [form, setForm] = useState<{ name?: string}>({
    name: ''
  });

  const { setContext: setGlobalInfoContext }: GlobalInfoContextInterface = useContext(GlobalInfoContext);
  const { dispatchPopup } = useContext(PopupContext);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    /*const interval = setInterval(() => {
      setTime(state => state+1);
    }, 1000);*/

    if (form.name?.includes(' ')) 
      return dispatchPopup({
        title: 'Erro',
        text: 'Seu nome não pode conter espaços!'
      });

    setGlobalInfoContext((state: GlobalInfo): GlobalInfo => ({ 
      ...state, 
      user: { 
        name: form.name!
      }
    }));
    setForm({ name: '' });
    
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setForm({ [evt.target.name]: evt.target.value });
  };

  return (
    <Form className="text-center" onSubmit={handleSubmit}>
      <h3>Pizza Quiz</h3>
      <p style={{ lineHeight: 1.2 }}>O que você sabe sobre pizza? 🍕<br />Teste o seu conhecimento com este quiz!</p>
      <Input name="name" placeholder='Seu nome' className="mt-4" value={form.name} onChange={handleInputChange} autoComplete="off" />
      <button className="btn btn-primary w-50 align-self-center mt-3" type="submit">Jogar</button>
    </Form>
  )
};

export default AuthForm;