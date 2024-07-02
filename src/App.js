import './scripts/navbar.js';
import './styling/style.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      
      <section className="et-hero-tabs" id="home">

        <div id="clouds">
          <div className="cloud x1"></div>
          <div className="cloud x2"></div>
          <div className="cloud x3"></div>
          <div className="cloud x4"></div>
          <div className="cloud x5"></div>
        </div>

        <div id="intro">
          <h1>
            Dhir Thacker
          </h1>
          <h2>
            Data analyst 
          </h2>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/dhirthacker7">
              <div className='social-btn flex-center' id="linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
                <span>/dhirthacker7</span>
              </div>
            </a>
            <a href="https://www.github.com/dhirthacker7">
              <div className='social-btn flex-center' id="github">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>/dhirthacker7</span>
              </div>
            </a>
            <a href="mailto:dhirthacker7@gmail.com">
              <div className='social-btn flex-center' id="email">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.077-8-5.077V6h16zM4 18V8.019l8 5.081 8-5.081V18H4z"/>
                </svg>
                <span>dhirthacker7</span>
              </div>
            </a>
            <a href="tel:+18579619543">
              <div className='social-btn flex-center' id="phone">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.2 0-2.3-.2-3.4-.6-.5-.2-1.1-.1-1.5.2l-2.2 1.6c-3.2-1.7-5.8-4.3-7.5-7.5l1.6-2.2c.4-.4.5-1 .2-1.5-.4-1.1-.6-2.2-.6-3.4 0-1-.8-1.8-1.8-1.8h-3.4c-1 0-1.8.8-1.8 1.8 0 10.5 8.5 19 19 19 1 0 1.8-.8 1.8-1.8v-3.4c0-1-.8-1.8-1.8-1.8z"/>
                </svg>
                <span>+18579619543</span>
              </div>
            </a>
          </div>
        </div>
      
        {/* Navbar */}
        <div className="et-hero-tabs-container">
          <a className="et-hero-tab" href="#home">HOME</a>
          <a className="et-hero-tab" href="#about">ABOUT</a>
          <a className="et-hero-tab" href="#skills">SKILLS</a>
          <a className="et-hero-tab" href="#projects">PROJECTS</a>
          <a className="et-hero-tab" href="#publication">PUBLICATION</a>
          <span className="et-hero-tab-slider"></span>
        </div>
      </section>
      
      <section id="about">
        <h2>TIMELINE</h2>

        <div className="timelineItem">
          <h3>2007<br></br>|</h3>
          <p>
          Basic math problems that everyone else found mundane and arduous were not only effortless but intriguing for me. 
          At the age of 8, I joined an international mental arithmetic training program named "Aloha" 
          which is a global leader in abacus and mental arithmetic.
          </p>
        </div>

        <div className="timelineItem">
          <h3>2015<br></br>|</h3>
          <p>
          I went on to win multiple awards with Aloha, both at the state and national level, and advanced to the 
          rank of grandmaster. After high school, when the time came to select my career path, I naturally gravitated 
          towards computer science. The keen interest that I had in solving math problems now morphed into solving
          algorithm and data related problems.
          </p>
        </div>

        <div className="timelineItem">
          <h3>2019<br></br>|</h3>
          <p>
          I became fluent in programming JavaScript, and made MERN stack apps, with each app improving over 
          time with immensely better engineering. During this time, I also picked up Data Analysis skills 
          like Python and R and got introduced to the world of Data Science. This became a blessing in disguise, 
          and started my quest to understand and solve data problems and facilitate data-driven decision making.
          </p>
        </div>

        <div className="timelineItem">
          <h3>2020<br></br>|</h3>
          <p>
          I got my first job, as a Software Engineer intern, wherein I cultivated skills needed to perform Web 
          development and basically understood life of a software developer. I learned Git, Node.js, React along 
          with skills like HTML, CSS, JavaScript and learned about databases like MongoDB and SQL, and how they 
          are used/implemented in a professional environment.
          </p>
        </div>

        <div className="timelineItem">
          <h3>2021<br></br>|</h3>
          <p>
          I was fortunate to get my first job as a Systems Engineer in July right after my graduation. During my tenure,
          I worked on SAP, and perform System upgrades, User administration, Security upgrades, and incident management gaining
          valuable industry experience. 
          </p>
        </div>

        <div className="timelineItem">
          <h3>2023<br></br>|</h3>
          <p>
          In 2023, I transitioned to the position of Associate Business Analyst, where I focused on learning analytics, 
          improving system performance, enhancing cross-functional collaboration, and streamlining workflows, 
          all of which led to better data-driven decision-making.
          <br></br>
          <br></br>
          With over 2 years of work experience, I decided to take my career to a next level and started pursuing Masters in 
          Information Systems at Northeastern University. I am planning to graduate in May 2025.
          </p>
        </div>
      </section>

      <br></br>
        <div class="breakLine"></div>
      <br></br>
 
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>
            <b>Programming languages:</b> C++, Python, SQL, Shell scripting, JavaScript, R
          </li>
          <li>
            <b>Databases:</b> MSSQL server, SSMS, MySQL, Oracle SQL, PostgreSQL, MongoDB
          </li>
          <li>
            <b>BI tools:</b> Alteryx, Talend, MATLAB, ER Studio, Tableau, PowerBI, Azure Data Studio
          </li>
          <li>
            <b>Packages:</b> Numpy, Pandas, Matplotlib, Seaborn, Scikit-learn, PyCaret, Pyplot, Statsmodel
          </li>
          <li>
            <b>Other tools:</b> Git, R studio, Postman, MS Excel, Power Point, Google Colab, Jupyter Notebook, VS code, Service Now
          </li>
        </ul>
      </section>

      <br></br>
        <div class="breakLine"></div>
      <br></br>


      <section id="projects">
        <h2>PROJECTS</h2>

        {/* #1 */}
        <div className='projectCard'>
          <h3>Call center data analysis - 2024</h3>

          <div className='projectFont'>
            Attained a decrease in data processing time by utilizing Alteryx and Python (y-data) 
            for accurate data profiling, incorporating a smooth integration with Talend, creating 
            ETL data pipelines and improving data loading and data transformation capabilities.
            <br></br><br></br>
            Loaded data via the SSIS tool into SSMS database and performed data modeling by creating 
            a dimensional model consisting of 7 dimensions, 1 fact, and 2 bridge tables through 
            strategic thinking to address precise business needs and enhance visualization capabilities.            
            <br></br><br></br>
            Collaborated with team to craft interactive visualizations in Power BI and Tableau, 
            improving stakeholder data-driven decision making and communication by applying best practices, 
            attention to detail, and effectively solving problems with datasets.
          </div>

          <div id="buttonContainer">
            <a href="https://github.com/dhirthacker7/Food_Inspections_Chicago_Dallas">
              <button><span>Github</span><i></i></button>
            </a>
          </div>

        </div>

        {/* #2 */}
        <div className='projectCard'>
          <h3>Remote Counselling Management System - 2023</h3>
          <p>
            Demonstrated leadership by leading the development of a database system using advanced SQL techniques, 
            creating a relational model (extended ER) with 11 entities, and leveraging aggregate functions and 
            joins to load data into SQL Server.
            <br></br><br></br>
            Created database objects stored procedures, user-defined functions, triggers and non-clustered indexes 
            to optimize data transformation.
            <br></br><br></br>
            Utilized Tableau to develop an interactive dashboard illustrating data analytics on the timing, location, 
            and frequency of individuals seeking counseling services.
          </p>

          <div id="buttonContainer">
            <a href="https://github.com/dhirthacker7/Remote-Counselling-management-system">
              <button><span>Github</span><i></i></button>
            </a>
          </div>
        
        </div>

        {/* #3 */}
        <div className='projectCard'>
          <h3>Store Sales Forecasting - 2024</h3>
          <p>
            Improved exploratory data analysis through data cleaning and preprocessing with Python, specifically 
            Numpy and Pandas and machine learning models to predict future sales focusing on transactions, 
            promotions, holidays, and economic factors
            <br></br><br></br>
            Developed regression and time-series models to enhance inventory management and sales strategies, 
            achieving a 30% improvement in prediction accuracy.
            <br></br><br></br>
            Increased model performance by conducting hyperparameter tuning, resulting in more reliable sales forecasting.
          </p>

          <div id="buttonContainer">
            <a href="https://github.com/dhirthacker7/Store_Sales_Forecasting">
              <button><span>Github</span><i></i></button>
            </a>
          </div>

        </div>

        {/* #4 */}
        <div className='projectCard'>
          <h3>Twitter Sentiment Analysis - 2024</h3>
          <p>
            Developed a Twitter sentiment analysis tool to classify tweets as positive, negative, or neutral.
            <br></br><br></br>
            Implemented tokenization, data cleaning, and stopword removal for text preprocessing.
            <br></br><br></br>
            Utilized supervised machine learning algorithms for sentiment classification and polarity score calculation..
          </p>

          <div id="buttonContainer">
            <a href="https://github.com/dhirthacker7/twitter_sentiment_analysis">
              <button><span>Github</span><i></i></button>
            </a>
          </div>

        </div>

        {/* #5 */}
        <div className='projectCard'>
          <h3>Analysis on 911 dataset - 2021</h3>
          <p>
            Analyzed 911 dataset in python with Pandas and matplotlib, created new features, 
            and visualized 911 calls by reason, time, and location.
            <br></br><br></br>
            Organized and analyzed the frequency of 911 calls with the help of charts and graphs 
            to understand the reasons of emergency calls (injury/problem faced) and to identify 
            people who needed more attention by using the pandas library.
            <br></br><br></br>
            Analyzing trends in call volume in certain conditions - for a given hour of a given day in a week, monthly and yearly..
          </p>

          <div id="buttonContainer">
            <a href="https://github.com/dhirthacker7/Exploratory-Data-analysis-911-dataset">
              <button><span>Github</span><i></i></button>
            </a>
          </div>

        </div>

      </section>

      <br></br>
        <div class="breakLine"></div>
      <br></br>






































      <section id="publication">
        <h2>PUBLICATION</h2>
        <div className='projectCard'>
          <h3>KILO: Fitness application with posture estimation - 2023</h3>
          <div id="buttonContainer">
            <a href="https://tarupublications.com/doi/10.47974/JIOS-1044">
              <button><span>Journal of Information and Optimization Sciences</span><i></i></button>
            </a>
          </div>
          <br></br><br></br>
          <p>
            Developed a fitness app with curated workouts and progress tracking in a team, 
            showcasing teamwork and problem-solving.
            <br></br><br></br>
            Developed a Flutter application integrated with Firebase services, featuring 
            a yoga pose-estimation machine-learning model directly on the device, demonstrating 
            research and innovation with Pose Net technology.  
          </p>

          <div id="buttonContainer">
            <a href="https://github.com/dhirthacker7/Food_Inspections_Chicago_Dallas">
              <button><span>Github</span><i></i></button>
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}

export default App;
