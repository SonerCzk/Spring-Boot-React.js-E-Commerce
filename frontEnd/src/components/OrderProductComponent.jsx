import {useEffect, useState} from "react";
import ProductService from "../Services/ProductService";
import CategoryService from "../Services/CategoryService";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate, useParams } from "react-router-dom";
import SecMainHeaderComponent from '../components/SecMainHeaderComponent';
import OrderService from "../Services/OrderService";


const AddProductComponent = () => {

    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cardId, setCardId] = useState('');
    const [cardCVV, setCardCVV] = useState('');
    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const {productIdx} = useParams();
    let [error, setError] = useState(null);
    let Tab;
    const orderProduct = (e) => {
        e.preventDefault();
        if (address === '' || phoneNumber === '' || cardId === '' || cardCVV === ''){
            console.log("Please enter required elements");
            alert("Plese Fill The Required Fields")
            setError(true);
        } else {
            Tab = window.open("http://localhost:8080/admin/addOrder?address="+address+"&phoneNumber="+phoneNumber+"&cardId="+cardId+"&cardCVV="+cardCVV+"&user="+999+"&product="+productIdx,"_blank");
            Tab.close();
            navigate("/");
            alert("Product Ordered");
        }
    }
    const CancelSavingProduct = (e) => {
        navigate("/");
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

          OrderService.getAll().then(response => {
              console.log("Information of Orders",response.data);
              setOrders(response.data);
          })
          .catch(error => {
            console.log("An Error Occured", error);
          })



    
      }


    return ( 
        <div className="container">
            <SecMainHeaderComponent/>
            <h1>Order Product</h1>
            <hr/>
                <form>
                    <div className="form-group">
                        <input type="text" 
                        className="form-control col-4" 
                        id="address" 
                        value={address} onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter Address"/>
                    </div>
                    <div className="form-group">
                        <input type="text" 
                        className="form-control col-4" 
                        id="phoneNumber" 
                        value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter Phone Number"/>
                    </div>
                    <div className="form-group">
                        <input type="text" 
                        className="form-control col-4" 
                        id="cardId" 
                        value={cardId} onChange={(e) => setCardId(e.target.value)}
                        placeholder="Enter Card ID"/>
                    </div>
                    <div className="form-group">
                        <input type="text" 
                        className="form-control col-4" 
                        id="cardCVV" 
                        value={cardCVV} onChange={(e) => setCardCVV(e.target.value)}
                        placeholder="Enter Card CVV"/>
                    </div>
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <button className="btn btn-primary" onClick={orderProduct}>Order Product</button>
                        <button className="btn btn-danger" onClick={CancelSavingProduct}>Cancel</button>
                    </div>
                    <hr />
                    
                </form>
        </div>
     );
}
 
export default AddProductComponent;