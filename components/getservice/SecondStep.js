import React, {useEffect, useState} from "react"
import {fizservice, jurservice} from "../../defaults/fizservice"
import cookie from 'js-cookie'
import axios from "axios"
import Router, {useRouter} from "next/router"
import Select from 'react-select';
import { listMfo } from "../../defaults/listMfo"
// import 'react-select/dist/react-select.css';
const SecondStep = ({setLoading}) => {
  const router = useRouter()
  const pathname = router.pathname
  // const {id} = router.query
  const {step} = router.query;
  
  
  useEffect(() => {


  }, [])

  return (
    <div className='form_register'>
      <form>
        <div className='mfo_list'>
          <span>Кому должен:</span>
            <Select
              isMulti
              name="mfo"
              options={listMfo}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Выберите один или несколько МФО"
            />
            <br/>
          <span>Сколько должен:</span>
          <input type="number" placeholder="Напишите сумму"></input>
          <div className='firststep_banner--button'>
                  <input
                    className='singlebtn'
                    type='submit'
                    className='button'
                    value='Отправить'/>
                </div>
        </div>
      </form>
    </div>
  )
}

export default SecondStep