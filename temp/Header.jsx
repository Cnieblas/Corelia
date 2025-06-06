const reactDescriptions = ['Good Morning,', 'Good Evening,', 'Good night,'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function getTheTime(){
  return Console.log(Date.getTime());
}

function Header() {

    return (
      <header>
        <img src="src/assets/coreliaText.png" alt="Stylized atom" />
        <h1></h1>
        <p>
          {reactDescriptions[genRandomInt(3)]} Make your wellness journey begin once and for all!
        </p>
      </header>
    );
  }

  export default Header;