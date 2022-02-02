

import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import './index.css'

const productList = getProductList(20);

renderGoodsList(productList);