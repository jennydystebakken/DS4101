(function() {
    let main, deleteBtn;
    const init = function() {
        const element = function() {
            // Elementliste
            main = document.getElementById("main");
            deleteBtn = document.getElementById("btn-delete");
        }()
        const events = function() {
            // Eventlistener for knappen
            deleteBtn.onclick = removeCookie;
        }()
    }()

function getCookie() {
    let del = document.cookie.split("=");
  // Gir tilbake en array med alt i cookien
    return del;
}
    
function createCookieElements() {
    let c = getCookie();
    c = c[c.length - 1];
    c = c.split(",");
    let lengdeC = c.length;
    
    for (let i = 0; i < lengdeC; i++) {
        main.innerHTML += `<p>${c[i]}</p>`;
    }
}
    
function removeCookie() {
    document.cookie = `product=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`
    location.reload();
}
    
createCookieElements();
    
}())