import React from 'react';
import ListaDeJogos from '../components/lista-de-jogos';

function Jogos() {
  return (
    <main className="w-100 m-auto col-md-12 p-0">
    <section id="destaque-imagem" className="w-100 m-auto n2oliver-jogos d-flex flex-column justify-content-center"
      alt="">

      <div className="container m-auto" style={{backgroundColor: "rgba(0, 0, 0, .4)"}}>
        <div id="jogos-recentes" className="d-flex justify-content-center">
          <div className="justify-content-start col-md-10 m-auto text-light mt-2 ubuntu">
            <strong>
              <h2 className="my-0">Todos Os Jogos</h2>
            </strong>
            <div id="lista" className="d-flex my-0 py-0">
              <ListaDeJogos />
            </div>
            <div id="frame" style={{ width: "100%", margin: "auto", position: "relative", zIndex: 1}}>
              {/* BEGIN AADS AD UNIT 2410752 */}

                <div id="frame" style={{ width: "100%", margin: "auto", position: "relative", zIndex: 99998}}>
                  <iframe data-aa='2410752' src='//acceptable.a-ads.com/2410752/?size=Adaptive'
                    style={{ border:0, padding:0, width: "70%", height: "auto", overflow: "hidden", display: "block", margin: "auto"}}></iframe>
                </div>

              {/* END AADS AD UNIT 2410752 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}
export default Jogos;
