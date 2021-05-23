import React from 'react';

const Card = ({name, id, increment, track})=>{
    return(
        <div className='bg-light-green tc br2 ma3 dib grow' clicked='false' onClick={(e)=> {increment(e);track()}}  >
            <img src={`https://robohash.org/${id}/620050a4db5104bae758cd75171d64ca?set=set4`} alt="cats" clicked='false' />
            <p clicked='false' >{name}</p>
        </div>
    );
}
export default Card;