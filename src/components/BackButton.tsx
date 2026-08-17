import { ArrowLeft } from "lucide-react";
import { useRouter } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  fallbackUrl?: string;
  className?: string;
  label?: string;
  onClick?: () => void;
}

export function BackButton({ fallbackUrl = "/", className, label = "Back", onClick }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (window.history.length > 2) {
      window.history.back();
    } else {
      router.navigate({ to: fallbackUrl });
    }
  };

  return (
    <button
      onClick={handleBack}
      className={cn(
        "group flex items-center text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors py-2 mb-2",
        className
      )}
      aria-label="Go back"
    >
      <ArrowLeft className="size-4 mr-2 transition-transform group-hover:-translate-x-1" />
      {label}
    </button>
  );
}
