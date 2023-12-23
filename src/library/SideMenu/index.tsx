// Copyright 2023 @polkadot-blockchain-academy/alumni-hub authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import throttle from "lodash.throttle"
import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import { SideMenuStickyThreshold } from "consts"
import { useHelp } from "contexts/Help"
import { useTheme } from "contexts/Themes"
import { useUi } from "contexts/UI"
import type { UIContextInterface } from "contexts/UI/types"
import { useOutsideAlerter } from "library/Hooks"
import { Heading } from "./Heading/Heading"
import { Main } from "./Main"
import { Secondary } from "./Secondary"
import { Separator, Wrapper } from "./Wrapper"
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6"
import { IoSunnyOutline, IoMoon, IoLogoGithub } from "react-icons/io5"

// import { useModal } from 'contexts/Modal';

const iconSize = "1.25rem"

export const SideMenu = () => {
  const { t } = useTranslation("base")
  const { mode, toggleTheme } = useTheme()
  // const { openModalWith } = useModal();
  const {
    setSideMenu,
    sideMenuMinimised,
    userSideMenuMinimised,
    setUserSideMenuMinimised,
  }: UIContextInterface = useUi()
  const { openHelp } = useHelp()

  // listen to window resize to hide SideMenu
  useEffect(() => {
    window.addEventListener("resize", windowThrottle)
    return () => {
      window.removeEventListener("resize", windowThrottle)
    }
  }, [])

  const throttleCallback = () => {
    if (window.innerWidth >= SideMenuStickyThreshold) {
      setSideMenu(false)
    }
  }
  const windowThrottle = throttle(throttleCallback, 200, {
    trailing: true,
    leading: false,
  })

  const ref = useRef(null)
  useOutsideAlerter(ref, () => {
    setSideMenu(false)
  })

  return (
    <Wrapper ref={ref} $minimised={sideMenuMinimised}>
      <section>
        <Main />
        <Separator />
        {/* <Secondary
          onClick={() => {
            window.open(
              "",
              "_blank"
            )
          }}
          name={t("info")}
          minimised={sideMenuMinimised}
          icon={{
            Svg: InfoIcon,
            size: sideMenuMinimised ? "1.4em" : "1.2em",
          }}
        /> */}
        <Heading title={t("support")} minimised={sideMenuMinimised} />
        <Secondary
          onClick={() => {
            openHelp(null)
          }}
          name={t("resources")}
          minimised={sideMenuMinimised}
          icon={{
            size: sideMenuMinimised ? "1.5rem" : "1.25rem",
          }}
        />
        <Separator />
      </section>

      <section>
        <button
          type="button"
          onClick={() => setUserSideMenuMinimised(!userSideMenuMinimised)}
        >
          <FontAwesomeIcon
            icon={userSideMenuMinimised ? faExpandAlt : faCompressAlt}
          />
        </button>
        {mode === "dark" ? (
          <button type="button" onClick={() => toggleTheme()}>
            <IoSunnyOutline size={iconSize} />
          </button>
        ) : (
          <button type="button" onClick={() => toggleTheme()}>
            <IoMoon size={iconSize} />
          </button>
        )}
        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/polkadot-blockchain-academy/alumni-hub",
              "_blank"
            )
          }
        >
          <IoLogoGithub size={iconSize} />
        </button>
        <button
          onClick={() =>
            window.open("https://twitter.com/AcademyPolkadot", "_blank")
          }
        >
          <FaSquareXTwitter size={iconSize} />
        </button>
        <button
          onClick={() =>
            window.open(
              "https://www.linkedin.com/school/polkadot-blockchain-academy/",
              "_blank"
            )
          }
        >
          <FaLinkedin size={iconSize} />
        </button>
      </section>
    </Wrapper>
  )
}
