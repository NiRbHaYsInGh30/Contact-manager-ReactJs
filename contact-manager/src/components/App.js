import React,{useState,useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const[contacts,setContacts]=useState([]);
  
  const addcontacthandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,contact]);
  };
  useEffect(()=>{
    const reteriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(reteriveContacts) setContacts(reteriveContacts);
  },[]);
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify (contacts));
  },[contacts]);
  return (
    <><div className="ui container"></div><>
    <><Header />
      <AddContact addcontacthandler={addcontacthandler} /></><ContactList contacts={contacts} /></></>
  );
}

export default App;
