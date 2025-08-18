import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "px-4 py-2 has-[>svg]:px-3 bg-primary/30 shadow-xs hover:bg-primary/90 focus-visible:border-primary inline-flex items-center justify-center gap-2 border-1 border-transparent whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none p-[10px] ",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/80 focus-visible:border-primary focus-visible:ring-primary/50",
        destructive:
          "bg-destructive text-background border-transparent text-destructive-foreground shadow-xs hover:bg-destructive/80 focus-visible:border-destructive focus-visible:ring-destructive/50",
        outline:
          "bg-primary/1 border-primary border-primary/100 hover:bg-primary/10",
        secondary:
          "bg-secondary border-transparent text-secondary-foreground shadow-xs hover:bg-secondary/80 focus-visible:border-secondary focus-visible:ring-secondary/50",
        ghost:
          "bg-transparent text-foreground border-transparent hover:bg-primary/20 hover:text-accent-foreground focus-visible:border-accent focus-visible:ring-accent/50",
        link: "bg-transparent border-transparent text-primary underline-offset-4 hover:underline focus-visible:border-transparent focus-visible:ring-transparent hover:bg-transparent",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-7 rounded-md gap-1 px-3 has-[>svg]:px-2 size-2",
        lg: "h-11 rounded-md px-6 has-[>svg]:px-4 size-6",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
