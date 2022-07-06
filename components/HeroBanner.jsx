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
                <Link href='/product/ID'>
                    <button type='button'>{heroBanner.buttonText}</button>
                </Link>
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