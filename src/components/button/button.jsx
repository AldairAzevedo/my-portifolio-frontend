import "./button.css";

export const Buttons = () => {
  return (
    <div className="container button-container">
      <a href="#about" className="btn pri">
        Trocar música?
      </a>
      <a href="#contact" className="btn sec">
        Entrar em contato
      </a>
    </div>
  );
}
