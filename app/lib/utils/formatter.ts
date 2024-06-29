

export const objectToFormData = (obj: any) => {
    const formData = new FormData();
  
    Object.entries(obj).forEach(([key, value]) => {
      formData.append(key, value as any);
    });
    return formData;
};