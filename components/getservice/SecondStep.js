import React, {useEffect, useState} from "react"
import {fizservice, jurservice} from "../../defaults/fizservice"
import cookie from 'js-cookie'
import axios from "axios"
import Router, {useRouter} from "next/router"
import {Formik, Form, Field} from 'formik';
import {required} from "../../defaults/validations"
import Dropzone from "react-dropzone";
import PriceMask from "../Masks/PriceMask"
import {handleFocus, replaceDate, thousandSeparator} from "../../defaults/extraFunction"
import DropFile from "../dropFile/DropFile"
import DateMask from "../Masks/DateMask"
import DropFileDoc from "../dropFileDoc/dropFileDoc"

const SecondStep = ({setLoading}) => {
  const router = useRouter()
  const pathname = router.pathname
  // const {id} = router.query
  const {step} = router.query;
  const {type} = router.query;
  const listofservice = router.pathname === '/dlya-fizicheskix-lic'
    ? fizservice
    : jurservice
  const listofcontinue = type === 'Физ лицо'
    ? fizservice
    : jurservice
  const finalLists = pathname === '/cabinet/continue'
    ? listofcontinue
    : listofservice
  const [isMfo,
    setIsMfo] = useState(false)
  const [sphere,
    setSphere] = useState('1')
  const onChangeSphere = e => {
    if (finalLists.find(x => x.id === e.target.value).name.includes('564546465465465465')) {
      setIsMfo(true)
      console.log(true)
    } else {
      setIsMfo(false)
    }

    setSphere(e.target.value)
  }
  const [files,
    setFiles] = useState([]);
  const [formData,
    setFormData] = useState({
    id: cookie.get('lead_id') === undefined
      ? router.query.id
      : cookie.get('lead_id'),
    token: cookie.get('token'),
    description: '',
    sphere: '1',
    amount: ''
  })

  const stepSecond = (values) => {
    setLoading(true)
    console.log(values)
    // console.log(replaceDate(values.amount))
    const sphereVal = finalLists
      .find(x => x.id === sphere)
      .name
    const object = {
      id: values.id,
      token: values.token,
      description: values.description,
      sphere: sphereVal,
      amount: replaceDate(values.amount)
    }
    if (cookie.get('utm_source') !== undefined) {
      object.utm_source = cookie.get('utm_source') + "_2"
      object.click_id = cookie.get('click_id')
      // object.webID = cookie.get('web_id')
    }
    axios
      .get(`${process.env.BASE_URL}/stepTwo`, {params: object})
      .then(res => {
        setLoading(false)
        console.log(res)
        if (res.data.success) {
          if (pathname === '/jurservice') {
            Router.push('/jurservice?step=3')
            cookie.set('stepjur', 3)
            cookie.set('amount', replaceDate(values.amount))
          }
          if (pathname === '/dlya-fizicheskix-lic') {
            Router.push('/dlya-fizicheskix-lic?step=3')
            cookie.set('step', 3)
            cookie.set('amount', replaceDate(values.amount))
          }
          if (pathname === '/cabinet/continue') {
            Router.push({
              pathname: '/cabinet/continue',
              query: {
                step: 3,
                id: router.query.id,
                type: type,
                amount: replaceDate(values.amount)
              }
            })
          }
        }
        if (!res.data.success) {}
      })
  }

  useEffect(() => {


  }, [])

  return (
    <div className='form_register'>
      <Formik
        initialValues={{
          nameCompany: "",
          description: "",
          dateAggrement: "",
          od: "",
          amount: "",
          token: cookie.get('token'),
        }}
        onSubmit=
        {(values) => {stepSecond(values)}}>
        {({errors, touched, values}) => (
          <Form>
              <Field
                name="nameCompany"
                type="text"
                validate={required}
                placeholder="Наименование компании"
              ></Field>
              {(errors.nameCompany && touched.nameCompany)
                ? <p className='text-danger'>{errors.nameCompany}</p>
                : <p className=''></p>}
              <Field
                name="description"
                type="text"
                validate={required}
                placeholder="Описание спора" />
              {(errors.description && touched.description)
                ? <p className='text-danger'>{errors.description}</p>
                : <p className=''></p>}
              <Field
                name='dateAggrement'
                type='text'
                validate={required}
                component={DateMask}
                placeholder='Дата договора (ДД.ММ.ГГГГ)' />              
                {(errors.dateAggrement && touched.dateAggrement)
                ? <p className='text-danger'>{errors.dateAggrement}</p>
                : <p className=''></p>}
              <Field
                name="od"
                type="number"
                validate={required}
                placeholder="ОД"/>
              {(errors.od && touched.od)
                ? <p className='text-danger'>{errors.od}</p>
                : <p className=''></p>}
              <Field
                name='amount'
                type='text'
                validate={required}
                component={PriceMask}
                placeholder="Сумма к возврату"/>
              {(errors.amount && touched.amount)
                ? <p className='text-danger'>{errors.amount}</p>
                : <p className=''></p>}
            <DropFile setFiles={setFiles} inputContent="Причина образования долга"/>
            <br></br>
            <DropFileDoc setFiles={setFiles}/>
            <div className='firststep_banner'>
              <div className='firststep_banner--img'>
                <img alt='image' className='secondstep' src='/img/form/secondstep.png'/>
              </div>
              <div className='firststep_banner--button'>
                <input
                  className='singlebtn'
                  type='submit'
                  className='button'
                  onClick={() => handleFocus()}
                  value='Далее'/>
                <b>Сначала результат<br></br>
                  потом оплата</b>
              </div>

            </div>
          </Form>
        )}

      </Formik>
    </div>
  )
}

export default SecondStep