"use client"
import Skills from '@/components/skills/Skills'
import useScrollNavigation from '@/hooks/useScrollNavigation'
import React from 'react'

function About() {
  useScrollNavigation()
  return (
    <>
      <Skills/>
    </>
  )
}

export default About