// const FirstStep = () => {
//   return(
//     <div className='form_register'>
//       <form>
//         <input type='number' name='bin' placeholder='БИН' />
//         <input type='text' disabled name='organization' placeholder='' />
//         <input type='text' name='position' placeholder='Занимаемая должность' />
//         <input type='text' name='fio' placeholder='Фамилия Имя' />
//         <input type='text' name='phone' placeholder='Телефон' />
//         <input type='text' name='email' placeholder='Email' />
        
//         <input className='singlebtn' type='button' className='button' value='Отправить' />
//       </form>
//     </div>
//   )
// }

// export default FirstStep

import axios from 'axios'
import {useEffect, useState} from 'react'
import CodeModal from '../shared/CodeModal'
import {replaceDate} from '../../defaults/extraFunction'
import cookie from 'js-cookie'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import {Formik, Form, Field} from 'formik';
import {
  emailValid,
  required,
  phoneValidation,
  passwordValid,
  acceptCirrilic,
  phoneCheck,
  iinValidation
} from '../../defaults/validations'
import Router from 'next/router'
import Loader from '../loader/Loader'
import { validage } from '../../defaults/iinValidAge'
import swal from 'sweetalert'
import LoaderText from '../shared/LoaderText'
import PhoneMask from '../Masks/PhoneMask'
import IinMask from '../Masks/IinMask'


