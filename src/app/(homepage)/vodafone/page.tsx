import { cn, poppins } from "@/lib/utils";

export default function Page() {
  return (
    <h1
      className={cn(
        "text-center text-4xl py-10 font-medium text-pink-600 animate-fade-in",
        poppins.className
      )}
    >
      Vodafone
      <br />
      Plans coming soon
    </h1>
  );
}
