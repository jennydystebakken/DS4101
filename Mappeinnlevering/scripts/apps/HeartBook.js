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
                marginLeft: "10px",
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

            let all = $("#all")
            .on("click", function () {
                $("#output").empty();
                HB.getPictures(HeartbookModule.getAll());
            })

            let women = $("#women")
                .on("click", function () {
                  $("#output").empty();
                  HB.getPictures(HeartbookModule.getWomen());
                })

            let men = $("#men")
            .on("click", function () {
                $("#output").empty();
                HB.getPictures(HeartbookModule.getMen());
            })

            /*let biografi = $("#beskrivelse")
            .on("click", function () {
                $("#output").empty();
                HB.hentBilder(BibliotekModule.hentBiografi());
            })*/

            let student = $("#students")
            .on("click", function() {
                $("#output").empty();
                HB.getPictures(HeartbookModule.getStudent());
            })

            let teacher = $("#teachers")
            .on("click", function() {
                $("#output").empty();
                HB.getPictures(HeartbookModule.getTeacher());
            })

            HB.htmlWrap.append(he, all, men, women, student, teacher, HB.output)

        }()

        return HB.htmlWrap
    },
    getPictures(person) {
        let out = $("#output")

        for (let i = 0; i < person.length; i++) {
            let picture = $("<img>", {
                src: "images/profiles/" + person[i].imagesrc + ".png"
            })
            .on("click", function (){
                $(`<p>${person[i].name}</p>`)
            })
            .appendTo(out)
        }
    }

}
