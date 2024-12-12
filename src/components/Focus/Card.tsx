
interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="transform overflow-hidden rounded-lg bg-[#0f0f0f] p-4 sm:p-6 shadow-lg transition-transform hover:scale-105">
      <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-normal font-poppins">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-300 font-poppins font-normal">{description}</p>
    </div>
  );
};

export default Card;
