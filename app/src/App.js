import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { loadInitStore } from './store/action';
import { RandomBetween } from './utils/utils';

//TODO code reuse between divs
//TODO fetch from json file
//TODO show pic of meal

function App() {
  //using a global app state from store

  const data = useSelector((state) => state.items);

  const dispatch = useDispatch();

  console.log(1);
  useEffect(() => dispatch(loadInitStore()), []);
  console.log(3);

  //using a local state for the component
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  const moveIndex1 = () => {
     let newIndex = RandomBetween(0, data.length-1);
     setIndex1(newIndex);
  }
  const moveIndex2 = () => {
       let newIndex = RandomBetween(0, data.length-1);
       setIndex2(newIndex);
  }
  const moveIndex3 = () => {
       let newIndex = RandomBetween(0, data.length-1);
       setIndex3(newIndex);
  }

  console.log(data);

  if(data === undefined){
   return <div><h1>loading...</h1> </div>
  }else{
  return (
    <div className="App">
      <div className="section section1" onClick={moveIndex1}>
        <h1>School Snack</h1>
        <p>{data[index1].name}</p>
      </div>
      <div className="section section2" onClick={moveIndex2}>
              <h1>School Lunch</h1>
              <p>{data[index2].name}</p>
            </div>
            <div className="section section3" onClick={moveIndex3}>
                    <h1>After School Snack</h1>
                    <p>{data[index3].name}</p>
                  </div>
    </div>
  );
  }
}

export default App;
