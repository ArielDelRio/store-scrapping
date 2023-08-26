class ProductService {
  public getProducts = async (param: string) => {
    try {
      const response = await fetch(`/api/store?link=${param}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
}

export default ProductService;
