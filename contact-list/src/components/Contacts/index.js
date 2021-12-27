import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'

 const Contacts= () => {
     const [contacts, setContacts] = useState([]);
     useEffect(()=>{},[contacts])

    return (
        <div>
            <List contacts={contacts}/>
            <Form addContacts={setContacts} contacts={contacts} />
        </div>
    )
}
export default Contacts