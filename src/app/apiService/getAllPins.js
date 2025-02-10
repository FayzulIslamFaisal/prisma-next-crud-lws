const fetchPinDatas = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pin`, {
      next: { revalidate: 1 },
    });

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch pin data:", error);
    return null;
  }
};

export default fetchPinDatas;
