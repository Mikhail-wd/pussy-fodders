import {useState} from 'react';
import Pussy from './components/pussy';
import './App.css';
import React from 'react';

function App() {

  const [pussysList, setPussysList] = useState([
    {id:0, title: 'фуа-гра', stuck:10, mouseForKitty:1, weight:'0,5', inStorage: true, selected: false, description:'Печень утки разварная с артишоками.', happyMaster:false},
    {id:1, title: 'рыбой', stuck:40, mouseForKitty:2, weight:2, inStorage: true, selected: true, description:'Головы щучьи с чесноком да свежайшая сёмгушка.', happyMaster:false},
    {id:2, title: 'курой', stuck:100, mouseForKitty:5, weight:5, inStorage: false, selected: false, description:'Филе из цыплят с трюфелями в бульоне.', happyMaster:'Заказчик доволен'}
  ]);


  function selectFodder(pussyId,pussData){
    
    pussysList[pussyId].selected=pussData;
    setPussysList([...pussysList])
  }
  

  return (
    <div className='mainFrame'>
      <div className='backGround'>
        <div className="App">
          <p className='title'>Ты сегодня покормил кота?</p>
          <div className='pussysFodderList'>

            {pussysList.map(index =>(<Pussy key={index.id} data={index} select={selectFodder}/>))}

          </div>         
        </div>
      </div>
    </div>
  );
}

export default App;
