import React from 'react';
import '../css/home.css';
import '../css/games.css';
import NoticiasBar from '../components/noticiasbar.js';
import DestaqueImagem from '../components/destaque-imagem.js';
import VerTodasAsNoticias from '../components/ver-todas-as-noticias.js';

function Home() {
    return (<>
        <main className="w-100 m-auto col-md-12 p-0">
            <DestaqueImagem />
        </main>
        <NoticiasBar />
        <VerTodasAsNoticias />
    </>);
}

export default Home;