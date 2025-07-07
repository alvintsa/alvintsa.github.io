import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import profileImage from './profile.jpg' // Assuming the image is in the same folder
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className="about center">
      <div className="about__content">
        {/* Text Content */}
        <div className="about__text">
          {name && (
            <h1>
              Hi, I&apos;m <span className="about__name">{name}</span>!
            </h1>
          )}
          
          {role && <h2 className="about__role">A {role}.</h2>}
          <p className="about__desc" dangerouslySetInnerHTML={{ __html: description }} />

          <div className="about__contact center">
            {resume && (
              <a href={resume}>
                <span type="button" className="btn btn--outline">
                  Resume (link)
                </span>
              </a>
            )}

            {social && (
              <>
                {social.github && (
                  <a
                    href={social.github}
                    aria-label="github"
                    className="link link--icon"
                  >
                    <GitHubIcon />
                  </a>
                )}

                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    aria-label="linkedin"
                    className="link link--icon"
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </>
            )}
          </div>
        </div>

        {/* Profile Image */}
        <div className="about__image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </div>
  )
}

export default About
