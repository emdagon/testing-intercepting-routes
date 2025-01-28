import { ReactNode } from "react";

type PipelineLayoutProps = React.PropsWithChildren<{
  item: ReactNode;
}>;

const PipelineLayout = ({ children, item }: PipelineLayoutProps) => {
  return (
    <>
      {children}
      {item}
    </>
  );
};

export default PipelineLayout;
