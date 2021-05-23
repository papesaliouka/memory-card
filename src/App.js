import React, {useState, useEffect} from 'react';
import Header from './header/header';
import CardList from './card-list/cardList';
import Score from './score/score'
import BestScore from './score/best.score'
import 'tachyons';
import shuffleArray from './utils/utils'


const App = ()=>{
   const [cardArray, setCardArray] = useState([])
   const [score, setScore] = useState(0)
   const [bestScore, setBestScrore] = useState(0);
   const url = 'https://jsonplaceholder.typicode.com/users'
   useEffect(()=>{
    fetch(url)
    .then(response=> response.json())
    .then(data => setCardArray(shuffleArray(data)))
   },[score]);

    const increment = (e)=> e.target.clicked ? (setScore(0), e.target.clicked='false' ) : ( setScore(prevScore=> prevScore + 1) , e.target.clicked = 'true');
    const track = ()=> setBestScrore(prevBestScore => score=== bestScore ? prevBestScore +1 : prevBestScore )
    
    return(
        <div>
            <Header/>
            <Score score={score}/>
            <BestScore bestScore={bestScore}/>
            <CardList cardArray={cardArray} increment={increment} track={track} />
        </div>
    );
}


export default App