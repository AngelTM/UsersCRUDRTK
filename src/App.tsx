import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ListOfUsers } from './components/ListOfUsers'
import { EditUserForm } from './components/EditUser'

function App() {


  return (
    <>
      <h1>project</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListOfUsers/>} />
          <Route path='/editUser/:id' element={<EditUserForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
