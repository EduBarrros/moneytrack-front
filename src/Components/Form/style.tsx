import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #323238;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;

    @media (max-width: 750px) {
        display: grid;
    }
`;

export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #00B37E;
`

export const SubContainer = styled.div`

`

export const Title = styled.h2`
    color: white;
`

export const Input = styled.input``

export const Text = styled.p`
    color: white;
    margin-left: 10px;
`

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
`