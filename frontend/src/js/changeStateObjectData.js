export function changeStateObjectData(
  setFormData,
  mainKey,
  secondaryKey,
  newData
) {
  setFormData((prevState) => ({
    ...prevState,
    [mainKey]: {
      ...prevState[[mainKey]],
      [secondaryKey]: newData,
    },
  }))
}
