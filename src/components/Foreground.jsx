import React from 'react'
import Cards from './Cards'
import { useRef } from 'react';
function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize : ".9mb",
            close : true,
            tag : {isOpen : true , tagTitle: "Upload Now", tagColor: "blue"},
        },
        {
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize : ".4mb",
            close : false,
            tag : {isOpen : true , tagTitle: "Download Now", tagColor: "green"},
        },
        {
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize : ".8mb",
            close : false,
            tag : {isOpen : false , tagTitle: "Download Now", tagColor: "green"},
        },
        {
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize : ".5mb",
            close : false,
            tag : {isOpen : true , tagTitle: "Download Now", tagColor: "green"},
        },
        {
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize : ".7mb",
            close : false,
            tag : {isOpen : true , tagTitle: "Download Now", tagColor: "blue"},
        },
        
    ];
    
  return (
    <div>
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
       {data.map((item,index)=>(
         <Cards data = {item} reference={ref}/>
        ))}
      </div>
     
    </div>
  )
}

export default Foreground
