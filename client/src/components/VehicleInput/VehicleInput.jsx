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

    const handleSelected = () => {
        var x = document.getElementById('vehicle-type');
        var y = document.getElementsByName('vehicle-type-text');
        if(x.options[x.selectedIndex].value === 0){
           y.addAttribute("disabled", true); 
        }
    }

    return(
        <Container>
                <VehicleRegister>
                    <h3>Registro de veículo</h3>
                    
                    <select name="vehicle-type" id="vehicle-type" onChange={handleChangeValues} onClick={handleSelected}>
                        <option value="vehicle-type-text" name="vehicle-type-text">Tipo de veículo</option>
                        <option value="car" name="car">Carro</option>
                        <option value="motorcycle" name="moto">Moto</option>
                    </select>
                
                    <input 
                        type="text" 
                        name="brand" 
                        id="brand" 
                        placeholder="Marca"
                        onChange={handleChangeValues} //cuida a mudança de valores nos campos input
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