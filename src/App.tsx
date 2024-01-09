import logo_color from './assets/logo_color.png';
import car from './assets/car.png';
import crash from './assets/crash.png';
import gps from './assets/gps.png';
import phone from  './assets/phone.png';
import mobi from './assets/mobi.png';
import React, { useState } from 'react';
import Accordion from './components/Accordion';

function App() {

  const [list, setList] = useState([
    {
      question: "O que é proteção veicular?",
      answer: "...",
      active: 1
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
    <div className='bg-gray-900 flex flex-col font-montserrat items-center justify-start mx-auto w-full'>
      <header className="flex items-center justify-start w-full h-12 bg-white">
        <div>
          <img src={logo_color} className="h-48 m-56" />
        </div>
      </header>
      <section 
        className='h-screen m-auto w-full bg-bg-image bg-cover'  
      >
        <div className='flex items-center h-screen ml-60'>
          <div className='backdrop-blur-md bg-black/20 w-[480px] h-[480px] border-0 border-solid rounded-3xl flex flex-col justify-center items-center'>
            <div>
              <h1 className='uppercase text-white font-extrabold text-3xl mx-10 text-center'>
                proteção completa para o seu veículo
              </h1>
              <p className='text-white font-semibold text-sm m-2 text-center'>
              preencha o formulário que em instantes a nossa equipe entrará em contato. 
              </p>
            </div>
            <div>
              <form className='flex flex-col'>
                <input
                  name='nome' 
                  placeholder='Nome*' 
                  type='text'
                  className='my-2 py-4 rounded-lg'
                />
                <input
                  name='whatsapp' 
                  placeholder='Whatsapp*' 
                  type='tel'
                  className='my-2 py-4 rounded-lg'
                />
                <select className='my-2 py-4 rounded-lg'>
                  <option selected value="veiculo">Qual o seu veículo?</option>
                  <option value="carro">Carro</option>
                  <option value="moto">Moto</option>
                  <option value="caminhao">Caminhão</option>
                </select>
                <button className='bg-red-700 py-4 rounded-lg text-white uppercase font-extrabold px-14'>quero proteger meu veículo</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center justify-center h-screen w-full bg-white'>
        <div className='flex flex-col items-center justify-center'>
          <div className=''>
            <h1 className='uppercase text-3xl font-extrabold text-center text-blue'>benefícios que o associado <br /><span className='text-red-700'>alfa</span> tem</h1>
          </div>
          <div className='flex items-center justify-center p-10'>
            <div className='flex flex-col items-center justify-center w-64 h-72 p-10 m-2 rounded-lg shadow-bs1 place-content-between text-center space-y-10'>
              <img src={crash} className='w-32' />
              <h5 className='uppercase font-extrabold text-blue'>proteção veicular e de vidros</h5>
            </div>
            <div className='flex flex-col items-center justify-center w-64 h-72 p-10 m-2 rounded-lg shadow-bs1 place-content-between text-center space-y-10'>
              <img src={phone} className='w-24'/>
              <h5 className='uppercase font-extrabold text-blue'>assistência 24h</h5>
            </div>
            <div className='flex flex-col items-center justify-center w-64 h-72 p-10 m-2 rounded-lg shadow-bs1 place-content-between text-center space-y-10'>
              <img src={gps} className='w-24'/>
              <h5 className='uppercase font-extrabold text-blue'>rastreamento</h5>
            </div>
            <div className='flex flex-col items-center justify-center w-64 h-72 p-10 m-2 rounded-lg shadow-bs1 place-content-between text-center space-y-10'>
              <img src={car} className='w-32'/>
              <h5 className='uppercase font-extrabold text-blue'>carro e moto reserva</h5>
            </div>
          </div>
          <div>
            <button className='bg-red-700 py-4 rounded-lg text-white uppercase font-extrabold px-14'>quero proteger meu veículo</button>
          </div>
        </div>
      </section>
      <section className='flex items-center justify-center h-screen w-full bg-blue'>
        <div className='flex items-center justify-center'>
            <div className='w-full h-full px-32 ml-20'>
              <div className=''>
                <h1 className='text-white capitalize mb-6 font-extrabold text-[44px] text-center'>dúvidas frequentes</h1>
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
                className='scale-[1.5]'  
              />
            </div>
        </div>
      </section>
      <footer className='flex items-center justify-center w-full h-10 bg-[#353535]'>
        <h2 className='text-white'>2024 Todos os direitos reservados©</h2>
      </footer>
    </div>
  )
}

export default App;
