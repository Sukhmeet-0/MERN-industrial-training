import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect,useState} from 'react'
const Table=()=>{

    const[users,setUsers]=useState([])

    console.log('component rendered')
    useEffect(()=>{
        console.log('use effect')
        const url='https://jsonplaceholder.typicode.com/users'
        
        fetch(url).then((response)=>response.json()).then((data)=>{
            console.log(data)
            setUsers(data)
        })
    },[])
    return(
        <>
            <div className='container'>
                <h1>Table</h1>
                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Username</th>
                            <th>Website</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((x)=>
                            <tr key={x.id}>
                                <td>{x.id}</td>
                                <td>{x.name}</td>
                                <td>{x.phone}</td>
                                <td>{x.username}</td>
                                <td>{x.website}</td>
                                <td>{x.email}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
           
        </>
    )
}
export default Table