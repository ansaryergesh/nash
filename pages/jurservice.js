import FirstStep from "../components/getservice/FirstStepJur"
import SecondStep from "../components/getservice/SecondStep"
import Nav from "../components/shared/Nav"
import Head from 'next/head'
import ThirdStep from "../components/getservice/ThirdStep"
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
    if(!cookie.get('stepjur')) {
      router.push('/jurservice')
    }
    if(cookie.get('stepjur') === '2') {
      router.push('/jurservice?step=2')
    }
    if(cookie.get('stepjur') === '3') {
      router.push('/jurservice?step=3')
    }
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
            <li className={cookieStep === undefined ? 'active' : ''}>1 Шаг</li>
            <li className={cookieStep === '2' && step==='2' && 'active'}>2 Шаг</li>
            <li className={cookieStep === '3' && step==='3' && 'active'}>3 Шаг</li>
          </ul>
        </div>
        
        {cookie.get('stepjur') === undefined && <FirstStep setLoading={setLoading}/>}
        {cookie.get('stepjur') === '2' && step==='2' && <SecondStep setLoading={setLoading}/>}
        {cookie.get('stepjur') === '3' && step==='3' && <ThirdStep setLoading={setLoading}/>}
        
        {/* <SecondStep /> */}
        {/* <ThirdStep /> */}
      </div>
      </div>
   
    </div>
  )
}
export default GetService