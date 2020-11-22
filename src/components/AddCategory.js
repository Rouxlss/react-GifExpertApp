import React from 'react'
import {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        let value = e.target.value;
        setInputValue(value);
    }

    const handleSubmit = (e) => {
        console.log('Submit hecho');
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            setCategories(cats=>[inputValue, ...cats]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit} action="">
            <input 
                type="text"
                value={inputValue}
                placeholder='Buscar gifs'
                onChange={ handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;