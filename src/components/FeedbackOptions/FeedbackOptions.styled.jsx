import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 28px;
  text-align: center;
  background-color: white;
  text-transform: capitalize;

  cursor: pointer;

  border: none;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  :hover {
    background-color: lightblue;
    color: white;
  }
`;
