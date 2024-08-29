import React, { useState } from 'react'
import './style.scss'
const App = () => {

  const [data,setData] = useState('');
  const [year,setYear] = useState(0);
  const [month,setMonth] = useState(0);
  const [message,setMessage] = useState('none');

  
  const calculate = () => {
    if(data === '') {
      alert('Please Enter Your Date of Birth');
      return ;
    }
    var s = data.split('-');
    var today = new Date()
    var y = (today.getFullYear() - s[0]);
    var m = (today.getMonth()+1 - s[1])
    console.log(y + 'years');
    console.log(today.getMonth()+ 'today month');
    console.log(m + 'months');
    if(y<0) {
      setMessage('Future Kid');
    }
    else if(y===0) {
      if(m<0) {
        setMessage('Future Kid');
      }
      else if(m===0) {
        setMessage('New Born Baby')
      }
      else {
        setMessage('none')
      }
    }
    else {
      if(m<0) {
        y=y-1;
        m=12+m;
      }
      setMessage('none')
    }

    setYear(y)
    setMonth(m)
  }

  return (
    <center>
      <div className='container'>
        <h2><span>Know</span> Your <span>Age</span></h2>
        <input type='date' onChange={e => setData(e.target.value)}></input>
        <button onClick={e=>calculate()}>Calculate</button>
        {message==='none' && 
          <div>
            {year!==0 && <p>{year} Years</p>}
            {month!==0 && <p>{month} Months</p>}
          </div>}
        {message!=='none' && <p>{message}</p>}
      </div>
      
    </center>
    
  )
}

export default App