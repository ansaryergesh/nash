import {useRouter} from 'next/router'
import { useEffect } from 'react'
import cookie from 'js-cookie'
const Utm = () => {
  const router = useRouter()
  const {v} = router.query
  const {utm_source} = router.query
  const {utm_medium} = router.query
  const {utm_campaign} = router.query
  const {transaction_id} = router.query
  // const {web_id} = router.query
  const {click_id} = router.query
  
  const checkUtm = () => {
    if(utm_source === 'guruleads' ||
      utm_source === 'doaff' || utm_medium==='leadgid'
    ){
      return true
    }else {
      return false
    }
  }
  const checkLength = () => {
    if(utm_medium === 'leadgid') {
      return utm_medium
    }else {
      return utm_source
    }
  }
  const checkerUtm = checkUtm()
  const checkSource = checkLength()
  const clickid = v || click_id || transaction_id

  useEffect(() => {
    if(checkerUtm) {
      cookie.set('click_id', clickid, {expires: 30})
      cookie.set('utm_source', checkSource, {expires: 30})
      cookie.set('utm_medium', utm_medium,  {expires: 30})
      cookie.set('utm_campaign', utm_campaign || utm_medium, {expires: 30})
      // cookie.set('web_id', web_id,  {expires: 30})
    }
  },[utm_source])

  return(
    <div></div>
  )

}

export default Utm