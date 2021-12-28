import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'
import './Contacts.css'

 const Contacts= () => {
     const [contacts, setContacts] = useState([
         {
             fullname:'mahmut',
             phone_number:1234456
         },{
             fullname:'ali',
             phone_number:456123
         }
     ]);
     useEffect(()=>{},[contacts])

    return (
        <div id='container'>
            <List contacts={contacts}/>
            <Form addContacts={setContacts} contacts={contacts} />
        </div>
    )
}
export default Contacts