import { gql } from 'apollo-boost';

export const GET_STARTUPS = gql`
  {
    allStartups {
      name
      imageUrl
      description
      Segment {
        name
      }
    }
  }
`;
