
import Slider from './components/Slider';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
function App() {
  return (
    <RecoilRoot>
      <div className="App w-screen bg-black h-screen">
        <Slider/>
      </div>
    </RecoilRoot>
  );
}

export default App;
