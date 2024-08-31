import Link from "next/link";
import RandomTextReveal from "../_components/RandomTextReveal";

export default function GetInTouch() {
  return <section className="section mt-[100px] pb-[200px]">
    <button className="btn uppercase text-xs mb-[10px]">My contact</button>
    <h2><RandomTextReveal onHover={true} text="Get in touch" /></h2>
    <p>Want to chat? Just shoot me a dm <Link className="link" href="https://t.me/@anhxuanpham" target="_blank">with a direct question on Telegram</Link> {`and I'll respond whenever I can. Otherwise, send me an email to`} <Link className="link" href={"mailto:shuisdev@hotmail.com"}>shuisdev@hotmail.com</Link>.</p>
  </section>
}
