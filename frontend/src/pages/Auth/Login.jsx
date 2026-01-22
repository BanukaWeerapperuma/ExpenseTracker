import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout.jsx';


const Login = () => {
  return (
    
     <AuthLayout>
    <div>
       
        <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
            <h3 className="text-xl">Welcome Back</h3>
            <p className="text-xs to-slate-700 mt-1.25 mb-6">Please enter your details to login</p>
        </div>
    </div>
    </AuthLayout>
    
  )
}

export default Login