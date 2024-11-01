import Link from  "next/link";
import React from "react";

export default  function Products() {
  return(
    <div >
      <h1 >Products</h1>
      <Link href={"/43918.jpg"}>
      <ul>
        <li>
          <h2>Laptop</h2> 
        
        </li>
      </ul>
      </Link>

    </div>
  )
}