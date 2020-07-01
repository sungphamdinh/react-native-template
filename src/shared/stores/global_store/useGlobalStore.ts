import { ApolloClient } from "apollo-client";
import { useState, useEffect } from "react";
import makeApolloClient from "./apollo";
import { createContainer } from "unstated-next";

function useGlobalStore() {
  const [apolloClient, setApolloClient] = useState<
    ApolloClient<any>
  >();

  useEffect(() => {
    function fetchSession() {
      const token = "cscd5a86465a89929407f8fd9c"; // get it from any local store
      const client = makeApolloClient(token);
      setApolloClient(client);
    }

    fetchSession();
  }, []);

  return {
    apolloClient
  }
}

export default createContainer(useGlobalStore);
