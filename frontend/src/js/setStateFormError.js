import { changeStateObjectData } from './changeStateObjectData'

export function setError(formData, setFormData) {
  for (var key in formData) {
    if (formData.hasOwnProperty(key)) {
      if (formData[key]['aString'] === '') {
        changeStateObjectData(setFormData, key, 'error', true)
      }
    }
  }
}
