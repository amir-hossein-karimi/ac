import { z } from "zod";

// Common validation patterns
const patterns = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/,
  phone: /^\+?[\d\s-()]{10,}$/,
};

// Common validation messages
const messages = {
  required: "This field is required",
  email: "Please enter a valid email address",
  password:
    "Password must be at least 8 characters and include uppercase, lowercase, and numbers",
  phone: "Please enter a valid phone number",
  match: "Passwords do not match",
};

// Validation schemas
export const loginSchema = z.object({
  email: z.string().email(messages.email),
  password: z.string().min(1, messages.required),
  remember: z.boolean().optional(),
});

export const signupSchema = z
  .object({
    name: z.string().min(1, messages.required),
    email: z.string().email(messages.email),
    password: z.string().regex(patterns.password, messages.password),
    confirmPassword: z.string(),
  })
  .refine(
    (data: { password: string; confirmPassword: string }) =>
      data.password === data.confirmPassword,
    {
      message: messages.match,
      path: ["confirmPassword"],
    }
  );

export const profileSchema = z.object({
  name: z.string().min(1, messages.required),
  email: z.string().email(messages.email),
  phone: z.string().regex(patterns.phone, messages.phone).optional(),
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
});

export const passwordChangeSchema = z
  .object({
    currentPassword: z.string().min(1, messages.required),
    newPassword: z.string().regex(patterns.password, messages.password),
    confirmNewPassword: z.string(),
  })
  .refine(
    (data: { newPassword: string; confirmNewPassword: string }) =>
      data.newPassword === data.confirmNewPassword,
    {
      message: messages.match,
      path: ["confirmNewPassword"],
    }
  );

// Types
export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
export type ProfileFormData = z.infer<typeof profileSchema>;
export type PasswordChangeFormData = z.infer<typeof passwordChangeSchema>;
