import { useTheme } from "@quillforms/renderer-core";
import React, { SetStateAction, useEffect } from "react";
import { Dispatch } from 'redux';
import tinyColor from 'tinycolor2';
import { css } from "emotion";

interface ExampleBlockProps {
  id: string;
  attributes: {
    required: boolean;
    start: number;
    end: number;
  };
  setIsValid: Dispatch<SetStateAction<any>>;
  setIsAnswered: Dispatch<SetStateAction<any>>;
  setValidationErr: Dispatch<SetStateAction<any>>;
  isActive: boolean;
  val: any;
  setVal: Dispatch<SetStateAction<any>>;
  next: () => void;
}

let timer: ReturnType<typeof setTimeout>;

/**
 * ExampleBlock
 * This is the example block from the QuillForms documentation, but Typescript, no other changes.
 */
const ExampleBlock = ({
                        id,
                        attributes,
                        setIsValid,
                        setIsAnswered,
                        setValidationErr,
                        isActive,
                        val,
                        setVal,
                        next,
                      }: ExampleBlockProps) => {
  const {required, start, end} = attributes;
  const theme = useTheme();
  const answersColor = tinyColor(theme.answersColor);

  const checkFieldValidation = (value: string) => {
    if (required && (!value || value === "")) {
      setIsValid(false);
      setValidationErr("ERROR");
    } else {
      setIsValid(true);
      setValidationErr(null);
    }
  };

  const items: number[] = [];
  for (let i = start; i <= end; i++) {
    items.push(i);
  }

  useEffect(() => {
    if (!isActive) {
      clearTimeout(timer);
    }
  }, [isActive]);

  useEffect(() => {
    checkFieldValidation(val);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [val]);

  return (
    <>
      <div
        className={
          css`display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 62px;
            margin-top: 15px;
          `
        }
      >
        {
          items.map((item) => {
            return (
              <div
                className={
                  css`
                    height: 100%;
                    @media (min-width: 768px) {
                      flex: 1 1 0%;
                    }
                    @media (max-width: 767px) {
                      min-width: 50px;
                      flex-basis: calc(${100 / items.length}% - 6px);
                    }
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    outline: none;
                    cursor: pointer;
                    user-select: none;
                    margin-right: 6px;
                    margin-bottom: 10px;
                    border-radius: 4px;
                    background-color: ${answersColor.setAlpha(0.1).toString()};
                    color: ${answersColor.setAlpha(1).toString()};
                    box-shadow: ${answersColor.setAlpha(0.6).toString()} 0px 0px 0px 1px inset;
                    position: relative;
                    transition: all 0.1s ease-out 0s;

                    &:hover {
                      background: ${answersColor.setAlpha(0.2).toString()};
                    }

                    &:last-child {
                      margin-right: 0;
                    }

                    &.selected {
                      background: ${tinyColor(theme.answersColor)
                              .setAlpha(0.75)
                              .toString()};
                      color: ${tinyColor(theme.answersColor).isDark()
                              ? "#fff"
                              : "#333"};
                    }
                  `
                  + (val === item ? " selected" : "")}
                key={item}
                onClick={() => {
                  // @ts-ignore
                  if (val !== item) {
                    setVal(item);
                    timer = setTimeout(() => {
                      setIsAnswered(true);
                      next();
                    }, 500);
                  } else {
                    clearTimeout(timer);
                    setIsAnswered(false);
                    setVal("");
                  }
                }}
              >
                {item}
              </div>
            );
          })}
      </div>
    </>
  );
};
export default ExampleBlock;
