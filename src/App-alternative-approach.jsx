import { useState } from 'react';
import './index.css';
import people from './data';
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa';

function AppAlternative() {

  const [index, setIndex] = useState(0);
  const {id,image, name, job, text} = people[index];
  

  console.log(1 % 4);
  console.log(2 % 4);
  console.log(3 % 4);
  console.log(5 % 4);         // using modulus approach
  console.log((-1 + 4) % 4); // this is the logic in decreasing when < 0

  function showPerson(state){
    if(state === 'moveRight'){ //when click the right button

          setIndex((currentIndex)=>{
              const newIndex = (currentIndex + 1) % people.length;
             
              console.log('Next: ' + currentIndex +' '+newIndex);
              return newIndex;
          });
         
    }else{ //when click the left button
          setIndex((currentIndex)=>{
              const newIndex = (currentIndex - 1 + people.length) % people.length;
              console.log('Next: ' + currentIndex +' '+newIndex);
              
              return newIndex;
          });
    }  
  }



  const surpriseMe = () =>{

    let randomNumber = Math.floor(Math.random() * (people.length));
    // this this is 'INITIAL' random number.
     if (randomNumber === index) { // 'INITIAL' random number is same with index. it will run again the random number.
                                      // the result is set to 'randomNumber '.
      randomNumber = index + 1;
    }

    setIndex(randomNumber % people.length);
    
  }

  return (
    <main>
      <article className='review'>
        <div className="img-container">
          <img src={image} alt= {name} className='person-img'/>
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
       <h4 className='author'>{id+' '+name}</h4>
       <p className='job'>{job}</p>
       <p className='info'>{text}</p>

       <div className="btn-container">
       <button type='button' className='prev-btn' onClick={()=>showPerson('moveLeft')}><FaChevronLeft /></button>
       <button type='button' className='next-btn' onClick={()=>showPerson('moveRight')}><FaChevronRight /></button>
       </div>
       <button type='button' className='btn' onClick={surpriseMe}>Surprise Me</button>

      </article>
       
   </main>
  )
}

export default AppAlternative
