// ProductSale.js
import React, { useState } from 'react';
import axios from 'axios';
import './VendaCaixa.css'

const ProductSale = ({ onAddProduct }) => {
  const [barcode, setBarcode] = useState('');
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleBarcodeChange = async (e) => {
    const barcode = e.target.value;
    setBarcode(barcode);

    if (barcode.length > 0) {
      try {
        const response = await axios.get(`http://localhost:3000/products/${barcode}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
        setProduct(null);
      }
    } else {
      setProduct(null);
    }
  };

  const handleAddProduct = () => {
    if (product) {
      onAddProduct({ ...product, quantity });
      setBarcode('');
      setProduct(null);
      setQuantity(1);
    }
  };

  return (
    <div style={{background:'#D9D9D9',borderRadius:'7px',borderWidth:'3px', padding:'20px'}} >
      <h2>Produto</h2>
      <div>
        <br />
        <label>Código de Barra:</label>
        <input className='CampoProduto' style={{padding:'5px', borderRadius:'5px'}} type="text" value={barcode} onChange={handleBarcodeChange} />
      </div>
      {product && (
        <div>
          <p className='CampoProduto'>Nome: {product.name}</p>
          <p className='CampoProduto' >Valor Unitário: R$ {product.price.toFixed(2)}</p>
          <div>
            <label>QTD:</label>
            <input className='CampoProduto'
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
            />
          </div>
          <div className='CampoProduto'>
            <p>Valor Total: R$ {(product.price * quantity).toFixed(2)}</p>
          </div>
          <button onClick={handleAddProduct}>Adicionar Produto</button>
        </div>
      )}
    </div>
  );
};

export default ProductSale;
