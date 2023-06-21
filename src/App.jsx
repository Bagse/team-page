import CardImage from "./components/CardImage";

function App() {
  return (
    <div className="py-10 px-2 sm:px-5 lg:px-72">
      <div className="flex flex-wrap lg:flex-nowrap gap-10 justify-between">
        <h1 className="text-4xl md:text-5xl font-bold text-serif">
          The creative crew
        </h1>
        <div className="py-10 md:py-0">
          <h2 className="uppercase font-bold">Who we are</h2>
          <ul className="pt-3">
            <li>We are team of creatively diverse. driven.</li>
            <li>innovative individuals working in various</li>
            <li>locations from the world.</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 py-16 gap-0 sm:gap-5 lg:gap-10 px-[2px] sm:px-0 lg:px-0">
        <CardImage
          img="./img/photo1.png"
          name="Bill Mahoney"
          job="Product owner"
        />
        <div className="mt-24">
          <CardImage
            img="./img/photo2.png"
            name="Saba Cabrera"
            job="Art director"
          />
        </div>
        <CardImage img="./img/photo3.png" name="Shae Le" job="Tech Lead" />
        <div className="sm:mt-0 mt-24 lg:mt-0">
          <CardImage
            img="./img/photo4.png"
            name="Skylah Lu"
            job="UX Designer"
          />
        </div>

        <div className="sm:mt-24 lg:mt-24">
          <CardImage
            img="./img/photo5.png"
            name="Griff Richards"
            job="Developer"
          />
        </div>
        <div className="sm:mt-0 mt-24 lg:mt-0">
          <CardImage img="./img/photo6.png" name="Stan John" job="DEverloper" />
        </div>
      </div>
      <footer className="flex place-content-center text-center text-[A9A9A9] text-sm pt-8">
        Created by
        {" "}
        <a
          href="https://github.com/Bagse"
          target="_blank"
          className="font-bold hover:text-green-500 underline px-1"
          rel="noopener noreferrer"
        >{" "}
          Bagse
          {" "}
        </a>
        -
        <a
          href="https://devchallenges.io/"
          target="_blank"
          className="font-bold hover:text-green-500 underline px-1"
          rel="noopener noreferrer"
        >
          devChallenges.io
        </a>
      </footer>
    </div>
  );
}

export default App;
