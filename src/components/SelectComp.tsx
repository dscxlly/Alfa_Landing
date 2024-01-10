import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'carro', label: 'Carro'},
    { value: 'moto', label: 'Moto'},
    { value: 'caminhão', label: 'Caminhão'},
]

const SelectComp = () => {
    return (
        <Select 
            options={options}
            isMulti
            placeholder='Qual o seu veículo?'
            classNames={{ control: (state) =>
                state.isMulti ? 'p-1' : 'p-8'
            }}
            className='p-1 rounded-md'
        />
    )
}

export default SelectComp;