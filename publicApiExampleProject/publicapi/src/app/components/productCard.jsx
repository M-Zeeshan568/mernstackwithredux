import Link from "next/link";

const productCard = (currentProductsElement) => {
   const {id, brand, category, discountPercentage, images, thumbnail, title, price, rating, stock} =currentProductsElement
  return (
    <>
       <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={images[1]}
               width={100}
               height={200}
              className="rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body ps-2">
              <h5 className="card-ti"> Id: {id} </h5>
              <p className="card-text text-success"> Brand: {brand} </p> 
                <p className="card-text text-success"> Discount Percentage: {discountPercentage} </p> 
                <p className="card-text text-success"> Price: {price} </p> 
                 <p className="text-danger"> Model: {title} </p> 
                  <p> Category: {category} </p>
                  <p> Rating: {rating} </p>
                  <p> Stock: {stock} </p>
                  <p> Thumbnail: {thumbnail} </p>
                 

                 <Link href={`/public-products/${id}`}>
                        <button>
                            Read More
                        </button>
                    </Link>
             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default productCard;
