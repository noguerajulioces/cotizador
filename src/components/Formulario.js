import React, { useState } from 'react';
import styled from '@emotion/styled';
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from '../Helper';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const ButtonA = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .5s ease;
    margin-top: 2rem;

    &:hover{
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;
const Formulario = () => {

    //state for 
    const [data, saveData] = useState({
        marca: '',
        year: '',
        plan: ''
    });
    const [error, saveError] = useState(false);

    // extraer los valores del state
    const { marca, year, plan} = data;

    // leer los datos del formulario y colocar en state
    const getInformation = e => {
        saveData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    //when the user press submit
    const cotizarSeguro = e => {
        e.preventDefault();

        if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            saveError(true);
            return;
        }
        saveError(false);

        //base 

        let resultado = 2000;

        // obtener la direrencia
        const diferencia = obtenerDiferenciaYear(year);

        // por cada año restar el 3%
        resultado -= ((diferencia * 3) * resultado) / 100;

        // cada marca tiene un valor
        // Americano 15%
        // Asiatico 5%
        // Europeo 30%
        resultado = calcularMarca(marca) * resultado;

        const incrementoPlan = obtenerPlan(plan);
        resultado = parseFloat( incrementoPlan * resultado).toFixed(2);

        console.log(resultado)
        // casico 20%, completo 50% 


        //openter el total
    }

    return ( 
        <>
            <form
                onSubmit={cotizarSeguro}
            >
                { error ? <Error>Todos los campos son obligatorios</Error> : null }
                <Campo>
                    <Label htmlFor="">Marca</Label>
                    <Select
                        name="marca"
                        value={marca}
                        onChange={getInformation}
                    >
                        <option value="">Seleccione</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">asiatico</option>
                    </Select>
                </Campo>

                <Campo>
                    <Label htmlFor="">Año</Label>
                    <Select
                        name="year"
                        value={year}
                        onChange={getInformation}
                    >
                        <option value="">Seleccione</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                    </Select>
                </Campo>

                <Campo className="">
                    <Label>Plan</Label>
                    <InputRadio type="radio"
                            name="plan"
                            value= "basico"
                            checked={plan === "basico"}
                            onChange={getInformation}
                    /> Básico

                    <InputRadio type="radio"
                            name="plan"
                            value= "completo"
                            checked={plan === "completo"}
                            onChange={getInformation}
                    /> Completo
                </Campo>

                <Campo>
                    <ButtonA type="submit">
                        Cotizar
                    </ButtonA>
                </Campo>
            </form>
        </>
     );
}
 
export default Formulario;