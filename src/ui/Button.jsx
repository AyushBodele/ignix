import React from "react";
import { FiLoader } from "react-icons/fi";

export function Button({
  children,
  variant = "primary",      // primary | secondary | outline | ghost
  size = "md",              // sm | md | lg
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  href,
  onClick,
  className = "",
  type = "button",
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus:outline-none cursor-pointer";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "border-[3px] border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "text-gray-700 hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-sm",
    lg: "px-7 py-3 text-base",
  };

  const disabledStyles = disabled || loading
    ? "opacity-60 cursor-not-allowed"
    : "";

  const content = (
    <>
      {loading ? (
        <FiLoader className="animate-spin w-4 h-4" />
      ) : (
        leftIcon
      )}

      {children}

      {!loading && rightIcon}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
    >
      {content}
    </button>
  );
}
