// Copyright 2023 @polkadot-blockchain-academy/alumni-hub authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { PageRow, PageTitle } from "@polkadot-cloud/react"
import MdxCode from "./index.mdx"

export const Ecosystem = () => {
  return (
    <>
      <PageTitle title="Around Polkadot's Ecosystem" />
      <PageRow style={{ paddingTop: "1rem" }}>
        <MdxCode />
      </PageRow>
    </>
  )
}
