// Copyright 2023 @polkadot-blockchain-academy/alumni-hub authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Welcome } from "pages/Welcome"
import { Funding } from "pages/Funding"
import type { PageCategoryItems, PagesConfigItems } from "types"

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
    lottie: "globe",
  },
  // {
  //   category: 1,
  //   key: "members",
  //   uri: `${BASE_URL}`,
  //   hash: "/members",
  //   Entry: Members,
  //   lottie: "groups",
  // },
  {
    category: 1,
    key: "Funding",
    uri: `${BASE_URL}`,
    hash: "/funding",
    Entry: Funding,
    lottie: "label",
  },
]
