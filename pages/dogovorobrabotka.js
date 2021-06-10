import {useEffect, useState} from "react"
import Obrabotka from "../components/dogovorPor/ObrabotkaDannih"
import Head from 'next/head'
import cookie from 'js-cookie'
import Router from 'next/router'
import axios from "axios"
import Loader from "../components/loader/Loader"
const Pdf = () => {
  const [name,setName] = useState('')
  const [iin,setIin] = useState('')
  const [code,setCode] = useState('')

  const [loading,setLoading] = useState(false)
  const today = new Date();
  const day = today.getDate()
  const month = today.getMonth() + 1
  const year = today.getFullYear()

  const parseDay = day < 10
    ? "0" + day
    : day
  const parseMonth = parseInt(month) > 10
    ? "0 " + month
    : "0" + month

  const todayParse = parseDay + "." + parseMonth + "." + year;
  useEffect(() => {
    var lead_id = cookie.get('lead_id')
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/))  {
      window.print()
    }
    setLoading(true)
    if(lead_id) {
      axios.post(`${process.env.BASE_URL}/getData?id=${lead_id}`)
        .then((res) => {
          setLoading(false)
          if(res.data.client_type!== null) {
            setName(res.data.fio)
            setIin(res.data.iin)
            setCode(res.data.code)
          }else {
            Router.push('/')
          }
        })
        .catch(err=> {
          Router.push('/')
        })
    }else {
      Router.push('/')
    }
  }, [])
  return (
    <div className='container'>

      <Head>
        <meta name="viewport" content="width=960"/>
      </Head>
      {loading && <Loader />}
      {!loading && <Obrabotka name={name} code={code} iin={iin} todayParse={todayParse}/>}
    </div>
  )
}

export default Pdf