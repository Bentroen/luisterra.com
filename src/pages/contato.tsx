import Head from "next/head";
import { faMusic, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luis Terra :: Contato</title>
        <meta name="description" content="Entre em contato" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-12 w-full h-[24rem] md:h-full md:col-span-5 flex">
            <img
              className="object-cover w-full h-full [object-position:0_20%] md:object-center"
              src="/background2.jpeg"
              alt="Luis Terra"
            />
          </div>
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center space-y-12 items-left p-10 sm:p-24">
            <div className="flex justify-between items-center">
              <h1 className="text-5xl font-semibold">Contato</h1>
              <FontAwesomeIcon className="text-3xl" icon={faMusic} />
            </div>
            <div className="text-xl font-light">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td className="px-2">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </td>
                    <td>
                      <span className="font-semibold">E-mail: </span>
                      <a href="mailto:contatolterra@gmail.com">
                        contatolterra@gmail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2">
                      <FontAwesomeIcon
                        className="text-[22px]"
                        icon={faWhatsapp}
                      />
                    </td>
                    <td>
                      <span className="font-semibold">WhatsApp: </span>
                      <a href="https://wa.me/5522992885067">(22) 99288-5067</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2">
                      <FontAwesomeIcon
                        className="text-[22px]"
                        icon={faInstagram}
                      />
                    </td>
                    <td>
                      <span className="font-semibold">Instagram: </span>
                      <a href="https://ig.me/m/luisterrax">@luisterrax</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="h-48"></div>
            <button className="border border-black rounded-full w-9 h-9 pt-[5px]">
              <Link
                href="/
              "
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
