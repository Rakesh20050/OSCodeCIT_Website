import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import type { Person } from "../data/teamData";

interface Props {
  person: Person;
}

export default function PersonFlipCard({ person }: Props) {
  return (
    <div className="person-card">
      <div className="person-card-inner">

        {/* =================================================
            FRONT OF CARD
           ================================================= */}

        <div
          className="person-card-face person-card-front"
          style={{
            backgroundImage: person.backgroundImage
              ? `url(${person.backgroundImage})`
              : undefined,
          }}
        >

          {/* Dark overlay over background */}
          <div className="person-background-overlay" />

          {/* Person photograph */}
          <div className="person-image-wrapper">
            <img
              src={person.image}
              alt={person.name}
              className="person-image"
            />
          </div>

          {/* Name and role */}
          <div className="person-front-info">

            <span>{person.role}</span>

            <h3>{person.name}</h3>

            

          </div>
        </div>


        {/* =================================================
            BACK OF CARD
           ================================================= */}

        <div className="person-card-face person-card-back">

          <div className="back-content">

            {/* Role */}
            <span className="back-role">
              {person.role}
            </span>


            {/* Name */}
            <h3>{person.name}</h3>


            {/* Description */}
            <p>
              {person.description}
            </p>


            {/* Skills */}
            {person.skills && person.skills.length > 0 && (
              <div className="skills">

                {person.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>
            )}


            {/* Social links */}
            {(person.github || person.linkedin || person.instagram) && (
              <div className="social-links">
                {person.github && (
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name}'s GitHub`}
                  >
                    <FaGithub size={20} aria-hidden="true" />
                  </a>
                )}

                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name}'s LinkedIn`}
                  >
                    <FaLinkedin size={20} aria-hidden="true" />
                  </a>
                )}

                {person.instagram && (
                  <a
                    href={person.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name}'s Instagram`}
                  >
                    <FaInstagram size={20} aria-hidden="true" />
                  </a>
                )}
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}