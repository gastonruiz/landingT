import { FileBadge, Laptop, MessageCircle, LibraryBig, PlugZap, Mail } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Nosotras", href: "#" },
  { label: "Cursos", href: "#" },
  { label: "Galeria", href: "#" },
  { label: "Contacto", href: "#" },
];

export const testimonials = [
  {
    user: "Juan",
    company: "Excelente material",
    image: user1,
    text: "Encontre mucha informacion util a la hora de mejorar mis habilidades como dibujante.",
  },
  {
    user: "Ana",
    company: "Nuevos recursos",
    image: user2,
    text: "Esperaba mejorar mis tecnicas al dibujar y gane mucho mas que solo eso",
  },
  {
    user: "David",
    company: "Innovacion en aprendizaje",
    image: user3,
    text: "Trabajando en conjunto con las profes , mejore considerablemente mis productos finales de ilustracion, lo que aumento mis ventas.",
  },
  {
    user: "Rosa",
    company: "Feedback dinamico",
    image: user4,
    text: "Obtuve respuestas rapidas y satisfactorias para mejorar de manera paulatina y consisa, entendiendo mi propio progreso",
  },
  {
    user: "Connie",
    company: "Creatividad sin limites",
    image: user5,
    text: "Cambiando la mentalidad de obtener un resultado especifico, aprendi a ser mas abierta a las posibilidades que me brinda la obra en si misma.",
  },
  {
    user: "Emilia",
    company: "Autoexploracion del arte",
    image: user6,
    text: "Liuego de una serie de preguntas orientadas a mi trabajo, pude obtener una definicion del misma, lo que me ayudo a direccionarlo hacia donde yo realmente queria.",
  },
];

export const features = [
  {
    icon: <Laptop />,
    text: "Modalidad a distancia",
    description:
      "Acceso a las lecciones en todo tiempo y lugar. Esta modalidad se ajusta completamente a tus tiempos.",
  },
  {
    icon: <FileBadge />,
    text: "Suma habilidades",
    description:
      "Experimentar es necesario, pero muchas veces adquirir nuevas habilidades puede llevar demasiado.",
  },
  {
    icon: <MessageCircle />,
    text: "Contanos tu objetivo",
    description:
      "Contactanos y recibe una devolucion sobre tu trabajo y recomendaciones para continuar mejorando.",
  },
  {
    icon: <LibraryBig />,
    text: "Libreria de recursos",
    description:
      "Te ofrecemos una seccion de ebooks como material complementario completamente gratis que vamos actualizando mes a mes",
  },
  {
    icon: <PlugZap />,
    text: "Clases y cursos descargables",
    description:
      "la ventaja de no depender estar online para tomar tu clase.",
  },
  {
    icon: <Mail />,
    text: "Mejoremos la pagina",
    description:
      "Escribinos sugerencias sobre cursos y clases que necesites, para agregarlos en la pagina o bien subirlos en formato ebook.",
  },
];


