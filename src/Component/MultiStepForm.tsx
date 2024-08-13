import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const steps = [
    {
        title: "Registration",
        description: "Registration for our prestigious challenge opens 19th of August and closes 21st August, don't miss your chance to claim the crown. This is your moment to shine and make your mark.",
        date: "August 19, 2024"
    },
    {
        title: "Product Idea Submission and Filtration",
        description: "Registration for our prestigious challenge opens 19th of August and closes 21st August, don't miss your chance to claim the crown. This is your moment to shine and make your mark.",
        date: "August 19, 2024"
    },
    {
        title: "Workshop",
        description: "Registration for our prestigious challenge opens 19th of August and closes 21st August, don't miss your chance to claim the crown. This is your moment to shine and make your mark.",
        date: "August 19, 2024"
    },
    {
        title: "Quarter Finals",
        description: "Registration for our prestigious challenge opens 19th of August and closes 21st August, don't miss your chance to claim the crown. This is your moment to shine and make your mark.",
        date: "August 19, 2024"
    },
    {
        title: "Finals",
        description: "Registration for our prestigious challenge opens 19th of August and closes 21st August, don't miss your chance to claim the crown. This is your moment to shine and make your mark.",
        date: "August 19, 2024"
    },
    {
        title: "Registration",
        description: "Registration for our prestigious challenge opens 19th of August and closes 21st August, don't miss your chance to claim the crown. This is your moment to shine and make your mark.",
        date: "August 19, 2024"
    }
];


const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [prevSteps, setPrevStep] = useState(0);
    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setPrevStep(currentStep);
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setPrevStep(currentStep);
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="h-[80vh] pt-[8vw] w-screen bg-[#F7F8FC] multistep-scontainer">
            <div className="w-full mx-auto ">
                <div className="w-[80%] mx-auto  flex flex-col gap-[7vw]">
                    <div className="flex items-center  text-center justify-center"><ProgressBar currentStep={currentStep} totalSteps={steps.length} /></div>
                    <div className=" flex flex-col gap-[4vw]">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, scale: 0.9, x: currentStep > prevSteps ? 300 : -100 }}
                            animate={{ opacity: 1, scale: 1, x: 0, transition: { duration: 0.3 } }}
                            exit={{ opacity: 0, scale: 0.9, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="flex gap-[2vw] flex-col justify-center"
                        >
                            <h1 className="fonts-text italic text-[3vw] text-[#354962]">{steps[currentStep].title}</h1>
                            <div className="flex items-center justify-center ">
                                <h2 className="w-[50%] text-[#354962]  mx-auto">{steps[currentStep].description}</h2>
                                <h1 className="italic fonts-text text-[3.1vw] text-[#2376F3]">{steps[currentStep].date}</h1>
                            </div>

                        </motion.div>
                        <div className="form-navigation">
                            <button onClick={prevStep} id={currentStep === 0 ? "hide" : undefined}>
                                <FaChevronLeft  className="text-white"/>
                            </button>

                            <button onClick={nextStep} id={`${currentStep === (steps.length - 1) ? "hide" : undefined}`}>
                                <FaChevronRight className="text-white"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;

const ProgressBar = ({ currentStep, totalSteps }: any) => {
    return (
        <div className="progress-bar">
            {Array.from({ length: totalSteps }).map((_, index) => (
                <div key={index} className="progress-step">
                    <motion.div
                        className={`circle ${currentStep >= index ? "active" : ""}`}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: currentStep >= index ? 1.2 : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {currentStep > index ? (
                            <span className="checkmark"></span>
                        ) : (
                            // index + 1
                            true
                        )}
                    </motion.div>
                    {index < totalSteps - 1 && (
                        <div className={`line ${currentStep > index ? "active" : ""}`} />
                    )}
                </div>
            ))}
        </div>
    );
};
