import React,{useState} from 'react';
import Button from '@mui/material/Button';
import '../CSS/forms.css';
import ToDo from './todo_app';
// import Box from '@mui/material/Box';



function Forms(){
    const [name,setName] = useState({
        Email : "",
        Fname : "",
        Lname : "",
        number : ""
    });
    // const [Finalname, setFinalname] = useState({
    //     Finalemail : "",
    //     FINALname : "",
    //     LASTname : "",
    //     Num: 0
    // });
    const updateInput = (e) =>{
        let val = e.target.value;
        let check = e.target.name;
        setName((prevVal) => {

            return {
                ...prevVal,
                [check] : val
            }


        //OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR


            // if(check === "Fame"){
            //     return{
            //         Email : prevVal.Email,
            //         Fname : val,
            //         Lname : prevVal.Lname,
            //         number : prevVal.number
            //     }
            // }else if(check === "Lame"){
            //     return{
            //         Email : prevVal.Email,
            //         Fname : prevVal.Fname,
            //         Lname : val,
            //         number : prevVal.number
            //     }
            // }else if(check === "email"){
            //     return{
            //         Email : val,
            //         Fname : prevVal.Fname,
            //         Lname : prevVal.Lname,
            //         number : prevVal.number
            //     }
            // }else if(check === "number"){
            //     return{
            //         Email : prevVal.Email,
            //         Fname : prevVal.Fname,
            //         Lname : prevVal.Lname,
            //         number : val
            //     }
            // }
        })
        
    }
    const ShowT = (e)=>{
        e.preventDefault();
        // setFinalname(()=>{
        //     return{
        //         Finalemail : name.Email,
        //         FINALname:name.Fname,
        //         LASTname:name.Lname,
        //         Num:name.number
        //     }
        // })
        setName({
            Email : "",
            Fname : "",
            Lname : "",
            number : ""
        });
    }
    
    return(
        <>
            <div className="mainFormV">
            <div className="todo">
            <ToDo  />
            </div>
            <div className="formCont">
            <span className="formHead">Fill The Form</span>
            <p className="write">Hello!, {name.Fname} {name.Lname} fill up the rest..</p>
            <div className="form">
            <form >
                <div className="email">
                <label htmlFor=""><span>Email : </span><br  />
                <input type="email" name='Email' value={name.Email} onChange={updateInput} placeholder="Enter The Name"/>
                </label><br  />
                </div><hr className='horLine' />
                <div className="name">
                <label htmlFor=""><span>FirstName : </span><br  />
                <input type="text" name='Fname' value={name.Fname} onChange={updateInput} placeholder="Enter The Name"/>
                </label><br  /><br  />
                <label htmlFor=""><span>LastName : </span><br  />
                <input type="text" name='Lname' value={name.Lname} onChange={updateInput} placeholder="Enter The Name"/>
                </label><br  />
                </div><hr className='horLine' />
                <div className="num">
                <label htmlFor=""><span>Phone No. : </span><br  />
                <input type="number" name='number' value={name.number} onChange={updateInput} placeholder="Enter The Name"/>
                </label>
                </div>
                {/* with the value property we can match the state of input elements with the sate of usestate component */}
            </form>
            </div>
              <Button className='button' variant="outlined" onClick={ShowT}>Submit</Button>
            </div>
            </div>
        </>
    );
}
export default Forms;