"use client";
import { useState } from "react";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";
import Step5 from "./step-5";

export default function Home() {
  const [step, setStep] = useState(1);

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
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
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
                className=" inline-block cursor-pointer rounded-lg p-3 px-5 font-medium text-gray-cool"
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
                onClick={() => setStep(step + 1)}
              >
                {step === 4 ? "Confirm" : "Next Step"}
              </div>
            )}
          </footer>
        )}
      </div>
      <div className="hidden">
        Step 1 Your info Step 2 Select plan Step 3 Add-ons Step 4 Summary
        Personal info Please provide your name, email address, and phone number.
        Name e.g. Stephen King Email Address e.g. stephenking@lorem.com Phone
        Number e.g. +1 234 567 890 Next Step Select your plan You have the
        option of monthly or yearly billing. Arcade $9/mo Advanced $12/mo Pro
        $15/mo Monthly Yearly Go Back Next Step Pick add-ons Add-ons help
        enhance your gaming experience. Online service Access to multiplayer
        games +$1/mo Larger storage Extra 1TB of cloud save +$2/mo Customizable
        Profile Custom theme on your profile +$2/mo Go Back Next Step Finishing
        up Double-check everything looks OK before confirming. Total (per
        month/year) Go Back Confirm Thank you! Thanks for confirming your
        subscription! We hope you have fun using our platform. If you ever need
        support, please feel free to email us at support@loremgaming.com.
      </div>
    </main>
  );
}
