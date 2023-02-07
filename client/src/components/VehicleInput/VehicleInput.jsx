import React, { useState } from "react";
import { Container, Button, VehicleRegister } from "./VehicleInputStyled";

function VehicleInput(){
    const [values, setValues] = useState();

    const handleChangeValues = (value) => { //no momento em que o input detecta mudanças, essa variável se encarrega de criar um objeto com o name do input seguido do valor inserido pelo usuário
        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    }

    const handleOnClickButton = () => {
        console.log(values);
    }

    const handleSelectType = () => {
        document.querySelector('#vehicle-type-text').style.display = 'none';
    }

    return(
        <Container>
                <VehicleRegister>
                    <h3>Registro de veículo</h3>
                    
                    <select name="vehicle-type" id="vehicle-type" onChange={handleChangeValues} onClick={handleSelectType} required>
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
                        name="release-date"
                        id="release-date"
                        onChange={handleChangeValues}
                        required
                    />
                    
                    <Button onClick={handleOnClickButton}>Cadastrar</Button>
                </VehicleRegister>
        </Container>
    )
}

export default VehicleInput;