/** Naievly lists xml element values for the given tag. */
export function list(input: string,tag: string, global: boolean): undefined |string[] {
  const regex: RegExp =  RegExp(`(?:<${tag}>)(.*?)(?:<\/${tag}>)`, "g")
  
  return input.match(regex) || undefined
}

/** Naievly extracts $tag value from xml. */
export function item(input: string, tag: string): undefined | string {
  const regex: RegExp = RegExp(`(?:<${tag}>)(.*?)(?:<\/${tag}>)`)
  
  return input.match(regex)![1]
}