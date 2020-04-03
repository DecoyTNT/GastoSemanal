import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({ setGasto, setCrearGasto, restante }) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const guardarNombre = e => {
        setNombre(e.target.value);
    };

    const guardarCantidad = e => {
        setCantidad(parseInt(e.target.value, 10));
    };

    const agregarGasto = e => {
        e.preventDefault();
        // console.log(restante);
        // console.log(cantidad > restante);
        if (cantidad <= 0 || isNaN(cantidad) || nombre.trim() === '' || cantidad > restante) {
            return setError(true);
        }
        setError(false);

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        };

        setGasto(gasto);
        setCrearGasto(true);

        // Resetear el form
        setNombre('');
        setCantidad(0);
    };

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o la cantidad del gasto es incorrecta" /> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input type="text" className="u-full-width" placeholder="Ej. Transporte" value={nombre} onChange={guardarNombre} />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input type="number" className="u-full-width" placeholder="Ej. 300" value={cantidad} onChange={guardarCantidad} />
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto" />
        </form>
    );
};

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired,
    restante: PropTypes.number.isRequired
};

export default Formulario;
