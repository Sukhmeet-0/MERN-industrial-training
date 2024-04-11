import { useForm } from 'react-hook-form'
import {ErrorMessage} from '@hookform/error-message'
const Forms = () => {

    const { register, handleSubmit, formState:{errors} } = useForm()

    function handleForm(data){
        console.log(data)
    }
    return (
        <>
            <div className="container">
                <h1>React Hook Form Example</h1>

                <hr />
                <div className="alert alert-primary">
                    <form action="" className='mb-3' onSubmit={handleSubmit(handleForm)}>
                        <label htmlFor="">Name</label>
                        <input {...register('userName',{required:'Please enter your name!'})} type="text" className="form-control" />
                        <ErrorMessage errors={errors} name='userName' render={({message})=><p>{message}</p>}/>
                        <label htmlFor="">Email</label>
                        <input {...register('email',{required:'please enter your email!'})} type="email" className="form-control" />
                        <ErrorMessage errors={errors} name='email' render={({message})=><p>{message}</p>}/>
                        <label htmlFor="">Password</label>
                        <input {...register('password',{required:'Please enter your password!'})} type="Password" className="form-control" />
                        <ErrorMessage errors={errors} name='password' render={({message})=><p>{message}</p>}/>
                        <label htmlFor="">Mobile</label>
                        <input {...register('mobile',{required:'Please enter your mobile!'})} type="tel" className="form-control" />
                        <ErrorMessage errors={errors} name='mobile' render={({message})=><p>{message}</p>}/>
                        <button type='submit' className='my-3 btn btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Forms