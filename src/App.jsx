import { Navbar, Hero, Analytics, NewsLetter, Pricing } from "./sections";

const App = () => {
  return (
    <main className="font-inter text-base">
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Pricing />
    </main>
  );
};

export default App;
