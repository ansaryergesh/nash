import Nav from "../../components/shared/Nav"
import CabinetNav from "../../components/cabinet/CabinetNav";
import withAuth from "../../hocs/withAuth";
import CabinetProfile from "../../components/cabinet/CabinetProfile";
import {connect } from 'react-redux'

const mapStateToProps = ({
  userReducer: {
    user,
    loggedIn
  }
}) => ({user, loggedIn});

const Cabinet = ({user,loggedIn}) => {
  return(
    <div className='cabinet'>
      <Nav />

      <CabinetProfile user={user}/>
      <CabinetNav />
    </div>
  )
}

export default withAuth(connect(mapStateToProps, null)(Cabinet));