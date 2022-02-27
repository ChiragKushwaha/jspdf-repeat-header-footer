import './app.css';
import Footer from './components/footer';
import Header from './components/header';
import Preview from './components/preview';
import Main from './components/main';
import Page from './components/page';
import Section from './components/section';
import jsPdfGenerator from './utils/js-pdf-generator';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    jsPdfGenerator();
  }, []);
  return (
    <>
      <Page className="app">
        <Section type="left">
          <Header />
          <Main />
          <Footer />
        </Section>
        <Section>
          <Preview />
        </Section>
      </Page>
    </>
  );
}

export default App;
