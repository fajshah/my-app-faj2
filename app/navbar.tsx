
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
  
        <div>
          <ul>
        <h5>LOGO </h5>
     <li> <Link href="/">Home</Link></li>
     <li> <Link href="/contact">Contact</Link> </li>
      <li> <Link href="/about">About </Link> </li>
     <li> <Link href={"/products"}>Products</Link> </li>
    </ul>
    </div>

  )
}
export default NavBar