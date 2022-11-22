import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(/background.png);
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 400px;
  padding: 1rem;
  box-shadow: inset 0 -.25rem #dee2e6;
  border-radius: .5rem;
`;

const Input = styled.input`
  background: #fff;
  width: 100%;
  border: 1px solid #dee2e6;
  box-shadow: inset 0 -.25rem #dee2e6;
  border-radius: .25rem;
  padding: .5rem;
`;

export default function Home() {
  return (
    <Container>
      <Form>
        <Input placeholder='Seu nome'/>
        <button className="btn btn-primary w-50 align-self-center mt-3">Jogar</button>
      </Form>
    </Container>
  );
}
