import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const hadnleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 0 ? "active" : ""}>1</div>
            <div className={step >= 1 ? "active" : ""}>2</div>
            <div className={step >= 2 ? "active" : ""}>3</div>
          </div>
          <div className="message">
            Step {step + 1}: {messages[step]}
          </div>
          <div className="buttons">
            <button
              style={{ color: "#fff", backgroundColor: "#7950f2" }}
              onClick={handlePrev}
            >
              Previous
            </button>
            <button
              style={{ color: "#fff", backgroundColor: "#7950f2" }}
              onClick={hadnleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
