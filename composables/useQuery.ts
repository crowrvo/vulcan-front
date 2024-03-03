export const useQuery = <T>() => {
  const { query } = useRoute();
  return query as T;
};
