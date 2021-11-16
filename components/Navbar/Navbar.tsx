import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import {
    Header,
    Nav,
    MenuContainer,
    Menu,
    MenuTitle,
    Item,
    MobileIcon
} from './Navbar.elements';
import { FaTimes, FaBars } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { EActionTypes } from '../../types/types';

enum NavbarItems {
    RANKING,
    TOURNAMENTS,
    NEWS,
    ACCOUNT
};

export default function Navbar() {
    const { state, dispatch } = useContext(GlobalContext);

    const [display, setDisplay] = useState<NavbarItems | null>(null);
    const [displayLateralNavbar, setDisplayLateralNavbar] = useState<boolean>(false)

    const handleClick = (item: NavbarItems): void => display === item ? setDisplay(null) : setDisplay(item);

    return (
        <Header>
            <Nav>
                <Image src="/logos/ATP.png" alt='ATP Logo' width={40} height={40} />
                <Link href="/" >Tennis World</Link>
                <MobileIcon onClick={() => setDisplayLateralNavbar(!displayLateralNavbar)}>
                    {displayLateralNavbar ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <MenuContainer isDisplayed={displayLateralNavbar}>
                    <Menu>
                        <MenuTitle onClick={() => handleClick(NavbarItems.RANKING)} isDisplayed={display === NavbarItems.RANKING}>Rankings</MenuTitle>
                        <Item isDisplayed={display === NavbarItems.RANKING}>
                            <Link href="/ranking">Ranking ATP / WTA</Link>
                            <Link href="/race-ranking">Race To The Finals</Link>
                        </Item>
                    </Menu>
                    <Menu>
                        <MenuTitle onClick={() => handleClick(NavbarItems.TOURNAMENTS)} isDisplayed={display === NavbarItems.TOURNAMENTS}>Tournaments</MenuTitle>
                        <Item isDisplayed={display === NavbarItems.TOURNAMENTS}>
                            <Link href="/current-tournaments">Current Tournaments</Link>
                            <Link href="/season">Season Calendar</Link>
                        </Item>
                    </Menu>
                    <Menu>
                        <MenuTitle onClick={() => handleClick(NavbarItems.NEWS)} isDisplayed={display === NavbarItems.NEWS}>News</MenuTitle>
                        <Item isDisplayed={display === NavbarItems.NEWS}>
                            <Link href="/news">News</Link>
                            <Link href="/user-articles">Your Saved Articles</Link>
                        </Item>
                    </Menu>
                    <Menu>
                        <MenuTitle onClick={() => handleClick(NavbarItems.ACCOUNT)} isDisplayed={display === NavbarItems.ACCOUNT}>Your Account</MenuTitle>
                        <Item isDisplayed={display === NavbarItems.ACCOUNT}>
                            {state !== null ?
                                <Link href="/">
                                    <a onClick={() => dispatch({ type: EActionTypes.LOGOUT })}>Logout</a>
                                </Link>
                                :
                                <>
                                    <Link href="/signin">Sign in</Link>
                                    <Link href="/signup">Sign up</Link>
                                </>
                            }
                        </Item>
                    </Menu>
                </MenuContainer>
                <Image src="/logos/WTA.svg" alt='WTA Logo' width={40} height={40} />
            </Nav>
        </Header>
    )
};