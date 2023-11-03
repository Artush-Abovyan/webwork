import { Header } from './components/Header';
import { SEction1 } from './sections/section1/SEction1';
import Section2 from './sections/section2/Section2';
import Section3 from './sections/section3/Section3';
import Section4 from './sections/section4/Section4';
import Section5 from './sections/section5/Section5';
import FAQ from './sections/section6';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <SEction1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
