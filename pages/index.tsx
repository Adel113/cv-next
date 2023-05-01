import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
      <div className="resume">
      <div className="resume_left">
        <div className="resume_profile">
          <img src="ADELCV.PNG" alt="profile_pic" />
          
        </div>
        <div className="resume_content">
          <div className="resume_item resume_info">
            <div className="title">
              <p className="bold_nom">Adel SIDI AHMED</p>
              <p className="regular">Recherche de stage en Développeur web</p>
            </div>
            <ul>
              <li>
                <div className="icon">
                  <i className="fas fa-map-signs"></i>
                </div>
                <div className="data">
                  <a
                    href="https://www.google.com/maps/place/57+Rue+Faidherbe,+59155+Faches-Thumesnil/@50.599979,3.0747306,17z/data=!3m1!4b1!4m5!3m4!1s0x47c2d5cc8081255f:0x652d1395795fa9b8!8m2!3d50.599979!4d3.0769193"
                    >57 Rue Faidherbe<br />
                    Faches-Thumesnil 59155 <br />
                    France</a
                  >
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="data">07.91.53.57.57</div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="data">
                  <a href="mailto:idiahmed2020@h@gmail.com"
                    >adelsidiahmed2020<br />@gmail.com</a
                  >
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fab fa-github"></i>
                </div>
                <div className="data">
                  <a href="https://github.com/Adel113">github.com/Adel113</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_skills">
            <div className="title">
              <p className="bold">Compétences</p>
            </div>
            <ul>
              <li>
                <div className="skill_name">HTML</div>
              </li>
              <li>
                <div className="skill_name">Python</div>
              </li>
              <li>
                <div className="skill_name">CSS</div>
              </li>
              <li>
                <div className="skill_name">JAVA</div>
              </li>
              <li>
                <div className="skill_name">JS</div>
              </li>
              <li>
                <div className="skill_name">SQL</div>
              </li>
              <li>
                <div className="skill_name">C</div>
              </li>
              <li>
                <div className="skill_name">CCNA1</div>
              </li>
              <li>
                <div className="skill_name">GESTION DE PROJET</div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_social">
            <div className="title">
              <p className="bold">Social</p>
            </div>
            <ul>
              <li>
                <div className="icon">
                  <i className="fab fa-twitter-square"></i>
                </div>
                <div className="data">
                  <p className="semi-bold">Twitter</p>
                  <p>
                    <a href="https://twitter.com/elhaadj113"
                      >twitter.com/elhaadj113</a
                    >
                  </p>
                </div>
              </li>

              <li>
                <div className="icon">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div className="data">
                  <p className="semi-bold">Linkedin</p>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/adel-sidi-ahmed-b8b807254/"
                      >adel-sidi-ahmed@linkedin/</a
                    >
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="title">
            <p className="bold">Qualités</p>
          </div>
          <div className="interet">
            <ul className="centres-interet">
              <li>
                <div className="skill_name">Créatif</div>
              </li>
              <li>
                <div className="skill_name">Curieux</div>
              </li>
              <li>
                <div className="skill_name">Travail en équipe</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="resume_right">
        <div className="resume_item resume_about">
          <div className="title">
            <p className="bold">Étudiant en informatique</p>
          </div>
          <p>
            Je suis actuellement étudiant en première année à l'école supérieure
            dinformatique Enigma et je suis à la recherche d'un stage de 2 à 3
            mois dans le domaine de l'informatique pour renforcer mes
            compétences et acquérir une expérience professionnelle
            significative.
          </p>
        </div>
        <div className="resume_item resume_work">
          <div className="title">
            <p className="bold">Experience proféssionelle</p>
          </div>
          <ul>
            <li>
              <div className="date">2018 - 2022</div>
              <div className="info">
                <p className="semi-bold">Graphiste designer</p>
                <p>- Création et gestion de l’agence.</p>
                <p>
                  - Graphiste Designer : création de logo, carte visite,
                  panneaux publicitaire, flocage....
                </p>
                <p>
                  - Surveillance sur la satisfaction des clients pour tous les
                  produits et services de l’agence.
                </p>
              </div>
            </li>
            <li>
              <div className="date">2019 - 2022</div>
              <div className="info">
                <p className="semi-bold">
                  Propriétaire d'un magasin (CREPES, GLACES)
                </p>
                <p>- Création et gestion du magasin.</p>
                <p>- Préparation de crêpes, glaces.</p>
                <p>- Service, accueil et prise en charge des clients.</p>
              </div>
            </li>
            <li>
              <div className="date">2018 - 2022</div>
              <div className="info">
                <p className="semi-bold">Entraineur de vo-vietnam</p>
                <p className="logotravail"></p>
                <p>
                  - Préparer les athlètes pour les compétitions (physique,
                  mentale).
                </p>
                <p>- 4 fois champion d’Algérie.</p>
                <p>- 4 fois champion régional.</p>
                <p>- Participations à des stages internationaux.</p>
                <p>- Diplôme fédéral.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="resume_item resume_education">
          <div className="title">
            <p className="bold">Formations</p>
          </div>
          <ul>
            <li>
              <div className="date">En cours</div>
              <div className="info">
                <p className="semi-bold">Première année en informatique.</p>
                <p>École supérieure d'informatique</p>
                <p>Enigma</p>
              </div>
            </li>
            <li>
              <div className="date">2021-2022</div>
              <div className="info">
                <p className="semi-bold">Licence 1 Sciences Technologies</p>
                <p>Université Sciences et Technologies</p>
                <p>Mouloud MAMMERI</p>
              </div>
            </li>
            <li>
              <div className="date">2020-2021</div>
              <div className="info">
                <p className="semi-bold">BAC Techniques Mathématiques.</p>
                <p>Spécialisation Techniques Mathématiques</p>
                <p>Lycée Mustapha Ben Boulaid.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="resume_item resume_hobby">
          <div className="title">
            <p className="bold">Centre d'intérêt</p>
          </div>
          <ul>
            <li><i className="fas fa-film"></i></li>
            <li><i className="fas fa-futbol"></i></li>
            <li><i className="fas fa-music"></i></li>
            <li><i className="fas fa-plane-departure"></i></li>
          </ul>
        </div>
      </div>
    </div>

      </main>
    </>
  )
}
