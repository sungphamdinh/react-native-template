import ggl from "graphql-tag";
import { useQuery } from "react-apollo";
import { useEffect, useMemo } from "react";
import { isNil } from "../../helpers/utils";
import tryParse from "../../helpers/json";

const FETCH_ALL_PRODUCTS = ggl`query {  
  all_product(locale:"en-us") {  
      items {  
          title  
          description  
          price  
          featured_image {  
              url      
          }  
      }  
  }  
}  
`;

interface IAPIReponse {
  all_product: {
    items: IProduct[];
  };
}

interface IProduct {
  title: string;
  price: number;
  description: string;
  featured_image: [
    {
      url: string;
    }
  ];
}

export default function useContentStackGraphQL() {
  const { data, loading, error } = useQuery<IAPIReponse>(FETCH_ALL_PRODUCTS);

  const products: IProduct[] = useMemo(() => {
    if (isNil(!data) || loading || data === undefined) return [];
    return data?.all_product.items;
  }, [data, loading]);

  return {
    products,
    isLoading: loading,
    error,
  };
}
