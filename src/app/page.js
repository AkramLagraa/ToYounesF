"use client"
import Image from "next/image";
import Signin from "../components/Signin";
import Link from "next/link";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Signup from "@/components/Signup";
import Admin from "../components/Admin";

export default function Home() {
  return (
    <main>
       <BrowserRouter> 
       <Routes>
       <Route path='/' element={<Signin />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Admin' element={<Admin />}></Route>


       </Routes>
      </BrowserRouter> 
    </main>
  );
}
