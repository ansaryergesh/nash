import Head from 'next/head'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import FirstReg from '../../components/getservice/FirstStep'
import SecondStep from '../../components/getservice/SecondStep'
import ThirdStep from '../../components/getservice/ThirdStep'
import Loader from '../../components/loader/Loader'
import Nav from '../../components/shared/Nav'
const Continue = () => {
  const router = useRouter()
  const {id} = router.query
  const {step} = router.query
  const {type} = router.query
  const [loading,setLoading] = useState(false)
  // useEffect(() => {   if(!id || !step) {     router.push('/cabinet/requests') }
  // }, [])
  return (
    <div className='getservice'>
      {loading && <Loader />}
      <Head>
        <title>
          Получить услугу | {type === 'Физ лицо'
            ? 'Физ лицам'
            : 'Юр лицам'}
        </title>
      </Head>
      <div className='header'>
        <Nav/>
        <div className='bg'></div>
      </div>
      <div className='container'>
        <div className='form_headings'>
          <h1>Услуги {type === 'Физ лицо'
              ? 'Физ лицам'
              : 'Юр лицам'}</h1>
          <h2>Продолжение
            <br></br>анкеты:</h2>
        </div>
        <div className='form_service '>
          <div className='form_header'>
          <ul>
            <li className={step === '1' ? 'active' : ''}>1 Шаг</li>
            <li className={step === '2'&& 'active'}>2 Шаг</li>
            <li className={step === '3' && 'active'}>3 Шаг</li>
          </ul>
          </div>

          {step === '1' && <FirstReg  setLoading={setLoading}/>}
          {step === '2' && <SecondStep setLoading={setLoading} />}
          {step === '3' && <ThirdStep setLoading={setLoading} />}
        </div>
      </div>
    </div>
  )
}

export default Continue