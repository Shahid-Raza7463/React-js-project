// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    // call fetchData function 
    fetchData();
  }, []);


  // Get data on react app from nodejs route 5000
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/contactus');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    // <div>
    //   <h2>About Page</h2>
    //   <p>Learn more about us on the About Page.</p>
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

export default About;
