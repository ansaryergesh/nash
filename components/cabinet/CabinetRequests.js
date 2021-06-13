import Router from 'next/router'
const Actives = ({actives}) => {
  return(
    <div className='request_list'>
      {actives.map(a=>(
        <div className='request_card'>
          <p className='status '>{a.title}</p>
          <div className='card_info'>
            <span className='sphere'>Сфера: {a.sphere}</span>
            <span className='description'>Описание: {a.description}</span>
          </div>
        </div>
      ))}
    </div>
  )
}


const NotFinished = ({notFinished}) => {
  const onContinue = (event) => {
    const id = event.target.dataset.id;
    const step = parseInt(event.target.dataset.step);
    const type = event.target.dataset.type;
    Router.push({pathname: '/cabinet/continue', query: {
      step: step+1,
      id: id,
      type: type
    }})
  }
  return (
    <div className='request_list'>
      {notFinished.map(x => (
        <div data-id={x.id} data-step={x.step} className='request_card'>
            <p className='status status_info'>
              {x.lead}
            </p>
            <span className='capitalize'>ФИО: {x.fio}</span>
            <span>Телефон номер: +{x.phone}</span>
            <span data-id={x.id} data-step={x.step} data-type={x.client_type} className='detailedbtn' onClick={e=> onContinue(e)}>Продолжить анкету ⮞</span>
        </div>
      ))}
    </div>
  )
}

const CabinetRequests = ({setActive,isActive, actives, notFinished}) => {
  return (
    <div className='container cabinet__requests'>
      <p className='header'>Мои заявки</p>

      <div className='request_block'>
        <div className='request_option'>
          <span className={isActive && 'active'} onClick={() => setActive(true)}>Активные</span>
          <span className={!isActive && 'active'} onClick={() => setActive(false)}>Недозаполненные</span>
        </div>
        {isActive ? <Actives actives={actives} /> : <NotFinished notFinished={notFinished}/>}
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