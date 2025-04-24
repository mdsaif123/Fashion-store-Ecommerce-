// import React from 'react'
// import "./Item.css"

// const Item = (props) => {
//   return (
//     <div className='item'>
//     <img src={props.image} alt="" />
//     <p>{props.name}</p>
//       <div className="item-prices">
//         <div className="item-price-new">
//            <p>${props.new_price}</p>
//         </div>
//         <div className="item-price-old">
//         <p>${props.old_price}</p>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Item


import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom'; 

const Item = (props) => {
    return (
       
        <div className='item card'>
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" className="img-fluid" /></Link>
            
            <div className=" card-body">
            <p>{props.name}</p>
                <div className="item-price-new">
                    <p style={{color:"#ff6518"}}>₹{props.new_price}</p>
                </div>
                <div className="item-price-old">
                    <p>₹{props.old_price}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;
