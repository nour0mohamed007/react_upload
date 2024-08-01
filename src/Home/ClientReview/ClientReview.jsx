// ClientReviewsComponent.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination} from 'swiper/modules';
import ClientReviews from '../../DB/ClientReviews'; 
import "./ClientReview.css";

const ClientReviewsComponent = () => {
    return (
        <div className="client-reviews">
            <div className="heading">
                <h2>What's Our Client Say</h2>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination ]}
            >
                {
                    ClientReviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="client-content">
                                <div className="img">
                                    <img src={review.img} alt={review.reviewerName} />
                                </div>
                                <div className="review">
                                    <p>{review.reviewText}</p>
                                </div>
                                <div className="reviewer-name">
                                    <h4>{review.reviewerName}</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
};

export default ClientReviewsComponent;
