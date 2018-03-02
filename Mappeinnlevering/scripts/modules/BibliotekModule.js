const BibliotekModule = (function () {


    let list = [{
            'navn': 'Andreas Eilertsen Lybo',
            'imagesrc': 'Andreas Java',
            'alder': '22',
            'biografi': 'Vegetarian, the only meat I eat is dick.',
            'kjonn': 'Mann',
            'stilling': 'student',
        },
        {
            'navn': 'Jenny Mylius Sandmo',
            'imagesrc': 'Jenny',
            'alder': '21',
            'biografi': 'Det eneste lavere enn standardene mine er saldoen min.',
            'kjonn': 'Kvinne',
            'stilling': 'student',
        },
        {
            'navn': 'Pär Joona',
            'imagesrc': 'Pierre',
            'alder': '25',
            'biografi': 'Kan jeg få en veibeskrivelse til hjertet ditt?',
            'kjonn': 'Mann',
            'stilling': 'student',
        },
        {
            'navn': 'Elisabeth Henriksen',
            'imagesrc': 'Beth',
            'alder': '22',
            'biografi': 'Svømme kan jeg, men i dine øyne drukner jeg..',
            'kjonn': 'Kvinne',
            'stilling': 'student',
        },
        {
            'navn': 'Simen Johansen',
            'imagesrc': 'Simen',
            'alder': '22',
            'biografi': 'Jeg satser på at dine standarder er mye lavere enn mine.',
            'kjonn': 'Mann',
            'stilling': 'student',
        },
        {
            'navn': 'Ben Johansen',
            'imagesrc': 'Ben',
            'alder': '20',
            'biografi': 'Im cute, fun and love life! I hate playing head games unless they involve the mouth.',
            'kjonn': 'Mann',
            'stilling': 'student',
        },
        {
            'navn': 'Zachy Laguda',
            'imagesrc': 'Zach',
            'alder': '22',
            'biografi': 'The asian for any occasion. Msg if you play pokemon.',
            'kjonn': 'Mann',
            'stilling': 'student',
        },
        {
            'navn': 'Trine Bekkejorden',
            'imagesrc': 'Trine',
            'alder': '24',
            'biografi': 'The only hair between my legs should be your beard.',
            'kjonn': 'Kvinne',
            'stilling': 'student',
        },
        {
            'navn': 'Hanne Sørum',
            'imagesrc': 'Hanne ',
            'alder': '43',
            'biografi': 'I could really make use of a massage, an orgasm, hard apple cider and a check for $300,000',
            'kjonn': 'Kvinne',
            'stilling': 'teacher',
        },
        {
            'navn': 'Helene Thorkildsen',
            'imagesrc': 'Helene',
            'alder': '21',
            'biografi': 'Only thing tighter than my asshole is family:-)',
            'kjonn': 'Kvinne',
            'stilling': 'student',
        },
        {
            'navn': 'Linda Nordåk',
            'imagesrc': 'Linda',
            'alder': '23',
            'biografi': 'Oh youve found out you only live once? Please tell me more about your other scientific discoveries ',
            'kjonn': 'Kvinne',
            'stilling': 'student',
        },
        {
            'navn': 'Vibecke Osfoss',
            'bildeadresse': 'Vibece',
            'alder': '35',
            'biografi': 'You only live once!',
            'kjonn': 'Kvinne',
            'stilling': 'teacher',
        },
        {
            'navn': 'Per Lauvås',
            'bildeadresse': 'Per',
            'alder': '35',
            'biografi': 'You only live once!',
            'kjonn': 'Mann',
            'stilling': 'teacher',
        },
        {
            'navn': 'Eivind Brevik',
            'bildeadresse': 'Eivind',
            'alder': '35',
            'biografi': 'You only live once!',
            'kjonn': 'Mann',
            'stilling': 'teacher',
        },
        {
            'navn': 'Siri Fagernes',
            'bildeadresse': 'Siri',
            'alder': '35',
            'biografi': 'You only live once!',
            'kjonn': 'Kvinne',
            'stilling': 'teacher',
        },
        {
            'navn': 'Rolando Gonzalez',
            'imagesrc': 'Rolando',
            'alder': '35',
            'biografi': 'You only live once!',
            'kjonn': 'Mann',
            'stilling': 'teacher',
        }
    ]

    function getAll() {
        return list;
    }

    function getWomen() {

        let array = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].kjonn === 'Kvinne') {
                array.push(list[i]);
            }
        }
        return array
    }

    function getMen() {

        let array = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].kjonn === 'Mann') {
                array.push(list[i]);
            }
        }
        return array
    }

    function getStudent() {

        let array = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].stilling === 'student') {
                array.push(list[i]);
            }
        }
        return array
    }

    function getTeacher() {

        let array = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].stilling === 'teacher') {
                array.push(list[i]);
            }
        }
        return array
    }

    return {
        getAll,
        getWomen,
        getMen,
        getStudent,
        getTeacher
    }

}())
