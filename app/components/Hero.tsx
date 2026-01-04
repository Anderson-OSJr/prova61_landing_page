import { Sparkles } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pt-24 px-6 flex flex-col">
      {/* Balloon */}
      <div className="flex flex-row gap-3 w-fit border-1 border-amber-600 py-2 px-4 rounded-4xl bg-blue-50 items-center my-4">
        <div className="text-amber-700/80 ">
          <Sparkles size={18} />
        </div>
        <div className="text-blue-900">
          Soluções Digitais que Trazem Resultados
        </div>
      </div>

      {/* Big size text */}
      <div className="my-10">
        <span className="text-blue-800 text-4xl font-bold">
          Transforme seus negócios com a
        </span>
        <span className="text-amber-700/70 text-4xl font-bold ml-2">
          Prova 61
        </span>
      </div>

      {/* Paragraph */}
      <div>
        <p className="text-xl mb-6 text-blue-900">
          Criamos sites de última geração, landing pages e soluções SaaS que
          elevam sua marca e aceleram seu crescimento.
        </p>
      </div>
      <div className="flex flex-row gap-6 mt-4 mb-6 border-b-1 border-amber-200 pb-8">
        <button className="flex flex-row items-center text-xl gap-2 p-6 rounded-lg bg-gradient-to-r from-blue-900 to to-blue-600 text-white hover:opacity-90 hover:shadow-lg">
          <p>Inicie seu projeto</p>
          <FaArrowRight size={20} />
        </button>
        <button className="border rounded-lg text-xl text-blue-900 hover:shadow-lg p-6">
          Veja Nosso Trabalho
        </button>
      </div>
    </div>
  );
};
export default Hero;
