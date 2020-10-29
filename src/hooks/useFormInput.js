import { useState } from 'react'

export default function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(false)

  function handleChange(e) {
    setError(false)
    setValue(e.target.value)
  }

  return {
    value,
    error,
    onChange: handleChange,
    setError
  }
}
