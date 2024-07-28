import React from 'react'

function HomeMain() {

    return (
        <div className=" lg:px-32 pt-10 ">
            <div className="gap-14 container grid lg:grid-cols-3 justify-center items-start ">
                {/* <!-- Card 1 --> */}
                <div className="bg-white space-y-4  shadow-xl p-5 rounded-xl lg:mt-56">
                    <div className="grid place-content-center text-center">
                        <div className="space-y-6">
                            <svg width="54" height="71" viewBox="0 0 54 71" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mx-auto text-red-600">
                                <path d="M27 17.3333C34.0725 17.3333 40.8552 20.1428 45.8562 25.1438C50.8572 30.1448 53.6667 36.9276 53.6667 44C53.6667 51.0724 50.8572 57.8552 45.8562 62.8562C40.8552 67.8571 34.0725 70.6667 27 70.6667C19.9276 70.6667 13.1448 67.8571 8.14383 62.8562C3.14286 57.8552 0.333344 51.0724 0.333344 44C0.333344 36.9276 3.14286 30.1448 8.14383 25.1438C13.1448 20.1428 19.9276 17.3333 27 17.3333ZM27 29L22.59 37.9333L12.7333 39.3667L19.8667 46.3167L18.1833 56.1367L27 51.5L35.8167 56.1333L34.1333 46.3167L41.2667 39.3633L31.41 37.93L27 29ZM30.3333 0.66333L47 0.666664V10.6667L42.4567 14.46C38.6865 12.4819 34.5702 11.2494 30.3333 10.83V0.666664V0.66333ZM23.6667 0.66333V10.83C19.4312 11.2488 15.3161 12.4802 11.5467 14.4567L7.00001 10.6667V0.666664L23.6667 0.66333Z" fill="#E31E24"></path>
                            </svg>
                            <h3 className="text-xl font-semibold">
                                <p>Kalitni qo‘lga olguningizgacha</p>
                            </h3>
                        </div>
                    </div>
                    <div className="grid place-content-center text-center">
                        <p className="block text-black/80">Biz sizga barcha bosqichlarda <br /> yordam beramiz</p>
                    </div>
                </div>

                {/* <!-- Card 2 --> */}
                <div className="bg-white space-y-4 shadow-xl p-5 rounded-xl lg:mt-32 ">
                    <div className="grid place-content-center text-center">
                        <div className="space-y-6">
                            <svg width="64" height="60" viewBox="0 0 64 60" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mx-auto text-red-600">
                                <path d="M6.66667 0V53.3333H60V60H0V0H6.66667ZM56.4667 9.8L63.5333 16.8667L43.3333 37.0733L33.3333 27.0733L20.2 40.2067L13.1333 33.1333L33.3333 12.9333L43.3333 22.9333L56.4667 9.8Z" fill="#E31E24"></path>
                            </svg>
                            <h3 className="text-xl font-semibold">
                                <p>Zamonaviy avtoulovlar</p>
                            </h3>
                        </div>
                    </div>
                    <div className="grid place-content-center text-center">
                        <p className="block text-black/80">Biz sizga barcha bosqichlarda <br /> yordam beramiz</p>
                    </div>
                </div>

                {/* <!-- Card 3 --> */}
                <div className="bg-white space-y-4 shadow-xl p-5 rounded-xl lg:mt-12  ">
                    <div className="grid place-content-center text-center">
                        <div className="space-y-6">
                            <svg width="72" height="65" viewBox="0 0 72 65" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mx-auto text-red-600">
                                <path d="M43.07 26.9333C42.4449 26.3084 41.5972 25.9574 40.7133 25.9574C39.8295 25.9574 38.9818 26.3084 38.3567 26.9333L36 29.2867C35.385 29.9234 34.6494 30.4313 33.836 30.7807C33.0227 31.1301 32.1479 31.314 31.2627 31.3217C30.3775 31.3294 29.4996 31.1607 28.6803 30.8255C27.861 30.4903 27.1166 29.9953 26.4907 29.3693C25.8647 28.7434 25.3697 27.999 25.0345 27.1797C24.6993 26.3604 24.5306 25.4825 24.5383 24.5973C24.546 23.7121 24.7299 22.8373 25.0793 22.024C25.4287 21.2106 25.9366 20.475 26.5733 19.86L45.34 1.08668C49.7831 0.0761006 54.4317 0.492007 58.6248 2.27526C62.8179 4.05851 66.3421 7.11834 68.6963 11.0197C71.0504 14.921 72.1147 19.4652 71.7378 24.0061C71.3608 28.5471 69.5619 32.8536 66.5967 36.3133L59.57 43.43L43.07 26.93V26.9333ZM6.53666 6.89335C9.98586 3.4446 14.4974 1.25994 19.3419 0.692567C24.1863 0.125191 29.0806 1.20826 33.2333 3.76668L21.8567 15.1467C19.3927 17.6058 17.9881 20.931 17.9431 24.4119C17.8981 27.8927 19.2163 31.2532 21.6159 33.7751C24.0156 36.2971 27.3064 37.7805 30.7852 37.9085C34.264 38.0365 37.6549 36.7988 40.2333 34.46L40.7133 34.0033L54.8567 48.1433L40.7133 62.2867C39.4631 63.5365 37.7678 64.2386 36 64.2386C34.2322 64.2386 32.5369 63.5365 31.2867 62.2867L6.53333 37.5333C2.47044 33.4701 0.187958 27.9594 0.187958 22.2133C0.187958 16.4673 2.47044 10.9566 6.53333 6.89335H6.53666Z" fill="#E31E24"></path>
                            </svg>
                            <h3 className="text-xl font-semibold">
                                <p>Biz ishonchli va ochiq ishlaymiz</p>
                            </h3>
                        </div>
                    </div>
                    <div className="grid place-content-center text-center">
                        <p className="block text-black/80">Biz sizga barcha bosqichlarda <br /> yordam beramiz</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeMain