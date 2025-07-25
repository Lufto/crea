import data from "@/data/common.json"
import { Header } from '@/widgets/Header';

function App() {
  const { header, callback } = data;

  return (
    <>
      <Header data={header} callback={callback} />
    </>
  )
}

export default App
