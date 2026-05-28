import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

// Define our 5 discrete scene coordinates for camera path choreography
// To enable immersive cinematic paths as the user sweeps through sections
interface CameraCheckpoint {
  position: THREE.Vector3;
  lookAt: THREE.Vector3;
}

const CHECKPOINTS: CameraCheckpoint[] = [
  { position: new THREE.Vector3(0, 0, 10), lookAt: new THREE.Vector3(0, 0, 0) },       // Scene 1: Deep Space Orb
  { position: new THREE.Vector3(6, 4, 8), lookAt: new THREE.Vector3(-1, 0, 0) },       // Scene 2: Logarithmic Galaxy
  { position: new THREE.Vector3(0, 8, 4), lookAt: new THREE.Vector3(0, -2, 0) },       // Scene 3: Neon Data City
  { position: new THREE.Vector3(-5, -2, 7), lookAt: new THREE.Vector3(2, 1, 0) },      // Scene 4: Torus Knot Showcase
  { position: new THREE.Vector3(0, 0, 5), lookAt: new THREE.Vector3(0, 0, -2) }        // Scene 5: Blinding Stellar Portal
];

// Helper to convert active Hex codes to direct Normalized Vector3 for WebGL GLSL materials
function hexToRgb(hex: string): THREE.Color {
  const normHex = hex.replace('#', '');
  const r = parseInt(normHex.substring(0, 2), 16) / 255;
  const g = parseInt(normHex.substring(2, 4), 16) / 255;
  const b = parseInt(normHex.substring(4, 6), 16) / 255;
  return new THREE.Color(r, g, b);
}

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<number>(0);
  const scrollSmoothRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mouseSmoothRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const scaleRef = useRef<number>(1);

  // Detect and track theme color selections from client-side settings
  const getActiveAccentColor = (): THREE.Color => {
    const rootStyles = getComputedStyle(document.documentElement);
    const hex = rootStyles.getPropertyValue('--accent-500').trim() || '#2563EB';
    return hexToRgb(hex);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Core WebGL/Three.js Setup ---
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    
    // Add atmospheric cinematic volumetric fog simulation
    scene.fog = new THREE.FogExp2(0x0a0a0c, 0.015);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.copy(CHECKPOINTS[0].position);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    containerRef.current.appendChild(renderer.domElement);

    // --- Dynamic Studio Spotlights Setup ---
    // Spotlights create reflective PBR volumetric-looking projections
    const ambientLight = new THREE.AmbientLight(0x060608);
    scene.add(ambientLight);

    const mainSpotlight = new THREE.SpotLight(0xffffff, 15, 30, Math.PI / 4, 0.5, 1);
    mainSpotlight.position.set(5, 10, 5);
    scene.add(mainSpotlight);

    // Colored accents mapping matching neon palettes
    const neonPurple = new THREE.PointLight(0x6366f1, 8, 20);
    neonPurple.position.set(-8, 4, -4);
    scene.add(neonPurple);

    const neonCyan = new THREE.PointLight(0x10b981, 6, 20);
    neonCyan.position.set(8, -4, -4);
    scene.add(neonCyan);

    // --- High-Performance GPU Particle System (60,000 Nodes) ---
    const PARTICLE_COUNT = 60000;
    const geometry = new THREE.BufferGeometry();
    
    const ids = new Float32Array(PARTICLE_COUNT);
    const randoms = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      ids[i] = i;
      randoms[i] = Math.random();
    }

    geometry.setAttribute('aId', new THREE.BufferAttribute(ids, 1));
    geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));

    // Custom Shaders - Templates compiled on the fly directly in WebGL context
    const vertexShader = `
      uniform float uTime;
      uniform float uScrollProgress;
      uniform vec2 uMouse;
      uniform vec3 uAccentColor;

      attribute float aId;
      attribute float aRandom;

      varying vec3 vColor;
      varying float vOpacity;

      // Deterministic high-frequency hash helper
      float hash(float n) {
        return fract(sin(n) * 43758.5453123);
      }

      void main() {
        // Scene 1 Position: Broad Orbital Nebula Astroid Belt
        float angle1 = aId * 0.0012 + uTime * 0.015 * (0.6 + aRandom * 0.8);
        float radius1 = 4.2 + aRandom * 4.8;
        vec3 pos1 = vec3(
          cos(angle1) * radius1 * 1.6,
          sin(uTime * 0.08 + aId * 0.005) * 1.8,
          sin(angle1) * radius1 * 1.6
        );

        // Scene 2 Position: Sweeping Swirling Logarithmic Galaxy
        float angle2 = aId * 0.004 + uTime * 0.08;
        float radius2 = 0.3 + (aId / 60000.0) * 8.0;
        float spiralWidth = radius2 * 3.14159 * 2.2;
        vec3 pos2 = vec3(
          cos(angle2 + spiralWidth) * radius2 * 1.4,
          (aRandom - 0.5) * 1.1 + sin(radius2 * 3.0 + uTime) * 0.3,
          sin(angle2 + spiralWidth) * radius2 * 1.4
        );

        // Scene 3 Position: Structured 3D Digital Grid Network (City Grid)
        // Draw systematic skyscraper clusters on streets
        float rootIndex = floor(aId * 0.0125); // distribute particles to column bases
        float gridX = (mod(rootIndex, 50.0) - 25.0) * 0.6;
        float gridZ = (floor(rootIndex / 50.0) - 15.0) * 0.8;
        float columnHeight = (hash(gridX * 11.0 + gridZ * 31.0) * 8.0) * fract(aId * 0.007);
        vec3 pos3 = vec3(
          gridX,
          columnHeight - 4.0 + (aRandom - 0.5) * 0.4,
          gridZ
        );

        // Scene 4 Position: Intertwined Dynamic Torus Knot Framework
        float knotP = 4.0;
        float knotQ = 9.0;
        float phi = aId * 0.0002;
        float r4 = cos(knotQ * phi) + 2.4;
        vec3 pos4 = vec3(
          cos(knotP * phi) * r4 * 2.1,
          sin(knotQ * phi) * r4 * 2.1,
          sin(knotP * phi) * r4 * 2.1
        );

        // Scene 5 Position: Sucking Blackhole Accretion Disc Vortex
        float angle5 = aId * 0.06 + uTime * 0.32;
        float radius5 = 14.5 * (1.1 - fract(uTime * 0.06 + aRandom));
        vec3 pos5 = vec3(
          cos(angle5) * radius5,
          sin(angle5) * radius5,
          -radius5 + 4.0
        );

        // Smooth continuous morph blending driven by the synchronized scroll tracker
        vec3 mixedPos = pos1;
        float progress = clamp(uScrollProgress, 0.0, 4.0);

        if (progress < 1.0) {
          mixedPos = mix(pos1, pos2, progress);
        } else if (progress < 2.0) {
          mixedPos = mix(pos2, pos3, progress - 1.0);
        } else if (progress < 3.0) {
          mixedPos = mix(pos3, pos4, progress - 2.0);
        } else {
          mixedPos = mix(pos4, pos5, progress - 3.0);
        }

        // Add custom GLSL micro liquid distortion & energy ripple waves
        mixedPos.x += sin(mixedPos.y * 1.5 + uTime) * 0.12;
        mixedPos.y += cos(mixedPos.z * 1.5 + uTime) * 0.12;
        mixedPos.z += sin(mixedPos.x * 1.5 + uTime) * 0.12;

        // Interactive mouse spring repulsion (physical kinetic push)
        vec3 targetMouse = vec3(uMouse.x * 12.0, uMouse.y * 8.0, 0.0);
        float distToCursor = distance(mixedPos, targetMouse);
        if (distToCursor < 3.5) {
          float push = (1.0 - distToCursor / 3.5) * 1.4;
          vec3 dir = normalize(mixedPos - targetMouse);
          // Combine dynamic breathing oscillations
          mixedPos += dir * push * (1.0 + sin(uTime * 6.0 + aRandom * 4.0) * 0.4);
        }

        vec4 mvPosition = modelViewMatrix * vec4(mixedPos, 1.0);
        gl_Position = projectionMatrix * mvPosition;

        // Custom variable point sizes mimicking realistic bokeh depth of field
        gl_PointSize = (14.0 + aRandom * 18.0) * (3.0 / -mvPosition.z);
        if (gl_PointSize < 1.0) gl_PointSize = 1.0;
        if (gl_PointSize > 55.0) gl_PointSize = 55.0;

        // Map colors dynamically: morphing to highlight active neon theme choices
        vec3 cyanHolo = vec3(0.06, 0.72, 0.50); // volumetric glowing green-blue
        vColor = mix(uAccentColor, cyanHolo, aRandom * 0.5);

        // Atmospheric volumetric depth attenuation
        float depthClip = clamp(1.0 - (-mvPosition.z / 35.0), 0.0, 1.0);
        vOpacity = (0.22 + aRandom * 0.78) * depthClip;
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      varying float vOpacity;

      void main() {
        // Discard edge fragments to clip the point sprite into a perfect circles
        float dist = distance(gl_PointCoord, vec2(0.5));
        if (dist > 0.5) discard;

        // High-end cinematic soft spotlight blend (Exponential radial decay)
        float softness = 1.0 - (dist * 2.0);
        float glowStrength = pow(softness, 2.2);

        gl_FragColor = vec4(vColor, glowStrength * vOpacity);
      }
    `;

    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uScrollProgress: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uAccentColor: { value: getActiveAccentColor() }
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(geometry, particleMaterial);
    scene.add(particleSystem);

    // --- Core Holographic Sculpted 3D Crystalline Orb ---
    // Refracting/Distorting PBR Glass-Core floating in space
    const orbGeometry = new THREE.IcosahedronGeometry(2.0, 4);
    
    // Custom liquid shader for Fresnel glow boundaries and glass reflections
    const orbMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec2 vUv;
        uniform float uTime;
        
        void main() {
          vUv = uv;
          
          // Organic sine waves for physically based floating noise distortion
          vec3 deformed = position;
          float wave = sin(position.y * 3.0 + uTime * 2.0) * cos(position.x * 3.0 + uTime * 2.0) * 0.12;
          deformed += normal * wave;

          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(deformed, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        uniform vec3 uAccentColor;
        uniform float uTime;

        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);

          // Fresnel glass refraction effect: glowing outlines at acute screen angles
          float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
          
          // Add custom inner organic ripple colors
          vec3 neonGreen = vec3(0.06, 0.72, 0.50);
          vec3 baseColor = mix(uAccentColor, neonGreen, sin(uTime) * 0.3 + 0.5);
          
          // Compute holographic scanline pulses
          float pulse = sin(gl_FragCoord.y * 0.08 + uTime * 4.0) * 0.08 + 0.92;

          vec3 finalColor = mix(baseColor * 0.3, baseColor * 1.5, fresnel);
          gl_FragColor = vec4(finalColor * pulse, 0.15 + fresnel * 0.85);
        }
      `,
      uniforms: {
        uTime: { value: 0 },
        uAccentColor: { value: getActiveAccentColor() }
      },
      transparent: true,
      depthWrite: true,
      depthTest: true,
      blending: THREE.NormalBlending
    });

    const glassOrb = new THREE.Mesh(orbGeometry, orbMaterial);
    scene.add(glassOrb);

    // --- Input & Scroll Handlers ---
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      
      // Map scroll location to our 5 scene indices (0.0 to 4.0 range)
      scrollRef.current = (scrollY / docHeight) * 4.0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to range [-1, 1] for WebGL mapping
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouseRef.current.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // --- Main Animation Ref Loop (60 FPS Control) ---
    const clock = new THREE.Clock();
    let animFrameId = 0;

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      
      // Perform responsive updates on accent switching (read CSS custom property dynamically)
      const currentAccent = getActiveAccentColor();
      particleMaterial.uniforms.uAccentColor.value.lerp(currentAccent, 0.08);
      orbMaterial.uniforms.uAccentColor.value.lerp(currentAccent, 0.08);

      // Spring physics based easing for scroll timeline updates to keep movement buttery
      scrollSmoothRef.current += (scrollRef.current - scrollSmoothRef.current) * 0.06;

      // Spring physics for mouse movements to prevent frame jumping
      mouseSmoothRef.current.x += (mouseRef.current.x - mouseSmoothRef.current.x) * 0.05;
      mouseSmoothRef.current.y += (mouseRef.current.y - mouseSmoothRef.current.y) * 0.05;

      // Pass updated uniform parameters directly to WebGL contexts
      particleMaterial.uniforms.uTime.value = elapsed;
      particleMaterial.uniforms.uScrollProgress.value = scrollSmoothRef.current;
      particleMaterial.uniforms.uMouse.value.set(mouseSmoothRef.current.x, mouseSmoothRef.current.y);
      
      orbMaterial.uniforms.uTime.value = elapsed;

      // --- Sculpted 3D Camera Path Interpolation ---
      // We interpolate intermediate camera vectors based on uScrollProgress (0 to 4)
      const p = Math.max(0, Math.min(3.999, scrollSmoothRef.current));
      const activeIdx = Math.floor(p);
      const nextIdx = activeIdx + 1;
      const localProgress = p - activeIdx;

      // Cubic smoothstep easing curve for transitions between checkpoints
      const smoothProgress = gsap.utils.interpolate(0, 1, localProgress);

      const currCam = CHECKPOINTS[activeIdx];
      const nextCam = CHECKPOINTS[nextIdx];

      camera.position.lerpVectors(currCam.position, nextCam.position, smoothProgress);
      
      const lookAtTarget = new THREE.Vector3();
      lookAtTarget.lerpVectors(currCam.lookAt, nextCam.lookAt, smoothProgress);

      // Parallax layout effect using smoothed cursor offsets
      camera.position.x += mouseSmoothRef.current.x * 0.45;
      camera.position.y += mouseSmoothRef.current.y * 0.45;
      camera.lookAt(lookAtTarget);

      // --- Interactive Crystalline Orb Animations ---
      // Slowly rotate the glass orb with float physics
      glassOrb.rotation.y = elapsed * 0.15;
      glassOrb.rotation.x = elapsed * 0.08;

      // Rotate particles globally for deep space cosmos motion
      particleSystem.rotation.y = elapsed * 0.02;

      // Dynamic scaling and positioning of glass orb depending on active scroll environment
      // Scene 1: Glass Orb is massive at center
      // Scene 2: Galaxy - Glass Orb dissolves or shrinks slightly
      // Scene 3: Grid - Glass Orb moves up to act as a volumetric data beacon
      // Scene 4: Torus - Orb scales up to sit inside the glowing loop
      // Scene 5: Blackhole - Orb contracts tightly to form singularity
      let targetOrbScale = 1.0;
      let targetOrbPos = new THREE.Vector3(0, 0, 0);

      if (scrollSmoothRef.current < 1.0) {
        // Hero / Space
        targetOrbScale = 1.0 + Math.sin(elapsed * 1.5) * 0.05;
        targetOrbPos.set(0, Math.sin(elapsed) * 0.15, 0);
      } else if (scrollSmoothRef.current < 2.0) {
        // Galaxy
        const t = scrollSmoothRef.current - 1.0;
        targetOrbScale = THREE.MathUtils.lerp(1.0, 0.4, t);
        targetOrbPos.set(5 * t, 2 * t, -2 * t);
      } else if (scrollSmoothRef.current < 3.0) {
        // City Grid
        const t = scrollSmoothRef.current - 2.0;
        targetOrbScale = THREE.MathUtils.lerp(0.4, 0.8, t);
        targetOrbPos.set(4 * (1.0 - t), -2 * t, 0);
      } else if (scrollSmoothRef.current < 4.0) {
        // Torus Show
        const t = scrollSmoothRef.current - 3.0;
        targetOrbScale = THREE.MathUtils.lerp(0.8, 1.2, t);
        targetOrbPos.set(0, 0, 0);
      } else {
        // Blackhole
        const t = Math.min(1.0, scrollSmoothRef.current - 4.0);
        targetOrbScale = THREE.MathUtils.lerp(1.2, 0.1, t);
        targetOrbPos.set(0, 0, -5 * t);
      }

      glassOrb.scale.set(targetOrbScale, targetOrbScale, targetOrbScale);
      glassOrb.position.copy(targetOrbPos);

      // Render the frame onto canvas
      renderer.render(scene, camera);
    };

    animate();

    // --- Responsive Dynamic Resize Handler ---
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(containerRef.current);

    // --- Graceful Teardown Cleanup ---
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animFrameId);
      geometry.dispose();
      orbGeometry.dispose();
      particleMaterial.dispose();
      orbMaterial.dispose();
      renderer.dispose();
      if (containerRef.current && renderer.domElement.parentNode) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      id="3d-webgl-canvas-universe" 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full -z-10 bg-[#070709] overflow-hidden pointer-events-none"
      style={{ isolation: 'isolate' }}
    />
  );
}
