"use client";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import styles from "./navmobile.module.css";
import { useState } from "react";
import MenuMobile from "./MenuMobile/MenuMobile";

export default function NavMobile() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav>
        {showMenu && <MenuMobile func={toggleMenu} />}

        {!showMenu && (
          <div className={styles.navMobile}>
            <span className={styles.span}>Fitness World</span>
            <div onClick={toggleMenu}>
              <MenuRoundedIcon sx={{color:'white'}} className={styles.buttonMenu} />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
