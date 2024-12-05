import FeaturedCoursesOrg from "../organisms/FeaturedCoursesOrg";

const LandingFeaturedCourses = () => {
  const cards = [
    {
      id: 0,
      img: "https://img.freepik.com/foto-gratis/joven-estudiante-asiatico-cuadernos-pie-sudadera-naranja-mirando-camara-posando-sobre-azul_1258-168657.jpg?t=st=1732417497~exp=1732421097~hmac=03dc44117331ddee8ea96964478ad44d13731e57c0c16ac347ab734c3312db95&w=900",
      title: "Comunity Manager de 0 a experto",
      author: "Juan Nieves",
      rate: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      prize: 5500,
    },
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdtIA4rbyUjL6q7YcrGM7LZVsn9XrI_-dsLg&s",
      title: "Programación para principantes",
      author: "Kevin Panceta",
      rate: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      prize: 3500,
    },
    {
      id: 2,
      img: "https://i.ytimg.com/vi/kShyDBXyFbk/maxresdefault.jpg",
      title: "Guitarra para todos",
      author: "Nicolas Jaula",
      rate: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      prize: 3500,
    },
    {
      id: 3,
      img: "https://www.eluniverso.com/resizer/NSmSvFowcogVd7euP4xstuG5rN8=/arc-anglerfish-arc2-prod-eluniverso/public/6A6XA7JKURDHLPKN77G42JQROA.png",
      title: "Horoscopo de 0 a full profeta",
      author: "Britanica Lanzas",
      rate: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      prize: 3500,
    },
    {
      id: 4,
      img: "https://media.istockphoto.com/id/936903524/es/vector/pizarra-con-f%C3%B3rmulas-cient%C3%ADficas-y-c%C3%A1lculos-en-f%C3%ADsica-y-matem%C3%A1ticas-puede-ilustrar-temas.jpg?s=612x612&w=0&k=20&c=VV6U6x-O3ivdhj8hyUZ478Mrwag4exOhw5FMPSdJPiM=",
      title: "Introducción a la Fisica Cuantica",
      author: "Leonardo de la Cabra",
      rate: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      prize: 3500,
    },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-1 justify-start items-center bg-light-background dark:bg-dark-background">
      <h2 className="">Desarrolla todas tus habilidades</h2>
      <p>
        Paragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="w-full">
        <FeaturedCoursesOrg cards={cards} />
      </div>
    </div>
  );
};

export default LandingFeaturedCourses;
