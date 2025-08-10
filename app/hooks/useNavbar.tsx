import { useRef } from "react";

export const useNavbar = () => {
    const sideMenuRef = useRef<HTMLUListElement>(null);

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(-16rem)'
        }
    }

    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)'
        }
    }

    return {
        sideMenuRef,
        openMenu,
        closeMenu
    }
}