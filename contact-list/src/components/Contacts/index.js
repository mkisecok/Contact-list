import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'
import './Contacts.css'

 const Contacts= () => {
     const [contacts, setContacts] = useState([
         {
             fullname:'max',
             phone_number:1234456
         },{
             fullname:'john',
             phone_number:456123
         },{
             fullname:'hennry',
             phone_number:789654
         }
     ]);
     useEffect(()=>{},[contacts])

    return (
        <div id='container'>
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContacts={setContacts} contacts={contacts} />
        </div>
    )
}
export default Contacts