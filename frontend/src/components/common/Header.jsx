import HeaderLogo from "./HeaderLogo";
import Container from "./Container";

import HeaderItems from "./HeaderItems";
import ToggleSidebar from "./ToggleSidebar";

const Header = () => {
  return (
    <div className="w-full  border-b-2 border-gray-300 h-[64px] md:h-[75px]">
      <Container>
        <HeaderItems />
      </Container>
      <div className="flex px-5 py-0 h-full justify-between items-center md:hidden my-0 mx-0">
        <HeaderLogo />
        <ToggleSidebar />
      </div>
    </div>
  );
};

export default Header;
