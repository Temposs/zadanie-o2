/* eslint-disable react/jsx-pascal-case */
import { useEffect, useState } from "react";
import {
  Styled_border_wrapper,
  Styled_input,
  Styled_input_end_icon,
  Styled_input_wrapper,
  Styled_multiline_input,
} from "./_style";
import { MdOutlineDelete } from "react-icons/md";
import { useTheme } from "styled-components";
import { Typography } from "../Typohraphy";

export function Text_input(props: {
  value?: string;
  error?: boolean;
  warning?: boolean;
  multiline?: boolean;
  name?: string;
  required?: boolean;
  helper_text?: string;
  on_change: (value?: string) => void;
  wrapper_props?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  end_icon?: React.ReactElement;
  input_props?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > &
    React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >;
}) {
  const [value, set_value] = useState(props.value || "");
  const theme = useTheme();
  const [is_hovering, set_is_hovering] = useState(false);
  const [is_focusing, set_is_focusing] = useState(false);

  useEffect(() => {
    set_value(props.value || "");
  }, [props.value]);

  useEffect(() => {
    if (value === (props.value || "")) return;
    props.on_change(value);
  }, [value]);

  function input_is_disabled() {
    return Boolean(props.input_props?.disabled || props.input_props?.readOnly);
  }

  return (
    <div
      {...props.wrapper_props}
      style={{
        ...props.wrapper_props?.style,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          columnGap: "1rem",
          margin: theme.dimension.xs,
        }}
      >
        {props.name && (
          <Typography
            style={{ color: "#2C2C31", lineHeight: "unset" }}
            variant="label-m"
          >
            {props.name}
          </Typography>
        )}
        {props.name && (
          <Typography
            style={{
              color: theme.color.content["on-neutral"].medium,
              lineHeight: "unset",
            }}
            variant="label-s"
          >
            {props.required ? "Required" : "Optional"}
          </Typography>
        )}
      </span>
      <Styled_input_wrapper
        onMouseOver={() => {
          if (input_is_disabled()) return;
          set_is_hovering(true);
        }}
        onMouseLeave={() => {
          if (input_is_disabled()) return;
          set_is_hovering(false);
        }}
      >
        {props.multiline && (
          <Styled_multiline_input
            {...props.input_props}
            onChange={(new_value) => {
              set_value(new_value.currentTarget.value);
            }}
            onFocus={() => {
              set_is_focusing(true);
            }}
            onBlur={() => {
              set_is_focusing(false);
            }}
            value={value}
          />
        )}
        {!props.multiline && (
          <Styled_input
            {...props.input_props}
            placeholder="Placeholder"
            type="text"
            value={value}
            onChange={(new_value) => {
              set_value(new_value.currentTarget.value);
            }}
            onFocus={() => {
              set_is_focusing(true);
            }}
            onBlur={() => {
              set_is_focusing(false);
            }}
          />
        )}
        {value && (
          <Styled_input_end_icon
            onClick={() => {
              if (input_is_disabled()) return;
              set_value("");
            }}
          >
            {props.end_icon || <MdOutlineDelete fontSize={theme.dimension.l} />}
          </Styled_input_end_icon>
        )}
        <Styled_border_wrapper
          error={props.error + ""}
          is_hovering={is_hovering + ""}
          is_focusing={is_focusing + ""}
        />
      </Styled_input_wrapper>
      {props.helper_text && (
        <p
          style={{
            color: props.error
              ? theme.color.surface.danger
              : theme.color.surface["x-high"],
            margin: theme.dimension.xs,
            fontSize: theme.font.label.s.fontSize,
          }}
        >
          {props.helper_text}
        </p>
      )}
    </div>
  );
}
