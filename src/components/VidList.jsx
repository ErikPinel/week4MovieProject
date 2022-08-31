import "./list.css"

import "https://kit.fontawesome.com/ad7321020b.js"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp,faThumbsDown, faXmark} from '@fortawesome/free-solid-svg-icons'
import { useState,useRef ,useEffect} from 'react';


function VidList(props)
{
    function removeLi(index)
    {
        let templi=[...props.vidArr];
        templi.splice(index,1)
        props.setVidArr(templi)
        // props.setShow("none")
    }
    return(
      <div className="listContainer">
            <div className="header">
        <span className="vidh"> start video</span>
        <span  className="titleh"> title</span>
        {/* <span className="raitingh">raiting</span> */}
        <span className="removeh">remove video</span>


        {/* // const[vidArr, setVidArr] = useState([{}])
    // const[Vid,setVid]= useState("")
    // const[img,setImg]= useState("")
    // const[title,setTitle]= useState("") */}
{/* let obj={tempvid,tempimg,temptitle}  */}

       </div>
       <ul className={`${props.show}`}>       
       {

            props.vidArr.map((item ,index) => (
                <li id={index} className="returnmap">
                
           

       <div className="list-container">
            
               <span className='img-holder' onClick={()=>props.setShowVid1(props.vidArr[index].url)} >
                
               <img
                src={`${props.vidArr[index].strImg}`}
                height="60"
                width="40"
               alt="example"/>
               </span>
              


              <span   className="title-container">
                    {item.temptitle}    
              </span>
             

              {/* <span id=""> 
                <span className="firstspan">
                <FontAwesomeIcon icon={faThumbsUp} />
                </span>
                    <span><FontAwesomeIcon icon={faThumbsDown} /></span>
                    <span ref={props.ref}> 23</span>
                  
              </span> */}
              <span className="xspan" onClick={()=>removeLi(index)}><FontAwesomeIcon icon={faXmark} /></span>
              
           </div>
           </li>
            ))}

            </ul>

           </div>



    )
}
    

  
export default VidList;

