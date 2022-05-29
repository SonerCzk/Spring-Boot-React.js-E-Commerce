import {useEffect, useState} from "react";
import ProductService from "../Services/ProductService";
import CategoryService from "../Services/CategoryService";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate, useParams } from "react-router-dom";
import HeaderComponent from '../components/HeaderComponent';


const AddProductComponent = () => {

    const [productName, setProductName] = useState('');
    const [productDefinition, setProductDefinition] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState([]);
    const [categoryx, setCategoryx] = useState([]);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    let [error, setError] = useState(null);
    let Tab;
    const [submitted, setSubmitted] = useState(false);
    const saveProduct = (e) => {
        e.preventDefault();
        if (productName === '' || productDefinition === '' || category === '' || price === '' || image === ''){
            console.log("Please enter required elements");
            alert("Plese Fill The Required Fields")
            setError(true);
        } else {
            Tab = window.open("http://localhost:8080/admin/addProduct?productName="+productName+"&productDefinition="+productDefinition+"&productCategory="+productCategory+"&price="+price+"&image="+image+"&category="+category,"_blank");
            Tab.close();
            navigate("/admin");
            alert("Product Added");
        }
    }
    const CancelSavingProduct = (e) => {
        navigate("/admin");
    }

    useEffect(() => {
        init();
        }, [])
    
      const init = () => {
        
        ProductService.getAll().then(response => {  
            console.log("Information Of Products", response.data);
            setProducts(response.data);
          })
          .catch(error => {
            console.log("An Error Occured", error);
          })

        CategoryService.getAll().then(response => {  
            console.log("Information Of Categories", response.data);
            setCategory(response.data);
          })
          .catch(error => {
            console.log("An Error Occured", error);
          })

          CategoryService.getAll().then(response => {  
            console.log("Information Of Categories", response.data);
            setCategoryx(response.data);
          })
          .catch(error => {
            console.log("An Error Occured", error);
          })


    
      }


    return ( 
        <div className="container">
            <HeaderComponent/>
            <h1>Add Product</h1>
            <hr/>
                <form>
                    <div className="form-group">
                        <input type="text" 
                        className="form-control col-4" 
                        id="productName" 
                        value={productName} onChange={(e) => setProductName(e.target.value)}
                        placeholder="Enter Product Name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" 
                        className="form-control col-4" 
                        id="productDefinition" 
                        value={productDefinition} onChange={(e) => setProductDefinition(e.target.value)}
                        placeholder="Enter Product Definition"/>
                    </div>
                    <div className="form-group">
                        <input type="text" 
                        className="form-control col-4" 
                        id="category" 
                        value={products.category} onChange={(e) => setCategory(e.target.value)}
                        placeholder="Enter Product Category (ID)"/>
                    </div>
                    <div className="form-group">
                        <input type="text" 
                        className="form-control col-4" 
                        id="price" 
                        value={price} onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter Product Price"/>
                    </div>
                    <div className="form-group">
                        <input type="text" 
                        className="form-control col-4" 
                        id="image" 
                        value={image} onChange={(e) => setImage(e.target.value)}
                        placeholder="Enter Product Image URL"/>
                    </div>
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <button className="btn btn-primary" onClick={saveProduct}>Save Product</button>
                        <button className="btn btn-danger" onClick={CancelSavingProduct}>Cancel</button>
                    </div>
                    <hr />
                    
                </form>
                <table className="table table-dark table-sm table-hover table-striped">
            <thead className="thead-dark">
            <tr>
              <th>Product category</th>
              <th>Category ID</th>
            </tr>
            </thead>
            <tbody>
            {
              categoryx.map(categoryx => (
                <tr key={categoryx.cat_id}>
                  <td>{categoryx.cat_name}</td>
                  <td>{categoryx.cat_id}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
     );
}
 
export default AddProductComponent;