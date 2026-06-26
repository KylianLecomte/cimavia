import { View, type ViewProps } from "react-native";

type CmvViewProps = Pick<ViewProps, "children" | "testID"> & {
  className?: string;
};

export function CmvView({ children, className, ...rest }: CmvViewProps) {
  return (
    <View {...(className !== undefined && { className })} {...rest}>
      {children}
    </View>
  );
}
