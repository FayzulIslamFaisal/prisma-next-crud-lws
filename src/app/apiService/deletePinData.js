const deletePinData = async (itemId) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/pin/${itemId}/delete`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return await response.json();
  } catch (error) {
    console.error("Failed to delete pin:", error);
    return null;
  }
};

export default deletePinData;
