// Copyright 2023 @polkadot-blockchain-academy/alumni-hub authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type React from "react"
import type { FunctionComponent, SVGProps } from "react"
import type { IconType } from "react-icons/lib"

export interface MinimisedProps {
  $minimised?: boolean
}

export interface HeadingProps {
  title: string
  minimised: boolean
}

export interface PrimaryProps {
  name: string
  active: boolean
  to: string
  icon?: IconType
  action: undefined | { type: string; status: string; text?: string }
  minimised: boolean
}

export interface SecondaryProps {
  name: string
  classes?: string[]
  onClick: () => void
  active?: boolean
  to?: string
  icon: IconProps
  action?: React.ReactNode
  minimised: boolean
}

export interface IconProps {
  Svg?: FunctionComponent<SVGProps<SVGSVGElement>>
  size?: string
}
