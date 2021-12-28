import {useState} from 'react'

const List = ({contacts}) => {
    const [filterText, setFilterText] = useState('');
    const filtered=contacts.filter((item)=>{
        return Object.keys(item).some((key)=>{
          return  item[key].toString().toLowerCase().includes(filterText.toLowerCase());
        })
    })
    console.log(filtered);
    return (
        <div>
            <input 
            placeholder='Filter contact' 
            value={filterText}
            onChange={(e)=>setFilterText(e.target.value)} />
            <ul className='list'>
                {
                    filtered.map((contact, index)=>
                        <li key={index}>{contact.fullname}</li>

                    )
                }
            </ul>
        </div>
    )
}

export default List
