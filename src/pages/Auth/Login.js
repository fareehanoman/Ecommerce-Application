import React,{useState} from 'react'
import Layout from './../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate, useLocation} from 'react-router-dom'
import "../../styles/AuthStyles.css"
import { useAuth } from '../../context/auth';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useAuth()

    const navigate = useNavigate()
    const location = useLocation()


  //form function
  const handleSubmit = async (e) => {
    e.preventDefault()    //prevents the app from refreshing again
    try{
      const res = await axios.post('/api/v1/auth/login',
      {email,password}
      );
    if(res && res.data.success){
      toast.success(res.data && res.data.message);
      setAuth({
        ...auth,
        user: res.data.user,
        token: res.data.token,
      });
      localStorage.setItem('auth', JSON.stringify(res.data));
      navigate(location.state||"/");
    }else{
      toast.error(res.data.message)
    }
  }
    catch(error){
      console.log(error)
      toast.error('Something went wrong')
    }
  };

  return (
<Layout title="Register Yourself - Ecommerce App">
        <div className="form-container ">
       <form onSubmit={handleSubmit}>
       <h2 className="title"> Login Form </h2>

  <div className="mb-3">
    <input
     type="email"
     value={email} 
     onChange={(e) => setEmail(e.target.value)}
     className="form-control" 
     id="exampleInputEmail1"
     placeholder="Enter your email"
     required
    />
  </div>

  <div className="mb-3">
    <input
     type="password"
     value={password} 
     onChange={(e) => setPassword(e.target.value)}
     className="form-control" 
     id="exampleInputPassword1"
     placeholder="Enter password"
     required
    />
  </div>

  <button type="submit" to="/" className="btn btn-primary">
    LOGIN
    
    </button>

    <div className='mb-3'>
<button type="button" to="/" className="btn btn-primary" 
    onClick={() => {navigate('/forgot-password')}}>
    
    Forgot Password?
    </button>
</div>

</form>

  </div>
    </Layout>

  )
}

export default Login