import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {
    const [presupuesto, setPresupuesto] = useState(0);
    const [restante, setRestante] = useState(0);
    const [mostrarPregunta, actualizarPregunta] = useState(true);

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
                                <Formulario />
                            </div>
                            <div className="one-half column">2</div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
