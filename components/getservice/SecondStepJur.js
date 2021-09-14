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
import IinMask from '../Masks/IinMask'
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
  const [binVal,setBin] = useState("")
  const [isMfo,
    setIsMfo] = useState(false)
  const [sphere,
    setSphere] = useState('1')
  const [organization,
    setOrganization] = useState({value: '', type: false, loading: false})


  const binChange = e => {
    const val = e.target.value;
    const value = val
      ? val.replace(/ /g, "")
      : ''
    setBin(e.target.value)
  }

  useEffect(() => {
    const value = binVal
      ? binVal.replace(/ /g, "")
      : ''
    if (value.length === 12) {
      setOrganization({
        ...organization,
        type: true,
        value: 'Загрузка...',
        loading: true
      })
      axios
        .get(`https://api.money-men.kz/api/testKompra?bin=${value}`, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(res => {

          if (res.data.content.length === 0) {
            setTimeout(() => {
              setOrganization({value: 'Пожалуйста введите правильный БИН', type: false, loading: false})
            }, 1000)

          } else {
            setOrganization({value: res.data.content[0].name, type: true, loading: false})
          }
        })
        .catch(err => {
          console.log(err)
          if (err.response) {}
          setOrganization({value: 'Пожалуйста введите правильный БИН', type: false, loading: false})
        })
    } else {
      setOrganization({value: '', type: false, loading: false})
    }
  }, [binVal])
  
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
    // setLoading(true)
    // console.log(values)
    // // console.log(replaceDate(values.amount))
    // const sphereVal = finalLists
    //   .find(x => x.id === sphere)
    //   .name
    // const object = {
    //   id: values.id,
    //   token: values.token,
    //   description: values.description,
    //   sphere: sphereVal,
    //   amount: replaceDate(values.amount)
    // }
    // if (cookie.get('utm_source') !== undefined) {
    //   object.utm_source = cookie.get('utm_source') + "_2"
    //   object.click_id = cookie.get('click_id')
    //   // object.webID = cookie.get('web_id')
    // }
    // axios
    //   .get(`${process.env.BASE_URL}/stepTwo`, {params: object})
    //   .then(res => {
    //     setLoading(false)
    //     console.log(res)
    //     if (res.data.success) {
    //       if (pathname === '/jurservice') {
    //         Router.push('/jurservice?step=3')
    //         cookie.set('stepjur', 3)
    //         cookie.set('amount', replaceDate(values.amount))
    //       }
    //       if (pathname === '/dlya-fizicheskix-lic') {
    //         Router.push('/dlya-fizicheskix-lic?step=3')
    //         cookie.set('step', 3)
    //         cookie.set('amount', replaceDate(values.amount))
    //       }
    //       if (pathname === '/cabinet/continue') {
    //         Router.push({
    //           pathname: '/cabinet/continue',
    //           query: {
    //             step: 3,
    //             id: router.query.id,
    //             type: type,
    //             amount: replaceDate(values.amount)
    //           }
    //         })
    //       }
    //     }
    //     if (!res.data.success) {}
    // })
  }

  useEffect(() => {


  }, [])

  return (
    <div className='form_register'>
      <Formik
        initialValues={{
          bin: "",
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
              name="bin"
              type='tel'
              component={IinMask}
              onChange={e => binChange(e)}
              value={binVal}
              placeholder="БИН должника"
            >
            </Field>
            {(errors.bin && touched.bin)
                ? <p className='text-danger'>{errors.bin}</p>
                : <p className=''></p>}
            <Field
                type="text"
                disabled
                className={(organization.type === false && organization.value) && 'disabled_error text-danger'}
                value={organization.value}
                name='companyName'
                placeholder='Наименование компании'/>
              <Field
                name="description"
                type="text"
                validate={required}
                placeholder="Описание спора" />
              {(errors.description && touched.description)
                ? <p className='text-danger'>{errors.description}</p>
                : <p className=''></p>}
              <Field
                name='amount'
                type='text'
                validate={required}
                component={PriceMask}
                placeholder="Сумма задолженности"/>
              {(errors.amount && touched.amount)
                ? <p className='text-danger'>{errors.amount}</p>
                : <p className=''></p>}
            <DropFile setFiles={setFiles} inputContent="Документы подтверждающие сумму долга"/>
            <br></br>
            <DropFileDoc setFiles={setFiles} inputContent="Учредительные документы, документы легитимности подписанта"/>
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