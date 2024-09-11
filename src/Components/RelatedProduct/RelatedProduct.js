import React from 'react';
import "./RelatedProduct.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProduct = () => {
  return (
    <div className='container relatedproduct'>
      <h4 style={{color:"#ff6518"}}>Related Products</h4>
      <hr />
      
      {/* Grid with responsive layout */}
      <div className="row row-cols-2 row-cols-md-3 g-4">
        {data_product.map((item, i) => (
          <div key={i} className="col">
            <Item 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProduct;
