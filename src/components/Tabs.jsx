import React, { useState } from "react";
// import "./TabSection.css";

// const tabs = [
//   { name: "Programming", icons: ["Objective-C", "Swift", "Flutter", "React", "Kotlin"] },
//   { name: "Framework", icons: ["Angular", "Vue", "Next.js","React"] },
//   { name: "UI/UX Design", icons: ["Figma", "Sketch", "Adobe XD"] },
//   { name: "Backend", icons: ["Node.js", "Express", "Django"] },
//   { name: "Cloud", icons: ["AWS", "Azure", "Google Cloud"] },
//   { name: "Database", icons: ["MongoDB", "MySQL", "PostgreSQL"] },
//   { name: "Web Technology", icons: ["PHP", ".Net", "Laravel","Node.JS","Angular","React.Js","Python","Html","VueJs"] },
// ];

const tabs = [
  {
    name: "Programming",
    icons: [
      { name: "Objective-C", img: "/images/ObjectiveClogo.webp" },
      { name: "Swift", img: "/images/Swiftlogo.webp" },
      { name: "Flutter", img: "/images/Flutterlogo.webp" },
      { name: "React", img: "/images/Reactlogo.webp" },
      { name: "Kotlin", img: "/images/Kotlinlogo.webp" },
    ],
  },
  {
    name: "Framework",
    icons: [
      { name: "Angular", img: "/images/Angularlogo.webp" },
      { name: "Vue", img: "/images/Vuelogo.webp" },
      { name: "React", img: "/images/Reactlogo.webp" },
      { name: "Next.js", img: "/images/Nextjslogo.png" },
      { name: "Express.js", img: "/images/Expressjslogo.webp" },
    ],
  },
  {
    name: "Backend",
    icons: [
      { name: "Node.js", img: "/images/NodeJslogo.webp" },
      { name: "Django", img: "/images/Djangologo.webp" },
      { name: "Express.js", img: "/images/Expressjslogo.webp" },
      { name: "Ruby on Rails", img: "/images/Ruby-on-Railslogo.webp" },
    ],
  },
  {
    name: "Frontend",
    icons: [
      { name: "HTML", img: "/images/HTMLlogo.webp" },
      { name: "CSS", img: "/images/CSSlogo.webp" },
      { name: "Javascript", img: "/images/Javascriptlogo.webp" },
      { name: "TypeScript", img: "/images/TypeScriptlogo.webp" },
      { name: "React", img: "/images/Reactlogo.webp" },
      { name: "React Native", img: "/images/Reactlogo.webp" },
      { name: "Swift", img: "/images/Swiftlogo.webp" },
      { name: "Kotlin", img: "/images/Kotlinlogo.webp" },
      { name: "Flutter", img: "/images/Flutterlogo.webp" },
      { name: "Java", img: "/images/Javalogo.webp" },
    ],
  },
  {
    name: "Database",
    icons: [
      { name: "MySQL", img: "/images/MySQLlogo.webp" },
      { name: "MongoDB", img: "/images/MongoDBlogo.webp" },
      { name: "SQLite", img: "/images/SQLitelogo.webp" },
    ],
  },
  {
    name: "UI/UX Design",
    icons: [
      { name: "Adobe XD", img: "/images/XDlogo.svg" },
      { name: "Photoshop", img: "/images/Photoshoplogo.svg" },
      { name: "Figma", img: "/images/Figmalogo.svg" },
    ],
  },
  {
    name: "Web Technology",
    icons: [
      { name: "HTML", img: "/images/HTMLlogo.webp" },
      { name: "CSS", img: "/images/CSSlogo.webp" },
      { name: "Javascript", img: "/images/Javascriptlogo.webp" },
      { name: "Angular", img: "/images/Angularlogo.webp" },
      { name: "Vue", img: "/images/Vuelogo.webp" },
      { name: "React", img: "/images/Reactlogo.webp" },
    ],
  },
];

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("Programming");

  return (
    <>
      <div className="tab-container">
        <div className="top-notch">
          <h2>Technologies That Power Our Solutions</h2>
          <p>
            We specialize in a wide range of cutting-edge technologies to bring
            your ideas to life with efficiency, performance, and scalability.
            From native languages like Objective-C and Swift to modern tools
            like Flutter, React, and Kotlin, our team is equipped to build
            seamless cross-platform and high-performance applications tailored
            to your needs.
          </p>
        </div>
        <div className="tab-header">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`tab-title ${activeTab === tab.name ? "active" : ""}`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </div>
          ))}
        </div>

        <div className="tab-content">
          {tabs
            .find((tab) => tab.name === activeTab)
            .icons.map((icon, idx) => (
              <div className="icon-box" key={idx}>
                {/* <div className="icon-img">🔧</div> 
              <p>{icon}</p> */}
                <img className="icon-img" src={icon.img} alt={icon.name} />
                <p>{icon.name}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TabSection;
