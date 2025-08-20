import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetAllBooks from './component/GetAllBooks';
import AddBook from './component/AddBook';
import EditBook from './component/EditBook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route path='/getallbooks' element={<GetAllBooks/>}  />
        <Route path='/addbooks' element={<AddBook/>}  />
        <Route path='/editbook/:id' element={<EditBook/>}  />
      </Routes>
      
      </BrowserRouter>
      {/* <GetAllBooks/>  */}
    </div>
  );
}

export default App;
