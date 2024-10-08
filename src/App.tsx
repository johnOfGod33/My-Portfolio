import { Button } from "./components/ui/button";

const App = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="mb-5">
          Hi my name is, <br />
          <span className="font-logo text-4xl font-bold">jean de dieu</span>
        </div>

        <div>
          <Button>click on me </Button>
        </div>
      </div>
    </>
  );
};

export default App;
