"use server";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";
import { z } from "zod";

const checkUsername = (username: string) => !username.includes("당근");

const checkPassword = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const formSchema = z
  .object({
    // 기본 required -> 선택사항 .optional
    username: z
      .string({
        invalid_type_error: "유저명은 글자만 가능합니다.",
        required_error: "유저명을 찾을 수 없습니다.",
      })
      .toLowerCase()
      .trim()
      .transform((username) => `🔥${username}🔥`)
      .refine(checkUsername, "custom error"),
    email: z
      .string({ invalid_type_error: "이메일 형식에 맞게 입력하세요." })
      .toLowerCase()
      .email(),
    password: z
      .string({
        required_error: "패스워드를 입력하세요.",
      })
      .min(PASSWORD_MIN_LENGTH)
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .refine(checkPassword, {
    message: "패스워드가 일치하지 않습니다.",
    path: ["confirm_password"],
  });
export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    // get.('input name과 같아야함')
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else console.log(result.data);
}
