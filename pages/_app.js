import '../styles/globals.scss'
import 'font-awesome/css/font-awesome.css';
import App from 'next/app'
import Nav from '../components/shared/Nav';
import Footer from '../components/shared/Footer';
import Router from 'next/router'
import Utm from '../components/Utm/Utm';

class MyApp extends App {
  componentDidMount() {
    Router.events.on('routeChangeComplete', () => {
      window.scrollTo(0,0)
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
      </>
    )
  }
}

export default MyApp
