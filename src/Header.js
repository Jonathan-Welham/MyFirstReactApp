import React from 'react'

const Header = (props) =>{
    console.log(props);
    return (
        <div>
            <h1>
                {props.text + props.lastName}
            </h1>
            <img src={props.imgUrl}/>
        </div>

    );
}

export default Header;