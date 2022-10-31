// import React,{useState} from 'react';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import '../../CSS/googleKeep.css';

function NoteList(props){
    
    return (
        <>
            <div className="noteContent">
                <p className='noteMainHead'>Note{props.id + 1}</p>
                <h2 className='noteTitle'>{props.title}</h2>
                <p className='noteDesc'>{props.description}</p>
                <Button className='noteListDel' onClick={()=>{props.onSelect(props.id)}} startIcon={<ClearIcon/>}>Delete</Button>
            </div>
        </>
    )
}

export default NoteList;