/*
    Hvordan kan man modularisere og forkorte (ref. DRY) settAppGUI-funksjonen?
    Hvorfor bør man modularisere settAppGUI-funksjonen?
*/

const ModulariseringApp = {
  
    htmlWrap: null,
    
    init(){ 
        
        const M = ModulariseringApp;
        
        const setHTMLElements = function(){
            M.htmlWrap = $("<div>");
        }();
        
        const setAppGUI = function(){
            
            let randomAlternative = Math.floor(Math.random() * 2); 
            
            console.log(randomAlternative);
            
            if(randomAlternative === 0){
                let newArticle = $("<article>");
                let newTitle = $("<h3>").html("Nice weather");
                let newParagraph = $("<p>").html("Todays weather is looking pretty good");
                newArticle.append(newTitle, newParagraph);
                M.htmlWrap.html(newArticle);
            }else if(randomAlternative === 1){
                let newArticle = $("<article>");
                let newTitle = $("<h3>").html("Drink enough water");
                let newParagraph = $("<p>").html("Remember to drink around 2-3 liters per day");
                newArticle.append(newTitle, newParagraph);
                M.htmlWrap.html(newArticle);
            }
            
        }();
        
        return M.htmlWrap;
        
    }
    
};