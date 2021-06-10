import Nav from "../components/shared/Nav";
import Head from 'next/head'
import { useEffect } from "react";
import axios from "axios";
const NotFound = () => {
  useEffect(() => {
    axios.post('https://crediter.kz/api/getData?id=67')
      .then(res=> {
        console.log(res)
      })
  },[])
  return (
    <div className=''>
      <Head>
        <title>Nash | 404</title>
      </Head>
      <Nav/>
      <section className="page_404">

        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>

                </div>

                <div className="contant_box_404">
                  <h3 className="h2">
                    Похоже, вы заблудились
                  </h3>

                  <p>страница, которую вы ищете, недоступна!</p>

                  <a href="/" className="link_404">Перейти на главную страницу</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound