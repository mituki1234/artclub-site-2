// pages/api/login.js
import jwt from "jsonwebtoken";
import { cookies } from 'next/headers';
const SECRET_KEY = process.env.TOKEN_SECRET_KEY as string;

// login.ts → route.ts に変更
export async function POST(req: any, res: any) {
  // POSTメソッドとして明示的に定義
  const { username, password } = await req.json();

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    // JWTを生成
    const token = jwt.sign(
      { id: username },
      SECRET_KEY,
      { expiresIn: "24h" } // トークンの有効期限
    );
    // Set HTTP-only cookie with JWT
    cookies().set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/'
    });
    return new Response(JSON.stringify({ message: "login success" }), {
      status: 200,
    });
  } else {
    return new Response(JSON.stringify({ message: "Invalid credentials" }), {
      status: 200,
    });
  }
}
