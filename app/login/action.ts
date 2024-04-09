"use server";

import { redirect } from "next/navigation";

// 여기있는 애들은 전부 서버에서 실행된다!
export const handleForm = async (prevState: any, formData: FormData) => {
  // 함수 내 최상단에 있어야 함
  // "use server"; // 이 함수가 서버에서만 실행되게함
  await new Promise((resolve) => setTimeout(resolve, 5000));
  redirect("/");
  return {
    errors: ["wrong password", "password too short"],
  };
};
