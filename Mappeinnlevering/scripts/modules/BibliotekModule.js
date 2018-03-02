const BibliotekModule = (function () {


    let liste = [{
            'navn': 'Andreas',
            'bildeadresse': 'Andreas Java',
            'alder': '67',
            'biografi': 'Hahaha',
            'kjonn': 'Mann',
            'stilling': 'student',
        },
        {
            'navn': 'Jenny',
            'bildeadresse': 'Jenny',
            'alder': '30',
            'biografi': 'Hahaha',
            'kjonn': 'Kvinne',
            'stilling': 'student',
        },
        {
            'navn': 'Pierre',
            'bildeadresse': 'Pierre',
            'alder': '29',
            'biografi': 'Hahaha',
            'kjonn': 'Mann',
            'stilling': 'student',
        },
        {
            'navn': 'Beth',
            'bildeadresse': 'Beth',
            'alder': '34',
            'biografi': 'Hahaha',
            'kjonn': 'Kvinne',
            'stilling': 'student',
        },
        {
            'navn': 'Simen',
            'bildeadresse': 'Simen',
            'alder': '55',
            'biografi': 'Hahaha',
            'kjonn': 'Mann',
            'stilling': 'student',
        },
        {
            'navn': 'Ben',
            'bildeadresse': 'Ben',
            'alder': '19',
            'biografi': 'Hahaha',
            'kjonn': 'Mann',
            'stilling': 'student',
        },
        {
            'navn': 'Zach',
            'bildeadresse': 'Zach',
            'alder': '41',
            'biografi': 'Hahaha',
            'kjonn': 'Mann',
            'stilling': 'student',
        },
        {
            'navn': 'Trine',
            'bildeadresse': 'Trine',
            'alder': '43',
            'biografi': 'Hahaha',
            'kjonn': 'Kvinne',
            'stilling': 'student',
        },
        {
            'navn': 'Hanne',
            'bildeadresse': 'Hanne ',
            'alder': '43',
            'biografi': 'Hahaha',
            'kjonn': 'Kvinne',
            'stilling': 'teacher',
        },
        {
            'navn': 'Helene',
            'bildeadresse': 'Helene',
            'alder': '43',
            'biografi': 'Hahaha',
            'kjonn': 'Kvinne',
            'stilling': 'student',
        },
        {
            'navn': 'Linda',
            'bildeadresse': 'Linda',
            'alder': '43',
            'biografi': 'Hahaha',
            'kjonn': 'Kvinne',
            'stilling': 'student',
        },
        {
            'navn': 'Rolando',
            'bildeadresse': 'Rolando',
            'alder': '43',
            'biografi': 'Hahaha',
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

    function hentBiografi(navn) {

        for (let i = 0; i < liste.length; i++) {
            if (liste[i].biografi === navn) {
                return liste[i]
            }
        }
    }

    return {
        hentKvinne,
        hentMenn,
        hentAlle,
        hentBiografi
    }

}())
