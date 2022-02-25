import { changeStateObjectData } from '../js/changeStateObjectData'

export function onChangeFuncForm(setFormData, e) {
  changeStateObjectData(setFormData, e.target.id, 'error', false)
  changeStateObjectData(setFormData, e.target.id, 'aString', e.target.value)
}
