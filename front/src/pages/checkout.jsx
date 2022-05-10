import React from "react";
import checkout from "../component/checkout.css"

class Checkout extends React.Component {
    render(){
        return (
            <form>
                <label classname="label" for="alamat">Alamat</label>
                <input className="form" type="text" id="alamat" name="alamat"/>
            </form>
        )
    }
}

export default Checkout;