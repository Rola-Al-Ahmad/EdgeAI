interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="relative py-3 font-medium duration-300 ease-linear hover:text-primary
               before:content-[''] before:absolute before:w-full before:h-[2px]
               before:right-0 before:bottom-[1px]
               before:bg-gradient-to-r before:from-blue-600 before:to-violet-600
               before:hidden hover:before:block"
      >
        {text}
      </a>
    </li>
  );
};

export default NavItem;
