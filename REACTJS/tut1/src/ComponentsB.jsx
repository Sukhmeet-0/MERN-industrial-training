let ComponentsB=()=>{
    function printValue(val){
        alert(val)
    }
    let fetchVal=(event)=>{
        console.log(event.target.value)
    }
    let arr =[]
    let mycond = true
    if(!mycond){
        return <h1>Condition is not true</h1>
    }
    else{
        return(
            <>
                <button type={'button'} className="btn btn-danger" onClick={()=>printValue('react')}>Click Me</button>
                <input type={'text'} onChange={fetchVal} className={'form-control mt-3'}/>
                <hr />
                {arr.length ?
                <ul>
                    <li>{arr[0]}</li>
                    <li>{arr[1]}</li>
                    <li>{arr[2]}</li>
                    <li>{arr[3]}</li>
                    <li>{arr[4]}</li>
                    <li>{arr[5]}</li>
                    <li>{arr[6]}</li>
                </ul>: <p>No data found</p>}
                {arr.map((value,index)=>{
                    return <li key={index}>{index+" -> "+value}</li>
                })}
                {mycond && <p>My condition is ture</p>}
            </>
        )
    }
    
}
export default ComponentsB