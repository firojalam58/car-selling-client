
import './App.css';
import { RouterProvider } from "react-router-dom";
import { route } from './Pages/Routes/Routes/Routes';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
