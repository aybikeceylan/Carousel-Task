import React from 'react'
import data from "../../util/data"
import "./Main.css"

const Main = () => {
    let box = document.querySelector('.product-container');
    let item = document.querySelector('.product');
    const handleLeft = () => {
        let width = item.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)



    }
    const handleRight = () => {
        let width = item.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }
    return (
        <div className="product-carousel">
            <div>
                <button onClick={handleLeft}>left</button>
                <button onClick={handleRight}>right</button>
            </div>


            <div className="product-container" style={{ display: "flex", border: "2px solid red", width: "90vw", margin: "2rem" }} >
                {data.map((item, index) => {
                    const { name, image, job } = item
                    return (

                        <div className='product'>
                            <div style={{ width: "10rem " }} key={index}>
                                <img src={image} alt="pic" style={{ width: "10rem ", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div style={{ background: "lightgray" }}>
                                <h4>Lorem, ipsum dolor.</h4>
                                <p style={{ height: "5rem", fontSize: "2rem" }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, ratione.</p>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>
                                        <p>{name}</p>
                                        <p>{job}</p>
                                    </div>
                                    <div>
                                        <a href="http://" target="_blank" rel="noopener noreferrer">To the interview</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )
                })

                }
            </div>


        </div>

    )
}

export default Main