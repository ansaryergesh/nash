import {useRouter} from 'next/router'
import Link from 'next/link'
const FixedBtn = () => {
  const router  = useRouter()
  const pathname = router.pathname
  const checkPath = () => {
    if(pathname === '/uslugi' ||
    pathname === '/dlya-fizicheskix-lic' || 
    pathname === '/jurservice' || 
    pathname==='/404' || 
    pathname==='/feedback' || 
    pathname.includes('dogovor') || 
    pathname === '/login' ||
    pathname.includes('cabinet') || 
    pathname === '/register' || pathname=== '/aggrement' )  {
      return false
    }
    else {
      return true
    }
  }
  const checker = checkPath()
  
  return(
    <div>
      {checker === true && 
      // <Link href='/uslugi'><a className='fixed_btn'>Заказать услугу</a></Link> }
        <a href='/uslugi' className='fixed_btn'>Заказать услугу</a>}
    </div>
  )
}

export default FixedBtn