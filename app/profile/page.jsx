
"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";


import React from 'react'

const profile = () => {
  return (
    <Profile/>
  )
}

export default profile