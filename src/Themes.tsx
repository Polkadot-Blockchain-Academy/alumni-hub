// Copyright 2024 @polkadot-blockchain-academy/alumni-hub authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { ThemeProvider } from "styled-components"
import { Entry } from "@polkadot-ui/react"
import { Router } from "Router"
import { useTheme } from "contexts/Themes"

// App-wide theme classes are inserted here.
//
// App-specific theming is added to `ThemeProvider`.
// `@polkadot/core-ui` themes are added to `Entry`.
export const ThemedRouter = () => {
  const { mode } = useTheme()

  return (
    <ThemeProvider theme={{ mode }}>
      <Entry mode={mode} theme="polkadot">
        <Router />
      </Entry>
    </ThemeProvider>
  )
}
