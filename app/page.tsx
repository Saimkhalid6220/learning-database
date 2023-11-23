'use client';
import { HtmlContext } from 'next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints';
import { FormEvent, SyntheticEvent, useState } from 'react';
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
    <div className='bg-red-500 flex justify-center w-auto h-96 items-center flex-col '>
      <h1 className='text-center my-4  font-extrabold uppercase ms-1'>prisma database learning </h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <label className=''>
          Name
          <input className='mx-5 my-2'
            type="text"
            value={input1}
            onChange={handleChangeInput1} required
          />
        </label>
        <br />
        <label className=''>
          Email
          <input className='mx-5 my-2'
            type="text"
            value={input2}
            onChange={handleChangeInput2} required
          />
        </label>
        <br />
        <button type="submit" className='bg-blue-600 text-white bold font-bold h-10 w-20 '>Submit</button>
      </form>
    </div>
  );
}

