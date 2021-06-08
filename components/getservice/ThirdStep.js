import axios from "axios"
import {useEffect, useState} from "react"
import cookie from 'js-cookie'
import Router from 'next/router'
import swal from 'sweetalert'
import { amountSpace, parseDate } from "../../defaults/extraFunction"

const ThirdStep = () => {
  useEffect(() => {
    const summa = cookie.get('amount')
    const finalSumma = Math.floor(parseInt(summa)*0.2)
    const discountSumma = Math.floor(parseInt(finalSumma)/2)
    if(finalSumma>200000) {
      setSumma(finalSumma)
      setDiscount(discountSumma)
    }else {
      setSumma(200000)
      setDiscount(100000)
    }
    console.log(finalSumma)
  }, [cookie.get('amount')])
  const [summa,setSumma] = useState(0)
  const [discount,setDiscount] = useState(0)
  const [predoplata,
    setOplata] = useState(false)
  const [paymentDate, setPaymentDate] = useState(parseDate(1))
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
  }

  const changeSrokBtn = (month) => {
    const monthVal = parseInt(month)
    setSrok(month)
    setPaymentDate(parseDate(monthVal))
  }

  const stepThird = (e) => {
    e.preventDefault()
    const object = {
      id: cookie.get('lead_id'),
        token: cookie.get('token'),
        
        // надо исправить 
        amountPayment: '100000',
        srok: srok,
        typePayment: predoplata
          ? 'Предоплата'
          : 'Постоплата' 
    }

    if(cookie.get('utm_source')!== undefined) {
      object.utm_source = cookie.get('utm_source')
      object.click_id = cookie.get('click_id')
      // object.webID = cookie.get('web_id')
    }
    axios.get(`${process.env.BASE_URL}/stepThree`, {
      params: object
    }).then(res => {
      console.log(res)
      if (res.data.success) {
        swal("Успешно!", `Ваша заявка отправлена в Nash Company. Ждите звонок от оператора`, "success").then(() => {
          Router.push('/')
          cookie.remove('lead_id')
          cookie.remove('step')
          cookie.remove('token')
        });
      }
    })
  }
  return (

    <div className='form_register thirdstep'>
      <form onSubmit={(e) => stepThird(e)}>
        <div className='radio_groups'>
          <div
            className='postoplata'
            data-name='postoplata'
            className='check-group'
            onClick={e => changeOplata(e)}>
            <input type='checkbox' checked={predoplata === false}/>
            <label className='radiolabel'>Постоплата</label>
          </div>

          <div
            className='predoplata'
            data-name='predoplata'
            className='check-group'
            onClick={e => changeOplata(e)}>
            <input type='checkbox' checked={predoplata === true}/>

            <label className='radiolabel'>Предоплата</label>
          </div>
        </div>

        {!predoplata && <div className="range">
          <input
            className="range__input"
            type="range"
            value={srok}
            onChange={e => changeSrok(e)}
            min="1"
            max="6"
            step="1"
            list="number"/>
          <datalist className='range__list' id="number">
            <option
              onClick={() => changeSrokBtn('1')}
              className={`range__opt opt0 ${srok === '1' && 'active'}`}>1</option>
            <option
              onClick={() => changeSrokBtn('2')}
              className={`range__opt ${srok === '2' && 'active'}`}>2</option>
            <option
              onClick={() => changeSrokBtn('3')}
              className={`range__opt ${srok === '3' && 'active'}`}>3</option>
            <option
              onClick={() => changeSrokBtn('4')}
              className={`range__opt ${srok === '4' && 'active'}`}>4</option>
            <option
              onClick={() => changeSrokBtn('5')}
              className={`range__opt ${srok === '5' && 'active'}`}>5</option>
            <option
              onClick={() => changeSrokBtn('6')}
              className={`range__opt ${srok === '6' && 'active'}`}>6</option>
          </datalist>
        </div>
      }
      {!predoplata &&   <div className='payment_date'>
        <strong>День оплаты до {paymentDate} </strong>
      </div>}
    

        {/* <input
          type='number'
          className='summa'
          value={summa}
          onChange={e => setSumma(e.target.value)}
          placeholder='Сумма оплаты'/> */}
        <div className='payment_amount'>
          <p>Сумма оплаты:</p>
          <div>
            <strong>{amountSpace(`${discount}`)}тг</strong>
            <span class="price--line-through">{amountSpace(`${summa}`)}тг</span>
          </div>
          <div className='discount'>50%</div>
        </div>
        <div className='check_groups'>
          <div data-name='predoplata' className='check-group'>
            <input type='checkbox' checked={docs.doc1}/>
            <label onClick={(e) => checkDoc(e)} data-name='doc1' className='checklabel'>
              <a href='#'>Запрос на обработку персональных данных</a>
            </label>
          </div>
          <div data-name='postoplata' className='check-group'>
            <input type='checkbox' checked={docs.doc2}/>
            <label onClick={(e) => checkDoc(e)} className='checklabel' data-name='doc2'>
              <a href='#'>Договор публичной оферты</a>
            </label>
          </div>

          <div data-name='predoplata' className='check-group'>
            <input type='checkbox' checked={docs.doc4}/>
            <label onClick={(e) => checkDoc(e)} className='checklabel' data-name='doc4'>
              <a href='#'>Договор на заказ наряд</a>
            </label>
          </div>
          {Object
            .keys(docs)
            .some(k => !docs[k])
            ? <input
                className='singlebtn'
                type='submit'
                disabled={true}
                className='button button_lightest'
                value='Отправить'/>
            : <input
              className='singlebtn'
              type='submit'
              className='button'
              value='Отправить'/>
}
        </div>
      </form>
    </div>
  )
}

export default ThirdStep