"use client";

import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import React from "react";

const transition = {
  duration: 0,
  ease: "linear",
};

export const GoogleGeminiEffect = ({
  pathLengths = [0, 0, 0, 0, 0], 
  title,
  description,
  className
}) => {
  return (
    <div className={cn("sticky top-80", className)}>
      <p
        className="text-lg md:text-7xl font-normal text-blue-300 pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        {title || `Hello Ladies! They call me Deveshwar`}
      </p>
      <p
        className="text-xs md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-lg mx-auto">
        {description ||
          `Scroll this component and see the bottom SVG come to life wow this works!`}
      </p>
      <div
        className="w-full h-[890px] -top-60 md:-top-40 flex items-center justify-center bg-red-transparent absolute ">
        <button
          className="font-bold bg-white rounded-full md:px-4 md:py-2 px-2 py-1 md:mt-24 mt-8 z-30 md:text-base text-black text-xs w-fit mx-auto ">
          ui.aceternity.com
        </button>
      </div>
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-60 md:-top-40 w-full">
        <motion.path
          d="M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5"
          stroke="#FFB7C5"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[0],
          }}
          transition={transition}
        />
        <motion.path
          d="M0 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 534.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942C692.004 527.989 700.2 528.738 707.349 525.505C724.886 517.575 741.932 498.33 757.5 498.742C773.864 498.742 791.711 520.623 810.403 527.654C816.218 529.841 822.661 529.246 828.451 526.991C849.246 518.893 861.599 502.112 879.5 501.742C886.47 501.597 896.865 506.047 907.429 510.911C930.879 521.707 957.139 519.639 982.951 520.063C1020.91 520.686 1037.5 530.797 1056.5 537C1102.24 556.627 1116.5 570.704 1180.5 579.235C1257.5 589.5 1279 587 1440 588"
          stroke="#FFDDB7"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[1],
          }}
          transition={transition}
        />
        <motion.path
          d="M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1440 513.235"
          stroke="#B1C5FF"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[2],
          }}
          transition={transition}
        />
        <motion.path
          d="M0 438.5C150.5 438.5 261 438.318 323.5 456.5C351 464.5 387.517 484.001 423.5 494.5C447.371 501.465 472 503.735 487 507.735C503.786 512.212 504.5 516.808 523 518.735C547 521.235 564.814 501.235 584.5 501.235C604.5 501.235 626 529.069 643 528.569C658.676 528.569 672.076 511.63 695.751 501.972C703.017 499.008 711.211 499.641 718.356 502.844C735.874 510.689 754.574 528.744 770.5 528.735C787.353 528.735 809.023 504.583 830.054 497.47C837.349 495.074 844.605 495.745 851.176 499.764C867.517 509.553 882.494 524.659 897 524.235C912.504 524.235 930.398 504.869 947.5 502.735C955.085 501.824 963.441 504.615 970.819 507.785C987.963 515.702 1017.5 527.481 1045.5 528.735C1089 530.829 1085.5 556.5 1124 574C1155 588.168 1202.95 588.985 1241 590.235C1305 591.835 1311 590.5 1440 589.235"
          stroke="#ACFFDE"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[3],
          }}
          transition={transition}
        />
        <motion.path
          d="M0 363.5C150.5 363.5 261.5 382.667 307 399.5C343 412.5 348 410.263 414.5 430.263C451 441.5 472 432.5 490 436.263C508 440 514.5 463.263 542 465.763C562.094 467.628 580 438 599 438C618 438 633 496.5 653 496.5C667.145 496.5 676.996 511.19 696.5 515.763C710.236 519.186 719.5 516.263 734 513.763C755.285 510.077 771 488.5 782 485C806.674 477.713 803 519 822 519C840.994 519 855.91 493.017 875.5 488.263C883.287 486.274 894.594 490.507 904 494.763C929.5 505.5 940.57 501.516 965 500.763C984.278 500.204 1005.99 497.659 1023 497.235C1075.5 495.934 1047 502 1116 502C1164.5 502 1232 501 1312.5 500.5C1372.5 500.116 1401 497.5 1440 497.5"
          stroke="#B3A9FF"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[4],
          }}
          transition={transition}
        />
      </svg>
    </div>
  );
};
