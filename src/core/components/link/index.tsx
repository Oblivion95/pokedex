import { Link as NextUILink } from "@nextui-org/react";
import NextLink from "next/link";

const Link = ({ children, href, ...rest }: React.ComponentProps<typeof NextLink>) => {
  return (
    <NextLink {...rest} href={href} passHref>
      <NextUILink>
        {children}
      </NextUILink>
    </NextLink>
  );
};

export default Link;
