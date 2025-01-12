import React from 'react'
import { LuFileSpreadsheet } from "react-icons/lu";
import { CgSoftwareDownload } from "react-icons/cg";
import { IoIosClose } from "react-icons/io";
import { motion } from 'framer-motion';

const Cards = ({data,reference}) => {
  return (
    
      <motion.div drag dragConstraints = {reference} whileDrag={{scale:1.1}} dragElastic={0.1} className='flex-shrink-0 relative w-60 h-72 rounded-[45px]
       bg-zinc-900/90 z-40 text-white px-5 py-10 overflow-hidden'>
      <LuFileSpreadsheet/>
        <p className='text-sm leading-tight mt-5 font-semibold'>
          {data.desc}
        </p>
        <div className='footer absolute bottom-0   w-full  left-0'>
        <div className='flex items-center justify-between mb-3 px-8 py-3'>
            <h5>{data.filesize}</h5> 
            <spam className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
             {data.close?<IoIosClose/>:<CgSoftwareDownload size=".7em" color='#fff'/>}
            </spam>
        </div>
        { data.tag.isOpen && (
         <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
          <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
         </div>
         )}
        </div>
      </motion.div>
    
  )
}

export default Cards
