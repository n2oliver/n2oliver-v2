(function() {
  // === util ===
  function getParam(name, url) {
    const u = url || window.location.href;
    name = name.replace(/[[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(u);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  // chaves para storage
  const KEY = "utm_prev";
  const FIRED = "utm_prev_fired";

  // 1) se esta página tem UTMs do PopAds, salvar para a próxima
  const src = getParam("utm_source");
  const med = getParam("utm_medium");
  const camp = getParam("utm_campaign");

  if (src && med && camp) {
    sessionStorage.setItem(KEY, JSON.stringify({
      utm_source: src,
      utm_medium: med,
      utm_campaign: camp,
      ts: Date.now()
    }));
    // zera o marcador de disparo
    sessionStorage.removeItem(FIRED);
  }

  // 2) se NÃO tem UTMs agora, mas a página anterior tinha, dispara conversão
  //    (uma única vez por sessão)
  function fireIfNeeded() {
    try {
      if (sessionStorage.getItem(FIRED)) return;
      const raw = sessionStorage.getItem(KEY);
      if (!raw) return;

      const data = JSON.parse(raw);
      // (opcional) expirar após 30 min
      if ((Date.now() - (data.ts || 0)) > 30 * 60 * 1000) {
        sessionStorage.removeItem(KEY);
        return;
      }

      // Exija especificamente os UTMs do PopAds, se quiser
      if (data.utm_source === "popads" &&
          data.utm_medium === "popunder" &&
          data.utm_campaign === "adsterra_monetization") {

        // aguarda gtag existir
        var tries = 0;
        (function waitForGtag(){
          tries++;
          if (typeof gtag === "function") {
            gtag('event', 'conversao_popads_prev_page', {
              event_source: 'memory_prev_page',
              utm_source_prev: data.utm_source,
              utm_medium_prev: data.utm_medium,
              utm_campaign_prev: data.utm_campaign
            });
            sessionStorage.setItem(FIRED, "1"); // evita duplicar
          } else if (tries < 50) {
            setTimeout(waitForGtag, 100);
          }
        })();
      }
    } catch(e){}
  }

  // dispara após load para garantir gtag
  if (document.readyState === "complete") fireIfNeeded();
  else window.addEventListener("load", fireIfNeeded);
})();