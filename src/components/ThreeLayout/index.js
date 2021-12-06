import React from "react";
import "./index.css";

export default function ThreeLayout(props) {
  var defaultProps = {
    leftWidth: 200,
    rightWidth: 200,
    minWidth: 800,
  };
  const datas = Object.assign({}, defaultProps, props);
  return (
    <div className="three-layout">
      <div
        className="main"
        style={{
          minWidth: datas.minWidth,
        }}
      ></div>
      <div
        className="left"
        style={{
          width: datas.leftWidth,
        }}
      ></div>
      <div
        className="right"
        style={{
          width: datas.rightWidth,
        }}
      ></div>
    </div>
  );
}
