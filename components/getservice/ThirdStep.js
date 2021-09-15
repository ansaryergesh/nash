import axios from "axios"
import {useEffect, useState} from "react"
import cookie from 'js-cookie'
import Router, {useRouter} from 'next/router'
import swal from 'sweetalert'
import {amountSpace, handleFocus, parseDate} from "../../defaults/extraFunction"
import {connect} from "react-redux"
import CodeModal from '../shared/CodeModal'

const mapStateToProps = ({
  userReducer: {
    user,
    loggedIn
  }
}) => ({user, loggedIn});

const ThirdStep = ({
  setLoading, user,loggedIn
}) => {
  const router = useRouter()
  const {id} = router.query;
  const pathname = router.pathname
  const {token} = router.query
  const {amount} = router.query
  const [amountVal,
    setAmount] = useState(0)
  const {leadID} = router.query
  const [aggrToken,
    setAggrToken] = useState('')
    
  const finalAmount = amount
    ? amount
    : amountVal
  const [aggrId,
    setAggrId] = useState('')
  const [phone,
    setPhone] = useState(null)
  const [modal,
    setModal] = useState(false)
  const [code,
    setCode] = useState('')
  const finalID = id || leadID
  useEffect(() => {
    const summa = cookie.get('amount') !== undefined
      ? cookie.get('amount')
      : finalAmount
    const finalSumma = Math.floor(parseInt(summa) * 0.2)
    const discountSumma = Math.floor(parseInt(finalSumma) / 2)
    if (finalSumma > 200000) {
      setSumma(finalSumma)
      setDiscount(discountSumma)
    } else {
      setSumma(200000)
      setDiscount(100000)
    }
    console.log(finalSumma)
  }, [cookie.get('amount')])

  useEffect(() => {
    if (token) {
      setAggrToken(token)
    }

  }, [token])
  useEffect(() => {
    if (pathname === '/aggrement' && aggrToken) {
      console.log('yes')
      axios
        .get(`${process.env.BASE_URL}/getDataSign?token=${aggrToken}`)
        .then(res => {
          console.log(aggrToken)
          console.log(res)
          if (!res.data.id) {
            console.log('this')
            router.push('/')
          } else {
            setPhone(res.data.phone)
            setAggrId(res.data.id)
            setAmount(parseInt(res.data.amount))
          }
        })
    }
  }, [aggrToken])

  const [summa,
    setSumma] = useState(0)
  const [discount,
    setDiscount] = useState(0)
  const [predoplata,
    setOplata] = useState(false)
  const [paymentDate,
    setPaymentDate] = useState(parseDate(1))
  const [errorCode,setError] = useState('')
  const [docs,
    setDocs] = useState({"doc1": true, "doc2": true, "doc3": true, "doc4": true})
  const [srok,
    setSrok] = useState('1')
  const checkDoc = (e) => {
    const name = e.target.dataset.name
    // console.log(docs[name])
    setDocs({
      ...docs,
      [name]: !docs[name]
    })
    console.log(docs)

  }
  const changeOplata = (e) => {
    const name = e
      .target
      .getAttribute('data-name')
    setOplata(!predoplata)
  }

  const changeSrok = e => {
    const month = parseInt(e.target.value)
    setSrok(e.target.value)
    setPaymentDate(parseDate(month))
    if (e.target.value > 2) {
      const element = document.querySelector('.range__list')
      element.scrollLeft = -300;
    } else {
      const element = document.querySelector('.range__list')
      element.scrollLeft = 300;
    }
  }

  const changeSrokBtn = (month) => {
    const monthVal = parseInt(month)
    setSrok(month)
    setPaymentDate(parseDate(monthVal))
    if (monthVal > 3) {
      const element = document.querySelector('.range__list')
      element.scrollLeft = 200;
    } else {
      const element = document.querySelector('.range__list')
      element.scrollRight = 200;
    }
  }

  const aggrementSbmt = () => {
    // e.preventDefault()
    setLoading(true)
    axios
      .get(`${process.env.BASE_URL}/removeShortUrl`, {
      params: {
        id: aggrId,
        typePayment: predoplata
          ? 'Предоплата'
          : 'Постоплата',
        period: srok,
        date_payment: paymentDate,
        amountPayment: discount
      }
    })
      .then(res => {
        if (res.status === 200) {
          swal("Успешно!", `Ваша заявка отправлена в Nash Company. Вам сейчас перезвонят с номера +7(700)350-50-00`, "success").then(() => {
            router.push('/')
          })
        }
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
      })
  }
  
  const stepThird = () => {
    // e.preventDefault()
    const object = {
      id: cookie.get('lead_id') === undefined
        ? finalID
        : cookie.get('lead_id'),
      token: cookie.get('token'),
      amountPayment: discount,
      date_payment: paymentDate,
      period: srok,
      typePayment: predoplata
        ? 'Предоплата'
        : 'Постоплата'
    }

    if (cookie.get('utm_source') !== undefined) {
      object.utm_source = cookie.get('utm_source')
      object.click_id = cookie.get('click_id')
      // object.webID = cookie.get('web_id')
    }
    setLoading(true)
    axios
      .get(`${process.env.BASE_URL}/stepThree`, {params: object})
      .then(res => {
        setLoading(false)
        console.log(res)
        if (res.data.success) {
          swal("Успешно!", `Ваша заявка отправлена в Nash Company. Вам сейчас перезвонят с номера +7(700)350-50-00`, "success").then(() => {
            Router.push('/cabinet/requests')
            cookie.remove('lead_id')
            cookie.remove('step')
            cookie.remove('utm_medium')
            cookie.remove('utm_source')
            cookie.remove('utm_campaign')
            cookie.remove('click_id')
          });
        }
      })
  }

  const finalSubmit = ()=> {
    if (pathname === '/aggrement') {
      aggrementSbmt()
    } else {
      stepThird()
    }
  }

  const closeModal = () => {
    setCode('')
    setError('')
    setModal(false)
  }

  const onModal = (param) => {
    setLoading(true)
    setModal(false)
    setError('')
    axios
      .get(`${process.env.BASE_URL}/fourthStage?phone=${param}`)
      .then(res => {
        setLoading(false)
        if (res.data.success) {
          setModal(true)
        } else {}
      })
      .catch(err => {
        setLoading(false)
        setModal(false)
      })
  }

  const openCodeModal = (e) => {

    // e.preventDefault()
    // console.log(loggedIn)
    // if (cookie.get('token') === undefined && phone === null) {
    //   cookie.remove('step')
    //   router.push('/')
    // }
    // if (pathname === '/aggrement' && phone) {
    //   onModal(phone)
    // }
    // if (pathname !== '/aggrement' && loggedIn) {
    //   onModal(user.phone)
    // }
  }
  const repeatCode = () => {
    console.log(loggedIn)
    if (cookie.get('token') === undefined && phone === null) {
      cookie.remove('step')
      router.push('/')
    }
    if (pathname === '/aggrement' && phone) {
      onModal(phone)
    }
    if (pathname !== '/aggrement' && loggedIn) {
      onModal(user.phone)
    }
  }

  const checkCode = (param, codeVal) => {
    setError('')
    axios
      .get(`${process.env.BASE_URL}/checkCode?phone=${param}&code=${codeVal}`)
      .then(res => {
        console.log(res)
        if(res.data.success) {
          setModal(false)
          finalSubmit()
        }
        else {
          setError(res.data.message)
        }
      })
      .catch(err=> {
        setError('Что то полшо не так')
      })
  }

  const sendCodeCheck = (codeVal) => {
    if (pathname === '/aggrement' && phone) {
      checkCode(phone, codeVal)
    }
    if (pathname !== '/aggrement' && loggedIn) {
      checkCode(user.phone, codeVal)
    }
  }

  // const dogovorobrabotka = () => {   if(pathname === '/aggrement') {     return
  // `/dogovorobrabotka?token=${token}`   }   if(pathname ===
  // '/cabinet/continue') {     return `/dogovorobrabotka?id=${id}`   }   else {
  //   return '/dogovorobrabotka'   } }
  return (
    <div className='form_register'>
      <form onSubmit={(e) => openCodeModal(e)}>
        <div className='check_groups'>
          <div data-name='predoplata' className='check-group'>
            <input type='checkbox' checked={docs.doc1}/>
            <label onClick={(e) => checkDoc(e)} data-name='doc1' className='checklabel'></label>
            {token
              ? <a href={`/dogovorobrabotka?token=${token}`} target='__blank'>Согласие на сбор и обработку информации</a>
              : <a href={`/dogovorobrabotka`} target='__blank'>Документ 1</a>}
              

          </div>
          <div data-name='predoplata' className='check-group'>
            <input type='checkbox' checked={docs.doc2}/>
            <label onClick={(e) => checkDoc(e)} data-name='doc2' className='checklabel'></label>
            {token
              ? <a href={`/dogovorobrabotka?token=${token}`} target='__blank'>Согласие на сбор и обработку информации</a>
              : <a href={`/dogovorobrabotka`} target='__blank'>Документ 2</a>}
              

          </div>
          <div data-name='predoplata' className='check-group'>
            <input type='checkbox' checked={docs.doc3}/>
            <label onClick={(e) => checkDoc(e)} data-name='doc3' className='checklabel'></label>
            {token
              ? <a href={`/dogovorobrabotka?token=${token}`} target='__blank'>Согласие на сбор и обработку информации</a>
              : <a href={`/dogovorobrabotka`} target='__blank'>Документ 3</a>}
              

          </div>
          {/* <div data-name='postoplata' className='check-group'>
            <input type='checkbox' checked={docs.doc2}/>
            <label onClick={(e) => checkDoc(e)} className='checklabel' data-name='doc2'></label>

            <a href='/ПУБЛИЧНАЯ ОФЕРТА.pdf' target='__blank'>Договор публичной оферты</a>
          </div>

          <div data-name='predoplata' className='check-group'>
            <input type='checkbox' checked={docs.doc4}/>
            <label onClick={(e) => checkDoc(e)} className='checklabel' data-name='doc4'></label>
            {token
              ? <a
                  href={`/dogovor?paymentDate=${paymentDate}&period=${srok}&token=${token}`}
                  target='__blank'>Договор на заказ наряд</a>
              : <a href={`/dogovor?paymentDate=${paymentDate}&period=${srok}`} target='__blank'>Договор на заказ наряд</a>}

          </div> */}

          {docs.doc1 === false
            ? <input
                type='submit'
                onClick={() => handleFocus()}
                className='button button_lightest'
                value='Получить результат'/>
            : <input type='submit' className='button' value='Получить результат'/>
}
        </div>
      </form>

      <CodeModal
        isModalOpen={modal}
        closeModal={closeModal}
        code={code}
        setCode={setCode}
        onFirstStep={sendCodeCheck}
        getIdentification={repeatCode}
        error={errorCode}/>
    </div>
  )
}

export default(connect(mapStateToProps, null)(ThirdStep))