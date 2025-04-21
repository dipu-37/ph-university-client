import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../../redux/hooks"
import { useCurrentToken } from "../../redux/features/auth/authSlice"

type TProtectedRoute = {
    children : ReactNode
}

const ProtectedRoute = ({children}: TProtectedRoute) => {

    const token = useAppSelector(useCurrentToken);
    if(!token){
        return <Navigate to='/login' replace={true}></Navigate>
    }
    return children;
}

export default ProtectedRoute
