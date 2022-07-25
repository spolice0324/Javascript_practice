import React from 'react';


function User({ user }) {
  return (
    <div>
      <b> {user.username} </b> <span> ({user.email})</span>
    </div>
  )
}


function UserList({users}) {
  
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );

}


// (
//   <div>
//     <div>
//       <b> {users[0].username}</b> <span> ({users[0].email})</span>
//     </div>

//      <div>
//       <b> {users[1].username}</b> <span> ({users[1].email})</span>
//     </div>

//      <div>
//       <b> {users[2].username}</b> <span> ({users[2].email})</span>
//     </div>
//   </div>
//

// <div>
//  <User user={users[0]} />
//  <User user={users[1]} />
//  <User user={users[2]} />
// </div> */

//<div>
//  {users.map(user => (
//   <User user={user} key={user.id} />
//  ))}
// </div>

//);

//} 

//키 값이 필요한 이유
//=> 배열 렌더링 때 ex) a,b,c,d가 있을 때 b와 c 사이에 z가 삽입 되면 c자리에 z, d자리에 c 식으로 밀려난다. 
// 하지만, 키값을 주면 고유의 값으로 수정되지 않는 기존의 값은 그대로 두고 원하는 곳에 내용을 삽입, 삭제 할 수 있다.

export default UserList;
