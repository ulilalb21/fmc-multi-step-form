export default function Step4() {
  return (
    <div id={"step-4"}>
      <h1 className="text-2xl font-bold text-blue-marine">Finishing up</h1>
      <p className="mt-3 text-base text-gray-cool">
        Double-check everything looks OK before confirming.
      </p>
      <div
        className={
          "mt-6 bg-magnolia p-4 rounded-lg divide-y divide-solid divide-gray-light"
        }
      >
        <div className="flex items-center justify-between pb-3">
          <div>
            <div className="text-blue-marine font-semibold text-sm">
              Arcade (Monthly)
            </div>
            <div className="underline text-gray-cool text-sm">Change</div>
          </div>
          <p className="text-blue-marine font-semibold">$9/mo</p>
        </div>
        <div>
          <div className="flex items-center justify-between pt-3">
            <div className="text-gray-cool text-sm">Online service</div>
            <p className="text-blue-marine">+$1/mo</p>
          </div>
          <div className="flex items-center justify-between pt-3">
            <div className="text-gray-cool text-sm">Larger storage</div>
            <p className="text-blue-marine">+$2/mo</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 mt-6">
        <div className="text-gray-cool text-sm">Total (per month)</div>
        <p className="text-blue-purplish font-bold">+$12/mo</p>
      </div>
    </div>
  );
}
