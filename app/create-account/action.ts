"use server";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import db from "@/lib/db";
import getSession from "@/lib/session";
import bcrypt from "bcrypt";
import { z } from "zod";

const checkUsername = (username: string) => !username.includes("potato");

const checkPassword = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const checkUniqueUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });
  return !Boolean(user);
};

const checkUniqueEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return Boolean(user) === false;
};

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
      //.transform((username) => `🔥${username}🔥`)
      .refine(checkUsername, "custom error")
      .refine(checkUniqueUsername, "이미 사용중인 이름입니다."),
    email: z
      .string({ invalid_type_error: "이메일 형식에 맞게 입력하세요." })
      .toLowerCase()
      .email()
      .refine(checkUniqueEmail, "이미 사용중인 이메일입니다."),
    password: z
      .string({
        required_error: "패스워드를 입력하세요.",
      })
      .min(PASSWORD_MIN_LENGTH),
    //.regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
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
  const result = await formSchema.spa(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    // check if username is taken
    // check if the email is already used
    // hash password
    const hashedPassword = await bcrypt.hash(result.data.password, 12); // 알고리즘 몇번 돌릴건지?
    // save the user to db
    const user = await db.user.create({
      data: {
        username: result.data.username,
        email: result.data.email,
        password: hashedPassword,
      },
      select: {
        id: true,
      },
    });
    // log the user in
    const session = await getSession();
    session.id = user.id;
    await session.save();
    // redirect '/home'
  }
}
