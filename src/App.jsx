import "./App.css";
import CardCovid from "./components/Cards/CardCovid";
import CardDiagnostic from "./components/Cards/CardDiagnostic";
import CardSpecialists from "./components/Cards/CardSpecialists";
import CardStudy from "./components/Cards/CardStudy";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Opinion from "./components/Opinion";

function App() {
  return (
    <div className="App">
      <Header />
      <CardSpecialists />
      <CardDiagnostic />
      <CardStudy />
      <Opinion />
      <CardCovid />
      <Footer />
    </div>
  );
}

export default App;
