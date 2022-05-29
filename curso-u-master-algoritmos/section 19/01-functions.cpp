#include <iostream>
#include <string>
using namespace std;

void welcome( ){
    cout << "Bienvenido al juego!" << endl;
    cout << "Preparese para jugar." << endl;
}

void age(){
    int age;
    cout << "Cual es tu edad." << endl;
    cin >> age;
    cout << "Tu edad es: " << age << '.' << endl;
}

double returnMax( double a, double b ){
    if( a > b ) return a;
    else if ( b > a ) return b;
    else return 0;    
}

int main() {
    double num1, num2;
    cin >> num1 >> num2;
    
    welcome();
    age();

    cout << returnMax( num1, num2 ) << endl;

    return 0;
}


