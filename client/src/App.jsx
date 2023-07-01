
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import '../components/navbar/Navbar'

import { Route, Routes } from 'react-router-dom';
import Head from '../pages/Head';
import Catalogue from '../pages/Catalogue';
import { Management } from '../pages/Management';
import { About } from '../pages/About';
import AddBookPage from '../pages/AddBook';
import EditBookPage from '../pages/EditBook';
function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Head></Head>}></Route>
      <Route path='/catalogue' element={<Catalogue></Catalogue>}></Route>
      <Route path='/catalogue/add' element={<AddBookPage></AddBookPage>}></Route>
      <Route path='/catalogue/management/edit' element={<EditBookPage></EditBookPage>}></Route>
      <Route path='/catalogue/management' element={<Management></Management>}></Route>
      <Route path='/about' element={<About></About>}></Route>
    </Routes>

    </div>
  )
}

export default App
