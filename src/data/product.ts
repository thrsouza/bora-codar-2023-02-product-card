interface Product {
  id: number
  name: string
  value: number
  image: {
    filePath: string
    file3dPath: string
  }
}

export const product: Product = {
  id: 42404,
  name: 'Sofá Margot II - Rosé',
  value: 4000,
  image: {
    filePath: '/assets/couch.png',
    file3dPath: '/assets/couch.gif',
  }
}
