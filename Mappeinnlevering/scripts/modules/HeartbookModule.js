const HeartbookModule = (function () {


    let list = [{
            'name': 'Andreas Eilertsen Lybo',
            'imagesrc': 'Andreas Java',
            'age': '22',
            'description': 'Vegetarian, the only meat I eat is dick.',
            'gender': 'Man',
            'post': 'Student',
        },
        {
            'name': 'Jenny Mylius Sandmo',
            'imagesrc': 'Jenny',
            'age': '21',
            'description': 'Det eneste lavere enn standardene mine er saldoen min.',
            'gender': 'Woman',
            'post': 'Student',
        },
        {
            'name': 'Pär Joona',
            'imagesrc': 'Pierre',
            'age': '25',
            'description': 'Kan jeg få en veibeskrivelse til hjertet ditt?',
            'gender': 'Man',
            'post': 'Student',
        },
        {
            'name': 'Elisabeth Henriksen',
            'imagesrc': 'Beth',
            'age': '22',
            'description': 'Svømme kan jeg, men i dine øyne drukner jeg..',
            'gender': 'Woman',
            'post': 'Student',
        },
        {
            'name': 'Simen Johansen',
            'imagesrc': 'Simen',
            'age': '22',
            'description': 'Jeg satser på at dine standarder er mye lavere enn mine.',
            'gender': 'Man',
            'post': 'Student',
        },
        {
            'name': 'Ben Johansen',
            'imagesrc': 'Ben',
            'age': '20',
            'description': 'Jeg forventer ikke at du skal falle for meg, men du kan da i det minste snuble litt?',
            'gender': 'Man',
            'post': 'Student',
        },
        {
            'name': 'Zachy Laguda',
            'imagesrc': 'Zach',
            'age': '22',
            'description': 'The asian for any occasion. Msg if you play pokemon.',
            'gender': 'Man',
            'post': 'Student',
        },
        {
            'name': 'Trine Bekkejorden',
            'imagesrc': 'Trine',
            'age': '24',
            'description': 'Er lei av singellivet!',
            'gender': 'Woman',
            'post': 'Student',
        },
        {
            'name': 'Hanne Sørum',
            'imagesrc': 'Hanne ',
            'age': '43',
            'description': 'Det eneste lavere enn standardene mine er saldoen min.',
            'gender': 'Woman',
            'post': 'Teacher',
        },
        {
            'name': 'Helene Thorkildsen',
            'imagesrc': 'Helene',
            'age': '21',
            'description': 'Jeg forventer ikke at du skal falle for meg, men du kan da i det minste snuble litt?',
            'gender': 'Woman',
            'post': 'Student',
        },
        {
            'name': 'Linda Nordåk',
            'imagesrc': 'Linda',
            'age': '23',
            'description': 'Oh youve found out you only live once? Please tell me more about your other scientific discoveries ',
            'gender': 'Woman',
            'post': 'Student',
        },
        {
            'name': 'Vibecke Osfoss',
            'imagesrc': 'Vibece',
            'age': '35',
            'description': 'You only live once!',
            'gender': 'Woman',
            'post': 'Teacher',
        },
        {
            'name': 'Per Lauvås',
            'imagesrc': 'Per',
            'age': '35',
            'description': 'Det eneste lavere enn standardene mine er saldoen min.',
            'gender': 'Man',
            'post': 'Teacher',
        },
        {
            'name': 'Eivind Brevik',
            'imagesrc': 'Eivind',
            'age': '35',
            'description': 'Svømme kan jeg, men i dine øyne drukner jeg..',
            'gender': 'Man',
            'post': 'Teacher',
        },
        {
            'name': 'Siri Fagernes',
            'imagesrc': 'Siri',
            'age': '35',
            'description': 'Kan jeg få en veibeskrivelse til hjertet ditt?',
            'gender': 'Woman',
            'post': 'Teacher',
        },
        {
            'name': 'Rolando Gonzalez',
            'imagesrc': 'Rolando',
            'age': '35',
            'description': 'YOLO',
            'gender': 'Man',
            'post': 'Teacher',
        }
    ]

    function getAll() {
        return list;
    }

    function getWomen() {

        let array = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].gender === 'Woman') {
                array.push(list[i]);
            }
        }
        return array
    }

    function getMen() {

        let array = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].gender === 'Man') {
                array.push(list[i]);
            }
        }
        return array
    }

    function getStudent() {

        let array = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].post === 'Student') {
                array.push(list[i]);
            }
        }
        return array
    }

    function getTeacher() {

        let array = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].post === 'Teacher') {
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
