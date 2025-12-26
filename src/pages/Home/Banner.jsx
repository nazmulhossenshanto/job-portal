import { motion } from "framer-motion";
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
          src={team1}
          animate={
            {
              y: [100,150,100],
              
            }
          }
          transition={{duration: 5, repeat: Infinity}}
          className="max-w-sm border-blue-500 border-s-8 rounded-t-[40px] "
        />
          <motion.img
          src={team2}
          animate={
            {
              x: [100,150,100],
              
            }
          }
          transition={{duration: 5, repeat: Infinity, delay: 5}}
          className="max-w-sm border-blue-500 border-s-8 rounded-t-[40px] "
        />
        </div>
        <div className="flex-1">
          <motion.h1
          initial={
            {
              scale: 0.2, opacity: 0
            }
          }
          animate={
            {
              scale: 1, opacity: 1
            }
          }
          transition={{
            duration: 2.5, 
            ease: "easeOut"
          }}
          className="text-5xl font-bold">
            Remote{" "}
            <motion.span
              animate={{
                color: ["#132FD1", "#12943C", "#A111D6"],
                transition: {duration: 4, repeat: Infinity}
              }}
            >
              Jobs
            </motion.span>{" "}
            For you!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
