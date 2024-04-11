import { useState } from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

let Contact = ()=>{
    // let [name,setName]=useState('john')
    // let [name,setName]=useState(['john','cena','singh','kaur'])
    // // let name='john'
    // function changeName(){
    //     // setName('sukhmeet')
    //     setName((prevState)=>[...prevState,'Sukhmeet'])
    // }


    let [users,setUsers] = useState({
        name:'sukhmeet',
        age:22,
        lastname:'singh'
    })

    let [email,setEmail]=useState('')
    let [pass,setPass]=useState('')
    function mobile(){
        setUsers((prevState)=>({...prevState,'mobile':'9988899879'}))
    }
    function handleform(event){
        setEmail(event.target.value)
    }

    function handleform2(event){
        setPass(event.target.value)
    }
    function handle(event){
        event.preventDefault()
        console.log('Form submitted')
    }
    return (
        <>
            <div className="container">
            
                {/* <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul> */}
                <h1>Contact Us</h1>
                {/* {name.map((value,key)=>
                <p key={key}>{value}</p>
            )} */}
                {/* <button onClick={changeName}>Click</button> */}


                {/* <h2>{users.name}</h2> */}
                
                {/* {Object.keys(users).map((values)=>
                    <p key={values}>{values} - {users[values]}</p>
                )}
                <button onClick={mobile}>Click me</button> */}

                <form action="" onSubmit={handle}>
                    <input type="email" placeholder="enter email" onKeyUp={handleform} />
                    <input type="password" placeholder="enter password" onKeyUp={handleform2} />
                    <button type="submit" >Submit</button>
                </form>

                <p>{email}</p>
                <p>{pass}</p>
                
            </div>
        </>
    )
}
export default Contact