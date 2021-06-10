import FirstStep from "../components/getservice/FirstStep"
import SecondStep from "../components/getservice/SecondStep"
import Nav from "../components/shared/Nav"
import Head from 'next/head'
import ThirdStep from "../components/getservice/ThirdStep"
import {Router, useRouter} from 'next/router'
import cookie from 'js-cookie'
import { useEffect, useState } from "react"
import Loader from "../components/loader/Loader"
import CodeModal from "../components/shared/CodeModal"
const GetService = () => {
  const router = useRouter()
  const {step} = router.query

  const [loading, setLoading] = useState(false)
  const [cookieStep, setCookieStep] = useState('')
  useEffect(() => {
    setCookieStep(cookie.get('step'))
  }, [cookie.get('step')])
  useEffect(() => {
    if(!cookie.get('step')) {
      router.push('/dlya-fizicheskix-lic')
    }
    if(cookie.get('step') === '2') {
      router.push('/dlya-fizicheskix-lic?step=2')
    }
    if(cookie.get('step') === '3') {
      router.push('/dlya-fizicheskix-lic?step=3')
    }

 
  },[])


 

  return (
    <div className='getservice'>
      
      {loading && <Loader />}
      <Head>
        <title>
          Получить услугу | Физ. лицо
        </title>
      </Head>
      <div className='header'>
        <Nav/>
        <div className='bg'></div>
      </div>
      
      <div className='container'>
     
        <div className='form_headings'>
          <h1>Услуги физическим лицам</h1>
          <h2>Получить
            <br></br>услугу:</h2>
        </div>
        <div className='form_service '>
        <div className='form_header'>
          <ul>
            <li className={cookieStep === undefined ? 'active' : ''}>1 Шаг</li>
            <li className={cookieStep === '2' && step==='2' && 'active'}>2 Шаг</li>
            <li className={cookieStep === '3' && step==='3' && 'active'}>3 Шаг</li>
          </ul>
        </div>
        
        {cookie.get('step') === undefined && <FirstStep setLoading={setLoading}/>}
        {cookie.get('step') === '2' && step==='2' && <SecondStep setLoading={setLoading}/>}
        {cookie.get('step') === '3' && step==='3' && <ThirdStep setLoading={setLoading} />}
        {/* <SecondStep setLoading={setLoading} /> */}
        {/* <ThirdStep setLoading={setLoading} /> */}
        {/* <SecondStep /> */}
        {/* <ThirdStep /> */}
        {/* <div className='form_header'>
          <ul>
            <li onClick={() => checking()} className={cookieStep === undefined ? 'active' : ''}>1 Шаг</li>
            <li className={cookieStep === '2' && step==='2' && 'active'}>2 Шаг</li>
            <li className={cookieStep === '3' && step==='3' && 'active'}>3 Шаг</li>
          </ul>
        </div> */}
      </div>
      </div>
   
    </div>
  )
}
export default GetService