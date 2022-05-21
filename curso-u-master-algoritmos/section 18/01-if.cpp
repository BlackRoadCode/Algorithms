#include <iostream>
using namespace std;

int main(int argc, char const *argv[]) {

    int calificacion;
    cout << "Ingresa la calificacion obtenida: ";
    cin >> calificacion;

    if ( calificacion > 5 ) cout << "Felicidades, no reprobaste";
    else cout << "Eres un burro y estas reprobado.";

    return 0;
}
