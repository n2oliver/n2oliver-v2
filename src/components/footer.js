import '../css/footer.css';
import '../css/gtranslate.css';
import SocialMedia from './social-media.js';
import '../components/gtranlate-settings.js';

function Footer() {
    return (
  <footer class="site-footer mt-2 m-auto">
    <a href="/"><span class="oliver-dev-logo footer-logo">n2oliver</span></a>
    <div class="d-flex justify-content-center">
      <SocialMedia />
    </div>
    
    <span class="footer-text-small">
      Todos os direitos reservados - n2oliver - 2025
    </span>

    <a href="/politica-de-privacidade.html">Política de Privacidade</a>
    <a href="/contato.php">Contato</a>
    <span>
      <a href="mailto:suporte@n2oliver.com" style={{marginLeft: "10px"}}>suporte@n2oliver.com</a>
    </span>
  </footer>)
}
export default Footer;