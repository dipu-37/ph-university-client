import { FieldValues, useForm } from "react-hook-form"
import { useLoginMutation } from "../redux/features/auth/authApi";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/auth/authSlice";
import { verityToken } from "../utils/verifyToken";


const Login = () => {

  const dispatch = useDispatch();

  const {register,handleSubmit}=useForm({defaultValues : {
    userId: "A-0001",
    password: "admin123"
 }});
  const [login , {error}]=useLoginMutation();

  console.log(error)

  const onsubmit = async(data :FieldValues ) =>{
    const userInfo={
      id : data.userId,
      password : data.password
    }

    const res =await login(userInfo).unwrap();
    console.log(res)

    const user = verityToken(res.data.accessToken)
    dispatch(setUser({user : user,token : res.data.accessToken}))
   
  }
  return (
    <form onSubmit={handleSubmit(onsubmit)} >
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id"  {...register('userId')}/>
      </div>
      <div>
        <label htmlFor="password">PASSWORD:</label>
        <input type="text" id="password" {...register('password')} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  )
}

export default Login
