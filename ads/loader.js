// /Ads/adloader.js
(function loadInfinitePlayAds() {
    // Create the MultiTag script
    const s = document.createElement("script");
    s.src = "https://quge5.com/88/tag.min.js";
    s.dataset.zone = "235358";
    s.async = true;
    s.setAttribute("data-cfasync", "false");
    document.body.appendChild(s);

    // Optional: refresh function for modal ads
    window.refreshAdSlot = function (slotId) {
        const slot = document.getElementById(slotId);
        if (!slot) return;

        // Clear old content
        slot.innerHTML = "";

        // Re-inject MultiTag script into this slot
        const scr = document.createElement("script");
        scr.src = "https://quge5.com/88/tag.min.js";
        scr.dataset.zone = "235358";
        scr.async = true;
        scr.setAttribute("data-cfasync", "false");
        slot.appendChild(scr);
    };
})();
