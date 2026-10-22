import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
  const [networksData, setNetworksData] = useState([]);
  const [contactusData, setContactusData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // Call fetchData function for networks
    fetchData('http://localhost:5000/networks', setNetworksData);

    // Call fetchData function for contactus
    fetchData('http://localhost:5000/contactus', setContactusData);

    // Call fetchData function for users
    fetchData('http://localhost:5000/', setUsersData);
  }, []);

  const fetchData = async (url, setDataFunction) => {
    try {
      const response = await axios.get(url);
      setDataFunction(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Data from Networks Table</h2>
      <p>Feel free to reach out to us!</p>

      <table>
        <thead>
          <tr>
            <th>network_id</th>
            <th>network_name</th>
            <th>network_url</th>
          </tr>
        </thead>
        <tbody>
          {networksData.map((item, index) => (
            <tr key={index}>
              <td>{item.network_id}</td>
              <td>{item.network_name}</td>
              <td>{item.network_url}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Data from contactus Table</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {contactusData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Data from users Table</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {usersData.slice(0, 10).map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{index} {item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
