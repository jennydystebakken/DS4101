(function(){
    //HTML objects 
    let lenkerBtn, fargerBtn, kodestandardBtn; 
    let mainContent; 
    
    const init = function(){
        const setHTMLObjects = function(){
            lenkerBtn = document.getElementById("lenkerBtn");
            fargerBtn = document.getElementById("fargerBtn");
            kodestandardBtn = document.getElementById("kodestandardBtn");
            mainContent = document.getElementById("main-content");
            table1 = document.getElementById("table-1");
            table2 = document.getElementById("table-2");
            table3 = document.getElementById("table-3");
        }(); //end setHTMlObjects
        
        
        const setEvents = function(){
            lenkerBtn.onclick = showLenker;
            fargerBtn.onclick = showFarger;
            kodestandardBtn.onclick = showKodestandard;
        }(); //end setEvents 
    }(); // end init
    
    function showLenker(){
        const lenker = getLenkerArray();
        const numberOfLenker = lenker.length;
        
        let lenkerUl = document.createElement("ul");
        for(let i = 0; i < numberOfLenker; i++){
            table1.innerHTML = "";
            let newLenkerLi = document.createElement("li");
            newLenkerLi.innerHTML = lenker[i];
            lenkerUl.appendChild(newLenkerLi);
        }
        
        table1.appendChild(lenkerUl);
    }
    
       function showFarger(){
        const farger = getFargerArray();
        const numberOfFarger = farger.length;
        
        let fargerUl = document.createElement("ul");
        for(let i = 0; i < numberOfFarger; i++){
            table2.innerHTML = "";
            let newFargerLi = document.createElement("li");
            newFargerLi.innerHTML = farger[i];
            fargerUl.appendChild(newFargerLi);
        }
        
        table2.appendChild(fargerUl);
    }
    
       function showKodestandard(){
        const kodestandard = getKodestandardArray();
        const numberOfKodestandard = kodestandard.length;
        
        let kodestandardUl = document.createElement("ul");
        for(let i = 0; i < numberOfKodestandard; i++){
            table3.innerHTML = "";
            let newKodestandardLi = document.createElement("li");
            newKodestandardLi.innerHTML = kodestandard[i];
            kodestandardUl.appendChild(newKodestandardLi);
        }
        
        table3.appendChild(kodestandardUl);
    }
}());
