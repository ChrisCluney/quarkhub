import axios from 'axios'
import {useEffect, useState} from 'react'
// import FavoritesCard from './FavoritesCard'
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from '../../firebase';
// import { numberWithCommas } from '../Cryptocurrencies/Cryptocurrencies';
// import { useUserAuth } from '../../context/UserAuthContext';
import { onSnapshot } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { updateDoc, deleteField } from "firebase/firestore";
import { deleteDoc } from 'firebase/firestore';
// import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useUserAuth } from '../../context/UserAuthContext';
import './Favorites.css'
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
export const Favorites = () => {
  const [user, setuser] = useState("")
  const [users, setUsers] = useState([])
  const [coin, setCoin] = useState()
  const {userId} = useUserAuth()
 
  // const auth = getAuth();
  // const user = auth.currentUser;
  // console.log(auth.config)
  // if (user) {
  //   // User is signed in, see docs for a list of available properties
  //   // https://firebase.google.com/docs/reference/js/firebase.User
  //   // ...
  // } else {
  //   // No user is signed in.
  // }
  
const getData = async () => {
  const auth = await getAuth();
  const newUser = auth.currentUser;
  setuser(newUser)
  console.log(typeof userId)
  const q = await query(collection(db, userId));
  const unsub = onSnapshot(q, (querySnapshot) => {
    let usersArray = [];
    querySnapshot.forEach((doc) => {
      usersArray.push({...doc.data(), id: doc.id });
      console.log(doc.id)
    });
    setUsers(usersArray);
  });
}
 

// firebase data coming in --------------------------------
useEffect(() => {
 getData()
  
  // return () => unsub();
}, [userId]);
// console.log(users[0].currency)





//Coingecko Api Single Coin------------------------------------------------------------



const fetchCoin = async () => {



  for(let i = 0; i < users.length; i++){
  const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${users[i].currency}`);
console.log(data.id)
  setCoin(data);
  
  }
};

useEffect(() => {
  fetchCoin();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

//------------------------------------------------------------------------------------




//Delete function -----------------------------------
const handleDelete = async (id) => {
  
  const docRef = doc(db, `${user.uid}`, id)
  await deleteDoc(docRef);

  console.log(id)
  return id
}
 //----------------------------------------------------




  return (
    <>
    <h1 className='fav__title'>Your Favorites</h1>
    <div className='results'>
        <div className="fav__container">
        {users.map((user) => {
          return <div className='fav__row'>

                  <Link to={`../coins/${user.currency}`}>
                    <div className='logo__and__name'>
                    <img src={user.image} className="cryp__image"/>
                    <h1 className='currency__name'>{user.currency}</h1>
                </div>
              </Link>
              
              <div className="delete__button__section">
                <DeleteIcon className="delete__button" 
                style={{ cursor:"pointer" }}
                onClick={() => handleDelete(user.id)} />
              </div>


              </div>
            
          
          
        })}
        </div>
          {/* <h1>{coin?.id}</h1> */}
    </div></>
  )
}
