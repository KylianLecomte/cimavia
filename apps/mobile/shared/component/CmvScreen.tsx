import type { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type CmvScreenProps = {
  children: ReactNode;
  className?: string;
};

export function CmvScreen({ children, className }: CmvScreenProps) {
  return <SafeAreaView className={`flex-1 bg-white ${className ?? ""}`}>{children}</SafeAreaView>;
}
