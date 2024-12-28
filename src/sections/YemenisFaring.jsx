import LineChart3 from "../Component/LineChart3";

const YemenisFaring = () => {
  return (
    <>
    <section id="home"
     className="flex flex-col justify-center gap-10  bg-red-50" >
     <div className="relative  flex  flex-col justify-center items-center w-full p-10" >
 
      <h1 className="text-xl font-palanquin font-bold">
      <span id="text1" className=" text-lg xl:whitespace-nowrap relative"> Now- How are Yemenis faring? </span>
      </h1>

      <div className="relartive flex  w-full">
      <article id="text2" 
      className=" relative font-montserrat text-slate-gray leading-8 space-y-1">
      <p>
      <a href="https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/yemen/brokering-ceasefire-yemens-economic" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'>According to the International Crisis Group </a>
       “The combined hunger-humanitarian crisis does not result from a lack of basic goods […]. 
      Rising prices have been the primary problem since 2018”. This situation have been largely driven by actions of the Houthis and the IRG taken to undermine rivals,
      yet to undermine the very ability of Yemenis to survive. 
      </p>
      <p>
      To track how the livelihood of Yemenis has changed through the last decade, 
      we use a unit of a basic food basket. A household of 4 will need 10 baskets per month to satisfy minimum caloric intake.
      An average teacher was able to afford 10 baskets with one-third of their income in 2014 (estimated at 60K riels). 
      Today, they can only afford one under IRG control and four under Houthi control for the same price,
      assuming that they received wages consistently to start with.
      </p>
      <p>
      Yemeni’s losses don’t stop at purchase power and wages, 
      with around 14 % of the population being <a href="https://www.unrefugees.org/news/yemen-crisis-explained/" target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'>displaced</a> according to UNHCR. 
      One in five districts is <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8967460/#:~:text=Across%20the%20country%20as%20a%20whole%2C%20there%20are,333%20districts%20have%20no%20qualified%20physicians%20at%20all." target="_blank" rel="noopener noreferrer" className='text-gray-800 underline'> without a single doctor</a> and at least one fourth of the schools being out of service. 
      The list of losses goes on.
      </p>
      </article>
      </div>

      <LineChart3 />
     </div>
    </section>
 
    </>

  );
}

export default YemenisFaring;
