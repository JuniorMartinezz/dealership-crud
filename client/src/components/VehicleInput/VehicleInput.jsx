import React, { useState } from "react";
import { Container, Button, VehicleRegister } from "./VehicleInputStyled";

function VehicleInput(){
    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    }

    const handleOnClickButton = () => {
        console.log(values);
    }
    return(
        <Container>
                <VehicleRegister>
                    <h3>Registro de veículo</h3>
                    
                    <select name="vehicle-type" id="vehicle-type">
                        <option value="car">Tipo de veículo</option>
                        <option value="car">Carro</option>
                        <option value="motorcycle">Moto</option>
                    </select>
                
                    <input 
                        type="text" 
                        name="brand" 
                        id="brand" 
                        placeholder="Marca"
                        onChange={handleChangeValues}
                    />
                
                    <input 
                        type="text" 
                        name="model" 
                        id="model" 
                        placeholder="Modelo"
                        onChange={handleChangeValues}
                    />
                
                    <input 
                        type="text" 
                        name="color" 
                        id="color" 
                        placeholder="Cor"
                        onChange={handleChangeValues}
                    />
                    
                    <Button onClick={handleOnClickButton}>Cadastrar</Button>
                </VehicleRegister>
        </Container>
    )
}

export default VehicleInput;