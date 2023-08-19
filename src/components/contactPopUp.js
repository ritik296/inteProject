import React from 'react'

export const ContactPopUp = ({contactToggle, setContactToggle}) => {
  return (
    <div className={`w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-60 z-50 ${contactToggle ? 'flex' : 'hidden'} items-center justify-center`}>
        <div className="w-[495px] h-[405px] relative bg-[#FCEBE5] rounded-2xl">
            <img className='absolute top-[17px] right-[17px]' src="Close.png" alt="" onClick={() => setContactToggle(false)}/>

            <div className="mt-[40px] mx-[38px]">
                <h2 className="text-[#495057] h-[45px] text-[42px]">Contact</h2>
                <p className="text-[#ADB5BD] text-base text-[12px] mt-2" >Lorem ipsum dolor sit amet consectetur, </p>

                <form className="mt-[25px] text-[12px]  " action="" >
                    <div className='h-[45px] w-full flex px-[30px] items-center relative bg-white rounded-full mb-[11px]'>
                        <label htmlFor="name">Name</label>
                        <input id='name' type="text" className='absolute left-[129px]'  placeholder='Enter your name here'/>
                    </div>

                    <div className='h-[45px] w-full flex px-[30px] items-center relative bg-white rounded-full mb-[11px]'>
                        <label htmlFor="email">E-mail</label>
                        <input id='email' type="text" className='absolute left-[129px]'  placeholder='Enter your e-mail address here'/>
                    </div>

                    <div className='h-[45px] w-full flex px-[30px] items-center relative bg-white rounded-full mb-[11px]'>
                        <label htmlFor="name">Name</label>
                        <input id='name' type="text" className='absolute left-[129px]'  placeholder='Enter your name here'/>
                    </div>

                    <div className="w-full mt-[15px] text-right">
                        <button className='bg-black h-[45px] w-[105px] text-white rounded-full ml-auto'>Submit</button>
                    </div>
                </form>

                <div className="mt-[8px] flex justify-between">
                    <p className="text-[#495057] text-[12px]">Need more info? hello@newzera.com</p>
                    <div className="w-[54px] h-[11px] flex space-x-[11.2px]">
                        <img src="./FB-icon-black.png" alt="" />
                        <img src="./linkedin-icon-black.png" alt="" />
                        <img src="./Twitter-icon-black.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
