#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

int x = 3;

int main (int argc, const char *argv[]) {

while(--x) {
    fork();
    printf("%d\n", x);
}

return 0 ;
}