import { ShieldCheck } from "lucide-react";

export default function SecurityNote() {
  return (
    <div className="mt-6 text-center">
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <ShieldCheck className="h-4 w-4" />
        <p>Your information is protected with industry-standard encryption</p>
      </div>
    </div>
  );
}
