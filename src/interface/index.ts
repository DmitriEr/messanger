export interface RootReducer {
  themes: {
    [key: string]: string[],
  },
  title: {
    title: string,
  }
}