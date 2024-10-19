interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="transform overflow-hidden rounded-lg bg-[#0f0f0f] p-6 shadow-lg transition-transform hover:scale-105">
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default Card;
