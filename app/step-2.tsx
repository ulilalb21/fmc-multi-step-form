import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { getPriceString } from "@/lib/utils";

interface Props {
  selectedBilling: Billing;
  selectedPlan: {
    value: Plan;
    amount: number;
  };
  setSelectedPlan: Dispatch<
    SetStateAction<{
      value: Plan;
      amount: number;
    }>
  >;
  setSelectedBilling: Dispatch<SetStateAction<Billing>>;
}

export default function Step2({
  selectedBilling,
  selectedPlan,
  setSelectedPlan,
  setSelectedBilling,
}: Props) {
  const [billing, setBilling] = useState(selectedBilling);
  const [activePlan, setActivePlan] = useState(selectedPlan.value);
  const plans = {
    arcade: {
      yearly: 90,
      monthly: 9,
      name: "Arcade",
      value: "arcade" as Plan,
      icon: "/images/icon-arcade.svg",
    },
    advanced: {
      yearly: 120,
      monthly: 12,
      name: "Advanced",
      value: "advanced" as Plan,
      icon: "/images/icon-advanced.svg",
    },
    pro: {
      yearly: 150,
      monthly: 15,
      name: "Pro",
      icon: "/images/icon-pro.svg",
      value: "pro" as Plan,
    },
  };

  return (
    <div id="step-2">
      <h1 className="text-2xl font-bold text-blue-marine">Select your plan</h1>
      <p className="mt-3 text-base text-gray-cool">
        You have the option of monthly or yearly billing.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        {Object.values(plans).map((plan) => (
          <div
            key={plan.value}
            className={
              (plan.value === activePlan
                ? "border-blue-purplish bg-magnolia"
                : "border-blue-pastel bg-white") +
              " flex rounded-lg border p-3 gap-3 hover:border-blue-purplish cursor-pointer focus-visible:border-blue-purplish"
            }
            onClick={() => {
              setActivePlan(plan.value);
              setSelectedPlan({
                value: plan.value,
                amount: plan[billing],
              });
            }}
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
                {getPriceString(plan[billing], billing)}
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
            onCheckedChange={() => {
              const val = billing === "yearly" ? "monthly" : "yearly";
              setBilling(val);
              setSelectedBilling(val);
              setSelectedPlan({
                value: activePlan,
                amount: plans[activePlan][val],
              });
            }}
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
