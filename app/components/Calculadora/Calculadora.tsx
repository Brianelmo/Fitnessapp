'use client'

import style from "./calculadora.module.css";
import InputCalculadora from "./CalculadoraInputs/InputCalculadora";
import  {useState} from 'react';

const LevelActivity = [
  "Sedentario",
  "Ejercicio 2 a 3 veces por semana",
  "ejercicio 3 a 4 veces por semana",
  "ejercicio 5 a 6 veces por semana",
];

const Objetive = [
  "Subir de peso / Volumen",
  "Dismunuir peso / Definicion",
  "Mantener peso / Mantenimiento",
];







export default function Calculadora() {
  
  const [sexo, setSexo] = useState('');
  const [edad, setEdad] = useState<number>();
  const [peso, setPeso] = useState<number>();
  const [altura, setAltura] = useState<number>();

  const getValues = () => {
    
  }


  return (
    <div>
      <header className={style.header}>
        <h2 className={style.title}>Calculadora de calorias</h2>
        <p>Calcula las calorias que debes consumir para cumplir tu objetivo</p>
      </header>
      <form className={style.form} action="">
        <div>
          <label htmlFor="">Tu sexo</label>
          <input type="text" placeholder="Indica tu sexo" />
        </div>

        <div>
          <label htmlFor="">Tu edad</label>
          <input type="number" placeholder="Indica tu edad" />
        </div>

        <div>
          <label htmlFor="">Tu peso</label>
          <input type="select" placeholder="Indica tu peso" />
        </div>

        <div>
          <label htmlFor="">Tu altura</label>
          <input type="number" placeholder="Indica tu altura en cm" />
        </div>

        <InputCalculadora
          label="Cual es tu nivel de actividad fisica diaria?"
          type="text"
          placeholder="Indica tu nivel de actividad diaria"
          opcionMenu={LevelActivity}
        />

        <InputCalculadora
          label="Cual es tu objetivo?"
          placeholder="Indica tu objetivo"
          type="text"
          opcionMenu={Objetive}
        />

        <button className={style.button}>Calcular</button>
      </form>

      <div>
        <h3>Resultado</h3>
        <h4></h4>
        <p></p>
      </div>
    </div>
  );
}
