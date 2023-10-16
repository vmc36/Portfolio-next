import Head from 'next/head';
import { useState } from 'react';
import '@splidejs/react-splide/css';

import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { MdOutlineDarkMode } from 'react-icons/md';
import { DiJavascript1, DiReact, DiGit } from 'react-icons/di';
import { FaVuejs, FaLaravel, FaFigma } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import mainAvatar from '../public/main-avatar.svg';
import contact from '../public/contact.svg';
import laptop from '../public/laptop.svg';

import web1 from '/public/web1.png';
import web2 from '/public/web2.png';
import web3 from '/public/web3.png';
import web4 from '/public/web4.png';
import web5 from '/public/web5.png';

import Image from 'next/image';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Vinicius Modesto - Front-end Developer </title>
        <meta name="description" content="Seja Bem-vindo!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 duration-200">
        <section className="min-h-[70vh] xl:min-h-[35vh]">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-3xl">VMC</h1>
            <ul className="flex items-center">
              <li>
                <MdOutlineDarkMode onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl duration-100" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="./curriculo.pdf"
                  download={'Vinicius Modesto - Front-end Developer.pdf'}
                >
                  Currículo
                </a>
              </li>
            </ul>
          </nav>
          <div className="justify-evenly w-full items-center md:flex ">
            <motion.div
              initial={{ opacity: 0, translateX: -50, translateY: -50 }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ ease: 'easeOut', duration: 1 }}
            >
              <div className="mx-auto rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-96 md:w-96 2xl:m-0 ">
                <Image src={mainAvatar} layout="fill" objectFit="cover" alt="Avatar em memoji" />
              </div>
            </motion.div>

            <div className="text-center p-10 py-10">
              <h1 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl dark:duration-100"> Vinicius Modesto</h1>
              <h1 className="text-2xl py-2 dark:text-white md:text-3xl dark:duration-100"> Front-End Developer.</h1>

              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Olá! Me chamo Vinicius <br /> Desenvolvedor front-end.
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a href="https://www.linkedin.com/in/vinicius-modesto96/" target="_blank" rel="noreferrer" className="hover:contrast-200 duration-150">
                  {' '}
                  <AiFillLinkedin />{' '}
                </a>

                <a href="https://github.com/vmc36" target="_blank" rel="noreferrer" className="hover:contrast-200 duration-150">
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="xl:mt-32 2xl:text-center">
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 text-lg dark:text-white  dark:bg-gray-700 flex-1">
              <motion.div
                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ ease: 'easeOut', duration: 1.3 }}
              >
                <Image src={laptop} width={100} height={100} alt="laptop emoji" />
              </motion.div>
              <h3 className="text-lg font-medium pt-8 pb-2">Experiência:</h3>
              <p className="py-2">Como desenvolvedor front-end, aqui uma lista de tecnologias que possuo experiência:</p>
              <div className="flex items-center justify-center space-x-1">
                <DiJavascript1 />
                <p className="text-gray-800 dark:text-white   py-1">JavaScript</p>{' '}
              </div>
              <div className="flex items-center dark:text-white  justify-center space-x-1">
                <FaVuejs />
                <p className="text-gray-800 dark:text-white  py-1">VueJS</p>
              </div>

              <div className="flex items-center dark:text-white  justify-center space-x-1">
                <DiReact />
                <p className="text-gray-800 dark:text-white  py-1">React</p>
              </div>
              <div className="flex items-center dark:text-white  justify-center space-x-1">
                <DiGit />
                <p className="text-gray-800 dark:text-white  py-1">Git</p>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <SiTailwindcss />
                <p className="text-gray-800 dark:text-white  py-1">TailwindCss</p>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <FaFigma />
                <p className="text-gray-800  dark:text-white  py-1">Figma</p>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <FaLaravel />
                <p className="text-gray-800 dark:text-white  py-1">Laravel</p>
              </div>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:text-white  dark:bg-gray-700 flex-1">
              <motion.div
                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ ease: 'easeOut', duration: 1.3 }}
              >
                <Image src={contact} width={100} height={100} alt="meu memoji" />
              </motion.div>
              <h3 className="text-lg  font-medium pt-8 pb-2  ">Contato:</h3>
              <p className="py-2">Caso queira entrar em contato, segue meu email e redes sociais!</p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a href="mailto:viniciusmodesto.dev@gmail.com" className="hover:contrast-200 duration-150">
                  <AiOutlineMail />
                </a>
                <a href="https://www.linkedin.com/in/vinicius-modesto96/" target="_blank" rel="noreferrer" className="hover:contrast-200 duration-150">
                  {' '}
                  <AiFillLinkedin />{' '}
                </a>
                <a href="https://github.com/vmc36" target="_blank" rel="noreferrer" className="hover:contrast-200 duration-150">
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-3xl lg:text-center my-2 dark:text-white">Alguns Projetos Pessoais:</h3>
          <div className="w-full flex items-center">
            <Splide
              className="m-auto"
              options={{
                rewind: true,
                rewind: true,
                perMove: 1,
                perPage: 2,
                rewindByDrag: 'true',

                autoplay: true,
                arrows: false,
                pagination: false,
                width: '55%',
                autoWidth: true,
                gap: '1rem',
                focus: 'center',
                breakpoints: {
                  640: {
                    perPage: 1,
                  },
                },
              }}
            >
              <SplideSlide>
                <div className="floatEffect-1 transition-all  " title="Projeto NaTrave, bolão feito para a copa de 2022 no Catar.">
                  <a href="https://pickem-worldcup.vercel.app/" target="_blank" rel="noreferrer">
                    <Image
                      className="rounded-lg object-cover "
                      src={web1}
                      height={350}
                      width={350}
                      alt="Projeto NaTrave, bolão feito para a copa de 2022 no Catar."
                    />
                  </a>
                </div>
              </SplideSlide>

              <SplideSlide>
                {' '}
                <div className="floatEffect-2 transition-all" title="Cadastro de usuário utilizando o Local Storage.">
                  <a href="https://webuserapplication.vercel.app/" target="_blank" rel="noreferrer">
                    <Image className="rounded-lg object-cover" src={web2} alt="Cadastro de usuário utilizando o Local Storage" height={350} width={350} />
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                {' '}
                <div className="floatEffect-3 transition-all" title="Border Radius Previewer.">
                  <a href="https://border-radius-previewer-vmc36.vercel.app/" target="_blank" rel="noreferrer">
                    <Image className="rounded-lg object-cover" src={web3} alt="Border Radius Previewer." height={350} width={350} />
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                {' '}
                <div className="floatEffect-4 transition-all" title="Consulta temperatura da cidade baseada na localização do usuário.">
                  <a href="https://current-weather-api.vercel.app" target="_blank" rel="noreferrer">
                    <Image
                      className="rounded-lg object-cover"
                      src={web4}
                      height={350}
                      width={350}
                      alt="Consulta temperatura da cidade baseada na localização do usuário."
                    />
                  </a>
                </div>
              </SplideSlide>
              <SplideSlide>
                {' '}
                <div className="floatEffect-4 transition-all" title="Consulta temperatura da cidade baseada na localização do usuário.">
                  <a href="https://todolist-iota-sooty.vercel.app/" target="_blank" rel="noreferrer">
                    <Image className="rounded-lg object-cover" src={web5} height={350} width={350} alt="Lista de tarefas a fazer." />
                  </a>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </section>
      </main>

      <footer className="p-10 text-center dark:text-white dark:bg-gray-900 ">
        <p> Copyright © 2023 Vinicius Modesto.</p>
      </footer>
    </div>
  );
}
