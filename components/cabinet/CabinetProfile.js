const CabinetProfile = ({user, loggedIn}) => {
  return (
    <div className='container profile'>
      <p className='header'>Личные данные</p>
      <div className='profile__block'>
        <section>
          <span>Тип пользователя:</span>
          <p>{user.client_type}</p>
        </section>
        <section>
          <span>ФИО:</span>
          <p className='capitalize'>{user.fio === null ? 'Удаленный лид' : user.fio}</p>
        </section>

        <section>
          <span>{user.companyName === null
              ? 'ИИН'
              : 'БИН'}:</span>
          <p>{user.iin}</p>
        </section>
        {user.companyName !== null && <section>
          <span>Название компании:</span>
          <p>{user.companyName}</p>
        </section>}
        <section>
          <span>Email:</span>
          <p>test@test.kz</p>
        </section>
        <section>
          <span>Телефон номер:</span>
          <p>+{user.phone}</p>
        </section>
      </div>
      <p className='header'>Изменить пароль</p>
      <div className='profile__block'>
        <form>
          <div className='form_group'>
            <label>Новый пароль:</label>
            <input type='password' placeholder='Введите'></input>

          </div>
          <div className='form_group'>
            <label >Введите пароль павторно:</label>
            <input type='password' placeholder='Введите'></input>
          </div>
          <button className='btn' type='submit'>Изменить</button>
        </form>
      </div>
    </div>
  )
}

export default CabinetProfile