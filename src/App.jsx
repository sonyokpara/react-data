import {
  Navbar,
  Hero,
  Analytics,
  NewsLetter,
  Pricing,
  Footer,
} from "./sections";

const App = () => {
  return (
    <main className="font-inter text-base">
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Pricing />
      <Footer />
    </main>
  );
};

export default App;
