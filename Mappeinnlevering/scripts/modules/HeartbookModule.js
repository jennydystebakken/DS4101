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
            'gender': 'Women',
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
            'gender': 'Women',
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
            'description': 'Im cute, fun and love life! I hate playing head games unless they involve the mouth.',
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
            'description': 'The only hair between my legs should be your beard.',
            'gender': 'Women',
            'post': 'Student',
        },
        {
            'name': 'Hanne Sørum',
            'imagesrc': 'Hanne ',
            'age': '43',
            'description': 'I could really make use of a massage, an orgasm, hard apple cider and a check for $300,000',
            'gender': 'Women',
            'post': 'Teacher',
        },
        {
            'name': 'Helene Thorkildsen',
            'imagesrc': 'Helene',
            'age': '21',
            'description': 'Only thing tighter than my asshole is family:-)',
            'gender': 'Women',
            'post': 'Student',
        },
        {
            'name': 'Linda Nordåk',
            'imagesrc': 'Linda',
            'age': '23',
            'description': 'Oh youve found out you only live once? Please tell me more about your other scientific discoveries ',
            'gender': 'Women',
            'post': 'Student',
        },
        {
            'name': 'Vibecke Osfoss',
            'imagesrc': 'Vibece',
            'age': '35',
            'description': 'You only live once!',
            'gender': 'Women',
            'post': 'Teacher',
        },
        {
            'name': 'Per Lauvås',
            'imagesrc': 'Per',
            'age': '35',
            'description': 'You only live once!',
            'gender': 'Man',
            'post': 'Teacher',
        },
        {
            'name': 'Eivind Brevik',
            'imagesrc': 'Eivind',
            'age': '35',
            'description': 'You only live once!',
            'gender': 'Man',
            'post': 'Teacher',
        },
        {
            'name': 'Siri Fagernes',
            'imagesrc': 'Siri',
            'age': '35',
            'description': 'You only live once!',
            'gender': 'Women',
            'post': 'Teacher',
        },
        {
            'name': 'Rolando Gonzalez',
            'imagesrc': 'Rolando',
            'age': '35',
            'description': 'You only live once!',
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
            if (list[i].gender === 'Women') {
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
            if (list[i].post === 'student') {
                array.push(list[i]);
            }
        }
        return array
    }

    function getTeacher() {

        let array = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].post === 'teacher') {
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
