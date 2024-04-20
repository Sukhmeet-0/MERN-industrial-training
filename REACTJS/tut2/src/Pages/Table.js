import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect,useState} from 'react'
const Table=()=>{

    const[users,setUsers]=useState([])
    const [roll,setRoll]=useState(0)

    console.log('component rendered')
    useEffect(()=>{
        console.log('use effect')
        // const url='https://jsonplaceholder.typicode.com/users'
        // const url = 'https://vmmeducation.com/vmmapi/getstudents'
        
        
        // fetch(url).then((response)=>response.json()).then((data)=>{
        //     console.log(data)
        //     setUsers([data])
        // })
    },[])
    function search(){
        const url = 'https://vmmeducation.com/vmmapi/student/'+roll
        fetch(url).then((response)=>response.json()).then((data)=>{
            console.log(data)
            setUsers([data])
        })
    }
    return(
        <>
            <div className='container'>
                <h1>Table</h1>
                <div className="mb-3">
                    <label htmlFor="search" className="form-label">Search</label>
                    <input
                        type="text"
                        className="form-control"
                        name="search"
                        id=""
                        aria-describedby="helpId"
                        placeholder="search..."
                        onKeyUp={(e)=>setRoll(e.target.value)}
                    />
                    <button className='mt-3 btn btn-outline-primary' onClick={search}>Search</button>
                </div>
                
                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                            {/* <th>ID</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Username</th>
                            <th>Website</th>
                            <th>Email</th> */}
                            <th>Roll no.</th>
                            <th>Name</th>
                            <th>Marks</th>
                            <th>Phtot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((x)=>
                            // <tr key={x.id}>
                            //     <td>{x.id}</td>
                            //     <td>{x.name}</td>
                            //     <td>{x.phone}</td>
                            //     <td>{x.username}</td>
                            //     <td>{x.website}</td>
                            //     <td>{x.email}</td>
                            // </tr>
                            <tr key={x.rollno}>
                                <td>{x.rollno}</td>
                                <td>{x.name}</td>
                                <td>{x.marks}</td>
                                <td>{x.photo}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
           
        </>
    )
}
export default Table