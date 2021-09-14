import axios from 'axios'
import {useEffect, useState} from 'react'
import CodeModal from '../shared/CodeModal'
import {handleFocus, replaceDate} from '../../defaults/extraFunction'
import cookie from 'js-cookie'
import {ToastProvider, useToasts} from 'react-toast-notifications'
import {Formik, Form, Field} from 'formik';
import {useDispatch} from 'react-redux'
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
import {validage} from '../../defaults/iinValidAge'
import swal from 'sweetalert'
import PhoneMask from '../Masks/PhoneMask'
import IinMask from '../Masks/IinMask'

const FirstStep = ({setLoading}) => {
  const {addToast} = useToasts()
  const dispatch = useDispatch()
  const [formData,
    setFormData] = useState({email: '', phone: '', fio: '', password: '', type: 'Физ лицо'})

  const [errors,
    setErrors] = useState({email: '', phone: '', fio: '', password: ''})
  const [codeError,
    setCodeError] = useState('')

  const [modal,
    setModal] = useState(false)

  const closeModal = () => {
    setModal(false)
  }
  


  const [code,
    setCode] = useState('');

  const repeatCode = () => {
    setLoading(true)
    setModal(false)
    setCode('')
    setCodeError('')
    axios.get(`${process.env.BASE_URL}/identification`, {
      params: {
        fio: formData.fio,
        phone: replaceDate(formData.phone),
        email: formData.email,
        password: formData.password,
        type: formData.type,
        source: 'nashcompany.kz',
        iin: formData.iin
      }
    }).then(res => {
      // console.log(res)
      setLoading(false)
    
      if (res.data.success) {
        setModal(true)

        // disableScroll.on();
      }
      if (!res.data.success) {
        addToast(res.data.message, {
          appearance: 'error',
          autoDismiss: true
        })
      }
    }).catch(err => {
      setLoading(false)
      if (err.response) {
        addToast(err.response.status, {
          appearance: 'error',
          autoDismiss: true
        })
      }
    })
  }
  const getIdentification = (values) => {
    // console.log(values)
    // console.log('other')
    if (!validage(values.iin)) {
      swal("Oops!", `Извините, услуга осуществляется лицам достигшие 18 лет.`, "info");
    } else {
      setLoading(true)
      setFormData(values)
      axios.get(`${process.env.BASE_URL}/identification`, {
        params: {
          fio: values.fio,
          phone: replaceDate(values.phone),
          email: values.email,
          password: values.password,
          type: values.type,
          source: 'nashcompany.kz',
          iin: values.iin
        }
      }).then(res => {
        // console.log(res)
        setLoading(false)
      
        if (res.data.success) {
          setModal(true)

          // disableScroll.on();
        }
        if (!res.data.success) {
          addToast(res.data.message, {
            appearance: 'error',
            autoDismiss: true
          })
        }
      }).catch(err => {
        setLoading(false)
        if (err.response) {
          addToast(err.response.status, {
            appearance: 'error',
            autoDismiss: true
          })
        }
      })
    }

  }

  const firstStep = (codeVal) => {
    setLoading(true)
    const object = {
      fio: formData.fio,
      iin: formData.iin,
      phone: replaceDate(formData.phone),
      email: formData.email,
      password: formData.password,
      type: formData.type,
      code: codeVal,
      source: cookie.get('utm_source')!== undefined ? cookie.get('utm_source') + "_1" : 'nashcompany.kz'
    }
    if (cookie.get('utm_source') !== undefined) {
      object.utm_source = cookie.get('utm_source') + '_1'
      object.click_id = cookie.get('click_id')
      // object.webID = cookie.get('web_id')
    }

    // console.log(object)
    axios.get(`${process.env.BASE_URL}/stepOne`, {
      params: 
       object
      
    }).then(res => {
      // console.log(res)
      setLoading(false)
   
      if (res.data.success) {
        cookie.set('token', res.data.token, {expires: 1000})
        cookie.set('lead_id', res.data.id, {expires: 60})
        cookie.set('step', 2, {expires: 60})

        Router.push('/dlya-fizicheskix-lic?step=2')
        dispatch({type: 'AUTHENTICATING_USER'})
        axios.post(`${process.env.BASE_URL}/getData`, {token: res.data.token})
          .then(res=> {
            if(res.data.success) {
              dispatch({type: 'SET_CURRENT_USER', payload: res.data})
            }
          })
      }
      if (!res.data.success) {
        setCodeError(res.data.message)
        addToast(res.data.message, {
          appearance: 'error',
          autoDismiss: true
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
          iin: ''
        }}
          onSubmit={(values) => {
          getIdentification(values)
        }}>
          {({errors, touched}) => (
            <Form>
              <Field
                type='text'
                name='fio'
                className='capitalize'
                validate={acceptCirrilic}
                placeholder='ФИО'
                autocomplete='off'/> {(errors.fio && touched.fio)
                ? <p className='text-danger'>{errors.fio}</p>
                : <p className=''></p>}
              <Field
                name='phone'
                className='form-control'
                placeholder='Телефон номер'
                type='tel'
                validate={phoneValidation}
                component={PhoneMask}></Field>
              {(errors.phone && touched.phone)
                ? <p className='text-danger'>{errors.phone}</p>
                : <p className=''></p>}

              <Field
                name='iin'
                className='form-control'
                placeholder='ИИН'
                type='tel'
                validate={iinValidation}
                component={IinMask}></Field>
              {(errors.iin && touched.iin)
                ? <p className='text-danger'>{errors.iin}</p>
                : <p className=''></p>}

              <Field
                type='text'
                name='email'
                validate={emailValid}
                placeholder='Email'
                autocomplete='off'/> {(errors.email && touched.email)
                ? <p className='text-danger'>{errors.email}</p>
                : <p className=''></p>}

              {/* <Field
                type='password'
                name='password'
                validate={passwordValid}
                placeholder='Придумайте пароль'
                autocomplete='off'/> {(errors.password && touched.password)
                ? <p className='text-danger'>{errors.password}</p>
                : <p className=''></p>} */}

              <div className='firststep_banner'>
              
                <div className='firststep_banner--button'>
                  <input
                    className='singlebtn'
                    type='submit'
                    className='button'
                    onClick={() =>handleFocus()}
                    value='Отправить'/>
                </div>

              </div>

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
          getIdentification={repeatCode}/> {/* <form onSubmit={(e) => onSubmit(e)}>

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
  useEffect(() => {
    var form = document.querySelector('.form_register');
    
    form.scrollIntoView({block: 'center', behavior: 'smooth'})

  },[])
  return (
    <ToastProvider>
      <FirstStep setLoading={setLoading}/>
    </ToastProvider>
  )
}

export default FirstReg