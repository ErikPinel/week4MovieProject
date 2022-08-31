import logo from './logo.svg';
import "./App.css"
import Form from './components/Form';
import { useState,useRef,useEffect } from 'react';
import VidList from './components/VidList';
import ShowVid from './components/ShowVid';


function App() {
  const[vidArr, setVidArr] = useState([]);
  console.log(vidArr)
  const[Vid,setVid]= useState("")
  const[img,setImg]= useState("")
  const[title,setTitle]= useState("")
  const ref1 = useRef(null);
  const[show,setShow]=useState("none");
  const[showVid1,setShowVid1]=useState("");

  function setnewvid(url)
  {
    setShowVid1(url)// pass state to 2 sons 

  }
 function reren (e){
    
    setVidArr(e)  };
  
  return (
    <div className="App">
      
    <Form showVid1={showVid1}  setShowVid1={setShowVid1}   show={show} setShow={setShow} reren={reren}ref1={ref1} vidArr={vidArr} setVidArr={setVidArr} Vid={Vid} setVid={setVid} 
      img={img} setImg={setImg} title={title} setTitle={setTitle}></Form>
      <div>
      <VidList setShowVid1={setShowVid1}  show={show} setShow={setShow}  ref1={ref1} vidArr={vidArr} setVidArr={setVidArr} Vid={Vid} setVid={setVid} 
      img={img} setImg={setImg} title={title} setTitle={setTitle}></VidList>
      <ShowVid showVid1={showVid1}></ShowVid>
      {console.log(showVid1)}
      </div>
    </div>
  );
}

export default App;
