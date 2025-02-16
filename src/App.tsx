/* eslint-disable react/jsx-pascal-case */
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { Paper } from "./components/Paper";
import { Text_input } from "./components/text_input/Text_input";
import { theme } from "./utils/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager shouldForwardProp={() => true}>
        <Paper
          style={{
            borderStyle: "dashed",
            display: "flex",
            rowGap: "2rem",
            flexDirection: "column",
          }}
        >
          <Text_input
            on_change={(new_value) => {
              console.log(new_value);
            }}
            error
            required
            name="Text input"
            helper_text="Value is required"
            input_props={{
              placeholder: "Placeholder",
            }}
            wrapper_props={{ style: { width: 400 } }}
          />
          <Text_input
            on_change={(new_value) => {
              console.log(new_value);
            }}
            multiline
            required
            name="Multiline text input with helper text"
            helper_text="Use enter to add a new line"
            input_props={{
              placeholder: "Placeholder",
              rows: 5,
            }}
            wrapper_props={{ style: { width: 400 } }}
          />
          <Text_input
            on_change={(new_value) => {
              console.log(new_value);
            }}
            name="Readonly text input"
            value={"readonly value"}
            input_props={{
              placeholder: "Placeholder",
              readOnly: true,
            }}
            wrapper_props={{ style: { width: 400 } }}
          />
          <Text_input
            on_change={(new_value) => {
              console.log(new_value);
            }}
            name="Disabled input"
            value={"Text"}
            input_props={{
              disabled: true,
            }}
            wrapper_props={{ style: { width: 400 } }}
          />
        </Paper>
      </StyleSheetManager>
    </ThemeProvider>
  );
}

export default App;
