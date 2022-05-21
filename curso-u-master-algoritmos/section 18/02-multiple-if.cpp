#include <iostream>
using namespace std;

int main() {

    int edad;
    cout << "Ingresa la edad de la persona: ";
    cin >> edad;

    if ( edad > 18 ){
        cout << "Es un adulto.";
    } else if ( edad > 3 && edad < 18 ){
        cout << "Es un joven.";
    } else {
        cout << "Es un bebe.";
    }

    return 0;
}
