import style from "../todo.module.css";

function Moon() {
  return (
    <img
      src="../Assests/Images/icon-moon.svg"
      alt="Moon icon"
      className={style.icon}
    />
  );
}

function Sun() {
  return (
    <img
      src="../Assests/Images/icon-sun.svg"
      alt="Sun icon"
      className={style.icon}
    />
  );
}

function Header({ theme, toggleTheme, headerRef }) {
  return (
    <div
      ref={headerRef}
      className={
        theme ? style.darkdesktopbackground : style.lightdesktopbackground
      }
    >
      <header className={style.header}>
        <h1 className={style.light_head_text}>TODO</h1>
        <button onClick={toggleTheme}>{theme ? <Sun /> : <Moon />}</button>
      </header>
    </div>
  );
}

export default Header;
