

export interface Question {
  type: "mc" | "mcma" | "fill"
  question: string
  options?: string[]
  answer?: string | number
}
