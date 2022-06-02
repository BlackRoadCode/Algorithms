#include <iostream>
#include <cmath>
using namespace std;

double distanceToOrigin( double x, double y ){
    return sqrt( ( x * x ) + ( y * y ) );
}

int main() {
    cout << distanceToOrigin( 634, 371 ) << endl;
    return 0;
}