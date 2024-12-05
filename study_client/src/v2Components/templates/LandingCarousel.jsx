import CarouselOrg from "../organisms/CarouselOrg";

const LandingCarousel = () => {
  const slides = [
    {
      src: "https://img.freepik.com/foto-gratis/joven-estudiante-asiatico-cuadernos-pie-sudadera-naranja-mirando-camara-posando-sobre-azul_1258-168657.jpg?t=st=1732417497~exp=1732421097~hmac=03dc44117331ddee8ea96964478ad44d13731e57c0c16ac347ab734c3312db95&w=900",
      label: "First slide label",
      description:
        "Some representative placeholder content for the first slide.",
    },
    {
      src: "https://img.freepik.com/foto-gratis/estudiante-hombre-fabricacion-pequeno-senal_1368-9042.jpg?t=st=1732417476~exp=1732421076~hmac=6e0209dcd6d13972569cb0c5a0bd8cd845c356eb256fcfc4de296a5678983130&w=360",
      label: "Second slide label",
      description:
        "Some representative placeholder content for the second slide.",
    },
    {
      src: "https://img.freepik.com/foto-gratis/joven-estudiante-asiatico-cuadernos-pie-sudadera-naranja-mirando-camara-posando-sobre-azul_1258-168657.jpg?t=st=1732417497~exp=1732421097~hmac=03dc44117331ddee8ea96964478ad44d13731e57c0c16ac347ab734c3312db95&w=900",
      label: "Third slide label",
      description:
        "Some representative placeholder content for the third slide.",
    },
  ];

  return (
    <div className="relative mt-2 bg-light-primary dark:bg-dark-primary w-full h-full overflow-hidden  rounded-tl-lg rounded-br-lg">
      <CarouselOrg slides={slides} />
    </div>
  );
};

export default LandingCarousel;
