import React, { useState } from "react";
import { Container, Button, VehicleRegister } from "./VehicleInputStyled";
import Axios from 'axios';

function VehicleInput(){
    const [values, setValues] = useState();

    const handleChangeValues = (value) => { //no momento em que o input detecta mudanças, essa variável se encarrega de criar um objeto com o name do input seguido do valor inserido pelo usuário
        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    }

    const handleSelectType = () => {
        document.querySelector('#vehicle-type-text').style.display = 'none';
    }

    const handleOnClickButton = () => {
        Axios.post("http://localhost:3001/register", {
            type: values.type,
            brand: values.brand,
            model: values.model,
            color: values.color,
            release_date: values.release_date,
        }).then((response) => {
            console.log(response)
        });
    };

    return(
        <Container>
                <VehicleRegister>
                    <h3>Registro de veículo</h3>
                    
                    <select name="type" id="type" onChange={handleChangeValues} onClick={handleSelectType} required>
                        <option value="vehicle-type-text" id="vehicle-type-text">Tipo de veículo</option>
                        <option value="carro">Carro</option>
                        <option value="motocicleta">Moto</option>
                    </select>
                
                    <input 
                        type="text" 
                        name="brand" 
                        id="brand" 
                        placeholder="Marca"
                        onChange={handleChangeValues} //cuida a mudança de valores nos campos input
                        required
                    />
                
                    <input 
                        type="text" 
                        name="model" 
                        id="model" 
                        placeholder="Modelo"
                        onChange={handleChangeValues}
                        required
                    />
                
                    <input 
                        type="text" 
                        name="color" 
                        id="color" 
                        placeholder="Cor"
                        onChange={handleChangeValues}
                        required
                    />

                    <input 
                        type="date"
                        name="release_date"
                        id="release_date"
                        onChange={handleChangeValues}
                        required
                    />
                    
                    <Button onClick={handleOnClickButton}>Cadastrar</Button>
                </VehicleRegister>
        </Container>
    )
}

export default VehicleInput;