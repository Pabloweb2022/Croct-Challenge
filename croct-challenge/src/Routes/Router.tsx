import { BrowserRouter, Routes, Route } from "react-router-dom"
import SelectPage from '../pages/SelectPage'
import HomePage from "../pages/HomePage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<SelectPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router