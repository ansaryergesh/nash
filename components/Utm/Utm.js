import {useRouter} from 'next/router'
import { useEffect } from 'react'
import cookie from 'js-cookie'
const Utm = () => {
  const router = useRouter()
  const {v} = router.query
  const {utm_source} = router.query
  const {utm_medium} = router.query
  const {utm_campaign} = router.query
  // const {web_id} = router.query
  const {click_id} = router.query
  
  const checkUtm = () => {
    if(utm_source === 'guruleads' ||
      utm_source === 'doaff'
    ){
      return true
    }else {
      return false
    }
  }
  const checkerUtm = checkUtm()
  const clickid = v || click_id
  useEffect(() => {
    if(checkerUtm) {
      cookie.set('click_id', clickid, {expires: 30})
      cookie.set('utm_source', utm_source, {expires: 30})
      cookie.set('utm_medium', utm_medium,  {expires: 30})
      cookie.set('utm_campaign', utm_campaign, {expires: 30})
      // cookie.set('web_id', web_id,  {expires: 30})
    }
  },[utm_source])

  return(
    <div></div>
  )

}

export default Utm