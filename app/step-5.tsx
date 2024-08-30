import Image from "next/image";

export default function Step5() {
  return (
    <div id={"step-5"}>
      <div className="py-16 text-center">
        <Image
          src="/images/icon-thank-you.svg"
          alt="Thank you!"
          width={72}
          height={72}
          className={"mx-auto mb-6 size-16"}
        />
        <h1 className="text-3xl font-bold text-blue-marine">Thank you!</h1>
        <p className="mt-3 text-gray-cool">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}
