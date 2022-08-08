
class Student{
    constructor( firstName, lastName, year ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }

    static enrollStudents( ...students ){
        // ... maybe send an email here
    }

    fullName(){
        return `Tu nombre completo es ${ this.firstName } ${ this.lastName }`;
    }

    markLate(){
        this.tardies += 1;
        return `${ this.firstName } ${ this.lastName } ha llegado tarde ${ this.tardies } veces.`;
    }

    addScore( score ){
        this.scores.push( score );
    }
}

let firstStudent = new Student( 'Pepe', 'Sosa', 4 );
let secondStudent = new Student( 'Hector', 'Rodriguez', 1 );

Student.enrollStudents( [ firstStudent, secondStudent ] );