import React from 'react'
import {Link} from 'react-router-dom'

const Card = () => {
    return (
        <Link to={`/user/1`} className='job__card'>
            <div className='job__card__img'>
                <img src="https://res.cloudinary.com/tuko/image/upload/v1678546698/portfolio/FotoCV_mwz4gz.jpg" alt="" />
            </div>
            <div className='job__card__text'>
                <b>Julian Re</b>
                <p>San Nicolas de los Arroyos</p>
                <p className='description'><b>Cel:</b> +54 3364631393</p>
            </div>
        </Link>
    )
}

export default Card