import { Navbar, Hero, Analytics, NewsLetter } from "./sections";

const App = () => {
  return (
    <main className="font-inter text-base">
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
    </main>
  );
};

export default App;
