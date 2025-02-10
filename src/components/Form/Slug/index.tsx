import { FC } from "react";

interface SlugProps {
  value: string;
  onChange: (value: string) => void;
}

const Slug: FC<SlugProps> = ({ value, onChange }) => {
  return <input type="text" placeholder="input your slug" className="py-1 px-3 border-2 border-[#eeeeee] rounded-md" />;
};

export default Slug;
