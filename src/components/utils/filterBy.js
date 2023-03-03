import { FilterType } from "./filterType";

export const filterBy = (data, event, filterType) => {
  if (filterType === FilterType.Country) {
    return data.filter((obj) =>
      obj.country.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
  }

  if (filterType === FilterType.Name) {
    return data.filter((obj) =>
      obj.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
  }

  if (filterType === FilterType.Both) {
    return data.filter(
      (obj) =>
        obj.country.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        obj.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
  }
};
