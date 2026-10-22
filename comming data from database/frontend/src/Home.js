import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
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
        //     <h1>Data from Server</h1>
        //     <ul>
        //         {data.map((item, index) => (
        //             <li key={index}>
        //                 <strong>Name:</strong> {item.name}, <strong>Address:</strong> {item.address}
        //             </li>
        //         ))}
        //     </ul>
        // </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Display data on react app */}
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
