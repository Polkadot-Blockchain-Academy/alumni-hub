// Copyright 2023 @polkadot-blockchain-academy/alumni-hub authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Welcome } from "pages/Welcome"
import { Funding } from "pages/Funding"
import { Fellowship } from "pages/Fellowship"
import { Ecosystem } from "pages/Ecosystem"
import { Projects } from "pages/Projects"

import type { PageCategoryItems, PagesConfigItems } from "types"
import { PiStudentFill } from "react-icons/pi"
import { RiFundsBoxFill } from "react-icons/ri"
import { HiMiniUserGroup } from "react-icons/hi2"
import { BiWorld } from "react-icons/bi"
import { AiFillProject } from "react-icons/ai"

const BASE_URL = import.meta.env.BASE_URL

export const PageCategories: PageCategoryItems = [
  {
    id: 1,
    key: "default",
  },
]

export const PagesConfig: PagesConfigItems = [
  {
    category: 1,
    key: "welcome",
    uri: `${BASE_URL}`,
    hash: "/welcome",
    Entry: Welcome,
    icon: PiStudentFill,
  },
  {
    category: 1,
    key: "Funding",
    uri: `${BASE_URL}`,
    hash: "/funding",
    Entry: Funding,
    icon: RiFundsBoxFill,
  },
  {
    category: 1,
    key: "Fellowship",
    uri: `${BASE_URL}`,
    hash: "/fellowship",
    Entry: Fellowship,
    icon: HiMiniUserGroup,
  },
  {
    category: 1,
    key: "Ecosystem",
    uri: `${BASE_URL}`,
    hash: "/ecosystem",
    Entry: Ecosystem,
    icon: BiWorld,
  },
  {
    category: 1,
    key: "Projects",
    uri: `${BASE_URL}`,
    hash: "/projects",
    Entry: Projects,
    icon: AiFillProject,
  },
]
