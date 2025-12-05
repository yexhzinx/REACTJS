
import {useState, useEffect} from "react"
import Son_01 from "./01Son" 

const Parent_01 = () => {
    const [name, setName] = useState("홍길동")

    const handleName() => {}
    return (
        <>
            <h2>Parent_01 COMPONENT - name:{name}</h2>
            <hr/>

            <Son_01
                user={name}
                onChangeName={handleChangeName}
                /> 
        </>
    )
}

export default Parent_01