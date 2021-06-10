import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import Head from 'next/head'
import cookie from 'js-cookie'
// import jsPDF from 'jspdf' import html2canvas from 'html2canvas'
import JurDog from '../components/DogovorPor/JurDog'
import FizDog from '../components/DogovorPor/FizDog'
import axios from 'axios'
import Loader from '../components/loader/Loader'
const Dogovor = () => {
  const router = useRouter()
  const {paymentDate} = router.query;
  const {period} = router.query;
  const [name,
    setName] = useState('')
  const [type,
    setType] = useState('')
  const [iin,
    setIin] = useState('')
  const [companyName,
    setCompanyName] = useState('Компания')
  const [priceWithDisc,
    setPrice] = useState(200000)
  const [loading, setLoading] = useState(true)
  const [code,
    setCode] = useState('')
  const [phone,
    setPhone] = useState('')
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

  const todayParse = parseDay + "." + parseMonth + "." + year + "г.";

  useEffect(() => {
    if(loading === false) {
      if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
        window.print()
      }
    }
  }, [loading])
  useEffect(() => {
    var lead_id = cookie.get('lead_id')
    
    setLoading(true)
    if (lead_id) {
      axios
        .post(`${process.env.BASE_URL}/getData?id=${lead_id}`)
        .then(res => {
          console.log(res)
          setLoading(false)
          if (res.data.client_type !== null) {
            setName(res.data.fio)
            setCompanyName(res.data.companyName)
            setIin(res.data.iin)
            setType(res.data.client_type)
            setPrice(res.data.amountPayment)
            setPhone(res.data.phone)
            setCode(res.data.code)
          } else {
            router.push('/')
          }
        })
        .catch(err=> {
          setLoading(false)
        })
    }else {
      router.push('/')
    }
  }, [])

  // const onSave = () => {   var pdf = new jsPDF('p', 'pt', 'a4');
  // window.html2canvas = html2canvas       const doc =
  // document.getElementsByTagName('div')[0];       if (doc) { console.log("div is
  // ");           console.log(doc); console.log("hellowww");
  // pdf.html(document.getElementById('doc'), {               callback: function
  // (pdf) { pdf.save('DOC.pdf');               }           })      } }
  return (
    <div className='container'>

      {/* <button onClick={() => onSave()}>Save</button> */}
      <Head>
        <meta name="viewport" content="width=960"/>
      </Head>
      {loading && <Loader />}
      {type === 'Физ лицо' && !loading && <FizDog
        priceWithDisc={priceWithDisc}
        name={name}
        todayParse={todayParse
        }
        paymentDate={paymentDate}
        phone={phone}
        iin={iin}/>}
      {type !== 'Физ лицо' && !loading && <JurDog
        priceWithDisc={priceWithDisc}
        companyName={companyName}
        todayParse={todayParse}
        paymentDate = {paymentDate}
        phone={phone}/>}

    </div>
  )

}

export default Dogovor