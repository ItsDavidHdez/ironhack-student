export type Sizes = 'S' | 'M' | 'L' | 'XL';

export type Products = {
  title: string;
  createdAt?: Date;
  stock: number;
  size?: SizeType;
};
