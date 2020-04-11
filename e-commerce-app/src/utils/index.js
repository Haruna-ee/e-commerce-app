export const createdOptionData = (array) => {
    const newArry = [];
    array.forEach((element) => {
      const newData = {
        value: { ...element },
        text: element.title,
      };
      newArry.push(newData);
    });
    return newArry;
  };