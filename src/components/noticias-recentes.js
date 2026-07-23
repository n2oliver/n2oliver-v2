import { useEffect, useState } from "react";
import $ from "jquery";
import { createRoot } from "react-dom/client";
let noticiasRoot = null;

let pagina = 0;
const API_URL = process.env.REACT_APP_API_URL;

function NoticiasRecentes() {

    const [noticias, setNoticias] = useState([]);

    const id = Number(window.location.pathname.substring(1))
    id && !isNaN(id) ? toggleNoticiaContent(null, id) : toggleNoticiaContent(null, 10);



    $(document).ready(function (event) {
        buscarNoticias(event);
        $('#page-buttons .btn').click(buscarNoticias);
    });

    function irParaNoticia(event) {
        window.location.href = `/noticias/${event.target.closest('.card').attributes['data-noticia-id'].value}`
    }
    useEffect(() => {
        async function carregar() {
            const response = await fetch(`${API_URL}/api/noticias/obter.php`);
            const dados = await response.json();
            if (dados.page) pagina = dados.page;
            setNoticias(dados.results);
        }

        carregar();
    }, []);
    if (!noticias) {
        return;
    }
    return (noticias.map((noticia, index) => (
        <div key={noticia.id} className="border rounded shadow-sm mb-1 ms-1 bg-light" style={{ width: "100%", cursor: "pointer" }} onClick={(event, noticia) => toggleNoticiaContent(event, noticia.id)}>
            <div className="p-2 noticia-card">
                <div className="item d-flex align-items-center gap-2">
                    {noticia.imagem ? <div className="recentes-imagem" style={{ backgroundImage: `url(${API_URL}/src${noticia.imagem})` }}></div> : ''}
                    <div className="d-flex flex-column">
                        <div className="mb-1 text-light" style={{ cursor: "pointer" }} onClick={(event, noticia) => toggleNoticiaContent(event, noticia.id)}>
                            {noticia.titulo}
                        </div>

                        <small className="text-light">
                            Publicado em {noticia.data_publicacao}
                            por {noticia.autor}
                            {noticia.categoria ? ` — <em>${noticia.categoria}</em>` : ''}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )));
}
function setContent(index) {
    const obj = { id: index };
    $.ajax({
        url: `${API_URL}/api/noticias/obter-por-id.php`,
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify(obj),
        success: function (response) {
            const contentDiv = document.getElementById('noticia-content');
            if (contentDiv) {
                contentDiv.innerHTML = response.conteudo;
                $("#imagem-background").css("background-image", `url(${API_URL}/src${response.imagem})`);
                $("#imagem-background").html(response.titulo);
                $("#imagem-background").append(response.resumo);
            }
        },
        error: function (xhr) {
            alert('Erro ao carregar a notícia.');
        }
    });
}
function toggleNoticiaContent(e, index) {
    const elementoExiste = e && e.target;
    if (elementoExiste &&
        (e.target.localName !== 'button' &&
            e.target.localName !== 'a' &&

            e.target.parentElement.localName !== 'button' &&
            e.target.parentElement.localName !== 'a')) {

        setContent(index);
        if (e !== null) {
            document.getElementById('noticia').scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        setContent(index);
    }
}
function avancar(event) {
    pagina = pagina + 1;
    buscarNoticias(event);
}

function voltar(event) {
    pagina = pagina > 1 ? pagina - 1 : 1;
    buscarNoticias(event);
}
async function buscarNoticias(event) {
    const component = $(event.target);
    const temNumero = Boolean(component.text());
    pagina = temNumero ? component.text() :
        event.target ? pagina : 1;
    $('#page-buttons .btn:not(#voltar):not(#avancar)')
        .removeClass('disabled')
        .prop('disabled', false);

    const response = await fetch(`${API_URL}/api/noticias/obter.php`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ page: pagina })
        });
    const dados = await response.json();
    if (dados.page) pagina = dados.page;

    const container = document.getElementById("noticias");

    if (!noticiasRoot) {
        noticiasRoot = createRoot(container);
    }
    noticiasRoot.render(
        <>
            {dados.results.map((noticia) => (
                <div key={noticia.id} className="border rounded shadow-sm mb-1 ms-1 bg-light" style={{ width: "100%", cursor: "pointer" }} onClick={(event) => toggleNoticiaContent(event, noticia.id)}>
                    <div className="p-2 noticia-card">
                        <div className="item d-flex align-items-center gap-2">
                            {noticia.imagem && (
                                <div
                                    className="recentes-imagem"
                                    style={{ backgroundImage: `url(${API_URL}/src${noticia.imagem})` }}
                                />
                            )}

                            <div className="d-flex flex-column">
                                <div
                                    className="mb-1 text-light"
                                    onClick={(event) => toggleNoticiaContent(event, noticia.id)}
                                >
                                    {noticia.titulo}
                                </div>

                                <small className="text-light">
                                    Publicado em {noticia.data_publicacao} por {noticia.autor}
                                    {noticia.categoria && <> — <em>{noticia.categoria}</em></>}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }</>
        );
}
export default NoticiasRecentes;
export { voltar, avancar, toggleNoticiaContent }