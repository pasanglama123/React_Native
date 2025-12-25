import { useContext } from "react"
import { BooksContext } from "../contexts/BooksContex"

export function useBooks() {
  const context = useContext(BooksContext)

  if (!context) {
    throw new Error("useUser must be used within a BooksProvider")
  }

  return context
}