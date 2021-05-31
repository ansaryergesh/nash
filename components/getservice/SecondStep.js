import {useState} from "react"
import {fizservice} from "../../defaults/fizservice"
import cookie from 'js-cookie'
import axios from "axios"
import Router from "next/router"
import {Formik, Form, Field} from 'formik';
import {required} from "../../defaults/validations"
import Dropzone from "react-dropzone";

const SecondStep = () => {
  const [fileNames,
    setFileNames] = useState([]);
  const [formData,
    setFormData] = useState({
    id: cookie.get('lead_id'),
    token: cookie.get('token'),
    description: '',
    sphere: '1',
    amount: ''
  })
  const onChange = e => {
    const name = e.target.name
    setFormData({
      ...formData,
      [name]: e.target.value
    })
  }
  const handleDrop = acceptedFiles => setFileNames(acceptedFiles.map(file => file.name));

  const stepSecond = (values) => {


    axios
      .get(`${process.env.BASE_URL}/stepTwo`, {
      params: {
        id: values.id,
        token: values.token,
        description: values.description,
        sphere: values.sphere,
        amount: values.amount
      }
    })
      .then(res => {
        // console.log(res)
        if (res.data.success) {
          Router.push('/getservice?step=3')
          cookie.set('step', 3)
          cookie.set('amount', formData.amount)
        }
        if (!res.data.success) {}
      })
  }
  return (
    <div className='form_register'>
      <Formik
        initialValues={{
        id: cookie.get('lead_id'),
        token: cookie.get('token'),
        description: '',
        sphere: '1',
        amount: ''
      }}
        onSubmit=
        {(values) => {stepSecond(values)}}>
        {({errors, touched}) => (
          <Form>
            <Field as='select' validate={required} name='sphere' className='form_select'>
              {fizservice.map((fiz, index) => (
                <option data-img={`/img/uslugi/${index+1}.svg`} value={index + 1}>{fiz.name}</option>
              ))}
            </Field>
            {(errors.sphere && touched.sphere)
              ? <p className='text-danger'>{errors.sphere}</p>
              : <p className='text-danger'></p>}
            <Field
              as='textarea'
              name='description'
              validate={required}
              placeholder='Опишите вашу ситуацию'></Field>
            {(errors.description && touched.description)
              ? <p className='text-danger'>{errors.description}</p>
              : <p className='text-danger'></p>}
            <Field type='number' validate={required} name='amount' placeholder='Сумма иска'></Field>
            {(errors.amount && touched.amount)
              ? <p className='text-danger'>{errors.amount}</p>
              : <p className='text-danger'></p>}
            <div className='dropfiles'>
              <Dropzone onDrop={handleDrop}>
                {({getRootProps, getInputProps}) => (
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()}/>
                    <p>Перетащите файлы или щелкните, чтобы выбрать файлы</p>
                  </div>
                )}
              </Dropzone>
              <div>
                <strong>Файлы:</strong>
                <ul>
                  {fileNames.map(fileName => (
                    <li key={fileName}>{fileName}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='form_buttons'>
              <input className='transparentbtn button' type='button' value='Вернуться назад'/>
              <input className='button' type='submit' value='Далее'/>
            </div>
          </Form>
        )}

      </Formik>
      {/* <form onSubmit={(e) => stepSecond(e)}>
        <select onChange={e=> onChange(e)} value={formData.sphere} name='sphere' className='form_select'>
          {fizservice.map((fiz,index) => (
            <option value={index+1}>{fiz.name}</option>
          ))}
        </select>
        <textarea name='description' value={formData.description} onChange={e=>onChange(e)} placeholder='Опишите вашу ситуацию'></textarea>
        <input type='number' onChange={e=>onChange(e)} value={formData.amount} name='amount' placeholder='Сумма иска' />
        <input type='file' />
        <div className='form_buttons'>
          <input className='transparentbtn button' type='button' value='Вернуться назад'/>
          <input  className='button' type='submit' value='Далее' />
        </div>
      </form> */}
    </div>
  )
}

export default SecondStep