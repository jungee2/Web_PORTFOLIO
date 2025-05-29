window.onload = function() {
    if (window.location.hash) {
        window.history.replaceState({}, document.title, window.location.pathname);
    }
};