import React from "react";
import { navLinks } from "../utils/data";
import Link from "next/link";
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div>

      </div>
      <nav className={styles.navbar}>
        {navLinks.map((link, index) => {
          return (
            <ul key={index}>
              <Link href={link.path}>
                <li key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
      </nav>
    </header>
  );
}