import RandomTextReveal from "../_components/RandomTextReveal";

export default function Header() {
  return <header id="about" className="section flex items-start gap-7">
    <div>
      <h1><RandomTextReveal onHover={true} text="Hi, I am William" /></h1>

      <p>I love to explore, hack and uncover the inner workings of everything. Currently, I bring my passion and skills to the banking industry where they shape my everyday work.</p>
    </div>

    <img src="/william.png" className="shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-full shadow" />

  </header>
}
