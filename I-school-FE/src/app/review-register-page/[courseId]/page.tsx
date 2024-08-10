"use client"

import Page from 'app/page'
import Header from 'components/page/ReviewRegister/header'
import Register from 'components/page/ReviewRegister/register'

const reviewRegisterPage = () => {
  return(
    <Page title="ReviewRegisterPage">
      <Header/>
      <Register/>
    </Page>    
  )
}

export default reviewRegisterPage
