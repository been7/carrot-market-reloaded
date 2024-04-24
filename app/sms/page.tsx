"use client";

import { useFormState } from "react-dom";
import Button from "../components/button";
import Input from "../components/input";
import { smsLogIn } from "./action";

const initialState = {
  token: false,
  error: undefined,
};

export default function SMSLogin() {
  const [state, dispatch] = useFormState(smsLogIn, initialState);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        {state.token ? (
          <Input
            name="token"
            type="number"
            placeholder="Verification code"
            required
            min={100000}
            max={999999}
            key="token"
            errors={state.error?.formErrors}
          />
        ) : (
          <Input
            name="phone"
            type="text"
            placeholder="Phone number"
            required
            key="phone"
          />
        )}
        <Button text={state.token ? "인증 완료" : "인증 문자 보내기"} />{" "}
      </form>
    </div>
  );
}
