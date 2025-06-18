import styles from "./infinite-scroll.module.css";

type Props = {
  children: React.ReactNode;
  speed?: string;
  direction?: string;
  className?: string;
  innerClassName?: string;
  pauseOnHover?: boolean;
};

function InfiniteScroll({
  children,
  speed = "normal",
  direction = "right",
  className,
  innerClassName,
  pauseOnHover = false,
}: Props) {
  return (
    <div
      className={`${styles.scroller} ${className}`}
      data-speed={speed}
      data-direction={direction}
      data-animated="true"
      data-pause-on-hover={pauseOnHover}
    >
      <ul
        className={`${styles.tag_list} ${styles.scroller__inner} ${innerClassName ?? ""}`}
      >
        {children}
        {children}
      </ul>
    </div>
  );
}

export default InfiniteScroll;
