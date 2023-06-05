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
  background-color: #fff1ff;
  padding: 20px;
  border-radius: 8px;
  height: 400px;
  width: 600px;
`;

export const Title = styled.h2`
    margin-top: 15px;
    color: blue;
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
    background-color: ${props => props.confirm ? '#00B37E' : 'blue'};
    border-color: ${props => props.confirm ? '#00B37E' : 'blue'};
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const InputTitle = styled.p`
  font-weight: bold;
  color: #000;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
`

export const Input = styled.input`
    border-radius: 20px;
    height: 40px;
    border-style: none;
    padding-left: 15px;
    font-weight: bold;
    color: '#000000';
    background-color: #80808040;
`