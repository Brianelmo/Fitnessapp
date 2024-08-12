'use client'
import React, { MouseEventHandler, use, useState } from 'react'
import style from './opcionmenu.module.css'

interface Props{
    data:string[]
}



export default function OpcionsMenu({data}:Props){ 


    

    return(
        <>
            <ul className={style.list}>
                {data.map(item =>(
                    <li onClick={getValue}>{item}</li>
                ))}
            </ul>
        </> 
    )
}