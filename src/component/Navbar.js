import avatar from "../images/image-avatar.png"
import iconCart from '../images/icon-cart.svg'
import { createContext, useContext, useEffect, useState } from "react";
export let context = createContext()
export default function Navbar (){
    const [number , setNumber] = useState(0)
    const [arr,setArr]= useContext(context)
    useEffect(()=>{
        setNumber(+arr.length)
        console.log(number)
    },[arr])
    let validate = false
    function display(){
        let cart = document.getElementById(`cart`)
        if(validate){
            cart.style.display = `none`
            validate = false
        } else{
            cart.style.display = `block`
            validate = true
        }
    }
    return(
        <div className="navbar">
            <ul className="links">
              <li><h2>Sneakers</h2></li>  
              <li>Collection</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <ul className="user">
                <li><img src={iconCart} className="cartIcon" onClick={display}/><span>{number}</span></li>
                <li><img src={avatar} className="avatar" /></li>
                <div className="cart" id="cart">
                    <h4 className="headCart">
                        cart
                    </h4>
                    <hr />
                    {arr.length >0? arr.map((e,index)=>{
                        return(
                            <div className="card" key={index}>
                                <img src={e.src} />
                                <div className="info">
                                <h4>{e.title}</h4>
                                <p>{e.price} x {e.number}</p>
                                </div>

                             </div>
                        )
                    }):<p className="empty"> Your cart is empty</p>}
                    <button>Checkout</button>
                </div>
            </ul>
        </div>
    )
}