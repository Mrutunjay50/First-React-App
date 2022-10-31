import React,{useState} from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import "../CSS/todo.css";

function Li(props) {
    return  <li className="listItems1" style={{textDecoration : props.Line ? "line-through" : "none"}}><Button onClick={()=>{props.onSelect(props.id)}} className="SecIcon"><RemoveIcon style={{fontSize: 50 }}/></Button>{props.text}</li>;
}


function ToDo() {
    const [List, setList] = useState("");
    const [Items, setItems] = useState([]);
    const [line,setLine] = useState(false);
    const AddText = (e)=>{
        let val = e.target.value;
        setList(val);
    }
    
    const addItem = ()=>{
        setItems((everyOldValues)=>{
            return [...everyOldValues, List]
        })
        setList("");
    }
    const Del = (e)=>{
        setLine(true);
        const del = ()=>{
            setItems((allItems)=>{
                return allItems.filter((item,index)=>{
                    return index!==e;
                })
            })
            setLine(false);
        }
        setTimeout(del,2000);
    }

    return(
        <>
            <div className="toDoCont">
                <div className="center-div">
                    <div className="writeHead">
                    <br  />
                    <div className="HeadToDo">To Do List</div>
                    <br  />
                    <input type="text" name="" id="" placeholder="Add To List" value={List} onChange={AddText}/>
                    <Button className="IconAdd" onClick={addItem}>
                      <AddBoxIcon  style={{ color: "green",fontSize: 50 }}/> 
                    </Button>
                    </div>
                    <div className="toDoList">
                        <ul className="Lists">
                            {Items.map((eve,index) => {
                                return (<Li id={index} key={index} text={eve} onSelect={Del} Line={line}/>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ToDo;