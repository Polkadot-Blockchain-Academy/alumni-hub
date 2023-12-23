// Copyright 2023 @polkadot-blockchain-academy/alumni-hub authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"
import { PolkadotUrl } from "consts"
import { PageCategories, PagesConfig } from "config/pages"
import { useUi } from "contexts/UI"
import type { UIContextInterface } from "contexts/UI/types"
import type { PageCategory, PageItem, PagesConfigItems } from "types"
import { useTheme } from "contexts/Themes"

import PBALogo from "img/pbaLogo.svg?react"
import PBALogoBlack from "img/pbaLogo_black.svg?react"
import AcademyHatW from "img/AcademyHat_white.svg?react"
import AcademyHatB from "img/AcademyHat_black.svg?react"
import { Heading } from "./Heading/Heading"
import { Primary } from "./Primary"
import { IconWrapper, LogoWrapper } from "./Wrapper"

export const Main = () => {
  const { t } = useTranslation("base")
  const { mode } = useTheme()
  const { pathname } = useLocation()
  const { sideMenuMinimised }: UIContextInterface = useUi()

  const [pageConfig] = useState({
    categories: Object.assign(PageCategories),
    pages: Object.assign(PagesConfig),
  })

  // remove pages that network does not support
  const pagesToDisplay: PagesConfigItems = Object.values(pageConfig.pages)

  const PBALogoFin = mode != "light" ? PBALogo : PBALogoBlack
  const AcademyHat = mode != "light" ? AcademyHatW : AcademyHatB

  const size = sideMenuMinimised ? "2.4rem" : "2.2rem"
  const Svg = sideMenuMinimised ? (
    <AcademyHat
      style={{
        maxHeight: "100%",
        width: "2rem",
        fill: "var(--accent-color-primary)",
      }}
      width={size}
      height={size}
    />
  ) : (
    <PBALogoFin
      style={{
        maxHeight: "100%",
        height: "100%",
        width: "7.2rem",
        fill: "var(--accent-color-primary)",
      }}
      width={size}
      height={size}
    />
  )

  return (
    <>
      <LogoWrapper
        $minimised={sideMenuMinimised}
        onClick={() => window.open(PolkadotUrl, "_blank")}
      >
        <IconWrapper
          $minimised={sideMenuMinimised}
          className="icon"
          style={{ width: size, height: size }}
        >
          {Svg}
        </IconWrapper>
      </LogoWrapper>

      {pageConfig.categories.map(
        ({ id: categoryId, key: categoryKey }: PageCategory) => (
          <React.Fragment key={`sidemenu_category_${categoryId}`}>
            {/* display heading if not `default` (used for top links) */}
            {categoryKey !== "default" && (
              <Heading title={t(categoryKey)} minimised={sideMenuMinimised} />
            )}

            {/* display category links */}
            {pagesToDisplay.map(
              ({ category, hash, key, icon, action }: PageItem) => (
                <React.Fragment key={`sidemenu_page_${categoryId}_${key}`}>
                  {category === categoryId && (
                    <Primary
                      name={t(key)}
                      to={hash}
                      active={hash === pathname}
                      icon={icon}
                      action={action}
                      minimised={sideMenuMinimised}
                    />
                  )}
                </React.Fragment>
              )
            )}
          </React.Fragment>
        )
      )}
    </>
  )
}
