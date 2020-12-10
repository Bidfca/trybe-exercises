import { Component } from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;
        return (
        <div className="pokemon">
            <p>{name}</p>
            <p>{type}</p>
            <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
            <img src={image} alt={name}/>
        </div>
        )
    }
}

Pokemon.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
        value: PropTypes.number,
        measurementUnit: PropTypes.string
    }),
    image: PropTypes.number
}

export default Pokemon;