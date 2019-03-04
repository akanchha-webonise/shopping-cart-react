import React from 'react';
import { Link } from "react-router-dom";

class Checkout extends React.Component {
    render(){
        var price = sessionStorage.getItem('data');
        	
        if (price == null ) {
           return(<div>
            <Link to ="/">HomePage</Link> 
           <h1>You have not purchased anything</h1>
           </div>);
        }
        else {
            return('Thanks for purchasing . Total Price is'+price); 
        }
        
    }
}
export default Checkout;