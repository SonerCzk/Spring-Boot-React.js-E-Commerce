import { Link, useNavigate, useParams } from "react-router-dom";
import MainHeaderComponent from '../components/MainHeaderComponent';
import {useEffect, useState} from "react";
import ProductService from "../Services/ProductService";
import CategoryService from "../Services/CategoryService";




const GetProductsByCategoryComponent = () => {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [category, setCategory] = useState([]);
  const {categoryId} = useParams();

  
    

  useEffect(() => {
    ProductService.getAll().then(response => {  
        console.log("Information Of Products", response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.log("An Error Occured", error);
      })
  
      ProductService.getProductByCategory(categoryId).then(response => {
          console.log("Categoried Products",response.data);
          setProductsByCategory(response.data);
      }).catch(error => {
          console.log("An Error Occured", error);
        })       
  
      CategoryService.getAll().then(response => {  
        console.log("Information Of Categories", response.data);
        setCategory(response.data);
      })
      .catch(error => {
        console.log("An Error Occured", error);
      })

    
  
    }, [])


  const listItems = productsByCategory.map((item) => 
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

  const reload = () => {
      window.location.reload();
  }


  return ( 
    <div>
      <MainHeaderComponent/> 
      <button className="btn btn-dark mb-2 mt-2">
          <Link to={"/"}>All</Link>
        </button>
            {
              category.map(category => (
                <button onClick={reload} className="btn btn-dark ml-2" key={category.cat_id}>
                
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

export default GetProductsByCategoryComponent;