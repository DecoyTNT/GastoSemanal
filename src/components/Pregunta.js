import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({ setPresupuesto, setRestante, actualizarPregunta }) => {
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value));
    };

    const agregarPresupuesto = e => {
        e.preventDefault();
        // Validación
        if (cantidad <= 0 || isNaN(cantidad)) {
            return setError(true);
        }
        setError(false);

        // Despues de validar
        setPresupuesto(cantidad);
        setRestante(cantidad);
        actualizarPregunta(false);
    };

    return (
        <Fragment>
            <form onSubmit={agregarPresupuesto}>
                <h2>Coloca tu presupuesto</h2>
                {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
                <input type="number" className="u-full-width" placeholder="Coloca tu presupuesto" onChange={definirPresupuesto} />
                <input type="submit" className="button-primary u-full-width" value="Definir presupuesto" />
            </form>
        </Fragment>
    );
};

export default Pregunta;
