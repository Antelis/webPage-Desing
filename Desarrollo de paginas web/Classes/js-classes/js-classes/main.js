//Create school class, which will have our main constructors and getters for its attributes and methods
class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    
    get name() {
        return this._name;
    }
    
    get level() {
        return this._level;
    }
    
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    
    set numberOfStudents(num) {
        if (typeof num === 'number' && num > 0) {
            this._numberOfStudents = num;
        } else {
            console.log('Invalid input: must be a number and higher than 0');
        }
    }
    //Definde quick maths and static methods
    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    
    static pickSubstituteTeacher(substituteTeachers) {
        const index = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[index];
    }
}
//Create the other schools classes, which will all inherit from the main school class, and have additional attributes and methods depending on the school

//Supers call on the constructor of the father class, saves us code written
class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'Primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}
class Middle extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'Middle', numberOfStudents);
    }
}

class High extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'High', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    
    get sportsTeams() {
        console.log(this._sportsTeams);
        return this._sportsTeams;
    }
}
//Vreate different schools to test our classes and its methods
const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

const substituteTeacher = School.pickSubstituteTeacher(['Michael Jordan', 'Bugs Bunny', 'Hugo Sanchez', 'Sergio Perez', 'J.R.R Tolkien', 'Manu Ginobili']);
console.log(substituteTeacher);

const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
const teams = alSmith.sportsTeams;