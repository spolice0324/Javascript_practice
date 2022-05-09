#include <stdio.h>
#define MAX 100

int main (void) {

 int n =0;
 int m = 0;
 int card[MAX];
 int sum = 0;
 int ret = 0;
 scanf("%d %d", &n, &m);

 for(int i = 0; i < n; i++){
     scanf("%d", &card[i]); }

for(int j = 0; j < n; j++) {
    for(int k = j+1; k < n; k++) {
        for(int l = k+1; l < n; l++) {
            sum = card[j] + card[k] + card[l];
            if(ret<sum && sum<=m) {
                ret = sum;
            }
        }
    }
} 


printf("%d", ret);
return 0;
}