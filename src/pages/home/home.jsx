import './home.css';
import img from '../../assets/perfil.jpg';
import {Buttons} from '../../components/button/button';
import { BsMouse } from 'react-icons/bs';

export const Home = () => {
  return (
    <div className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>
        <div className='format'>
          <img src={img} alt='Aldair' />
        </div>
      </div>
      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>rolar para baixo</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>
      <h2>
        <span>Sobre mim</span> <br />
        <p className='paragraph'>
          Olá Prazer! Sou Aldair Azevedo. Apaixonado por tecnologia. Curso <i>Engenharia da Computação 9° semestre noturno</i>. Atualmente tenho foco em desenvolvimento de sistemas, mas especificamente <i>aplicações Web com as tecnologias mais atuais do mercado</i>, entre elas, aplicações completa com <i>JavaScript de ponta a ponta</i>. Para isso, vou desde de o <i>UI/UX</i> do sistema utilizando <i>XD</i> ou <i>Figma</i>, passando pela codagem das camadas com <i>ReactJS</i> para o frontend e <i>NodeJS</i> para backend baseado em API <i>Rest</i> e <i>WebSocket</i>, chegando até a modelagem e automatização do banco de dados com <i>MySQL</i>, <i>SQLServer</i> com <i>T-SQL</i> e <i>Oracle com PL/SQL</i>. Para deploy da aplicação, utilizo normalmente a <i>Amazon Web Services (AWS)</i>, deixando assim a aplicação extremamente segura e disponível com as mais diversas ferramentas da AWS destancando entre elas: <i>VPC, Load Balance e Auto Scaling</i>. Possuo também conhecimento em Hardware, automatizando processos com <i>Arduino</i> e programação de <i>CLP</i> com a linguagem <i>ladder</i>. Para agilizar o processo de produção da aplicação e aumentar a qualidade, utilizo a metodologia ágil <i>Scrum</i>.
        </p>
      </h2>
      <Buttons />
    </div>
  );
};
