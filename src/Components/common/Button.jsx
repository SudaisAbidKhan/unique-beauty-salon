function Button({
  as = "a",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const Element = as;
  const variantClass =
    variant === "secondary" ? "btn-secondary" : "btn-primary";

  return (
    <Element className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </Element>
  );
}

export default Button;
