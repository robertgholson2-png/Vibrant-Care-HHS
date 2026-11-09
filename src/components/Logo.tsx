import { HeartHandshake } from "lucide-react";

// Text logo. To use the real logo image, drop it in /public/images and swap this for an <img>.
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0">
        <HeartHandshake className="w-5 h-5 text-primary-foreground" />
      </span>
      <span className="leading-none">
        <span className={`block font-heading text-lg font-semibold ${light ? "text-white" : "text-foreground"}`}>Vibrant Care</span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.2em] ${light ? "text-white/50" : "text-muted-foreground"}`}>Home Health</span>
      </span>
    </span>
  );
}
