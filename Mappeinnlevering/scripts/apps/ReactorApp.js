const ReactorApp = {
    wrapper: null,

    boxL: null,
    sliderBox: null,

    init() {
        const RA = ReactorApp

        const elements = function () {
            RA.wrapper = $('<article>');
            RA.boxL = $('<div>');
            RA.sliderBox = $('<div>');
        }()

        const GUI = function () {

            RA.boxL
                .css({
                    height: "400px",
                    width: "400px",
                    backgroundColor: "#000000",
                    margin: "1rem"
                })
            
            RA.sliderBox.slider();

    RA.wrapper.html(RA.boxL, RA.sliderBox)



    /*Header*/
    /* $("#header")
         .css({
             display: "block",
             marginLeft: "auto",
             marginRight: "auto",
             width: "1000px",
             marginTop: "20px",
             marginBottom: "0px",
             fontSize: "50px"
         })

     
     $("#undertittel")
         .css({
             display: "block",
             marginLeft: "auto",
             marginRight: "auto",
             width: "1000px",
             marginTop: "0px",
             marginBottom: "40px",
             fontSize: "20px"
         })

     /*Infoboks*/
    /*$(function () {
        $("#infoboks").accordion();
    });
            
    $(".boks")
        .css({
            backgroundColor: "#F4F6F7"
        })

    $("#infoboks")
        .css({
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "600px"
        })

    $(".overskrift")
        .css({
            color: "#FFFFFF",
            backgroundColor: "#828A95",
            paddingLeft: "10px",
            paddingBottom: "10px",
            paddingTop: "10px",
            fontSize: "18px"
        
        })

    $(".faktatekst")
        .css({
            textAlign: "left",
            width: "500px"
        })*/


}();

return RA.wrapper;
},
/*end init*/
}