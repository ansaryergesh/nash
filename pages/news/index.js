import Nav from "../../components/shared/Nav"
import Head from 'next/head'
const example = [
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2
]

const NewsBlock = () => {
  return (
    <div className='news--items'>
      <Head>
          <title>
              Пресс центр
          </title>
      </Head>
      {example.map(e => (
        <div className='news--item' href='/news/1'>
          <p className='date'>12.02.2021</p>
          <h2>Полезные советы от опытной домохозяйки. Как удалить ржавчину?</h2>
          <p className='content'>Автоматические стиральные машины значительно облегчили
            домашний труд. Впрочем, наличие самой техники – еще не гарантия безупречной
            чистоты.
          </p>
        </div>
      ))}
    </div>

  )
}
const News = () => {
  return (
    <div>
      <Nav/>
      <div className='container'>
        <h1 className='headertext'>Пресс центр</h1>
        <div className='news'>
          <NewsBlock/>
        </div>
      </div>
    </div>

  )

}

export default News