import { useLoacalStorage } from "./useLocalStorage";

export function useFilter(dataList, callback) {
   const [query, setQuery] = useLoacalStorage('query', '');

   const filteredData = dataList.filter((data) => 
      callback(data).toLowerCase().includes(query) 
    )
   return [filteredData, setQuery] 
}
