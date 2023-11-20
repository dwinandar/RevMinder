import PropTypes from "prop-types";
import { motion } from "framer-motion";

const RecomItem = ({ vehicleRecom }) => {
  return (
    <motion.span className='grid grid-cols-1 gap-5 pb-10 lg:grid-cols-3 md:gap-10 md:grid-cols-2'>
      {vehicleRecom.map((recom) => (
        <motion.div
          className='flex items-center justify-center gap-2 px-12 py-2 font-medium bg-white rounded-lg shadow-md'
          key={recom.id}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <img src={recom.icon} alt={`${recom.name}-icon`} />
          <h2 className='text-2xl'>{recom.name}</h2>
        </motion.div>
      ))}
    </motion.span>
  );
};

RecomItem.propTypes = {
  vehicleRecom: PropTypes.array,
};

export default RecomItem;
