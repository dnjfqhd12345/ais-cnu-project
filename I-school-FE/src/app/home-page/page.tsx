"use client"

import Page from "app/page"
import HomeTitle from "components/page/Home/HomeTitle"
import HomeButton from "components/page/Home/HomeButton"
import NavBar from "components/page/Home/NavBar"

const HomePage = () => {
  return(
    <Page title="HomePage">
      <HomeTitle/>
      <HomeButton/>
      <NavBar/>
    </Page>
  )
}

export default HomePage
