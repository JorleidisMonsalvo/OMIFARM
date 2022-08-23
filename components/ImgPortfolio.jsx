import React from 'react'

const ImgPortfolio = ({title, smallImage}) => {
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
       
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>
          <img
            src={smallImage}
            className='img-responsive'
            alt={title}
          />{' '}
        
      </div>
    </div>
  )
}

export default ImgPortfolio