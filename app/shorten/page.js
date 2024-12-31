"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {

  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        alert(result.message)
        console.log(result)
      })
      .catch((error) => console.error(error));
  }


  return (
    <div className='relative z-10 h-[90.4vh] mx-auto max-w-lg  p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-2xl pt-5'>Generate your short URLs</h1>
      <div className='flex flex-col gap-5'>
        <input value={url} className='text-black px-4 py-2 focus:outline-purple-600 rounded-md' type='text' placeholder='Enter your URL' onChange={e => { seturl(e.target.value) }} />
        <input value={shorturl} className='text-black px-4 py-2 focus:outline-purple-600 rounded-md' type='text' placeholder='Enter your preferred short URL text' onChange={e => { setshorturl(e.target.value) }} />
        {/* <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-2 text-white font-bold'>Generate</button> */}
        <button onClick={generate} className='relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
          <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
          <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-5 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
            Generate
          </span>
        </button>
      </div>

      {generated && <>
        <span className='font-bold text-lg'>Your Link</span>  <code><Link target="_blank" href={generated}>{generated}</Link>
        </code>
      </>}
    </div>
  )
}

export default Shorten
