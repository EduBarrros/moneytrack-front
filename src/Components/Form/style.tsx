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
    font-weight: bold;
`

export const SubContainer = styled.div`

`

export const SubContainerSwitch = styled.div`
    display: flex;
    flex-direction: 'row';
    justify-content: center;
    align-items: center;
`

export const Title = styled.h2`
    color: white;
`

export const Input = styled.input`
    border-radius: 20px;
    height: 40px;
    border-style: none;
    padding-left: 15px;
    font-weight: bold;
    color: '#000000';
`

export const Text = styled.p<{ml?: string, mr?: string, color?: string}>`
    color: white;
    margin-right: ${props => props.mr ? props.mr : '0px'};
    margin-left: ${props => props.ml ? props.ml : '0px'};
    font-weight: bold;
    color: ${props => props.color ? props.color : ''};
`

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
`

export const EmptyImage = styled.img`
    height: 150px;
    width: 150px;
`

export const EmptyText = styled.h2`
    color: #fff;
    text-align: center;
`