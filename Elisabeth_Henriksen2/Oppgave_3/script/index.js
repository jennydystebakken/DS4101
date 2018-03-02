(function() {
    let buyBtn;
    
    const init = function() {
        const element = function(){
            buyBtn = document.getElementsByClassName("btn-buy");
        }()
        const events = function() {
            // Eventlistener for knappen
            for (let i = 0; i < buyBtn.length; i++) {
                buyBtn[i].onclick = buyingProduct;
            }
        }()
    }()
    
function buyingProduct() {
    addCookie("product", this.dataset.id);
    this.value = "LAGT TIL I HANDLEKURVEN";
    this.classList.remove("btn-buy");        
    this.style.cssText = "background: #7A7E5F; border: 0; font-family: 'Roboto', sans-serif; font-size: 0.7rem; color: white;"
}
    
    // Setter cookie
function addCookie(name, value) {
  // Henter documentets cookie
  let c = getCookie();
    
  // Sjekker om det er rett cookie
  if (c[0] === name) {
    c = c[c.length - 1];
    c = c.split(",");
    if (c.indexOf(value) < 0 ) {
    c = c.concat([value]);
    createCookie(name, c.toString());
    }
  } else {
      createCookie(name, value);
  }
}

function getCookie() {
  let del = document.cookie.split("=");
  // Gir tilbake en array med alt i cookien
  return del;
}

function createCookie(name, value) {
  let date = new Date();
  date.setTime(date.getTime() + 2 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value};${expires}`
}
}())