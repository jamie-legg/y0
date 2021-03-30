import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import axios from "axios";
import Avatar from '../components/nav/Avatar';
import { Transition } from '@headlessui/react'
import Layout from '../components/layout/Layout';

export async function getStaticProps(context) {
  const asyncResponse = await axios.get("https://api.minerstat.com/v2/stats/vegl2iu7ov3b");
  const avatarURL = "https://cdn.discordapp.com/attachments/671848184938758155/825424773894373486/avatar.png"
  return {
    props: {
      avatar: {
        url:avatarURL
      },
      fingerprint: Math.floor(Math.random()*5)
    }, // will be passed to the page component as props
  }
}

export default function Home(props){

  const { fingerprint } = props;
  
  const [ hoverConnect, setHoverConnect] = useState(false);
  const [ connect, setConnecting ] = useState(false);


  return (
    <Layout user={"jamie"}>

    
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-dark sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <div className="masked"></div>
              <span className="block text-projecty-1 l:inline">Join a world.</span>
              <span className="block text-projecty-2 xl:inline">Create your world.</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-dark sm:text-xl md:mt-5 md:max-w-3xl">
              Project Y is a social community framework toolkit that enables creators to transform their virtual audience into their dream digital ecosystem. Please connect to begin.
            </p>
            
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <button
                  onMouseEnter={() => setHoverConnect(true)}
                  onMouseLeave={() => setHoverConnect(false)}
                 onClick={() => setConnecting(true)} className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-projecty-3 hover:bg-projecty-4 md:py-4 md:text-lg md:px-10">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img className="absolute inset-0 w-full h-full object-cover" src="/images/swirls.png" alt="" />
          <canvas className="canvas-cover"></canvas>
        </div>
      </main>
      </Layout>
  );
}