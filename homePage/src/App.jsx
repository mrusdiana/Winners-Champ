import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from './views/HomePage'
import DetailProduct from './views/DetailProduct'
import BaseLayout from "./layout/BaseLayout";
import { AllProducts } from "./views/AllProducts";
import NotfoundPage from "./views/NotFound";
import { SnackbarProvider } from "notistack";


function App() {
    return (
        <>
        <SnackbarProvider anchorOrigin={{
            vertical: "top",
            horizontal: "right"
        }}>
            <BrowserRouter>
                <Routes>
                    <Route element={<BaseLayout/>}>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/allproducts" element={<AllProducts/>}/>
                        <Route path="/detail/:id" element={<DetailProduct />} />
                    </Route>
                    <Route path="*" element={<NotfoundPage/>}/>
                </Routes>
            </BrowserRouter>
        </SnackbarProvider>
        </>
    )
}

export default App
