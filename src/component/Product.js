import { useContext, useRef, useState } from "react"
import img1 from "../images/image-product-1.jpg"
import img2 from "../images/image-product-2.jpg"
import img3 from "../images/image-product-3.jpg"
import img4 from "../images/image-product-4.jpg"
import thum1 from "../images/image-product-1-thumbnail.jpg"
import thum2 from "../images/image-product-2-thumbnail.jpg"
import thum3 from "../images/image-product-3-thumbnail.jpg"
import thum4 from "../images/image-product-4-thumbnail.jpg"
import { context } from "./Navbar"
export default function Product(){
    let [value,setValue] = useContext(context)
    const span = useRef(null)
    const imgArr = [img1,img2,img3,img4]
    let [img,setImg] = useState(imgArr[0])
    function addToCart(){
    const title = `Fall Limit Edition sneakers` 
    setValue([...value,...[{src:img,title:title,price:`$125.00`,number:span.current.innerHTML}]])
}
    function click(e){
        setImg(imgArr[e.currentTarget.id])
        let children = [...e.currentTarget.parentElement.children]
        children.forEach((r)=>{
            r.classList.remove(`active`)
            e.currentTarget.classList.add(`active`)
        })
    }
    function add(e){
        if(e.currentTarget.innerHTML == `-` && +span.current.innerHTML >1){
            span.current.innerHTML -=1
        }
         if(e.currentTarget.innerHTML == `+`){
          span.current.innerHTML = +span.current.innerHTML + 1
        }
    }
    return(
        <div className="product">
            <div className="left">
            <img className="mainImg" src={img} />
            <div className="imgs">
                <img id="0" src={thum1} onClick={(e)=>{click(e)}} className="active" />
                <img id="1" src={thum2} onClick={(e)=>{click(e)}}  />
                <img id="2"  src={thum3} onClick={(e)=>{click(e)}}/>
                <img id="3"  src={thum4} onClick={(e)=>{click(e)}}/>
            </div>
            </div>
            <div className="right">
                <h4>sneaker company</h4>
                <h2>Fall Limit Edition sneakers</h2>
                <p>These low-profile sneakers are your perfect casual wear companion ,Featuring a durable  rubber outer sole , they'll withstand everyting the weather can offer</p>
                <div className="price">
                    <h3>$125.00</h3>
                    <p className="offer">50%</p>
                    <p className="lastPrice">$250.00</p>
                </div>
                <div className="buy">
                    <div className="left">
                        <button  onClick={(e)=>{add(e)}}>-</button>
                        <span ref={span}>1</span>
                        <button onClick={(e)=>{add(e)}}>+</button>
                    </div>
                    <button className="right" onClick={addToCart} >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>

    )
}