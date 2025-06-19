import data from './Timeline.json';

interface Event {
    id: number;
    date: string;
    description: string;
    color?:string
    link?: string | null;
};

// type shapeColor = 'red' | 'green' | 'yellow';

// const events: Event[] = data;

const timelineData = [
  {
    title: 'Opening Day',
    date: '17 Aug 2024',
    color: true,
    link: 'opening-day',
  },
  {
    title: 'Workshops',
    date: 'Week 1 - Week 2',
    shape: 'triangle',
    link: 'workshops',
  },
  {
    title: 'Preliminary Design Review',
    date: '30 Aug 2024',
    shape: 'square',
  },
  {
    title: (
      <span className="text-sm xs:text-xl sm:text-3xl lg:text-5xl">
        <span className="whitespace-nowrap">Semi-Finals </span> 
        <span className="text-xs lg:text-3xl">and </span> 
        Finals
      </span>
    ),
    date: '21 Sep 2024',
    shape: 'circle',
    link: 'semis-and-finals',
  },
];



const Timeline = () => {


    return (
        <div className="flex flex-col items-center justify-center gap-x-4 text-2xl lg:text-7xl lg:pt-16 pt-8 pb-12 min-h-[50vh] gap-y-8 px-4 lg:px-8 text-white font-extrabold">
            <p className="uppercase pt-20 pb-4 lg:pb-8">
                What To Expect
            </p>
            <div className="relative flex flex-col items-center justify-center">
                <div className="absolute h-full left-1/2 transform -translate-x-1/2 w-1 bg-white rounded-md z-20" />
                <div className="font-poppins w-3/4 z-30">
                    {timelineData.map((item, index) => (
                        <div key={index} className="h-16 grid grid-cols-5 m-20">
                            {
                                (index % 2 == 1) ? (  
                                <div className=" col-span-2 flex flex-col justify-center w-full text-base xs:text-sm lg:text-2xl uppercase">
                                    <p className="outlined-text">
                                        {item.date}
                                    </p>
                                    <p className="col-span-2 text-base lg:text-3xl flex items-center leading-none">
                                        {item.title}
                                    </p>    
                                </div>
                                ) : (
                                    <div className="col-span-2">&nbsp;</div> 
                                )
                            }
                            
                            
                            <div className="col-span-1 flex items-center justify-center">
                            {
                                <img
                                    src={pickShape(item, index)}
                                    alt='Timeline Shape'
                                    className='w-3 h-3 lg:w-6 lg:h-6 object-contain'
                                />
                            }
                            </div>

                            {
                                (index % 2 == 0) ? (  
                                <div className=" col-span-2 flex flex-col justify-center w-full text-base xs:text-sm lg:text-2xl uppercase">
                                    <p className="outlined-text">
                                        {item.date}
                                    </p>
                                    <p className="col-span-2 text-base xs:text-sm lg:text-3xl flex items-center">
                                        {item.title}
                                    </p>    
                                </div>
                                ) : (
                                    <div className="col-span-2">&nbsp;</div> 
                                )
                            }

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;