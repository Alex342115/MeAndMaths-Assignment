import React from "react";
import "./style/DashBoard.css";
var studStats = [];
var studNum = 1;
const localStorageKeys = Object.keys(localStorage);
console.log(localStorageKeys);
for (const key of localStorageKeys) {
  const value = localStorage.getItem(key);
  console.log(value);
  //   console.log(String.fromCharCode(64 + parseInt(key)));
  const studName = String.fromCharCode(64 + parseInt(key));
  studStats.push({ studNum: studNum, key: studName, value: value });
  studNum++;
}
console.log(window.localStorage.length);
function LeaderBoard() {
  return localStorage.length ? (
    <div className="LeaderBoard">
      <table className="board-table">
        <tr className="tr1">
          <th>#</th>
          <th>StudentID</th>
          <th>Marks</th>
        </tr>
        {studStats.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.studNum}</td>
              <td>{val.key}</td>
              <td>{val.value}</td>
            </tr>
          );
        })}
      </table>
    </div>
  ) : (
    ""
  );
}

export default LeaderBoard;
