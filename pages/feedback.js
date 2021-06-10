
import Nav from "../components/shared/Nav"
import Head from 'next/head'
import {useRouter} from 'next/router'
import cookie from 'js-cookie'
import { useEffect, useState } from "react"
import Loader from "../components/loader/Loader"
import FeedbackForm from "../components/feedback/Feedback"
const Feedback = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  return (
    <div className='getservice'>
      {loading && <Loader />}
      <Head>
        <title>
          Оставить отзыв
        </title>
      </Head>
      <div className='header'>
        <Nav/>
        <div className='bg'></div>
      </div>
      
      <div className='container'>
     
        
      <div className='form_headings'>
          <h2>Оставить отзыв</h2>
        </div>
        <div className='form_service '>
          
          <FeedbackForm />
       
        
        {/* <SecondStep /> */}
        {/* <ThirdStep /> */}
      </div>
      </div>
   
    </div>
  )
}
export default Feedback