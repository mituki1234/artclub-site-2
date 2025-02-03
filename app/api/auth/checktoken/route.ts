// /api/auth/checktoken.js
import jwt from "jsonwebtoken";
import { cookies } from 'next/headers';
const SECRET_KEY = process.env.TOKEN_SECRET_KEY as string;

// login.ts → route.ts に変更
export async function GET(req: any, res: any) {
    
}