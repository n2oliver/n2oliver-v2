import { useEffect, useState } from "react";
import { showGameInHighlight } from "../js/feed";

const API_URL = process.env.REACT_APP_API_URL;

function RecentesCards() {
    const [recentes, setRecentes] = useState([]);

    useEffect(() => {
        async function carregar() {
            const response = await fetch(`${API_URL}/api/jogos/obter.php`);
            const dados = await response.json();
            setRecentes(dados);
        }

        carregar();
    }, []);
    if (!recentes.map) {
        return "";
    }
    recentes.length && showGameInHighlight(recentes[0]);
    return (
        recentes.map((recente, index) => (
            <div className="game-card" key={index} >
                <button
                    data-game-url={recente.url}
                    data-game-title={recente.titulo}
                    data-game-desc={recente.descricao}
                    data-game-imagem={`${API_URL}/src${recente.imagem}`}>
                    <div className="row min-vh-50 h-100 align-content-center">
                        <h2 className="rounded-left bg-dark my-0 py-1 rounded">{recente.titulo}</h2>
                        <div className="bg-dark border border-light"
                            style={{ 
                                height: "150px", 
                                background: `url(${API_URL}/src${recente.imagem}) 0% 0%`, 
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center' }}>
                        </div>
                    </div>
                </button>
            </div>
        ))
    );
}

export default RecentesCards;