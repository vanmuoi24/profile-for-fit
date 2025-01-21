"use client";

import Layout from "@/components/Layout";
import Navbar from "@/components/NavBar";
import Image from "next/image";
import profileAvatar from "../../public/image/profile/image.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { CgArrowTopRightR } from "react-icons/cg";
export default function Home() {
  return (
    <>
      <div className="text-fuchsia-600">
        <Navbar />
      </div>
      <main className="flex  text-black w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            {/* Hình ảnh đại diện */}
            <div className="w-1/2">
              <Image
                src={profileAvatar}
                alt="Profile Avatar"
                className="w-full h-auto"
              />
            </div>

            <div className="w-1/2 pl-8">
              <h1 className="text-4xl font-bold mb-4">
                Turning Vision Into Reality With Code And Design.
              </h1>
              <p className="text-lg">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex gap-3 align-items-center ">
                {" "}
                <Button variant="primary" className="d-flex align-items-center">
                  Resume <CgArrowTopRightR className="ms-2" />
                </Button>
                <div>
                  <a href="#" className="underline text-blue-600">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
