import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function DestaquesCards() {
    const [destaques, setDestaques] = useState([]);

    useEffect(() => {
        async function carregar() {
            const response = await fetch(`${API_URL}/api/destaques/obter.php`);
            const dados = await response.json();
            setDestaques(dados);
        }

        carregar();
    }, []);
    if(!destaques.map) {
        return "";
    }
    return (
        destaques.map((destaque, index) => (
            <div className="game-card" key={ index }>
                <button href="#"
                    data-game-url={ destaque.url }
                    data-game-title={ destaque.titulo }
                    data-game-desc={ destaque.descricao }
                    data-game-imagem={ `${API_URL}/src${destaque.imagem}` }>
                    <div className="row min-vh-50 h-100 align-content-center">
                        <h2 className="rounded-left bg-dark my-0 py-1 rounded">{ destaque.titulo }</h2>
                        <div className="bg-dark border border-light" 
                            style={{ 
                                height: "150px", 
                                background: `url(${API_URL}/src${destaque.imagem}) 0% 0%`, 
                                backgroundSize: 'cover',
                                backgroundPosition: 'center' }}>
                        </div>
                    </div>
                </button>
            </div>
        ))
    );
}

export default DestaquesCards;