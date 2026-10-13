
"use client";

import Link from "next/link";
import { Star, UserRound } from "lucide-react";

type Review = {
    id: number;
    name: string;
    avatar?: string;
    comment: string;
};

const reviews: Review[] = [
    {
        id: 1,
        name: "Emily R.",
        comment:
            "Fast delivery and fantastic quality! The customer support team was quick to resolve my query. Dealport has earned a loyal customer.",
    },
    {
        id: 2,
        name: "John D.",
        comment:
            "Fast delivery and fantastic quality! The customer support team was quick to resolve my query. Dealport has earned a loyal customer.",
    },
    {
        id: 3,
        name: "Ahmed M.",
        comment:
            "Fast delivery and fantastic quality! The customer support team was quick to resolve my query. Dealport has earned a loyal customer.",
    },
    {
        id: 4,
        name: "Alex T.",
        comment:
            "Fast delivery and fantastic quality! The customer support team was quick to resolve my query. Dealport has earned a loyal customer.",
    },
    {
        id: 5,
        name: "Priya R.",
        comment:
            "Fast delivery and fantastic quality! The customer support team was quick to resolve my query. Dealport has earned a loyal customer.",
    },
    {
        id: 6,
        name: "David H.",
        comment:
            "Fast delivery and fantastic quality! The customer support team was quick to resolve my query. Dealport has earned a loyal customer.",
    },
    {
        id: 7,
        name: "Ahmed M.",
        comment:
            "Fast delivery and fantastic quality! The customer support team was quick to resolve my query. Dealport has earned a loyal customer.",
    },
];

const ReviewCard = ({
    review,
    highlighted = false,
}: {
    review: Review;
    highlighted?: boolean;
}) => {
    return (
        <article
            className={`
        w-[280px] shrink-0 rounded-xl border
        px-4 py-4 transition-all duration-300
        sm:w-[300px]
        ${highlighted
                    ? "border-[#E0F1DF] bg-[#EAF8E9] shadow-md"
                    : "border-[#EAECF0] bg-white"
                }
      `}
        >
            <div className="mb-2 flex items-center gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#EAF7F0] text-[#43AE75]">
                    {review.avatar ? (
                        <img
                            src={review.avatar}
                            alt={review.name}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <UserRound size={19} />
                    )}
                </div>

                <h3 className="whitespace-nowrap text-[13px] font-bold text-[#003B3B]">
                    {review.name}
                </h3>

                <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                            key={index}
                            size={12}
                            fill="#FFB020"
                            className="text-[#FFB020]"
                        />
                    ))}
                </div>
            </div>

            <p className="text-[11px] leading-[1.6] text-[#344054]">
                &ldquo;{review.comment}&rdquo;
            </p>
        </article>
    );
};

const Reviews = () => {
    return (
        <section className="w-full overflow-hidden bg-white py-12">
            {/* Heading */}
            <div className="mb-8 px-4 text-center">
                <h2 className="text-xl font-bold text-[#43AE75] md:text-2xl">
                    Our Happy Customers
                </h2>

                <p className="mx-auto mt-2 max-w-[560px] text-[11px] leading-5 text-[#344054]">
                    Don&apos;t just take our word for it — see how our products
                    and services have delighted customers across the globe,
                    one experience at a time.
                </p>
            </div>



            {/* Review rows */}
            <div className="flex w-full flex-col gap-5 overflow-hidden">

                {/* First row */}
                <div className="relative flex w-full justify-center">
                    <div className="flex w-max shrink-0 gap-5">
                        {reviews.slice(0, 3).map((review, index) => (
                            <ReviewCard
                                key={review.id}
                                review={review}
                                highlighted={index === 1}
                            />
                        ))}
                    </div>
                </div>

                {/* Second row */}
                <div className="relative flex w-full justify-center">
                    <div className="flex w-max shrink-0 gap-5">
                        {reviews.slice(3).map((review) => (
                            <ReviewCard
                                key={review.id}
                                review={review}
                            />
                        ))}
                    </div>
                </div>

            </div>



            {/* CTA */}
            <div className="mt-9 flex justify-center">
                <Link
                    href="/products"
                    className="rounded-full bg-[#003B3B] px-9 py-3 text-[11px] font-semibold text-white transition-colors hover:bg-[#075454]"
                >
                    GET STARTED
                </Link>
            </div>
        </section>
    );
};

export default Reviews;
