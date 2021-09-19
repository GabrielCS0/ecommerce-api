export interface ICreateProductDTO {
  title: string
  desc: string
  img: string
  categories?: string[]
  size?: string
  color?: string
  price: number
}
