import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorProfile from '../components/doctor/DoctorProfile';

const specialties = [
  "Gynecologist",
  "Skin Specialist",
  "Child Specialist",
  "Neurologist",
  "Orthopedic Surgeon",
  "Gastroenterologist",
  "Endocrinologist"
];

const specializations = [
  { name: 'Dermatologist', icon: '🖐️' },
  { name: 'Gynecologist', icon: '🤰' },
  { name: 'Urologist', icon: '🦠' },
  { name: 'Gastroenterologist', icon: '🍽️' },
  { name: 'Dentist', icon: '🦷' },
  { name: 'Psychiatrist', icon: '🧠' },
  { name: 'ENT Specialist', icon: '👂' },
  { name: 'Orthopedic Surgeon', icon: '🦴' },
  { name: 'Sexologist', icon: '❤️' },
  { name: 'Neurologist', icon: '🧠' },
  { name: 'Child Specialist', icon: '👶' },
  { name: 'Pulmonologist', icon: '🫁' },
  { name: 'Eye Specialist', icon: '👁️' },
  { name: 'General Physician', icon: '👨‍⚕️' },
];

const conditions = [
  { name: 'Fever', icon: '🤒' },
  { name: 'Heart Attack', icon: '❤️‍🔥' },
  { name: 'Pregnancy', icon: '🤰' },
  { name: 'High Blood Pressure', icon: '🩺' },
  { name: 'Piles', icon: '🪑' },
  { name: 'Diarrhea', icon: '🚽' },
  { name: 'Acne', icon: '😬' },
];

