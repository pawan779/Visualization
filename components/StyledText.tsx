import { Text, TextProps } from "./Themed";

export function StyledText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          // fontFamily: "roboto",
          fontSize: 20,
          fontWeight: "400",
        },
      ]}
    />
  );
}
