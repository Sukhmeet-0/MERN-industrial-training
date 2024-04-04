let Cards=(props)=>{
    return (
        <>
            <div className="col-lg-4">
            <div className="card">
                <div className="card-header  bg-primary"><h1>{props.title}, {props.age}</h1></div>
                <div className="card-body">
                    <p>{props.description} </p>
                </div>
            </div>
            </div>
        </>
    )
}
export default Cards