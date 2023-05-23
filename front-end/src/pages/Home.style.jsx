import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeTitle = styled.h1`
  font-size: 32px;
  text-align: center;
  text-decoration: underline;
  color: #242038;
  margin: 0px 0px 30px;
`;

export const TableWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  background-color: #F7ECE1;

  thead tr th {
    background-color: #242038;
    color: #ffffff;
  }
`;
