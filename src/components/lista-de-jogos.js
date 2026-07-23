import { useEffect, useState } from "react";

function ListaDeJogos() {
    let gameItems = [];
    const [jogos, setJogos] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        async function carregar(){
            const response = await fetch(`${API_URL}/api/jogos/obter.php`);
            const dados = await response.json();
            setJogos(dados);
        }
        carregar();
    }, [])
    if(!jogos || jogos && !jogos.length) {
        return;
    }
    return (jogos.map((game, index) => {
            gameItems.push(game);
            return <div key={index} className='game-card'>
                <button 
                    data-game-url={game.url}
                    data-game-title={game.titulo}
                    data-game-desc={game.descricao}
                    data-game-imagem={game.imagem}
                    onClick={
                        function () {
                            setTimeout(() => {
                                window.location.href = game.url;
                            }, 200);
                        }
                    }>
                    <div className="row min-vh-50 h-100 align-content-center">
                        <div className="bg-dark border border-light" 
                            style={
                                {
                                    height: '150px', 
                                    background: `url(${API_URL}/src${game.imagem})`, 
                                    backgroundSize: 'cover'
                                }}>
                            {/* <p>{game.descricao}</p> 
                            <div className="link btn my-2">Jogar</div>*/}
                        </div>
                        <h2 className="rounded-left bg-dark my-0 py-1 rounded">
                            { game.titulo }
                        </h2>
                    </div>
                </button>
            </div>
        }))
}

export default ListaDeJogos;