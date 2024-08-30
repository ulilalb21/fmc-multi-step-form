import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Props {
  errors: {
    name: boolean;
    email: boolean;
    phone: boolean;
  };
  onFormChange: (key: string, value: string) => void;
  userData: {
    name: string;
    email: string;
    phone: string;
  };
}

export default function Step1({ onFormChange, errors, userData }: Props) {
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState(userData.phone);

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-blue-marine">Personal info</h1>
      <p className="mt-3 text-base text-gray-cool">
        Please provide your name, email address, and phone number.
      </p>
      <div className="mt-6 grid w-full items-center gap-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="name">name</Label>
          {errors.name && (
            <Label className="text-red-strawberry">
              This field is required
            </Label>
          )}
        </div>

        <Input
          type="text"
          id="name"
          placeholder="e.g Stephen King"
          value={name}
          className={
            errors.name
              ? "border-red-strawberry focus-visible:border-red-strawberry"
              : ""
          }
          onChange={(event) => {
            onFormChange("name", event.target.value);
            setName(event.target.value);
          }}
        />
      </div>
      <div className="mt-6 grid w-full items-center gap-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="email">Email</Label>
          {errors.email && (
            <Label className="text-red-strawberry">
              This field is required
            </Label>
          )}
        </div>
        <Input
          type="email"
          id="email"
          placeholder="e.g stephenking@lorem.com"
          value={email}
          className={
            errors.email
              ? "border-red-strawberry focus-visible:border-red-strawberry"
              : ""
          }
          onChange={(event) => {
            onFormChange("email", event.target.value);
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="mt-6 grid w-full items-center gap-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="phone">Phone Number</Label>
          {errors.phone && (
            <Label className="text-red-strawberry">
              This field is required
            </Label>
          )}
        </div>
        <Input
          type="text"
          id="phone"
          placeholder="e.g +1 234 567 890"
          value={phone}
          className={
            errors.phone
              ? "border-red-strawberry focus-visible:border-red-strawberry"
              : ""
          }
          onChange={(event) => {
            onFormChange("phone", event.target.value);
            setPhone(event.target.value);
          }}
        />
      </div>
    </div>
  );
}
