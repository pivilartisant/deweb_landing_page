import { Baseline } from './components/Baseline';
import { Countdown } from './components/Countdown';
import { CTA } from './components/CTA';
import { Logo } from './components/Logo';
import { Layout } from './Layout';

function App() {
  return (
    <Layout>
      <Logo />
      <Baseline/>
      <Countdown/>
      <CTA/>
    </Layout>
  );
}

export default App;
