"use client";

import { useFormState } from "react-dom";
import FormButton from "../components/form-btn";
import FormInput from "../components/form-input";
import SocialLogin from "../components/social-login";
import { createAccount } from "./action";

export default function CreateAccount() {
  const [state, action] = useFormState(createAccount, null);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          required
          errors={state?.fieldErrors.username}
        />
        <FormInput name="email" type="email" placeholder="Email" required />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors.password}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
          errors={state?.fieldErrors.confirmPassword}
        />
        <FormButton text="Create account" />{" "}
      </form>
      <SocialLogin />
    </div>
  );
}
