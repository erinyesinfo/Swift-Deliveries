import React, { Component } from 'react';
import Products from './Products';
import './styles.css';

class Challenge extends Component {
    render() {
        /* 
         * did not want to add extra stuff like
         * (colour, isSellingFast, hasVariantColours, colourWayId, hasMultiplePrices, ...etc)
        */

        const products = Products.map(data => (
            <div key={data.id} className='product'>
                <h3>{data.brandName}</h3>
                <img src={data.imageUrl} alt='img' />
                <h4 className='product-name'>{data.name}</h4>
                <p>{data.text} <span>{data.currency}</span></p>
            </div>
        ));

        return (
            <div className="asos">
                <h1>ASOS Products</h1>
                {products}
            </div>
        );
    };
};

export default Challenge;


/*
 * You can use the functional coomponent if you like both are simple
*/

// import React from 'react';
// import Products from './Products';
// import './styles.css';

// const Challenge = () => {
    /* 
    * did not want to add extra stuff like
    * (colour, isSellingFast, hasVariantColours, colourWayId, hasMultiplePrices, ...etc)
    */

    // const products = Products.map(data => (
    // <div key={data.id} className='product'>
    //     <h3>{data.brandName}</h3>
    //     <img src={data.imageUrl} alt='img' />
    //     <h4 className='product-name'>{data.name}</h4>
    //     <p>{data.text} <span>{data.currency}</span></p>
    // </div>
    // ))

    // return (
    // <div className="asos">
    //     <h1>ASOS Products</h1>
    //     {products}
    // </div>
    // );
// };

// export default Challenge;