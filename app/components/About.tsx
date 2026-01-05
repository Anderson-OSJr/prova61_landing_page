import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const aboutList = [
    {
      index: 1,
      description: "Equipe especialista de desenvolvedores e designers",
    },
    { index: 2, description: "Metodologia ágil de desenvolvimento" },
    { index: 3, description: "Comunicação transparente do início ao fim" },
    { index: 4, description: "Entrega no prazo garantida" },
    { index: 5, description: "Suporte e manutenção pós-lançamento" },
    {
      index: 6,
      description: "Tecnologia de ponta (cutting-edge technology stack)",
    },
  ];
  return (
    <section
      id="about"
      className="grid grid-cols-1 p-10 md:grid-cols-2 mt-8 items-center"
    >
      <div className="">
        <Image
          src="/equipe.png"
          alt="Equipe Prova 61"
          width={500}
          height={500}
          className="border-0 rounded-lg shadow-md shadow-blue-950 transition-all duration-100 hover:-translate-y-2"
        ></Image>
      </div>
      <div>
        <div className="rounded-4xl bg-blue-100/50 w-fit p-4 mt-18 mb-8 text-amber-600/80 text-xl">
          Por Que Nos Escolher
        </div>
        <div>
          <h1 className="text-blue-900 text-4xl font-bold mb-6">
            Construímos Excelência Digital para Um Mundo Moderno
          </h1>
        </div>
        <div>
          <p className="text-blue-900 text-xl mb-10">
            Na Prova 61, combinamos criatividade com expertise técnica para
            entregar soluções digitais que geram um impacto real. Nossa equipe é
            apaixonada por transformar ideias em aplicações poderosas e fáceis
            de usar.
          </p>
        </div>
        <div className="mb-10">
          {aboutList.map((aboutText) => (
            <div
              key={aboutText.index}
              className="flex flex-row items-center gap-3"
            >
              <div>
                <CheckCircle2 className="text-amber-600/80" size={20} />
              </div>
              <div className="text-lg text-blue-900">
                {aboutText.description}
              </div>
            </div>
          ))}
        </div>
        {/* <div>
          <button className="text-xl p-6 rounded-lg bg-gradient-to-r from-blue-900 to to-blue-600 text-white hover:opacity-90 hover:shadow-lg">
            Saiba Mais Sobre Nós
          </button>
        </div> */}
      </div>
    </section>
  );
};
export default About;
