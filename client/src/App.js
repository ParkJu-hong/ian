import { useMediaQuery } from 'react-responsive';


function App() {
  const isPc = useMediaQuery({
    query: "(min-width: 768px)"
  })

  const isWeb = isPc ? 'PC입니다' : 'Mobile입니다';

  return (
    <div className="App">
      {isWeb}
    </div>
  );
}

export default App;
