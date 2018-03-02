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
                text: "HEARTBOOK"

            })

            let alle = $("<button>", {
                text: "Alle"
            }).on("click", function () {
                HB.hentBilder(BibliotekModule.hentAlle());
            })

            let kvinner = $("<button>", {
                text: "Kvinner"
            }).on("click", function () {
                HB.hentBilder(BibliotekModule.hentKvinne());
            })

            let menn = $("<button>", {
                text: "Menn"
            }).on("click", function () {
                HB.hentBilder(BibliotekModule.hentMenn());
            })

            let biografi = $("<button>", {
                text: "Biografi"
            }).on("click", function () {
                HB.hentBilder(BibliotekModule.hentBiografi());
            })

            HB.htmlWrap.append(he, alle, menn, kvinner, biografi, HB.output)

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
