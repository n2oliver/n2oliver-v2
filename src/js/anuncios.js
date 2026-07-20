const SMARTLINK_1 = 'https://laxativethem.com/ffga4c7z4?key=9b0193dfd0a136a88071da78968c41eb';
const SMARTLINK_2 = 'https://omg10.com/4/10285691';
const SMARTLINK_3 = 'https://directads.adclickppc.com/dl/?16925b62-e818-4353-8bb6-0fe491d50746';
const params1 = 'width='+ ((window.screen.availWidth / 2).toFixed(0)) + ',height=' + ((window.screen.availHeight / 2).toFixed(0)) + ',resizable=yes,scrollbars=yes';
const params2 = 'width='+ ((window.screen.availWidth / 3).toFixed(0)) + ',height=' + ((window.screen.availHeight / 3).toFixed(0)) + ',resizable=yes,scrollbars=yes';
const params3 = 'width='+ ((window.screen.availWidth / 2.5).toFixed(0)) + ',height=' + ((window.screen.availHeight / 3).toFixed(0)) + ',resizable=yes,scrollbars=yes';

function abrirSmartlinkUmaVez() {
  if (sessionStorage.getItem('smartlink_aberto')) {
    if(sessionStorage.getItem('smartlink_aberto_2')) {
      if(sessionStorage.getItem('smartlink_aberto_3')) {
        setTimeout(()=>{
          window.open(SMARTLINK_1, '_blank', params1);
        }, 200);
        return;
      }
      setTimeout(()=>{
        window.open(SMARTLINK_3, '_blank', params3);
      }, 200);
      
      sessionStorage.setItem('smartlink_aberto_3', '1');
      return;  
    }
    setTimeout(()=>{
      window.open(SMARTLINK_2, '_blank', params2);
    }, 200);
    
    sessionStorage.setItem('smartlink_aberto_2', '1');
    return;
  }

  // Evento GA (opcional, mantido)
  if (typeof gtag === 'function') {
    gtag('event', 'smartlink_open', {
      currency: 'USD',
      value: 0.0004
    });
  }

  // Abre smartlink principal
  window.open(SMARTLINK_1, '_blank', params1);
  sessionStorage.setItem('smartlink_aberto', '1');
}
export { abrirSmartlinkUmaVez };