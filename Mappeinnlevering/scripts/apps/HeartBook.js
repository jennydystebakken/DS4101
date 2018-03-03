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
            .on("click", function (){
                $(`<p>${person[i].navn}</p>`)
            })
            .appendTo(out)
        }
    }

}
