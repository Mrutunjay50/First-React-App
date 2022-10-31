import Time from './Clock';
// import './clock.css';
import '../CSS/list.css';
import Social from './Social';


const Sdata = [
  {
    id : 1,
    imgSrc : "Images/1183402.png",
    title : "Thor - God Of Thunder"
  },
  {
    id : 2,
    imgSrc : "Images/35380.jpg",
    title : "Spider Man"
  },
  {
    id : 3,
    imgSrc : "Images/54066.jpg",
    title : "Black Panther"
  },
  {
    id : 4,
    imgSrc : "Images/1103109.jpg",
    title : "Dr. Strange"
  },
  {
    id : 5,
    imgSrc : "Images/54079.jpg",
    title : "Panther"
  },
  {
    id : 6,
    imgSrc : "Images/113021.png",
    title : "Legend Of Zelda"
  },
  {
    id : 7,
    imgSrc : "Images/122768.jpg",
    title : "SpiderLogo"
  },
  {
    id : 8,
    imgSrc : "Images/140094.jpg",
    title : "CivilWar"
  },
  {
    id : 9,
    imgSrc : "Images/429949.jpg",
    title : "LOZBOTW_Tablet"
  },
  {
    id : 10,
    imgSrc : "Images/429977.png",
    title : "MasterSword"
  }
]
// const src = "./"

function App(props) {
  return (
    <>
    <div className="cards">
      <div className="card">
        <img src={props.imgSrc} alt="randomImg" className="card_img"/>
        <p className="head">{props.title}</p>
        <div className="title">{props.title}</div>
      </div>
    </div>
    </>
  );
}

const Demm = ()=>{
  return (<>
  <Social  />
  <Time  />
  <div className="cardCont">
  {Sdata.map((val)=>{
    return (<App key={val.id} imgSrc={val.imgSrc} title={val.title}/>);
  })}
  </div>
  </>
  );
}

export {Demm, Sdata};