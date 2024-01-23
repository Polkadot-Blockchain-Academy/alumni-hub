// Copyright 2024 @polkadot-blockchain-academy/alumni-hub authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { PageRow, PageTitle } from "@polkadot-cloud/react"
import MdxCode from "./index.mdx"
import { YouTube } from "library/YouTube"

export const Welcome = () => {
  return (
    <>
      <PageTitle title="Welcome" />
      <PageRow style={{ paddingTop: "1rem" }}>
        <MdxCode components={{ YouTube }} />
      </PageRow>
    </>
  )
}
