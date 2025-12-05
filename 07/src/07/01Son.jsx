
import {useState,useEffect,useContext} from "react"
import CustomContext from 

const Son_01 = ({user,OnChangeName}) => {
    const [name,setName] = useState(user)

    const {globalState,setGlobalState} = useContext(CustomContext)

    const handleChange = (e)=>{
        setName(e.target.value)
    }
    const handleClick = ()=>{
        OnChangeName(name)
    }
    return (
        <>
            <h3>SON_01 COMPONENT</h3>
            전역 변수 : {globalState} <br/>
            name : <input type="text" value={user}/>
            

        </>
    )
}

export default Son_01