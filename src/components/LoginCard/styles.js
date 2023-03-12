import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    width: 30vw;
    background-color: #323238;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 1080px){
        width: 95%;
    }
`;

export const Header = styled.h1`
    font-size: 40px;
`;

export const Title = styled.div`
    margin-bottom: 1rem;
    padding-top: 1em;
    color: #00B37E;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const Button = styled.button`
    width: 15em;
    height: 3em;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #00B37E;
    margin-bottom: 1em;
    margin-top: 2em;
`;

export const Redirect = styled.div`
    width: 323px;
    display: flex;
    color: white;
    margin-top: 1em;
    font-size: 14px;
`;


export const LinkRedirect = styled.p`
    margin-left: 3px;
    color: #00B37E;
`;


