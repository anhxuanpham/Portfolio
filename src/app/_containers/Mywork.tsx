import Link from "next/link";
import RandomTextReveal from "../_components/RandomTextReveal";

export default function Mywork() {
  return <section id="work" className="section pt-[100px]">
    <button className="btn uppercase text-xs mb-[10px]">My side projects</button>
    <h2><Link href={"#work"}><RandomTextReveal onHover={true} text="Check out my work" /></Link></h2>
    <p>I’ve worked on a variety of projects. I’ll be updating them here soon...</p>
  </section>
}
