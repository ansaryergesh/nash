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
  const {clickid} = router.query
  const  {token} = router.query
  const {click_code} = router.query
  // const {web_id} = router.query
  const {click_id} = router.query
  const {leadID} = router.query
  const checkUtm = () => {
    
    if(utm_source === 'guruleads' ||
      utm_source === 'doaff' || utm_medium==='leadgid' || utm_medium === 'own_sms_traffic' ||
      utm_source === 'cpamarket'
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
  const finalclick = v || click_id || clickid || transaction_id || click_code || ''

  useEffect(() => {
    console.log(utm_source)
    if(checkerUtm) {
      cookie.set('click_id', finalclick, {expires: 60})
      cookie.set('utm_source', checkSource, {expires: 60})
      cookie.set('utm_medium', utm_medium,  {expires: 60})
      cookie.set('utm_campaign', utm_campaign || utm_medium, {expires: 60})
      // cookie.set('web_id', web_id,  {expires: 30})
    }
    
  },[utm_source])

  useEffect(() => {
    // if(token && !leadID) {
    //   cookie.set('token', token, {expires: 3600})
    //   setTimeout(() => {
    //     router.push('/cabinet/requests')
    //   })
    // }
  }, [token])
  return(
    <div></div>
  )

}

export default Utm