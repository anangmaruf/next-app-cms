import { FC } from "react";

interface SpinnerLoaderProps {
  size?: number;
}

const SpinnerLoader: FC<SpinnerLoaderProps> = ({ size }) => {
  return <div className={`loader-spinner w-${size}`}></div>;
};

export default SpinnerLoader;
