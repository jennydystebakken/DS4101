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
                HB.getPictures(BibliotekModule.getAll());
            })

            let women = $("#women")
                .on("click", function () {
                  $("#output").empty();
                  HB.getPictures(BibliotekModule.getWomen());
                })

            let men = $("#men")
            .on("click", function () {
                $("#output").empty();
                HB.getPictures(BibliotekModule.getMen());
            })

            /*let bio = $("#description")
            .on("click", function () {
                $("#output").empty();
                HB.getPictures(BibliotekModule.hentBiogr  afi());
            })*/

            let students = $("#students")
            .on("click", function() {
                $("#output").empty();
                HB.getPictures(BibliotekModule.getStudent());
            })

            let teachers = $("#teachers")
            .on("click", function() {
                $("#output").empty();
                HB.getPictures(BibliotekModule.getTeacher());
            })

            HB.htmlWrap.append(he, all, men, women, students, teachers, HB.output)

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
                $(`<p>${person[i].navn}</p>`)
            })
            .appendTo(out)
        }
    }

}
