import { SvgIconComponent } from '@mui/icons-material';
import style from './cardinfo.module.css';


interface Props {
    text:string,
    icon:SvgIconComponent;
    title:string
}




export default function Cardinfo({icon:Icon, text, title}:Props) {
  return (
    <div className={style.card}>
      <Icon sx={{fontSize:'2.5rem', color:'rgb(37, 99, 235)'}}/>
      <h3 className={style.title}>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

