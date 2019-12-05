import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'

import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

export const IndexPage = () => (
  <>
    <h2>Hi people</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/another-page/">Go to another page</Link>
    </p>
    <p>
      <Link to="/all/">See content generated from Markdown files</Link>
    </p>
    <DeleteIcon />

    <Button variant="contained" color="primary">
      Click me!
    </Button>
  </>
)

const LayoutIndexPage = () => (
  <Layout>
    <IndexPage />
  </Layout>
)

export default LayoutIndexPage
