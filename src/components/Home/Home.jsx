import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import {Typography} from "@mui/material"
import logo from "../../assets/react.svg";
import { Timeline } from "@mui/icons-material";
import {
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiThreedotjs,
  SiNodedotjs
} from "react-icons/si"
import YoutubeCard from "../YoutubeCard/YoutubeCard";
const Home = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(logo);
    const venusTexture = textureLoader.load(logo)
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });
    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);


    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.set(8,5,5);
    pointLight2.position.set(-8,-5,-5);
    const lightHelper = new THREE.PointLightHelper(pointLight);

    venus.position.set(8,5,5)

    const ambientLight = new THREE.AmbientLight(0x404040);

    const speed = 0.01
    window.addEventListener("mousemove",(e)=>{
      if(e.clientX <= window.innerWidth/2){
        moon.rotation.x-=speed;
        moon.rotation.y+=speed;
        venus.rotation.x-=speed;
        venus.rotation.y+=speed;
      }
      if(e.clientX > window.innerWidth/2){
        moon.rotation.x-=speed;
        moon.rotation.y-=speed;
        venus.rotation.x-=speed;
        venus.rotation.y-=speed;
      }
      if(e.clientY <= window.innerWidth/2){
        moon.rotation.x-=speed;
        moon.rotation.y+=speed;
        venus.rotation.x-=speed;
        venus.rotation.y+=speed;
      }
      if(e.clientY > window.innerWidth/2){
        moon.rotation.x-=speed;
        moon.rotation.y-=speed;
        venus.rotation.x-=speed;
        venus.rotation.y-=speed;
      }
    })



    camera.position.set(4,4,8)
    scene.add(moon);
    scene.add(venus)
    scene.add(pointLight);
    scene.add(pointLight2)
    scene.add(lightHelper);
    scene.add(ambientLight);
    // mesh.rotation.y = 1;
    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
    camera.position.z = 10;
    animate();
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeContainer">
        <Typography variant="h3">TimeLine</Typography>
        <Timeline timeline={[1,2,3,4,5]}/>
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">

          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
          <img src="" alt="Face1" />
           </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
          <img src="" alt="Face2" />
           </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
          <img src="" alt="Face3" />
           </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
          <img src="" alt="Face4" />
           </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
          <img src="" alt="Face5" />
           </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
          <img src="" alt="Face6" />
           </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeSkillsBox">
          <SiCplusplus/>
          <SiHtml5/>
          <SiCss3/>
          <SiJavascript/>
          <SiMongodb/>
          <SiExpress/>
          <SiReact/>
          <SiNodedotjs/>
          <SiThreedotjs/>
        </div>
      </div> 
      <div className="homeYoutube">
        <Typography variant="h3">YOUTUBE VIDEOS</Typography>
        <div className="homeYoutubeWrapper">
          <YoutubeCard image="" title="Sample Video"/>
          <YoutubeCard/>
          <YoutubeCard/>
          <YoutubeCard/>
          <YoutubeCard/>
          <YoutubeCard/>
          <YoutubeCard/>
          <YoutubeCard/>
        </div>
      </div>
    </div>
  );
};

export default Home;
