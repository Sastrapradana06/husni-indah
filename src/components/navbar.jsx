import { Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function NavbarComponent() {
  const [opene, { toggle }] = useDisclosure();
  const [opened, { open, close }] = useDisclosure(false);

  const listLink = [
    {
      nama: "home",
      link: "#home",
    },
    {
      nama: "About us",
      link: "#about",
    },
    {
      nama: "love story",
      link: "#story",
    },
    {
      nama: "events",
      link: "#events",
    },
    {
      nama: "gallery",
      link: "#gallery",
    },
    {
      nama: "footer",
      link: "#footer",
    },
  ];

  const showDrawer = () => {
    toggle();
    open();
  };

  const hiddenDrawer = () => {
    toggle();
    close();
  };

  return (
    <div className="w-full lg:w-[40%] h-[100px] flex justify-center items-center border-b  fixed top-0 z-30 bg-white">
      <div className="w-[95%] h-full  flex justify-between items-center">
        <div className="flex flex-col">
          <p className="dancing text-[1.8rem]">Midun & Sindi</p>
          <p className="capitalize text-[.8rem] text-zinc-400 tracking-[2px] -mt-2 font-semibold">
            are just getting married
          </p>
        </div>
        <div className="">
          <Burger
            opened={opene}
            onClick={showDrawer}
            aria-label="Toggle navigation"
          />
        </div>
      </div>
      <Drawer
        offset={8}
        radius="md"
        size="xs"
        opened={opened}
        onClose={hiddenDrawer}
        position="top"
      >
        <div className="w-full h-max flex flex-col gap-3 uppercase justify-center items-center ">
          {listLink.map((item, i) => {
            return (
              <a href={item.link} key={i}>
                <button
                  className="uppercase tracking-[2px] font-semibold hover:text-violet-500 duration-200"
                  onClick={hiddenDrawer}
                >
                  {item.nama}
                </button>
              </a>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
}
