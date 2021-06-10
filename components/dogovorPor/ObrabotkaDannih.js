const Obrabotka = ({name, iin, code, todayParse}) => {
  return (
    <div className='dogovor'>
      <div className='print' onClick={() => {
        window.print()
      }}>
        <i className='fa fa-print'></i>
      </div>
      <section className='dogovor__body'>
        <div className='content content_obrabotka'>
          <div className='content__rus'>
            Согласие<br></br>
            на сбор и обработку персональных данных<br></br>
            г. Алматы {todayParse}
            г.<br></br>
            г. (время заполнения)
            <br></br>
            Настоящим, Я {name}<br></br>
            (указать ФИО, число месяц год рождения),<br></br>
            ИИН {iin}, предоставляю<br></br>
            свое безусловное согласие ТОО<br></br>
            «NASH Company»<br></br>
            (далее – ТОО) на сбор и обработку моих<br></br>
            персональных данных, как на бумажных<br></br>
            носителях, так и в электронном формате, в<br></br>
            базах данных ТОО. Персональные данные – любые относящиеся ко<br></br>
            мне сведения, зафиксированные на
            <br></br>
            электронном, бумажном и (или) ином<br></br>
            материальном носителе.
            <br></br>
            {name + " "}
            ФИО
            <br></br>
            {code + " "}
            электронная подпись

          </div>
          <div className='content__kaz'>
            Дербес<br></br>
            деректерді жинауға жəне өңдеуге келісім
            <br></br>
            Алматы қ. {todayParse}
            ж.<br></br>
            Осымен, Мен {name}<br></br>
            (аты-жөні, туған күні, айы, жылы көрсетіледі),<br></br>
            ЖСН {iin}, «NASH Company»<br></br>
            ЖШС-не (əрі қарай –<br></br>
            ШҚҰ) менің дербес деректерімді, қағаз<br></br>
            тасымалдаушыда, сондай-ақ электрондық<br></br>
            тасымалдаушыда, ШҚҰ деректер базасындағы,<br></br>
            жинауға жəне өңдеуге өзімнің даусыз<br></br>
            келісімімді беремін.<br></br>
            Дербес деректер – электрондық, қағаз жəне<br></br>
            (немесе) өзге материалдық тасымалдаушыға
            <br></br>
            түсірілген маған қатысты кез келген<br></br>
            мəліметтер<br></br>
            {name + " "}
            Аты-жөні
            <br></br>
            {code + " "}
            электрондық қолтаңба

          </div>
        </div>
      </section>
    </div>
  )
}

export default Obrabotka;