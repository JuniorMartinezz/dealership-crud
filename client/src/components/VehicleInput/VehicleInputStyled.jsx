import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 1rem;

    h3{
        text-align: center;
    }
    
    input, select{
        width: 250px;
        border-radius: 10px;
        border: 0.5px solid;
        padding: 0.2rem;
        display: block;
        margin-bottom: 0.5rem;
    }

    .container-element{
        margin-bottom: 0.5rem;
    }
`
export const Button = styled.button`
    align-items: center;
    padding: 0.5rem;
    background-color: #175a5a;
    color: white;
    border: 0.5px solid;
    border-radius: 0.5rem;
`

export const VehicleRegister = styled.div`
    padding: 1rem;
    border: 1px solid;
    border-radius: 1rem;
    width: max-content;
    height: max-content;
    background-color: #175a5ab1;
`