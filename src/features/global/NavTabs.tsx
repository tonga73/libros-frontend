import React from "react"

import Tabs from "@mui/material/Tabs"

import LinkTab from "./LinkTab"

// CMS ROUTES
import { routes } from "./CMSroutes"

const NavTabs = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Tabs
      variant="fullWidth"
      value={value}
      onChange={handleChange}
      aria-label="example tabs"
    >
      {routes.map(({ label, path }, index) => (
        <LinkTab key={index} to={path} label={label} />
      ))}
    </Tabs>
  )
}

export default NavTabs
