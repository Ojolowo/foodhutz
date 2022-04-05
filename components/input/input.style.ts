import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { IInputProps } from "./i-input";

export const Div = styled.div<{ fullWidth?: boolean | undefined }>`
  ${({ fullWidth }) => fullWidth && "width: 100%;"}
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: 1.75em;
`;

export const Label = styled.label`
  pointer-events: none;
  white-space: nowrap;
  margin-bottom: 0.75rem;
  font-size: 14px;
  display: block;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.secondary};
  transition: font-weight ease-in-out 0.2s;
`;

export const AdornmentWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  position: absolute;
  padding-left: 10px;
  margin-right: 10px;

  &.end {
    right: 0px;
    ouline: none;
    border: none;
    top: 30%;
  }
`;

export const InputFieldWrapperDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 5px;

  ::before,
  ::after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  ::before {
    /* border-left: linear-gradient(270deg, #00d2ff -8.34%, #7e51ff 50.93%, #fa4a84 106.85%); */
    border-left: 1px solid ${({ theme }) => theme.colors?.secondary};
  }
`;

export const InputField = styled.input<IInputProps>`
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  appearance: none;
  border-radius: 0;
  padding: 0 ${({ startAdornment }) => (startAdornment ? "3.8rem" : "1rem")};
  box-sizing: border-box;
  border-radius: 0px;
  border: 1px solid #888a8e;
  background-color: transparent;
  height: 48px;
  border-radius: 5px;

  &:focus {
    border-left: 1px solid secondary;
  }

  &::-ms-clear {
    display: none;
  }

  &::-ms-expand {
    display: none;
  }

  &:-moz-ui-invalid {
    box-shadow: none;
  }

  &::placeholder {
    font-weight: 400;
    color: #888a8e;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: #000 !important;
  }

  &:disabled {
    background-color: hsl(0, 0%, 95%);
  }
`;

export const ErrorP = styled(motion.p)<{ easyFlow?: boolean }>`
  margin: 0.1rem 0 0 0;
  color: ${({ theme }) => theme.colors?.error};
  font-size: 14px;
  letter-spacing: -0.01rem;
  font-weight: 400;

  ${({ easyFlow }) =>
    easyFlow &&
    css`
      margin: 0;
      position: absolute;
      left: 65px;
      bottom: -21px;
      font-size: 11.5px;
    `}
`;

export const PasswordControlButton = styled.div`
  background: none;
  border: 0;
  width: 45px;
  position: absolute;
  right: 20px;
  top: 3px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors?.primary};
  font-weight: ${({ theme }) => theme.fontWeights?.medium};
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
`;

export const TagText = styled.small`
  color: ${({ theme }) => theme.colors?.secondary};
  font-style: italic;
  max-width: 500px;
`;
