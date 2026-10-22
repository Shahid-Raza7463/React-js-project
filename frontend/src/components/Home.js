// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // call fetchData function 
    fetchData();
  }, []);


  // Get data on react app from nodejs route 5000
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };




  return (
    // <div>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>Address</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.map((item, index) => (
    //         <tr key={index}>
    //           <td>{item.name}</td>
    //           <td>{item.address}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
