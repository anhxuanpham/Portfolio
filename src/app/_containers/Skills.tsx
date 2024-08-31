import RandomTextReveal from "@/components/RandomTextReveal";

export default function Skills() {
  // API to get languages from repo
  // https://api.github.com/repos/hudy9x/namviek/languages
  const skills = ['Database', 'Oracle', 'Procedure', 'SQL', 'Jira', 'Analysis', 'API', 'ESB',
    'SmartVista', 'CRM', 'Postman', 'Card', 'PCI DSS', 'POS', 'Payment'];

  // Split skills into two groups
  const midIndex = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, midIndex);
  const secondHalf = skills.slice(midIndex);

  return (
      <section className="section">
        <h3><RandomTextReveal onHover={true} text="Skills" /></h3>
        <div className="flex flex-wrap sm:flex-nowrap gap-4">
          <div className="flex-1">
            {firstHalf.map(skill => (
                <button key={skill} className="btn dark">{skill}</button>
            ))}
          </div>
          <div className="flex-1">
            {secondHalf.map(skill => (
                <button key={skill} className="btn dark">{skill}</button>
            ))}
          </div>
        </div>
      </section>
  );
}
