"use server";
import { z } from "zod";

const formSchema = z.object({
  // 기본 required -> 선택사항 .optional
  username: z
    .string({
      invalid_type_error: "유저명은 글자만 가능합니다.",
      required_error: "유저명을 찾을 수 없습니다.",
    })
    .min(3, "3자 이상 작성하세요.")
    .max(10, "10자 이하로 작성하세요."),
  email: z
    .string({ invalid_type_error: "이메일 형식에 맞게 입력하세요." })
    .email(),
  password: z.string().min(10),
  confirmPassword: z.string().min(10),
});
export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}
