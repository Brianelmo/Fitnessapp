"use client";
import { ArrowDownwardRounded } from "@mui/icons-material";
import style from "./inputcalc.module.css";
import { useState } from "react";

interface Props {
  type: string;
  label: string;
  placeholder: string;
  opcionMenu: string[];
}

export default function InputCalculadora({
  label,
  opcionMenu,
}: Props) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [value, setValue] = useState<string | null>();

  const getValue = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = e.currentTarget;
    const valueTarget = value.textContent;
    setValue(valueTarget);
    console.log(valueTarget);
  };

  return (
    <>
      <div className={style.inputDiv}>
        <label htmlFor="">{label}</label>
        <div className={style.inputDiv}>
          <span onClick={toggleMenu} className={style.input}>
          <ArrowDownwardRounded sx={{fontSize:".9rem"}}/>
          {value} 
          </span>
        </div>
        <div className={style.menu}>
          {showMenu && (
            <ul className={style.list}>
              {opcionMenu.map((item) => (
                <li className={style.input} onClick={getValue}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
