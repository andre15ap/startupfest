import ApolloClient from 'apollo-boost';
// import { ApolloClient } from 'apollo-client';

const client = new ApolloClient({
  uri: 'https://startups-project-mytvsxrgeb.now.sh',
});

export default client;
