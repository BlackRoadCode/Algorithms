#include <iostream>
using namespace std;

int main(int argc, char const *argv[]) {
    // cout << "Hola mundo sin STD" << endl;

    int a;
    int b;

    double c;
    double d;

    cout << "Introduce el entero a: ";
    cin >> a;
    cout << "Introduce el entero b: ";
    cin >> b;
    cout << endl;

    cout << "La suma de ambos enteros es: " << a + b << endl;
    cout << "La resta de ambos enteros es: " << a - b << endl;
    cout << "La multiplicacion de ambos enteros es: " << a * b << endl;
    cout << "El modulo de ambos enteros es: " << a % b << endl;

    cout << "-----------------------------------------------------------" << endl;
    cout << endl;

    cout << "Introduce el decimal c: ";
    cin >> c;
    cout << "Introduce el decimal d: ";
    cin >> d;
    cout << endl;

    cout << "La suma de ambos decimales es: " << c + d << endl;
    cout << "La resta de ambos decimales es: " << c - d << endl;
    cout << "La multiplicacion de ambos decimales es: " << c * d << endl;
    cout << "La division de ambos decimales es: " << c / d << endl;

    cout << "-----------------------------------------------------------" << endl;

    return 0;
}
