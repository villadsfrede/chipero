import React from "react";
import { navLinks } from "../utils/data";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <h3>Example</h3>
      </div>
      <nav>
        {navLinks.map((link, index) => {
          return (
            <ul>
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