// /ads/showAd.js
function showAd() {
    const s = document.createElement("script");
    s.dataset.zone = "10951295";
    s.src = "https://n6wxm.com/vignette.min.js";
    document.body.appendChild(s);
}

function showAdThen(callback, delay = 1500) {
    try { showAd(); } catch(e) {}
    setTimeout(callback, delay);
}
