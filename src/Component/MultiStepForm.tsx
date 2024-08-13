import React, { useState } from "react";
const steps = [
  { label: "Step 1", content: "This is Step 1" },
  { label: "Step 2", content: "This is Step 2" },
  { label: "Step 3", content: "This is Step 3" },
  { label: "Step 3", content: "This is Step 3" },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="multi-step-form">
      <ProgressBar currentStep={currentStep} totalSteps={steps.length} />
      <div className="form-content">
        <h2>{steps[currentStep].label}</h2>
        <p>{steps[currentStep].content}</p>
      </div>
      <div className="form-navigation">
        <button onClick={prevStep} disabled={currentStep === 0}>
          Previous
        </button>
        <button onClick={nextStep} disabled={currentStep === steps.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
const ProgressBar = ({ currentStep, totalSteps }:any) => {
    return (
      <div className="progress-bar">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="progress-step">
            <div className={`circle ${currentStep >= index ? "active" : ""}`}>
              {index + 1}
            </div>
            {index < totalSteps - 1 && (
              <div className={`line ${currentStep > index ? "active" : ""}`} />
            )}
          </div>
        ))}
      </div>
    );
  };
  