import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import AddProductComponent from './components/AddProductComponent';
import AddCategoryComponent from './components/AddCategoryComponent';
import ListProductsCompenent from './components/ListProductsCompenent';
import ListCategories from './components/ListCategories';
import ListUsers from './components/ListUsers';
import LoginComponent from './components/LoginComponent';
import MainPageComponent from './components/MainPageComponent';
import NotFound from './components/NotFound';
import UpdateProductComponent from './components/UpdateProductComponent';
import GetProductsByCategoryComponent from './components/GetProductsByCategoryComponent';
import OrderProductComponent from './components/OrderProductComponent';


    function App() {
      return (
        <div>
          <Router>
              <div className='container'>
                <Routes>
                  <Route  path="/" element={<MainPageComponent />} exact />
                  <Route  path="/productsByCategory/:categoryId" element={<GetProductsByCategoryComponent />} exact />
                  <Route  path="/login" element={<LoginComponent />} exact />
                  <Route  path="/admin" element={<ListProductsCompenent />} exact />
                  <Route path="/admin/categories" element={<ListCategories/>}></Route>
                  <Route  path="/admin/addProduct" element={<AddProductComponent />}  /> 
                  <Route path="/Order/:productIdx" element={<OrderProductComponent />}></Route>
                  <Route path="/admin/addCategory" element={<AddCategoryComponent/>}></Route>  
                  <Route  path="/admin/updateProduct/:productIdx" element={<UpdateProductComponent />}  />
                  <Route  path="/admin/getAllUser" element={<ListUsers />}  />           
                  <Route path="*" element={<NotFound/>} />
                </Routes>
            </div>
        </Router>
      </div>
      );
    }

 
export default App;