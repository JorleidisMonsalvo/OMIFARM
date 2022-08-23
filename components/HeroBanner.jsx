import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
const HeroBanner = ({ heroBanner}) => {
  return (
    <div className='hero-banner-container'>
        <div className='hero-banner-image'></div>
        <div>
            <div className='hero-banner-top'>
            <h3>{heroBanner.midText}</h3>
            <h1>{heroBanner.largeText}</h1>
            </div>
            <div>
                <div className='hero-banner-button'>
                <a href="https://api.whatsapp.com/send/?phone=573123809599&text=Bienvenido+a+OMI+FARM+COLOMBIA&type=phone_number&app_absent=0" target='_blank'  rel="noreferrer">
                    <button type='button'>{heroBanner.buttonText}</button>
                </a>
                </div>
                <div className='desc'>
                    <p>{heroBanner.desc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner