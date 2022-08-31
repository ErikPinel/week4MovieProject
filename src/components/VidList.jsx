import "./list.css";


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import "https://kit.fontawesome.com/ad7321020b.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

function VidList(props) {
  function removeLi(index) {
    let templi = [...props.vidArr];
    templi.splice(index, 1);
    props.setVidArr(templi);
  }
  return (
    <div className="listContainer">
      <div className="header">
        <span className=" 
palette.error.main vidh "> start video</span>
        <span className="titleh"> title</span>

        <span className="removeh">remove video</span>
      </div>
      <ul className={`${props.show}`}>
        {props.vidArr.map((item, index) => (
          <li id={index} className="returnmap">
            <div className="list-container">
              <span
                className="img-holder"
                onClick={() => props.setShowVid1(props.vidArr[index].url)}
              >
                <img
                  src={`${props.vidArr[index].strImg}`}
                  height="60"
                  width="40"
                  alt="example"
                />
              </span>

              <span className="title-container">{item.temptitle}</span>

              <span className="xspan" onClick={() => removeLi(index)}>
              <Button variant="contained" color="error">
              <FontAwesomeIcon icon={faXmark} />
      </Button>
               
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VidList;
