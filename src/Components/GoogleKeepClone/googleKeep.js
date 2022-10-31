import React,{useState} from 'react';
import AddBtn from './googleKeepComp';
import NoteList from './NoteList';
import '../../CSS/googleKeep.css';


function GoogleKeep() {
    const[list, setList] = useState([]);
    const addNote = (data)=>{
        setList((preVal) =>{
            return [...preVal,data];
        })
    }
    const deleteNote = (id)=>{
        setList((allVal) => {
            return allVal.filter((item,index)=> index!==id);
        })
    }
    return (
        <>
        <div className="mainNoteCont">
            <div className="KeepCont">
                <AddBtn peNote={addNote}/>
            </div>
            <div className="keepNoteList">
                {list.map((item,index) => {
                    return (<NoteList key={index} id={index} {...item} onSelect={deleteNote} />);
                })}
            </div>
        </div>
        </>
    )
}

export default GoogleKeep;