//Call Back Hell example

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(
                (id === 'spolice' && password ==='0324') ||
                (id === 'durud0324' && password ==='2810') 
            ) {
                resolve(id);
            } else {
                reject(new Error('not Found'));
            }
        }, 2000);
     });
    }

    getRoles(user) {
    return new Promise((resolve, reject)=> {
            setTimeout(() => {
                if (user === 'spolice') {
                    resolve({ name: 'SYK', role: 'admin' });
                }
                else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}



const userStorage = new UserStorage();
const id = prompt('Enter Your ID');
const password = prompt('Enter Your Password');
userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role.`))
.catch(console.log);