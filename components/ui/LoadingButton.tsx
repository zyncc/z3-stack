"use client";

import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "./button";
import { CgSpinner } from "react-icons/cg";

export default function LoadingButton({ children, ...props }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} {...props}>
      {!pending ? <CgSpinner className="animate-spin" size={50} /> : children}
    </Button>
  );
}
