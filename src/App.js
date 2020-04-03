import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
    const [presupuesto, setPresupuesto] = useState(0);
    const [restante, setRestante] = useState(0);
    const [mostrarPregunta, actualizarPregunta] = useState(true);
    const [gastos, setGastos] = useState([]);
    const [gasto, setGasto] = useState({});
    const [crearGasto, setCrearGasto] = useState(false);

    useEffect(() => {
        if (crearGasto) {
            setGastos([...gastos, gasto]);

            setRestante(restante - gasto.cantidad);

            setCrearGasto(false);
        }
    }, [gasto, crearGasto, gastos, restante]);

    // const agregarNuevoGasto = gasto => {
    //     if (restante - gasto.cantidad < 0) {
    //         return;
    //     }
    //     setGastos([...gastos, gasto]);
    //     setRestante(restante - gasto.cantidad);
    //     console.log(gastos);
    // };

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
                                <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} restante={restante} />
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
