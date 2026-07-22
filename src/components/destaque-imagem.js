import { scrollDivX } from '../js/scroll-buttons.js';
import RecentesCards from './recentes-cards.js';
import DestaquesCards from './destaques-cards.js';

function DestaqueImagem() {
    return (
        <section id="destaque-imagem" className="w-100 m-auto n2oliver-jogos d-flex flex-column justify-content-center"
            alt="">
            <div id="games" className="container m-auto p-0">
                <div id="game-details" className="flex-row px-0 col-md-10">
                    <div className="w-100">
                        <div id="thumbnail" className="w-100 rounded align-content-end border border-light">
                            <div id="click-to-action"></div>
                            <h2><strong><span id="game-details-title">n2oliver</span></strong>🎮</h2>
                            <div id="game-details-panel" className="d-flex justify-content-around">
                                <div className="col-md-10 m-auto d-inline-flex">
                                    <div id="game-details-content" className="p-2 flex-column">
                                        Carregando...
                                        <div className="text-center">
                                            <button className="btn btn-lg btn-danger m-1 h-0 text-nowrap" id="play-button" aria-label="Aria Right">
                                                Jogar
                                            </button>
                                        </div>
                                    </div>
                                    <button className="btn btn-lg btn-success m-1 h-0 rounded-circle" id="prev" aria-label="Aria Left">
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </button>
                                    <button className="btn btn-lg btn-success m-1 h-0 rounded-circle" id="next" aria-label="Aria Right">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="progressbar" role="progressbar" title="progressbar"></div>

                        <div className="w-100 row justify-content-around">
                            <div id="jogos-recentes" className="d-flex justify-content-center col-md-5">
                                <div className="w-100 ubuntu">
                                    <div className="d-flex w-100 justify-content-between buttons" id="buttons">
                                        <button className="btn btn-lg btn-success m-1 h-0 rounded-circle" id="prev" aria-label="Aria Left"
                                            onClick={() => scrollDivX('lista', -175)}>
                                            <i className="fa-solid fa-arrow-left"></i>
                                        </button>
                                        <button className="btn btn-lg btn-success m-1 h-0 rounded-circle" id="next" aria-label="Aria Right"
                                            onClick={() => scrollDivX('lista', 175)}>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                    <strong><h2 className="my-0">Jogos recentes</h2></strong>
                                    <div id="lista" className="my-0 py-0">
                                        <RecentesCards />
                                    </div>
                                    <div className="m-auto p-0 mt-1 mx-0 d-flex justify-content-end"><a href="/jogos.php"><button className="btn btn-primary">Ver todos</button></a></div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="row m-auto text-light ubuntu">
                                    <div className="d-flex w-100 justify-content-between scroll-buttons buttons" id="destaques-buttons">
                                        <button className="btn btn-lg btn-success m-1 h-0 rounded-circle" id="prev" aria-label="Aria Left"
                                            onClick={() => scrollDivX('destaques', -175)}>
                                            <i className="fa-solid fa-arrow-left"></i>
                                        </button>
                                        <button className="btn btn-lg btn-success m-1 h-0 rounded-circle" id="next" aria-label="Aria Right"
                                            onClick={() => scrollDivX('destaques', 175)}>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                    <strong><h2 className="my-0">Seções</h2></strong>
                                </div>

                                <div id="destaques" className="my-0 py-0">
                                    <DestaquesCards />
                                </div>
                            </div>
                            <div id="donation-section-wrapper" className="col-md-12 m-auto p-0 mt-1 w-100">
                                <div className="donation-section col-md-10 row m-auto">
                                    <div className="col-md-5">
                                        <h3>Aceitamos doações</h3>
                                        <p><i className="fas fa-donate"></i>&nbsp;Você pode contribuir nos ajudando a desenvolver novos projetos. Envie sua contribuição pelos seguintes canais!</p>
                                        <p>
                                            <small>
                                                <strong>Chave PIX:</strong> <span className="notranslate" translate="no"> suporte@n2oliver.com</span><br />
                                                <strong>Bitcoin (LN):</strong> <span className="notranslate" translate="no"> warybongo30@walletofsatoshi.com</span><br />
                                            </small>
                                        </p>
                                    </div>
                                    <div className="col-md-5">
                                        <strong>Global Account:</strong>
                                        <span className="notranslate" translate="no">
                                            <p><small><b>OLIVER SILVA CASTILHO</b></small></p>
                                            <ul className="text-start international-account">
                                                <li><small>Account number: 889213783-6</small></li>
                                                <li><small>ACH Routing number: 026073150</small></li>
                                                <li><small>WIRE Transfer Routing Number: 026073008</small></li>
                                                <li><small>Bank name: Community Federal Savings Bank</small></li>
                                                <li><small>Bank Address: 5 Penn Plaza, New York, NY 10001</small></li>
                                            </ul>

                                        </span><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DestaqueImagem;