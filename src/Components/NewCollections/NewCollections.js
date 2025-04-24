

import React from 'react';
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
    return (
        <div className='container my-4 popular'>
            <h1 style={{color:"#ff6518"}} className="text-center">New Collection</h1>
            <hr className="hr" />
            
            {/* Grid with responsive layout */}
            <div className="row row-cols-2 row-cols-md-3 g-4">
                {new_collection.map((item, i) => (
                    <div key={i} className="col mb-4">
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
};

export default NewCollections;

