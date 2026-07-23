import React from 'react';
import NoticiasRecentes, { avancar, voltar } from '../components/noticias-recentes';

function Noticias() {
    return (
        <div>
            <h1 className="w-100 text-light px-4 pt-3 pb-4 bg-primary mb-0">
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{width: "fit-content"}}>
                        <i className="fa fa-pager p-2"></i>
                        <span id="noticias-span-title">Notícias</span>
                    </div>
                    <div className="oliver-dev-logo text-end w-50">n2oliver</div>
                </div>
            </h1>
            <div id="noticia" className="d-flex mb-0 p-0 shadow rounded quicksand row align-items-stretch" style={{borderBottomRightRadius: "0px"}}>            
                <div id="noticia-content" className="pb-4 border rounded shadow-sm mb-3 mx-0 bg-light col-md-8">
                </div>

                <div id="recentes" className="d-flex flex-column mb-0 p-0 mx-0 shadow rounded quicksand col-md-4" style={{borderBottomRightRadius: "0px"}}>
                    
                    <h1 className="text-light px-4 pt-3 pb-4 bg-primary mb-0" style={{width: "fit-content", minWidth: "100%", position: "sticky", top: 0, left: 0, zIndex: 1}}>
                        <div className="d-flex justify-content-start align-items-center">
                            <i className="fa fa-clock pe-2 text-light"></i>
                            <span id="noticias-span-title">Recentes</span></div>
                    </h1>

                    <div id="recentes-wrapper" className="row mb-0 p-0">
                        
                        <div id="noticias" className="align-self-start" 
                            style={{
                                overflowY: "auto", 
                                overflowX: "clip",
                                maxHeight: "100vh"
                            }}>
                            <NoticiasRecentes />{/* buscar-noticias.php */}
                        </div>
                    </div>
                    <div className="border rounded shadow-sm mb-1 ms-1 bg-dark w-100 d-flex justify-content-between align-items-center" style={{cursor: "pointer", backgroundOpacity: 0.5}}>
                        <div>
                            <button className="btn btn-primary" id="voltar" onClick={(event) => voltar(event)}><i className="fa fa-arrow-left"></i></button>
                        </div>
                        {/*
                        <span id="page-buttons">
                            <script>
                                let pagina = "<?= $noticias['page'] ?>" || 0;
                            </script>
                            <?php
                            htmlFor($i = 0; $i <= $noticias['pages'] + 1; $i++) { ?>
                                <?= $i == $noticias['page'] - 1 ? '<button id="page" type="number" className="btn btn-primary text-center disabled" disabled value="' . $i . '">' . ($i + 1) . '</button>' : 
                                '<button id="page" type="number" className="btn btn-primary text-center" value="' . $i . '">' . ($i + 1) . '</button>' ?>
                            <?php } ?>
                        </span>*/}
                        <div>
                            <button className="btn btn-primary" id="avancar" onClick={(event) => avancar(event)}><i className="fa fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Noticias;