import { useEffect } from "react";
import { NextPage } from "next";
import { useApi } from "../api";
import styled from "styled-components";

import RankedUser from "../interfaces/RankedUser";

const Container = styled.div`
  box-shadow: inset 0 -.25rem 0 #000;
`;

interface Props {
  reset: () => void,
  data: RankedUser[]
}

const Ranking: NextPage<Props> = ({ reset, data }) => {

  return (
    <>
      <h4 className="text-center mb-4">Parabéns! 🥳 <br/> Você completou o Quiz com N acertos!</h4>
      <Container className="border border-dark rounded-2 p-3">
        <h5 className="text-center">Ranking</h5>
        {
          !data ?
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
                data?.map((ranked: RankedUser, i: number) => (
                  <tr key={ranked.id}>
                    <td>{i+1}</td>
                    <td>{ranked.username}</td>
                    <td>{ranked.score}/10</td>
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