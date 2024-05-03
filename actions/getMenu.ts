export const getMenuMain = async () => {
    try {
      const response = await fetch('https://admin.decornekrasova.ru/api/menus/1?populate=*');
      if (!response.ok) {
        throw new Error('Failed to fetch menu');
      }
      const data = await response.json();
      return data.data.attributes.items.data;
    } catch (error) {
      console.error('Error fetching menu:', error);
      return [];
    }
  };