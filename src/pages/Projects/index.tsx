// Copyright 2024 @polkadot-blockchain-academy/alumni-hub authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { PageRow, PageTitle } from "@polkadot-ui/react"
import MdxCode from "./index.mdx"

export const Projects = () => {
  return (
    <>
      <PageTitle title="Alumni's Projects" />
      <PageRow style={{ paddingTop: "1rem" }}>
        <MdxCode />
      </PageRow>
    </>
  )
}
