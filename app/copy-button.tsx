"use client";

import { MdContentCopy } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function CopyButton() {
  const { toast } = useToast();
  return (
    <Button
      variant={"outline"}
      className="h-full bg-[#18181b] text-white"
      onClick={() => {
        navigator.clipboard.writeText("git clone github.com/zyncc/z3-stack");
        toast({
          title: "Copied to Clipboard!",
        });
      }}
    >
      <MdContentCopy size={100} />
    </Button>
  );
}
