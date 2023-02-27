import React from 'react'
import data from "../util/data"

const Main = () => {
    return (
        <div style={{ display: "flex", border: "2px solid red", whiteSpace: "nowrap" }}>
            {data.map((item, index) => {
                const { name, image, job } = item
                return (
                    <div style={{ display: "flex", border: "2px solid red", width: "90vw", background: "lightgrey", margin: "2rem", borderRadius: "4px" }} key={index}>
                        <div style={{ width: "10rem " }}>
                            <img src={image} alt="pic" style={{ width: "10rem ", height: "100%", objectFit: "cover" }} />
                        </div>
                        <div>
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

    )
}

export default Main