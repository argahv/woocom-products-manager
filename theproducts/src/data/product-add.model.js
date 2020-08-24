import * as Yup from 'yup';

export class ProductAddData {
  constructor(
    name,
    type,
    regular_price,
    description,
    categories,
    images,
    short_description,
    sale_price,
    manage_stock,
    stock_quantity,
  ) {}
  static empty() {
    // return new ProductAddData('', '', '', '', '', '', '', '', false, '');
    return new ProductAddData('', '', '', '', [], [], '', '', false, '');
  }
}

export const ProductAddSchema = Yup.object().shape({
  name: Yup.string().required('Name of the Product is required'),
  regular_price: Yup.number().required('What is the regular price?'),
  categories: Yup.string().required('Please select a category'),
  images: Yup.array().required('Atleast ONE image is required'),
  description: Yup.string().required(''),
});
