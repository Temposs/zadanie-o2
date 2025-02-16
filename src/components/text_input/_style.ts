import { styled } from "styled-components";

export const Styled_input = styled.input`
  ${({ theme }) => {
    return `
        border: none;
        height: 100%;
        width: 100%;
        padding: ${theme.dimension.s}px ${theme.dimension.xs}px ${theme.dimension.s}px ${theme.dimension.m}px;
        &:focus {
            border-color: white;
            outline: none;
        };
        font-size: ${theme.font.body.style.m.fontSize}px;
        line-height: ${theme.font.body.style.m.lineHeight};
        letter-spacing: ${theme.font.body.style.m.letterSpacing}px;
    `;
  }}
`;

export const Styled_multiline_input = styled.textarea`
  ${({ theme }) => {
    return `
        border: none;
        height: 100%;
        width: 100%;
        resize: none;
        font-size: ${theme.font.body.style.m.fontSize}px;
        line-height: ${theme.font.body.style.m.lineHeight};
        letter-spacing: ${theme.font.body.style.m.letterSpacing}px;
        padding: ${theme.dimension.s}px ${theme.dimension.xs}px ${theme.dimension.s}px ${theme.dimension.m}px;
        &:focus {
            border-color: white;
            outline: none;
        };
    `;
  }}
`;

export const Styled_border_wrapper = styled.div<{
  error?: string;
  is_hovering?: string;
  is_focusing?: string;
}>`
  ${({ theme, is_hovering, is_focusing, error }) => {
    let border_color = theme.color.surface["x-high"] as string;
    if (is_hovering === "true") {
      border_color = theme.color.surface["x-middle"];
    }
    if (is_focusing === "true") {
      border_color = theme.color.state.default.focus;
    }
    if (error === "true") {
      border_color = theme.color.surface.danger;
    }

    return `
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0px;
        left: 0px;
        border-style: solid;
        border-width: ${is_focusing === "true" ? "3px" : "2px"};
        border-color: ${border_color};
        border-radius: ${theme.dimension.radius.input}px;
        pointer-events: none;
    `;
  }}
`;

export const Styled_input_wrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const Styled_input_end_icon = styled.div`
  ${({ theme }) => {
    return `
        margin-right: 14px;
        display: flex;
        align-items: center;
        cursor: pointer;
        color: ${theme.color.surface["x-high"]};
        &:hover {
            color: ${theme.color.surface["x-middle"]};
        };
    `;
  }}
`;
