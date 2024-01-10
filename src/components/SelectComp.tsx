import React, { useState } from 'react';
import Select from 'react-select';

const options: { value: string; label: string }[] = [
    { value: 'carro', label: 'Carro'},
    { value: 'moto', label: 'Moto'},
    { value: 'caminhão', label: 'Caminhão'},
];

const SelectComp = () => {
    const [values, setValues] = useState<string[]>([]);

    return (
        <Select 
            options={options}
            value={values.map((value) => options.find(option => option.value === value) || null)}
            onChange={(selectedOptions) => {
                setValues(selectedOptions.map((option) => option?.value || ''));
            }}
            isMulti
            placeholder='Qual o seu veículo?'
            classNames={{ control: (state) =>
                state.isMulti ? 'p-1' : 'p-8'
            }}
            className='p-2 rounded-xl sm:mx-4'
        />
    );
}

export default SelectComp;