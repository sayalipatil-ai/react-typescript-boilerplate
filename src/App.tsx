import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import AppRouter from './views/AppRouter';
import theme from './utils/theme'; 

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <AppRouter />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;








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
