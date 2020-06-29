import { useState } from "react"

export const useOpenCloseable = ({
  initialIsOpen = false,
}: {
  initialIsOpen?: boolean
} = {}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return { isOpen, open, close }
}
