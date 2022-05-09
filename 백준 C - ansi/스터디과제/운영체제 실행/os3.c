#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>

#define MAX_ITER 3
int count;

void *Thread_func(void *data)
{
    int k;
    char* tname = (char*)data;
    count = 0;
    for(k=0; k<MAX_ITER; k++)
    {
        printf("IN [%s] COUNT %d\n", tname, count);
        count++; 
        sleep(1);
    }
}
int main()
{
    pthread_t t1, t2;
    int status;

    pthread_create(&t1, NULL, Thread_func, (void *)"Thread1");
    pthread_create(&t2, NULL, Thread_func, (void *)"Thread2");

    pthread_join(t1, (void *)&status);
    pthread_join(t2, (void *)&status);
    return 0;
}