import React from 'react';


// Just a simple footer ul, pass in points
// if we want to add more points simply 
// add a prop variable in the destructured function parameter
// and create another <li></li>
const FooterUl = ({ itemOne, itemTwo }) => {
    return ( 
        <div className='container'
        style={{
                color:'whitesmoke',
                fontSize:'7'
              }} >
            <ul>
            <li>
                { itemOne } 
            </li>
            <li>
                { itemTwo }
            </li>
        </ul>

        </div>
    )
}

export default FooterUl