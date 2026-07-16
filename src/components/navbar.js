
import icon from '../img/n2-ico.jpg';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-0 mx-0 w-100 m-auto px-0">
            <div className="container-fluid">

                <div className="d-flex w-100 justify-content-between">
                    <a className="navbar-brand rounded" href="/">
                        <img src={icon} width="32" className="rounded" alt="logo" />oliver
                    </a>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="/"><i className="fa-solid fa-home"></i> Início</a></li>
                            <li className="nav-item"><a className="nav-link" href="/noticias.php"><i className="fa-solid fa-newspaper"></i> Notícias</a></li>
                            <li className="nav-item"><a className="nav-link" href="/jogos.php"><i className="fa-solid fa-puzzle-piece"></i> Jogos</a></li>
                            <li className="nav-item"><a className="nav-link" href="/aplicativos.php"><i className="fa-solid fa-hand-pointer"></i> Aplicativos</a></li>
                            <li className="nav-item"><a className="nav-link" href="/extensoes/"><i className="fa-solid fa-hand-pointer"></i> Extensões</a></li>
                            <li className="nav-item"><a className="nav-link" href="/livraria/index.php"><i className="fa-solid fa-store"></i> Livros</a></li>
                            <li className="nav-item"><a className="nav-link" href="/cursos/index.php"><i className="fa-solid fa-store"></i> Cursos</a></li>
                            <li className="nav-item"><a className="nav-link" href="/dev.php"><i className="fa-solid fa-user"></i> Desenvolvedor</a></li>
                            <li className="nav-item"><a className="nav-link" href="/contato.php"><i className="fa-solid fa-envelope"></i> Contato</a></li>
                        </ul>
                    </div>
                </div>

                <div className="gtranslate_wrapper ms-auto me-2 d-flex align-items-center"></div>


            </div>
        </nav>);
}

export default Navbar;