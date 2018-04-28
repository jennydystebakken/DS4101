const HeartBook = {

    htmlWrap: null,

    image: null,

    output: null,

    filepath: "images/profiles/",

    init() {

        const HB = HeartBook;

        const elements = function () {
            HB.htmlWrap = $("<div>")
            HB.output = $("<div>", {
                id: "output"
            })
        }()


        const GUI = function () {
            let he = $("<h3>", {
            })

            let btn = $(".btn")
            .css({
                margin: "15px",
                width: "150px",
                height: "50px",
                background: "#D88898",
                borderRadius: "10px",
                border: "none",
                fontFamily: "'Roboto', sans-serif",
                fontSize: "15px",
                color: "#FFFFFF",
                boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                
            })

            let alle = $("#alle")
            .on("click", function () {
                $("#output").empty();
                HB.hentBilder(BibliotekModule.hentAlle());
            })

            let kvinner = $("#kvinner")
                .on("click", function () {
                  $("#output").empty();
                  HB.hentBilder(BibliotekModule.hentKvinne());
                })

            let menn = $("#menn")
            .on("click", function () {
                $("#output").empty();
                HB.hentBilder(BibliotekModule.hentMenn());
            })

            let biografi = $("#beskrivelse")
            .on("click", function () {
                $("#output").empty();
                HB.hentBilder(BibliotekModule.hentBiografi());
            })

            let student = $("#student")
            .on("click", function() {
                $("#output").empty();
                HB.hentBilder(BibliotekModule.hentStudent());
            })

            let teacher = $("#teacher")
            .on("click", function() {
                $("#output").empty();
                HB.hentBilder(BibliotekModule.hentTeacher());
            })

            HB.htmlWrap.append(he, alle, menn, kvinner, student, teacher, HB.output)

        }()

        return HB.htmlWrap
    },
    hentBilder(person) {
        let out = $("#output")

        for (let i = 0; i < person.length; i++) {
            let bilde = $("<img>", {
                src: "images/profiles/" + person[i].bildeadresse + ".png"
            })

            let div = $("<div>")
                .append(bilde)
                .one("click", function (){
                    let brukernavn = $("<p>").text(`${person[i].navn}`)
                    // SKAPAR ELEMENT
                    let biografi = $("<p>").text(`${person[i].biografi}`)
                    let alder = $("<p>").text(`${person[i].alder}`)
                    let kjonn = $("<p>").text(`${person[i].kjonn}`)
                    let stilling = $("<p>").text(`${person[i].stilling}`)
                    // SITTER FAST ELEMENT I DIVEN
                    $(this).append(brukernavn, alder, kjonn, stilling, biografi)
                })
                .appendTo(out)
        }
    }

    

}

function addClass(elem) {
    var a = document.getElementsByTagName('a')
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('largeImg');
    }
    elem.classList.add('largeImg');
}
