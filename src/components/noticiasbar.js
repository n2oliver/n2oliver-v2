import React from 'react';
import { scrollDivX } from '../js/scroll-buttons.js';
import GameNoticias from './game-noticias.js';

function NoticiasBar() {
    return (
        <div className="d-flex justify-content-start row col-md-10 m-auto text-light mt-2 ubuntu">

            <div className="d-flex w-100 justify-content-between buttons">
                <button className="btn btn-lg btn-success m-1 h-0 rounded-circle" id="prev" aria-label="Aria Left"
                    onClick={() => scrollDivX('game-noticias', -175)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="btn btn-lg btn-success m-1 h-0 rounded-circle" id="next" aria-label="Aria Right"
                    onClick={() => scrollDivX('game-noticias', 175)}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <strong>
                <h2>Notícias</h2>
            </strong>
            
            <GameNoticias />
        </div>
    );
}
export default NoticiasBar;