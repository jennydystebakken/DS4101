const BibliotekModule = (function () {


    let liste = [{
            'navn': 'Andreas Eilertsen Lybo',
            'bildeadresse': 'Andreas Java',
            'alder': '22',
            'biografi': 'Vegetarian, the only meat I eat is dick.',
            'kjonn': 'Mann',
            'stilling': 'student',
        },
        {
            'navn': 'Jenny Mylius Sandmo',
            'bildeadresse': 'Jenny',
            'alder': '21',
            'biografi': 'Det eneste lavere enn standardene mine er saldoen min.',
            'kjonn': 'Kvinne',
            'stilling': 'student',
        },
        {
            'navn': 'Pär Joona',
            'bildeadresse': 'Pierre',
            'alder': '25',
            'biografi': 'Kan jeg få en veibeskrivelse til hjertet ditt?',
            'kjonn': 'Mann',
            'stilling': 'student',
        },
        {
            'navn': 'Elisabeth Henriksen',
            'bildeadresse': 'Beth',
            'alder': '22',
            'biografi': 'Svømme kan jeg, men i dine øyne drukner jeg..',
            'kjonn': 'Kvinne',
            'stilling': 'student',
        },
        {
            'navn': 'Simen Johansen',
            'bildeadresse': 'Simen',
            'alder': '22',
            'biografi': 'Jeg satser på at dine standarder er mye lavere enn mine.',
            'kjonn': 'Mann',
            'stilling': 'student',
        },
        {
            'navn': 'Ben Johansen',
            'bildeadresse': 'Ben',
            'alder': '20',
            'biografi': 'Im cute, fun and love life! I hate playing head games unless they involve the mouth.',
            'kjonn': 'Mann',
            'stilling': 'student',
        },
        {
            'navn': 'Zachy Laguda',
            'bildeadresse': 'Zach',
            'alder': '22',
            'biografi': 'The asian for any occasion. Msg if you play pokemon.',
            'kjonn': 'Mann',
            'stilling': 'student',
        },
        {
            'navn': 'Trine Bekkejorden',
            'bildeadresse': 'Trine',
            'alder': '24',
            'biografi': 'The only hair between my legs should be your beard.',
            'kjonn': 'Kvinne',
            'stilling': 'student',
        },
        {
            'navn': 'Hanne Sørum',
            'bildeadresse': 'Hanne ',
            'alder': '43',
            'biografi': 'I could really make use of a massage, an orgasm, hard apple cider and a check for $300,000',
            'kjonn': 'Kvinne',
            'stilling': 'teacher',
        },
        {
            'navn': 'Helene Thorkildsen',
            'bildeadresse': 'Helene',
            'alder': '21',
            'biografi': 'Only thing tighter than my asshole is family:-)',
            'kjonn': 'Kvinne',
            'stilling': 'student',
        },
        {
            'navn': 'Linda Nordåk',
            'bildeadresse': 'Linda',
            'alder': '23',
            'biografi': 'Oh youve found out you only live once? Please tell me more about your other scientific discoveries ',
            'kjonn': 'Kvinne',
            'stilling': 'student',
        },
        {
            'navn': 'Rolando Gonzalez',
            'bildeadresse': 'Rolando',
            'alder': '35',
            'biografi': 'You only live once!',
            'kjonn': 'Mann',
            'stilling': 'teacher',
        }
    ]

    function hentAlle() {
        return liste;
    }

    function hentKvinne() {

        let array = [];
        for (let i = 0; i < liste.length; i++) {
            if (liste[i].kjonn === 'Kvinne') {
                array.push(liste[i]);
            }
        }
        return array
    }

    function hentMenn() {

        let array = [];
        for (let i = 0; i < liste.length; i++) {
            if (liste[i].kjonn === 'Mann') {
                array.push(liste[i]);
            }
        }
        return array
    }

    function hentStudent() {

        let array = [];
        for (let i = 0; i < liste.length; i++) {
            if (liste[i].stilling === 'student') {
                array.push(liste[i]);
            }
        }
        return array
    }

    function hentTeacher() {

        let array = [];
        for (let i = 0; i < liste.length; i++) {
            if (liste[i].stilling === 'teacher') {
                array.push(liste[i]);
            }
        }
        return array
    }

    return {
        hentKvinne,
        hentMenn,
        hentAlle,
        hentStudent,
        hentTeacher
    }

}())
