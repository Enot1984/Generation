
const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алена",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Анна",
            "id_5": "Диана",
            "id_6": "Нина",
            "id_7": "Людмила",
            "id_8": "Дарья",
            "id_9": "Елена",
            "id_10": "Ангелина"
        }
    }`,

    fatherJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александров",
            "id_2": "Борисов",
            "id_3": "Владимиров",
            "id_4": "Геннадьев",
            "id_5": "Дмитриев",
            "id_6": "Егоров",
            "id_7": "Игорев",
            "id_8": "Леонидов",
            "id_9": "Михайлов",
            "id_10": "Николаев"
        }
    }`,

    jobMaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Летчик",
            "id_2": "Пожарный",
            "id_3": "Машинист",
            "id_4": "Строитель",
            "id_5": "Электрик"
         }
    }`,

    jobFemaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Медсестра",
            "id_2": "Парикмахер",
            "id_3": "Повар",
            "id_4": "Балерина",
            "id_5": "Учитель"
         }
    }`,

    birthMonthJson: `{  
        "count": 12,
        "list": {
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

  randomIntNumber: (min = 0, max = 1) => Math.round(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; 
        return obj.list[prop];
    },

    randombirthDay: function () {
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        let dateTimeFormat = new Intl.DateTimeFormat('ru-RU', options);
        return dateTimeFormat.format(new Date(this.randomIntNumber(1970, 2005), this.randomIntNumber(0, 11), this.randomIntNumber(1, 31)));
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
        if (this.person.gender == this.GENDER_MALE) {
        this.person.firstName = this.randomValue(this.firstNameMaleJson);
        this.person.surname = this.randomValue(this.surnameJson);
        this.person.fatherName = this.randomValue(this.fatherJson) + 'ич';
        this.person.birthDay = this.randombirthDay();
        this.person.job = this.randomValue(this.jobMaleJson);
    } else {
        this.person.firstName = this.randomValue(this.firstNameFemaleJson);
        this.person.surname = this.randomValue(this.surnameJson) + 'а';
        this.person.fatherName = this.randomValue(this.fatherJson) + 'на';
        this.person.birthDay = this.randombirthDay();
        this.person.job = this.randomValue(this.jobFemaleJson);
     } 
        return this.person;
},
}

