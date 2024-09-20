import React from "react";
import { IconName } from "boxicons";

interface BoxIconProps {
   name: IconName;
   onClick?: () => void;
   button?: boolean;
}

const BoxIcon: React.FC<BoxIconProps> = ({ name, onClick, button = false }) => {
   return (
      <>
         {!button && <i className={`${name}`} />}
         {button && <button className={`${name}`} onClick={onClick} />}
      </>
   );
};

export default BoxIcon;
