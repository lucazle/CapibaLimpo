const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
}) 

class HelloMessage extends React.Component {
    render() {
      return React.createElement(
        "div",
        null,
        "Hello ",
        this.props.name
      );
    }
  }
  
  root.render(React.createElement(HelloMessage, { name: "Taylor" }));