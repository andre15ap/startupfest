import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// import gql from 'graphql-tag';
// import { useQuery } from '@apollo/react-hooks';

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
