export const getCategories = async () => {
    try {
        const response = await fetch(`${process.env.API_URL}categories/?populate=*`, {
            next: { revalidate: 60 },
        });
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