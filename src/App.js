
function App() {
  return (
      <>
          <header className="Header">
              <h1>Header Section</h1>
          </header>
          <section className="Main">
              <aside className="Sidebar">
                  <h2>Sidebar</h2>
                  <ul>
                      <li><a href="#">Item 1</a></li>
                      <li><a href="#">Item 2</a></li>
                      <li><a href="#">Item 3</a></li>

                  </ul>
              </aside>
              <main className="Content">
                  <h1>Main Content</h1>
                  <p>This is the main content of the page.</p>
              </main>
          </section>
          <footer className="Footer">
              <p>&copy; 2023 React Website</p>
          </footer>
      </>
  );
}

export default App;
