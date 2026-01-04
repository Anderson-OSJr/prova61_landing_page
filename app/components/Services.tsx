import { Globe, Layout, Boxes, Smartphone, Code, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento para Web",
    description:
      "Websites personalizados desenvolvidos com as tecnologias mais recentes, otimizados para performance e experiência do usuário.",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "Páginas de destino focadas em alta conversão, desenhadas para atrair potenciais clientes e acelerar o crescimento da sua empresa.",
  },
  {
    icon: Boxes,
    title: "Soluções Saas",
    description:
      "Plataformas SaaS (Software como Serviço) escaláveis, adaptadas às necessidades e objetivos do seu negócio.",
  },
  {
    icon: Smartphone,
    title: "Responsividade de Tela",
    description:
      "Layouts totalmente responsivos que oferecem uma experiência contínua em qualquer dispositivo.",
  },
  {
    icon: Code,
    title: "Desenvolvimento Adequado às Necessidades",
    description:
      "Soluções de software sob medida, desenvolvidas para resolver os desafios únicos do seu negócio.",
  },
  {
    icon: Zap,
    title: "Otimização de Performance",
    description:
      "Websites e aplicativos ultrarrápidos, otimizados para máxima velocidade e eficiência.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-blue-100/50 px-6 pb-8">
      <div className="flex flex-col items-center">
        <div className="rounded-4xl bg-white p-4 mt-18 mb-8 text-amber-700/90 text-xl">
          Nossos Serviços
        </div>
        <div className="text-blue-900 text-4xl font-bold mb-6">
          Soluções Digitais Abrangentes
        </div>
        <div className="text-blue-900 text-xl mb-16">
          Da concepção ao lançamento, oferecemos serviços completos para
          transformar sua ideia digital em realidade
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-blue-600 w-fit rounded-lg p-3 shadow-lg shadow-blue-500">
                <service.icon size={30} className="text-white" />
              </div>
              <div className="mt-6 text-2xl text-blue-900 font-medium">
                {service.title}
              </div>
              <div className="mt-6 text-lg text-blue-900">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
