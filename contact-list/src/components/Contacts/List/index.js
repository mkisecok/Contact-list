import React from 'react'

const List = ({contacts}) => {
    return (
        <div>
            <ul>
                {
                    contacts.map((contact, index)=>
                        <li key={index}>{contact.fullname}</li>

                    )
                }
            </ul>
        </div>
    )
}

export default List
