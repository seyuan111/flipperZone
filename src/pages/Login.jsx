import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../components/NavBar'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const back = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:7000/login', {email, password})
    .then(result => {
      console.log(result)
      if(result.data === "success"){
        back('/')
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <section>
    <NavBar />
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full border border-neutral-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                  Sign in to FlipperZone
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                      <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                      <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded" required="" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-neutral-300 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <Link href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                  </div>
                  <button type="submit" className="w-full text-white bg-neutral-600 hover:bg-neutral-800 duration-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-neutral-300 dark:text-gray-400">
                      Dont have an account yet? <Link to="/Signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Login