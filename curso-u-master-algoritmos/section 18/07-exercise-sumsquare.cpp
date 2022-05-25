#include <iostream>
using namespace std;

int main(int argc, char const *argv[]){
    int nat;
    int counter = 0;
    cout << "Introduce el numero natural: ";
    cin >> nat;

    for( int i=0 ; i<=nat ; i++ ){
        counter += i*i;
    }

    cout << counter << endl;

    return 0;
}
