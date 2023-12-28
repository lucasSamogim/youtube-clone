import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* max-width: 1600px; */
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

