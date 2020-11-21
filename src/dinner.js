import React from 'react';

function Dinner(props){
return (
        <div>
        <h1> we are serving {props.dishName}</h1>
        <h1> we are also servingg {props.scndDish}</h1>
                </div>
);
}
export default Dinner;