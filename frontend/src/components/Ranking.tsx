import { useState, useContext, useEffect } from "react";
import { api, useApi } from "../api";
import styled from "styled-components";

import RankedUser from "../interfaces/RankedUser";
import Answer from "../interfaces/Answer";

import GlobalInfoContext from "../context/GlobalInfoContext";

const Container = styled.div`
  box-shadow: inset 0 -.25rem 0 #000;
`;

const Ranking = ({ reset, answers }: { reset: () => void, answers: Array<Answer> }) => {
  const { data: ranking, isLoading, mutate } = useApi<Array<RankedUser>>('/ranking');
  const { context: globalInfoContext } = useContext(GlobalInfoContext);

  const userRank = async () => {
    try {
      const { data } = await api.post('ranking', {
        username: globalInfoContext?.user?.name,
        answers
      });
      mutate();
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    
    mutate();
  });

  return (
    <>
      <h4 className="mb-4">Parabéns! Você completou o Quiz com N acertos!</h4>
      <Container className="border border-dark rounded-2 p-3">
        <h5 className="text-center">Ranking</h5>
        {
          isLoading ?
          <div className="spinner spinner-border" /> :
          <table className="table border-dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Usuário</th>
                <th>Acertos</th>
                <th>Tempo</th>
              </tr>
            </thead>
            <tbody>
              {
                ranking?.map((ranked: RankedUser, i: number) => (
                  <tr key={ranked.id}>
                    <td>{i+1}</td>
                    <td>{ranked.username}</td>
                    <td>{ranked.correct}/10</td>
                    <td>{ranked.time}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        }
        
      </Container>
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-primary"
          onClick={() => reset()}
        >
          Jogar novamente
        </button>
      </div>
    </>
  );
};

export default Ranking;