const FirstStep = ({setLoading}) => {
  const { addToast } = useToasts()
  const [formData,
    setFormData] = useState({email: '', phone: '', fio: '', password: '', type: 'Физ лицо'})
  const [errors,
    setErrors] = useState({email: '', phone: '', fio: '', password: ''})
  const [codeError, setCodeError] = useState('')
  const [binVal,setBin] = useState('')
  const [organization,setOrganization] = useState({value: '', type: false, loading:false})
  const [modal,
    setModal] = useState(false)

  const closeModal = () => {
    setModal(false)
  }


  const binChange = e => {
    const val = e.target.value;
    const value = val ? val.replace(/ /g, "") : ''
    setBin(e.target.value)
    // if(value.length === 12) {
    //   axios.get(`https://api.money-men.kz/api/testKompra?bin=${value}`)
    //     .then(res=> {
    //       setOrganization(res.data.content[0].name)
    //     })
    // }
  }

  useEffect(() => {
    const value = binVal ? binVal.replace(/ /g, "") : ''
    if(value.length === 12) {
      setOrganization({...organization,type: true,value:'Загрузка...', loading: true})
      axios.get(`https://api.money-men.kz/api/testKompra?bin=${value}`, {headers: {
        'Access-Control-Allow-Origin': '*'
      }})
        .then(res=> {
          console.log(res)
          if(res.data.content.length === 0) {
            setTimeout(() => {
              setOrganization({value: 'Пожалуйста введите правильный БИН', type: false, loading: false})
            }, 1000)
       
          }else {
            setOrganization({value: res.data.content[0].name, type: true, loading: false})
          }
        })
        .catch(err=> {
          console.log(err)
          if(err.response) {
            console.log(err.response.status)
          }
          setOrganization({value: 'Пожалуйста введите правильный БИН', type: false, loading: false})
        })
    }else {
      setOrganization({value: '', type: false, loading: false})
    }
  }, [binVal])
  const [code,
    setCode] = useState('');
  const getIdentification = (values) => {
    if(!validage(values.iin)) {
      swal("Oops!", `Извините, услуга осуществляется лицам достигшие 18 лет.`, "info");
    }
    else {
      setLoading(true)
      setFormData(values)
      axios.get(`${process.env.BASE_URL}/identification`, {
        params: {
          fio: values.fio,
          phone: replaceDate(values.phone),
          email: values.email,
          password: values.password,
          type: values.type,
          source: 'nashcompany.kz'
        }
      }).then(res => {
        setLoading(false)
        console.log(res)
        if (res.data.success) {
          setModal(true)
        
        }
        if(!res.data.success) {
          addToast(res.data.message, {
            appearance: 'error',
            autoDismiss: true,
          })
        }
      })
      .catch(err=> {
        setLoading(false)
        if(err.response) {
          addToast(err.response.status, {
            appearance: 'error',
            autoDismiss: true,
          })
        }
      })
    }
   
  }

  const firstStep = (codeVal) => {
    setLoading(true)
    axios.get(`${process.env.BASE_URL}/stepOne`, {
      params: {
        fio: formData.fio,
        phone: replaceDate(formData.phone),
        email: formData.email,
        password: formData.password,
        type: formData.type,
        code: codeVal,
        source: cookie.get('utm_source') + '_1' || 'nashcompany.kz'
      }
    }).then(res => {
      setLoading(false)
      console.log(res)
      if (res.data.success) {
        cookie.set('token', res.data.token)
        cookie.set('lead_id', res.data.id)
        cookie.set('step', 2)
        Router.push('/jurservice?step=2')
      }
      if(!res.data.success) {
        setCodeError(res.data.message)
        addToast(finalErr, {
          appearance: 'error',
          autoDismiss: true,
        })
      }
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setErrors({
      ...errors,
      email: emailValid(formData.email),
      fio: required(formData.fio),
      phone: phoneValidation(formData.phone),
      password: passwordValid(formData.password)
    })

    getIdentification()
  }

  const onChange = (e) => {
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: e.target.value
    })
  }

  return (
    <div>
      <div className='form_register'>
        <Formik
          initialValues={{
          email: '',
          bin: '',
          position: '',
          phone: '',
          fio: '',
          password: '',
          type: 'Физ лицо',
          iin: '',
        }}
          onSubmit={(values) => {getIdentification(values)}}>
          {({errors, touched}) => (
            <Form>

              <Field
                name='bin'
                className='form-control'
                placeholder='БИН'
                type='tel'
                onChange={e=>binChange(e)}
                value={binVal}
                // validate={iinValidation}
                component={IinMask}></Field>
                 {/* {(errors.iin && touched.iin) ? <p className='text-danger'>{errors.iin}</p> :  <p className='text-danger'></p>} */}
                 {/* {!organization.loading && <p className={!organization.type ? 'text-danger' : 'text-info'}>{organization.value}</p>}
                 {organization.loading && <LoaderText />} */}
              <input type='text' className={(organization.type === false && organization.value) && 'disabled_error'} value={organization.value} disabled name='organization' placeholder='Название Организации' />
              <Field
                type='text'
                name='position'
                validate={required}
                placeholder='Занимаемая должность'
                autocomplete='off'/>
               {(errors.position && touched.position) ? <p className='text-danger'>{errors.position}</p> :  <p className='text-danger'></p>}
              
              <Field
                type='text'
                name='fio'
                validate={acceptCirrilic}
                placeholder='ФИО'
                autocomplete='off'/>
               {(errors.fio && touched.fio) ? <p className='text-danger'>{errors.fio}</p> :  <p className='text-danger'></p>}

              <Field
                name='phone'
                className='form-control'
                placeholder='Телефон номер'
                type='tel'
                validate={phoneValidation}
                component={PhoneMask}></Field>
                 {(errors.phone && touched.phone) ? <p className='text-danger'>{errors.phone}</p> :  <p className='text-danger'></p>}

              <Field
                name='iin'
                className='form-control'
                placeholder='ИИН'
                type='tel'
                validate={iinValidation}
                component={IinMask}></Field>
                 {(errors.iin && touched.iin) ? <p className='text-danger'>{errors.iin}</p> :  <p className='text-danger'></p>}

              <Field
                type='text'
                name='email'
                validate={emailValid}
                placeholder='Email'
                autocomplete='off'/>
                 {(errors.email && touched.email) ? <p className='text-danger'>{errors.email}</p> :  <p className='text-danger'></p>}

              {/* <Field
                type='password'
                name='password'
                validate={passwordValid}
                placeholder='Придумайте пароль'
                autocomplete='off'/> 
                 {(errors.password && touched.password) ? <p className='text-danger'>{errors.password}</p> :  <p className='text-danger'></p>} */}

              <input
                className='singlebtn'
                type='submit'
                className='button'
                value='Отправить'/>
            </Form>
          )}
        </Formik>
        <CodeModal
          isModalOpen={modal}
          closeModal={closeModal}
          code={code}
          setCode={setCode}
          onFirstStep={firstStep}
          error={codeError}
          getIdentification={getIdentification}/> 
      </div>

    </div>
  )
}

const FirstReg = ({setLoading}) => {
  return(
    <ToastProvider>
      <FirstStep setLoading={setLoading}/>
    </ToastProvider>
  )
}

export default FirstReg