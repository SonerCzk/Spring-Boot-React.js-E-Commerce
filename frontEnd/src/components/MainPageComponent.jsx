import { Link, useNavigate, useParams } from "react-router-dom";
import MainHeaderComponent from '../components/MainHeaderComponent';
import {useEffect, useState} from "react";
import ProductService from "../Services/ProductService";
import CategoryService from "../Services/CategoryService";




const MainPageComponent = () => {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
 


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

  const listItems = products.map((item) => 
  <div className="row">
  <div className="container">
    
      <div className='card' key={item.productId}>
        <div className="card_img">
          <img  src={item.image} alt="" width="100" height="100" />
        </div>
        <div className='card_header'>
          <h2>{item.productName}</h2>
          <p>{item.productDefinition}</p>
          <p className='price'>{item.price}₺</p>
          <Link to={`/Order/${item.productId}`} className="btn">BUY NOW</Link>
        </div>
      </div>
    </div>
    </div>
  );


  return ( 
    <div>
      <MainHeaderComponent/> 
            {
              category.map(category => (
                <button className="btn btn-dark mt-2 mr-2" key={category.cat_id}>
                  <Link to={`/productsByCategory/${category.cat_id}`} key={category.cat_id}>{category.cat_name}</Link>
                </button>
              ))
            }
      <div className="main_content">
        {listItems}
        </div> 
        
          <hr/>
      
    </div>
   );
}

export default MainPageComponent;