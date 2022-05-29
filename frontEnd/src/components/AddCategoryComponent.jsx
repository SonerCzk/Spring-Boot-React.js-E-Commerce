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
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    let [error, setError] = useState(null);
    let Tab;
    const [submitted, setSubmitted] = useState(false);
    const saveCategory = (e) => {
        e.preventDefault();
        if (category === ''){
            console.log("Please enter required elements");
            alert("Plese Fill The Required Fields")
            setError(true);
        } else {
            Tab = window.open("http://localhost:8080/admin/categories/add?&cat_name="+category,"_blank");
            Tab.close();
            navigate("/admin");
            alert("Category Added");
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


    
      }


    return ( 
        <div className="container">
            <HeaderComponent/>
            <h1>Add Category</h1>
            <hr/>
                <form>
                    <div className="form-group">
                        <input type="text" 
                        className="form-control col-4" 
                        id="productDefinition" 
                        value={products.category} onChange={(e) => setCategory(e.target.value)}
                        placeholder="Enter New Category"/>
                    </div>



                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <button className="btn btn-primary" onClick={saveCategory}>Save Category</button>
                        <button className="btn btn-danger" onClick={CancelSavingProduct}>Cancel</button>
                    </div>
                    <hr />
                    
                </form>
        </div>
     );
}
 
export default AddProductComponent;