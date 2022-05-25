#include <iostream>
#include <string>
using namespace std;

int main() {

    string a;
    string b;

    cout << "Introduce la primer palabra: " << endl;
    getline( cin, a );
    
    cout << "Introduce la segunda palabra: " << endl;
    getline( cin, b );

    if ( a < b ){
        cout << a << " < " << b;
    } else if ( b < a ){
        cout << b << " < " << a;
    } else {
        cout << b << " = " << a;
    }

    cout << endl;

    return 0;
}

