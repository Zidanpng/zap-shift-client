import React from "react";
import { FiAward, FiChevronRight, FiShield, FiUsers } from "react-icons/fi";
import { ImQuotesLeft } from "react-icons/im";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL } = review;
  return (
    // Main card container with daisyUI card styles + Tailwind for depth
    <div className="card w-full max-w-md bg-base-100 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-base-200">
      <div className="card-body p-6 md:p-8">
        {/* Quote icon & badge */}
        <div className="flex justify-between items-start">
          <div className="text-primary opacity-80">
            <ImQuotesLeft size={32} />
          </div>
        </div>

        {/* Main testimonial text */}
        <p className="text-base-content/80 text-lg leading-relaxed mt-2">
          {testimonial}
        </p>

        {/* Divider with effect */}
        <div className="divider my-2"></div>

        {/* Author section */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-4">
            {/* Avatar with daisyUI ring effect */}
            <div className="avatar ring-offset-base-100 ring-offset-2">
              <div className="w-12 rounded-full">
                <img
                  src={user_photoURL}
                  alt={userName}
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="font-bold text-base-content text-lg">
                {userName}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
