'use client';
import { useState } from 'react';
// import Post from '../app/components/Post/page'
// import CreatePost from './Create-post/page'
// export default  function Home(){

//   return(
//     <div>

// pages/index.js

export default function Home() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleChangeInput1 = (e:any) => {
    setInput1(e.target.value);
  };

  const handleChangeInput2 = (e:any) => {
    setInput2(e.target.value);
  };

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    try{
        fetch('/api/add-user', {method: 'POST' ,headers:{'Content-Type':'application/json'},
    body:JSON.stringify({input1,input2})
    })
    } catch(error){
        console.error(error)
    }
    // Log inputs to the console
    console.log('Input 1:', input1);
    console.log('Input 2:', input2);
    setInput1('')
    setInput2('')
  };

  return (
    <div>
      <h1 className='text-purple'>prisma database learning </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={input1}
            onChange={handleChangeInput1} required
          />
        </label>
        <br />
        <label>
          Email
          <input
            type="text"
            value={input2}
            onChange={handleChangeInput2} required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

