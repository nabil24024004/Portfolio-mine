import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    // Support in-page hash links like "#about" with smooth scrolling
    if (typeof to === "string" && to.startsWith("#")) {
      const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();
        const el = document.querySelector(to);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      };

      return (
        <a
          ref={ref}
          href={to}
          className={cn(className)}
          onClick={handleClick}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }

    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
