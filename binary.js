/* 
Ques 1: Binary to Deciaml 
int power(int n,int t){
    int num = 1;
    for(int i = 1; i<= t;i++) {
        num *= n;
    }
    return num;
}
int binaryToDecimal(int n){
    int num = 0;
    int p = 0;
    while(n != 0){
        int ld = n%10;
        num += ld * power(2,p);
        n /=10;
        p++;
    }
 
 return num;

}
int main() {
    cout <<  binaryToDecimal(11);
    return 0;
}
*/

/* 
Bit Manipulation
#include <iostream>
using namespace std;

int getBit(int n,int pos){
    if(n >> pos & 1) return 1;
    else 0;
}
int setBit(int n,int pos){
    return (n | (1 << pos));
}
int clearBit(int n,int pos){
    return (n & ~(1 << pos));
}
int updateBit(int n,int pos,int val){
    // 1st clear bit at pos
    int mask = (n & ~(1 << pos));
    // 2nd set bit at pos
    return (mask | (val << pos));
}
int main() {
    cout << "Get Bit " << getBit(5,2) << endl;
    cout << "Set Bit " << setBit(5,1) << endl;
    cout << "Clear Bit "<< clearBit(5,1) << endl;
    cout << "Update Bit " << updateBit(8,1,1) << endl;
    return 0;
}
*/
