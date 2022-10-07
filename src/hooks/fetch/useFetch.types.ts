export type Fetcher = (
  path: string,
  method?: "GET" | "POST" ,
) => any;