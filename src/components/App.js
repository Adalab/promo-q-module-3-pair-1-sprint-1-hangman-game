import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setlastLetter] = useState("");
  const [word, setWord] = useState('katakroker');
  const [userLetters, setUserLetters] = useState([]);

  const regexpLetter = /^[a-zA-Zñáéíóúü]$/


  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter) => {
      if (userLetters.includes(letter)) { 
        return <li className="letter">{letter}</li>
    } else { 
      return <li className = "letter"></li>
    }});
};

  // const renderErrorLetters = () => {
  //   return (userLetters.filter((letter) => {
  //     if ()
  //   })
  // )};

  const handleClick = () => {
  setNumberOfErrors(numberOfErrors + 1);
};
  const handleInput = (ev) => {
  const inputValue = ev.currentTarget.value;
  const variableX = regexpLetter.test(inputValue); // devuelve true o false
  console.log(variableX);
  if (regexpLetter.test(inputValue)) {
    setlastLetter(inputValue);
    userLetters.push(inputValue);
  } else { setlastLetter("") };


};

/*match devuelve las ocurrencias de la Expresión Regular*/

return (
  <div className="App">
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>

      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>

            <ul className="letters">
              {renderSolutionLetters()}
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              {/* {renderErrorLetters()} */}
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              onChange={handleInput}
              value={lastLetter}
            />
          </form>
        </section>
        <section className={"dummy error-" + numberOfErrors}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
        <button onClick={handleClick}>Incrementar</button>
      </main>
    </div>
  </div>
);
}

export default App;
