import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Erro 404" description="Página não encontrada" />
    <h1>404</h1>
    <p>Opss... não tem nada aqui.</p>
  </Layout>
)

export default NotFoundPage
