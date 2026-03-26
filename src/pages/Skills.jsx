import reactImg from "../assets/react.jpg";
import nextImg from "../assets/next.jpg";
import tailwindImg from "../assets/tailwind.jpg";
import nodeImg from "../assets/node.jpg";
import mongodbImg from "../assets/mongodb.jpg";
import mysqlImg from "../assets/mysql.jpg";
import gitImg from "../assets/git.jpg";
import vercelImg from "../assets/vercel.jpg";


const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React", img: reactImg },
      { name: "Next.js", img: nextImg },
      { name: "Tailwind CSS", img: tailwindImg },
    ],
  },
  {
    category: "Backend",
    skills: [{ name: "Node.js", img: nodeImg }],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", img: mongodbImg },
      { name: "MySQL", img: mysqlImg },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", img: gitImg },
      { name: "Vercel", img: vercelImg },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-16 bg-[#111]">
      <h2 className="text-3xl font-bold text-green-400 mb-10 text-center">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold text-green-400 mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {group.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-2 px-4 py-2 border border-green-400 rounded-full text-green-400 hover:bg-green-500/20 transition"
                  title={skill.name}
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}