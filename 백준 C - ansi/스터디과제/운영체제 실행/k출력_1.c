
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>

int main()
{
    int pid, k;
    for(k=0; k<5; k++){
        pid = fork();
        if(pid<0) return -1;
        if(pid>0) printf("when k =[%d], In parent=[%d], \n", k,pid);
    }
    return 0;
}
