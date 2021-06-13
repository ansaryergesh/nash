import axios from "axios";
import Router from "next/router";
import {useEffect, useState} from "react"
import InputMask from 'react-input-mask'
import swal from "sweetalert";
import {handleFocus} from "../../defaults/extraFunction";
import Loader from "../loader/Loader";
import PhoneMask from "../Masks/PhoneMask";

const LoginForm = ({ onSubmit, onChange, date, error}) => {

  return (
    <div className='form_register'>
      <form onSubmit={(e) => onSubmit(e)}>
        <h2 className='formheader'>Войти в личный кабинет</h2>
        {error && <div className='alert-error text-danger'>{error}</div>}
        <InputMask
          type='tel'
          placeholder='Введите ИИН'
          name='iin'
          mask="999999999999"
          maskChar={null}
          value={date.iin}
          onChange={(e) => onChange(e)}/>
        <input value={date.password} onChange={e=> onChange(e)} name='password' type='password' placeholder='Введите пароль' name='password'/>
        <div className='form_extra'>
          <span className='form_extrabtns'>Нет аккаунта? <a onClick={()=> {Router.push('/register')}}>Зарегистрируйтесь</a></span>
          
        <a className='reset_password' href='/reset_password'>Забыли пароль?</a>
        </div>
        <div className='firststep_banner'>
          <div className='firststep_banner--button'>
            <input
              className='singlebtn'
              type='submit'
              className='button'
              onClick={() => handleFocus()}
              value='Войти'/>
          </div>
          <div className='firststep_banner--img'>
            <img alt='image' className='secondstep' src='/img/form/secondstep.png'/>
          </div>
        </div>
      </form>
    </div>
  )
}



export default LoginForm;