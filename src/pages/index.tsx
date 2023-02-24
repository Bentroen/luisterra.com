import Head from "next/head";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmazon,
  faApple,
  faDeezer,
  faInstagram,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luis Terra :: Home</title>
        <meta
          name="description"
          content="Cantor, compositor e instrumentista com 10 anos de carreira"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{ backgroundImage: 'url("/background2.jpeg")' }}
        className="h-full w-full fixed text-white bg-fixed bg-cover sm:[background-position-x:200px] lg:[background-position-x:300px] lg:[background-position-y:15%]"
      >
        {/* Background image and gradient */}
        <div
          className="hidden sm:block w-2/3 h-full fixed bg-gradient-to-r from-[#110A09]/90 to-[#9E5C4D]/40 backdrop-filter backdrop-blur-2xl"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, black, black 45%, rgba(0,0,0,0.9) 55%, transparent 90%)",
          }}
        >
          {" "}
        </div>
        {/* Background overlay for mobile */}
        <div
          className="block sm:hidden w-full h-full fixed bg-black/40"
          style={{ boxShadow: "0 0 300px black inset" }}
        ></div>

        {/* Content */}
        <div className="fixed top-0 left-0 flex flex-col justify-around py-14 sm:justify-center mt-0 items-left h-full w-full md:w-1/2 sm:mx-[10%] space-y-16">
          <div className="block text-center w-screen sm:w-fit drop-shadow-xl">
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-thin">
              Luis<span className="font-semibold">Terra</span>
            </h1>

            <div className="">
              <p className="text-xl sm:text-2xl lg:text-3xl font-light">
                <span className="text-sm sm:text-lg lg:text-xl mr-2">
                  <FontAwesomeIcon className="" icon={faMusic} />
                </span>{" "}
                cantor • compositor
              </p>
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col h-full max-h-[16rem] text-2xl font-light align-center drop-shadow-lg ml-14 sm:ml-0">
            <div className="table flex-1 text-2xl w-fit m-0 p-0 transition-all ease-in-out duration-[250ms] hover:translate-x-2 hover:text-gray-300">
              <div className="table-cell align-middle">
                <Link href="/sobre">sobre</Link>
              </div>
            </div>
            <div className="table flex-1 text-2xl w-fit m-0 p-0 transition-all ease-in-out duration-[250ms] hover:translate-x-2 hover:text-gray-300">
              <div className="table-cell align-middle">
                <Link href="#">portfólio</Link>
              </div>
            </div>
            <div className="table flex-1 text-2xl w-fit m-0 p-0 transition-all ease-in-out duration-[250ms] hover:translate-x-2 hover:text-gray-300">
              <div className="table-cell align-middle">
                <Link href="#">contato</Link>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex flex-row justify-center sm:justify-start space-x-4">
            <a href="https://www.instagram.com/luisterrax">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.youtube.com/@luisterrax">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://open.spotify.com/artist/1sa9p7e4e2K7IhPklddoV6">
              <FontAwesomeIcon icon={faSpotify} size="2x" />
            </a>
            <a href="https://deezer.page.link/bapfLw7DcaxruuhH9">
              <FontAwesomeIcon icon={faDeezer} size="2x" />
            </a>
            <a href="https://music.apple.com/us/artist/luis-terra/1473862864">
              <FontAwesomeIcon icon={faApple} size="2x" />
            </a>
            <a href="https://music.amazon.com.br/artists/B07VGCGWJ1/luis-terra">
              <FontAwesomeIcon icon={faAmazon} size="2x" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
