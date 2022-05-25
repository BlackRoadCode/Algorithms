#include <iostream>
#include <string>
using namespace std;

int main() {

    compareTwoWords();


    return 0;
}

string compareTwoWords(){

    string a;
    string b;

    cout << "Introduce la primer palabra: " << endl;
    getline( cin, a );
    
    cout << "Introduce la segunda palabra: " << endl;
    getline( cin, b );

    cout << a << endl;
    cout << b << endl;


        // if ( a < b ){
        //     ;
        // } else if ( b> a ){}
}
