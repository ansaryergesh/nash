import axios from 'axios'
import {useState} from 'react'
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
import PhoneMask from '../Masks/PhoneMask'
import IinMask from '../Masks/IinMask'

const FirstStep = ({setLoading}) => {
  const { addToast } = useToasts()
  const [formData,
    setFormData] = useState({email: '', phone: '', fio: '', password: '', type: 'Физ лицо'})
  
  const [errors,
    setErrors] = useState({email: '', phone: '', fio: '', password: ''})
  const [codeError, setCodeError] = useState('')

  const [modal,
    setModal] = useState(false)
  

  
  const closeModal = () => {
    setModal(false)
  }

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
        
          // disableScroll.on();
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
        source: cookie.get('utm_source')+"_1" || 'nashcompany.kz'
      }
    }).then(res => {
      setLoading(false)
      console.log(res)
      if (res.data.success) {
        cookie.set('token', res.data.token)
        cookie.set('lead_id', res.data.id)
        cookie.set('step', 2)
        Router.push('/getservice?step=2')
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
      [name]: normaliseNumber(e.target.value)
    })
  }
  return (
    <div>
      <div className='form_register'>
        <Formik
          initialValues={{
          email: '',
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
                type='text'
                name='fio'
                validate={acceptCirrilic}
                placeholder='ФИО'
                autocomplete='off'/>
               {(errors.fio && touched.fio) ? <p className='text-danger'>{errors.fio}</p> :  <p className='text-danger'></p>}
              {formData.phone}
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

              <Field
                type='password'
                name='password'
                validate={passwordValid}
                placeholder='Придумайте пароль'
                autocomplete='off'/> 
                 {(errors.password && touched.password) ? <p className='text-danger'>{errors.password}</p> :  <p className='text-danger'></p>}

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
          getIdentification={getIdentification}/> {/* <form onSubmit={(e) => onSubmit(e)}>

        <input
          type='text'
          name='fio'
          value={formData.fio}
          onChange={e => onChange(e)}
          placeholder='Фамилия Имя'/>
        <InputMask
          mask="+7(999)-999-9999"
          maskChar=" "
          name='phone'
          placeholder='Телефон номер'
          type='tel'
          onChange={e => onChange(e)}
          value={formData.phone}
          className="my-input"/>
        <InputMask
          mask="999999999999"
          maskChar=" "
          name='iin'
          value={formData.iin}
          onChange={e => onChange(e)}
          placeholder='ИИН'
          type='tel'
          className="my-input"/>
        <input
          type='text'
          name='email'
          value={formData.email}
          onChange={e => onChange(e)}
          placeholder='Email'/>
        <input
          type='password'
          value={formData.password}
          onChange={e => onChange(e)}
          name='password'
          placeholder='Придумайте пароль'/>
        <input
          className='singlebtn'
          type='submit'
          className='button'
          value='Отправить'/>

      </form> */}

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