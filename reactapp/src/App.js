import './App.css';
import Navbar from "./components/Navbar";
// import Sidenav from "./components/Sidenav";
import { Route, Routes } from 'react-router-dom';
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import About from "./routes/About";
import SignUp from "./routes/SignUp";
import LogIn from "./routes/LogIn";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<LogIn/>}/>
      </Routes>
      
      <Navbar/>
      {/* <Sidenav/> */}
     
      
      
    </div>
  );
}

export default App;




// import React from 'react';
// import './App.css';
// import {  Route, Routes } from 'react-router-dom';
// import Sidenav from './components/Sidenav';
// // import Dashboard from './pages/Dashboard.jsx';
// import About from './sidebarroutes/About';
// import Home from './sidebarroutes/Home';
// import Courses from './sidebarroutes/Courses';
// // import Analytics from './pages/Analytics.jsx';
// // import Comment from './pages/Comment.jsx';
// // import Product from './pages/Product.jsx';
// // import ProductList from './pages/ProductList.jsx';
// // import Home from './sidebarroutes/Home';

// const App = () => {
//   return (
//     // <BrowserRouter>
//       <Sidenav>
//         <Routes>
//           {/* <Route path="/" element={<Dashboard />} /> */}
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           {/* <Route path="/comment" element={<Comment />} /> */}
//           {/* <Route path="/analytics" element={<Analytics />} /> */}
//           <Route path="/courses" element={<Courses />} />
//           {/* <Route path="/productList" element={<ProductList />} /> */}
//         </Routes>
//       </Sidenav>
//     // </BrowserRouter>
//   );
// };

// export default App;