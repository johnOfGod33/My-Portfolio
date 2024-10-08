import Menu from "@/assets/icon/Menu";
import { useState } from "react";

const Header = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <header className="h-auto w-screen bg-background z-10 fixed px-8 flex flex-col items-start md:flex-row md:justify-between md:items-center">
      <section className="p-5 flex items-center justify-center">
        <span className="text-primary font-logo text-5xl">Jean de dieu</span>
      </section>
      <section className="fixed top-3 right-0 p-5 md:hidden">
        <Menu menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
      </section>
      <section
        className="hidden p-5 md:block"
        style={menuIsActive ? { display: "block" } : {}}
      >
        <nav>
          <ul className="flex flex-col justify-between md:flex-row">
            <li className="mb-5 md:mb-0 md:px-5">About</li>
            <li className="mb-5 md:mb-0 md:px-5">Project</li>
            <li className="mb-5 md:mb-0 md:px-5">Contact</li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
