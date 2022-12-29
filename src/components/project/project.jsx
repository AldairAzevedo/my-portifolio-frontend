import "./project.css";

export const Project = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Projetos</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Amazonsoft</h1>
          <h3 className="position">Equipe de desenvolvimento de softwares</h3>
          <h4 className="about">
          Possuo um projeto de uma equipe de desenvolvimento de aplicações Web e Mobile chamado de "Amazonsoft".
          Nosso processo de desenvolvimento vai desde o UI/UX até a parte de codagem das camadas da aplicação. Para a arquitetura de hospedagem das aplicações utilizamos a AWS (Amazon Web Services) com todos os recurso de segurança e disponibilidade (VPC, Load Balance e Auto Scaling). Estamos abertos a fechar contratações PJ ou parcerias! Qualquer coisa, basta nos contatar 😊!
          </h4>
          <a href="https://www.amazonsoft.tech/" className="contact-member" target={"blank"}>
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};
