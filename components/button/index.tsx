import React, { forwardRef } from "react";
import { ButtonStyledComponent } from "./button.style";
import { IButtonProps } from "./i-button";

const Button: React.FC<IButtonProps> = forwardRef<
  HTMLButtonElement,
  IButtonProps
>(
  (
    {
      isLoading,
      variant,
      width,
      children,
      fullWidth,
      onClick,
      type = "button",
      ...rest
    },
    ref: any
  ) => {
    return (
      <ButtonStyledComponent
        fullWidth={fullWidth}
        type={type}
        variant={variant}
        onClick={onClick}
        ref={ref}
        width={width}
        disabled={isLoading}
        {...rest}
      >
        <span>{children}</span>
      </ButtonStyledComponent>
    );
  }
);

Button.displayName = "Button";

export default Button;
