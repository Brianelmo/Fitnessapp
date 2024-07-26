import style from "./page.module.css";
import Cardinfo from "./components/CardInfo/Cardinfo";
import { Icon } from "@mui/material";
import { Calculate, CalendarMonth, FitnessCenter } from "@mui/icons-material";
import Calculadora from "./components/Calculadora/Calculadora";

export default function Home() {
  return (
    <>
      <main>
        <header className={style.header}>
          <h1>Fitness World</h1>
          <p>Blog destinado a ayudarte en tu camino fitness</p>
        </header>
        <section className={style.sectionCards}>
          <Cardinfo
            title="Rutinas"
            text="Rutinas generales para personas que buscan rutinas sencillas"
            icon={FitnessCenter}
          />
          <Cardinfo
            title="Calculadora"
            text="Calculador de calorias para conocer tus objetivos"
            icon={Calculate}
          />
          <Cardinfo
            title="Organizador"
            text="Organiza tu rutina teniendo en cuenta todas la variables"
            icon={CalendarMonth}
          />
          
        </section> 

        <section className={style.sectionCalculator}>
          <div>
            <Calculadora/>
          </div>
        </section>
      </main>
    </>
  );
}
