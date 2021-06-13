import '../styles/globals.scss'
import 'font-awesome/css/font-awesome.css';
import App from 'next/app'
import Footer from '../components/shared/Footer';
import Router from 'next/router'
import Utm from '../components/Utm/Utm';
import FixedBtn from '../components/shared/FixedBtn';
import { Provider } from 'react-redux'
import store from '../store/store'
import { createWrapper } from 'next-redux-wrapper';
import {connect} from 'react-redux'
import cookie from 'js-cookie'
import {fetchCurrentUser} from '../store/actions/userAction'
class MyApp extends App {
  componentDidMount() {
    Router.events.on('routeChangeComplete', () => {
      
      document.body.style.overflowY= 'unset';
      document.documentElement.style.height= 'inherit';
      if(Router.pathname !== '/dlya-fizicheskix-lic' || Router.pathname !== '/jurservice') {

        window.scrollTo(0,0)
      }
    })

    if(cookie.get('token') && !this.props.loggedIn) {
      this.props.fetchCurrentUser()
    }

  }
  render() {
    const {Component, pageProps} = this.props;
    return(
      <Provider store={store}>
        {/* <Nav /> */}
        <Component {...pageProps}/>
        <Footer />
        <Utm />
        <FixedBtn />
      </Provider>
    )
  }
}




const makeStore=  () => store;
const wrapper = createWrapper(makeStore)
const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser())
  }
}



MyApp = connect(mapStateToProps,mapDispatchToProps)(MyApp)

export default wrapper.withRedux(MyApp);

