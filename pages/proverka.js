const Proverka = () => {
  const proverka = () => {
    window.scrollTo(0,0)
    console.log('hello')
  }
  return(
    <div className='proverka'>
      <button onClick={() => proverka()}>Proverka</button>
    </div>
  )
}

export default Proverka