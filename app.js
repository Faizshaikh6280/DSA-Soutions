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