// Add mock doctors data for each specialization
export const doctorsBySpecialization: Record<string, any[]> = {
  'Dermatologist': [
    {
      id: 'derm1',
      name: 'Dr. Smeer Ahmad',
      specialization: 'Dermatologist',
      experience: 18,
      education: ['MBBS, FCPS (Dermatology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 2000,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '10:00 AM - 2:00 PM' },
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Shifa International Hospital',
      location: {
        address: 'H-8/4, Shifa International Hospital',
        city: 'Islamabad',
        state: 'Federal Capital',
        coordinates: { lat: 33.6844, lng: 73.0479 }
      }
    },
    {
      id: 'derm2',
      name: 'Dr. Ayesha Malik',
      specialization: 'Dermatologist',
      experience: 15,
      education: ['MBBS, MD (Dermatology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 2500,
      availability: { days: ['Tue', 'Thu', 'Sat'], time: '2:00 PM - 6:00 PM' },
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Pakistan Institute of Medical Sciences',
      location: {
        address: 'G-8/3, PIMS Hospital',
        city: 'Islamabad',
        state: 'Federal Capital',
        coordinates: { lat: 33.738045, lng: 73.0479 }
      }
    },
    {
      id: 'derm3',
      name: 'Dr. Usman Khan',
      specialization: 'Dermatologist',
      experience: 12,
      education: ['MBBS, FCPS (Dermatology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 1800,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '3:00 PM - 7:00 PM' },
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Holy Family Hospital',
      location: {
        address: 'Mall Road, Holy Family Hospital',
        city: 'Rawalpindi',
        state: 'Punjab',
        coordinates: { lat: 33.6007, lng: 73.0679 }
      }
    },
    {
      id: 'derm4',
      name: 'Dr. Sarah Khan',
      specialization: 'Dermatologist',
      experience: 20,
      education: ['MBBS, MD (Dermatology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 3000,
      availability: { days: ['Tue', 'Thu', 'Sat'], time: '9:00 AM - 1:00 PM' },
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Shaukat Khanum Memorial Hospital',
      location: {
        address: 'Johar Town, SKMCH',
        city: 'Lahore',
        state: 'Punjab',
        coordinates: { lat: 31.5204, lng: 74.3587 }
      }
    },
    {
      id: 'derm5',
      name: 'Dr. Muhammad Ali',
      specialization: 'Dermatologist',
      experience: 16,
      education: ['MBBS, FCPS (Dermatology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 2200,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '2:00 PM - 6:00 PM' },
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Lahore General Hospital',
      location: {
        address: 'Outfall Road, LGH',
        city: 'Lahore',
        state: 'Punjab',
        coordinates: { lat: 31.5204, lng: 74.3587 }
      }
    },
    {
      id: 'derm6',
      name: 'Dr. Fatima Zahra',
      specialization: 'Dermatologist',
      experience: 14,
      education: ['MBBS, MD (Dermatology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 2000,
      availability: { days: ['Tue', 'Thu', 'Sat'], time: '10:00 AM - 2:00 PM' },
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Holy Family Hospital',
      location: {
        address: 'Mall Road, Holy Family Hospital',
        city: 'Rawalpindi',
        state: 'Punjab',
        coordinates: { lat: 33.6007, lng: 73.0679 }
      }
    },
    {
      id: 'derm7',
      name: 'Dr. Hamza Khan',
      specialization: 'Dermatologist',
      experience: 17,
      education: ['MBBS, FCPS (Dermatology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 2800,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '9:00 AM - 1:00 PM' },
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Shifa International Hospital',
      location: {
        address: 'H-8/4, Shifa International Hospital',
        city: 'Islamabad',
        state: 'Federal Capital',
        coordinates: { lat: 33.6844, lng: 73.0479 }
      }
    },
    {
      id: 'derm8',
      name: 'Dr. Zainab Ali',
      specialization: 'Dermatologist',
      experience: 13,
      education: ['MBBS, MD (Dermatology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 1900,
      availability: { days: ['Tue', 'Thu', 'Sat'], time: '3:00 PM - 7:00 PM' },
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Pakistan Institute of Medical Sciences',
      location: {
        address: 'G-8/3, PIMS Hospital',
        city: 'Islamabad',
        state: 'Federal Capital',
        coordinates: { lat: 33.6844, lng: 73.0479 }
      }
    },
    {
      id: 'derm9',
      name: 'Dr. Khalid Mahmood',
      specialization: 'Dermatologist',
      experience: 19,
      education: ['MBBS, FCPS (Dermatology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 3200,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '2:00 PM - 6:00 PM' },
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Shaukat Khanum Memorial Hospital',
      location: {
        address: 'Johar Town, SKMCH',
        city: 'Lahore',
        state: 'Punjab',
        coordinates: { lat: 31.5204, lng: 74.3587 }
      }
    },
    {
      id: 'derm10',
      name: 'Dr. Sana Malik',
      specialization: 'Dermatologist',
      experience: 11,
      education: ['MBBS, MD (Dermatology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 1700,
      availability: { days: ['Tue', 'Thu', 'Sat'], time: '9:00 AM - 1:00 PM' },
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Lahore General Hospital',
      location: {
        address: 'Outfall Road, LGH',
        city: 'Lahore',
        state: 'Punjab',
        coordinates: { lat: 31.5204, lng: 74.3587 }
      }
    }
  ],
  'Gynecologist': [
    {
      id: 'gyne1',
      name: 'Dr. Fatima Zahra',
      specialization: 'Gynecologist',
      experience: 20,
      education: ['MBBS, FCPS (Gynecology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 3000,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '9:00 AM - 1:00 PM' },
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Shaukat Khanum Memorial Hospital',
      location: {
        address: 'Johar Town, SKMCH',
        city: 'Lahore',
        state: 'Punjab',
        coordinates: { lat: 31.5204, lng: 74.3587 }
      }
    },
    {
      id: 'gyne2',
      name: 'Dr. Sana Ali',
      specialization: 'Gynecologist',
      experience: 16,
      education: ['MBBS, MD (Gynecology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 2800,
      availability: { days: ['Tue', 'Thu', 'Sat'], time: '2:00 PM - 6:00 PM' },
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Lahore General Hospital',
      location: {
        address: 'Outfall Road, LGH',
        city: 'Lahore',
        state: 'Punjab',
        coordinates: { lat: 31.5204, lng: 74.3587 }
      }
    },
    {
      id: 'gyne3',
      name: 'Dr. Ayesha Khan',
      specialization: 'Gynecologist',
      experience: 18,
      education: ['MBBS, FCPS (Gynecology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 3200,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '3:00 PM - 7:00 PM' },
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Shifa International Hospital',
      location: {
        address: 'H-8/4, Shifa International Hospital',
        city: 'Islamabad',
        state: 'Federal Capital',
        coordinates: { lat: 33.6844, lng: 73.0479 }
      }
    },
    {
      id: 'gyne4',
      name: 'Dr. Zainab Malik',
      specialization: 'Gynecologist',
      experience: 15,
      education: ['MBBS, MD (Gynecology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 2500,
      availability: { days: ['Tue', 'Thu', 'Sat'], time: '9:00 AM - 1:00 PM' },
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Pakistan Institute of Medical Sciences',
      location: {
        address: 'G-8/3, PIMS Hospital',
        city: 'Islamabad',
        state: 'Federal Capital',
        coordinates: { lat: 33.6844, lng: 73.0479 }
      }
    },
    {
      id: 'gyne5',
      name: 'Dr. Sarah Khan',
      specialization: 'Gynecologist',
      experience: 22,
      education: ['MBBS, FCPS (Gynecology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 3500,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '2:00 PM - 6:00 PM' },
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Holy Family Hospital',
      location: {
        address: 'Mall Road, Holy Family Hospital',
        city: 'Rawalpindi',
        state: 'Punjab',
        coordinates: { lat: 33.6007, lng: 73.0679 }
      }
    },
    {
      id: 'gyne6',
      name: 'Dr. Maria Khan',
      specialization: 'Gynecologist',
      experience: 14,
      education: ['MBBS, MD (Gynecology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 2200,
      availability: { days: ['Tue', 'Thu', 'Sat'], time: '10:00 AM - 2:00 PM' },
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Shaukat Khanum Memorial Hospital',
      location: {
        address: 'Johar Town, SKMCH',
        city: 'Lahore',
        state: 'Punjab',
        coordinates: { lat: 31.5204, lng: 74.3587 }
      }
    },
    {
      id: 'gyne7',
      name: 'Dr. Hina Ali',
      specialization: 'Gynecologist',
      experience: 19,
      education: ['MBBS, FCPS (Gynecology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 3000,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '9:00 AM - 1:00 PM' },
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Lahore General Hospital',
      location: {
        address: 'Outfall Road, LGH',
        city: 'Lahore',
        state: 'Punjab',
        coordinates: { lat: 31.5204, lng: 74.3587 }
      }
    },
    {
      id: 'gyne8',
      name: 'Dr. Nida Khan',
      specialization: 'Gynecologist',
      experience: 17,
      education: ['MBBS, MD (Gynecology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 2800,
      availability: { days: ['Tue', 'Thu', 'Sat'], time: '3:00 PM - 7:00 PM' },
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Shifa International Hospital',
      location: {
        address: 'H-8/4, Shifa International Hospital',
        city: 'Islamabad',
        state: 'Federal Capital',
        coordinates: { lat: 33.6844, lng: 73.0479 }
      }
    },
    {
      id: 'gyne9',
      name: 'Dr. Amna Malik',
      specialization: 'Gynecologist',
      experience: 21,
      education: ['MBBS, FCPS (Gynecology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 3300,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '2:00 PM - 6:00 PM' },
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Pakistan Institute of Medical Sciences',
      location: {
        address: 'G-8/3, PIMS Hospital',
        city: 'Islamabad',
        state: 'Federal Capital',
        coordinates: { lat: 33.6844, lng: 73.0479 }
      }
    },
    {
      id: 'gyne10',
      name: 'Dr. Saima Khan',
      specialization: 'Gynecologist',
      experience: 13,
      education: ['MBBS, MD (Gynecology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 2400,
      availability: { days: ['Tue', 'Thu', 'Sat'], time: '9:00 AM - 1:00 PM' },
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Holy Family Hospital',
      location: {
        address: 'Mall Road, Holy Family Hospital',
        city: 'Rawalpindi',
        state: 'Punjab',
        coordinates: { lat: 33.6007, lng: 73.0679 }
      }
    }
  ],
  'Urologist': [
    {
      id: 'uro1',
      name: 'Dr. Khalid Mahmood',
      specialization: 'Urologist',
      experience: 17,
      education: ['MBBS, FCPS (Urology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 2800,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '10:00 AM - 2:00 PM' },
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Shifa International Hospital',
      location: {
        address: 'H-8/4, Shifa International Hospital',
        city: 'Islamabad',
        state: 'Federal Capital',
        coordinates: { lat: 33.6844, lng: 73.0479 }
      }
    }
  ],
  'Gastroenterologist': [
    {
      id: 'gastro1',
      name: 'Dr. Imran Khan',
      specialization: 'Gastroenterologist',
      experience: 19,
      education: ['MBBS, FCPS (Gastroenterology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 3000,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '9:00 AM - 1:00 PM' },
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Shaukat Khanum Memorial Hospital',
      location: {
        address: 'Johar Town, SKMCH',
        city: 'Lahore',
        state: 'Punjab',
        coordinates: { lat: 31.5204, lng: 74.3587 }
      }
    }
  ],
  'Dentist': [
    {
      id: 'dent1',
      name: 'Dr. Zainab Ali',
      specialization: 'Dentist',
      experience: 12, 
      education: ['BDS, MDS'],
      languages: ['English', 'Urdu'],
      consultationFee: 1500,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '10:00 AM - 2:00 PM' },
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Islamabad Dental Hospital',
      location: {
        address: 'F-8/1, Islamabad Dental Hospital',
        city: 'Islamabad',
        state: 'Federal Capital',
        coordinates: { lat: 33.6844, lng: 73.0479 }
      }
    }
  ],
  'Psychiatrist': [
    {
      id: 'psych1',
      name: 'Dr. Ayesha Khan',
      specialization: 'Psychiatrist',
      experience: 20,
      education: ['MBBS, MD (Psychiatry)'],
      languages: ['English', 'Urdu'],
      consultationFee: 3500,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '10:00 AM - 2:00 PM' },
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Pakistan Institute of Medical Sciences',
      location: {
        address: 'G-8/3, PIMS Hospital',
        city: 'Islamabad',
        state: 'Federal Capital',
        coordinates: { lat: 33.6844, lng: 73.0479 }
      }
    }
  ],
  'ENT Specialist': [
    {
      id: 'ent1',
      name: 'Dr. Muhammad Ali',
      specialization: 'ENT Specialist',
      experience: 16,
      education: ['MBBS, FCPS (ENT)'],
      languages: ['English', 'Urdu'],
      consultationFee: 2500,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '9:00 AM - 1:00 PM' },
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Shaukat Khanum Memorial Hospital',
      location: {
        address: 'Johar Town, SKMCH',
        city: 'Lahore',
        state: 'Punjab',
        coordinates: { lat: 31.5204, lng: 74.3587 }
      }
    }
  ],
  'Orthopedic Surgeon': [
    {
      id: 'ortho1',
      name: 'Dr. Muhammad Ali',
      specialization: 'Orthopedic Surgeon',
      experience: 25,
      education: ['MBBS, FCPS (Orthopedics)'],
      languages: ['English', 'Urdu'],
      consultationFee: 4000,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '9:00 AM - 1:00 PM' },
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Shaukat Khanum Memorial Hospital',
      location: {
        address: 'Johar Town, SKMCH',
        city: 'Lahore',
        state: 'Punjab',
        coordinates: { lat: 31.5204, lng: 74.3587 }
      }
    }
  ],
  'Sexologist': [
    {
      id: 'sex1',
      name: 'Dr. Fatima Zahra',
      specialization: 'Sexologist',
      experience: 15,
      education: ['MBBS, MD (Sexual Medicine)'],
      languages: ['English', 'Urdu'],
      consultationFee: 4000,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '10:00 AM - 2:00 PM' },
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Pakistan Institute of Medical Sciences',
      location: {
        address: 'G-8/3, PIMS Hospital',
        city: 'Islamabad',
        state: 'Federal Capital',
        coordinates: { lat: 33.6844, lng: 73.0479 }
      }
    }
  ],
  'Neurologist': [
    {
      id: 'neuro1',
      name: 'Dr. Hamza Khan',
      specialization: 'Neurologist',
      experience: 22,
      education: ['MBBS, FCPS (Neurology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 3500,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '10:00 AM - 2:00 PM' },
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Shifa International Hospital',
      location: {
        address: 'H-8/4, Shifa International Hospital',
        city: 'Islamabad',
        state: 'Federal Capital',
        coordinates: { lat: 33.6844, lng: 73.0479 }
      }
    }
  ],
  'Child Specialist': [
    {
      id: 'child1',
      name: 'Dr. Ayesha Malik',
      specialization: 'Child Specialist',
      experience: 18,
      education: ['MBBS, FCPS (Pediatrics)'],
      languages: ['English', 'Urdu'],
      consultationFee: 2800,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '9:00 AM - 1:00 PM' },
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Shaukat Khanum Memorial Hospital',
      location: {
        address: 'Johar Town, SKMCH',
        city: 'Lahore',
        state: 'Punjab',
        coordinates: { lat: 31.5204, lng: 74.3587 }
      }
    }
  ],
  'Pulmonologist': [
    {
      id: 'pulmo1',
      name: 'Dr. Khalid Mahmood',
      specialization: 'Pulmonologist',
      experience: 20,
      education: ['MBBS, FCPS (Pulmonology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 3000,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '10:00 AM - 2:00 PM' },
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Pakistan Institute of Medical Sciences',
      location: {
        address: 'G-8/3, PIMS Hospital',
        city: 'Islamabad',
        state: 'Federal Capital',
        coordinates: { lat: 33.6844, lng: 73.0479 }
      }
    }
  ],
  'Eye Specialist': [
    {
      id: 'eye1',
      name: 'Dr. Zainab Ali',
      specialization: 'Eye Specialist',
      experience: 16,
      education: ['MBBS, FCPS (Ophthalmology)'],
      languages: ['English', 'Urdu'],
      consultationFee: 2500,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '9:00 AM - 1:00 PM' },
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Shaukat Khanum Memorial Hospital',
      location: {
        address: 'Johar Town, SKMCH',
        city: 'Lahore',
        state: 'Punjab',
        coordinates: { lat: 31.5204, lng: 74.3587 }
      }
    }
  ],
  'General Physician': [
    {
      id: 'gp1',
      name: 'Dr. Ayesha Khan',
      specialization: 'General Physician',
      experience: 15,
      education: ['MBBS, FCPS'],
      languages: ['English', 'Urdu'],
      consultationFee: 1500,
      availability: { days: ['Mon', 'Wed', 'Fri'], time: '10:00 AM - 2:00 PM' },
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      hospital: 'Pakistan Institute of Medical Sciences',
      location: {
        address: 'G-8/3, PIMS Hospital',
        city: 'Islamabad',
        state: 'Federal Capital',
        coordinates: { lat: 33.6844, lng: 73.0479 }
      }
    }
  ]
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSpecialization, setSelectedSpecialization] = useState<string | null>(null);

  const stats = [
    { title: 'Total Patients', value: '1,234', icon: '👥', change: '+12%' },
    { title: 'Today\'s Appointments', value: '12', icon: '📅', change: '+5%' },
    { title: 'Pending Reports', value: '5', icon: '��', change: '-2%' },
    { title: 'Revenue', value: '$12,345', icon: '💰', change: '+8%' }
  ];

  const recentActivities = [
    { type: 'appointment', patient: 'John Doe', time: '10:30 AM', status: 'completed' },
    { type: 'report', patient: 'Jane Smith', time: '11:45 AM', status: 'pending' },
    { type: 'consultation', patient: 'Mike Johnson', time: '2:15 PM', status: 'scheduled' },
    { type: 'prescription', patient: 'Sarah Wilson', time: '3:30 PM', status: 'completed' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with MERAM Brand Colors */}
      <div className="relative bg-gradient-to-r from-[#1a365d] to-[#2c5282] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
                Welcome to <span className="text-[#90cdf4]">MERAM</span> Healthcare
              </h1>
              <p className="text-2xl opacity-90 font-light mb-6">
                Your trusted partner in healthcare management
              </p>
              <div className="flex space-x-4">
                <button className="bg-[#4299e1] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#3182ce] transition">
                  Quick Appointment
                </button>
                <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-white hover:text-[#2c5282] transition">
                  View Schedule
                </button>
              </div>
            </div>
            <img src="https://img.freepik.com/free-photo/medium-shot-scientists-posing-together_23-2148969982.jpg?semt=ais_items_boosted&w=740" alt="Healthcare" className="rounded-2xl shadow-2xl w-80 h-64 object-cover hidden md:block" />
          </div>
        </div>
      </div>

      {/* Modern Call-to-Action Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition-transform">
            <span className="text-5xl text-[#4299e1] mb-4 inline-block">💡</span>
            <h3 className="text-xl font-bold mb-2">Expert Doctors</h3>
            <p className="text-gray-600">Connect with top specialists in every field, available for online and in-person consultations.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition-transform">
            <span className="text-5xl text-[#4299e1] mb-4 inline-block">⏰</span>
            <h3 className="text-xl font-bold mb-2">24/7 Appointments</h3>
            <p className="text-gray-600">Book appointments anytime, anywhere, and manage your health with ease.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition-transform">
            <span className="text-5xl text-[#4299e1] mb-4 inline-block">🔒</span>
            <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
            <p className="text-gray-600">Your health data is protected with industry-leading security and privacy standards.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition flex flex-col items-center">
              <span className="text-4xl mb-2">{stat.icon}</span>
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <h3 className="text-3xl font-extrabold mt-1">{stat.value}</h3>
              <div className="mt-4">
                <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{stat.change}</span>
                <span className="text-gray-500 text-sm ml-2">from last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs and Content */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="border-b">
            <nav className="flex">
              {['overview', 'appointments', 'patients', 'reports'].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-4 font-medium text-sm ${
                    activeTab === tab
                      ? 'text-[#2c5282] border-b-2 border-[#2c5282]'
                      : 'text-gray-500 hover:text-[#2c5282]'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.type === 'appointment' ? 'bg-[#ebf8ff] text-[#2c5282]' :
                          activity.type === 'report' ? 'bg-[#e6fffa] text-[#2c5282]' :
                          activity.type === 'consultation' ? 'bg-[#f0fff4] text-[#2c5282]' :
                          'bg-[#fffaf0] text-[#2c5282]'
                        }`}>
                          {activity.type === 'appointment' ? '📅' :
                           activity.type === 'report' ? '📋' :
                           activity.type === 'consultation' ? '👨‍⚕️' : '💊'}
                        </div>
                        <div className="ml-4">
                          <p className="font-medium">{activity.patient}</p>
                          <p className="text-sm text-gray-500">{activity.time}</p>
                        </div>
                        <div className="ml-auto">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            activity.status === 'completed' ? 'bg-[#c6f6d5] text-[#2c5282]' :
                            activity.status === 'pending' ? 'bg-[#fefcbf] text-[#2c5282]' :
                            'bg-[#bee3f8] text-[#2c5282]'
                          }`}>
                            {activity.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="p-4 bg-[#ebf8ff] text-[#2c5282] rounded-lg hover:bg-[#bee3f8] transition">
                      <span className="block text-2xl mb-2">📝</span>
                      New Prescription
                    </button>
                    <button className="p-4 bg-[#e6fffa] text-[#2c5282] rounded-lg hover:bg-[#b2f5ea] transition">
                      <span className="block text-2xl mb-2">📋</span>
                      Generate Report
                    </button>
                    <button className="p-4 bg-[#f0fff4] text-[#2c5282] rounded-lg hover:bg-[#c6f6d5] transition">
                      <span className="block text-2xl mb-2">👥</span>
                      Add Patient
                    </button>
                    <button className="p-4 bg-[#fffaf0] text-[#2c5282] rounded-lg hover:bg-[#fefcbf] transition">
                      <span className="block text-2xl mb-2">📅</span>
                      Schedule
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Remove the doctors slider/specialization section for a cleaner look */}
        {/* <div className="mt-10"> ...specialization slider... </div> */}

        <h2 className="text-xl font-bold text-[#2c5282] mb-6 text-center">Search doctor by condition</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6 justify-items-center">
          {conditions.map((cond) => (
            <Link
              to="#"
              key={cond.name}
              className="flex flex-col items-center bg-white rounded-full shadow p-4 w-24 h-24 hover:bg-[#ebf8ff] transition"
            >
              <span className="text-3xl mb-2">{cond.icon}</span>
              <span className="text-xs text-gray-700 text-center font-medium">{cond.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 