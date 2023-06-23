import React,{useState} from 'react'
import Layout from './../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import "../../styles/AuthStyles.css"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [answer, setAnswer] = useState("")
  const navigate = useNavigate()

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault()    //prevents the app from refreshing again
    try{
      const res = await axios.post('/api/v1/auth/register',
      {name,email,password,phone,address,answer}
      );
    if(res && res.data.success){
      toast.success(res.data.message)
      navigate("/login")
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
       <h2 className="title"> Register Here !</h2>


  <div className="mb-3">
    <input
     type="text"
     value={name} 
     onChange={(e) => setName(e.target.value)}
     className="form-control" 
     id="exampleInputName"
     placeholder="Enter your name"
     required
    />
  </div>

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
     type="text" 
     value={phone}
     onChange={(e) => setPhone(e.target.value)}
     className="form-control" 
     id="exampleInputPhone"
     placeholder="Enter Phone No."
     required
    />
  </div>

  <div className="mb-3">
    <input
     type="text" 
     value={address}
     onChange={(e) => setAddress(e.target.value)}
     className="form-control" 
     id="exampleInputAddress"
     placeholder="Enter address"
     required
    />
  </div>

  <div className="mb-3">
    <input
     type="text" 
     value={answer}
     onChange={(e) => setAnswer(e.target.value)}
     className="form-control" 
     id="exampleInputAnswer"
     placeholder="Enter your CNIC"
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
  
  <button type="submit" className="btn btn-primary">
    REGISTER
    </button>

</form>

  </div>
    </Layout>
  )
}

export default Register