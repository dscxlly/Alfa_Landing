import React, { useState } from 'react';
import logo_color from './assets/logo_color.png';
import mobi from './assets/mobi.png';
import Accordion from './components/Accordion';
import Component_3 from './assets/Component_3.png';
import Component_4 from './assets/Component_4.png';
import Component_5 from './assets/Component_5.png';
import Component_6 from './assets/Component_6.png';
import InputMask from 'react-input-mask';


interface Option {
  value: string;
  label: string;
}

function App() {

  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const options: Option[] = [
    { value: 'carro', label: 'Carro' },
    { value: 'moto', label: 'Moto' },
    { value: 'caminhão', label: 'Caminhão' },
  ];

  const handleOptionChange = (option: Option) => {
    if (selectedOptions.some((item) => item.value === option.value)) {
      setSelectedOptions(selectedOptions.filter((item) => item.value !== option.value));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = {
      Nome: e.currentTarget.Nome.value,
      Whatsapp: e.currentTarget.Whatsapp.value,
      Veiculo: selectedOptions.map(option => option.label).join(', '),
    };
  
    console.log('Dados do formulário antes do envio:', formData);
  
    try {
      const response = await fetch('https://api.sheetmonkey.io/form/gCRg4FqMcLVCiySJwCqnD', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Dados enviados com sucesso!');
      } else {
        console.error('Erro ao enviar dados:', response.status, response.statusText);
        
        // Adicione esta parte para logar a resposta da API em caso de erro
        const responseData = await response.json();
        console.error('Resposta da API:', responseData);
      }
    } catch (error) {
      console.error('Erro durante a requisição:', error);
    }
  };
  

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
    <div className='overflow-x-hidden w-screen bg-blue flex flex-col font-montserrat items-center  '>
      <header className='bg-white h-8 w-screen flex items-center justify-center lg:justify-start md:h-14 lg:h-20'>
        <div>
          <img src={logo_color} alt='logo' className='w-32 md:w-48 lg:ml-72 lg:w-60' />
        </div>
      </header>
      <section className='h-screen w-screen bg-bg-sm md:bg-bg-mid lg:bg-bg-image bg-cover  '>
        <div className='flex items-center justify-center lg:justify-start lg:ml-72 h-screen m-2'>
          <div className='backdrop-blur-lg bg-black/10 border-0 rounded-3xl flex flex-col justify-center items-center p-5 w-screen md:w-[600px] lg:w-[480px] lg:h-[480px]'>
            <div className=''>
              <h1 className='uppercase text-white text-xl font-extrabold text-center md:text-4xl md:mt-10 lg:text-2xl'>
                proteção completa <br /> para o seu veículo
              </h1>
              <p className='text-white font-semibold text-[14px] mx-2 my-1 text-center md:text-xl lg:text-base'>
              preencha o formulário que em instantes <br /> a nossa equipe entrará em contato. 
              </p>
            </div>
            <div>
              <form className='flex flex-col items-center justify-center md:m-5 lg:m-0 ' onSubmit={handleFormSubmit}>
                <input
                  name='Nome' 
                  placeholder='Nome*' 
                  required
                  type='text'
                  className='px-3 py-2 rounded-lg m-1 md:w-[460px] md:py-4 md:mb-4 md:text-2xl lg:text-lg lg:w-[400px] lg:mb-1 lg:py-3'
                />
                <InputMask
                  mask ='(99) 99999-9999'
                  name='Whatsapp' 
                  placeholder='Whatsapp*'
                  required 
                  type='tel'
                  className='px-3 py-2 rounded-lg m-1 md:w-[460px] md:py-4 md:mb-4 md:text-2xl lg:text-lg lg:w-[400px] lg:mb-1 lg:py-3'
                />
                <div className='py-1 rounded-lg'>
                  <div
                    className='bg-white cursor-pointer flex justify-between px-4 py-2 rounded-lg w-56 text-black/80 md:w-[460px] md:py-4 md:mb-3 md:text-2xl lg:text-lg lg:w-[400px] lg:mb-1 lg:py-3'
                    onClick={toggleDropdown}
                  >
                    Qual o seu veículo?
                    <span className=''>▼</span>
                  </div>
                  {isDropdownOpen && (
                    <div className='absolute bg-white cursor-pointer flex flex-col justify-between px-4 py-2 rounded-lg w-56 mt-1 md:w-[460px] md:text-2xl lg:text-lg lg:w-[400px]'>
                      {options.map((option) => (
                        <label key={option.value} className='block'>
                          <input
                            type='checkbox'
                            value={option.value}
                            checked={selectedOptions.some((item) => item.value === option.value)}
                            key={option.value}
                            name='Veiculo'
                            onChange={() => handleOptionChange(option)}
                            className='lg:w-5 md:w-3 md:h-3'
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                <button className='bg-red-700 rounded-lg text-white uppercase font-extrabold p-3 m-5 my-2 text-xs hover:animate-spin shadow-bs1 hover:shadow-red-700/80 shadow-red-700/50 hover:scale-[1.03] md:p-5 md:text-xl md:mt-10 lg:mb-10 lg:my-2 lg:mx-12 lg:text-base'>quero proteger meu veículo</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className='w-screen h-full bg-white flex flex-col items-center justify-center '>
        <div className='my-10'>
          <div className=''>
            <h1 className='uppercase text-blue font-extrabold text-center text-lg md:text-5xl md:my-10'>benefícios que o <br />associado <span className='text-red-700'>alfa</span> tem</h1>
          </div>
          
          <div id="default-carousel" className="relative w-full h-full md:hidden" data-carousel="slide">
              {/* <!-- Carousel wrapper --> */}
              <div className="relative h-56   rounded-lg md:h-96">
                  {/* <!-- Item 1 --> */}
                  <div className="duration-700 ease-in-out" data-carousel-item>
                      <img src={Component_3} className="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                  </div>
                  {/* <!-- Item 2 --> */}
                  <div className="hidden duration-700 ease-in-out" data-carousel-item>
                      <img src={Component_4} className="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                  </div>
                  {/* <!-- Item 3 --> */}
                  <div className="hidden duration-700 ease-in-out" data-carousel-item>
                      <img src={Component_5} className="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                  </div>
                  {/* <!-- Item 4 --> */}
                  <div className="hidden duration-700 ease-in-out" data-carousel-item>
                      <img src={Component_6} className="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                  </div>
              </div>
              {/* <!-- Slider indicators --> */}
              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                  <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                  <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                  <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                  <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              </div>
              {/* <!-- Slider controls --> */}
              <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent group-focus:outline-none">
                      <svg className="w-4 h-4 text-red-700 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                      </svg>
                      <span className="sr-only">Previous</span>
                  </span>
              </button>
              <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent group-focus:outline-none">
                      <svg className="w-4 h-4 text-red-700 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                      </svg>
                      <span className="sr-only">Next</span>
                  </span>
              </button>
          </div>

          <div className='hidden md:grid md:grid-cols-2 md:p-4 md:items-center md:justify-center lg:flex'>
            <div className=''>
              <img src={Component_3} alt='acidente' className='hover:scale-[1.1] md:scale-90' />
            </div>
            <div className=''>
              <img src={Component_4} alt='telefone' className='hover:scale-[1.1] md:scale-90 cove'/>
            </div>
            <div className=''>
              <img src={Component_5} alt='mapa' className='hover:scale-[1.1] md:scale-90'/>
            </div>
            <div className=''>
              <img src={Component_6} alt='carro/moto' className='hover:scale-[1.1] md:scale-90'/>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <button className='bg-red-700 rounded-lg text-white uppercase font-extrabold p-3 m-5 my-2 text-xs hover:animate-spin shadow-bs1 hover:shadow-red-700/80 shadow-red-700/50 hover:scale-[1.03] md:p-8 md:text-2xl md:mb-10'>quero proteger meu veículo</button>
          </div>
        </div>
      </section>
      <section className='flex flex-col lg:w-screen'>
        <div className='flex items-center justify-center lg:justify-between p-5'>
            <div className='w-full h-full md:px-10'>
              <div className=''>
                <h1 className='capitalize text-white font-extrabold text-3xl text-center my-10 md:text-5xl'>dúvidas frequentes</h1>
              </div>
              <div className='list md:py-5'>
                {
                    list.map((item, key) => (
                      <Accordion key={key} datas={item} />
                    ))
                }
              </div>
            </div>
            <div className='hidden lg:w-full lg:h-full lg:block'>
              <img 
                src={mobi}
                alt='carro'
                className='lg:relative lg:w-full lg:scale-[1.3] lg:ml-20'  
              />
            </div>
        </div>
        <div className='flex items-center justify-center mb-5'>
          <button className='bg-red-700 rounded-lg text-white uppercase font-extrabold p-3 m-5 my-2 text-xs hover:animate-spin shadow-bs1 hover:shadow-red-700/80 shadow-red-700/50 hover:scale-[1.03] md:p-8 md:text-2xl md:mb-10'>quero proteger meu veículo</button>
        </div>
      </section>
      <footer className='flex items-center justify-center w-full h-10 bg-[#353535] md:h-14'>
        <h2 className='text-white md:text-2xl'>{(new Date().getFullYear())} - Todos os direitos reservados©</h2>
      </footer>
    </div>
  )
}

export default App;
