import { Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import style from './footer.module.css'


export default function Footer() {


    return(
        <>
        <footer className={style.footer}>
            <div className={style.iconDiv}>
                <Instagram sx={{color: 'rgb(94, 109, 130)', fontSize: '25px'}}/>
                <Twitter sx={{color:'rgb(94, 109, 130)', fontSize: '25px'}}/>
                <LinkedIn sx={{color:'rgb(94, 109, 130)', fontSize: '25px'}}/>
            </div>
            <div>
                <form className={style.form} action="">
                    <input className={style.input} type="text" placeholder='Ingresa tu email' />
                    <input className={style.button} type="submit" value={'Suscribirse'}/>
                </form>
            </div>
        </footer>
        </>
    ) 
}