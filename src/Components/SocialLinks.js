import React from 'react'



function SocialLinks({ alignment = 'start' }) {
    return (
        <div className='w-auto bg-slate-900 py-16 '>
            <div className={`flex  justify-center lg:justify-${alignment}  `}>
                <div className="justify-start hidden"></div>
              




                <button className="mr-3 text-3xl md:text-5xl text-blue-600 animate-slideInDown duration-1000 animate-repeat-12">  <ion-icon name="logo-facebook"></ion-icon> </button>

                <button className="mr-3 text-3xl md:text-5xl text-sky-500 animate-slideInUp duration-1000 animate-repeat-12 "><ion-icon name="logo-twitter"></ion-icon> </button>

                <button className="mr-3 text-3xl md:text-5xl text-red-600 animate-slideInDown duration-1000 animate-repeat-12 "><ion-icon name="logo-youtube"></ion-icon> </button>
                <button className="mr-3 text-3xl md:text-5xl text-red-400 animate-slideInUp  duration-1000 animate-repeat-12"><ion-icon name="logo-pinterest"></ion-icon> </button>
                <button className="mr-3 text-3xl md:text-5xl text-blue-600 animate-slideInDown duration-1000 animate-repeat-12"><ion-icon name="logo-linkedin"></ion-icon> </button>
                <button className="mr-3 text-3xl md:text-5xl text-pink-500 animate-slideInUp duration-1000 animate-repeat-12 "><ion-icon name="logo-instagram"></ion-icon></button>


            </div>
        </div>
    )
}

export default SocialLinks;