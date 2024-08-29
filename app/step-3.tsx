import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { set } from "react-hook-form";

export default function Step3() {
  const selection = [
    {
      value: "online-service",
      name: "Online service",
      description: "Access to multiplayer games",
      yearly: "+$10/yr",
      monthly: "+$1/mo",
    },
    {
      value: "larger-storage",
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      yearly: "+$20/yr",
      monthly: "+$2/mo",
    },
    {
      value: "customizable-profile",
      name: "Customizable profile",
      description: "Custom theme on your profile",
      yearly: "+$20/yr",
      monthly: "+$2/mo",
    },
  ];

  const [addOns, setAddOns] = useState<string[]>([]);

  return (
    <div id={"step-3"}>
      <h1 className="text-2xl font-bold text-blue-marine">Pick add-ons</h1>
      <p className="mt-3 text-base text-gray-cool">
        Add-ons help enhance your gaming experience.
      </p>
      <div className={"flex flex-col gap-3 mt-6"}>
        {selection.map(({ value, name, description, yearly, monthly }) => (
          <div
            key={value}
            className={`${
              addOns.includes(value)
                ? "bg-alabaster border-blue-purplish"
                : "bg-white border-blue-pastel"
            } py-3 px-4 border rounded-lg cursor-pointer`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Checkbox value={value} />
                <div>
                  <p className="text-sm font-bold">{name}</p>
                  <p className="text-gray-cool text-xs">{description}</p>
                </div>
              </div>
              <p className="text-blue-purplish font-medium text-sm">
                {yearly || monthly}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
