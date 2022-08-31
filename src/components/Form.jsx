import { useState,useEffect} from 'react';
import './form.css'

function Form(props) {
    const [vis, setvis] = useState("none")
   




    // const[vidArr, setVidArr] = useState([{}])
    // const[Vid,setVid]= useState("")
    // const[img,setImg]= useState("")
    // const[title,setTitle]= useState("")



function openForm()
{
    setvis("block")

}
function giveVidUrl(url)
{
    
    let yUrl="https://www.youtube.com/embed/"

    if(url.includes("embed"))
    {
        return url
    }
yUrl+=(url.slice(32,43).join(""))
return yUrl
}


function giveimg(img)
{
    let temp=img.join("")
    return temp
}

const handleSubmit = event => 
{

    event.preventDefault();
    setvis("none")
    let temparr= [...props.vidArr];
    let tempvid=[...props.Vid];
    let url=giveVidUrl(tempvid)
    let tempimg=[...props.img];
    let strImg=giveimg(tempimg)
    let temptitle=[...props.title];
    let obj={url,strImg,temptitle}

    temparr.push(obj)
    console.log(url)
    
    // ref.current.focus();
    // props.reren(temparr);
    props.setVidArr(temparr)
   
    props.setShow("block")
    
  
  }
 

  

  return (
    <div   className="formContainer">
      <div className="HeaderContainer">
        <h2 className='h2'> My YouYube Video Organizer</h2>
        <button className="btn add-btn" onClick={openForm}> add new video</button>
      </div>
      
      <form className={`${vis}`}>
        <div>
          <input maxlength="10" placeholder="Title" type="text" onChange={e=>props.setTitle(e.target.value) }/>
        </div>
        <div>
          <input type="url" name="url" id="url" placeholder="video soucrce" pattern="https://.*"  onChange={e=>props.setVid(e.target.value) } >

          </input>
        </div>
        <div>
          <input  type="url"  placeholder="attach image"  onChange={e=>props.setImg(e.target.value) } >
                      </input>
        </div>
       
        
        <div>
          <button  type="button" className="btn" onClick={handleSubmit}>Submit</button>
        </div>
      </form>


     
    </div>
  );
}

export default Form;



{/* <img
src="https://bobbyhadz.com/images/blog/react-prevent-page-refresh-on-form-submit/thumbnail.webp"
alt="example"
/> */}

        {/* <iframe width="560" height="315" src="https://www.youtube.com/watch?v=ZLGY2M79GGs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}


        /*  type="submit" */
        