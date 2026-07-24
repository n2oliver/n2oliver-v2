import "../../css/sobre-mim.css"
import "../../css/jogos/combo-memo/intro/intro.css"
import "../../css/jogos/combo-memo/card/card.css";
import { virar } from "../../components/jogos/combo-memo/card/card";
import "https://appsha-pnd.ctengine.io/js/script.js?wkey=97NjKiTr7b";
function ComboMemo() {
    return (
        <header className="p-3 platform">
            <h1>Combo-Memo</h1>
            <div className="d-flex justify-content-center">
                <img onClick={(event) => virar(event)} src={`${window.API_URL}/src/img/jogos/combo-memo/card/card.png`} alt="Combo-Memo" className="card animar sem-fundo" id="card" />
                <img onClick={(event) => virar(event)} src={`${window.API_URL}/src/img/jogos/combo-memo/card/card.png`} alt="Combo-Memo" className="card animar sem-fundo" id="card" />
            </div>
            <main className="container m-auto d-flex justify-content-center">
                <a href="#" id="jogar-agora" className="btn btn-warning">Jogar Agora</a><p className="m-auto">Teste sua memória e tente fazer o maior combo possível! Combine as cartas com o mínimo de erros para ganhar pontos extras.</p>
            </main>
        </header>);
}
export default ComboMemo;