#include <iostream>
#include <string>
using namespace std;

int main() {

    int h, m, s;
    string hs, ms, ss;

    cout << "Introduce la hora: " << endl;
    cin >> h;

    if ( h >= 0 and h <= 24 ){
        h;
    } else {
        cout << "No es posible ingresar mas de 24 horas." << endl;
        return 0;
    }
    
    cout << "Introduce los minutos: " << endl;
    cin >> m;

    if ( m > 60 ){
        cout << "No es posible ingresar mas de 60 minutos." << endl;
        return 0;
    }

    cout << "Introduce los segundos: " << endl;
    cin >> s;
    
    if( s > 60 ){
        cout << "No es posible ingresar mas de 60 segundos." << endl;
        return 0;
    } else if ( s > 58 and s < 61 ){
        m = m + 1;
        s = 0;

        if( m >= 60 ){
            h = h + 1;
            m = 0;

            if( h >= 24 ){
                h = 0;
            }
        }

    } else {
        s = s + 1;
    }

    if ( h <= 10 ){
        hs = "0" + to_string(h);
    } else {
        hs = to_string(h);
    }
    
    if ( m <= 10 ){
        ms = "0" + to_string(m);
    } else {
        ms = to_string(m);
    }
    
    if ( s <= 10 ){
        ss = "0" + to_string(s);
    } else {
        ss = to_string(s);
    }

    cout << hs << ":" << ms << ":" << ss << endl;

    return 0;
}

