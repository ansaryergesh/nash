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
import FourthStep from "../components/getservice/FourthStep"
const GetService = () => {
  const router = useRouter()
  const {step} = router.query

  const [loading, setLoading] = useState(false)
  const [cookieStep, setCookieStep] = useState('')
  // useEffect(() => {
  //   setCookieStep(cookie.get('step'))
  // }, [cookie.get('step')])
  // useEffect(() => {
  //   if(!cookie.get('step')) {
  //     router.push('/dlya-fizicheskix-lic')
  //   }
  //   if(cookie.get('step') === '2') {
  //     router.push('/dlya-fizicheskix-lic?step=2')
  //   }
  //   if(cookie.get('step') === '3') {
  //     router.push('/dlya-fizicheskix-lic?step=3')
  //   }

 
  // },[])
 
  const headerClick = (num) => {
    if(num !== "1") {

      cookie.set("stepjur", num);
      router.push(`?step=${num}`)
    }else {
      router.push('')
      cookie.remove('stepjur')
    }
  }
  return (
    <div className='getservice'>
      
      {loading && <Loader />}
      <Head>
        <title>
          Получить услугу
        </title>
      </Head>
      <div className='header'>
        <Nav/>
        <div className='bg'></div>
      </div>
      
      <div className='container'>
     
        <div className='form_headings'>
          <h2>Получить
            <br></br>услугу:</h2>
        </div>
        <div className='form_service '>
        <div className='form_header'>
          <ul>
            <li onClick={() => headerClick("1")} className={cookieStep === undefined || step=== undefined&& 'active'}>1 Шаг</li>
            <li onClick={() => headerClick("2")} className={step==='2' && 'active'}>2 Шаг</li>
            <li onClick={() => headerClick("3")} className={step==='3' && 'active'}>3 Шаг</li>
            <li onClick={() => headerClick("4")} className={step==='4' && 'active'}>4 Шаг</li>
          </ul>
        </div>
        <div className="form_register">
          
        {step=== undefined && <FirstStep setLoading={setLoading}/>}
        {step==='2' && <SecondStep setLoading={setLoading}/>}
        { step==='3' && <ThirdStep setLoading={setLoading}/>}
        {step === '4' && <FourthStep setLoading={setLoading} />}
        </div>
      </div>
      </div>
    </div>
  )
}
export default GetService