import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "15d",
  });
  res.cookie("token", token, {
  maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
  httpOnly: true, // Prevent client-side access
  sameSite: "None", // For cross-origin requests
  secure: true, // Ensure HTTPS-only cookies
});
};
