import PropTypes from "prop-types";
import { motion } from "framer-motion";

const RecomItem = ({ vehicleRecom }) => {
  return (
    <motion.span className='grid grid-cols-1 gap-5 pb-8 lg:grid-cols-3 md:gap-10 md:grid-cols-2 place-items-center'>
      {vehicleRecom.map((recom) => (
        <motion.div
          className='flex items-center justify-center w-64 gap-2 py-2 font-medium bg-white rounded-lg shadow-md'
          key={recom.id}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <img
            src={recom.icon}
            alt={`${recom.name}-icon`}
            className='w-8 h-8'
          />
          <h2 className='text-base'>{recom.name}</h2>
        </motion.div>
      ))}
    </motion.span>
  );
};

RecomItem.propTypes = {
  vehicleRecom: PropTypes.array,
};

export default RecomItem;
