#include <iostream>
using namespace std;

int maximo(int a, int b){
    if ( a >= b ) return a;
    else return b;
}

int fatten( int x ){
    if( x < 10 ) return x;
    else{
        // al hacer módulo 10 de x, siempre obtenemos el último dígito del número
        int n = x % 10;
        int fn = fatten( x / 10 ) % 10;
        int valor = maximo(n, fn);

        return 10 * fatten( x / 10 ) + valor;
    }
}

int main() {
    int x;
    while ( cin >> x ){
        cout << fatten( x ) << endl;
    }
    
    return 0;
}