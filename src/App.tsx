import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './views/AppRouter';

const App: React.FC = () => {
  return (
      <Router>
        <div className="App">
          <AppRouter />
        </div>
      </Router>   
 );
};

export default App;








// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Sidebar from './components/Sidebar/Sidebar';
// import Home from './components/Home/Home';
// import Carriers from './components/Carriers/Carriers';
// //import './App.css';


// const routes = [
//   { path: '/', element: <Home /> },
//   { path: '/carriers', element: <Carriers /> },
// ];


 
// const App: React.FC = () => {
//   return (
    
//     <Router>
//       <div className="App">
//       <Routes>
//           {routes.map((route) => (
//             <Route key={route.path} path={route.path} element={route.element} />
//           ))}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
