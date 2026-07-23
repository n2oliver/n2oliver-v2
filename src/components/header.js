import logo from '../img/jogos/logo.png';
function Header() {
    return (
        <header className="mx-auto col-md-12 text-center">
            <img alt="logo" src={logo} style={{height: "60px", width: "auto"}} />
            <p className="m-auto" style={{maxWidth: "60%"}}>Conecte-se ao seu próximo desafio.</p>
        </header>
    )
}

export default Header;