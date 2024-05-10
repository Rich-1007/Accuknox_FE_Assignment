import React, { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <div className={navbar ? "bg-green-300 fixed top-0 flex w-full" : " bg-red-300 fixed top-0 flex w-full "}>
        <p>Home </p>
        <p>about</p>
        <p>contact us</p>
        <p>Technologies</p>
        <p>Our Blogs</p>
      </div>

      <div className="m-20 bg-green-200 flex flex-col gap-12">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          eligendi, cumque natus, voluptas soluta aspernatur nemo sequi id vel
          repudiandae expedita necessitatibus nesciunt doloribus atque pariatur
          non ut explicabo deserunt! Omnis possimus, excepturi id voluptatum
          eveniet odit nisi, nostrum hic eos est sunt. Voluptas dignissimos
          quasi non, molestias, reiciendis iure, id rem quam soluta laborum
          possimus et veniam saepe suscipit? Asperiores voluptate, libero
          laborum sed perspiciatis saepe praesentium veritatis nobis voluptatum
          fuga rerum est dolorum optio nihil iste deleniti exercitationem
          labore. Neque sed ab non itaque laboriosam libero quo sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          eligendi, cumque natus, voluptas soluta aspernatur nemo sequi id vel
          repudiandae expedita necessitatibus nesciunt doloribus atque pariatur
          non ut explicabo deserunt! Omnis possimus, excepturi id voluptatum
          eveniet odit nisi, nostrum hic eos est sunt. Voluptas dignissimos
          quasi non, molestias, reiciendis iure, id rem quam soluta laborum
          possimus et veniam saepe suscipit? Asperiores voluptate, libero
          laborum sed perspiciatis saepe praesentium veritatis nobis voluptatum
          fuga rerum est dolorum optio nihil iste deleniti exercitationem
          labore. Neque sed ab non itaque laboriosam libero quo sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          eligendi, cumque natus, voluptas soluta aspernatur nemo sequi id vel
          repudiandae expedita necessitatibus nesciunt doloribus atque pariatur
          non ut explicabo deserunt! Omnis possimus, excepturi id voluptatum
          eveniet odit nisi, nostrum hic eos est sunt. Voluptas dignissimos
          quasi non, molestias, reiciendis iure, id rem quam soluta laborum
          possimus et veniam saepe suscipit? Asperiores voluptate, libero
          laborum sed perspiciatis saepe praesentium veritatis nobis voluptatum
          fuga rerum est dolorum optio nihil iste deleniti exercitationem
          labore. Neque sed ab non itaque laboriosam libero quo sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          eligendi, cumque natus, voluptas soluta aspernatur nemo sequi id vel
          repudiandae expedita necessitatibus nesciunt doloribus atque pariatur
          non ut explicabo deserunt! Omnis possimus, excepturi id voluptatum
          eveniet odit nisi, nostrum hic eos est sunt. Voluptas dignissimos
          quasi non, molestias, reiciendis iure, id rem quam soluta laborum
          possimus et veniam saepe suscipit? Asperiores voluptate, libero
          laborum sed perspiciatis saepe praesentium veritatis nobis voluptatum
          fuga rerum est dolorum optio nihil iste deleniti exercitationem
          labore. Neque sed ab non itaque laboriosam libero quo sequi.
        </p>
      </div>
    </div>
  );
};

export default Navbar;
