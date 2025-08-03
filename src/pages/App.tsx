import { Data } from '@/data/common';
import { About } from '@/widgets/About';
import { Cases } from '@/widgets/Cases';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { Promo } from '@/widgets/Promo';
import { Skills } from '@/widgets/Skills';

function App() {
  const { header, callback, skills, about, promo, cases, footer } = Data;

  return (
    <>
      <Header data={header} callback={callback} />
      <Skills data={skills} />
      <About data={about} />
      <Promo data={promo} callback={callback} />
      <Cases data={cases} callback={callback} />
      <Footer data={footer} callback={callback} />
    </>
  )
}

export default App
