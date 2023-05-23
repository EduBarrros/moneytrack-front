import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  height: 200px;
  width: 600px;
`;

export const Title = styled.h2`
    margin-top: 15px;
    color: red;
`

export const SubTitle = styled.p`
    margin-top: 15px;
    color: #000;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 600px;
    margin-top: 30px;
`


export const Button = styled.button<{ confirm?: boolean }>`
    width: 150px;
    height: 50px;
    border-radius: 8px;
    background-color: ${props => props.confirm ? '#00B37E' : '#ff0000'};
    border-color: ${props => props.confirm ? '#00B37E' : '#ff0000'};
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`