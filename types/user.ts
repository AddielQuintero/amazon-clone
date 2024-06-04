export interface UserType {
  uid: string
  email: string | null
  displayName?: string | null
}

export interface UserState {
  user: UserType | null
}
