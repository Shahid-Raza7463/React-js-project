// Contact.js
import React from 'react';

const Contact = ({ data }) => {
  // console.log('Data in Contact component:', data);
  return (
    <table className="table display table-bordered table-striped table-hover basic bg-white">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Contact;
