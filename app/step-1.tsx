import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Step1() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-blue-marine">Personal info</h1>
      <p className="mt-3 text-base text-gray-cool">
        Please provide your name, email address, and phone number.
      </p>
      <div className="mt-6 grid w-full items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="e.g Stephen King" />
      </div>
      <div className="mt-6 grid w-full items-center gap-1.5">
        <Label htmlFor="name">Email Address</Label>
        <Input
          type="email"
          id="email"
          placeholder="e.g stephenking@lorem.com"
        />
      </div>
      <div className="mt-6 grid w-full items-center gap-1.5">
        <Label htmlFor="name">Phone Number</Label>
        <Input type="text" id="phone" placeholder="e.g +1 234 567 890" />
      </div>
    </div>
  );
}
