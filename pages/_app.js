import '../styles/globals.scss'
import 'font-awesome/css/font-awesome.css';
import App from 'next/app'
import Nav from '../components/shared/Nav';
import Footer from '../components/shared/Footer';
import Router from 'next/router'
import Utm from '../components/Utm/Utm';
import FixedBtn from '../components/shared/FixedBtn';
import NProgress from "nprogress"

Router.onRouteChangeStart = url => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()
class MyApp extends App {
  componentDidMount() {

    Router.events.on('routeChangeComplete', () => {
      
      document.body.style.overflowY= 'unset';
      document.documentElement.style.height= 'inherit';
      if(Router.pathname !== '/dlya-fizicheskix-lic' || Router.pathname !== '/jurservice') {

        window.scrollTo(0,0)
      }
    })
  }
  render() {
    const {Component, pageProps, store} = this.props;
    return(
      <>
        {/* <Nav /> */}
        <Component {...pageProps}/>
        <Footer />
        <Utm />
        <FixedBtn />
      </>
    )
  }
}

export default MyApp
