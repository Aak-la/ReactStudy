import React from "react";
import "./Pager.css";

export default function Pager(props) {
  const pageNumber = getPageNumber(props);
  if(pageNumber===0){
    return null;
  }
  const min = getMinNumber(props);
  const max = getMaxNumber(props, min, pageNumber);
  const number = [];
  for (let i = min; i <= max; i++) {
    number.push(
      <span key={i}  className={i === props.current?"item active":"item"} onClick={()=>{toPage(i,props)}}>
        {i}
      </span>
    );
  }

  return (
    <>
      <span
        className={props.current === 1 ? "item disabled" : "item"}
        onClick={() => {
          toPage(1, props);
        }}
      >
        首页
      </span>
      <span
        className={props.current === 1 ? "item disabled" : "item"}
        onClick={() => {
          toPage(props.current - 1 < 1 ? 1 : props.current - 1, props);
        }}
      >
        上一页
      </span>
      {number}
      <span
        className={props.current === pageNumber ? "item disabled" : "item"}
        onClick={() => {
          toPage(
            props.current + 1 > pageNumber ? pageNumber : props.current + 1,
            props
          );
        }}
      >
        下一页
      </span>
      <span
        className={props.current === pageNumber ? "item disabled" : "item"}
        onClick={() => {
          toPage(pageNumber, props);
        }}
      >
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
  if (props.current === target) {
    return;
  } else {
    props.onPageChange && props.onPageChange(target);
  }
}
function getMinNumber(props) {
  let min = props.current - Math.floor(props.panelNumber / 2);
  if (min < 1) {
    min = 1;
  }
  return min;
}
function getMaxNumber(props, min, pageNumber) {
  let max = min + props.panelNumber - 1;
  if (max > pageNumber) {
    max = pageNumber;
  }
  return max;
}

