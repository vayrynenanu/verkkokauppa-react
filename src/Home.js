<<<<<<< HEAD
import React from 'react'


export default function Home() {
    return (
        <div>
            <p>perkel</p>
        </div>
    )
}
=======
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
import './Home.css';



export default function Kategoria({url,category,addToCart}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category !== null){
    axios.get(url + 'products/getproducts.php/' + category?.id)
    .then((response) => {
      const json = response.data;
      setProducts(json);
      console.log(json)
    }).catch (error => {
      if (error.response === undefined) {
        alert(error);
      } else {
        alert(error.response.data.error);
      }
    })
  }
  }, [category])
        return (
            <>
            <h3 style={{'paddingTop': '100px'}}>Tuotteet ryhmästä: {category?.name}</h3>
              
            <div style={{'display': 'inline-block'}}>
              
          
              {products.map(product => (
                <div key={product.id}>
                  <Link to={{
                    pathname: '/product',
                    state: {
                      id: product.id,
                      name: product.name,
                      price: product.price
                    }
                  }}
                  >

                  <p>{product.name} {product.price}€</p>
                  <img src={url + 'images/' + product.image} alt={product.name}/>
                  
                  </Link>
                  <figcaption>{product.info}</figcaption>
                  </div>
              ))}
            </div>
              
            </>
          );
}
>>>>>>> 9aa4679e56e0d46d99e18712103134b7dd3a0147
