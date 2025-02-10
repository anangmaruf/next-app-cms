import { FC } from "react";

interface BannerProps {
  data: {
    title: string;
    image: string;
    url?: string;
  };
}

const Banner: FC<BannerProps> = ({ data }) => {
  return <h3>Banner Component</h3>;
};

export default Banner;
