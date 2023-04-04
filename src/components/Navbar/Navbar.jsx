
//import "./Navbar.css"

import styles from "./Navbar.module.css"

export const Navbar =( {color} )=>{

 

    return ( 
        <div className={styles.containerNavbar}>
                <ul>
                    <li style={{backgroundColor: color}}>productos</li>
                    <li>servicios</li>
                    <li>contactos</li>
                </ul>
         </div>
    );
};