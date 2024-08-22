import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Store } from "./Store"


const LawyerProtected=({children})=>{
    const {state}=useContext(Store)
    const {UserInfo}=state

    return  UserInfo && UserInfo.isLawyer ?  children : <Navigate to='/'/>
}

export default LawyerProtected