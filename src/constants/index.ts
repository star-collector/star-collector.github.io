import { ParticlesProps } from 'react-tsparticles';

const usernameMatch = window.location.href.match(/https:\/\/(.*?).github.io/);

export const EMAIL = 'baharev_pavel@mail.ru';
export const USERNAME = usernameMatch?.length ? usernameMatch[1] : 'star-collector';
export const PARTICLES_CONFIG: ParticlesProps['options'] = {
  interactivity: {
    detect_on: 'canvas',
    events: {
      onclick: {
        enable: true,
        mode: 'push',
      },
      onhover: {
        enable: true,
        mode: 'bubble',
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 83.91608391608392,
        duration: 3,
        opacity: 1,
        size: 1,
      },
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    line_linked: {
      color: '#ffffff',
      distance: 150,
      enable: false,
      opacity: 0.4,
      width: 1,
    },
    move: {
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
      bounce: false,
      direction: 'none',
      enable: true,
      out_mode: 'out',
      random: true,
      speed: 0.2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 789.1476416322727,
      },
      value: 355,
    },
    opacity: {
      anim: {
        enable: true,
        opacity_min: 0,
        speed: 0.2,
        sync: false,
      },
      random: false,
      value: 0.48927153781200905,
    },
    shape: {
      polygon: {
        nb_sides: 5,
      },
      stroke: {
        color: '#000000',
        width: 0,
      },
      type: 'circle',
    },
    size: {
      anim: {
        enable: true,
        size_min: 0,
        speed: 2,
        sync: false,
      },
      random: true,
      value: 2,
    },
  },
  retina_detect: true,
};
