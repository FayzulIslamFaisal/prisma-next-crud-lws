const updatePinData = async (itemId, formData) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/pin/${itemId}/edit`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    return await response.json();
  } catch (error) {
    console.error("Failed to delete pin:", error);
    return null;
  }
};

export default updatePinData;
