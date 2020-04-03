import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
    const [presupuesto, setPresupuesto] = useState(0);
    const [restante, setRestante] = useState(0);
    const [mostrarPregunta, actualizarPregunta] = useState(true);
    const [gastos, setGastos] = useState([]);

    const agregarNuevoGasto = gasto => {
        setGastos([...gastos, gasto]);
        console.log(gastos);
    };

    return (
        <div className="container">
            <header>
                <h1>Gasto Semanal</h1>
                <div className="contenido-principal contenido">
                    {mostrarPregunta ? (
                        <Pregunta setPresupuesto={setPresupuesto} setRestante={setRestante} actualizarPregunta={actualizarPregunta} />
                    ) : (
                        <div className="row">
                            <div className="one-half column">
                                <Formulario agregarNuevoGasto={agregarNuevoGasto} />
                            </div>
                            <div className="one-half column">
                                <Listado gastos={gastos} />
                                <ControlPresupuesto presupuesto={presupuesto} restante={restante} />
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
