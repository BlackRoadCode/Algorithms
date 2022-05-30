#include <iostream>
using namespace std;

void decompose( int n, int& h, int& m, int& s ){
    h = n / 3600;
    m = ( n % 3600 ) / 60;
    s = (  n % 3600 ) % 60;

    cout << h << ' ' << m << ' ' << s << endl;
}

int main() {

    int h = 0;
    int m = 0;
    int s = 0;

    decompose( 100000, h, m, s );

    return 0;
}