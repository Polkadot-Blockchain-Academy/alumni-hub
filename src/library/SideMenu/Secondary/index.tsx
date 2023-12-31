// Copyright 2024 @polkadot-blockchain-academy/alumni-hub authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type { SecondaryProps } from "../types"
import { IconWrapper, MinimisedWrapper, Wrapper } from "./Wrappers"
import { CiCircleInfo } from "react-icons/ci"

export const Secondary = ({
  action,
  classes,
  name,
  icon,
  minimised,
  onClick,
}: SecondaryProps) => {
  const { size } = icon || {}

  const StyledWrapper = minimised ? MinimisedWrapper : Wrapper

  return (
    <StyledWrapper
      className={classes ? classes.join(" ") : undefined}
      onClick={() => {
        onClick()
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.1,
      }}
    >
      <IconWrapper
        $minimised={minimised}
        className="icon"
        style={{ width: size, height: size }}
      >
        <CiCircleInfo size={size + "rem"} />
      </IconWrapper>

      {!minimised && (
        <>
          <div className="name">{name}</div>
          {action && <div className="action">{action}</div>}
        </>
      )}
    </StyledWrapper>
  )
}
