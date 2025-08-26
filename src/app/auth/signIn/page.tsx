"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Tekcify, SCOPES, RESPONSE_TYPES } from 'tekcify-auth';
const tekcify = new Tekcify('YOUR_CLIENT_ID', 'YOUR_CLIENT_SECRET');

export default function SignUpButton() {
    const handleLogin = async () => {
      const response = await tekcify.initializeLogin({
        redirectUrl: window.location.origin + '/callback',
        scope: [SCOPES.EMAIL, SCOPES.PROFILE],
        responseType: RESPONSE_TYPES.CODE,
        state: 'random-state'
      });
      
      window.location.href = response.data.login_url;

    };
    const [userName, setUserName] = useState("");
    const[error, setError] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUserName(value);
        if (value.trim().length < 3) {
            setError("Username must be at least 3 characters long");
          } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            setError("Only letters, numbers, and underscores are allowed");
          } else {
            setError(""); // Clear error
          }
      };
    
    return (
      <div className='flex  justify-center items-center h-screen'>
          <div className='space-x-2 flex flex-col justify-center items-center px-5 py-4'>
            <div className='text-2xl text-center bg-gradient-to-r from-orange-600 to-red-800 text-transparent bg-clip-text mb-6 font-semibold'>Welcome Back</div>
            

            <button onClick={handleLogin} className="bg-black rounded-4xl py-3 px-8 mx-3 flex items-center justify-center space-x-3 my-6 cursor-pointer" >
              <Image
               src="/images/favicon.ico" 
               alt="#"
               width={28}
               height={28}
             />
             <p className=" text-white font-bold " >Continue with Tekcify</p>
            </button>

            <div className='text-gray-500 text-sm text-center  mb-4 '>or</div>

            <div>
            <div className="mb-4">
              <input
                onChange={handleChange}
                type="text"
                value={userName}
                className={`w-full px-4 py-3 text-black bg-white border-gray-300 border rounded-xl outline-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${error && "outline-none ring-2 ring-red-500 transition-colors"} `}
                placeholder="Missfavis"
              />
              {error && (
                <p className="mt-1 text-xs text-red-500">{error}</p>
              )}
            </div>
            </div>

            <button className='bg-amber-600 cursor-pointer my-6 font-bold px-24 text-white py-4 rounded-4xl'>Continue</button>
            
            <div className='text-gray-500 text-sm text-center space-y-3'>
               <div className=''>By continuing, you agree to our {""}
                <span className='underline cursor-pointer'>Terms</span>  {""}
                and {""} <span className='underline cursor-pointer'>Privacy Policy</span>
              </div>
              <div> Dont have an account?{""}
                <Link href="/">
                 <span className='underline cursor-pointer'>
                Sign in
                </span>
                </Link>
                </div>
            </div>

          </div>
      </div>
    )

  }