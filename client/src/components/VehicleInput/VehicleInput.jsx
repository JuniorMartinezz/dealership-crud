import React from "react";
import { Container } from "./VehicleInput_styled";

function VehicleInput(){
    return(
        <Container>
            <div>
                <form action="" method="post">
                    <h3>Registro de veículo</h3>
                    <select name="vehicle-type" id="vehicle-type">
                        <optgroup>
                            <option value="car">Carro</option>
                            <option value="motorcycle">Moto</option>
                        </optgroup>
                    </select>
                    <label htmlFor="brand">Marca</label>
                    <input type="text" name="brand" id="brand" />
                    <label htmlFor="model">Modelo</label>
                    <input type="text" name="model" id="model" />
                    <label htmlFor="color">Cor</label>
                    <input type="text" name="color" id="color" />
                </form>
            </div>
        </Container>
    )
}

export default VehicleInput;