import Head from "next/head";
import {useRouter} from "next/router"
import {useEffect, useState} from "react";
import AggrementForm from "../components/cabinet/AggrementForm";
import ThirdStep from "../components/getservice/ThirdStep";
import Nav from '../components/shared/Nav'
import { parseDate } from "../defaults/extraFunction";
import Loader from '../components/loader/Loader'
const Aggrement = () => {
  const router = useRouter()
  const {token} = router.query
  // const {leadID} = router.query
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    if(!token) {
      // router.push('/')
    }
  },[])
  return (
    <div className='getservice'>
      {loading && <Loader />}
      <Head>
        <title>Подписание договора</title>
      </Head>
      <div className='header'>
        <Nav />
        <div className='bg'></div>
      </div>

      <div className='container'>
        <div className='form_headings'>
          <h2>Подписание договора</h2>
        </div>
        <div className='form_service'>
          <div className='form_header'>
          </div>
          <ThirdStep setLoading={setLoading}/>
          {/* <AggrementForm  docs={docs} changeOplata={changeOplata} predoplata={predoplata} paymentDate={paymentDate} srok={srok} changeSrok={changeSrok} changeSrokBtn={changeSrokBtn} discount={discount}/> */}
        </div>
      </div>
    </div>
  )
}

export default Aggrement