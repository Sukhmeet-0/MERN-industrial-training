import {useForm} from 'react-hook-form'
import 'bootstrap/dist/css/bootstrap.min.css';



function CreateAccount(){
    const{
        register,
        handleSubmit
    }=useForm()
    function onSubmit(controls){
        const url = "http://68.178.163.4:3002/vmmeducation/api/create-account"
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(controls)
        }).then((response)=>response.json()).then((data)=>{
            console.log(data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    return(
        <>
            <div className="container-fluid">
            <h1>Create Account</h1>
            <hr />
            <form action="" method="" onSubmit={handleSubmit(onSubmit)}>
                <input className='form-control mb-2' {...register('name')} type="text" placeholder="enter name" /><br />
                <input className='form-control mb-2' {...register('email')} type="email" placeholder="enter email" /><br />
                <input className='form-control mb-2' {...register('password')} type="password" placeholder="enter password" /><br />
                <input className='form-control mb-2' {...register('confirm password')} type="password" placeholder="confirm password" /><br />
                <input className='form-control mb-2' {...register('mobile')} type="tel" placeholder="enter mobile" /><br />
                <select className='form-control mb-2' {...register('gender')}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <br />
                <textarea className='form-control mb-2' {...register('address')} name="" id="" cols="30" rows="10"></textarea><br />
                <button className='btn btn-outline-primary'>Submit</button>
            </form>
            </div>
        </>
    )
}export default CreateAccount