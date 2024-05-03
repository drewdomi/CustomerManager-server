import { ZodIssue } from "zod";

export interface ZodError {
  issues: ZodIssue[];
}
