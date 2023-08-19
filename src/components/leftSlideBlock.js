import React, {useState} from 'react'

export const LeftSlideBlock = () => {

  const [slide, setSlide] = useState(0);

  const data = [
    {imgUrl: "./Group.png", title: "Type Text", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nemo omnis."},
    {imgUrl: "./Group 2.png", title: "Type Text", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nemo omnis."}
]

  return (
    <>
        <img className='w-[720px] h-[810px] z-0' src={data[slide].imgUrl} alt="" />
          <div className="absolute top-[501px] left-[110px] text-white ">
            <div className="w-[220px] h-[124px] overflow-hidden">

            <div className="w-[220px] ">
              <h2 className='font-bold text-lg'>{data[slide].title}</h2>
              <p className="mt-2 text-md">{data[slide].content}</p>
            </div>
            </div>
            <form action="">
                <input type="radio" name='slide' value="1" onClick={()=>setSlide(0)} />
                <input className='ml-[12px]' type="radio" name='slide' value="2" onClick={()=>setSlide(1)}/>
            </form>

            
          </div>
    </>
  )
}
