import RandomTextReveal from "../_components/RandomTextReveal"

export default function WorkExperience() {
  const workExperience = [
    { logo: '/vib_logo.jpg', companyName: "Vietnam International Bank", position: "Senior IT Business Analyst", workingTime: "Oct 2023 - Present" },
    { logo: '/atom_logo.png', companyName: "ATOM Solution Corporate", position: "Senior IT Business Analyst", workingTime: "Nov 2022 - Oct 2023" },
    { logo: '/minerva_logo.png', companyName: "Minerva Technology Solution", position: "Junior IT Business Analyst", workingTime: "Mar 2022 - Nov 2022" },
  ]
  return <section className="section">
    <h3 className="flex justify-between items-center">
      <div><RandomTextReveal onHover={true} text="Work Experience" /></div>

      <button className="btn">Download CV</button>
    </h3>
    <div className="space-y-3">
      {workExperience.map((work, workIndex) => {
        return <div key={workIndex} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-12 h-12 border shadow-md bg-black rounded-full" src={work.logo} />
            <div className="pt-2">
              <h4>{work.companyName}</h4>
              <small>{work.position}</small>
            </div>
          </div>
          <small>{work.workingTime}</small>
        </div>
      })}
    </div>
  </section>
}
