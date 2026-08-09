import { BrowserRouter, Routes, Route } from "react-router";
import BaseLayout from './layout/BaseLayout';
import Dashboard from './views/DashboardCms';
import ListProducts from './views/ListProduct';
import ListCategories from './views/ListCategories';
import LoginPage from './views/LoginPage';
import { SnackbarProvider } from "notistack"
import PutProduct from './views/PutProduct';
import AddProduct from './views/AddProduct';
import PatchImage from './views/PatchImage';
import AddUser from './views/AddUser';
import NotfoundPage from './views/NotFound';

function App() {

  return (
    <>
      <SnackbarProvider anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<BaseLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/listproducts" element={<ListProducts />} />
              <Route path="/listcategories" element={<ListCategories />} />
              <Route path="/edit/:id" element={<PutProduct />} />
              <Route path="/patch/:id" element={<PatchImage />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/delete/:id" element={<ListProducts />} />
            </Route>
            <Route path="*" element={<NotfoundPage/>} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  )
}

export default App
