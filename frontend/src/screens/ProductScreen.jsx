import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
// import products from '../products'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Card , Row,Image, Col,ListGroup,Button} from 'react-bootstrap'
const ProductScreen = () => {
    const [product,setproduct]=useState([]);
    const { id: productId}=useParams ();
    useEffect(()=>{
        const fetchProducts = async() =>{
          const {data } = await axios.get (`/api/products/${productId}`);
          setproduct(data);
        };
        fetchProducts();
      },[productId]);

 
    return (
    
    <>
        <Link className='btn btn-light my-3' to='/'>Go Back</Link>
        <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.nane} fluid />
            </Col>
            <Col md={4}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews}reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                Price: Rs{product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                <strong>Description:</strong> {product.description}
                </ListGroup.Item>
            </ListGroup>
                
                </Col>
                 <Col md={3}>
                <Card>
                    <ListGroup >
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price: 
                                </Col>
                                <Col>
                                    <strong>{product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item><ListGroup.Item>
                            <Row>
                                <Col>
                                    Status: 
                                </Col>
                                <Col>
                                    <strong>{product.countInStock >0 ? 'In stock' : 'Out Of Stock'} </strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={product.countInStock===0}>Add To Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
        </Row>
    </>
  )
}

export default ProductScreen