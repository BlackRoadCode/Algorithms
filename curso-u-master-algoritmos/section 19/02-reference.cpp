#include <iostream>
using namespace std;

void swap2( int& a, int& b ){
    int c = b;
    b = a;
    a = c;
}


int main() {
    int x;
    int y;

    cin >> x >> y;

    swap2(x, y);

    cout << x << " , " << y << endl;

    return 0;
}