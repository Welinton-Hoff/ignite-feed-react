import styles from "./styles.module.css";

interface IAvatarProps {
  src: string;
  alt: string;
  hasBorder?: boolean;
}

export function Avatar(props: Readonly<IAvatarProps>) {
  const { src, alt, hasBorder = true } = props;

  return (
    <img
      alt={alt}
      src={src}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
