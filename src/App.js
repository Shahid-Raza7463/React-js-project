// // App.js

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './components/Web/Pages/Home/Home';
// import About from './components/Web/Pages/About/About';
// import Contact from './components/Web/Pages/Contact/Contact';
// import Footer from './components/Web/Pages/Common/Footer';
// import NavBar from './components/Web/Pages/Common/NavBar';

// import './App.css';

// const App = () => {
//   const [data, setData] = useState([]);


//   // useEffect(() => {
//   //   // Fetch data from the API when the component mounts
//   //   fetch('/api/data')
//   //     .then(response => response.json())
//   //     .then(data => setData(data))
//   //     .catch(error => console.error('Error fetching data:', error));
//   // }, []);
//   useEffect(() => {
//     // Fetch data from the backend API when the component mounts
//     fetch('http://localhost:5000')  // Update the URL to include the correct server port
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);


//   return (
//     <Router>
//       <div>
//         {/* Display your data in the components as needed */}
//         {/* <NavBar /> */}
//         <Routes>
//           <Route path="/" element={<Home data={data} />} />
//           <Route path="/about" element={<About data={data} />} />
//           {/* <Route path="/contact" element={<Contact data={data} />} /> */}
//           <Route path="/contact" element={<Contact data={data} />} />
//         </Routes>
//         {/* <Footer /> */}
//       </div>
//     </Router>
//   );
// };

// export default App;
// App.js

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './components/Web/Pages/Home/Home';
// import About from './components/Web/Pages/About/About';
// import Contact from './components/Web/Pages/Contact/Contact';
// import Footer from './components/Web/Pages/Common/Footer';
// import NavBar from './components/Web/Pages/Common/NavBar';

// import './App.css';

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend API when the component mounts
//     fetch('http://localhost:5000/api/data')  // Update the URL to include the correct endpoint
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <Router>
//       <div>
//         {/* Display your data in the components as needed */}
//         {/* <NavBar /> */}
//         <Routes>
//           <Route path="/" element={<Home data={data} />} />
//           <Route path="/about" element={<About data={data} />} />
//           <Route path="/contact" element={<Contact data={data} />} />
//         </Routes>
//         {/* <Footer /> */}
//       </div>
//     </Router>
//   );
// };

// export default App;

// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Web/Pages/Home/Home';
import About from './components/Web/Pages/About/About';
import Contact from './components/Web/Pages/Contact/Contact';
import Footer from './components/Web/Pages/Common/Footer';
import NavBar from './components/Web/Pages/Common/NavBar';

import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Fetch data from the backend API when the component mounts
  //   fetch('http://localhost:5000')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Data from API:', data);
  //       setData(data);
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);
  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => {
        console.log('Data in App component:', data);
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact data={data} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

