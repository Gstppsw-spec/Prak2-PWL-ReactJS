import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style/spanduk.css";
import About from "./about";
import Footer from "./Footer";

export default function List() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  });

  const fetchProducts = async () => {
    await axios.get(`http://localhost:8000/api/products`).then(({ data }) => {
      setProducts(data);
    });
  };

  return (
    
    <div className="container">
      <div className="row">
        <div className="spanduk_nih">
          <h3>Portofolio</h3>
        </div>
        <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">RECENT WORKS</h3>
                
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row toh">
        
        {products.length > 0 &&
          products.map((row, key) => (
            <div className="col-sm-12 col-md-6 col-lg-4" key={key}>
              <div className="work-box">
                <a href={`http://localhost:8000/storage/product/image/${row.image}`} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={`http://localhost:8000/storage/product/image/${row.image}`} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">{row.title}</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            {row.description}
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
          </div>
           
      

        <div className="con ten">
          <About />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
