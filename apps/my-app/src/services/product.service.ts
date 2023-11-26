import axios from "axios";

class ProductService {
  public getProducts = async (param: string) => {
    try {
      const response = await axios.get(`/api/store?link=${param}`);
      const data = await response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  };
}

export default ProductService;
