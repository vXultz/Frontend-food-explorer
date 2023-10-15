import { Routes, Route } from 'react-router-dom'

import { Details } from '../pages/Details'
import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dishes/:id' element={<Details />} />
      <Route path='/newdish' element={<NewDish />} />
      <Route path='/editdish/:id' element={<EditDish />} />
    </Routes>
  )
}