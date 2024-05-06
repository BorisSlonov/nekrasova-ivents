export const getCategories = async () => {
    try {
        const response = await fetch('https://admin.decornekrasova.ru/api/categories/?populate=*');
        if (!response.ok) {
            throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching menu:', error);
        return [];
    }
};