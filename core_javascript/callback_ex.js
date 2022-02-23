//Call Back Hell example

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'spolice' && password ==='0324') ||
                (id === 'durud0324' && password ==='2810') 
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not Found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(()=>{
            if(user ==='spolice'){
                onSuccess({ name: 'SYK', role: 'admin'});
            }
            else {
                onError(new Error('not Found'));
            }
        },1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('Enter Your ID');
const password = prompt('Enter Your Password');

userStorage.loginUser(
    id,
    password, 
    user => { 
    userStorage.getRoles( 
        user,
        userWithRole => {
            alert(
                `Hello ${userWithRole.name}, You have a ${userWithRole.role} role.`
            );
        },
        error=>{
            alert(
                `You don't have any Authority.`
                );
        }
    );
    },
    error =>{
        alert(
            `You don't have any account.`
            );
    }
);