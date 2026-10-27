import {useEffect,useRef,useState} from 'react';
export function useIllustrationMotion(steps=4){
  const ref=useRef<HTMLDivElement>(null);
  const [step,setStep]=useState(0);
  const [playing,setPlaying]=useState(false);
  const [visible,setVisible]=useState(false);
  const [reduced,setReduced]=useState(false);
  useEffect(()=>{const query=window.matchMedia('(prefers-reduced-motion: reduce)');const update=()=>{setReduced(query.matches);setPlaying(!query.matches)};update();query.addEventListener('change',update);return()=>query.removeEventListener('change',update)},[]);
  useEffect(()=>{const node=ref.current;if(!node)return;const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{threshold:.15});observer.observe(node);return()=>observer.disconnect()},[]);
  useEffect(()=>{if(!playing||!visible||reduced||steps<=1)return;const timer=window.setInterval(()=>{if(!document.hidden)setStep(value=>(value+1)%steps)},2200);return()=>window.clearInterval(timer)},[playing,visible,reduced,steps]);
  return {ref,step,playing:playing&&visible&&!reduced,reduced,toggle:()=>setPlaying(value=>!value),next:()=>{setPlaying(false);setStep(value=>(value+1)%steps)},select:(value:number)=>{setPlaying(false);setStep(value)}};
}


