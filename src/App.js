import LoginButton from './components/LoginButton'

function App() {
  return (
    <div className="h-full w-full flex flex-col justify-between items-center relative">
      <div className="flex flex-col max-w-xl w-screen mx-auto">
        <h1 className="text-5xl font-black text-left pt-8">Spotify AI</h1>
        <p className="text-lg py-4">Enter a prompt and find songs!</p>
        <LoginButton></LoginButton>
      </div>
    </div>
  );
}

export default App;
