import { useState, useEffect } from "react";

import TextField from '@mui/material/TextField';
import "./form.css";
function Form(props) {
  const [vis, setvis] = useState("none");

  function openForm() {
    setvis("block");
  }
  function giveVidUrl(url) {
    let yUrl = "https://www.youtube.com/embed/";

    if (url.includes("embed")) {
      return url;
    }
    yUrl += url.slice(32, 43).join("");
    return yUrl;
  }

  function giveimg(img) {
    let temp = img.join("");
    return temp;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setvis("none");
    let temparr = [...props.vidArr];
    let tempvid = [...props.Vid];
    let url = giveVidUrl(tempvid);
    let tempimg = [...props.img];
    let strImg = giveimg(tempimg);
    let temptitle = [...props.title];
    let obj = { url, strImg, temptitle };

    temparr.push(obj);

    props.setVidArr(temparr);

    props.setShow("block");
  };

  return (
    <div className="formContainer">
      <div className="HeaderContainer">
        <h2 className="h2"> My YouYube Video Organizer</h2>
        <button className="btn add-btn" onClick={openForm}>
          {" "}
          add new video
        </button>
      </div>

      <form className={`${vis}`}>
        <div className="TextFieldDiv">
          <TextField
           label="Title"
            maxlength="10"
            
            type="text"
            onChange={(e) => props.setTitle(e.target.value)}
          />
        </div>

        <div  className="TextFieldDiv"> 
    
          <TextField 
            label="video soucrce"
            type="url"
            name="url"
            id="url"    
            pattern="https://.*"
            onChange={(e) => props.setVid(e.target.value)}
          ></TextField>
        </div>
        
        <div className="TextFieldDiv">
          <TextField
           label="Image soucrce"
            type="url"
            onChange={(e) => props.setImg(e.target.value)}
          ></TextField>
        </div>

        <div>
          <button type="button" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

{
  /* <img
src="https://bobbyhadz.com/images/blog/react-prevent-page-refresh-on-form-submit/thumbnail.webp"
alt="example"
/> */
}

{
  /* <iframe width="560" height="315" src="https://www.youtube.com/watch?v=ZLGY2M79GGs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
}

/*  type="submit" */
