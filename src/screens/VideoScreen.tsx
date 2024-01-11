import React from "react";
import logo from '../assets/logo.png';

function VideoScreen () {

    return (
        <div className='overflow-x-hidden w-full h-screen bg-white flex flex-col font-montserrat items-center'>
            <header className='bg-blue h-8 w-full flex items-center justify-center lg:justify-evenly lg:px-56 md:h-14 lg:h-20'>
                <div className="flex items-center justify-evenly">
                    <h3 className="hidden lg:block text-white">Falta pouco para você ficar protegido!</h3>
                    <img src={logo} alt='logo' className='w-24 md:w-48 lg:ml-72 lg:w-60' />
                </div>
            </header>
            <section className="h-full flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center p-4 md:mx-16 lg:mx-44">
                    <h1 className='text-blue font-extrabold text-center px-1 text-xl md:text-5xl md:my-5 lg:mx-44'>
                        Você está a um passo de ter seu veículo protegido!
                    </h1>
                    <h3 className='text-[8px] mx-2 my-1 text-center pb-5 pt-2 md:text-xl lg:text-base lg:mx-52'>
                        Dentro de alguns instantes nossa equipe entrará em contato, para você ficar efetivamente protegido, enquanto isso veja alguns depoimentos de nossos associados.
                    </h3>
                    <video className="h-full w-full rounded-lg mb-5" controls>
                        <source src="https://www.youtube.com/watch?v=h0ffIJ7ZO4U&pp=ygUec3VsdGFuIG9mIHN0cmluZ3MgZGlyZSBzdHJhaXRz" type="video" />
                    </video>
                </div>
            </section>
            
            <footer className='flex items-center justify-center w-full h-10 bg-[#353535] md:h-14 relative bottom-0'>
                <h2 className='text-white md:text-2xl text-[14px]'>{(new Date().getFullYear())} - Todos os direitos reservados©</h2>
            </footer>
        </div>
    )
}

export default VideoScreen;