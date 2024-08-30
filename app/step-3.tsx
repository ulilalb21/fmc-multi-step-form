import { Checkbox } from "@/components/ui/checkbox";
import { getPriceString } from "@/lib/utils";
import { useState } from "react";

interface Props {
  selectedBilling: Billing;
  setSelectedAddOns: React.Dispatch<
    React.SetStateAction<
      {
        value: string;
        amount: number;
      }[]
    >
  >;
  selectedAddOns: {
    value: string;
    amount: number;
  }[];
  addOnsSelections: {
    value: string;
    yearly: number;
    monthly: number;
    name: string;
    description: string;
  }[];
}

export default function Step3({
  setSelectedAddOns,
  selectedAddOns,
  selectedBilling,
  addOnsSelections,
}: Props) {
  const [addOns, setAddOns] = useState<string[]>([
    ...selectedAddOns.map((a) => a.value),
  ]);

  const handleSelect = (data: {
    value: string;
    yearly: number;
    monthly: number;
  }) => {
    if (addOns.includes(data.value)) {
      setAddOns(addOns.filter((a) => a !== data.value));
      setSelectedAddOns(selectedAddOns.filter((a) => a.value !== data.value));
    } else {
      setAddOns([...addOns, data.value]);
      setSelectedAddOns([
        ...selectedAddOns,
        {
          value: data.value,
          amount: data[selectedBilling],
        },
      ]);
    }
  };

  return (
    <div id={"step-3"}>
      <h1 className="text-2xl font-bold text-blue-marine">Pick add-ons</h1>
      <p className="mt-3 text-base text-gray-cool">
        Add-ons help enhance your gaming experience.
      </p>
      <div className={"mt-6 flex flex-col gap-3"}>
        {addOnsSelections.map(
          ({ value, name, description, yearly, monthly }) => (
            <div
              key={value}
              className={`${
                addOns.includes(name)
                  ? "border-blue-purplish bg-alabaster"
                  : "border-blue-pastel bg-white"
              } cursor-pointer rounded-lg border px-4 py-3 hover:border-blue-purplish`}
              onClick={() => handleSelect({ value: name, yearly, monthly })}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Checkbox value={name} checked={addOns.includes(name)} />
                  <div>
                    <p className="text-sm font-bold">{name}</p>
                    <p className="text-xs text-gray-cool">{description}</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-blue-purplish">
                  +
                  {getPriceString(
                    selectedBilling === "yearly" ? yearly : monthly,
                    selectedBilling
                  )}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
