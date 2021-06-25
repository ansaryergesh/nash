import axios from 'axios';
import Router from 'next/router'
import swal from 'sweetalert';
import {ToastProvider, useToasts} from 'react-toast-notifications'
const Actives = ({actives,setLoading,setDeleted,deleted}) => {
  const {addToast} = useToasts()

  const onCancel = (event) => {
    const lead_id = event.currentTarget.dataset.id;
    swal('Отказаться', {
      text: 'Вы точно хотите отказаться от этой услуги?',
      buttons: {
        catch: {
          text: 'Да, отказаться',
          value: 'catch',
        },
        cancel: 'Нет'
      }
    }).then(val=> {
      switch(val) {
        case 'catch':
          setLoading(true)
          axios.get(`${process.env.BASE_URL}/stageDeal?ID=${lead_id}`)
            .then(res=> {
              setLoading(false)
              if(res.data.success) {
                setDeleted(!deleted)
                addToast('Вы успешно отказались', {
                  appearance: 'success',
                  autoDismiss: true
                })
              }else {
                addToast('Ваша заявка уже рассматривается юристами', {
                  appearance: 'error',
                  autoDismiss: true
                })
              }
            })
        case "cancel":
          break
      }
    })
  }
  return (
    <div>
      {actives.length === 0 ? <h2>У вас нету активных заявок</h2> :<div className='request_list'>
        {actives.map(a => (
          <div className={a.title === 'Отказ от заказа' ? 'd-none' : 'request_card'}>
            <p className='status '>{a.title}</p>
            <div className='card_info'>
              <span className='sphere'>Сфера: {a.sphere}</span>
              <span className='description'>Описание: {a.description}</span>
              <div data-id={a.dealID} key={a.dealID} onClick={e=>onCancel(e)} className='cancel_btn'><span>Отказаться</span></div>
            </div>
          </div>
        ))}
      </div>}
    </div>
  )
}

const NotFinished = ({notFinished}) => {
  const onContinue = (event) => {
    const id = event.target.dataset.id;
    const step = parseInt(event.target.dataset.step);
    const amount = event.target.dataset.amount
    const type = event.target.dataset.type;
    Router.push({
      pathname: '/cabinet/continue',
      query: {
        step: step + 1,
        id: id,
        type: type,
        amount: amount
      }
    })
  }
  return (
    <div className='request_list'>
      {notFinished.map(x => (
        <div data-id={x.id} data-step={x.step} className='request_card'>
          <p className='status status_info'>
            {x.lead}
          </p>
          <span className='capitalize'><b>ФИО:</b> {x.fio}</span>
        
          {x.sphere !== null ?
          <span><b>Сфера: </b>{x.sphere}</span> :   <span>Телефон номер: +{x.phone}</span>}

          {x.amount !== null && <span><b>Сумма иска:</b> {x.amount} тг</span>}
          <span
            data-id={x.id}
            data-step={x.step}
            data-type={x.client_type}
            data-amount={x.amount || null}
            className='detailedbtn'
            onClick={e => onContinue(e)}>Продолжить анкету ⮞</span>
        </div>
      ))}
    </div>
  )
}

const CabinetRequests = ({setActive, isActive, actives, notFinished, setLoading, deleted,setDeleted}) => {
  return (
    <div className='container cabinet__requests'>
      <p className='header'>Мои заявки</p>

      <div className='request_block'>
        <div className='request_option'>
          <span className={isActive && 'active'} onClick={() => setActive(true)}>Активные</span>
          <span className={!isActive && 'active'} onClick={() => setActive(false)}>Недозаполненные</span>
        </div>
        {isActive
          ? <ToastProvider><Actives actives={actives} setLoading={setLoading} deleted={deleted} setDeleted={setDeleted}/></ToastProvider>
          : <NotFinished notFinished={notFinished}/>}
        {/* <div className='request_list'>
          <div className='request_card'>
            <p className='status'>В обработке</p>
            <div className='card_info'>
              <span className='sphere'>Сфера:Семейные споры</span>
              <span className='description'>Описание:Lorem lorem lorem lorem lorem</span>
              <span className='price'>Стоимость услуги: 100000 тг <span>200000тг</span></span>
              <span className='detailedbtn'>Детали заявки ⮞</span>
            </div>
          </div>
          <div className='request_card'>
            <p className='status'>В обработке</p>
            <div className='card_info'>
              <span className='sphere'>Сфера:Семейные споры</span>
              <span className='description'>Описание:Lorem lorem lorem lorem lorem</span>
              <span className='price'>Стоимость услуги: 100000 тг <span>200000тг</span></span>
              <span className='detailedbtn'>Детали заявки ⮞</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
export default CabinetRequests