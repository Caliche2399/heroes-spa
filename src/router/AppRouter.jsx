
import {Routes, Route,} from 'react-router-dom'
import {HeroesRoutes } from '../heroes'
import { LoginPage } from '../auth/pages/LoginPage'
import { Navbar } from '../ui/Nabvar'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/*' element={<HeroesRoutes/>}></Route>

        </Routes>
    </>
  )
}
