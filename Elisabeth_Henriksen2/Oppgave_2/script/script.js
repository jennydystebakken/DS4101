(function() {
    let ideetekst, ideebtn, titteltekst, titlebtn, tittel;
    let forkast, ideer;
    const init = function() {
        const elements = function() {
            forkast = document.getElementById("forkast");
            ideer = document.getElementById("ideer");
            ideetekst = document.getElementById("idee-tekst");
            ideebtn = document.getElementById("idee-btn");
            titteltekst = document.getElementById("tittel-tekst");
            tittelbtn = document.getElementById("tittel-btn");
            tittel = document.getElementById("tittel");
        }(); // END ELEMENTS 
        const events = function() {
            ideebtn.onclick = leggTilIdee;
            tittelbtn.onclick = endreTittel;
        }(); // END EVENTS 
    }(); // END INIT
    
    function leggTilIdee() {
        if (ideetekst.value === "") {
            alert("Legg til idé");
        } else {
        ideer.innerHTML += `<p class="idee">${ideetekst.value}</p>`;
        leggtilOnclick();
        }
    }
    
    function endreTittel() {
        if (titteltekst.value === ""){
            alert("Legg til tittel");  
        } else {
        tittel.innerHTML = titteltekst.value;
        }
    }
    
    function forkastIdee() {
        forkast.innerHTML += `<p class="forkastet">${this.innerHTML}</p>`;
        this.outerHTML = "";
        leggtilOnclick();
    }
    
    function aterstillIdee() {
        ideer.innerHTML += `<p class="idee">${this.innerHTML}</p>`;
        this.outerHTML = "";
        leggtilOnclick();
    }
    
    function leggtilOnclick() {
        let idee = document.querySelectorAll(".idee");
        let forkastet = document.querySelectorAll(".forkastet");
        for (let i = 0; i < idee.length; i++) {
            idee[i].onclick = forkastIdee;
        }
        
        for (let i = 0; i < forkastet.length; i++) {
            forkastet[i].onclick = aterstillIdee;
        }
    }
}())