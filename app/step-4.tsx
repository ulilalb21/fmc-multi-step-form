import { getPriceString } from "@/lib/utils";

interface Props {
  selectedAddOns: {
    value: string;
    amount: number;
  }[];
  selectedBilling: Billing;
  selectedPlan: {
    value: Plan;
    amount: number;
  };
  setStep: React.Dispatch<React.SetStateAction<number>>;
  addOnsSelections: {
    value: string;
    yearly: number;
    monthly: number;
    name: string;
    description: string;
  }[];
}

export default function Step4({
  selectedAddOns,
  selectedBilling,
  selectedPlan,
  setStep,
  addOnsSelections,
}: Props) {
  function SectionAddOns() {
    const addOnsMap = new Map<
      string,
      {
        yearly: number;
        monthly: number;
      }
    >(
      addOnsSelections.map((a) => [
        a.name,
        { yearly: a.yearly, monthly: a.monthly },
      ])
    );
    if (selectedAddOns.length > 0) {
      return (
        <div className="pb-4">
          {selectedAddOns.map((addOn) => (
            <div
              key={addOn.value}
              className="flex items-center justify-between pt-3"
            >
              <div className="text-sm text-gray-cool">{addOn.value}</div>
              <p className="text-blue-marine">
                +
                {getPriceString(
                  addOnsMap.get(addOn.value)?.[selectedBilling] || 0,
                  selectedBilling
                )}
              </p>
            </div>
          ))}
        </div>
      );
    }
    return null;
  }

  function toTitleCase(str: string) {
    return str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  }

  return (
    <div id={"step-4"}>
      <h1 className="text-2xl font-bold text-blue-marine">Finishing up</h1>
      <p className="mt-3 text-base text-gray-cool">
        Double-check everything looks OK before confirming.
      </p>
      <div
        className={
          (selectedAddOns.length && "divide-y") +
          " mt-6 px-4 bg-magnolia rounded-lg divide-solid divide-gray-light"
        }
      >
        <div className="flex items-center justify-between py-4">
          <div>
            <div className="text-sm font-semibold text-blue-marine">
              {toTitleCase(selectedPlan.value)} ({toTitleCase(selectedBilling)})
            </div>
            <div
              onClick={() => setStep(2)}
              className="cursor-pointer text-sm text-gray-cool underline hover:text-blue-purplish"
            >
              Change
            </div>
          </div>
          <p className="font-semibold text-blue-marine">
            {getPriceString(selectedPlan.amount, selectedBilling)}
          </p>
        </div>
        <SectionAddOns />
      </div>
      <div className="mt-6 flex items-center justify-between px-4">
        <div className="text-sm text-gray-cool">Total (per month)</div>
        <p className="font-bold text-blue-purplish">
          +
          {getPriceString(
            selectedPlan.amount +
              selectedAddOns.reduce((acc, addOn) => acc + addOn.amount, 0),
            selectedBilling
          )}
        </p>
      </div>
    </div>
  );
}
