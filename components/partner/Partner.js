import {useRouter} from 'next/router'
const Partner = () => {
  const router = useRouter()
  const pathname = router.pathname;

  const isTruePath = () => {
    if(pathname === '/' || pathname==='/about' || pathname==='/uslugi') {
      return true
    }else {
      return false
    }
  }
  var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return(
    <div className={isTruePath() ? `partners_block container` : 'd-none'}>
      <h2>Наши клиенты</h2>
    <div className='partners'>
      {x.map((x,index) => (
        <div className='partner'>
          <img src={`/img/clients/${index+1}.png`} />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Partner;