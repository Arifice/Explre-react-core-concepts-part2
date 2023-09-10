export default function Friend({friend}){
    
    console.log('friend',typeof(friend),friend);
    const {name, email,id,phone,website,username}=friend;
    return (
        <div className="box"> 
            <h3>Name :{name}</h3>
            <p>Id : {id}</p>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <p>Website:{website}</p>
            <p>User-name:{username}</p>
            
        </div>
    )
}