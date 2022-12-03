import { useEffect, useContext, useRef } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

import Popup from '../interfaces/Popup';

import PopupContext from '../context/PopupContext';

const Container = styled.div`
  position: fixed;
  top: 3rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  padding: 1rem;
`;

const PopupComponent: NextPage<Popup> = ({ title, text }) => {
  const LIFETIME = 3000;

  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    // o popup é destruido quando o tempo definido em LIFETIME chegar ao fim
    const timeout = setTimeout(() => {
      ref.current?.remove();
    }, LIFETIME);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Container ref={ref} tabindex={-1}>
      <h6>{title}</h6>
      <p>{text}</p>
    </Container>
  )
}

const Popups: NextPage = () => {
  const { activePopups } = useContext(PopupContext);

  return (
    <>
      {
        activePopups.map((popup, i) => (
          <PopupComponent key={i} {...popup} />
        ))
      }
    </>
  );
};

export default Popups