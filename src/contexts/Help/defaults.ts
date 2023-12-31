// Copyright 2024 @polkadot-blockchain-academy/alumni-hub authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type { HelpContextInterface } from "./types"

export const defaultHelpContext: HelpContextInterface = {
  // eslint-disable-next-line
  openHelp: (key) => {},
  closeHelp: () => {},
  // eslint-disable-next-line
  setStatus: (status) => {},
  // eslint-disable-next-line
  setDefinition: (definition) => {},
  status: 0,
  definition: null,
}
