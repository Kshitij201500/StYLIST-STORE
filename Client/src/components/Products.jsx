import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data)
      } catch (err) {}
    };
    getProduct();
  }, [cat]);

  useEffect(()=>{
    if(cat){
      setFilteredProduct(
        products.filter(item=>
          Object.entries(filters).every(([key,value])=> item[key].includes(value)
          ) 
        )
      );
    }
  },[products,cat,filters]);

  useEffect(()=>{
    if(sort==="newest"){
      setFilteredProduct(prev=>
        [...prev].sort((a,b)=>a.createdAt-b.createdAt)
      );
    } else if(sort==="asc"){
      setFilteredProduct(prev=>
        [...prev].sort((a,b)=>a.price-b.price)
      );
    } else{
      setFilteredProduct(prev=>
        [...prev].sort((a,b)=>b.price-a.price)
      );
    }
  },[sort]);

  return (
    <Container>
      {cat
        ? filteredProduct.map((item) =>
        <Product item={item} key={item.id} />)
        : products.slice(0,8).map((item) =>
          <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
