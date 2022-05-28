#include <iostream>
using namespace std;

int main(int argc, char const *argv[]){

    cout.setf(ios::fixed);
    cout.precision(2);

    double fact1 = 0;
    double fact2 = 0;

    while( int i = 1 ){
        string operation;
        cout << "Ingresar operacion a realizar: ";
        cin >> operation;

        if( operation == "suma" ){
            cout << "Ingresar factores: ";
            cin >> fact1 >> fact2;
            cout << fact1 + fact2 << endl;
        } else if( operation == "resta" ){
            cout << "Ingresar factores: ";
            cin >> fact1 >> fact2;
            cout << fact1 - fact2 << endl;
        } else if( operation == "cambio" ){
            cout << "Ingresar factor: ";
            cin >> fact1;
            fact1 *= -1;
            cout << fact1 << endl;
        } else if( operation == "parar" ){
            return 0;
        } else {
            cout << "Solo se permiten los casos suma, resta, cambio o parar." << endl;
        }
    }

    return 0;
}
