import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {ArrowLeft} from 'lucide-react'
import NavBar from '../components/NavBar'
import axios from 'axios'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const back = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:7000/signup', {email, password, confirmpassword})
      .then(result => {console.log(result)
        back('/')
      })
      .catch(err => console.log(err))
    }

  return (
    <section>
    <NavBar />
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full border border-neutral-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <ArrowLeft onClick={() => back(-1)} className="text-white cursor-pointer text-[20px]" />
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                  Sign up for FlipperZone
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                <div className="my-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                </div>
                <div className="my-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""></input>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Confirm Password</label>
                    <input onChange={(e) => setConfirmpassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""></input>
                </div>
                  <div className="flex items-center justify-between">
                  </div>
                  <button type="submit" className="mt-8 w-full text-white bg-neutral-600 hover:bg-neutral-800 duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default SignUp