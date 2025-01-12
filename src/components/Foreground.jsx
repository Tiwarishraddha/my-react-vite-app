import React from 'react'
import Cards from './Cards'
function Foreground() {
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
            tag : {isOpen : false , tagTitle: "Download Now", tagColor: "green"},
        },
        {
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize : ".8mb",
            close : true,
            tag : {isOpen : true , tagTitle: "Download Now", tagColor: "green"},
        },
    ];
    
  return (
    <div>
      <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
       {data.map((item,index)=>(
         <Cards data = {item}/>
        ))}
      </div>
     
    </div>
  )
}

export default Foreground
