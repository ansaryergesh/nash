import FirstStep from "../components/getservice/FirstStepJur"
import SecondStep from "../components/getservice/SecondStepJur"
import Nav from "../components/shared/Nav"
import Head from 'next/head'
import ThirdStep from "../components/getservice/ThirdStepJur"
import {useRouter} from 'next/router'
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
    setCookieStep(cookie.get('stepjur'))
  }, [cookie.get('stepjur')])
  useEffect(() => {
    // if(!cookie.get('stepjur')) {
    //   router.push('/jurservice')
    // }
    // if(cookie.get('stepjur') === '2') {
    //   router.push('/jurservice?step=2')
    // }
    // if(cookie.get('stepjur') === '3') {
    //   router.push('/jurservice?step=3')
    // }
  },[])

  // useEffect(() => {
  //   if(cookie.get('stepjur') !== undefined && (cookie.get('lead_id')=== undefined || cookie.get('token') === undefined)){
  //     console.log('removed')
  //     cookie.remove('stepjur')
  //     cookie.remove('lead_id')
  //     cookie.remove('token')
  //     router.push('/dlya-fizicheskix-lic')
  //   }
  // },[])
  const headerClick = (num) => {
    if(num !== "1") {

      cookie.set("stepjur", num);
      router.push(`/jurservice?step=${num}`)
    }else {
      router.push('/jurservice')
      cookie.remove('stepjur')
    }
  }
  return (
    <div className='getservice'>
      {loading && <Loader />}
      <Head>
        <title>
          Получить услугу | Юр. лицо
        </title>
      </Head>
      <div className='header'>
        <Nav/>
        <div className='bg'></div>
      </div>
      
      <div className='container'>
     
        
      <div className='form_headings'>
          <b>Услуги юр. лицам</b>
          <h2>Получить
            <br></br>услугу:</h2>
        </div>
        <div className='form_service '>
        <div className='form_header'>
          <ul>
            <li onClick={() => headerClick("1")} className={cookieStep === undefined || step===undefined ? 'active' : ''}>1 Шаг</li>
            <li onClick={()=> headerClick("2")} className={cookieStep === '2' && step==='2' && 'active'}>2 Шаг</li>
            <li onClick={() => headerClick("3")} className={cookieStep === '3' && step==='3' && 'active'}>3 Шаг</li>
          </ul>
        </div>
        <div className="form_register">
        {cookie.get('stepjur') === undefined && <FirstStep setLoading={setLoading}/>}
        {step==='2' && <SecondStep setLoading={setLoading}/>}
        {step==='3' && <ThirdStep setLoading={setLoading}/>}
        </div>
        {/* <SecondStep /> */}
        {/* <ThirdStep /> */}
      </div>
      </div>
   
    </div>
  )
}
export default GetService