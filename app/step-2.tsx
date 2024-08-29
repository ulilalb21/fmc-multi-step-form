import { useState } from "react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

export default function Step2() {
  const [billing, setBilling] = useState("yearly");
  const [activePlan, setActivePlan] = useState("Arcade");
  const plans = [
    {
      name: "Arcade",
      yearly: "$90/yr",
      monthly: "$9/mo",
      icon: "/images/icon-arcade.svg",
    },
    {
      name: "Advanced",
      yearly: "$120/yr",
      monthly: "$12/mo",
      icon: "/images/icon-advanced.svg",
    },
    {
      name: "Pro",
      yearly: "$150/yr",
      monthly: "$15/mo",
      icon: "/images/icon-pro.svg",
    },
  ];

  return (
    <div id="step-2">
      <h1 className="text-2xl font-bold text-blue-marine">Select your plan</h1>
      <p className="mt-3 text-base text-gray-cool">
        You have the option of monthly or yearly billing.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={
              (plan.name === activePlan
                ? "border-blue-purplish bg-magnolia"
                : "border-blue-pastel bg-white") +
              " flex rounded-lg border p-3 gap-3 hover:border-blue-purplish cursor-pointer focus-visible:border-blue-purplish"
            }
            onClick={() => setActivePlan(plan.name)}
          >
            <Image
              src={plan.icon}
              alt={plan.name}
              className="size-9"
              width="40"
              height="40"
            />
            <div>
              <div className="font-semibold">{plan.name}</div>
              <div className={"text-sm tracking-tight text-gray-cool"}>
                {billing === "yearly" ? plan.yearly : plan.monthly}
              </div>
              {billing === "yearly" && (
                <div className="mt-1 text-xs tracking-tight">2 months free</div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col items-center rounded-lg bg-magnolia p-4">
        <div className="flex items-center gap-5">
          <div
            className={`text-sm font-semibold tracking-tight ${
              billing === "monthly" ? "text-blue-marine" : "text-gray-cool"
            }`}
          >
            Monthly
          </div>
          <Switch
            checked={billing === "yearly"}
            onCheckedChange={() =>
              setBilling(billing === "yearly" ? "monthly" : "yearly")
            }
          />
          <div
            className={`text-sm font-semibold tracking-tight ${
              billing === "yearly" ? "text-blue-marine" : "text-gray-cool"
            }`}
          >
            Yearly
          </div>
        </div>
      </div>
    </div>
  );
}
