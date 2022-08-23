import React from 'react'
import { client } from '../lib/client'
import { Product, HeroBanner, Services, Contact, Portfolio } from '../components'

const Home = ({ products, bannerData, servicesData, cultivoData }) => {
  //console.log('portfolio', cultivoData)
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className='most-selled-section'>
        <h2>PRODUCTOS MÁS VENDIDOS</h2>
      </div>
      <div className='products-container'>
        {products?.map((product)=> <Product key={product._id} product={product}/>)}
      </div>
      <Services services={servicesData}/>
      <Portfolio data={cultivoData} />
      {/* <Contact /> */}
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  const servicesQuery = '*[_type == "service"]'
  const servicesData = await client.fetch(servicesQuery)

  const cultivoQuery = '*[_type == "cultivo"]'
  const cultivoData = await client.fetch(cultivoQuery)

  return {
    props: { products, bannerData, servicesData, cultivoData}
  }

}

export default Home