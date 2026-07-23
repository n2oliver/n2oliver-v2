import { useEffect, useState } from "react";


function NoticiasCards() {
    const API_URL = process.env.REACT_APP_API_URL;

    const [noticias, setNoticias] = useState([]);

    function irParaNoticia(event) {
        window.location.href = `/noticias/${event.target.closest('.card').attributes['data-noticia-id'].value}`
    }
    useEffect(() => {
        async function carregar() {
            const response = await fetch(`${API_URL}/api/noticias/obter.php`,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ page: 1, limit: 10 })
                }
            );
            const dados = await response.json();
            setNoticias(dados.results);
        }

        carregar();
    }, []);
    if (!noticias) {
        return;
    }
    return (noticias.map((noticia, index) => (
        <div className="card" key={noticia.id} onClick={irParaNoticia} data-noticia-id={noticia.id}>
            <div className="img" style={{ backgroundImage: `url(${API_URL}/src${noticia.imagem})` }}></div>
            <strong dangerouslySetInnerHTML={{ __html: noticia.titulo }}></strong>
        </div>
    )));
}

export default NoticiasCards;