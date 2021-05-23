import React from 'react';
import Card from '../card/card'



const CardList = ({cardArray, increment, track})=>{
    return(
        <div style={{'display': 'flex', 'flexDirection' :'row', 'justifyContent' : 'center', 'flexWrap': 'wrap'}}>
            {
                cardArray.map(card=> <Card name={card.name} id={card.id} key={card.id} increment={increment} track={track}  />)
            }
        </div>
    );
}

export default CardList