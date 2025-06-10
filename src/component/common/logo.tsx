import Image from "next/image";

type LogoProps = {
  headClassName?: string;
  textClassName?: string;
  className?: string;
};

export function Logo({ headClassName, textClassName, className }: LogoProps) {
  return (
    <div className={className}>
      <Image
        src="/logo/head-logo.svg"
        alt="redidn-head-logo"
        width={0}
        height={0}
        className={headClassName}
      />
      <Image
        src="/logo/text-logo.svg"
        alt="redidn-text-logo"
        width={0}
        height={0}
        className={textClassName}
      />
    </div>
  );
}
