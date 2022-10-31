import React from 'react';
import PropTypes from 'prop-types';

class Field extends React.Component {
    
    render() {
        const { type, name, handleChange, value } = this.props
        return (
            <label htmlFor={ name }>
                <input type={ type } name={ name } value={ value } onChange={ handleChange }></input>
            </label>
        )
    }
}

Field.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default Field;