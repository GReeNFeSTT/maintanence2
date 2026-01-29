import { CONFIG } from "./config.js";

function initGoogleAnalytics() {
  if (!CONFIG.analytics.googleAnalyticsId) {
    return;
  }

  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.analytics.googleAnalyticsId}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${CONFIG.analytics.googleAnalyticsId}');
  `;
  document.head.appendChild(script2);
}

function initMetaPixel() {
  if (!CONFIG.analytics.metaPixelId) {
    return;
  }

  const script = document.createElement("script");
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${CONFIG.analytics.metaPixelId}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);

  const noscript = document.createElement("noscript");
  noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${CONFIG.analytics.metaPixelId}&ev=PageView&noscript=1"/>`;
  document.body.appendChild(noscript);
}

export function initAnalytics() {
  initGoogleAnalytics();
  initMetaPixel();
}