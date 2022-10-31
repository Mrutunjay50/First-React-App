import React,{useState} from 'react';
import Questions from './QuestionApi';
import '../CSS/accordion.css';
const Sq = ({question,answer}) =>{
    const[show,setShow] = useState(false);
    const showAns = () =>{
        if(show === false){
            setShow(true);
        }else{
            setShow(false);
        }
    }
    return (
        <>
            <div className="infoCont">
                <div className='ques'>
                    <p onClick={showAns}>{show ? '--' : '+'}</p>
                    <h3>{question}</h3>
                </div>
                {show && <pre className='ans'>{answer}</pre>}
            </div>
        </>
    )
}



const Accordion = () =>{
    const[data, setData] = useState(Questions);
    return (
        <>
            <div className="accCont">
                <h1 className='accHead'>Questions</h1>
                <hr />
                {data.map((curElem)=>{
                let {id} = curElem;
                return <Sq  key={id} {...curElem} />
                })}
            </div>
        </>
    )
}

export default Accordion;