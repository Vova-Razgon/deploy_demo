function Dates() {
  const dateIs = new Date().toLocaleDateString();
  return dateIs;
}

function App() {
  const timeNow = new Date().toLocaleTimeString();
  const vovaStyle = {
    color: 'red'
  }

  return <main>
    <header>
      <h1>
        vova's hosted website
      </h1>
    </header>
    <section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nihil vero laboriosam facere ipsa itaque
        laborum corporis, error quibusdam? Dignissimos consequuntur
        sed fugit eaque pariatur sit aliquid maiores
        illum quasi dolores!
      </p>
    </section>
    <div style={vovaStyle} id="time-element">
      <p>the time is {timeNow}</p>
      <Dates/>
    </div>
    <footer>all rights reserved</footer>
  </main>
}

export default App
