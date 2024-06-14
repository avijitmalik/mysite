/* eslint-disable react/no-unescaped-entities */
import React from 'react'


const contactList = [
  {
    title:"schedule a call",
    desc:"let's discuss your projects ideas and how i can help you",
    buttonDesc:"schedule a call "
  },
  {
    title:"explore my works",
    desc:"view my portfolio to see the kind of work i do for you",
    buttonDesc:"view my work"
  }
]

function ContactContainer() {
  return (
    <div className='w-full px-10 pb-20 bg-gray-100'>
      <div className='pt-8 flex flex-col'>
        <h1 className='capitalize font-2xl'>interested in working together ?</h1>
        <div className='flex gap-2 mt-8 justify-between'>
          { 
            contactList.map((item, i) =>(
              <div key={i} className='flex flex-col border gap-2 rounded-md p-3 bg-white'>
                <h2 className='capitalize font-sans text-3xl'>{item.title}</h2>
                <p className='capitalize font-sans text-2xl'>{item.desc}</p>
                <div>
                  <button className='mt-auto capitalize text-start bg-black text-white py-2 px-4 rounded border border-black hover:bg-gray-900'>
                    {item.buttonDesc}
                  </button>
                </div>     
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default ContactContainer