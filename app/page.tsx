"use client";
import { useState } from "react";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";
import Step5 from "./step-5";
import { set, useForm } from "react-hook-form";

export default function Home() {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const [selectedBilling, setSelectedBilling] = useState<Billing>("monthly");
  const [selectedPlan, setSelectedPlan] = useState<{
    value: Plan;
    amount: number;
  }>({
    value: "arcade",
    amount: 9,
  });
  const [selectedAddOns, setSelectedAddOns] = useState<
    {
      value: string;
      amount: number;
    }[]
  >([]);

  const addOnsSelections = [
    {
      value: "online-service",
      name: "Online service",
      description: "Access to multiplayer games",
      yearly: 10,
      monthly: 1,
    },
    {
      value: "larger-storage",
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      yearly: 20,
      monthly: 2,
    },
    {
      value: "customizable-profile",
      name: "Customizable profile",
      description: "Custom theme on your profile",
      yearly: 20,
      monthly: 2,
    },
  ];

  function handleNextStep(): void {
    if (step === 1) {
      if (name === "" || email === "" || phone === "") {
        setErrors({
          name: name === "",
          email: email === "",
          phone: phone === "",
        });
        return;
      }
    }
    setStep(step + 1);
  }

  function handleFormChange(key: string, value: string): void {
    switch (key) {
      case "name":
        setName(value);
        setErrors({ ...errors, name: value === "" });
        break;
      case "email":
        setEmail(value);
        setErrors({ ...errors, email: value === "" });
        break;
      case "phone":
        setPhone(value);
        setErrors({ ...errors, phone: value === "" });
        break;
    }
  }

  return (
    <main className="h-screen bg-[url('/images/bg-sidebar-mobile.svg')] bg-contain bg-no-repeat">
      <div className="relative pb-24">
        <div className="mb-10 flex items-center justify-center gap-4 pt-10">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              className={
                (step === i + 1 || (step === 5 && i + 1 === 4)
                  ? "bg-blue-pastel text-blue-marine"
                  : "bg-transparent ring-2 ring-inset ring-blue-pastel text-blue-light") +
                " font-medium rounded-full text-center w-10 h-10 p-2"
              }
              key={i + 1}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div
          className={"mx-4 rounded-lg bg-white p-6 shadow-xl shadow-gray-light"}
        >
          {step === 1 && (
            <Step1
              errors={errors}
              onFormChange={handleFormChange}
              userData={{ name, email, phone }}
            />
          )}
          {step === 2 && (
            <Step2
              selectedBilling={selectedBilling}
              selectedPlan={selectedPlan}
              setSelectedBilling={setSelectedBilling}
              setSelectedPlan={setSelectedPlan}
            />
          )}
          {step === 3 && (
            <Step3
              selectedAddOns={selectedAddOns}
              selectedBilling={selectedBilling}
              setSelectedAddOns={setSelectedAddOns}
              addOnsSelections={addOnsSelections}
            />
          )}
          {step === 4 && (
            <Step4
              selectedBilling={selectedBilling}
              selectedPlan={selectedPlan}
              selectedAddOns={selectedAddOns}
              setStep={setStep}
              addOnsSelections={addOnsSelections}
            />
          )}
          {step === 5 && <Step5 />}
        </div>
        {step < 5 && (
          <footer
            className={
              (step === 1 ? "justify-end" : "justify-between") +
              " fixed bottom-0 flex w-full bg-white p-3"
            }
          >
            {step > 1 && step < 5 && (
              <div
                className=" inline-block cursor-pointer rounded-lg p-3 px-5 font-medium text-gray-cool hover:text-blue-marine"
                onClick={() => setStep(step - 1)}
              >
                Go Back
              </div>
            )}
            {step < 5 && (
              <div
                className={`${
                  step < 4 ? "bg-blue-marine" : "bg-blue-purplish"
                } inline-block cursor-pointer rounded-lg p-3 px-5 font-medium text-white`}
                onClick={handleNextStep}
              >
                {step === 4 ? "Confirm" : "Next Step"}
              </div>
            )}
          </footer>
        )}
      </div>
    </main>
  );
}
