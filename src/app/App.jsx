import './App.css';


function App() {
  return (
    //<div className="App">
    //  <h1>Hello, react 🚀</h1>
    //</div>

    <div className='App'>
      <header class='header'>
        <h1>My profile</h1>
      </header>

      <main class='main'>
        <div class='about_me'>
          <img src="/images/cat.jpg" alt="cat"  className='image'/>
          <h2>Hi! I'm Katja</h2>
          <div>My hobbys is traveling and drawing.</div>
          <div>I'm Junior fullstack developer.</div>
        </div>
      </main>

      <footer>
        <div class='footer_contacts'>
          <h2>Contacts</h2>
          <div class='tel'>
            +49 176 627 98 371
          </div>
          <div class='email'>
            katjawmr92@gmail.com
          </div>
        </div>
        <p>© 2024 Katja</p>
      </footer>
    </div>
  );

}

export default App;
