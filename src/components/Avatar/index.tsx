import { ImgHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar(props: Readonly<IAvatarProps>) {
  const { hasBorder = true, ...imageProps } = props;

  return (
    <img
      {...imageProps}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
