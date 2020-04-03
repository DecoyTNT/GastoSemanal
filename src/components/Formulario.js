import React, { useState } from 'react';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);

    const guardarNombre = e => {
        setNombre(e.target.value);
    };

    const guardarCantidad = e => {
        setCantidad(parseInt(e.target.value, 10));
    };

    const agregarGasto = e => {
        e.preventDefault();
    };

    return (
        <form onSubmit={agregarGasto}>
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

export default Formulario;
