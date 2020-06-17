import React from "react"

import Layout from "../components/Layout/index"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Ops, nada por aqui.</p>
  </Layout>
)

export default NotFoundPage
