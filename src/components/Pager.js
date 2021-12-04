import React from "react";
import "./Pager.css";

export default function Pager(props) {
  const pageNumber = getPageNumber(props);

  return (
    <>
      <span
        className={props.current === 1 ? "item disabled" : "item"}
        onClick={()=>{toPage(1,props)}}
      >
        首页
      </span>
      <span className={props.current === 1 ? "item disabled" : "item"}>
        上一页
      </span>
      <span className={props.current === 1 ? "item disabled" : "item"}>
        下一页
      </span>
      <span className={props.current === 1 ? "item disabled" : "item"}>
        尾页
      </span>
      <span className={"current"}>{props.current}</span>/
      <span>{pageNumber}</span>
    </>
  );
}

function getPageNumber(props) {
  return Math.ceil(props.total / props.limit);
} 
function toPage(target, props) {
  if(props.current === target){
    return; 
  }else{
    props.onPageChange && props.onPageChange(target)
  }
  
}
