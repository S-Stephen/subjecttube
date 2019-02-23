
import {MenuItem} from 'primeng/api';

export const SUBJECTS: MenuItem[] =
[
  {label: "Astronomy and cosmology",
  items : [
      {label: "Theories"},
      {label: "Models",
       items:[
         {label:"Astronomical models and calculations",
          items: [
            {label:"Inverse square law"},
            {label:"Mass-luminosity relation"},
            {label:"Stars as black holes"},
            {label:"Stefan's and Wien's law used together"},
            {label:"Stefan's law"},
            {label:"Wien's law, including graphs"}
          ]},
        {label:"Doppler effect"},
        {label:"Hubble's law"},
        {label:"Orbits, Kepler's laws"}
          ]
      },
      {label: "Objects"},
      {label: "Theories"}
    ]
  },
  {label:"Atomic Physics",
   items: [
     {label:"Applications of nuclear physics"},
     {label:"Applications of quantum phenomena"},
     {label:"Nuclear physics"},
     {label:"Particle physics"},
     {label:"Quantum physics"}
   ]
  },
  {label:"Electricity"},
  {label:"Forces and motion"},
  {label:"Fields"},
  {label:"Physics skills"},
  {label:"Solids, liquids and gases"},
  {label:"Waves"},
];
