import React from "react"
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom"

import { TabProps } from "@mui/material"

import Tab from "@mui/material/Tab"

interface LinkTabProps extends TabProps {
  to: string
  label: string
  component?: React.ElementType
}

const LinkTab = (props: LinkTabProps) => {
  const { to, label, onClick, ...rest } = props

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, "to">>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  )

  return (
    <Tab component={renderLink} onClick={onClick} label={label} {...rest} />
  )
}

export default LinkTab
