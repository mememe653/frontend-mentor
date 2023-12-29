import "./Header.css";

export default function Header() {
  function toggleTheme() {
    if (document.body.className === "light-theme") {
      document.body.className = "dark-theme";
    } else {
      document.body.className = "light-theme";
    }
  }

  return (
    <header>
      <h1>Todo</h1>
      <button className="toggle-theme" onClick={toggleTheme}></button>
    </header>
  );
}
