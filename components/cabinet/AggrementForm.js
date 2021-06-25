import { amountSpace, handleFocus } from "../../defaults/extraFunction"

const AggrementForm = ({
  changeOplata,
  predoplata,
  paymentDate,
  srok,
  changeSrokBtn,
  changeSrok, discount, checkDoc, docs,summa
}) => {
  const stepThird = (e) => {

  }
  return (
    <div className='form_register thirdstep'>
      <form onSubmit={e => stepThird(e)}>
        <div className='radio_groups'>
          <div
            className='postoplata'
            data-name='postoplata'
            className='check-group'
            onClick={e => changeOplata(e)}>
            <input type='checkbox' checked={predoplata === false}/>
            <label className='radiolabel'>Постоплата</label>
          </div>

          <div
            className='predoplata'
            data-name='predoplata'
            className='check-group'
            onClick={e => changeOplata(e)}>
            <input type='checkbox' checked={predoplata === true}/>

            <label className='radiolabel'>Предоплата</label>
            {!predoplata && <div className="range">
              <p className='srok_month'>Срок оплаты (месяц)</p>
              <input
                className="range__input"
                type="range"
                value={srok}
                onChange={e => changeSrok(e)}
                min="1"
                max="3"
                step="1"
                list="number"/>
              <datalist className='range__list' id="number">
                <option
                  onClick={() => changeSrokBtn('1')}
                  className={`range__opt opt0 ${srok === '1' && 'active'}`}>1</option>
                <option
                  onClick={() => changeSrokBtn('2')}
                  className={`range__opt ${srok === '2' && 'active'}`}>2</option>
                <option
                  onClick={() => changeSrokBtn('3')}
                  className={`range__opt ${srok === '3' && 'active'}`}>3</option>
                {/* <option
              onClick={() => changeSrokBtn('4')}
              className={`range__opt ${srok === '4' && 'active'}`}>4</option>
            <option
              onClick={() => changeSrokBtn('5')}
              className={`range__opt ${srok === '5' && 'active'}`}>5</option>
            <option
              onClick={() => changeSrokBtn('6')}
              className={`range__opt ${srok === '6' && 'active'}`}>6</option> */}
              </datalist>
            </div>
}
            {!predoplata && <div className='payment_date'>
              <strong>День оплаты до {paymentDate}
              </strong>
            </div>}

            <div className='payment_amount'>
              <p>Сумма оплаты:</p>
              <div>
                <strong>{amountSpace(`${discount}`)}тг</strong>
                <span class="price--line-through">{amountSpace(`${summa}`)}тг</span>
              </div>
              <div className='discount'>
                {/* <img src='/img/discount.png'/> */}
                <p>-50%
                  <span>СКИДКА</span>
                </p>
              </div>
            </div>
            <div className='check_groups'>
              <div data-name='predoplata' className='check-group'>
                <input type='checkbox' checked={docs.doc1}/>
                <label onClick={(e) => checkDoc(e)} data-name='doc1' className='checklabel'></label>

                <a href='/dogovorobrabotka' target='__blank'>Запрос на обработку персональных данных</a>
              </div>
              <div data-name='postoplata' className='check-group'>
                <input type='checkbox' checked={docs.doc2}/>
                <label onClick={(e) => checkDoc(e)} className='checklabel' data-name='doc2'></label>

                <a href='/ПУБЛИЧНАЯ ОФЕРТА.pdf' target='__blank'>Договор публичной оферты</a>
              </div>

              <div data-name='predoplata' className='check-group'>
                <input type='checkbox' checked={docs.doc4}/>
                <label onClick={(e) => checkDoc(e)} className='checklabel' data-name='doc4'></label>

                <a href={`/dogovor?paymentDate=${paymentDate}&period=${srok}`} target='__blank'>Договор на заказ наряд</a>
              </div>

              {Object
                .keys(docs)
                .some(k => !docs[k])
                ? <input
                    type='submit'
                    disabled={true}
                    onClick={() => handleFocus()}
                    className='button button_lightest'
                    value='Получить результат'/>
                : <input type='submit' className='button' value='Получить результат'/>
}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AggrementForm