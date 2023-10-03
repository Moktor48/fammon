'use client'; 
import React, { useEffect } from 'react';

  // Arrays to hold months and days
  const listMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let boxArray = [''];

  // Table month generator
  function MonthComp() {
      const nD = new Date();
      let x = listMonth[nD.getMonth()];
      return (
          <tr>
              <th id="monthHead" colSpan={7}>{x}</th>
          </tr>
      );
  };
  
  // Component for day line
  function DayComp() {
          return (

              <tr>
                  {weekDay.map((day, index) => {
                      return <th key={index + 10}>{day}</th>;
                  }
                  )
                  }
              </tr>
          );
      }
  
  /* This blob determines the day of the week the 1st lands on, then numbers out the current month by iterating
  the numbers in the calendar table */
  function CalBuild() {
      const nD = new Date();
      nD.setDate(1);
      const dayOfWeek = nD.getDay();
      console.log(dayOfWeek);
      const lastDay = new Date();
      let y = lastDay.getMonth();
      y++;
      lastDay.setMonth(y);
      lastDay.setDate(0);
      console.log(lastDay);
      let z = lastDay.getDate();
      let x = dayOfWeek + z;
      let a = 0;
      for (let i = dayOfWeek; i < x; i++) {
        a++;
        const x1 = i.toString();
        const parent = document.getElementById(x1);
        const child = parent?.querySelector(".node-0");
        child.textContent = a.toString();
      };
  };
  
export default function App() {
    useEffect(() => {
        CalBuild();
    }, []);
    return(
        <table className="border-8 border-black table-fixed">
        <thead>
            <MonthComp />
            <DayComp />
        </thead>
            <MyTable />
        </table>
    );
}

const MyTable = () => {
          const tableRows = [];
          let p = 0;
        // Loop to build Rows
          for (let i = 0; i < 6; i++) {
            const tableData = [];
        // Loop to build TD in Rows
            for (let j = 0; j < 7; j++) {
              const uniqueId = `${p}`;
              const paragraphElements = [];
        // Loop to build P in TD
              for (let k = 0; k < 6; k++) {
                const uniqueParaId = `para-${i}-${j}-${k}`;
                const nodeClass = `node-${k}`;
                paragraphElements.push(
                  <p key={uniqueParaId} className={nodeClass}>
                    
                  </p>
                );
              }
      
              tableData.push(
                <td key={uniqueId} id={uniqueId}>
                    {paragraphElements}
                </td>
              );
              p++
            }
            tableRows.push(<tr key={`row-${i}`}>{tableData}</tr>);
          }
          return (
                <tbody>{tableRows}</tbody>
          );
        }