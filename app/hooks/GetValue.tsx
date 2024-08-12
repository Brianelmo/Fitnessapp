'use client'

import { useState } from "react"



export default function GetValue() {

    const [value, setValue] = useState<string | undefined | null>();


    const getValue = (e:React.MouseEvent<HTMLLIElement>) => {
        const value = e.currentTarget
        const valueTarget = value.textContent;
        setValue(valueTarget)
        
        console.log(valueTarget);
    }   


    return value
}