import '../css/footer.css';
import '../css/gtranslate.css';
import SocialMedia from './social-media.js';
import '../js/gtranlate-settings.js';
import AAdsSticky from './aads-sticky.js';

function Footer() {
    return (<>
  <footer className="site-footer mt-2 m-auto">
    <a href="/"><span className="oliver-dev-logo footer-logo">n2oliver</span></a>
    <div className="d-flex justify-content-center">
      <SocialMedia />
    </div>
    
    <span className="footer-text-small">
      Todos os direitos reservados - n2oliver - 2026
    </span>

    <a href="/politica-de-privacidade.html">Política de Privacidade</a>
    <a href="/contato.php">Contato</a>
    <span>
      <a href="mailto:suporte@n2oliver.com" style={{marginLeft: "10px"}}>suporte@n2oliver.com</a>
    </span>
  </footer>
    <AAdsSticky/></>)
}
export default Footer;