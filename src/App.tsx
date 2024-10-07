import { Base } from './Base';
import { Layout } from './Layout';
import { Window } from './components/Window';




function App() {
  return (
    <Layout
    >
      <Window title="DeWeb">
        <div>heyy i'm a really cool window</div>
      </Window>
      <Base/>
    </Layout>
  );
}

export default App;
