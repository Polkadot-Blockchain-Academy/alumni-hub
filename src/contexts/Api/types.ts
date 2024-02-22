// Copyright 2024 @polkadot-blockchain-academy/alumni-hub authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type { AnyJson } from "@polkadot-ui/react/types"
import type { ApiPromise } from "@polkadot/api"
import type { ReactNode } from "react"

export type ApiStatus = "connecting" | "connected" | "disconnected"
export type NetworkName = "polkadot" | "kusama" | "westend"

export interface APIProviderProps {
  children: ReactNode
  network: NetworkName
}

// export interface NetworkState {
//   name: NetworkName
//   meta: Network
// }
// export interface APIConstants {
//   bondDuration: BigNumber
//   maxNominations: BigNumber
//   sessionsPerEra: BigNumber
//   maxExposurePageSize: BigNumber
//   historyDepth: BigNumber
//   maxElectingVoters: BigNumber
//   expectedBlockTime: BigNumber
//   epochDuration: BigNumber
//   existentialDeposit: BigNumber
//   fastUnstakeDeposit: BigNumber
//   poolsPalletId: U8aLike
// }

export type APIChainState = {
  chain: string | null
  version: AnyJson
  ss58Prefix: number
}

export interface APIContextInterface {
  api: ApiPromise | null
  isReady: boolean
  apiStatus: ApiStatus
  // rpcEndpoint: string
  // setRpcEndpoint: (key: string) => void
  // consts: APIConstants
  // chainState: APIChainState
  // isLightClient: boolean
  // setIsLightClient: (isLightClient: boolean) => void
}
