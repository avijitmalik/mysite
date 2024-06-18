import React from 'react'
import { WiDirectionRight } from 'react-icons/wi'
import { RiCommandLine } from 'react-icons/ri'
import { BiSolidShoppingBags } from 'react-icons/bi'
import { MdContactMail } from "react-icons/md";
import { FaBlog } from 'react-icons/fa';

const projectList = [
    {
        icon:<BiSolidShoppingBags/>,
        title:" e-commerce ",
        projectDesc:"developed full-featured e-commerce plateform with secure payments"
    },{
        icon:<MdContactMail/>,
        title:"portfolio website",
        projectDesc:"designed and build personal portfolio website to showcase my projects and skills"
    },{
        icon:<RiCommandLine/>,
        title:"social media app",
        projectDesc:"create a social media application with real time updates and instructions."
    },
    {
        icon:<FaBlog/>,
        title:"blog platform",
        projectDesc:"build a dynamic blog plateform with contact managements feature. "
    }
]

const ProjectContainer = () => {
  return (
    <div className='w-full py-10 px-10 text-white bg-gray-100 '>
        <div className='bg-black rounded-lg py-10 px-4 flex flex-col gap-2'> 
            <div className='flex items-center gap-1'>
                <div className='flex items-center gap-1 py-1 px-2  rounded-md'>
                    <RiCommandLine className='text-white'/> 
                    <p className=''>Troubleshoot & Debug</p>
                </div>
            </div> 
            <div className='flex flex-col gap-5'>
                <h1 className='text-4xl'>Projects Showcase</h1>
                <p className='capitalize'>Take a look at some of my notable projects, showcasing my ability to design and develop
                    effective web solutions.
                </p>
            </div>
            <div className='flex gap-1 items-center'>
                <div className=' flex items-center border bg-white px-2 py-1 rounded-md cursor-pointer'>
                    <p className='text-black'>Explore my projects</p>
                    <WiDirectionRight className='text-black text-3xl'/>
                </div> 
            </div>
            {/* project model showcase  */}
            <div className='mt-9 flex flex-wrap items-centers justify-between gap-6 lg:flex-nowrap'>
               {
                 projectList.map((item, i)=>(
                    <div key={i} className='flex flex-col border border-customGrayBorder p-2  text-white bg-customGrayBg rounded-md'>                        
                        <div className='p-1 bg-customGrayBg rounded-md'>
                            <div className='border border-customGrayBorder inline-block p-2 rounded-md'>
                                {item.icon}
                            </div>
                        </div>
                        <h2 className='capitalize font-sans text-2xl'>{item.title}</h2>
                        <p className='pt-4 capitalize'>{item.projectDesc}</p>
                    </div>
                 ))
               }
            </div>
        </div>
    </div>
  )
}

export default ProjectContainer