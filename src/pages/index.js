import * as React from "react"
import "../styles/global.css"

export const Head = () => (
  <>
    <title>Gatsby Apache Starter</title>
    <meta
      name="description"
      content="A minimal Gatsby website deployed as static files on Apache."
    />
  </>
)

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Gatsby + Apache</p>
        <h1>Your new static website is ready.</h1>
        <p className="intro">
          Edit <code>src/pages/index.js</code>, run <code>npm run build</code>,
          then copy the generated <code>public/</code> directory to Apache’s document root.
        </p>
        <a className="button" href="https://www.gatsbyjs.com/docs/" rel="noreferrer">
          Gatsby documentation
        </a>
      </section>
    </main>
  )
}
