
#include <stdio.h>

int main (void) {

    int n;
    scanf("%d", &n);
    int result;

    for ( int i = 1; i <= 9; i++)
    {
        result = n * i; 
        printf("%d * %d = %d\n", n, i, result);
    }
}