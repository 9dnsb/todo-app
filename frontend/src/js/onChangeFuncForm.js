import { changeStateObjectData } from '../js/changeStateObjectData'

export function onChangeFuncForm(setFormData, e, target = e.target.id) {
  changeStateObjectData(setFormData, target, 'error', false)
  changeStateObjectData(setFormData, target, 'aString', e.target.value)
}
