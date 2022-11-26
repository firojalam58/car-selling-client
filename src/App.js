
import './App.css';
import { RouterProvider } from "react-router-dom";
import { route } from './Pages/Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={route}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
