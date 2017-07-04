/**
 * Created by Vicky on 7/3/2017.
 */
function measurePatient(name, age, weight, height) {
    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
    };
    let bmi = Math.round(weight/Math.pow((height/100), 2));
    person.BMI = bmi;
    let status;
    switch (true){
        case bmi < 18.5: status = 'underweight'; break;
        case bmi < 25: status = 'normal'; break;
        case bmi < 30: status = 'overweight'; break;
        case bmi >= 30: status = 'obese'; break;
    }
    person.status = status;
    if (status === 'obese')
        person.recommendation = 'admission required';
    return person;

}