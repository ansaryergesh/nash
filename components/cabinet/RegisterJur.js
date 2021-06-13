import axios from 'axios'
import {useEffect, useState} from 'react'
import CodeModal from '../shared/CodeModal'
import {handleFocus, replaceDate} from '../../defaults/extraFunction'
import {positions} from '../../defaults/positions'
import cookie from 'js-cookie'
import {ToastProvider, useToasts} from 'react-toast-notifications'
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
import {validage} from '../../defaults/iinValidAge'
import swal from 'sweetalert'
import LoaderText from '../shared/LoaderText'
import PhoneMask from '../Masks/PhoneMask'
import IinMask from '../Masks/IinMask'

const FirstStep = ({setLoading}) => {
  const {addToast} = useToasts()
  const [formData,
    setFormData] = useState({
    email: '',
    phone: '',
    fio: '',
    password: '',
    type: 'Юр лицо',
    position: '1'
  })
  const [errors,
    setErrors] = useState({email: '', phone: '', fio: '', password: ''})
  const [codeError,
    setCodeError] = useState('')
  const [binVal,
    setBin] = useState('')
  const [organization,
    setOrganization] = useState({value: '', type: false, loading: false})
  const [modal,
    setModal] = useState(false)

  const closeModal = () => {
    setModal(false)
  }

 
  const binChange = e => {
    const val = e.target.value;
    const value = val
      ? val.replace(/ /g, "")
      : ''
    setBin(e.target.value)
    // if(value.length === 12) {
    // axios.get(`https://api.money-men.kz/api/testKompra?bin=${value}`) .then(res=>
    // {       setOrganization(res.data.content[0].name)     }) }
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
  const [code,
    setCode] = useState('');
  const getIdentification = (values) => {
    if (!validage(values.iin)) {
      swal("Oops!", `Извините, услуга осуществляется лицам достигшие 18 лет.`, "info");
    }
    if (organization.type === false && binVal.length !== 12) {
      setOrganization({value: 'Пожалуйста введите правильный БИН', type: false})
    }
    if (organization.type === true && organization.value) {
      console.log(values)
      setLoading(true)
      setFormData(values)
      axios.get(`${process.env.BASE_URL}/identification`, {
        params: {
          fio: values.fio,
          phone: replaceDate(values.phone),
          email: values.email,
          password: values.password,
          type: values.type,
          iin: binVal,
          source: 'nashcompany.kz'
        }
      }).then(res => {
        setLoading(false)

        if (res.data.success) {
          setModal(true)

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
      phone: replaceDate(formData.phone),
      email: formData.email,
      password: formData.password,
      type: formData.type,
      code: codeVal,
      iin: binVal,
      companyName: organization.value,
      source: cookie.get('utm_source') + '_1' || 'nashcompany.kz'
    }
    if (cookie.get('utm_source') !== undefined) {
      object.utm_source = cookie.get('utm_source')
      object.click_id = cookie.get('click_id')
      // object.webID = cookie.get('web_id')
    }
    axios
      .get(`${process.env.BASE_URL}/stepOne`, {params: object})
      .then(res => {
        setLoading(false)

        if (res.data.success) {
          cookie.set('token', res.data.token)
          cookie.set('lead_id', res.data.id)
          cookie.set('stepjur', 2)
          Router.push('/jurservice?step=2')
        }
        if (!res.data.success) {
          setCodeError(res.data.message)
          addToast(finalErr, {
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
      [name]: e.target.value
    })
  }

  return (
    <div>
      <div className='form_register'>
        <Formik
          initialValues={{
          email: '',
          position: '1',
          phone: '',
          fio: '',
          password: '',
          type: 'Юр лицо',
          iin: ''
        }}
          onSubmit={(values) => {
          getIdentification(values)
        }}>
          {({errors, touched}) => (
            <Form>
              <Field
                name='iin'
                className='form-control'
                placeholder='БИН'
                type='tel'
                component={IinMask}
                onChange={e => binChange(e)}
                value={binVal}/>
              <Field
                type='text'
                disabled
                className={(organization.type === false && organization.value) && 'disabled_error text-danger'}
                value={organization.value}
                name='companyName'
                placeholder='Название Организации'/> {/* <input type='text' className={(organization.type === false && organization.value) && 'disabled_error'} value={organization.value} disabled name='organization' placeholder='Название Организации' /> */}
              <Field
                as='select'
                type='text'
                name='position'
                validate={required}
                placeholder='Занимаемая должность'
                autocomplete='off'>{positions.map(p => (
                  <option value={p.value}>{p.name}</option>
                ))}</Field>
              {(errors.position && touched.position)
                ? <p className='text-danger'>{errors.position}</p>
                : <p className=''></p>}

              <Field
                type='text'
                name='fio'
                validate={acceptCirrilic}
                placeholder='ФИО'
                className='capitalize'
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
                type='text'
                name='email'
                validate={emailValid}
                placeholder='Email'
                autocomplete='off'/> {(errors.email && touched.email)
                ? <p className='text-danger'>{errors.email}</p>
                : <p className=''></p>}

              <Field
                type='password'
                name='password'
                validate={passwordValid}
                placeholder='Придумайте пароль'
                autocomplete='off'/> {(errors.password && touched.password)
                ? <p className='text-danger'>{errors.password}</p>
                : <p className=''></p>}
              {/* <Field
                type='password'
                name='password'
                validate={passwordValid}
                placeholder='Придумайте пароль'
                autocomplete='off'/>
                 {(errors.password && touched.password) ? <p className='text-danger'>{errors.password}</p> :  <p className='text-danger'></p>} */}
                        <span className='form_extrabtns'>Уже есть аккаунт? <a onClick={()=> {Router.push('/login')}}>Воидите</a></span>
              <div className='firststep_banner'>
              
                <div className='firststep_banner--button'>
                  <input
                    className='singlebtn'
                    type='submit'
                    className='button'
                    onClick={() => handleFocus()}
                    value='Хочу скидки'/>
                 
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
          getIdentification={getIdentification}/>
      </div>

    </div>
  )
}

const RegisterJur = ({setLoading}) => {
  return (
    <ToastProvider>
      <FirstStep setLoading={setLoading}/>
    </ToastProvider>
  )
}

export default RegisterJur