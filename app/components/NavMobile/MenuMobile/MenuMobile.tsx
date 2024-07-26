import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import style from "../navmobile.module.css";

type func = () => void;

interface Props {
  func: func;
}

function MenuMobile({ func }: Props) {
  return (
    <div className={style.menuMobile}>
      <div>
        <div className={style.headerMenuMobile}>
          <span>Fitness World</span>
        </div>
        <ul className={style.listMenu}>
          <div onClick={func} className={style.buttonClose}>
            <CloseRoundedIcon />
          </div>
          <div>
            <li>Home</li>
            <li>Rutinas</li>
            <li>Informacion</li>
            <li>Calculadora</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default MenuMobile;
