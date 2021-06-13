import Nav from "../components/shared/Nav"
import Head from 'next/head'
import Router from 'next/router'
import cookie from 'js-cookie'
import React, {useEffect, useState} from "react"
import Loader from "../components/loader/Loader"
// import LoginForm from "../components/cabinet/LoginForm"
import FirstStep from '../components/getservice/FirstStep'
import {loginUser, fetchCurrentUser} from '../store/actions/userAction'
import {connect} from 'react-redux'
import {handleFocus} from "../defaults/extraFunction"
import RegisterFiz from "../components/cabinet/RegisterFiz"
import RegisterJur from "../components/cabinet/RegisterJur"

const Register = ({authenticatingUser, failedLogin, loggedIn, loginUser}) => {
  const [date,
    setDate] = useState({iin: '', password: ''})
  const [error,
    setError] = useState('')
  const [type,setType] = useState('jur')
  const [loading,setLoading] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    loginUser(date, setError)
  }
  const onChange = e => {
    const name = e.target.name;
    setDate({
      ...date,
      [name]: e.target.value
    })
  }

  useEffect(() => {
    console.log('login' +loggedIn)
    if (cookie.get('token') && loggedIn) {
      Router.push('/cabinet')
    }
  }, [loggedIn])

  useEffect(() => {
    if (cookie.get('token') && loggedIn) {
      Router.push('/')
    }
  }, [])

  useEffect(() => {
    if (error) {
      handleFocus()
    }
  }, [error])
  return (
    <div className='getservice'>
      {authenticatingUser && <Loader/>}
      <Head>
        <title>
          Логин
        </title>
      </Head>
      <div className='header'>
        <Nav/>
        <div className='bg'></div>
      </div>

      <div className='container'>

        <div className='form_headings'></div>
        <div className='form_service '>
        <div className='register_discount'>
                <h2 className='formheader'>Зарегистрируйся и получи скидку</h2>
                <img alt='image' className='' src='/img/form/firststep.svg'/>
              </div>
        <div className='register_options'>
          <a className={type === 'jur' && 'active'} onClick={() => setType('jur')}>Юр. лицо</a>
          <a className={type==='fiz' && 'active'} onClick={() => setType('fiz')}>Физ. лицо</a>
          </div>

          {type === 'jur' && <RegisterJur setLoading={setLoading}/>}
          {type === 'fiz' && <RegisterFiz setLoading={setLoading}/>}

        </div>
      </div>

    </div>
  )
}

const mapStateToProps = ({
  userReducer: {
    authenticatingUser,
    failedLogin,
    loggedIn
  }
}) => ({authenticatingUser, failedLogin, loggedIn});

export default connect(mapStateToProps, {loginUser, fetchCurrentUser})(Register);