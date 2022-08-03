// import { useState, useEffect } from 'react';
// import { getAllNotes } from '../../firebase/firestore'; 

export default function Notes({ uid }) {

  // // estructura de hook para declarar lista de usuarios
  // const [users, setUsers] = useState([]);

  // // funcion para peticion de usuarios
  // const getUsers = async () => {
  //   usersPetition(activeSessionToken)
  //     .then((response) => {
  //       setUsers(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // let x;

  // useEffect(() => {
  //   getAllNotes((notes)=>{
  //     notes.forEach((doc)=>{
  //       if(doc.data().uid === uid){
  //         x.push(doc.data());
  //         // setType(doc.data().type);
  //         console.log('NOTAAAS',doc.data());
  //       }
  //     });
  //   });
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  
  // {x.map((noti) => (
  //   <p>{noti.note}</p>
  // ))}

  return (
    <div>
      notiiis
    </div>
  )
}
