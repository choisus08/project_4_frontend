import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import Login from './pages/Login'
import Main from './pages/Main'
import Register from './pages/Register'

import { indexLoader, showLoader, mainLoader } from './loaders';
import { createAction, updateAction, deleteAction, registerAction, loginAction } from './actions';

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/' element={<App />}>
            <Route path='' element={<Main />} loader={mainLoader}>
                <Route path='/register' element={<Register />} action={registerAction} />
                <Route path='/login' element={<Login />} action={loginAction} />
            </Route>
            <Route path='post/:id' element={<Show />} loader={showLoader} />
            <Route path='create' action={createAction} />
            <Route path='update/:id' action={updateAction} />
            <Route path='delete/:id' action={deleteAction} />
            <Route path='dashboard' element={<Index />} loader={indexLoader} />
        </Route>
    </>
))

export default router;