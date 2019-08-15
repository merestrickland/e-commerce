import React from 'react'

//withRouter is basically a function that takes a component and returns the changed component
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={ () => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            className='background-image'
        //React allows another CSS-like prop (style), that takes camelCase
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        >
        </div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);