// Add your code here
class School{
    constructor(name, level, studentsNumber){
        this._name=name;
        this._level=level;
        this._studentsNumber=studentsNumber;
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get studentsNumber(){
        return this._studentsNumber;
    }
    set studentsNumber(num){
        if(typeof num==='number'&&num>0){
            this._studentsNumber=num;
        } else {
            console.log('Invalid Input, please try again')
        }
    }
    quickFacts(){
        console.log(this._name+' edcuates '+this._studentsNumber+' students at the '+ this._level+ 'school level.')
        }
        //Terminamos en instruccion 6
    static pickSubstituteTeacher(substituteTeachers) {
        const index = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[index];
    }
}
class Primary extends School{
    constructor(name, level, studentsNumber, pickUpPolicy){
        super(name, level, studentsNumber);
        this.pickUpPolicy=pickUpPolicy;
    }
}
class Middle extends School{
    constructor(name, level, studentsNumber, pickUpPolicy){
        super(name, level, studentsNumber, pickUpPolicy);
    }
}
class High extends School{
    constructor(name, level, studentsNumber, pickUpPolicy, sportsTeam){
        super(name, level, studentsNumber, pickUpPolicy);
        this._sportsTeam=sportsTeam;
    }
}
