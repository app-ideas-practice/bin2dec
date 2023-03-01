import React, {useState} from "react"
import conversion from "../conversion"
import "./TableConverter.css"

export default function TableConverter(){
    const [data, setData] = useState({
        error: false,
        input: "",
        output: ""
    })

    function handleClick(e){
        e.preventDefault()
        setData(prev => {
            const input = prev.input
            const regex = /^[01]*$/

            if(input === ""){
                return {
                    ...prev,
                    error: true
                }
            }
            
            if(regex.test(input)){
                return {
                    ...prev,
                    error: false,
                    output: conversion(input)
                }
            } else{
                return {
                    ...prev,
                    error: true
                }
            }
            
        })
    }

    function handleChange(event){
        const {name, value} = event.target
        setData({
            ...data,
            [name] : value
        })

    }

    return(
        <form className="table" autoComplete="off">
            {
                data.error && 
                    <div className="error">
                        <p>Enter either 0 or 1 ONLY</p>
                    </div>
            }

            <div className="binary">
                <h2>Binary</h2>
                <input 
                    type="text"
                    className="user"
                    onChange={handleChange}
                    name="input"
                    value={data.input}
                />
                <button type="submit" onClick={handleClick}>Convert</button>
            </div>

            <div className="binary">
                <h2>Decimal</h2>
                <input 
                    type="text" 
                    className="decimal" 
                    name="output" 
                    value={data.output}
                    onChange={handleChange}
                    readOnly
                />
            </div>
        </form>
    )
}