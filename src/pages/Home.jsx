import React from "react";
import lcLogo from "../assets/LotteryLogoRB.png";
import maticLogo from "../assets/maticlogo.png";
import { FaFaucet } from "react-icons/fa";
import {BsLinkedin} from 'react-icons/bs';
import {IoLogoTwitter} from 'react-icons/io';
import {BsGithub} from 'react-icons/bs';

const Home = () => {
  const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl hover:bg-[#383f51]">
      <div
        className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
      >
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <h1 className="mt-2 text-white text-lg">{title}</h1>
        <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <>
      <nav className="w-full flex">
        <div className="md:flex-[0.5] flex-initial justify-center items-center ml-5 mt-2">
          <img src={lcLogo} alt="logo" className="w-48 cursor-pointer" />
        </div>
      </nav>
      <div className="flex w-full items-center">
        <div className="flex mf:flex-row flex-col items-start justify-center md:pl-20  2xl:pl-64 pb-12 px-4">
          <div className="flex flex-1 justify-start items-start flex-col max-w-3xl mf:mr-10">
            <h1 className="text-3xl sm:text-5xl text-white py-1">
              Play the Lottery <br /> on the Blockchain
            </h1>
            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
              Start learning how blockchain works. Get free cryptocurrencies on
              Polygon's tesnet (Mumbai), connect your wallet and play lottery
              without risk. <br /> 1 out of every 10 players takes the jackpot!!
            </p>
            <div className="flex-1 flex flex-col justify-start mt-6">
              <ServiceCard
                color="bg-white"
                title="Polygon Mumbai Blockchain"
                icon={
                  <img
                    src={maticLogo}
                    alt="logo"
                    fontSize={21}
                    className="text-white"
                  />
                }
                subtitle={
                  <a
                    href="https://mumbai.polygonscan.com/address/0x371b3d090b8e161533b86af1e603fa8f97594e47"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ◦ The Lottery System rules under contract:
                    0x371B3d090B8e161533b86af1E603fA8F97594e47 <br />◦ We use
                    OpenZeppelin and Chainlink that guarantees the safety and
                    integrity of the game.
                  </a>
                }
              />
              <ServiceCard
                color="bg-[#8945f8]"
                title="Click here for Free Tesnet Matic."
                icon={<FaFaucet fontSize={21} className="text-white" />}
                subtitle={
                  <a
                    href="https://mumbaifaucet.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ◦ MATIC is the currency on the Polygon network. Just enter
                    your wallet address and click "Send me MATIC". <br />
                    ◦ You will receive 1 MATIC each time. In case of logging in
                    Alchemy, you will receive 5 MATIC.
                    <br />
                    ◦ You can come back every 24 hours. <br />◦ Remember that it
                    is Tesnet Matic so it has no value, only for testing
                    purposes.
                  </a>
                }
              />
            </div>
          </div>


          <section id="aboutMe" className="AboutMe">
            <p className="footer__logo">aitor.zaldua@draftdigital.org</p>

            <div className="footer__socials">
              <a
                href="https://www.linkedin.com/in/aitor-zaldua/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <IoLogoTwitter />
              </a>
              <a
                href="https://github.com/aitorzaldua"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
