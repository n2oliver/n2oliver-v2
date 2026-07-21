import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function NoticiasCards() {
    const [noticias, setNoticias] = useState([]);
    function irParaNoticia(event) {
        window.location.href=`/noticias/${event.target.closest('.card').attributes['noticia-id'].value}`
    }
    useEffect(() => {
        async function carregar() {
            const response = await fetch(`${API_URL}/api/noticias/obter.php`);
            const dados = await response.json();
            setNoticias(dados);
        }

        carregar();
    }, []);
    return noticias && noticias.results && (noticias.results.map((noticia, index) => (
            <div className="card" key={noticia.id} onClick={irParaNoticia} noticia-id={noticia.id}>
              <div className="img" style={{backgroundImage: `url(${API_URL}/src${noticia.imagem})`}}></div>
              <strong>{noticia.titulo}</strong>
            </div>
        )));
}

export default NoticiasCards;