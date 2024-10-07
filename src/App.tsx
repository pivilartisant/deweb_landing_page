import { Base } from './Base';
import { Window } from './components/Window';
import { Layout } from './Layout';

function App() {

  function handleClick() {
    console.log("Clicked");
  }
  return (
    <Layout>
      <Base />
      <Window title="Window 1" >
        <div>Content 1</div>
        <button
        onClick={() => handleClick()}>
          Console.log me
          </button>
          
      </Window>
    </Layout>
  );
}

export default App;
