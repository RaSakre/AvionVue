import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useFiltersStore = defineStore("filters", () => {
    const filters = ref([]);
    const fetchFilters =  async () => {
        const response = await fetch('https://dummyjson.com/products/categories')
        const data = await response.json();
        filters.value = data;
        
    }
    return {
        filters,
        fetchFilters
    }
})