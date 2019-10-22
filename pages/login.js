import React from "react";
import Link from "next/link";

import "./index.css";

// export default () => (
//   <div className="wrap">
//     <h1>Welcome to next.js!</h1>
//     <style jsx>
//       {`
//         h2 {
//           color: red;
//         }
//       `}
//     </style>
//     <h2>红色</h2>
//     {/* <img src="/static/beach.jpg" /> */}
//   </div>
// );

export default class login extends React.Component {
  handleClick = () => {
    alert(222);
  };
  render() {
    return (
      <div className="wrap">
        <h1>Welcome to next.js!</h1>
        <style jsx>
          {`
            h2 {
              color: red;
            }
          `}
        </style>
        <h2 onClick={this.handleClick} style={{ backgroundColor: "yellow" }}>
          红色
        </h2>
        {/* <img src="/static/beach.jpg" /> */}
        <Link href="/">
          <div className="btn">登陆</div>
        </Link>
      </div>
    );
  }
}
