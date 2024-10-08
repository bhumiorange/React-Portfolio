import React from 'react';
import styles from './App.module.css';
import bhumiPic2 from './assets/bhumiPic2.png';

function App() {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <header className={styles.header}>
        <h1 className={styles.name}>BHUMIKA</h1>
        <i><b>DELHI TECHNOLOGICAL UNIVERSITY (DTU'27)</b></i>
        <nav className={styles.nav}>
          <a href="sideProjectsBox">Projects</a>
          <a href="bioBox">About</a>
          <a href="contactBox">Contact</a>
        </nav>
      </header>

      {/* Main Content Grid */}
      <section className={styles.mainGrid}>
        <div className={styles.bioBox}>
          <h2>Computer Science Student exploring WebDev</h2><br></br><br></br>
          <p>Passionate about technology and design, I am currently pursuing a B.Tech in Computer Science. I enjoy creating visually appealing web apps that offer a great user experience.</p>
        </div>

        <div className={styles.imageBox}>
          <img src={bhumiPic2} alt="Bhumi" className={styles.profileImage} />
        </div>

        <div className={styles.contactBox}>
          <h3><i class="material-icons">phone</i> Contact Me</h3>
          <br></br><div className={styles.socialMediaBox}>
          <a href="https://www.instagram.com/bhu.mee23/" target='_blank'>Instagram</a>
          <a href="https://github.com/bhumiorange" target='_blank'>GitHub</a>
          <a href=" mailto: bhumikaa.1888@gmail.com" target='_blank'>Gmail</a>
          <a href="https://linkedin.com/in/bhumika101005" target='_blank'>LinkedIn</a>
        </div>
        </div>

        <div className={styles.SocietiesAndVolunteer}>
          <h2>Societies</h2><br></br>
          <ul>
            <li>GDSC</li>
            <li>IEEE</li>
            <li>Kalakriti</li>
            <li>Sahitya</li>
            <li>Let's Talk</li>
          </ul>
          <br></br>
          <div className={styles.volunteer}>
          <h2>Volunteering</h2><br></br>   
          <a href='https://www.canva.com/design/DAGM-K2YgLQ/RS3axcNqJKl9gasxr9AHmA/edit?utm_content=DAGM-K2YgLQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target='_blank'>
          Career Counselling with NSSS <br></br>Report</a>     
          </div>  

        </div>

        <div className={styles.sideProjectsBox}>
          <h2>Projects</h2>
          <h4><a href="https://www.figma.com/design/tqIWVBQPSqhdUqvTisLl06/SIH-team-F.R.I.E.N.D.S?node-id=42-103&t=6PhWG10hjkU7GHlQ-1" target='-blank'>Attendance Tracking Website <br></br>Figma Design</a></h4>
          <h4><a href="https://www.figma.com/design/5pjwZuZvXQRWYxyHkENhWk/Waste-mgmnt-app?node-id=8-3&t=kUpYEnVywu9HK7Qb-1" target='-blank'>Waste Management App <br></br>Figma Design</a> </h4>
        </div>

        <div className={styles.skillsAndTech}>
          <h2>Skills and Tech Stack</h2>
            <li>HTML, CSS, React</li>
            <li>Canva, Figma</li>
            <li>Python, C++, C</li>
        </div>
        
      </section>
    </div>
  );
}

export default App;
