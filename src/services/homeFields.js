import grancanaria from "../assets/img/grancanariastadium.jpg"; // Imagen del estadio de Gran Canaria
import zardo from "../assets/img/zardo.jpg"; // Imagen del campo de fútbol El Zardo
import telde from "../assets/img/telde.jpg"; // Imagen del campo de fútbol de Telde
import sietepalmas from "../assets/img/basketsietepalmas.jpg"; // Imagen del pabellón de baloncesto de Siete Palmas

export const HOMEFIELDS = [
    {
        name: "Estadio de Gran Canaria",
        location: "Las Palmas de Gran Canaria, España",
        description: "Estadio principal de la ciudad, sede de la UD Las Palmas, con capacidad para 33,070 espectadores. Ideal para partidos de fútbol de alto nivel y eventos deportivos importantes.",
        sport: "Fútbol",
        image: grancanaria, // Imagen del Estadio de Gran Canaria
        rating: 4.8
    },
    {
        name: "Pabellón Insular Santiago Martín (Siete Palmas)",
        location: "Las Palmas de Gran Canaria, España",
        description: "Pabellón cubierto de baloncesto, sede de la Liga ACB. El lugar perfecto para disfrutar de partidos de baloncesto de alto nivel. Además, alberga eventos deportivos y conciertos.",
        sport: "Baloncesto",
        image: sietepalmas, // Imagen del Pabellón de Siete Palmas
        rating: 4.7
    },
    {
        name: "Campo de Fútbol de Telde",
        location: "Telde, Gran Canaria, España",
        description: "Un campo de fútbol accesible para el público, con césped sintético de alta calidad. El lugar perfecto para partidos informales, entrenamientos y ligas locales. Bien ubicado y de fácil acceso.",
        sport: "Fútbol",
        image: telde, // Imagen del Campo de Fútbol de Telde
        rating: 4.7
    },
    {
        name: "Campo de Fútbol El Zardo",
        location: "Las Palmas de Gran Canaria, España",
        description: "Este complejo deportivo tiene varias canchas de fútbol con césped artificial, accesibles para la comunidad local. Es uno de los sitios preferidos para entrenamientos y partidos recreativos.",
        sport: "Fútbol",
        image: zardo, // Imagen del Campo de Fútbol El Zardo
        rating: 4.6
    }
];
