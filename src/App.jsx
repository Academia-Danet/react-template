import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer/index";
import { Container } from "./components/Container";
function App() {
  return (
    <div className="App">
      <Container tema="dark" className="">
        <Header />
        <Footer />
        <aside>
          
        </aside>
      </Container>
    </div>
  );
}

export default App;
