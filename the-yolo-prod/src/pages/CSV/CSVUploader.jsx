import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const CSVUploader = () => {
  const [data, setData] = useState([]);
  let [backUpData, setBackupdate] = useState([...data]);
  const convertTimeToMinutes = (timeString) => {
    const [hours, minutes] = timeString.split(":").map((num) => parseInt(num));
    const period = timeString.includes("AM") ? 0 : 12 * 60; // Add 12 hours in minutes for PM times
    return (hours % 12) * 60 + minutes + period;
  };
  useEffect(()=>{
    setBackupdate(data)
  },[data])
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setData(results.data);
        console.log(results);
      },
    });
  };
  
  return (
    <div>
      <div>
        <input type="file" accept=".csv" onChange={handleFileInput} />
        {data.length ? (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Designation</th>
                  <th>Date</th>
                  <th>Check In Time</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row["Employee ID"]}</td>
                    <td>{row["Employee Name"]}</td>
                    <td>{row["Designation"]}</td>
                    <td>{row["Date"]}</td>
                    <td>{row["Check-In Time"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-success">Save CSV</button>
          </>
        ) : null}
      </div>
      <div>{backUpData.length ? <>
      {
        // backUpData.map(obj => {
        //     return {
        //         ...obj,
        //         Date: convertTimeToMinutes(obj["Date"])
        //     }
        // })
      }
     
      </> : <></>}</div>
    </div>
  );
};

export default CSVUploader;
