import {useEffect,useRef,useState} from 'react';
export function useIllustrationMotion(steps=4){
 const ref=useRef<HTMLDivElement>(null);
 const [step,setStep]=useState(0);
 const [playing,setPlaying]=useState(false);
 const [finished,setFinished]=useState(false);
 const [visible,setVisible]=useState(false);
 const [reduced,setReduced]=useState(false);
 useEffect(()=>{const query=window.matchMedia('(prefers-reduced-motion: reduce)');const update=()=>{setReduced(query.matches);setPlaying(!query.matches);setFinished(false);setStep(0)};update();query.addEventListener('change',update);return()=>query.removeEventListener('change',update)},[]);
 useEffect(()=>{const node=ref.current;if(!node)return;const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{threshold:.15});observer.observe(node);return()=>observer.disconnect()},[]);
 useEffect(()=>{if(!playing||!visible||reduced)return;const timer=window.setTimeout(()=>{if(document.hidden){setPlaying(false);return}if(steps<=1||step>=steps-1){setPlaying(false);setFinished(true)}else setStep(value=>value+1)},steps<=1?6000:2200);return()=>window.clearTimeout(timer)},[playing,visible,reduced,steps,step]);
 return {ref,step,finished,playing:playing&&visible&&!reduced,reduced,toggle:()=>{if(finished){setStep(0);setFinished(false);setPlaying(true)}else setPlaying(value=>!value)},next:()=>{setPlaying(false);setFinished(false);setStep(value=>(value+1)%steps)},select:(value:number)=>{setPlaying(false);setFinished(false);setStep(value)}};
}
