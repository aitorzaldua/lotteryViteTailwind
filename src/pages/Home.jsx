import React from "react";
import lcLogo from "../assets/LotteryLogoRB.png";
import maticLogo from "../assets/maticlogo.png";
import { FaFaucet } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { GiPerspectiveDiceSix } from "react-icons/gi";
import { GiPodiumWinner } from "react-icons/gi";

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
      <div className="flex flex-row">
        <div className="md:flex flex-initial flex-row justify-center items-center ml-5 mt-2">
          <img src={lcLogo} alt="logo" className="w-48 cursor-pointer" />
          <button
            type="button"
            onClick={null}
            className="flex flex-row justify-end items-center ml-[80rem] mt-5 bg-[#0c9797] p-3 rounded-full cursor-pointer hover:bg-[#074b4b]"
          >
            <GiWallet className="text-white mr-2" />
            <p className="text-white text-base font-semibold">
              Connect Your Wallet
            </p>
          </button>
        </div>
      </div>

      <div className="flex flex-row">
        {/* Right Side */}
        <div className="flex mf:flex-row flex-col items-start justify-center md:pl-20  2xl:pl-64 pb-12 px-4">
          <div className="flex flex-1 justify-start items-start flex-col max-w-3xl mf:mr-10">
            <div className="flex flex-row">
              <h1 className="text-3xl sm:text-5xl text-white py-1">
                Play the Lottery <br /> on the Blockchain
              </h1>
            </div>

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
                color="bg-[#4361ee]"
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
              <ServiceCard
                color="bg-[#ef233c]"
                title="Adminstrator Only"
                icon={<GiPodiumWinner fontSize={21} className="text-white" />}
                subtitle={
                  <button
                    type="button"
                    onClick={null}
                    className="flex flex-row justify-end items-center mt-5 bg-[#0c9797] p-3 rounded-full cursor-pointer hover:bg-[#074b4b]"
                  >
                    <GiPerspectiveDiceSix className="text-white mr-2" />
                    <p className="text-white text-base font-semibold">
                      Pick a winner
                    </p>
                  </button>
                }
              />
            </div>
          </div>

          <div className="flex flex-row justify-center mt-3 text-white">
            <div className="flex mf:flex-row flex-col items-start justify-center md:pl-20  2xl:pl-64 pb-12 px-4">
              <a
                href="https://www.linkedin.com/in/aitor-zaldua/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://twitter.com/azdraft_"
                target="_blank"
                rel="noreferrer"
              >
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
          </div>

        </div>

        {/* left Side */}
        <div className="flex flex-col flex-start">
          <p className=" text-white font-light text-base">
            Send 1 Matic to play the lottery, just click the button
          </p>

          <button
            type="button"
            onClick={null}
            className="flex flex-row justify-center items-center mt-5 bg-[#0c9797] rounded-full cursor-pointer hover:bg-[#074b4b]"
          >
            <GiPerspectiveDiceSix className="text-white mr-2" />
            <p className="text-white text-base font-semibold">
              Take part the lottery
            </p>
          </button>
          <p className="text-white font-light text-base mt-5">Current Lottery players:</p>
          <a className="text-white font-light text-base mt-2 hover:text-[#4361ee]" href="https://mumbai.polygonscan.com/address/0x371b3d090b8e161533b86af1e603fa8f97594e47" target="_blank" rel="noreferrer">
          0x371B3d090B8e161533b86af1E603fA8F97594e47
          </a>
          <p className="text-white font-light text-base mt-5">Pot:</p>
          <a className="text-white font-light text-base mt-2 hover:text-[#4361ee]" href="https://mumbai.polygonscan.com/address/0x371b3d090b8e161533b86af1e603fa8f97594e47" target="_blank" rel="noreferrer">
          4 Matic
          </a>
          <p className="text-white font-light text-base mt-5">Lottery History:</p>
          <a className="text-white font-light text-base mt-2 hover:text-[#4361ee]" href="https://mumbai.polygonscan.com/address/0x371b3d090b8e161533b86af1e603fa8f97594e47" target="_blank" rel="noreferrer">
          Lottery #1 Winner: 0x371B3d090B8e161533b86af1E603fA8F97594e47
          </a>

        </div>
        {/* End of left side */}

      </div>
    </>
  );
};

export default Home;
