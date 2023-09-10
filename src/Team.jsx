import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11);
    const add=()=>{
        const newTeam=team+1;
        setTeam(newTeam);

    }
    const remove=()=>{
        const newTeam=team-1;
        setTeam(newTeam);
    }
    const teamStyle={
        border:'3px solid purple',
        borderRadius:'5px',
        padding:'10px',
        marginTop:'10px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove</button>
        </div>
    )
}