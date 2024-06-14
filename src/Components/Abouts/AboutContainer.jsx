import React from 'react';
import frontImg from '../../assets/item-1.jpg';
import backendImg from '../../assets/item-2.jpg';
import fullstackImg from '../../assets/item-3.jpg';
const aboutlist = [
    {
        img:frontImg,
        title:"front-end web development",
        description: "crafting visually appealing and responsive interface using html , css, tailwindcss, javascript freamwork like react js and vue js",
    },
    {
        img:backendImg,
        title:"back-end web development",
        description: "building robust and scalable server-side application with node js , express and database like MongoDB, MySql and SQL Server ",
    },
    {
        img:fullstackImg,
        title:"full-stack web development",
        description: "Seamlessly integrating front-end and back-end technologies to deliver comprehensive web solutions.",
    }
]


const AboutContainer = () => {
  return (
    <div className='mt-2 bg-gray-100'>
        <div className='mx-10 pt-14 flex flex-col items-center gap-4'> 
            <p className='border rounded-full bg-white py-1 px-2 capitalize font-serif'>about web developments</p>    
            <h3 className=' text-gray-700 font-semibold text-2xl'>I create a user-friendly, and beautiful website and applications.</h3> 
            {/* about list... */}
            <div className='flex gap-6   '>                
                { aboutlist.map((item ,i) =>(
                    <div key={i} className='flex gap-2 justify-between w-full'>
                    <div className='border border-white-800 rounded-md  p-6 flex flex-col items-start bg-white'>
                        {item.img && <img src={item.img} alt={item.title} className='w-full h-auto rounded-md mb-2' />}
                        <div className='mt-5'>
                            <h2 className='font-semibold  text-xl mb-1 capitalize font-serif'>{item.title}</h2>
                            <p className='text-gray-600  capitalize font-serif'>{item.description}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AboutContainer