import React from 'react';
import styled from '@emotion/styled';

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
const Formulario = () => {
    return ( 
        <>
            <form>
                <Campo>
                    <Label htmlFor="">Marca</Label>
                    <Select>
                        <option value="">Seleccione</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">asiatico</option>
                    </Select>
                </Campo>

                <Campo>
                    <Label htmlFor="">Año</Label>
                    <Select>
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
                            defaultChecked
                    /> Básico

                    <InputRadio type="radio"
                            name="plan"
                            value= "completo"
                    /> Completo
                </Campo>

                <Campo>
                    <ButtonA type="button">
                        Cotizar
                    </ButtonA>
                </Campo>
            </form>
        </>
     );
}
 
export default Formulario;