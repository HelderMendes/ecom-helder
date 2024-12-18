import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="mx-auto size-32 animate-spin text-blue-400" />
    </div>
  );
}
