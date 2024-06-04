import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      name
      slug
      description
      price
      images {
        id
        url
        fileName
        width
        height
      }
    }
  }
`

export const GET_PRODUCT = gql`
  query product($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      description
      price
      slug
      categories {
        id
        name
      }
      images {
        width
        height
        fileName
        url
      }
      reviews {
        id
        rating
        email
        name
        headline
        content
      }
    }
  }
`
