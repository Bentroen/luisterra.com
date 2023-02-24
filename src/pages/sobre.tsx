import Head from "next/head";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <main className="h-full">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-12 w-full h-[24rem] md:h-full md:col-span-5 flex">
            <img
              className="object-cover w-full h-full [object-position:0_20%] md:object-center"
              src="/background2.jpeg"
              alt="Luis Terra"
            />
          </div>
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center space-y-12 items-left p-24">
            <div className="flex justify-between items-center">
              <h1 className="text-5xl font-semibold">Sobre</h1>
              <FontAwesomeIcon className="text-3xl" icon={faMusic} />
            </div>
            <p className="text-xl font-light text-justify">
              <span className="font-semibold">Luis Terra</span>, cantor,
              compositor, instrumentista e produtor musical, nascido em Araruama
              (RJ), em 13 de outubro de 1998. Desde a infância, interessado por
              música, tendo como suas maiores influências Marina Lima, Cazuza,
              Angela Ro Ro e Caetano Veloso, começou a cantar e estudar violão
              aos 11 anos de idade. Iniciou sua carreira artística em 2012, nos
              palcos de bares, restaurantes e eventos culturais, apresentando
              clássicos da Música Popular Brasileira. Influenciado pela
              literatura, reuniu escritos autorais que se dividiam por entre
              crônicas e poesias. Publicou no ano de 2017, pela Editora
              Autografia, <span className="italic">“Abrigo”</span> — seu
              primeiro livro — que culminou com uma noite de autógrafos e uma
              série de espetáculos costurados com canções e poesias a fim de
              tratar de temas referentes à saúde mental. Em 2020, após um
              mergulho intenso no universo da música eletrônica, lançou{" "}
              <span className="italic">“Terra”</span>, seu primeiro EP com
              canções autorais, seguidos dos{" "}
              <span className="italic">singles</span>{" "}
              <span className="italic">“O Vírus”</span>, da autoria de Fátima
              Guedes; e <span className="italic">“Menino Luz”</span>, mostrando
              suas vertentes de compositor, intérprete e produtor musical.
            </p>
            <button className="border border-black rounded-full w-fit pb-1 pt-2 px-2.5">
              <Link href="/">🡠</Link>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
