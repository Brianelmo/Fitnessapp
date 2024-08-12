import style from "./page.module.css";
import Cardinfo from "./components/CardInfo/Cardinfo";
import { Calculate, CalendarMonth, FitnessCenter } from "@mui/icons-material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className={style.main}>
        <header className={style.header}>
          <div className={style.headerDiv}>
            <h1>Fitness World</h1>
            <p>Blog destinado a ayudarte en tu camino fitness</p>
          </div>
        </header>
        <section className={style.aboutSection}>
          <div className={style.imageContainer}>
            
          </div>
          <div>
            <h3>Sobre Nosotros</h3>
            <p>Esta página web está diseñada para ayudar a quienes recién comienzan en el gimnasio, ofreciéndote una mano al simplificar conceptos complejos para que los entiendas y puedas utilizarlos a tu favor al entrenar. Dentro de la misma web, encontrarás herramientas útiles para mejorar y alcanzar tus objetivos físicos en tu día a día.</p>
          </div>
        </section>
        <section className={style.sectionCards}>
          <Cardinfo
            title="Rutinas"
            text="Empieza tu viaje fitness con nuestras rutinas diseñadas para principiantes. Sigue ejercicios simples y efectivos que te ayudarán a desarrollar fuerza y resistencia desde el primer día."
            icon={FitnessCenter}
            href="./Rutinas"
          />
          <Cardinfo
            title="Calculadora"
            text="Calcula tus necesidades calóricas diarias con precisión usando la fórmula de Harris-Benedict. Introduce tus datos y obtén una guía personalizada para alcanzar tus metas de salud y fitness."
            icon={Calculate}
            href="./Calculadora"
          />
          <Cardinfo
            title="Organizador"
            text="Diseña y planifica tus propias rutinas de ejercicio con nuestro organizador flexible. Personaliza tus entrenamientos usando las variables y datos que prefieras para optimizar tu progreso y alcanzar tus metas."
            icon={CalendarMonth}
            href="./Organizador"
          />
        </section>
      </main>
    </>
  );
}
