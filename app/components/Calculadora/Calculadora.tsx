import style from './calculadora.module.css'


export default function Calculadora(){

    return(
        <div>
            <header className={style.header}>
                <h2 className={style.title}>Calculadora de calorias</h2>
                <p>Calcula las calorias que debes consumir para cumplir tu objetivo</p>
            </header>
            <form className={style.form} action="">

                <label htmlFor="">Tu sexo</label>
                <input type="" placeholder='Indica tu sexo'/>

                <label htmlFor="">Tu edad</label>
                <input type="number" placeholder='Indica tu edad'/>

                <label htmlFor="">Tu peso</label>
                <input type="number" placeholder='Indica tu peso' />

                <label htmlFor="">Tu altura</label>
                <input type="number" placeholder='Indica tu altura'/>

                <label htmlFor="">Cual es tu nivel de actividad fisica diaria?</label>
                <input type="text" />

                <label htmlFor="">Cual es tu objetivo?</label>
                <input type="text" /> 

                <button>Calcular</button>
            </form> 

            <div>
                <h3>Resultado</h3> 

            </div>
        </div>
    )
}