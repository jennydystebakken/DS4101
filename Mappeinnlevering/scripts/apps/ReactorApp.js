const ReactorApp = {
    wrapper: null,

    init() {
        const RA = ReactorApp
        const elements = function () {
            RA.wrapper = $('<div id=wrapper>')
        }()

        const gui = function () {
            /*Header*/
            $("#header")
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
            
            /*SVG bilde*/
            $("#Atomreaktor")
                .css({
                    display: "block",
                    margin: "2rem",
                    width: "700px",
                    padding: "2rem"
                })
            $(".reactor-temp-v")
                .css({
                    width: "70px",
                    height: "650px",
                    border: "solid"
                })
            $(".reactor-temp-h")
                .css({
                    width: "70px",
                    height: "650px",
                    border: "solid",
                    marginLeft: "3rem"
                })
           $("#Temperatur") 
                .css({
                    fill: "linear-gradient(to right, red , yellow)"
                })

            $("#rect8182, #rect8172, #rect8178")
                .css({
                    fill: "#E1EEED"
                })

            /*Infoboks*/
            $(function () {
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
                })

            $("#VifteV")
                .CSSAnimate({
                    rotate: "360deg"
                    }, 1000
                )

            $("#VifteH")
                .CSSAnimate({
                    rotate: "360deg"
                }, 1000
                )



            let div = $('<div class="MyClass">')



            let btn1 = $('<button class="btn">')
                .text('Start reaktor 1')
                .on('click', function () {
                    /*Skriver hva knappen gjør*/
                    RA.ArrowShakingVFast()
                    RA.arrowShakingVSlow()
                })

            let btn2 = $('<button class="btn">')
                .text('Start reaktor 2')
                .on('click', function () {
                    /*Skriver hva knappen gjør*/
                    RA.arrowShakingHSlow()
                    RA.arrowShakingHFast()
                    RA.rotatePumpV()

                })

                let btn3 = $('<button class="btn">')
                .text('Skru opp temperaturen')
                .on('click', function () {
                    /*Skriver hva knappen gjør*/
                    RA.arrowShakingHSlow()
                    RA.arrowShakingHFast()
                    RA.rotatePumpV()

                })

                let btn4 = $('<button class="btn">')
                .text('Skru ned temperaturen')
                .on('click', function () {
                    /*Skriver hva knappen gjør*/
                    RA.arrowShakingHSlow()
                    RA.arrowShakingHFast()
                    RA.rotatePumpV()

                })

                let btn5 = $('<button class="btn">')
                .text('Skru av')
                .on('click', function () {
                    /*Skriver hva knappen gjør*/
                    RA.arrowShakingHSlow()
                    RA.arrowShakingHFast()
                    RA.rotatePumpV()

                })

                let slider = $('<div id="slider">')

            div.append(btn1, btn2, btn3, btn4, btn5)

            RA.wrapper.append(div)
        }() /*end init*/
        return RA.wrapper
    },
    arrowShakingHSlow() {
        console.log("HI")
        $("#Atomreaktor").css("position", "static")

        $("#3pilerRød").animate({
            transform: "translate(2 2)"
        }, 200, function () {
            $("#3pilerRød").animate({
                transform: "translate(-2 -2)"
            }, 200)
            ReactorApp.arrowShakingHSlow()
        })
    },

    arrowShakingHFast() {
        console.log("HI")
        $("#4pilerRød").css("position", "static")

        $("#4pilerRød, #4pilerBlå").animate({
            transform: "translateY(5px)"
        }, 100, function(){
            $("#4pilerRød, #4pilerBlå").animate({
                transform: "translateY(-5px)"
            }, 100)
            ReactorApp.arrowShakingHFast()
        })
    },

    arrowShakingVSlow() {
        console.log("HI")
        $("#Atomreaktor").css("position, static")

        $("#3pilerV").animate({
            transform: "translate(2 2)"
        }, 200, function() {
            $("#3pilerV").animate({
                transform: "translate(-2 -2)"
            }, 200)
            ReactorApp.arrowShakingVSlow()
        })
    },

    ArrowShakingVFast() {
        console.log("HI")
        $("#Atomreaktor").css("position", "static")

        $("#4pilerRødV, #4pilerV").animate({
            transform: "translateY(5px)"
        }, 70, function(){
            $("#4pilerRødV, #4pilerV").animate({
                transform: "translateY(-5px)"
            }, 90)
            ReactorApp.ArrowShakingVFast()
        })
    },

    rotatePumpV() {
        $("#VifteV").CSSAnimate({
            rotate: "360deg"
        }, 2000, function () {
            ReactorApp.rotatePumpV()
        })
        
    },

    
    coolDown() {
        $("#slider").slider({
            min: 50,
            max: 1000,
            orientation: "horizontal",
            step: 100,
            values: [1000],
            slide: function (event, ui) {

                //setBoxSize(ui.value);
            }
        }, function () {
            ReactorApp.coolDown()
            ReactorApp.setBoxSize()
        })
    },

    setBoxSize(position){
        $("#cooler")
            .css(
                {
                    transform: "translateX(position)"
                }, function() {
                    ReactorApp.setBoxSize()
            })
    },
}
