import React, { useState } from "react";
import "../rateus/multi.css";
import Swal from "sweetalert2"


export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        nps: "",
        comments: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNextStep = (step) => {
        setCurrentStep(step);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // Submit formData to an API
        Swal.fire({
            title: 'Thank you!',
            text: 'Your message has been sent successfully.',
            icon: 'success',
            confirmButtonText: 'Ok',
        })
    };

    return (
        <div className="multi-step-form-container">
            <div className="multi-step-form">
                <form onSubmit={handleSubmit}>
                {/* Step 1 */}
                {currentStep === 1 && (
                    <div className="step">
                    <h2>How Likely Can You Rate Us</h2>
                    <div className="radio-container">
                        {[...Array(11)].map((_, index) => (
                        <div key={index}>
                            <input
                            type="radio"
                            id={`nps-${index}`}
                            name="nps"
                            value={index}
                            onChange={handleInputChange}
                            onClick={() => handleNextStep(2)}
                            />
                            <label htmlFor={`nps-${index}`}>{index}</label>
                        </div>
                        ))}
                    </div>
                    <div className="text-hint">
                        <span>Less Likely</span>
                        <span>Very Likely</span>
                    </div>
                    </div>
                )}

                {/* Step 2 */}
                {currentStep === 2 && (
                    <div className="step">
                    <h2>Can you tell me a bit more about your score?</h2>
                    <div className="textarea-container">
                        <textarea
                        name="comments"
                        rows="3"
                        value={formData.comments}
                        onChange={handleInputChange}
                        required
                        />
                    </div>
                    <div className="navigation-buttons">
                        <button
                        type="button"
                        onClick={() => handleNextStep(1)}
                        >
                        Go Back
                        </button>
                        <button type="submit">Submit</button>
                    </div>
                    </div>
                )}
                </form>
            </div>
        </div>
    );
    }
