import { useState } from "react";
import "./App.css";

const testData = [
  {
    title: "What is Github and how does it work?",
    content:
      "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
  },
  {
    title: "How do I see GitHub's availability?",
    content: "Check our real-time status report",
  },
  {
    title: "Why is GitHub so popular?",
    content:
      "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together.",
  },
];

const AccordionHeader = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h2
          style={{
            display: "flex",
            height: "30px",
            justifyContent: "left",
            paddingTop: "15px",
          }}
        >
          {title}
        </h2>
        {!isOpen ? (
          <h2 style={{ paddingTop: "15px" }}>+</h2>
        ) : (
          <h2 style={{ paddingTop: "15px" }}>-</h2>
        )}
      </div>

      {isOpen && (
        <p style={{ marginBottom: "30px", color: "dimgrey" }}>{content}</p>
      )}
      <div style={{ marginTop: "15px", borderBottom: "1px solid gray" }}></div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <AccordionHeader title={item.title} content={item.content} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div style={{ marginTop: "150px", marginInline: "auto", width: "66.67%" }}>
      <h1 style={{ marginBottom: "75px" }}>Accordion Component</h1>
      <Accordion items={testData}></Accordion>
    </div>
  );
}

export default App;
