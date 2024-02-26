import { prosto_one } from "@/app/fonts";
import localFont from "next/font/local";
import Image from "next/image";
import styles from "./landing.module.scss";

const myFont = localFont({
  src: "../../Stardom-Regular.woff",
  display: "swap",
});

export default function Landing() {
  return (
    <header
      className={`min-h-[auto] pb-10 pt-20 lg:pt-[10rem] xl:pt-[10rem] 2xl:pt-[11rem] lg:min-h-[auto] xl:min-h-[auto] 2xl:min-h-[auto]  flex  justify-center  items-center ${styles.bg} `}
    >
      <div className="container max-w-[1100px] mx-auto flex flex-col justify-between    items-center px-3">
        <div className="">
          <div className="flex flex-col  items-center  justify-center  space-x-0 mb-5">
            <div className="rounded-full bg-gradient-to-tl mb-5 from-purple-700/60 to-rose-400/60 shadow-lg p-[2px] ring-[5px] lg:ring-[7px] xl:ring-[7px] 2xl:ring-[7px] ring-purple-500/10">
              <div className="rounded-full p-1 h-[92px] w-[92px] lg:h-[100px] xl:h-[100px] 2xl:h-[100px] lg:w-[100px] xl:w-[100px] 2xl:w-[100px]">
                <Image
                  src="https://res.cloudinary.com/dano2nyff/image/upload/v1699380350/yxrvwszingotthzcnqym.png"
                  width={1000}
                  height={1000}
                  alt="Profile image"
                  priority={true}
                  className=" rounded-full w-[100%]"
                />
              </div>
            </div>

            <div className="mx-auto">
              <h1
                className={`${myFont.className} ${styles.title} text-center  	text-bold text-white mb-0`}
              >
                <span
                  className={`${styles.title} text-center text-[2rem] lg:text-[2.5rem] xl:text-[2.5rem] 2xl:text-[3rem]`}
                >
                  Bibarta K. Sarkar
                </span>
              </h1>
              <p
                className={`  ${prosto_one.className} text-white text-center  text-[1rem] lg:text-[1.2rem] xl:text-[1.2rem] 2xl:text-[1.2rem] font-semibold tracking-wide`}
              >
                Full-stack Developer
              </p>
            </div>
          </div>

          <p
            className={` ${styles.aboutText}  text-white max-w-[100%]  text-[1rem] leading-[200%] text-center  mb-2`}
          >
            {/* I'm passionate about crafting experiences that are engaging,
            accessible, and user-centric. */}
            {/* With over a year of experience, I am dedicated to creating seamless,
            user-friendly web applications using the latest technologies. */}
          </p>
        </div>
        {/* <div className=" mt-20   hidden  xl:block 2xl:block">
          <div className={styles.techCube}>
            <div className={styles.cube}>
              <div className={styles.front}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="150"
                  fill="none"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="#242938" rx="60" />
                  <path
                    fill="#00D8FF"
                    d="M128.001 146.951C138.305 146.951 146.657 138.598 146.657 128.295C146.657 117.992 138.305 109.639 128.001 109.639C117.698 109.639 109.345 117.992 109.345 128.295C109.345 138.598 117.698 146.951 128.001 146.951Z"
                  />
                  <path
                    fillRule="evenodd"
                    stroke="#00D8FF"
                    strokeWidth="8.911"
                    d="M128.002 90.3633C153.05 90.3633 176.319 93.9575 193.864 99.9976C215.003 107.275 228 118.306 228 128.295C228 138.704 214.226 150.423 191.525 157.944C174.363 163.63 151.779 166.598 128.002 166.598C103.624 166.598 80.5389 163.812 63.1834 157.881C41.2255 150.376 28 138.506 28 128.295C28 118.387 40.4096 107.441 61.2515 100.175C78.8617 94.0353 102.705 90.3633 127.998 90.3633H128.002Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    stroke="#00D8FF"
                    strokeWidth="8.911"
                    d="M94.9811 109.438C107.495 87.7402 122.232 69.3783 136.23 57.1971C153.094 42.5206 169.144 36.7728 177.796 41.7623C186.813 46.9623 190.084 64.7496 185.259 88.1712C181.614 105.879 172.9 126.925 161.021 147.523C148.842 168.641 134.897 187.247 121.09 199.315C103.619 214.587 86.7284 220.114 77.8833 215.013C69.3003 210.067 66.0181 193.846 70.1356 172.161C73.6145 153.838 82.3451 131.349 94.977 109.438L94.9811 109.438Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    stroke="#00D8FF"
                    strokeWidth="8.911"
                    d="M95.0123 147.578C82.4633 125.904 73.9194 103.962 70.3531 85.7517C66.0602 63.8109 69.0954 47.0355 77.7401 42.0315C86.7485 36.8163 103.792 42.866 121.674 58.7437C135.194 70.7479 149.077 88.8052 160.99 109.383C173.204 130.481 182.358 151.856 185.919 169.844C190.425 192.608 186.778 210.001 177.941 215.116C169.367 220.08 153.676 214.825 136.945 200.427C122.809 188.263 107.685 169.468 95.0123 147.578Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className={styles.back}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="150"
                  fill="none"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="#E14E1D" rx="60" />
                  <path
                    fill="#fff"
                    d="M48 38L56.6098 134.593H167.32L163.605 176.023L127.959 185.661L92.38 176.037L90.0012 149.435H57.9389L62.5236 200.716L127.951 218.888L193.461 200.716L202.244 102.655H85.8241L82.901 69.9448H205.041H205.139L208 38H48Z"
                  />
                  <path
                    fill="#EBEBEB"
                    d="M128 38H48L56.6098 134.593H128V102.655H85.8241L82.901 69.9448H128V38Z"
                  />
                  <path
                    fill="#EBEBEB"
                    d="M128 185.647L127.959 185.661L92.38 176.037L90.0012 149.435H57.9388L62.5236 200.716L127.951 218.888L128 218.874V185.647Z"
                  />
                </svg>
              </div>
              <div className={styles.top}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="150"
                  fill="none"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="#242938" rx="60" />
                  <path
                    fill="#fff"
                    d="M121.451 28.0537C121.021 28.0928 119.652 28.2297 118.42 28.3274C90.0137 30.8885 63.4057 46.216 46.5533 69.7742C37.1691 82.8729 31.1672 97.7312 28.8993 113.469C28.0978 118.963 28 120.586 28 128.034C28 135.483 28.0978 137.106 28.8993 142.599C34.3343 180.155 61.0596 211.71 97.306 223.401C103.797 225.493 110.639 226.92 118.42 227.78C121.451 228.112 134.549 228.112 137.58 227.78C151.011 226.294 162.389 222.971 173.611 217.242C175.331 216.363 175.664 216.128 175.429 215.933C175.273 215.815 167.941 205.981 159.144 194.095L143.152 172.492L123.112 142.834C112.086 126.529 103.015 113.195 102.936 113.195C102.858 113.176 102.78 126.353 102.741 142.443C102.682 170.615 102.663 171.749 102.311 172.413C101.803 173.371 101.412 173.762 100.59 174.193C99.9648 174.505 99.4174 174.564 96.4653 174.564H93.0831L92.1838 173.997C91.5973 173.626 91.1672 173.137 90.8739 172.57L90.4633 171.69L90.5024 132.492L90.5611 93.2737L91.1672 92.5112C91.48 92.1007 92.1447 91.5728 92.6139 91.3186C93.4154 90.9276 93.7283 90.8885 97.1105 90.8885C101.099 90.8885 101.763 91.0449 102.8 92.1789C103.093 92.4917 113.943 108.836 126.925 128.523C139.906 148.21 157.658 175.092 166.377 188.288L182.213 212.277L183.015 211.749C190.111 207.135 197.619 200.566 203.562 193.723C216.211 179.197 224.364 161.485 227.101 142.599C227.902 137.106 228 135.483 228 128.034C228 120.586 227.902 118.963 227.101 113.469C221.666 75.913 194.94 44.3587 158.694 32.6676C152.301 30.5953 145.498 29.1681 137.873 28.3079C135.996 28.1124 123.073 27.8973 121.451 28.0537ZM162.389 88.5425C163.327 89.0117 164.09 89.911 164.364 90.8494C164.52 91.3577 164.559 102.228 164.52 126.724L164.461 161.876L158.264 152.374L152.047 142.873V117.321C152.047 100.801 152.125 91.5141 152.242 91.0645C152.555 89.9697 153.239 89.1095 154.178 88.6011C154.979 88.1906 155.273 88.1515 158.342 88.1515C161.236 88.1515 161.744 88.1906 162.389 88.5425Z"
                  />
                </svg>
              </div>
              <div className={styles.bottom}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="150"
                  fill="none"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="#242938" rx="60" />
                  <path
                    fill="url(#paint0_linear_2_119)"
                    fillRule="evenodd"
                    d="M83 110C88.9991 86.0009 104.001 74 128 74C164 74 168.5 101 186.5 105.5C198.501 108.501 209 104.001 218 92C212.001 115.999 196.999 128 173 128C137 128 132.5 101 114.5 96.5C102.499 93.4991 92 97.9991 83 110ZM38 164C43.9991 140.001 59.0009 128 83 128C119 128 123.5 155 141.5 159.5C153.501 162.501 164 158.001 173 146C167.001 169.999 151.999 182 128 182C92 182 87.5 155 69.5 150.5C57.4991 147.499 47 151.999 38 164Z"
                    clipRule="evenodd"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2_119"
                      x1="86.5"
                      x2="163.5"
                      y1="74"
                      y2="185.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#32B1C1" />
                      <stop offset="1" stopColor="#14C6B7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className={styles.left}>
                <svg
                  width="150"
                  height="150"
                  viewBox="0 0 256 256"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="256" height="256" rx="60" fill="#F0DB4F" />
                  <path
                    d="M67.3117 213.932L86.9027 202.076C90.6821 208.777 94.1202 214.447 102.367 214.447C110.272 214.447 115.256 211.355 115.256 199.327V117.529H139.314V199.667C139.314 224.584 124.708 235.926 103.398 235.926C84.1533 235.926 72.9819 225.959 67.3113 213.93"
                    fill="#323330"
                  />
                  <path
                    d="M152.381 211.354L171.969 200.013C177.126 208.434 183.828 214.62 195.684 214.62C205.653 214.62 212.009 209.636 212.009 202.762C212.009 194.514 205.479 191.592 194.481 186.782L188.468 184.203C171.111 176.815 159.597 167.535 159.597 147.945C159.597 129.901 173.345 116.153 194.826 116.153C210.12 116.153 221.118 121.481 229.022 135.4L210.291 147.429C206.166 140.04 201.7 137.119 194.826 137.119C187.78 137.119 183.312 141.587 183.312 147.429C183.312 154.646 187.78 157.568 198.09 162.037L204.104 164.614C224.553 173.379 236.067 182.313 236.067 202.418C236.067 224.072 219.055 235.928 196.2 235.928C173.861 235.928 159.426 225.274 152.381 211.354"
                    fill="#323330"
                  />
                </svg>
              </div>
              <div className={styles.right}>
                <svg
                  width="150"
                  height="150"
                  viewBox="0 0 256 256"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="256" height="256" rx="60" fill="#0277BD" />
                  <path
                    d="M53.7527 102.651L56.6155 134.593H128.096V102.651H53.7527Z"
                    fill="#EBEBEB"
                  />
                  <path
                    d="M128.095 38H127.985H48L50.9036 69.9423H128.095V38Z"
                    fill="#EBEBEB"
                  />
                  <path
                    d="M128.095 218.841V185.608L127.955 185.645L92.3813 176.04L90.1072 150.564H72.821H58.0425L62.5175 200.718L127.948 218.882L128.095 218.841Z"
                    fill="#EBEBEB"
                  />
                  <path
                    d="M167.318 134.593L163.61 176.019L127.985 185.635V218.866L193.468 200.718L193.948 195.321L201.454 111.229L202.233 102.651L208 38H127.985V69.9423H172.994L170.088 102.651H127.985V134.593H167.318Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div> */}
        {/* </div> */}
      </div>
    </header>
  );
}
