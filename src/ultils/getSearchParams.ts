const getSearchParams = (searchParams: URLSearchParams) => ({
  ...Object.fromEntries(searchParams),
});

export default getSearchParams;
