const BibliotekModule = (function () {


    let liste = [{
            'navn': 'Arne',
            'bildeadresse': 'arne',
            'alder': '67',
            'biografi': 'Hahaha',
            'kjonn': 'Mann',
        },
        {
            'navn': 'Elise',
            'bildeadresse': 'elise',
            'alder': '30',
            'biografi': 'Hahaha',
            'kjonn': 'Kvinne',
        },
        {
            'navn': 'Filip',
            'bildeadresse': 'filip',
            'alder': '29',
            'biografi': 'Hahaha',
            'kjonn': 'Mann',
        },
        {
            'navn': 'Ina',
            'bildeadresse': 'ina',
            'alder': '34',
            'biografi': 'Hahaha',
            'kjonn': 'Kvinne',
        },
        {
            'navn': 'Mark',
            'bildeadresse': 'mark',
            'alder': '55',
            'biografi': 'Hahaha',
            'kjonn': 'Mann',
        },
        {
            'navn': 'Peter',
            'bildeadresse': 'peter',
            'alder': '19',
            'biografi': 'Hahaha',
            'kjonn': 'Mann',
        },
        {
            'navn': 'Randi',
            'bildeadresse': 'randi',
            'alder': '41',
            'biografi': 'Hahaha',
            'kjonn': 'Kvinne',
        },
        {
            'navn': 'Tone',
            'bildeadresse': 'tone',
            'alder': '43',
            'biografi': 'Hahaha',
            'kjonn': 'Kvinne',
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
