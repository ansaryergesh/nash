import Nav from "../components/shared/Nav"
import Head from 'next/head'
import Router from 'next/router'
import cookie from 'js-cookie'
import React, {useEffect, useState} from "react"
import Loader from "../components/loader/Loader"
import LoginForm from "../components/cabinet/LoginForm"
import {loginUser, fetchCurrentUser} from '../store/actions/userAction'
import {connect} from 'react-redux'
import {handleFocus} from "../defaults/extraFunction"

const Login = ({authenticatingUser, failedLogin, loggedIn, loginUser}) => {
  const [date,
    setDate] = useState({iin: '', password: ''})
  const [error,
    setError] = useState('')

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

          <LoginForm
            authenticatingUser={authenticatingUser}
            onChange={onChange}
            onSubmit={onSubmit}
            date={date}
            error={error}/>

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

export default connect(mapStateToProps, {loginUser, fetchCurrentUser})(Login);