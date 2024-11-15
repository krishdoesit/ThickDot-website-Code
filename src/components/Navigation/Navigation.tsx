"use client";

import { Link, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, Accordion, AccordionItem, NavbarMenuItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter } from "nextjs-toploader/app";

import settings from "@/../../settings.json";

import LogoIcon from "@/components/Icons/Logo";
import ArrowRightIcon from "@/components/Icons/ArrowRight";
import ChevronDownIcon from "@/components/Icons/ChevronDown";

const Navigation = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const generateNavItems = (NavItems: any) => {
        return NavItems.map((item: any) => {
            if (item.submenus) {
                return (
                    <Dropdown key={item.name} className="mt-4 rounded-xl border border-divider bg-white shadow backdrop-blur-md">
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button size="sm" radius="full" className="bg-transparent px-3 py-1.5 text-base font-medium text-gray-700 hover:bg-gray-100 hover:backdrop-blur-sm">
                                    {item.name}
                                    <ChevronDownIcon size={16} />
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu itemClasses={{ base: "gap-2" }}>
                            {item.submenus.map((subItem: any) => {
                                return (
                                    <DropdownItem key={subItem.name} className="text-gray-600 data-[hover=true]:bg-gray-100" onPress={() => router.push(subItem.url)}>
                                        {subItem.name}
                                    </DropdownItem>
                                );
                            })}
                        </DropdownMenu>
                    </Dropdown>
                );
            } else {
                return (
                    <NavbarItem key={item.name}>
                        <Link href={item.url} className="rounded-full bg-transparent px-3 py-1 text-base font-medium text-gray-700 hover:bg-gray-100 hover:backdrop-blur-sm">
                            {item.name}
                        </Link>
                    </NavbarItem>
                );
            }
        });
    };

    const generateMobileNavItems = (NavItems: any) => {
        return NavItems.map((item: any) => {
            if (item.submenus) {
                return (
                    <Accordion key={item.name} className="-px-2 py-3" itemClasses={{ trigger: "py-0 text-xl", title: "text-xl text-gray-700", content: "flex flex-col gap-2 mt-1" }}>
                        <AccordionItem title={item.name}>
                            {item.submenus.map((subItem: any) => {
                                return (
                                    <Link key={subItem.name} href={subItem.url} onPress={() => setIsMenuOpen(false)} className="w-full px-2 py-0.5 text-lg text-gray-600">
                                        {subItem.name}
                                    </Link>
                                );
                            })}
                        </AccordionItem>
                    </Accordion>
                );
            } else {
                return (
                    <NavbarMenuItem key={item.name}>
                        <Link color="foreground" href={item.url} onPress={() => setIsMenuOpen(false)} className="w-full py-3 text-xl text-gray-700">
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                );
            }
        });
    };

    return (
        <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="2xl" position="sticky" className="bg-white/95" isBordered={isScrolled}>
            <NavbarContent>
                <Link href={"/"}>
                    <NavbarBrand className="grow-0 gap-2">
                        <LogoIcon size={52} />
                        <span className="hidden text-2xl font-bold tracking-wide text-primary-500 md:block">Infinia Tech</span>
                    </NavbarBrand>
                </Link>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarContent justify="end" className="hidden gap-2 md:flex" key="desktop-nav">
                    {generateNavItems(settings.navigation)}
                </NavbarContent>

                <NavbarMenuToggle className="md:hidden" />
                <Button radius="full" variant="flat" color="primary" size="sm" as={Link} href={"/contact"}>
                    Contact
                    <ArrowRightIcon size={16} />
                </Button>
            </NavbarContent>

            <NavbarMenu className="gap-0 divide-y divide-default overflow-hidden border-t border-divider bg-white py-2 backdrop-blur">{generateMobileNavItems(settings.navigation)}</NavbarMenu>
        </Navbar>
    );
};

export default Navigation;
