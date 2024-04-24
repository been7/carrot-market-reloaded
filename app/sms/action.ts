"use server";

import { redirect } from "next/navigation";
import validator from "validator";
import { z } from "zod";

// const phoneSchema = z.string().trim().refine(validator.isMobilePhone); // 아래 코드와 같은 기능을 함
const phoneSchema = z
  .string()
  .trim()
  .refine(
    (phone) => validator.isMobilePhone(phone, "ko-KR"),
    "잘못된 전화번호입니다."
  );

const tokenSchema = z.coerce.number().min(100000).max(999999);

interface ActionState {
  token: boolean;
}

export async function smsLogIn(prevState: ActionState, formData: FormData) {
  const phone = formData.get("phone");
  const token = formData.get("token");
  if (!prevState.token) {
    // 유저가 폰번호만 입력했다면
    const result = phoneSchema.safeParse(phone);
    if (!result.success) {
      console.log(result.error.flatten());
      // 번호 잘못 입력하면,
      return {
        token: false,
        error: result.error.flatten(),
      };
    } else {
      return {
        token: true,
      };
    }
  } else {
    // 번호 유효성 통과 = 토큰 받는 중
    const result = tokenSchema.safeParse(token);
    if (!result.success) {
      return {
        token: true, // 성공못해도 input은 보여주는 상태로
        error: result.error.flatten(),
      };
    } else {
      redirect("/");
    }
  }
}
