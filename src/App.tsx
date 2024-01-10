import React from 'react';
import logo_color from './assets/logo_color.png';
import car from './assets/car.png';
import crash from './assets/crash.png';
import gps from './assets/gps.png';
import phone from  './assets/phone.png';
import mobi from './assets/mobi.png';
import Accordion from './components/Accordion';
import SelectComp from './components/SelectComp';

function App() {

  const list = ([
    {
      question: "O que é proteção veicular?",
      answer: "...",
    },
    {
      question: "Quem pode se associar a Alfa?",
      answer: "...",
    },
    {
      question: "Onde a Alfa atende?",
      answer: "Atendemos em todo o território brasileiro, e temos escritórios no Ceará, Rio Grande do Norte e Pernambuco.",
    },
    {
      question: "Existe pagamento da adesão?",
      answer: "...",
    }
  ]);

  return (
    <div className='bg-gray-900 flex flex-col font-montserrat items-center justify-start mx-auto w-full md:w-screen md:overflow-hidden'>
      <header className="flex items-center justify-start w-full h-12 bg-white md:h-10 sm:justify-center sm:h-8">
        <div>
          <img src={logo_color} alt='logo' className="h-48 m-56 md:h-40 md:m-20 sm:h-32" />
        </div>
      </header>
      <section 
        className='h-screen m-auto w-full bg-bg-image bg-cover md:bg-bg-mid sm:bg-bg-sm'  
      >
        <div className='flex items-center h-screen ml-60 md:ml-20 sm:mx-4'>
          <div className='backdrop-blur-md bg-black/20 w-[480px] h-[480px] border-0 border-solid rounded-3xl flex flex-col justify-center items-center sm:w-96'>
            <div>
              <h1 className='uppercase text-white font-extrabold text-3xl mx-10 text-center sm:text-[22px] sm:mt-10 sm:mx-5'>
                proteção completa para o seu veículo
              </h1>
              <p className='text-white font-semibold text-sm m-2 text-center md:text-base md:mx-14 sm:text-[14px] sm:mx-8'>
              preencha o formulário que em instantes a nossa equipe entrará em contato. 
              </p>
            </div>
            <div>
              <form className='flex flex-col'>
                <input
                  name='nome' 
                  placeholder='Nome*' 
                  type='text'
                  className='m-2 p-4 rounded-md sm:mx-6'
                />
                <input
                  name='whatsapp' 
                  placeholder='Whatsapp*' 
                  type='tel'
                  className='m-2 p-4 rounded-md sm:mx-6'
                />
                <SelectComp />
                <button className='bg-red-700 py-4 rounded-lg text-white uppercase font-extrabold px-14 m-5 hover:animate-spin shadow-bs1 hover:shadow-red-700/80 shadow-red-700/50 hover:scale-[1.03] sm:py-2 sm:px-10 sm:mx-16 sm:mb-12 sm:text-[12px]'>quero proteger meu veículo</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center justify-center h-screen w-full bg-white'>
        <div className='flex flex-col items-center justify-center'>
          <div className=''>
            <h1 className='uppercase text-[60px] font-extrabold text-center text-blue px-[700px] sm:text-xl md:text-3xl md:px-32 lg:px-0'>benefícios que o associado <span className='text-red-700'>alfa</span> tem</h1>
          </div>
          <div className='flex md:w-screen items-center justify-center p-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-2 md:px-20 sm:px-4 sm:gap-0'>
            <div className='flex flex-col items-center justify-center w-80 h-96 p-10 m-4 rounded-lg shadow-bs1 place-content-between text-center space-y-10 hover:transition-colors hover:duration-300 hover:shadow-lg hover:scale-[1.1] sm:w-3/4 sm:h-3/4 sm:p-2 sm:space-y-0'>
              <img src={crash} alt='acidente' className='w-32 sm:w-14' />
              <h5 className='uppercase font-extrabold text-blue sm:text-sm'>proteção veicular e de vidros</h5>
            </div>
            <div className='flex flex-col items-center justify-center w-80 h-96 p-10 m-4 rounded-lg shadow-bs1 place-content-between text-center space-y-10 hover:transition-colors hover:duration-300 hover:shadow-lg hover:scale-[1.1] sm:w-3/4 sm:h-3/4 sm:p-5 sm:space-y-0'>
              <img src={phone} alt='telefone' className='w-24 sm:w-10'/>
              <h5 className='uppercase font-extrabold text-blue'>assistência 24h</h5>
            </div>
            <div className='flex flex-col items-center justify-center w-80 h-96 p-10 m-4 rounded-lg shadow-bs1 place-content-between text-center space-y-10 hover:transition-colors hover:duration-300 hover:shadow-lg hover:scale-[1.1] sm:w-3/4 sm:h-3/4 sm:p-5 sm:space-y-0'>
              <img src={gps} alt='mapa' className='w-24 sm:w-10'/>
              <h5 className='uppercase font-extrabold text-blue'>rastreamento</h5>
            </div>
            <div className='flex flex-col items-center justify-center w-80 h-96 p-10 m-4 rounded-lg shadow-bs1 place-content-between text-center space-y-10 hover:transition-colors hover:duration-300 hover:shadow-lg hover:scale-[1.1] sm:w-3/4 sm:h-3/4 sm:p-5 sm:space-y-0'>
              <img src={car} alt='carro/moto' className='w-32 sm:w-14'/>
              <h5 className='uppercase font-extrabold text-blue'>carro e moto reserva</h5>
            </div>
          </div>
          <div>
            <button className='bg-red-700 py-4 rounded-lg text-white uppercase font-extrabold px-14 m-5 hover:animate-spin shadow-bs1 hover:shadow-red-700/80 shadow-red-700/50 hover:scale-[1.03] sm:py-2 sm:px-10 sm:mx-16 sm:mb-12 sm:text-[12px] sm: mt-0'>quero proteger meu veículo</button>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center justify-center h-screen w-full bg-blue overflow-hidden'>
        <div className='flex items-center justify-center mb-10'>
            <div className='w-full h-full px-32 ml-20'>
              <div className=''>
                <h1 className='text-white capitalize mb-10 font-extrabold text-[44px] text-center'>dúvidas frequentes</h1>
              </div>
              <div className='list'>
                {
                    list.map((item, key) => (
                      <Accordion key={key} datas={item} />
                    ))
                }
              </div>
            </div>
            <div className='w-full h-full'>
              <img 
                src={mobi}
                alt='carro'
                className='scale-[1.5]'  
              />
            </div>
        </div>
        <div className='mt-10'>
          <button className='bg-red-700 py-4 rounded-lg text-white uppercase font-extrabold px-14 hover:animate-spin shadow-bs1 hover:shadow-red-700/80 shadow-red-700/50 hover:scale-[1.03]'>quero proteger meu veículo</button>
        </div>
      </section>
      <footer className='flex items-center justify-center w-full h-10 bg-[#353535]'>
        <h2 className='text-white'>{(new Date().getFullYear())} - Todos os direitos reservados©</h2>
      </footer>
    </div>
  )
}

export default App;
