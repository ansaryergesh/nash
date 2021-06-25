import axios from "axios"
import { useEffect, useState } from "react"
import CabinetNav from "../../components/cabinet/CabinetNav"
import CabinetRequests from "../../components/cabinet/CabinetRequests"
import Nav from "../../components/shared/Nav"
import cookie from 'js-cookie'
import { filterByParam } from "../../defaults/extraFunction"
import Loader from '../../components/loader/Loader'
import withAuth from "../../hocs/withAuth"
const Requests = () => {
  const [isActive,setActive] = useState(true)
  const [allRequest,setAll] = useState([])
  const [actives,setActives] = useState([])
  const [notFinished,setNotFinished] = useState([])
  const [deleted,setDeleted] = useState(false)
  const [loading,setLoading] = useState(false)
  const getUserDeal = () => {
    console.log('getuserdeal')
    axios.post(`${process.env.BASE_URL}/getUserDataDeal`, {token: cookie.get('token')})
      .then(res=> {
        setLoading(false)
        setAll(res.data)
        setActives(filterByParam(res.data, {type: 'deal'}))
        setNotFinished(filterByParam(res.data, {type: 'lead'}))
      })
      .catch(err=> {
        setLoading(false)
      })
  }

  useEffect(() => {
    setLoading(true)
    getUserDeal()
  },[deleted])

  useEffect(() => {
    getUserDeal()
  }, [])

  return(
    <div className='cabinet'>
      <Nav />
      {loading && <Loader />}
      <CabinetRequests isActive={isActive} setActive={setActive} actives={actives} notFinished={notFinished} setLoading={setLoading} setDeleted={setDeleted} deleted={deleted}/>
      <CabinetNav />
    </div>
  )
}

export default withAuth(Requests)