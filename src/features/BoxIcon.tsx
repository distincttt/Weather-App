import React from "react";
import { IconName } from "boxicons";

interface BoxIconProps {
   name: IconName;
   onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
   button?: boolean;
}

const BoxIcon: React.FC<BoxIconProps> = ({
   name,
   onClick,
   button = false,
}): JSX.Element => {
   return (
      <>
         {!button && <i className={`${name}`} />}
         {button && <button className={`${name}`} onClick={onClick} />}
      </>
   );
};

export default BoxIcon;
