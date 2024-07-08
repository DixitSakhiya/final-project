import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import Navbar from "../src/componets/Navbar.jsx"

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap'
// import 'bootstrap/dist/js/bootstrap.bundle'
// import 'bootstrap-icons/font/bootstrap-icons.css'
// user import
import Layout from './Layout'
import Product from './componets/Product'
import Aboutus from './componets/Aboutus'
import Contact from './componets/Contact'
import ProductDetails from './componets/ProductDetails'
import ViewCart from './componets/ViewCart'

// admin import
import AdminLayout from './AdminLayout'
import AddCatagory from './componets/Admin/AddCatagory'
import ManageCatagory from './componets/Admin/ManageCatagory'
import DeletCatagory from './componets/Admin/DeletCatagory'
import EditCatagory from './componets/Admin/EditCatagory'
import AddProduct from './componets/Admin/AddProduct'
import ManageProduct from './componets/Admin/ManageProduct'
import DeletProduct from './componets/Admin/DeletProduct'
import EditProduct from './componets/Admin/EditProduct'



// style import user pannel
import '../src/assets/css/main.css'
import '../src/assets/css/responsive.css'
import '../src/assets/css/bootstrap.css'
import '../src/assets/css/icon-fonts.css'
import '../src/assets/css/animate.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/product' element={<Product />} />
      <Route path='/aboutus' element={<Aboutus />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/productdetails/:id' element={<ProductDetails />} />
      <Route path='/viewcart' element={<ViewCart />} />
      

      {/* admin routing */}
      <Route path='/adminlayout' element={<AdminLayout />} />
      <Route path='/adminlayout/addcatagory' element={<AddCatagory />} />
      <Route path='/adminlayout/managecatagory' element={<ManageCatagory />} />
      <Route path='/adminlayout/deletCatagory/:id' element={<DeletCatagory />} />
      <Route path='/adminlayout/editCatagory/:id' element={<EditCatagory />} />
      <Route path='/adminlayout/addProduct' element={<AddProduct />} />
      <Route path='/adminlayout/manageProduct' element={<ManageProduct />} />
      <Route path='/adminlayout/deletProduct/:id' element={<DeletProduct />} />
      <Route path='/adminlayout/editProduct/:id' element={<EditProduct />} />
      
     
    </Routes>
  </Router>
</React.StrictMode>,
)
