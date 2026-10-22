import{j as se}from"./framer-motion-BE2DtwjT.js";import{d as Eb,g as Ab,b as un,r as ge}from"./react-vendor-R34Z-smV.js";import{W as on,j as tt,r as Wc,P as Vt,e as vi,s as PT,b as qh,p as IT,a as Vs,c as LT,U as NT,d as DT}from"./Landing-4pplHl1_.js";import"./index-DBhF76zF.js";import"./radix-ui-B-Lh0MjZ.js";import"./charts-I0uRF1YU.js";import"./mail-DUwIC31L.js";import"./arrow-up-right-B9gL9TO6.js";const Yh="186",UT={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},FT={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cb=0,xg=1,Rb=2,OT=3,Pb=0,Jo=1,pc=2,La=3,Ws=0,li=1,di=2,Hr=0,Ko=1,dn=2,yg=3,bg=4,Ib=5,BT=6,Ia=100,Lb=101,Nb=102,Db=103,Ub=104,Fb=200,Ob=201,Bb=202,zb=203,Vg=204,Hg=205,kb=206,Vb=207,Hb=208,Gb=209,Wb=210,Xb=211,qb=212,Yb=213,jb=214,Qf=0,eh=1,th=2,el=3,nh=4,ih=5,rh=6,sh=7,Xc=0,$b=1,Zb=2,sr=0,Gg=1,Wg=2,Xg=3,jh=4,qg=5,Yg=6,jg=7,Sg="attached",Jb="detached",$h=300,Gr=301,Xs=302,mc=303,gc=304,hl=306,Ac=1e3,Pi=1001,Cc=1002,An=1003,$g=1004,zT=1004,qo=1005,kT=1005,fn=1006,vc=1007,VT=1007,kr=1008,HT=1008,pi=1009,Zg=1010,Jg=1011,tl=1012,Zh=1013,or=1014,gi=1015,br=1016,Jh=1017,Kh=1018,nl=1020,Kg=35902,Qg=35899,e0=1021,t0=1022,oi=1023,Wr=1026,Hs=1027,Qh=1028,qc=1029,qs=1030,ed=1031,GT=1032,td=1033,_c=33776,xc=33777,yc=33778,bc=33779,ah=35840,oh=35841,lh=35842,ch=35843,uh=36196,fh=37492,hh=37496,dh=37488,ph=37489,Rc=37490,mh=37491,gh=37808,vh=37809,_h=37810,xh=37811,yh=37812,bh=37813,Sh=37814,Mh=37815,wh=37816,Th=37817,Eh=37818,Ah=37819,Ch=37820,Rh=37821,Ph=36492,Ih=36494,Lh=36495,Nh=36283,Dh=36284,Pc=36285,Uh=36286,Kb=2200,Qb=2201,eS=2202,Ic=2300,Fh=2301,Yf=2302,Mg=2303,Na=2400,Da=2401,Lc=2402,nd=2500,n0=2501,WT=0,XT=1,qT=2,tS=3200,YT=3201,jT=3202,$T=3203,gs=0,nS=1,fs="",Yn="srgb",il="srgb-linear",Nc="linear",Qt="srgb",ZT="",JT="rg",KT="ga",QT=0,jf=7680,eE=7681,tE=7682,nE=7683,iE=34055,rE=34056,sE=5386,aE=512,oE=513,lE=514,cE=515,uE=516,fE=517,hE=518,iS=519,rS=512,sS=513,aS=514,id=515,oS=516,lS=517,rd=518,cS=519,sd=35044,dE=35048,pE=35040,mE=35045,gE=35049,vE=35041,_E=35046,xE=35050,yE=35042,bE="100",wg="300 es",qi=2e3,Oa=2001,SE={COMPUTE:"compute",RENDER:"render"},ME={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},wE={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},TE={TEXTURE_COMPARE:"depthTextureCompare"},EE={NONE:0,SHARED:1,FULL:2};function AE(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const CE={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Yo(s,e){return new CE[s](e)}function uS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Dc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function fS(){const s=Dc("canvas");return s.style.display="block",s}const wx={};let Ys=null;function RE(s){Ys=s}function PE(){return Ys}function Uc(...s){const e="THREE."+s.shift();Ys?Ys("log",e,...s):console.log(e,...s)}function hS(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Be(...s){s=hS(s);const e="THREE."+s.shift();if(Ys)Ys("warn",e,...s);else{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function st(...s){s=hS(s);const e="THREE."+s.shift();if(Ys)Ys("error",e,...s);else{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ps(...s){const e=s.join(" ");e in wx||(wx[e]=!0,Be(...s))}function IE(s,e,t){return new Promise(function(n,r){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const LE={[Qf]:eh,[th]:rh,[nh]:sh,[el]:ih,[eh]:Qf,[rh]:th,[sh]:nh,[ih]:el};class Mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,e);e.target=null}}}const ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tx=1234567;const Fa=Math.PI/180,rl=180/Math.PI;function Yi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ri[s&255]+ri[s>>8&255]+ri[s>>16&255]+ri[s>>24&255]+"-"+ri[e&255]+ri[e>>8&255]+"-"+ri[e>>16&15|64]+ri[e>>24&255]+"-"+ri[t&63|128]+ri[t>>8&255]+"-"+ri[t>>16&255]+ri[t>>24&255]+ri[n&255]+ri[n>>8&255]+ri[n>>16&255]+ri[n>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function i0(s,e){return(s%e+e)%e}function NE(s,e,t,n,r){return n+(s-e)*(r-n)/(t-e)}function DE(s,e,t){return s!==e?(t-s)/(e-s):0}function Sc(s,e,t){return(1-t)*s+t*e}function UE(s,e,t,n){return Sc(s,e,1-Math.exp(-t*n))}function FE(s,e=1){return e-Math.abs(i0(s,e*2)-e)}function OE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function BE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function zE(s,e){return s+Math.floor(Math.random()*(e-s+1))}function kE(s,e){return s+Math.random()*(e-s)}function VE(s){return s*(.5-Math.random())}function HE(s){s!==void 0&&(Tx=s);let e=Tx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function GE(s){return s*Fa}function WE(s){return s*rl}function XE(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function qE(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function YE(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function jE(s,e,t,n,r){const o=Math.cos,l=Math.sin,c=o(t/2),f=l(t/2),h=o((e+n)/2),p=l((e+n)/2),m=o((e-n)/2),g=l((e-n)/2),_=o((n-e)/2),y=l((n-e)/2);switch(r){case"XYX":s.set(c*p,f*m,f*g,c*h);break;case"YZY":s.set(f*g,c*p,f*m,c*h);break;case"ZXZ":s.set(f*m,f*g,c*p,c*h);break;case"XZX":s.set(c*p,f*y,f*_,c*h);break;case"YXY":s.set(f*_,c*p,f*y,c*h);break;case"ZYZ":s.set(f*y,f*_,c*p,c*h);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const $E={DEG2RAD:Fa,RAD2DEG:rl,generateUUID:Yi,clamp:gt,euclideanModulo:i0,mapLinear:NE,inverseLerp:DE,lerp:Sc,damp:UE,pingpong:FE,smoothstep:OE,smootherstep:BE,randInt:zE,randFloat:kE,randFloatSpread:VE,seededRandom:HE,degToRad:GE,radToDeg:WE,isPowerOfTwo:XE,ceilPowerOfTwo:qE,floorPowerOfTwo:YE,setQuaternionFromProperEuler:jE,normalize:Et,denormalize:mi};class _e{static{_e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*n-l*r+e.x,this.y=o*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _i{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,l,c){let f=n[r+0],h=n[r+1],p=n[r+2],m=n[r+3],g=o[l+0],_=o[l+1],y=o[l+2],M=o[l+3];if(m!==M||f!==g||h!==_||p!==y){let S=f*g+h*_+p*y+m*M;S<0&&(g=-g,_=-_,y=-y,M=-M,S=-S);let b=1-c;if(S<.9995){const w=Math.acos(S),R=Math.sin(w);b=Math.sin(b*w)/R,c=Math.sin(c*w)/R,f=f*b+g*c,h=h*b+_*c,p=p*b+y*c,m=m*b+M*c}else{f=f*b+g*c,h=h*b+_*c,p=p*b+y*c,m=m*b+M*c;const w=1/Math.sqrt(f*f+h*h+p*p+m*m);f*=w,h*=w,p*=w,m*=w}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,o,l){const c=n[r],f=n[r+1],h=n[r+2],p=n[r+3],m=o[l],g=o[l+1],_=o[l+2],y=o[l+3];return e[t]=c*y+p*m+f*_-h*g,e[t+1]=f*y+p*g+h*m-c*_,e[t+2]=h*y+p*_+c*g-f*m,e[t+3]=p*y-c*m-f*g-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,l=e._order,c=Math.cos,f=Math.sin,h=c(n/2),p=c(r/2),m=c(o/2),g=f(n/2),_=f(r/2),y=f(o/2);switch(l){case"XYZ":this._x=g*p*m+h*_*y,this._y=h*_*m-g*p*y,this._z=h*p*y+g*_*m,this._w=h*p*m-g*_*y;break;case"YXZ":this._x=g*p*m+h*_*y,this._y=h*_*m-g*p*y,this._z=h*p*y-g*_*m,this._w=h*p*m+g*_*y;break;case"ZXY":this._x=g*p*m-h*_*y,this._y=h*_*m+g*p*y,this._z=h*p*y+g*_*m,this._w=h*p*m-g*_*y;break;case"ZYX":this._x=g*p*m-h*_*y,this._y=h*_*m+g*p*y,this._z=h*p*y-g*_*m,this._w=h*p*m+g*_*y;break;case"YZX":this._x=g*p*m+h*_*y,this._y=h*_*m+g*p*y,this._z=h*p*y-g*_*m,this._w=h*p*m-g*_*y;break;case"XZY":this._x=g*p*m-h*_*y,this._y=h*_*m-g*p*y,this._z=h*p*y+g*_*m,this._w=h*p*m+g*_*y;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],l=t[1],c=t[5],f=t[9],h=t[2],p=t[6],m=t[10],g=n+c+m;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(p-f)*_,this._y=(o-h)*_,this._z=(l-r)*_}else if(n>c&&n>m){const _=2*Math.sqrt(1+n-c-m);this._w=(p-f)/_,this._x=.25*_,this._y=(r+l)/_,this._z=(o+h)/_}else if(c>m){const _=2*Math.sqrt(1+c-n-m);this._w=(o-h)/_,this._x=(r+l)/_,this._y=.25*_,this._z=(f+p)/_}else{const _=2*Math.sqrt(1+m-n-c);this._w=(l-r)/_,this._x=(o+h)/_,this._y=(f+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,l=e._w,c=t._x,f=t._y,h=t._z,p=t._w;return this._x=n*p+l*c+r*h-o*f,this._y=r*p+l*f+o*c-n*h,this._z=o*p+l*h+n*f-r*c,this._w=l*p-n*c-r*f-o*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,o=e._z,l=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,o=-o,l=-l,c=-c);let f=1-t;if(c<.9995){const h=Math.acos(c),p=Math.sin(h);f=Math.sin(f*h)/p,t=Math.sin(t*h)/p,this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+o*t,this._w=this._w*f+l*t,this._onChangeCallback()}else this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+o*t,this._w=this._w*f+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{static{O.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ex.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ex.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,l=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*l,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*l,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,l=e.y,c=e.z,f=e.w,h=2*(l*r-c*n),p=2*(c*t-o*r),m=2*(o*n-l*t);return this.x=t+f*h+l*m-c*p,this.y=n+f*p+c*h-o*m,this.z=r+f*m+o*p-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,l=t.x,c=t.y,f=t.z;return this.x=r*f-o*c,this.y=o*l-n*f,this.z=n*c-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mm.copy(this).projectOnVector(e),this.sub(mm)}reflect(e){return this.sub(mm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mm=new O,Ex=new _i;class bt{static{bt.prototype.isMatrix3=!0}constructor(e,t,n,r,o,l,c,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,l,c,f,h)}set(e,t,n,r,o,l,c,f,h){const p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=o,p[5]=f,p[6]=n,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,l=n[0],c=n[3],f=n[6],h=n[1],p=n[4],m=n[7],g=n[2],_=n[5],y=n[8],M=r[0],S=r[3],b=r[6],w=r[1],R=r[4],T=r[7],I=r[2],C=r[5],D=r[8];return o[0]=l*M+c*w+f*I,o[3]=l*S+c*R+f*C,o[6]=l*b+c*T+f*D,o[1]=h*M+p*w+m*I,o[4]=h*S+p*R+m*C,o[7]=h*b+p*T+m*D,o[2]=g*M+_*w+y*I,o[5]=g*S+_*R+y*C,o[8]=g*b+_*T+y*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],l=e[4],c=e[5],f=e[6],h=e[7],p=e[8];return t*l*p-t*c*h-n*o*p+n*c*f+r*o*h-r*l*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],l=e[4],c=e[5],f=e[6],h=e[7],p=e[8],m=p*l-c*h,g=c*f-p*o,_=h*o-l*f,y=t*m+n*g+r*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=m*M,e[1]=(r*h-p*n)*M,e[2]=(c*n-r*l)*M,e[3]=g*M,e[4]=(p*t-r*f)*M,e[5]=(r*o-c*t)*M,e[6]=_*M,e[7]=(n*f-h*t)*M,e[8]=(l*t-n*o)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,l,c){const f=Math.cos(o),h=Math.sin(o);return this.set(n*f,n*h,-n*(f*l+h*c)+l+e,-r*h,r*f,-r*(-h*l+f*c)+c+t,0,0,1),this}scale(e,t){return ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gm.makeScale(e,t)),this}rotate(e){return ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gm.makeRotation(-e)),this}translate(e,t){return ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gm=new bt,Ax=new bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cx=new bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZE(){const s={enabled:!0,workingColorSpace:il,spaces:{},convert:function(r,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Qt&&(r.r=ms(r.r),r.g=ms(r.g),r.b=ms(r.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Qt&&(r.r=Qo(r.r),r.g=Qo(r.g),r.b=Qo(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fs?Nc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,l){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[il]:{primaries:e,whitePoint:n,transfer:Nc,toXYZ:Ax,fromXYZ:Cx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:e,whitePoint:n,transfer:Qt,toXYZ:Ax,fromXYZ:Cx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),s}const Lt=ZE();function ms(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let So;class dS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{So===void 0&&(So=Dc("canvas")),So.width=e.width,So.height=e.height;const r=So.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=So}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=ms(o[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ms(t[n]/255)*255):t[n]=ms(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JE=0;class ds{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?o.push(vm(r[l].image)):o.push(vm(r[l]))}else o=vm(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function vm(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}class KE extends ds{constructor(e=null){ps('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(e),this.isSource=!0}}let QE=0;const _m=new O;class hn extends Mr{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=Pi,r=Pi,o=fn,l=kr,c=oi,f=pi,h=hn.DEFAULT_ANISOTROPY,p=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=Yi(),this.name="",this.source=new ds(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=f,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_m).x}get height(){return this.source.getSize(_m).y}get depth(){return this.source.getSize(_m).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ac:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case Cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ac:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case Cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=$h;hn.DEFAULT_ANISOTROPY=1;class tn{static{tn.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*o,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*o,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*o,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const f=e.elements,h=f[0],p=f[4],m=f[8],g=f[1],_=f[5],y=f[9],M=f[2],S=f[6],b=f[10];if(Math.abs(p-g)<.01&&Math.abs(m-M)<.01&&Math.abs(y-S)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+M)<.1&&Math.abs(y+S)<.1&&Math.abs(h+_+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(h+1)/2,T=(_+1)/2,I=(b+1)/2,C=(p+g)/4,D=(m+M)/4,E=(y+S)/4;return R>T&&R>I?R<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(R),r=C/n,o=D/n):T>I?T<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(T),n=C/r,o=E/r):I<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(I),n=D/o,r=E/o),this.set(n,r,o,t),this}let w=Math.sqrt((S-y)*(S-y)+(m-M)*(m-M)+(g-p)*(g-p));return Math.abs(w)<.001&&(w=1),this.x=(S-y)/w,this.y=(m-M)/w,this.z=(g-p)/w,this.w=Math.acos((h+_+b-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class r0 extends Mr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},o=new hn(r),l=n.count;for(let c=0;c<l;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ds(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends r0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ad extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eA extends Ii{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ad(null,e,t,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}}class od extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class tA extends Ii{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new od(null,e,t,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}}class _t{static{_t.prototype.isMatrix4=!0}constructor(e,t,n,r,o,l,c,f,h,p,m,g,_,y,M,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,l,c,f,h,p,m,g,_,y,M,S)}set(e,t,n,r,o,l,c,f,h,p,m,g,_,y,M,S){const b=this.elements;return b[0]=e,b[4]=t,b[8]=n,b[12]=r,b[1]=o,b[5]=l,b[9]=c,b[13]=f,b[2]=h,b[6]=p,b[10]=m,b[14]=g,b[3]=_,b[7]=y,b[11]=M,b[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Mo.setFromMatrixColumn(e,0).length(),o=1/Mo.setFromMatrixColumn(e,1).length(),l=1/Mo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,l=Math.cos(n),c=Math.sin(n),f=Math.cos(r),h=Math.sin(r),p=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const g=l*p,_=l*m,y=c*p,M=c*m;t[0]=f*p,t[4]=-f*m,t[8]=h,t[1]=_+y*h,t[5]=g-M*h,t[9]=-c*f,t[2]=M-g*h,t[6]=y+_*h,t[10]=l*f}else if(e.order==="YXZ"){const g=f*p,_=f*m,y=h*p,M=h*m;t[0]=g+M*c,t[4]=y*c-_,t[8]=l*h,t[1]=l*m,t[5]=l*p,t[9]=-c,t[2]=_*c-y,t[6]=M+g*c,t[10]=l*f}else if(e.order==="ZXY"){const g=f*p,_=f*m,y=h*p,M=h*m;t[0]=g-M*c,t[4]=-l*m,t[8]=y+_*c,t[1]=_+y*c,t[5]=l*p,t[9]=M-g*c,t[2]=-l*h,t[6]=c,t[10]=l*f}else if(e.order==="ZYX"){const g=l*p,_=l*m,y=c*p,M=c*m;t[0]=f*p,t[4]=y*h-_,t[8]=g*h+M,t[1]=f*m,t[5]=M*h+g,t[9]=_*h-y,t[2]=-h,t[6]=c*f,t[10]=l*f}else if(e.order==="YZX"){const g=l*f,_=l*h,y=c*f,M=c*h;t[0]=f*p,t[4]=M-g*m,t[8]=y*m+_,t[1]=m,t[5]=l*p,t[9]=-c*p,t[2]=-h*p,t[6]=_*m+y,t[10]=g-M*m}else if(e.order==="XZY"){const g=l*f,_=l*h,y=c*f,M=c*h;t[0]=f*p,t[4]=-m,t[8]=h*p,t[1]=g*m+M,t[5]=l*p,t[9]=_*m-y,t[2]=y*m-_,t[6]=c*p,t[10]=M*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nA,e,iA)}lookAt(e,t,n){const r=this.elements;return Wi.subVectors(e,t),Wi.lengthSq()===0&&(Wi.z=1),Wi.normalize(),Us.crossVectors(n,Wi),Us.lengthSq()===0&&(Math.abs(n.z)===1?Wi.x+=1e-4:Wi.z+=1e-4,Wi.normalize(),Us.crossVectors(n,Wi)),Us.normalize(),Ju.crossVectors(Wi,Us),r[0]=Us.x,r[4]=Ju.x,r[8]=Wi.x,r[1]=Us.y,r[5]=Ju.y,r[9]=Wi.y,r[2]=Us.z,r[6]=Ju.z,r[10]=Wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,l=n[0],c=n[4],f=n[8],h=n[12],p=n[1],m=n[5],g=n[9],_=n[13],y=n[2],M=n[6],S=n[10],b=n[14],w=n[3],R=n[7],T=n[11],I=n[15],C=r[0],D=r[4],E=r[8],N=r[12],U=r[1],B=r[5],G=r[9],Y=r[13],k=r[2],j=r[6],H=r[10],q=r[14],ne=r[3],K=r[7],oe=r[11],he=r[15];return o[0]=l*C+c*U+f*k+h*ne,o[4]=l*D+c*B+f*j+h*K,o[8]=l*E+c*G+f*H+h*oe,o[12]=l*N+c*Y+f*q+h*he,o[1]=p*C+m*U+g*k+_*ne,o[5]=p*D+m*B+g*j+_*K,o[9]=p*E+m*G+g*H+_*oe,o[13]=p*N+m*Y+g*q+_*he,o[2]=y*C+M*U+S*k+b*ne,o[6]=y*D+M*B+S*j+b*K,o[10]=y*E+M*G+S*H+b*oe,o[14]=y*N+M*Y+S*q+b*he,o[3]=w*C+R*U+T*k+I*ne,o[7]=w*D+R*B+T*j+I*K,o[11]=w*E+R*G+T*H+I*oe,o[15]=w*N+R*Y+T*q+I*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],l=e[1],c=e[5],f=e[9],h=e[13],p=e[2],m=e[6],g=e[10],_=e[14],y=e[3],M=e[7],S=e[11],b=e[15],w=f*_-h*g,R=c*_-h*m,T=c*g-f*m,I=l*_-h*p,C=l*g-f*p,D=l*m-c*p;return t*(M*w-S*R+b*T)-n*(y*w-S*I+b*C)+r*(y*R-M*I+b*D)-o*(y*T-M*C+S*D)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[1],l=e[5],c=e[9],f=e[2],h=e[6],p=e[10];return t*(l*p-c*h)-n*(o*p-c*f)+r*(o*h-l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],l=e[4],c=e[5],f=e[6],h=e[7],p=e[8],m=e[9],g=e[10],_=e[11],y=e[12],M=e[13],S=e[14],b=e[15],w=t*c-n*l,R=t*f-r*l,T=t*h-o*l,I=n*f-r*c,C=n*h-o*c,D=r*h-o*f,E=p*M-m*y,N=p*S-g*y,U=p*b-_*y,B=m*S-g*M,G=m*b-_*M,Y=g*b-_*S,k=w*Y-R*G+T*B+I*U-C*N+D*E;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/k;return e[0]=(c*Y-f*G+h*B)*j,e[1]=(r*G-n*Y-o*B)*j,e[2]=(M*D-S*C+b*I)*j,e[3]=(g*C-m*D-_*I)*j,e[4]=(f*U-l*Y-h*N)*j,e[5]=(t*Y-r*U+o*N)*j,e[6]=(S*T-y*D-b*R)*j,e[7]=(p*D-g*T+_*R)*j,e[8]=(l*G-c*U+h*E)*j,e[9]=(n*U-t*G-o*E)*j,e[10]=(y*C-M*T+b*w)*j,e[11]=(m*T-p*C-_*w)*j,e[12]=(c*N-l*B-f*E)*j,e[13]=(t*B-n*N+r*E)*j,e[14]=(M*R-y*I-S*w)*j,e[15]=(p*I-m*R+g*w)*j,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,l=e.x,c=e.y,f=e.z,h=o*l,p=o*c;return this.set(h*l+n,h*c-r*f,h*f+r*c,0,h*c+r*f,p*c+n,p*f-r*l,0,h*f-r*c,p*f+r*l,o*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,l){return this.set(1,n,o,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,l=t._y,c=t._z,f=t._w,h=o+o,p=l+l,m=c+c,g=o*h,_=o*p,y=o*m,M=l*p,S=l*m,b=c*m,w=f*h,R=f*p,T=f*m,I=n.x,C=n.y,D=n.z;return r[0]=(1-(M+b))*I,r[1]=(_+T)*I,r[2]=(y-R)*I,r[3]=0,r[4]=(_-T)*C,r[5]=(1-(g+b))*C,r[6]=(S+w)*C,r[7]=0,r[8]=(y+R)*D,r[9]=(S-w)*D,r[10]=(1-(g+M))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const o=this.determinantAffine();if(o===0)return n.set(1,1,1),t.identity(),this;let l=Mo.set(r[0],r[1],r[2]).length();const c=Mo.set(r[4],r[5],r[6]).length(),f=Mo.set(r[8],r[9],r[10]).length();o<0&&(l=-l),mr.copy(this);const h=1/l,p=1/c,m=1/f;return mr.elements[0]*=h,mr.elements[1]*=h,mr.elements[2]*=h,mr.elements[4]*=p,mr.elements[5]*=p,mr.elements[6]*=p,mr.elements[8]*=m,mr.elements[9]*=m,mr.elements[10]*=m,t.setFromRotationMatrix(mr),n.x=l,n.y=c,n.z=f,this}makePerspective(e,t,n,r,o,l,c=qi,f=!1){const h=this.elements,p=2*o/(t-e),m=2*o/(n-r),g=(t+e)/(t-e),_=(n+r)/(n-r);let y,M;if(f)y=o/(l-o),M=l*o/(l-o);else if(c===qi)y=-(l+o)/(l-o),M=-2*l*o/(l-o);else if(c===Oa)y=-l/(l-o),M=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,o,l,c=qi,f=!1){const h=this.elements,p=2/(t-e),m=2/(n-r),g=-(t+e)/(t-e),_=-(n+r)/(n-r);let y,M;if(f)y=1/(l-o),M=l/(l-o);else if(c===qi)y=-2/(l-o),M=-(l+o)/(l-o);else if(c===Oa)y=-1/(l-o),M=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=m,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=y,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Mo=new O,mr=new _t,nA=new O(0,0,0),iA=new O(1,1,1),Us=new O,Ju=new O,Wi=new O,Rx=new _t,Px=new _i;class Sr{constructor(e=0,t=0,n=0,r=Sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],l=r[4],c=r[8],f=r[1],h=r[5],p=r[9],m=r[2],g=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-gt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,_),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rx,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Px.setFromEuler(this),this.setFromQuaternion(Px,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sr.DEFAULT_ORDER="XYZ";class sl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rA=0;const Ix=new O,wo=new _i,ns=new _t,Ku=new O,Zl=new O,sA=new O,aA=new _i,Lx=new O(1,0,0),Nx=new O(0,1,0),Dx=new O(0,0,1),Ux={type:"added"},oA={type:"removed"},To={type:"childadded",child:null},xm={type:"childremoved",child:null};class Bt extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rA++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new O,t=new Sr,n=new _i,r=new O(1,1,1);function o(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new bt}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.multiply(wo),this}rotateOnWorldAxis(e,t){return wo.setFromAxisAngle(e,t),this.quaternion.premultiply(wo),this}rotateX(e){return this.rotateOnAxis(Lx,e)}rotateY(e){return this.rotateOnAxis(Nx,e)}rotateZ(e){return this.rotateOnAxis(Dx,e)}translateOnAxis(e,t){return Ix.copy(e).applyQuaternion(this.quaternion),this.position.add(Ix.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lx,e)}translateY(e){return this.translateOnAxis(Nx,e)}translateZ(e){return this.translateOnAxis(Dx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ns.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ku.copy(e):Ku.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Zl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ns.lookAt(Zl,Ku,this.up):ns.lookAt(Ku,Zl,this.up),this.quaternion.setFromRotationMatrix(ns),r&&(ns.extractRotation(r.matrixWorld),wo.setFromRotationMatrix(ns),this.quaternion.premultiply(wo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ux),To.child=e,this.dispatchEvent(To),To.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oA),xm.child=e,this.dispatchEvent(xm),xm.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ns.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ns.multiply(e.parent.matrixWorld)),e.applyMatrix4(ns),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ux),To.child=e,this.dispatchEvent(To),To.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zl,e,sA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zl,aA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*r,o[13]+=n-o[1]*t-o[5]*n-o[9]*r,o[14]+=r-o[2]*t-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const m=f[h];o(e.shapes,m)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,h=this.material.length;f<h;f++)c.push(o(e.materials,this.material[f]));r.material=c}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];r.animations.push(o(e.animations,f))}}if(t){const c=l(e.geometries),f=l(e.materials),h=l(e.textures),p=l(e.images),m=l(e.shapes),g=l(e.skeletons),_=l(e.animations),y=l(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),_.length>0&&(n.animations=_),y.length>0&&(n.nodes=y)}return n.object=r,n;function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Bt.DEFAULT_UP=new O(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jo extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lA={type:"move"};class $f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,l=null;const c=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,n),b=this._getHandJoint(h,M);S!==null&&(b.matrix.fromArray(S.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=S.radius),b.visible=S!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=p.position.distanceTo(m.position),_=.02,y=.005;h.inputState.pinching&&g>_+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=_-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(lA)))}return c!==null&&(c.visible=r!==null),f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const pS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fs={h:0,s:0,l:0},Qu={h:0,s:0,l:0};function ym(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Lt.workingColorSpace){if(e=i0(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,l=2*n-o;this.r=ym(l,o,e+1/3),this.g=ym(l,o,e),this.b=ym(l,o,e-1/3)}return Lt.colorSpaceToWorking(this,r),this}setStyle(e,t=Yn){function n(o){o!==void 0&&parseFloat(o)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yn){const n=pS[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=Qo(e.r),this.g=Qo(e.g),this.b=Qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return Lt.workingToColorSpace(si.copy(this),e),Math.round(gt(si.r*255,0,255))*65536+Math.round(gt(si.g*255,0,255))*256+Math.round(gt(si.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(si.copy(this),t);const n=si.r,r=si.g,o=si.b,l=Math.max(n,r,o),c=Math.min(n,r,o);let f,h;const p=(c+l)/2;if(c===l)f=0,h=0;else{const m=l-c;switch(h=p<=.5?m/(l+c):m/(2-l-c),l){case n:f=(r-o)/m+(r<o?6:0);break;case r:f=(o-n)/m+2;break;case o:f=(n-r)/m+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(si.copy(this),t),e.r=si.r,e.g=si.g,e.b=si.b,e}getStyle(e=Yn){Lt.workingToColorSpace(si.copy(this),e);const t=si.r,n=si.g,r=si.b;return e!==Yn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Fs),this.setHSL(Fs.h+e,Fs.s+t,Fs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fs),e.getHSL(Qu);const n=Sc(Fs.h,Qu.h,t),r=Sc(Fs.s,Qu.s,t),o=Sc(Fs.l,Qu.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const si=new be;be.NAMES=pS;class ld{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(e),this.density=t}clone(){return new ld(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class cd{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=n}clone(){return new cd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class s0 extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sr,this.environmentIntensity=1,this.environmentRotation=new Sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gr=new O,is=new O,bm=new O,rs=new O,Eo=new O,Ao=new O,Fx=new O,Sm=new O,Mm=new O,wm=new O,Tm=new tn,Em=new tn,Am=new tn;class Ri{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),gr.subVectors(e,t),r.cross(gr);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){gr.subVectors(r,t),is.subVectors(n,t),bm.subVectors(e,t);const l=gr.dot(gr),c=gr.dot(is),f=gr.dot(bm),h=is.dot(is),p=is.dot(bm),m=l*h-c*c;if(m===0)return o.set(0,0,0),null;const g=1/m,_=(h*f-c*p)*g,y=(l*p-c*f)*g;return o.set(1-_-y,y,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(e,t,n,r,o,l,c,f){return this.getBarycoord(e,t,n,r,rs)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,rs.x),f.addScaledVector(l,rs.y),f.addScaledVector(c,rs.z),f)}static getInterpolatedAttribute(e,t,n,r,o,l){return Tm.setScalar(0),Em.setScalar(0),Am.setScalar(0),Tm.fromBufferAttribute(e,t),Em.fromBufferAttribute(e,n),Am.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(Tm,o.x),l.addScaledVector(Em,o.y),l.addScaledVector(Am,o.z),l}static isFrontFacing(e,t,n,r){return gr.subVectors(n,t),is.subVectors(e,t),gr.cross(is).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gr.subVectors(this.c,this.b),is.subVectors(this.a,this.b),gr.cross(is).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return Ri.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let l,c;Eo.subVectors(r,n),Ao.subVectors(o,n),Sm.subVectors(e,n);const f=Eo.dot(Sm),h=Ao.dot(Sm);if(f<=0&&h<=0)return t.copy(n);Mm.subVectors(e,r);const p=Eo.dot(Mm),m=Ao.dot(Mm);if(p>=0&&m<=p)return t.copy(r);const g=f*m-p*h;if(g<=0&&f>=0&&p<=0)return l=f/(f-p),t.copy(n).addScaledVector(Eo,l);wm.subVectors(e,o);const _=Eo.dot(wm),y=Ao.dot(wm);if(y>=0&&_<=y)return t.copy(o);const M=_*h-f*y;if(M<=0&&h>=0&&y<=0)return c=h/(h-y),t.copy(n).addScaledVector(Ao,c);const S=p*y-_*m;if(S<=0&&m-p>=0&&_-y>=0)return Fx.subVectors(o,r),c=(m-p)/(m-p+(_-y)),t.copy(r).addScaledVector(Fx,c);const b=1/(S+M+g);return l=M*b,c=g*b,t.copy(n).addScaledVector(Eo,l).addScaledVector(Ao,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ci{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=o.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,vr):vr.fromBufferAttribute(o,l),vr.applyMatrix4(e.matrixWorld),this.expandByPoint(vr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ef.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ef.copy(n.boundingBox)),ef.applyMatrix4(e.matrixWorld),this.union(ef)}const r=e.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vr),vr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jl),tf.subVectors(this.max,Jl),Co.subVectors(e.a,Jl),Ro.subVectors(e.b,Jl),Po.subVectors(e.c,Jl),Os.subVectors(Ro,Co),Bs.subVectors(Po,Ro),_a.subVectors(Co,Po);let t=[0,-Os.z,Os.y,0,-Bs.z,Bs.y,0,-_a.z,_a.y,Os.z,0,-Os.x,Bs.z,0,-Bs.x,_a.z,0,-_a.x,-Os.y,Os.x,0,-Bs.y,Bs.x,0,-_a.y,_a.x,0];return!Cm(t,Co,Ro,Po,tf)||(t=[1,0,0,0,1,0,0,0,1],!Cm(t,Co,Ro,Po,tf))?!1:(nf.crossVectors(Os,Bs),t=[nf.x,nf.y,nf.z],Cm(t,Co,Ro,Po,tf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ss),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ss=[new O,new O,new O,new O,new O,new O,new O,new O],vr=new O,ef=new ci,Co=new O,Ro=new O,Po=new O,Os=new O,Bs=new O,_a=new O,Jl=new O,tf=new O,nf=new O,xa=new O;function Cm(s,e,t,n,r){for(let o=0,l=s.length-3;o<=l;o+=3){xa.fromArray(s,o);const c=r.x*Math.abs(xa.x)+r.y*Math.abs(xa.y)+r.z*Math.abs(xa.z),f=e.dot(xa),h=t.dot(xa),p=n.dot(xa);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>c)return!1}return!0}const hs=cA();function cA(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),r=new Uint32Array(512);for(let f=0;f<256;++f){const h=f-127;h<-27?(n[f]=0,n[f|256]=32768,r[f]=24,r[f|256]=24):h<-14?(n[f]=1024>>-h-14,n[f|256]=1024>>-h-14|32768,r[f]=-h-1,r[f|256]=-h-1):h<=15?(n[f]=h+15<<10,n[f|256]=h+15<<10|32768,r[f]=13,r[f|256]=13):h<128?(n[f]=31744,n[f|256]=64512,r[f]=24,r[f|256]=24):(n[f]=31744,n[f|256]=64512,r[f]=13,r[f|256]=13)}const o=new Uint32Array(2048),l=new Uint32Array(64),c=new Uint32Array(64);for(let f=1;f<1024;++f){let h=f<<13,p=0;for(;(h&8388608)===0;)h<<=1,p-=8388608;h&=-8388609,p+=947912704,o[f]=h|p}for(let f=1024;f<2048;++f)o[f]=939524096+(f-1024<<13);for(let f=1;f<31;++f)l[f]=f<<23;l[31]=1199570944,l[32]=2147483648;for(let f=33;f<63;++f)l[f]=2147483648+(f-32<<23);l[63]=3347054592;for(let f=1;f<64;++f)f!==32&&(c[f]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:o,exponentTable:l,offsetTable:c}}function Ai(s){Math.abs(s)>65504&&Be("DataUtils.toHalfFloat(): Value out of range."),s=gt(s,-65504,65504),hs.floatView[0]=s;const e=hs.uint32View[0],t=e>>23&511;return hs.baseTable[t]+((e&8388607)>>hs.shiftTable[t])}function uc(s){const e=s>>10;return hs.uint32View[0]=hs.mantissaTable[hs.offsetTable[e]+(s&1023)]+hs.exponentTable[e],hs.floatView[0]}class uA{static toHalfFloat(e){return Ai(e)}static fromHalfFloat(e){return uc(e)}}const Ln=new O,rf=new _e;let fA=0;class ct extends Mr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sd,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rf.fromBufferAttribute(this,t),rf.applyMatrix3(e),this.setXY(t,rf.x,rf.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix3(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),o=Et(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class hA extends ct{constructor(e,t,n){super(new Int8Array(e),t,n)}}class dA extends ct{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class pA extends ct{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class mA extends ct{constructor(e,t,n){super(new Int16Array(e),t,n)}}class a0 extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gA extends ct{constructor(e,t,n){super(new Int32Array(e),t,n)}}class o0 extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vA extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=uc(this.array[e*this.itemSize]);return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=Ai(t),this}getY(e){let t=uc(this.array[e*this.itemSize+1]);return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=Ai(t),this}getZ(e){let t=uc(this.array[e*this.itemSize+2]);return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=Ai(t),this}getW(e){let t=uc(this.array[e*this.itemSize+3]);return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=Ai(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=Ai(t),this.array[e+1]=Ai(n),this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=Ai(t),this.array[e+1]=Ai(n),this.array[e+2]=Ai(r),this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),o=Et(o,this.array)),this.array[e+0]=Ai(t),this.array[e+1]=Ai(n),this.array[e+2]=Ai(r),this.array[e+3]=Ai(o),this}}class $e extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}const _A=new ci,Kl=new O,Rm=new O;class gn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_A.setFromPoints(e).getCenter(n);let r=0;for(let o=0,l=e.length;o<l;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kl.subVectors(e,this.center);const t=Kl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Kl,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kl.copy(e.center).add(Rm)),this.expandByPoint(Kl.copy(e.center).sub(Rm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xA=0;const rr=new _t,Pm=new Bt,Io=new O,Xi=new ci,Ql=new ci,qn=new O;class pt extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(AE(e)?o0:a0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new bt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return rr.makeRotationFromQuaternion(e),this.applyMatrix4(rr),this}rotateX(e){return rr.makeRotationX(e),this.applyMatrix4(rr),this}rotateY(e){return rr.makeRotationY(e),this.applyMatrix4(rr),this}rotateZ(e){return rr.makeRotationZ(e),this.applyMatrix4(rr),this}translate(e,t,n){return rr.makeTranslation(e,t,n),this.applyMatrix4(rr),this}scale(e,t,n){return rr.makeScale(e,t,n),this.applyMatrix4(rr),this}lookAt(e){return Pm.lookAt(e),Pm.updateMatrix(),this.applyMatrix4(Pm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Io).negate(),this.translate(Io.x,Io.y,Io.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new $e(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];Xi.setFromBufferAttribute(o),this.morphTargetsRelative?(qn.addVectors(this.boundingBox.min,Xi.min),this.boundingBox.expandByPoint(qn),qn.addVectors(this.boundingBox.max,Xi.max),this.boundingBox.expandByPoint(qn)):(this.boundingBox.expandByPoint(Xi.min),this.boundingBox.expandByPoint(Xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Xi.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const c=t[o];Ql.setFromBufferAttribute(c),this.morphTargetsRelative?(qn.addVectors(Xi.min,Ql.min),Xi.expandByPoint(qn),qn.addVectors(Xi.max,Ql.max),Xi.expandByPoint(qn)):(Xi.expandByPoint(Ql.min),Xi.expandByPoint(Ql.max))}Xi.getCenter(n);let r=0;for(let o=0,l=e.count;o<l;o++)qn.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(qn));if(t)for(let o=0,l=t.length;o<l;o++){const c=t[o],f=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)qn.fromBufferAttribute(c,h),f&&(Io.fromBufferAttribute(e,h),qn.add(Io)),r=Math.max(r,n.distanceToSquared(qn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;let l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new ct(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));const c=[],f=[];for(let E=0;E<n.count;E++)c[E]=new O,f[E]=new O;const h=new O,p=new O,m=new O,g=new _e,_=new _e,y=new _e,M=new O,S=new O;function b(E,N,U){h.fromBufferAttribute(n,E),p.fromBufferAttribute(n,N),m.fromBufferAttribute(n,U),g.fromBufferAttribute(o,E),_.fromBufferAttribute(o,N),y.fromBufferAttribute(o,U),p.sub(h),m.sub(h),_.sub(g),y.sub(g);const B=1/(_.x*y.y-y.x*_.y);isFinite(B)&&(M.copy(p).multiplyScalar(y.y).addScaledVector(m,-_.y).multiplyScalar(B),S.copy(m).multiplyScalar(_.x).addScaledVector(p,-y.x).multiplyScalar(B),c[E].add(M),c[N].add(M),c[U].add(M),f[E].add(S),f[N].add(S),f[U].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,N=w.length;E<N;++E){const U=w[E],B=U.start,G=U.count;for(let Y=B,k=B+G;Y<k;Y+=3)b(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const R=new O,T=new O,I=new O,C=new O;function D(E){I.fromBufferAttribute(r,E),C.copy(I);const N=c[E];R.copy(N),R.sub(I.multiplyScalar(I.dot(N))).normalize(),T.crossVectors(C,N);const B=T.dot(f[E])<0?-1:1;l.setXYZW(E,R.x,R.y,R.z,B)}for(let E=0,N=w.length;E<N;++E){const U=w[E],B=U.start,G=U.count;for(let Y=B,k=B+G;Y<k;Y+=3)D(e.getX(Y+0)),D(e.getX(Y+1)),D(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,_=n.count;g<_;g++)n.setXYZ(g,0,0,0);const r=new O,o=new O,l=new O,c=new O,f=new O,h=new O,p=new O,m=new O;if(e)for(let g=0,_=e.count;g<_;g+=3){const y=e.getX(g+0),M=e.getX(g+1),S=e.getX(g+2);r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,S),p.subVectors(l,o),m.subVectors(r,o),p.cross(m),c.fromBufferAttribute(n,y),f.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),c.add(p),f.add(p),h.add(p),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(M,f.x,f.y,f.z),n.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,_=t.count;g<_;g+=3)r.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),l.fromBufferAttribute(t,g+2),p.subVectors(l,o),m.subVectors(r,o),p.cross(m),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qn.fromBufferAttribute(e,t),qn.normalize(),e.setXYZ(t,qn.x,qn.y,qn.z)}toNonIndexed(){function e(c,f){const h=c.array,p=c.itemSize,m=c.normalized,g=new h.constructor(f.length*p);let _=0,y=0;for(let M=0,S=f.length;M<S;M++){c.isInterleavedBufferAttribute?_=f[M]*c.data.stride+c.offset:_=f[M]*p;for(let b=0;b<p;b++)g[y++]=h[_++]}return new ct(g,p,m)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,n=this.index.array,r=this.attributes;for(const c in r){const f=r[c],h=e(f,n);t.setAttribute(c,h)}const o=this.morphAttributes;for(const c in o){const f=[],h=o[c];for(let p=0,m=h.length;p<m;p++){const g=h[p],_=e(g,n);f.push(_)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,f=l.length;c<f;c++){const h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const h=n[f];e.data.attributes[f]=h.toJSON(e.data)}const r={};let o=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let m=0,g=h.length;m<g;m++){const _=h[m];p.push(_.toJSON(e.data))}p.length>0&&(r[f]=p,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const h in r){const p=r[h];this.setAttribute(h,p.clone(t))}const o=e.morphAttributes;for(const h in o){const p=[],m=o[h];for(let g=0,_=m.length;g<_;g++)p.push(m[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,p=l.length;h<p;h++){const m=l[h];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ud{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sd,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const fi=new O;class Ba{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fi.fromBufferAttribute(this,t),fi.applyMatrix4(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fi.fromBufferAttribute(this,t),fi.applyNormalMatrix(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fi.fromBufferAttribute(this,t),fi.transformDirection(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),o=Et(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){Uc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ba(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Uc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Im=new O,yA=new O,bA=new bt;class ls{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Im.subVectors(n,t).cross(yA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Im),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return n===!0&&(l<0||l>1)?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bA.getNormalMatrix(e),r=this.coplanarPoint(Im).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let SA=0;class ti extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SA++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Ko,this.side=Ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vg,this.blendDst=Hg,this.blendEquation=Ia,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=el,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jf,this.stencilZFail=jf,this.stencilZPass=jf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}if(t){const o=r(e.textures),l=r(e.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ls().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class l0 extends ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Lo;const ec=new O,No=new O,Do=new O,Uo=new _e,tc=new _e,mS=new _t,sf=new O,nc=new O,af=new O,Ox=new _e,Lm=new _e,Bx=new _e;class gS extends Bt{constructor(e=new l0){if(super(),this.isSprite=!0,this.type="Sprite",Lo===void 0){Lo=new pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ud(t,5);Lo.setIndex([0,1,2,0,2,3]),Lo.setAttribute("position",new Ba(n,3,0,!1)),Lo.setAttribute("uv",new Ba(n,2,3,!1))}this.geometry=Lo,this.material=e,this.center=new _e(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&st('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),No.setFromMatrixScale(this.matrixWorld),mS.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Do.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&No.multiplyScalar(-Do.z);const n=this.material.rotation;let r,o;n!==0&&(o=Math.cos(n),r=Math.sin(n));const l=this.center;of(sf.set(-.5,-.5,0),Do,l,No,r,o),of(nc.set(.5,-.5,0),Do,l,No,r,o),of(af.set(.5,.5,0),Do,l,No,r,o),Ox.set(0,0),Lm.set(1,0),Bx.set(1,1);let c=e.ray.intersectTriangle(sf,nc,af,!1,ec);if(c===null&&(of(nc.set(-.5,.5,0),Do,l,No,r,o),Lm.set(0,1),c=e.ray.intersectTriangle(sf,af,nc,!1,ec),c===null))return;const f=e.ray.origin.distanceTo(ec);f<e.near||f>e.far||t.push({distance:f,point:ec.clone(),uv:Ri.getInterpolation(ec,sf,nc,af,Ox,Lm,Bx,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function of(s,e,t,n,r,o){Uo.subVectors(s,t).addScalar(.5).multiply(n),r!==void 0?(tc.x=o*Uo.x-r*Uo.y,tc.y=r*Uo.x+o*Uo.y):tc.copy(Uo),s.copy(e),s.x+=tc.x,s.y+=tc.y,s.applyMatrix4(mS)}const lf=new O,zx=new O;class vS extends Bt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,r=t.length;n<r;n++){const o=t[n];this.addLevel(o.object.clone(),o.distance,o.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const r=this.levels;let o;for(o=0;o<r.length&&!(t<r[o].distance);o++);return r.splice(o,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const r=t.splice(n,1);return this.remove(r[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,r;for(n=1,r=t.length;n<r;n++){let o=t[n].distance;if(t[n].object.visible&&(o-=o*t[n].hysteresis),e<o)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){lf.setFromMatrixPosition(this.matrixWorld);const r=e.ray.origin.distanceTo(lf);this.getObjectForDistance(r).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){lf.setFromMatrixPosition(e.matrixWorld),zx.setFromMatrixPosition(this.matrixWorld);const n=lf.distanceTo(zx)/e.zoom;t[0].object.visible=!0;let r,o;for(r=1,o=t.length;r<o;r++){let l=t[r].distance;if(t[r].object.visible&&(l-=l*t[r].hysteresis),n>=l)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<o;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];const n=this.levels;for(let r=0,o=n.length;r<o;r++){const l=n[r];t.object.levels.push({object:l.object.uuid,distance:l.distance,hysteresis:l.hysteresis})}return t}}const as=new O,Nm=new O,cf=new O,uf=new O;class dl{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,as)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=as.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(as.copy(this.origin).addScaledVector(this.direction,t),as.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Nm.copy(e).add(t).multiplyScalar(.5),cf.copy(t).sub(e).normalize(),uf.copy(this.origin).sub(Nm);const o=e.distanceTo(t)*.5,l=-this.direction.dot(cf),c=uf.dot(this.direction),f=-uf.dot(cf),h=uf.lengthSq(),p=Math.abs(1-l*l);let m,g,_,y;if(p>0)if(m=l*f-c,g=l*c-f,y=o*p,m>=0)if(g>=-y)if(g<=y){const M=1/p;m*=M,g*=M,_=m*(m+l*g+2*c)+g*(l*m+g+2*f)+h}else g=o,m=Math.max(0,-(l*g+c)),_=-m*m+g*(g+2*f)+h;else g=-o,m=Math.max(0,-(l*g+c)),_=-m*m+g*(g+2*f)+h;else g<=-y?(m=Math.max(0,-(-l*o+c)),g=m>0?-o:Math.min(Math.max(-o,-f),o),_=-m*m+g*(g+2*f)+h):g<=y?(m=0,g=Math.min(Math.max(-o,-f),o),_=g*(g+2*f)+h):(m=Math.max(0,-(l*o+c)),g=m>0?o:Math.min(Math.max(-o,-f),o),_=-m*m+g*(g+2*f)+h);else g=l>0?-o:o,m=Math.max(0,-(l*g+c)),_=-m*m+g*(g+2*f)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Nm).addScaledVector(cf,g),_}intersectSphere(e,t){if(e.radius<0)return null;as.subVectors(e.center,this.origin);const n=as.dot(this.direction),r=as.dot(as)-n*n,o=e.radius*e.radius;if(r>o)return null;const l=Math.sqrt(o-r),c=n-l,f=n+l;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,l,c,f;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return h>=0?(n=(e.min.x-g.x)*h,r=(e.max.x-g.x)*h):(n=(e.max.x-g.x)*h,r=(e.min.x-g.x)*h),p>=0?(o=(e.min.y-g.y)*p,l=(e.max.y-g.y)*p):(o=(e.max.y-g.y)*p,l=(e.min.y-g.y)*p),n>l||o>r||((o>n||isNaN(n))&&(n=o),(l<r||isNaN(r))&&(r=l),m>=0?(c=(e.min.z-g.z)*m,f=(e.max.z-g.z)*m):(c=(e.max.z-g.z)*m,f=(e.min.z-g.z)*m),n>f||c>r)||((c>n||n!==n)&&(n=c),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,as)!==null}intersectTriangle(e,t,n,r,o){const l=this.origin,c=this.direction,f=c.x,h=c.y,p=c.z,m=e.x-l.x,g=e.y-l.y,_=e.z-l.z,y=t.x-l.x,M=t.y-l.y,S=t.z-l.z,b=n.x-l.x,w=n.y-l.y,R=n.z-l.z,T=Math.abs(f),I=Math.abs(h),C=Math.abs(p);let D,E,N,U,B,G,Y,k,j,H,q,ne;if(T>=I&&T>=C?(N=f,G=m,j=y,ne=b,f>=0?(D=h,E=p,U=g,B=_,Y=M,k=S,H=w,q=R):(D=p,E=h,U=_,B=g,Y=S,k=M,H=R,q=w)):I>=C?(N=h,G=g,j=M,ne=w,h>=0?(D=p,E=f,U=_,B=m,Y=S,k=y,H=R,q=b):(D=f,E=p,U=m,B=_,Y=y,k=S,H=b,q=R)):(N=p,G=_,j=S,ne=R,p>=0?(D=f,E=h,U=m,B=g,Y=y,k=M,H=b,q=w):(D=h,E=f,U=g,B=m,Y=M,k=y,H=w,q=b)),N===0)return null;const K=D/N,oe=E/N,he=1/N,qe=U-K*G,Ie=B-oe*G,et=Y-K*j,rt=k-oe*j,xt=H-K*ne,le=q-oe*ne,fe=xt*rt-le*et,Ne=qe*le-Ie*xt,at=et*Ie-rt*qe;if(r){if(fe<0||Ne<0||at<0)return null}else if((fe<0||Ne<0||at<0)&&(fe>0||Ne>0||at>0))return null;const We=fe+Ne+at;if(We===0)return null;const ft=he*(fe*G+Ne*j+at*ne);return(We>0?ft<0:ft>0)?null:this.at(ft/We,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $s extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kx=new _t,ya=new dl,ff=new gn,Vx=new O,hf=new O,df=new O,pf=new O,Dm=new O,mf=new O,Hx=new O,gf=new O;class Dn extends Bt{constructor(e=new pt,t=new $s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(o&&c){mf.set(0,0,0);for(let f=0,h=o.length;f<h;f++){const p=c[f],m=o[f];p!==0&&(Dm.fromBufferAttribute(m,e),l?mf.addScaledVector(Dm,p):mf.addScaledVector(Dm.sub(t),p))}t.add(mf)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ff.copy(n.boundingSphere),ff.applyMatrix4(o),ya.copy(e.ray).recast(e.near),!(ff.containsPoint(ya.origin)===!1&&(ya.intersectSphere(ff,Vx)===null||ya.origin.distanceToSquared(Vx)>(e.far-e.near)**2))&&(kx.copy(o).invert(),ya.copy(e.ray).applyMatrix4(kx),!(n.boundingBox!==null&&ya.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ya)))}_computeIntersections(e,t,n){let r;const o=this.geometry,l=this.material,c=o.index,f=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,g=o.groups,_=o.drawRange;if(c!==null)if(Array.isArray(l))for(let y=0,M=g.length;y<M;y++){const S=g[y],b=l[S.materialIndex],w=Math.max(S.start,_.start),R=Math.min(c.count,Math.min(S.start+S.count,_.start+_.count));for(let T=w,I=R;T<I;T+=3){const C=c.getX(T),D=c.getX(T+1),E=c.getX(T+2);r=vf(this,b,e,n,h,p,m,C,D,E),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const y=Math.max(0,_.start),M=Math.min(c.count,_.start+_.count);for(let S=y,b=M;S<b;S+=3){const w=c.getX(S),R=c.getX(S+1),T=c.getX(S+2);r=vf(this,l,e,n,h,p,m,w,R,T),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(l))for(let y=0,M=g.length;y<M;y++){const S=g[y],b=l[S.materialIndex],w=Math.max(S.start,_.start),R=Math.min(f.count,Math.min(S.start+S.count,_.start+_.count));for(let T=w,I=R;T<I;T+=3){const C=T,D=T+1,E=T+2;r=vf(this,b,e,n,h,p,m,C,D,E),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const y=Math.max(0,_.start),M=Math.min(f.count,_.start+_.count);for(let S=y,b=M;S<b;S+=3){const w=S,R=S+1,T=S+2;r=vf(this,l,e,n,h,p,m,w,R,T),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}}}function MA(s,e,t,n,r,o,l,c){let f;if(e.side===li?f=n.intersectTriangle(l,o,r,!0,c):f=n.intersectTriangle(r,o,l,e.side===Ws,c),f===null)return null;gf.copy(c),gf.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(gf);return h<t.near||h>t.far?null:{distance:h,point:gf.clone(),object:s}}function vf(s,e,t,n,r,o,l,c,f,h){s.getVertexPosition(c,hf),s.getVertexPosition(f,df),s.getVertexPosition(h,pf);const p=MA(s,e,t,n,hf,df,pf,Hx);if(p){const m=new O;Ri.getBarycoord(Hx,hf,df,pf,m),r&&(p.uv=Ri.getInterpolatedAttribute(r,c,f,h,m,new _e)),o&&(p.uv1=Ri.getInterpolatedAttribute(o,c,f,h,m,new _e)),l&&(p.normal=Ri.getInterpolatedAttribute(l,c,f,h,m,new O),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:f,c:h,normal:new O,materialIndex:0};Ri.getNormal(hf,df,pf,g.normal),p.face=g,p.barycoord=m}return p}const ic=new tn,Gx=new tn,Wx=new tn,wA=new tn,Xx=new _t,_f=new O,Um=new gn,qx=new _t,Fm=new dl;class _S extends Dn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sg,this.bindMatrix=new _t,this.bindMatrixInverse=new _t,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ci),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_f),this.boundingBox.expandByPoint(_f)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_f),this.boundingSphere.expandByPoint(_f)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Um.copy(this.boundingSphere),Um.applyMatrix4(r),e.ray.intersectsSphere(Um)!==!1&&(qx.copy(r).invert(),Fm.copy(e.ray).applyMatrix4(qx),!(this.boundingBox!==null&&Fm.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fm)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tn,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jb?this.bindMatrixInverse.copy(this.bindMatrix).invert():Be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Gx.fromBufferAttribute(r.attributes.skinIndex,e),Wx.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(ic.copy(t),t.set(0,0,0,0)):(ic.set(...t,1),t.set(0,0,0)),ic.applyMatrix4(this.bindMatrix);for(let o=0;o<4;o++){const l=Wx.getComponent(o);if(l!==0){const c=Gx.getComponent(o);Xx.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(wA.copy(ic).applyMatrix4(Xx),l)}}return t.isVector4&&(t.w=ic.w),t.applyMatrix4(this.bindMatrixInverse)}}class c0 extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ar extends hn{constructor(e=null,t=1,n=1,r,o,l,c,f,h=An,p=An,m,g){super(null,l,c,f,h,p,r,o,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yx=new _t,TA=new _t;class fd{constructor(e=[],t=[]){this.uuid=Yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new _t)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new _t;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let o=0,l=e.length;o<l;o++){const c=e[o]?e[o].matrixWorld:TA;Yx.multiplyMatrices(c,t[o]),Yx.toArray(n,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new fd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ar(t,e,e,oi,gi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const o=e.bones[n];let l=t[o];l===void 0&&(Be("Skeleton: No bone found with UUID:",o),l=new c0),this.bones.push(l),this.boneInverses.push(new _t().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,o=t.length;r<o;r++){const l=t[r];e.bones.push(l.uuid);const c=n[r];e.boneInverses.push(c.toArray())}return e}}class al extends ct{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fo=new _t,jx=new _t,xf=[],$x=new ci,EA=new _t,rc=new Dn,sc=new gn;class xS extends Dn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new al(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,EA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fo),$x.copy(e.boundingBox).applyMatrix4(Fo),this.boundingBox.union($x)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fo),sc.copy(e.boundingSphere).applyMatrix4(Fo),this.boundingSphere.union(sc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,o=n.length+1,l=e*o+1;for(let c=0;c<n.length;c++)n[c]=r[l+c]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(rc.geometry=this.geometry,rc.material=this.material,rc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sc.copy(this.boundingSphere),sc.applyMatrix4(n),e.ray.intersectsSphere(sc)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,Fo),jx.multiplyMatrices(n,Fo),rc.matrixWorld=jx,rc.raycast(e,xf);for(let l=0,c=xf.length;l<c;l++){const f=xf[l];f.instanceId=o,f.object=this,t.push(f)}xf.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new al(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ar(new Float32Array(r*this.count),r,this.count,Qh,gi));const o=this.morphTexture.source.data.data;let l=0;for(let h=0;h<n.length;h++)l+=n[h];const c=this.geometry.morphTargetsRelative?1:1-l,f=r*e;return o[f]=c,o.set(n,f+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ba=new gn,AA=new _e(.5,.5),yf=new O;class za{constructor(e=new ls,t=new ls,n=new ls,r=new ls,o=new ls,l=new ls){this.planes=[e,t,n,r,o,l]}set(e,t,n,r,o,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(o),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qi,n=!1){const r=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],h=o[3],p=o[4],m=o[5],g=o[6],_=o[7],y=o[8],M=o[9],S=o[10],b=o[11],w=o[12],R=o[13],T=o[14],I=o[15];if(r[0].setComponents(h-l,_-p,b-y,I-w).normalize(),r[1].setComponents(h+l,_+p,b+y,I+w).normalize(),r[2].setComponents(h+c,_+m,b+M,I+R).normalize(),r[3].setComponents(h-c,_-m,b-M,I-R).normalize(),n)r[4].setComponents(f,g,S,T).normalize(),r[5].setComponents(h-f,_-g,b-S,I-T).normalize();else if(r[4].setComponents(h-f,_-g,b-S,I-T).normalize(),t===qi)r[5].setComponents(h+f,_+g,b+S,I+T).normalize();else if(t===Oa)r[5].setComponents(f,g,S,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ba.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ba.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ba)}intersectsSprite(e){ba.center.set(0,0,0);const t=AA.distanceTo(e.center);return ba.radius=.7071067811865476+t,ba.applyMatrix4(e.matrixWorld),this.intersectsSphere(ba)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(yf.x=r.normal.x>0?e.max.x:e.min.x,yf.y=r.normal.y>0?e.max.y:e.min.y,yf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Zx=new _t;class hd{constructor(){this.coordinateSystem=qi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){const o=t[r];Zx.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),n[r]===void 0&&(n[r]=new za),n[r].setFromProjectionMatrix(Zx,o.coordinateSystem,o.reversedDepth)}return this._count=t.length,this}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new za),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new hd().copy(this)}}function Om(s,e){return s-e}function CA(s,e){return s.z-e.z}function RA(s,e){return e.z-s.z}class PA{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){const o=this.pool,l=this.list;this.index>=o.length&&o.push({start:-1,count:-1,z:-1,index:-1});const c=o[this.index];l.push(c),this.index++,c.start=e,c.count=t,c.z=n,c.index=r}reset(){this.list.length=0,this.index=0}}const Ei=new _t,IA=new be(1,1,1),LA=new za,NA=new hd,bf=new ci,Sa=new gn,ac=new O,Jx=new O,DA=new O,Bm=new PA,ai=new Dn,Sf=[];function UA(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const r=s.count;for(let o=0;o<r;o++)for(let l=0;l<n;l++)e.setComponent(o+t,l,s.getComponent(o,l))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function Ma(s,e){if(s.constructor!==e.constructor){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{const t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}class yS extends Dn{constructor(e,t,n=t*2,r){super(new pt,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new ar(t,e,e,oi,gi);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new ar(t,e,e,qc,or);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new ar(t,e,e,oi,gi);n.colorSpace=Lt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const o in e.attributes){const l=e.getAttribute(o),{array:c,itemSize:f,normalized:h}=l,p=new c.constructor(n*f),m=new ct(p,f,h);t.setAttribute(o,m)}if(e.getIndex()!==null){const o=n>65535?new Uint32Array(r):new Uint16Array(r);t.setIndex(new ct(o,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const r=e.getAttribute(n),o=t.getAttribute(n);if(r.itemSize!==o.itemSize||r.normalized!==o.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;const o=t[n].geometryIndex;this.getMatrixAt(n,Ei),this.getBoundingBoxAt(o,bf).applyMatrix4(Ei),e.union(bf)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;const o=t[n].geometryIndex;this.getMatrixAt(n,Ei),this.getBoundingSphereAt(o,Sa).applyMatrix4(Ei),e.union(Sa)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let r=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Om),r=this._availableInstanceIds.shift(),this._instanceInfo[r]=n):(r=this._instanceInfo.length,this._instanceInfo.push(n));const o=this._matricesTexture;Ei.identity().toArray(o.image.data,r*16),o.needsUpdate=!0;const l=this._colorsTexture;return l&&(IA.toArray(l.image.data,r*4),l.needsUpdate=!0),this._visibilityChanged=!0,r}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const r={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},o=this._geometryInfo;r.vertexStart=this._nextVertexStart,r.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const l=e.getIndex();if(l!==null&&(r.indexStart=this._nextIndexStart,r.reservedIndexCount=n===-1?l.count:n),r.indexStart!==-1&&r.indexStart+r.reservedIndexCount>this._maxIndexCount||r.vertexStart+r.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let f;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Om),f=this._availableGeometryIds.shift(),o[f]=r):(f=this._geometryCount,this._geometryCount++,o.push(r)),this.setGeometryAt(f,e),this._nextIndexStart=r.indexStart+r.reservedIndexCount,this._nextVertexStart=r.vertexStart+r.reservedVertexCount,f}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,r=n.getIndex()!==null,o=n.getIndex(),l=t.getIndex(),c=this._geometryInfo[e];if(r&&l.count>c.reservedIndexCount||t.attributes.position.count>c.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const f=c.vertexStart,h=c.reservedVertexCount;c.vertexCount=t.getAttribute("position").count;for(const p in n.attributes){const m=t.getAttribute(p),g=n.getAttribute(p);UA(m,g,f);const _=m.itemSize;for(let y=m.count,M=h;y<M;y++){const S=f+y;for(let b=0;b<_;b++)g.setComponent(S,b,0)}g.needsUpdate=!0,g.addUpdateRange(f*_,h*_)}if(r){const p=c.indexStart,m=c.reservedIndexCount;c.indexCount=t.getIndex().count;for(let g=0;g<l.count;g++)o.setX(p+g,f+l.getX(g));for(let g=l.count,_=m;g<_;g++)o.setX(p+g,f);o.needsUpdate=!0,o.addUpdateRange(p,c.reservedIndexCount)}return c.start=r?c.indexStart:c.vertexStart,c.count=r?c.indexCount:c.vertexCount,c.boundingBox=null,t.boundingBox!==null&&(c.boundingBox=t.boundingBox.clone()),c.boundingSphere=null,t.boundingSphere!==null&&(c.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let r=0,o=n.length;r<o;r++)n[r].active&&n[r].geometryIndex===e&&this.deleteInstance(r);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,r=n.map((l,c)=>c).sort((l,c)=>n[l].vertexStart-n[c].vertexStart),o=this.geometry;for(let l=0,c=n.length;l<c;l++){const f=r[l],h=n[f];if(h.active!==!1){if(o.index!==null){if(h.indexStart!==t){const{indexStart:p,vertexStart:m,reservedIndexCount:g}=h,_=o.index,y=_.array,M=e-m;for(let S=p;S<p+g;S++)y[S]=y[S]+M;_.array.copyWithin(t,p,p+g),_.addUpdateRange(t,g),_.needsUpdate=!0,h.indexStart=t}t+=h.reservedIndexCount}if(h.vertexStart!==e){const{vertexStart:p,reservedVertexCount:m}=h,g=o.attributes;for(const _ in g){const y=g[_],{array:M,itemSize:S}=y;M.copyWithin(e*S,p*S,(p+m)*S),y.addUpdateRange(e*S,m*S),y.needsUpdate=!0}h.vertexStart=e}e+=h.reservedVertexCount,h.start=o.index?h.indexStart:h.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,r=this._geometryInfo[e];if(r.boundingBox===null){const o=new ci,l=n.index,c=n.attributes.position;for(let f=r.start,h=r.start+r.count;f<h;f++){let p=f;l&&(p=l.getX(p)),o.expandByPoint(ac.fromBufferAttribute(c,p))}r.boundingBox=o}return t.copy(r.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,r=this._geometryInfo[e];if(r.boundingSphere===null){const o=new gn;this.getBoundingBoxAt(e,bf),bf.getCenter(o.center);const l=n.index,c=n.attributes.position;let f=0;for(let h=r.start,p=r.start+r.count;h<p;h++){let m=h;l&&(m=l.getX(m)),ac.fromBufferAttribute(c,m),f=Math.max(f,o.center.distanceToSquared(ac))}o.radius=Math.sqrt(f),r.boundingSphere=o}return t.copy(r.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,r=this._matricesTexture.image.data;return t.toArray(r,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Om);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const r=new Int32Array(e),o=new Int32Array(e);Ma(this._multiDrawCounts,r),Ma(this._multiDrawStarts,o),this._multiDrawCounts=r,this._multiDrawStarts=o,this._maxInstanceCount=e;const l=this._indirectTexture,c=this._matricesTexture,f=this._colorsTexture;l.dispose(),this._initIndirectTexture(),Ma(l.image.data,this._indirectTexture.image.data),c.dispose(),this._initMatricesTexture(),Ma(c.image.data,this._matricesTexture.image.data),f&&(f.dispose(),this._initColorsTexture(),Ma(f.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(c=>c.active);if(Math.max(...n.map(c=>c.vertexStart+c.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(f=>f.indexStart+f.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const o=this.geometry;o.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new pt,this._initializeGeometry(o));const l=this.geometry;o.index&&Ma(o.index.array,l.index.array);for(const c in o.attributes)Ma(o.attributes[c].array,l.attributes[c].array)}raycast(e,t){const n=this._instanceInfo,r=this._geometryInfo,o=this.matrixWorld,l=this.geometry;ai.material=this.material,ai.geometry.index=l.index,ai.geometry.attributes=l.attributes,ai.geometry.boundingBox===null&&(ai.geometry.boundingBox=new ci),ai.geometry.boundingSphere===null&&(ai.geometry.boundingSphere=new gn);for(let c=0,f=n.length;c<f;c++){if(!n[c].visible||!n[c].active)continue;const h=n[c].geometryIndex,p=r[h];ai.geometry.setDrawRange(p.start,p.count),this.getMatrixAt(c,ai.matrixWorld).premultiply(o),this.getBoundingBoxAt(h,ai.geometry.boundingBox),this.getBoundingSphereAt(h,ai.geometry.boundingSphere),ai.raycast(e,Sf);for(let m=0,g=Sf.length;m<g;m++){const _=Sf[m];_.object=this,_.batchId=c,t.push(_)}Sf.length=0}ai.material=null,ai.geometry.index=null,ai.geometry.attributes={},ai.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,r,o){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const l=r.getIndex();let c=l===null?1:l.array.BYTES_PER_ELEMENT,f=1;o.wireframe&&(f=2,c=r.attributes.position.count>65535?4:2);const h=this._instanceInfo,p=this._multiDrawStarts,m=this._multiDrawCounts,g=this._geometryInfo,_=this.perObjectFrustumCulled,y=this._indirectTexture,M=y.image.data,S=n.isArrayCamera?NA:LA;_&&(n.isArrayCamera?S.setFromArrayCamera(n):(Ei.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),S.setFromProjectionMatrix(Ei,n.coordinateSystem,n.reversedDepth)));let b=0;if(this.sortObjects){Ei.copy(this.matrixWorld).invert(),ac.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Ei),Jx.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Ei);for(let T=0,I=h.length;T<I;T++)if(h[T].visible&&h[T].active){const C=h[T].geometryIndex;this.getMatrixAt(T,Ei),this.getBoundingSphereAt(C,Sa).applyMatrix4(Ei);let D=!1;if(_&&(D=!S.intersectsSphere(Sa)),!D){const E=g[C],N=DA.subVectors(Sa.center,ac).dot(Jx);Bm.push(E.start,E.count,N,T)}}const w=Bm.list,R=this.customSort;R===null?w.sort(o.transparent?RA:CA):R.call(this,w,n);for(let T=0,I=w.length;T<I;T++){const C=w[T];p[b]=C.start*c*f,m[b]=C.count*f,M[b]=C.index,b++}Bm.reset()}else for(let w=0,R=h.length;w<R;w++)if(h[w].visible&&h[w].active){const T=h[w].geometryIndex;let I=!1;if(_&&(this.getMatrixAt(w,Ei),this.getBoundingSphereAt(T,Sa).applyMatrix4(Ei),I=!S.intersectsSphere(Sa)),!I){const C=g[T];p[b]=C.start*c*f,m[b]=C.count*f,M[b]=w,b++}}y.needsUpdate=!0,this._multiDrawCount=b,this._multiDrawBytesPerElement=c,this._visibilityChanged=!1}onBeforeShadow(e,t,n,r,o,l){this.onBeforeRender(e,null,r,o,l)}}class xi extends ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oh=new O,Bh=new O,Kx=new _t,oc=new dl,Mf=new gn,zm=new O,Qx=new O;class js extends Bt{constructor(e=new pt,t=new xi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)Oh.fromBufferAttribute(t,r-1),Bh.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Oh.distanceTo(Bh);e.setAttribute("lineDistance",new $e(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mf.copy(n.boundingSphere),Mf.applyMatrix4(r),Mf.radius+=o,e.ray.intersectsSphere(Mf)===!1)return;Kx.copy(r).invert(),oc.copy(e.ray).applyMatrix4(Kx);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,h=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){const _=Math.max(0,l.start),y=Math.min(p.count,l.start+l.count);for(let M=_,S=y-1;M<S;M+=h){const b=p.getX(M),w=p.getX(M+1),R=wf(this,e,oc,f,b,w,M);R&&t.push(R)}if(this.isLineLoop){const M=p.getX(y-1),S=p.getX(_),b=wf(this,e,oc,f,M,S,y-1);b&&t.push(b)}}else{const _=Math.max(0,l.start),y=Math.min(g.count,l.start+l.count);for(let M=_,S=y-1;M<S;M+=h){const b=wf(this,e,oc,f,M,M+1,M);b&&t.push(b)}if(this.isLineLoop){const M=wf(this,e,oc,f,y-1,_,y-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function wf(s,e,t,n,r,o,l){const c=s.geometry.attributes.position;if(Oh.fromBufferAttribute(c,r),Bh.fromBufferAttribute(c,o),t.distanceSqToSegment(Oh,Bh,zm,Qx)>n)return;zm.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(zm);if(!(h<e.near||h>e.far))return{distance:h,point:Qx.clone().applyMatrix4(s.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:s}}const ey=new O,ty=new O;class Xr extends js{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)ey.fromBufferAttribute(t,r),ty.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ey.distanceTo(ty);e.setAttribute("lineDistance",new $e(n,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bS extends js{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class u0 extends ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ny=new _t,Tg=new dl,Tf=new gn,Ef=new O;class SS extends Bt{constructor(e=new pt,t=new u0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tf.copy(n.boundingSphere),Tf.applyMatrix4(r),Tf.radius+=o,e.ray.intersectsSphere(Tf)===!1)return;ny.copy(r).invert(),Tg.copy(e.ray).applyMatrix4(ny);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,h=n.index,m=n.attributes.position;if(h!==null){const g=Math.max(0,l.start),_=Math.min(h.count,l.start+l.count);for(let y=g,M=_;y<M;y++){const S=h.getX(y);Ef.fromBufferAttribute(m,S),iy(Ef,S,f,r,e,t,this)}}else{const g=Math.max(0,l.start),_=Math.min(m.count,l.start+l.count);for(let y=g,M=_;y<M;y++)Ef.fromBufferAttribute(m,y),iy(Ef,y,f,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function iy(s,e,t,n,r,o,l){const c=Tg.distanceSqToPoint(s);if(c<t){const f=new O;Tg.closestPointToPoint(s,f),f.applyMatrix4(n);const h=r.ray.origin.distanceTo(f);if(h<r.near||h>r.far)return;o.push({distance:h,distanceToRay:Math.sqrt(c),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class MS extends hn{constructor(e,t,n,r,o=fn,l=fn,c,f,h){super(e,t,n,r,o,l,c,f,h),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const p=this;function m(){p.needsUpdate=!0,p._requestVideoFrameCallbackId=e.requestVideoFrameCallback(m)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(m))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class FA extends MS{constructor(e,t,n,r,o,l,c,f){super({},e,t,n,r,o,l,c,f),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class OA extends hn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=An,this.minFilter=An,this.generateMipmaps=!1,this.needsUpdate=!0}}class dd extends hn{constructor(e,t,n,r,o,l,c,f,h,p,m,g){super(null,l,c,f,h,p,r,o,m,g),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class BA extends dd{constructor(e,t,n,r,o,l){super(e,t,n,o,l),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=Pi,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zA extends dd{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Gr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Yc extends hn{constructor(e=[],t=Gr,n,r,o,l,c,f,h,p){super(e,t,n,r,o,l,c,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kA extends hn{constructor(e,t,n,r,o,l,c,f,h){super(e,t,n,r,o,l,c,f,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class VA extends hn{constructor(e,t,n,r,o,l,c,f,h){super(e,t,n,r,o,l,c,f,h),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const p=e?e.parentNode:null;p!==null&&"requestPaint"in p&&(p.onpaint=()=>{this.needsUpdate=!0},p.requestPaint())}dispose(){const e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}}class ol extends hn{constructor(e,t,n=or,r,o,l,c=An,f=An,h,p=Wr,m=1){if(p!==Wr&&p!==Hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:m};super(g,r,o,l,c,f,p,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ds(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class wS extends ol{constructor(e,t=or,n=Gr,r,o,l=An,c=An,f,h=Wr){const p={width:e,height:e,depth:1},m=[p,p,p,p,p,p];super(e,e,t,n,r,o,l,c,f,h),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class f0 extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Va extends pt{constructor(e=1,t=1,n=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:l};const c=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const f=[],h=[],p=[],m=[];let g=0,_=0;y("z","y","x",-1,-1,n,t,e,l,o,0),y("z","y","x",1,-1,n,t,-e,l,o,1),y("x","z","y",1,1,e,n,t,r,l,2),y("x","z","y",1,-1,e,n,-t,r,l,3),y("x","y","z",1,-1,e,t,n,r,o,4),y("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(f),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(p,3)),this.setAttribute("uv",new $e(m,2));function y(M,S,b,w,R,T,I,C,D,E,N){const U=T/D,B=I/E,G=T/2,Y=I/2,k=C/2,j=D+1,H=E+1;let q=0,ne=0;const K=new O;for(let oe=0;oe<H;oe++){const he=oe*B-Y;for(let qe=0;qe<j;qe++){const Ie=qe*U-G;K[M]=Ie*w,K[S]=he*R,K[b]=k,h.push(K.x,K.y,K.z),K[M]=0,K[S]=0,K[b]=C>0?1:-1,p.push(K.x,K.y,K.z),m.push(qe/D),m.push(1-oe/E),q+=1}}for(let oe=0;oe<E;oe++)for(let he=0;he<D;he++){const qe=g+he+j*oe,Ie=g+he+j*(oe+1),et=g+(he+1)+j*(oe+1),rt=g+(he+1)+j*oe;f.push(qe,Ie,rt),f.push(Ie,et,rt),ne+=6}c.addGroup(_,ne,N),_+=ne,g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pd extends pt{constructor(e=1,t=1,n=4,r=8,o=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:o},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),o=Math.max(1,Math.floor(o));const l=[],c=[],f=[],h=[],p=t/2,m=Math.PI/2*e,g=t,_=2*m+g,y=n*2+o,M=r+1,S=new O,b=new O;for(let w=0;w<=y;w++){let R=0,T=0,I=0,C=0;if(w<=n){const N=w/n,U=N*Math.PI/2;T=-p-e*Math.cos(U),I=e*Math.sin(U),C=-e*Math.cos(U),R=N*m}else if(w<=n+o){const N=(w-n)/o;T=-p+N*t,I=e,C=0,R=m+N*g}else{const N=(w-n-o)/n,U=N*Math.PI/2;T=p+e*Math.sin(U),I=e*Math.cos(U),C=e*Math.sin(U),R=m+g+N*m}const D=Math.max(0,Math.min(1,R/_));let E=0;w===0?E=.5/r:w===y&&(E=-.5/r);for(let N=0;N<=r;N++){const U=N/r,B=U*Math.PI*2,G=Math.sin(B),Y=Math.cos(B);b.x=-I*Y,b.y=T,b.z=I*G,c.push(b.x,b.y,b.z),S.set(-I*Y,C,I*G),S.normalize(),f.push(S.x,S.y,S.z),h.push(U+E,D)}if(w>0){const N=(w-1)*M;for(let U=0;U<r;U++){const B=N+U,G=N+U+1,Y=w*M+U,k=w*M+U+1;l.push(B,G,Y),l.push(G,k,Y)}}}this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pd(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class md extends pt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const o=[],l=[],c=[],f=[],h=new O,p=new _e;l.push(0,0,0),c.push(0,0,1),f.push(.5,.5);for(let m=0,g=3;m<=t;m++,g+=3){const _=n+m/t*r;h.x=e*Math.cos(_),h.y=e*Math.sin(_),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(l[g]/e+1)/2,p.y=(l[g+1]/e+1)/2,f.push(p.x,p.y)}for(let m=1;m<=t;m++)o.push(m,m+1,0);this.setIndex(o),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new md(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class jc extends pt{constructor(e=1,t=1,n=1,r=32,o=1,l=!1,c=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:c,thetaLength:f};const h=this;r=Math.floor(r),o=Math.floor(o);const p=[],m=[],g=[],_=[];let y=0;const M=[],S=n/2;let b=0;w(),l===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(p),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(g,3)),this.setAttribute("uv",new $e(_,2));function w(){const T=new O,I=new O;let C=0;const D=(t-e)/n;for(let E=0;E<=o;E++){const N=[],U=E/o,B=U*(t-e)+e;for(let G=0;G<=r;G++){const Y=G/r,k=Y*f+c,j=Math.sin(k),H=Math.cos(k);I.x=B*j,I.y=-U*n+S,I.z=B*H,m.push(I.x,I.y,I.z),T.set(j,D,H).normalize(),g.push(T.x,T.y,T.z),_.push(Y,1-U),N.push(y++)}M.push(N)}for(let E=0;E<r;E++)for(let N=0;N<o;N++){const U=M[N][E],B=M[N+1][E],G=M[N+1][E+1],Y=M[N][E+1];(e>0||N!==0)&&(p.push(U,B,Y),C+=3),(t>0||N!==o-1)&&(p.push(B,G,Y),C+=3)}h.addGroup(b,C,0),b+=C}function R(T){const I=y,C=new _e,D=new O;let E=0;const N=T===!0?e:t,U=T===!0?1:-1;for(let G=1;G<=r;G++)m.push(0,S*U,0),g.push(0,U,0),_.push(.5,.5),y++;const B=y;for(let G=0;G<=r;G++){const k=G/r*f+c,j=Math.cos(k),H=Math.sin(k);D.x=N*H,D.y=S*U,D.z=N*j,m.push(D.x,D.y,D.z),g.push(0,U,0),C.x=j*.5+.5,C.y=H*.5*U+.5,_.push(C.x,C.y),y++}for(let G=0;G<r;G++){const Y=I+G,k=B+G;T===!0?p.push(k,k+1,Y):p.push(k+1,k,Y),E+=3}h.addGroup(b,E,T===!0?1:2),b+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $c extends jc{constructor(e=1,t=1,n=32,r=1,o=!1,l=0,c=Math.PI*2){super(0,e,t,n,r,o,l,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:c}}static fromJSON(e){return new $c(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zs extends pt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const o=[],l=[];c(r),h(n),p(),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(o.slice(),3)),this.setAttribute("uv",new $e(l,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function c(w){const R=new O,T=new O,I=new O;for(let C=0;C<t.length;C+=3)_(t[C+0],R),_(t[C+1],T),_(t[C+2],I),f(R,T,I,w)}function f(w,R,T,I){const C=I+1,D=[];for(let E=0;E<=C;E++){D[E]=[];const N=w.clone().lerp(T,E/C),U=R.clone().lerp(T,E/C),B=C-E;for(let G=0;G<=B;G++)G===0&&E===C?D[E][G]=N:D[E][G]=N.clone().lerp(U,G/B)}for(let E=0;E<C;E++)for(let N=0;N<2*(C-E)-1;N++){const U=Math.floor(N/2);N%2===0?(g(D[E][U+1]),g(D[E+1][U]),g(D[E][U])):(g(D[E][U+1]),g(D[E+1][U+1]),g(D[E+1][U]))}}function h(w){const R=new O;for(let T=0;T<o.length;T+=3)R.x=o[T+0],R.y=o[T+1],R.z=o[T+2],R.normalize().multiplyScalar(w),o[T+0]=R.x,o[T+1]=R.y,o[T+2]=R.z}function p(){const w=new O;for(let R=0;R<o.length;R+=3){w.x=o[R+0],w.y=o[R+1],w.z=o[R+2];const T=S(w)/2/Math.PI+.5,I=b(w)/Math.PI+.5;l.push(T,1-I)}y(),m()}function m(){for(let w=0;w<l.length;w+=6){const R=l[w+0],T=l[w+2],I=l[w+4],C=Math.max(R,T,I),D=Math.min(R,T,I);C>.9&&D<.1&&(R<.2&&(l[w+0]+=1),T<.2&&(l[w+2]+=1),I<.2&&(l[w+4]+=1))}}function g(w){o.push(w.x,w.y,w.z)}function _(w,R){const T=w*3;R.x=e[T+0],R.y=e[T+1],R.z=e[T+2]}function y(){const w=new O,R=new O,T=new O,I=new O,C=new _e,D=new _e,E=new _e;for(let N=0,U=0;N<o.length;N+=9,U+=6){w.set(o[N+0],o[N+1],o[N+2]),R.set(o[N+3],o[N+4],o[N+5]),T.set(o[N+6],o[N+7],o[N+8]),C.set(l[U+0],l[U+1]),D.set(l[U+2],l[U+3]),E.set(l[U+4],l[U+5]),I.copy(w).add(R).add(T).divideScalar(3);const B=S(I);M(C,U+0,w,B),M(D,U+2,R,B),M(E,U+4,T,B)}}function M(w,R,T,I){I<0&&w.x===1&&(l[R]=w.x-1),T.x===0&&T.z===0&&(l[R]=I/2/Math.PI+.5)}function S(w){return Math.atan2(w.z,-w.x)}function b(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.vertices,e.indices,e.radius,e.detail)}}class gd extends Zs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],l=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,l,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gd(e.radius,e.detail)}}const Af=new O,Cf=new O,km=new O,Rf=new Ri;class TS extends pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),o=Math.cos(Fa*t),l=e.getIndex(),c=e.getAttribute("position"),f=l?l.count:c.count,h=[0,0,0],p=["a","b","c"],m=new Array(3),g={},_=[];for(let y=0;y<f;y+=3){l?(h[0]=l.getX(y),h[1]=l.getX(y+1),h[2]=l.getX(y+2)):(h[0]=y,h[1]=y+1,h[2]=y+2);const{a:M,b:S,c:b}=Rf;if(M.fromBufferAttribute(c,h[0]),S.fromBufferAttribute(c,h[1]),b.fromBufferAttribute(c,h[2]),Rf.getNormal(km),m[0]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,m[1]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,m[2]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let w=0;w<3;w++){const R=(w+1)%3,T=m[w],I=m[R],C=Rf[p[w]],D=Rf[p[R]],E=`${T}_${I}`,N=`${I}_${T}`;N in g&&g[N]?(km.dot(g[N].normal)<=o&&(_.push(C.x,C.y,C.z),_.push(D.x,D.y,D.z)),g[N]=null):E in g||(g[E]={index0:h[w],index1:h[R],normal:km.clone()})}}for(const y in g)if(g[y]){const{index0:M,index1:S}=g[y];Af.fromBufferAttribute(c,M),Cf.fromBufferAttribute(c,S),_.push(Af.x,Af.y,Af.z),_.push(Cf.x,Cf.y,Cf.z)}this.setAttribute("position",new $e(_,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class wr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),o=0;t.push(0);for(let l=1;l<=e;l++)n=this.getPoint(l/e),o+=n.distanceTo(r),t.push(o),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const o=n.length;let l;t?l=t:l=e*n[o-1];let c=0,f=o-1,h;for(;c<=f;)if(r=Math.floor(c+(f-c)/2),h=n[r]-l,h<0)c=r+1;else if(h>0)f=r-1;else{f=r;break}if(r=f,n[r]===l)return r/(o-1);const p=n[r],g=n[r+1]-p,_=(l-p)/g;return(r+_)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const l=this.getPoint(r),c=this.getPoint(o),f=t||(l.isVector2?new _e:new O);return f.copy(c).sub(l).normalize(),f}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new O,r=[],o=[],l=[],c=new O,f=new _t;for(let _=0;_<=e;_++){const y=_/e;r[_]=this.getTangentAt(y,new O)}o[0]=new O,l[0]=new O;let h=Number.MAX_VALUE;const p=Math.abs(r[0].x),m=Math.abs(r[0].y),g=Math.abs(r[0].z);p<=h&&(h=p,n.set(1,0,0)),m<=h&&(h=m,n.set(0,1,0)),g<=h&&n.set(0,0,1),c.crossVectors(r[0],n).normalize(),o[0].crossVectors(r[0],c),l[0].crossVectors(r[0],o[0]);for(let _=1;_<=e;_++){if(o[_]=o[_-1].clone(),l[_]=l[_-1].clone(),c.crossVectors(r[_-1],r[_]),c.length()>Number.EPSILON){c.normalize();const y=Math.acos(gt(r[_-1].dot(r[_]),-1,1));o[_].applyMatrix4(f.makeRotationAxis(c,y))}l[_].crossVectors(r[_],o[_])}if(t===!0){let _=Math.acos(gt(o[0].dot(o[e]),-1,1));_/=e,r[0].dot(c.crossVectors(o[0],o[e]))>0&&(_=-_);for(let y=1;y<=e;y++)o[y].applyMatrix4(f.makeRotationAxis(r[y],_*y)),l[y].crossVectors(r[y],o[y])}return{tangents:r,normals:o,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class vd extends wr{constructor(e=0,t=0,n=1,r=1,o=0,l=Math.PI*2,c=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=l,this.aClockwise=c,this.aRotation=f}getPoint(e,t=new _e){const n=t,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const l=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(l?o=0:o=r),this.aClockwise===!0&&!l&&(o===r?o=-r:o=o-r);const c=this.aStartAngle+e*o;let f=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const p=Math.cos(this.aRotation),m=Math.sin(this.aRotation),g=f-this.aX,_=h-this.aY;f=g*p-_*m+this.aX,h=g*m+_*p+this.aY}return n.set(f,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ES extends vd{constructor(e,t,n,r,o,l){super(e,t,n,n,r,o,l),this.isArcCurve=!0,this.type="ArcCurve"}}function h0(){let s=0,e=0,t=0,n=0;function r(o,l,c,f){s=o,e=c,t=-3*o+3*l-2*c-f,n=2*o-2*l+c+f}return{initCatmullRom:function(o,l,c,f,h){r(l,c,h*(c-o),h*(f-l))},initNonuniformCatmullRom:function(o,l,c,f,h,p,m){let g=(l-o)/h-(c-o)/(h+p)+(c-l)/p,_=(c-l)/p-(f-l)/(p+m)+(f-c)/m;g*=p,_*=p,r(l,c,g,_)},calc:function(o){const l=o*o,c=l*o;return s+e*o+t*l+n*c}}}const ry=new O,sy=new O,Vm=new h0,Hm=new h0,Gm=new h0;class AS extends wr{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new O){const n=t,r=this.points,o=r.length,l=(o-(this.closed?0:1))*e;let c=Math.floor(l),f=l-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/o)+1)*o:f===0&&c===o-1&&(c=o-2,f=1);let h,p;this.closed||c>0?h=r[(c-1)%o]:(sy.subVectors(r[0],r[1]).add(r[0]),h=sy);const m=r[c%o],g=r[(c+1)%o];if(this.closed||c+2<o?p=r[(c+2)%o]:(ry.subVectors(r[o-1],r[o-2]).add(r[o-1]),p=ry),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let y=Math.pow(h.distanceToSquared(m),_),M=Math.pow(m.distanceToSquared(g),_),S=Math.pow(g.distanceToSquared(p),_);M<1e-4&&(M=1),y<1e-4&&(y=M),S<1e-4&&(S=M),Vm.initNonuniformCatmullRom(h.x,m.x,g.x,p.x,y,M,S),Hm.initNonuniformCatmullRom(h.y,m.y,g.y,p.y,y,M,S),Gm.initNonuniformCatmullRom(h.z,m.z,g.z,p.z,y,M,S)}else this.curveType==="catmullrom"&&(Vm.initCatmullRom(h.x,m.x,g.x,p.x,this.tension),Hm.initCatmullRom(h.y,m.y,g.y,p.y,this.tension),Gm.initCatmullRom(h.z,m.z,g.z,p.z,this.tension));return n.set(Vm.calc(f),Hm.calc(f),Gm.calc(f)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ay(s,e,t,n,r){const o=(n-e)*.5,l=(r-t)*.5,c=s*s,f=s*c;return(2*t-2*n+o+l)*f+(-3*t+3*n-2*o-l)*c+o*s+t}function HA(s,e){const t=1-s;return t*t*e}function GA(s,e){return 2*(1-s)*s*e}function WA(s,e){return s*s*e}function Mc(s,e,t,n){return HA(s,e)+GA(s,t)+WA(s,n)}function XA(s,e){const t=1-s;return t*t*t*e}function qA(s,e){const t=1-s;return 3*t*t*s*e}function YA(s,e){return 3*(1-s)*s*s*e}function jA(s,e){return s*s*s*e}function wc(s,e,t,n,r){return XA(s,e)+qA(s,t)+YA(s,n)+jA(s,r)}class d0 extends wr{constructor(e=new _e,t=new _e,n=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new _e){const n=t,r=this.v0,o=this.v1,l=this.v2,c=this.v3;return n.set(wc(e,r.x,o.x,l.x,c.x),wc(e,r.y,o.y,l.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class CS extends wr{constructor(e=new O,t=new O,n=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new O){const n=t,r=this.v0,o=this.v1,l=this.v2,c=this.v3;return n.set(wc(e,r.x,o.x,l.x,c.x),wc(e,r.y,o.y,l.y,c.y),wc(e,r.z,o.z,l.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class p0 extends wr{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class RS extends wr{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class m0 extends wr{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){const n=t,r=this.v0,o=this.v1,l=this.v2;return n.set(Mc(e,r.x,o.x,l.x),Mc(e,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class g0 extends wr{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){const n=t,r=this.v0,o=this.v1,l=this.v2;return n.set(Mc(e,r.x,o.x,l.x),Mc(e,r.y,o.y,l.y),Mc(e,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class v0 extends wr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const n=t,r=this.points,o=(r.length-1)*e,l=Math.floor(o),c=o-l,f=r[l===0?l:l-1],h=r[l],p=r[l>r.length-2?r.length-1:l+1],m=r[l>r.length-3?r.length-1:l+2];return n.set(ay(c,f.x,h.x,p.x,m.x),ay(c,f.y,h.y,p.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new _e().fromArray(r))}return this}}var zh=Object.freeze({__proto__:null,ArcCurve:ES,CatmullRomCurve3:AS,CubicBezierCurve:d0,CubicBezierCurve3:CS,EllipseCurve:vd,LineCurve:p0,LineCurve3:RS,QuadraticBezierCurve:m0,QuadraticBezierCurve3:g0,SplineCurve:v0});class PS extends wr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let o=0;for(;o<r.length;){if(r[o]>=n){const l=r[o]-n,c=this.curves[o],f=c.getLength(),h=f===0?0:1-l/f;return c.getPointAt(h,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,o=this.curves;r<o.length;r++){const l=o[r],c=l.isEllipseCurve?e*2:l.isLineCurve||l.isLineCurve3?1:l.isSplineCurve?e*l.points.length:e,f=l.getPoints(c);for(let h=0;h<f.length;h++){const p=f[h];n&&n.equals(p)||(t.push(p),n=p)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new zh[r.type]().fromJSON(r))}return this}}class Fc extends PS{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new p0(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const o=new m0(this.currentPoint.clone(),new _e(e,t),new _e(n,r));return this.curves.push(o),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,o,l){const c=new d0(this.currentPoint.clone(),new _e(e,t),new _e(n,r),new _e(o,l));return this.curves.push(c),this.currentPoint.set(o,l),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new v0(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,o,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+c,t+f,n,r,o,l),this}absarc(e,t,n,r,o,l){return this.absellipse(e,t,n,n,r,o,l),this}ellipse(e,t,n,r,o,l,c,f){const h=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(e+h,t+p,n,r,o,l,c,f),this}absellipse(e,t,n,r,o,l,c,f){const h=new vd(e,t,n,r,o,l,c,f);if(this.curves.length>0){const m=h.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(h);const p=h.getPoint(1);return this.currentPoint.copy(p),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Zc extends Fc{constructor(e){super(e),this.uuid=Yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Fc().fromJSON(r))}return this}}function $A(s,e,t=2){const n=e&&e.length,r=n?e[0]*t:s.length;let o=IS(s,0,r,t,!0);const l=[];if(!o||o.next===o.prev)return l;let c,f,h;if(n&&(o=eC(s,e,o,t)),s.length>80*t){c=s[0],f=s[1];let p=c,m=f;for(let g=t;g<r;g+=t){const _=s[g],y=s[g+1];_<c&&(c=_),y<f&&(f=y),_>p&&(p=_),y>m&&(m=y)}h=Math.max(p-c,m-f),h=h!==0?32767/h:0}return Oc(o,l,t,c,f,h,0),l}function IS(s,e,t,n,r){let o;if(r===fC(s,e,t,n)>0)for(let l=e;l<t;l+=n)o=oy(l/n|0,s[l],s[l+1],o);else for(let l=t-n;l>=e;l-=n)o=oy(l/n|0,s[l],s[l+1],o);return o&&ll(o,o.next)&&(zc(o),o=o.next),o}function ka(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ll(t,t.next)||Sn(t.prev,t,t.next)===0)){if(zc(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Oc(s,e,t,n,r,o,l){if(!s)return;!l&&o&&sC(s,n,r,o);let c=s;for(;s.prev!==s.next;){const f=s.prev,h=s.next;if(o?JA(s,n,r,o):ZA(s)){e.push(f.i,s.i,h.i),zc(s),s=h.next,c=h.next;continue}if(s=h,s===c){l?l===1?(s=KA(ka(s),e),Oc(s,e,t,n,r,o,2)):l===2&&QA(s,e,t,n,r,o):Oc(ka(s),e,t,n,r,o,1);break}}}function ZA(s){const e=s.prev,t=s,n=s.next;if(Sn(e,t,n)>=0)return!1;const r=e.x,o=t.x,l=n.x,c=e.y,f=t.y,h=n.y,p=Math.min(r,o,l),m=Math.min(c,f,h),g=Math.max(r,o,l),_=Math.max(c,f,h);let y=n.next;for(;y!==e;){if(y.x>=p&&y.x<=g&&y.y>=m&&y.y<=_&&fc(r,c,o,f,l,h,y.x,y.y)&&Sn(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function JA(s,e,t,n){const r=s.prev,o=s,l=s.next;if(Sn(r,o,l)>=0)return!1;const c=r.x,f=o.x,h=l.x,p=r.y,m=o.y,g=l.y,_=Math.min(c,f,h),y=Math.min(p,m,g),M=Math.max(c,f,h),S=Math.max(p,m,g),b=Eg(_,y,e,t,n),w=Eg(M,S,e,t,n);let R=s.prevZ,T=s.nextZ;for(;R&&R.z>=b&&T&&T.z<=w;){if(R.x>=_&&R.x<=M&&R.y>=y&&R.y<=S&&R!==r&&R!==l&&fc(c,p,f,m,h,g,R.x,R.y)&&Sn(R.prev,R,R.next)>=0||(R=R.prevZ,T.x>=_&&T.x<=M&&T.y>=y&&T.y<=S&&T!==r&&T!==l&&fc(c,p,f,m,h,g,T.x,T.y)&&Sn(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;R&&R.z>=b;){if(R.x>=_&&R.x<=M&&R.y>=y&&R.y<=S&&R!==r&&R!==l&&fc(c,p,f,m,h,g,R.x,R.y)&&Sn(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;T&&T.z<=w;){if(T.x>=_&&T.x<=M&&T.y>=y&&T.y<=S&&T!==r&&T!==l&&fc(c,p,f,m,h,g,T.x,T.y)&&Sn(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function KA(s,e){let t=s;do{const n=t.prev,r=t.next.next;!ll(n,r)&&NS(n,t,t.next,r)&&Bc(n,r)&&Bc(r,n)&&(e.push(n.i,t.i,r.i),zc(t),zc(t.next),t=s=r),t=t.next}while(t!==s);return ka(t)}function QA(s,e,t,n,r,o){let l=s;do{let c=l.next.next;for(;c!==l.prev;){if(l.i!==c.i&&lC(l,c)){let f=DS(l,c);l=ka(l,l.next),f=ka(f,f.next),Oc(l,e,t,n,r,o,0),Oc(f,e,t,n,r,o,0);return}c=c.next}l=l.next}while(l!==s)}function eC(s,e,t,n){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o]*n,f=o<l-1?e[o+1]*n:s.length,h=IS(s,c,f,n,!1);h===h.next&&(h.steiner=!0),r.push(oC(h))}r.sort(tC);for(let o=0;o<r.length;o++)t=nC(r[o],t);return t}function tC(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function nC(s,e){const t=iC(s,e);if(!t)return e;const n=DS(t,s);return ka(n,n.next),ka(t,t.next)}function iC(s,e){let t=e;const n=s.x,r=s.y;let o=-1/0,l;if(ll(s,t))return t;do{if(ll(s,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const m=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=n&&m>o&&(o=m,l=t.x<t.next.x?t:t.next,m===n))return l}t=t.next}while(t!==e);if(!l)return null;const c=l,f=l.x,h=l.y;let p=1/0;t=l;do{if(n>=t.x&&t.x>=f&&n!==t.x&&LS(r<h?n:o,r,f,h,r<h?o:n,r,t.x,t.y)){const m=Math.abs(r-t.y)/(n-t.x);Bc(t,s)&&(m<p||m===p&&(t.x>l.x||t.x===l.x&&rC(l,t)))&&(l=t,p=m)}t=t.next}while(t!==c);return l}function rC(s,e){return Sn(s.prev,s,e.prev)<0&&Sn(e.next,s,s.next)<0}function sC(s,e,t,n){let r=s;do r.z===0&&(r.z=Eg(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==s);r.prevZ.nextZ=null,r.prevZ=null,aC(r)}function aC(s){let e,t=1;do{let n=s,r;s=null;let o=null;for(e=0;n;){e++;let l=n,c=0;for(let h=0;h<t&&(c++,l=l.nextZ,!!l);h++);let f=t;for(;c>0||f>0&&l;)c!==0&&(f===0||!l||n.z<=l.z)?(r=n,n=n.nextZ,c--):(r=l,l=l.nextZ,f--),o?o.nextZ=r:s=r,r.prevZ=o,o=r;n=l}o.nextZ=null,t*=2}while(e>1);return s}function Eg(s,e,t,n,r){return s=(s-t)*r|0,e=(e-n)*r|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function oC(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function LS(s,e,t,n,r,o,l,c){return(r-l)*(e-c)>=(s-l)*(o-c)&&(s-l)*(n-c)>=(t-l)*(e-c)&&(t-l)*(o-c)>=(r-l)*(n-c)}function fc(s,e,t,n,r,o,l,c){return!(s===l&&e===c)&&LS(s,e,t,n,r,o,l,c)}function lC(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!cC(s,e)&&(Bc(s,e)&&Bc(e,s)&&uC(s,e)&&(Sn(s.prev,s,e.prev)||Sn(s,e.prev,e))||ll(s,e)&&Sn(s.prev,s,s.next)>0&&Sn(e.prev,e,e.next)>0)}function Sn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ll(s,e){return s.x===e.x&&s.y===e.y}function NS(s,e,t,n){const r=If(Sn(s,e,t)),o=If(Sn(s,e,n)),l=If(Sn(t,n,s)),c=If(Sn(t,n,e));return!!(r!==o&&l!==c||r===0&&Pf(s,t,e)||o===0&&Pf(s,n,e)||l===0&&Pf(t,s,n)||c===0&&Pf(t,e,n))}function Pf(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function If(s){return s>0?1:s<0?-1:0}function cC(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&NS(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Bc(s,e){return Sn(s.prev,s,s.next)<0?Sn(s,e,s.next)>=0&&Sn(s,s.prev,e)>=0:Sn(s,e,s.prev)<0||Sn(s,s.next,e)<0}function uC(s,e){let t=s,n=!1;const r=(s.x+e.x)/2,o=(s.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function DS(s,e){const t=Ag(s.i,s.x,s.y),n=Ag(e.i,e.x,e.y),r=s.next,o=e.prev;return s.next=e,e.prev=s,t.next=r,r.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function oy(s,e,t,n){const r=Ag(s,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function zc(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ag(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fC(s,e,t,n){let r=0;for(let o=e,l=t-n;o<t;o+=n)r+=(s[l]-s[o])*(s[o+1]+s[l+1]),l=o;return r}class hC{static triangulate(e,t,n=2){return $A(e,t,n)}}class yr{static area(e){const t=e.length;let n=0;for(let r=t-1,o=0;o<t;r=o++)n+=e[r].x*e[o].y-e[o].x*e[r].y;return n*.5}static isClockWise(e){return yr.area(e)<0}static triangulateShape(e,t){const n=[],r=[],o=[];ly(e),cy(n,e);let l=e.length;t.forEach(ly);for(let f=0;f<t.length;f++)r.push(l),l+=t[f].length,cy(n,t[f]);const c=hC.triangulate(n,r);for(let f=0;f<c.length;f+=3)o.push(c.slice(f,f+3));return o}}function ly(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function cy(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class _d extends pt{constructor(e=new Zc([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],o=[];for(let c=0,f=e.length;c<f;c++){const h=e[c];l(h)}this.setAttribute("position",new $e(r,3)),this.setAttribute("uv",new $e(o,2)),this.computeVertexNormals();function l(c){const f=[],h=t.curveSegments!==void 0?t.curveSegments:12,p=t.steps!==void 0?t.steps:1,m=t.depth!==void 0?t.depth:1;let g=t.bevelEnabled!==void 0?t.bevelEnabled:!0,_=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:_-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const b=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:dC;let R,T=!1,I,C,D,E;if(b){R=b.getSpacedPoints(p),T=!0,g=!1;const me=b.isCatmullRomCurve3?b.closed:!1;I=b.computeFrenetFrames(p,me),C=new O,D=new O,E=new O}g||(S=0,_=0,y=0,M=0);const N=c.extractPoints(h);let U=N.shape;const B=N.holes;if(!yr.isClockWise(U)){U=U.reverse();for(let me=0,ye=B.length;me<ye;me++){const Se=B[me];yr.isClockWise(Se)&&(B[me]=Se.reverse())}}function Y(me){const Se=10000000000000001e-36;let Me=me[0];for(let Re=1;Re<=me.length;Re++){const lt=Re%me.length,Ke=me[lt],ot=Ke.x-Me.x,mt=Ke.y-Me.y,V=ot*ot+mt*mt,Pt=Math.max(Math.abs(Ke.x),Math.abs(Ke.y),Math.abs(Me.x),Math.abs(Me.y)),Mt=Se*Pt*Pt;if(V<=Mt){me.splice(lt,1),Re--;continue}Me=Ke}}Y(U),B.forEach(Y);const k=B.length,j=U;for(let me=0;me<k;me++){const ye=B[me];U=U.concat(ye)}function H(me,ye,Se){return ye||st("ExtrudeGeometry: vec does not exist"),me.clone().addScaledVector(ye,Se)}const q=U.length;function ne(me,ye,Se){let Me,Re,lt;const Ke=me.x-ye.x,ot=me.y-ye.y,mt=Se.x-me.x,V=Se.y-me.y,Pt=Ke*Ke+ot*ot,Mt=Ke*V-ot*mt;if(Math.abs(Mt)>Number.EPSILON){const F=Math.sqrt(Pt),A=Math.sqrt(mt*mt+V*V),$=ye.x-ot/F,ee=ye.y+Ke/F,ce=Se.x-V/A,Te=Se.y+mt/A,Pe=((ce-$)*V-(Te-ee)*mt)/(Ke*V-ot*mt);Me=$+Ke*Pe-me.x,Re=ee+ot*Pe-me.y;const ue=Me*Me+Re*Re;if(ue<=2)return new _e(Me,Re);lt=Math.sqrt(ue/2)}else{let F=!1;Ke>Number.EPSILON?mt>Number.EPSILON&&(F=!0):Ke<-Number.EPSILON?mt<-Number.EPSILON&&(F=!0):Math.sign(ot)===Math.sign(V)&&(F=!0),F?(Me=-ot,Re=Ke,lt=Math.sqrt(Pt)):(Me=Ke,Re=ot,lt=Math.sqrt(Pt/2))}return new _e(Me/lt,Re/lt)}const K=[];for(let me=0,ye=j.length,Se=ye-1,Me=me+1;me<ye;me++,Se++,Me++)Se===ye&&(Se=0),Me===ye&&(Me=0),K[me]=ne(j[me],j[Se],j[Me]);const oe=[];let he,qe=K.concat();for(let me=0,ye=k;me<ye;me++){const Se=B[me];he=[];for(let Me=0,Re=Se.length,lt=Re-1,Ke=Me+1;Me<Re;Me++,lt++,Ke++)lt===Re&&(lt=0),Ke===Re&&(Ke=0),he[Me]=ne(Se[Me],Se[lt],Se[Ke]);oe.push(he),qe=qe.concat(he)}let Ie;if(S===0)Ie=yr.triangulateShape(j,B);else{const me=[],ye=[];for(let Se=0;Se<S;Se++){const Me=Se/S,Re=_*Math.cos(Me*Math.PI/2),lt=y*Math.sin(Me*Math.PI/2)+M;for(let Ke=0,ot=j.length;Ke<ot;Ke++){const mt=H(j[Ke],K[Ke],lt);Ne(mt.x,mt.y,-Re),Me===0&&me.push(mt)}for(let Ke=0,ot=k;Ke<ot;Ke++){const mt=B[Ke];he=oe[Ke];const V=[];for(let Pt=0,Mt=mt.length;Pt<Mt;Pt++){const F=H(mt[Pt],he[Pt],lt);Ne(F.x,F.y,-Re),Me===0&&V.push(F)}Me===0&&ye.push(V)}}Ie=yr.triangulateShape(me,ye)}const et=Ie.length,rt=y+M;for(let me=0;me<q;me++){const ye=g?H(U[me],qe[me],rt):U[me];T?(D.copy(I.normals[0]).multiplyScalar(ye.x),C.copy(I.binormals[0]).multiplyScalar(ye.y),E.copy(R[0]).add(D).add(C),Ne(E.x,E.y,E.z)):Ne(ye.x,ye.y,0)}for(let me=1;me<=p;me++)for(let ye=0;ye<q;ye++){const Se=g?H(U[ye],qe[ye],rt):U[ye];T?(D.copy(I.normals[me]).multiplyScalar(Se.x),C.copy(I.binormals[me]).multiplyScalar(Se.y),E.copy(R[me]).add(D).add(C),Ne(E.x,E.y,E.z)):Ne(Se.x,Se.y,m/p*me)}for(let me=S-1;me>=0;me--){const ye=me/S,Se=_*Math.cos(ye*Math.PI/2),Me=y*Math.sin(ye*Math.PI/2)+M;for(let Re=0,lt=j.length;Re<lt;Re++){const Ke=H(j[Re],K[Re],Me);Ne(Ke.x,Ke.y,m+Se)}for(let Re=0,lt=B.length;Re<lt;Re++){const Ke=B[Re];he=oe[Re];for(let ot=0,mt=Ke.length;ot<mt;ot++){const V=H(Ke[ot],he[ot],Me);T?Ne(V.x,V.y+R[p-1].y,R[p-1].x+Se):Ne(V.x,V.y,m+Se)}}}xt(),le();function xt(){const me=r.length/3;if(g){let ye=0,Se=q*ye;for(let Me=0;Me<et;Me++){const Re=Ie[Me];at(Re[2]+Se,Re[1]+Se,Re[0]+Se)}ye=p+S*2,Se=q*ye;for(let Me=0;Me<et;Me++){const Re=Ie[Me];at(Re[0]+Se,Re[1]+Se,Re[2]+Se)}}else{for(let ye=0;ye<et;ye++){const Se=Ie[ye];at(Se[2],Se[1],Se[0])}for(let ye=0;ye<et;ye++){const Se=Ie[ye];at(Se[0]+q*p,Se[1]+q*p,Se[2]+q*p)}}n.addGroup(me,r.length/3-me,0)}function le(){const me=r.length/3;let ye=0;fe(j,ye),ye+=j.length;for(let Se=0,Me=B.length;Se<Me;Se++){const Re=B[Se];fe(Re,ye),ye+=Re.length}n.addGroup(me,r.length/3-me,1)}function fe(me,ye){let Se=me.length;for(;--Se>=0;){const Me=Se;let Re=Se-1;Re<0&&(Re=me.length-1);for(let lt=0,Ke=p+S*2;lt<Ke;lt++){const ot=q*lt,mt=q*(lt+1),V=ye+Me+ot,Pt=ye+Re+ot,Mt=ye+Re+mt,F=ye+Me+mt;We(V,Pt,Mt,F)}}}function Ne(me,ye,Se){f.push(me),f.push(ye),f.push(Se)}function at(me,ye,Se){ft(me),ft(ye),ft(Se);const Me=r.length/3,Re=w.generateTopUV(n,r,Me-3,Me-2,Me-1);Ct(Re[0]),Ct(Re[1]),Ct(Re[2])}function We(me,ye,Se,Me){ft(me),ft(ye),ft(Me),ft(ye),ft(Se),ft(Me);const Re=r.length/3,lt=w.generateSideWallUV(n,r,Re-6,Re-3,Re-2,Re-1);Ct(lt[0]),Ct(lt[1]),Ct(lt[3]),Ct(lt[1]),Ct(lt[2]),Ct(lt[3])}function ft(me){r.push(f[me*3+0]),r.push(f[me*3+1]),r.push(f[me*3+2])}function Ct(me){o.push(me.x),o.push(me.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return pC(t,n,e)}static fromJSON(e,t){const n=[];for(let o=0,l=e.shapes.length;o<l;o++){const c=t[e.shapes[o]];n.push(c)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new zh[r.type]().fromJSON(r)),new _d(n,e.options)}}const dC={generateTopUV:function(s,e,t,n,r){const o=e[t*3],l=e[t*3+1],c=e[n*3],f=e[n*3+1],h=e[r*3],p=e[r*3+1];return[new _e(o,l),new _e(c,f),new _e(h,p)]},generateSideWallUV:function(s,e,t,n,r,o){const l=e[t*3],c=e[t*3+1],f=e[t*3+2],h=e[n*3],p=e[n*3+1],m=e[n*3+2],g=e[r*3],_=e[r*3+1],y=e[r*3+2],M=e[o*3],S=e[o*3+1],b=e[o*3+2];return Math.abs(c-p)<Math.abs(l-h)?[new _e(l,1-f),new _e(h,1-m),new _e(g,1-y),new _e(M,1-b)]:[new _e(c,1-f),new _e(p,1-m),new _e(_,1-y),new _e(S,1-b)]}};function pC(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,r=s.length;n<r;n++){const o=s[n];t.shapes.push(o.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class xd extends Zs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xd(e.radius,e.detail)}}class yd extends pt{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=gt(r,0,Math.PI*2);const o=[],l=[],c=[],f=[],h=[],p=1/t,m=new O,g=new _e,_=new O,y=new O,M=new O;let S=0,b=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:S=e[w+1].x-e[w].x,b=e[w+1].y-e[w].y,_.x=b*1,_.y=-S,_.z=b*0,M.copy(_),_.normalize(),f.push(_.x,_.y,_.z);break;case e.length-1:f.push(M.x,M.y,M.z);break;default:S=e[w+1].x-e[w].x,b=e[w+1].y-e[w].y,_.x=b*1,_.y=-S,_.z=b*0,y.copy(_),_.x+=M.x,_.y+=M.y,_.z+=M.z,_.normalize(),f.push(_.x,_.y,_.z),M.copy(y)}for(let w=0;w<=t;w++){const R=n+w*p*r,T=Math.sin(R),I=Math.cos(R);for(let C=0;C<=e.length-1;C++){m.x=e[C].x*T,m.y=e[C].y,m.z=e[C].x*I,l.push(m.x,m.y,m.z),g.x=w/t,g.y=C/(e.length-1),c.push(g.x,g.y);const D=f[3*C+0]*T,E=f[3*C+1],N=f[3*C+0]*I;h.push(D,E,N)}}for(let w=0;w<t;w++)for(let R=0;R<e.length-1;R++){const T=R+w*e.length,I=T,C=T+e.length,D=T+e.length+1,E=T+1;o.push(I,C,E),o.push(D,E,C)}this.setIndex(o),this.setAttribute("position",new $e(l,3)),this.setAttribute("uv",new $e(c,2)),this.setAttribute("normal",new $e(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yd(e.points,e.segments,e.phiStart,e.phiLength)}}class Jc extends Zs{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Jc(e.radius,e.detail)}}class pl extends pt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,l=t/2,c=Math.floor(n),f=Math.floor(r),h=c+1,p=f+1,m=e/c,g=t/f,_=[],y=[],M=[],S=[];for(let b=0;b<p;b++){const w=b*g-l;for(let R=0;R<h;R++){const T=R*m-o;y.push(T,-w,0),M.push(0,0,1),S.push(R/c),S.push(1-b/f)}}for(let b=0;b<f;b++)for(let w=0;w<c;w++){const R=w+h*b,T=w+h*(b+1),I=w+1+h*(b+1),C=w+1+h*b;_.push(R,T,C),_.push(T,I,C)}this.setIndex(_),this.setAttribute("position",new $e(y,3)),this.setAttribute("normal",new $e(M,3)),this.setAttribute("uv",new $e(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.widthSegments,e.heightSegments)}}class cl extends pt{constructor(e=.5,t=1,n=32,r=1,o=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:l},n=Math.max(3,n),r=Math.max(1,r);const c=[],f=[],h=[],p=[];let m=e;const g=(t-e)/r,_=new O,y=new _e;for(let M=0;M<=r;M++){for(let S=0;S<=n;S++){const b=o+S/n*l;_.x=m*Math.cos(b),_.y=m*Math.sin(b),f.push(_.x,_.y,_.z),h.push(0,0,1),y.x=(_.x/t+1)/2,y.y=(_.y/t+1)/2,p.push(y.x,y.y)}m+=g}for(let M=0;M<r;M++){const S=M*(n+1);for(let b=0;b<n;b++){const w=b+S,R=w,T=w+n+1,I=w+n+2,C=w+1;c.push(R,T,C),c.push(T,I,C)}}this.setIndex(c),this.setAttribute("position",new $e(f,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class bd extends pt{constructor(e=new Zc([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],o=[],l=[];let c=0,f=0;if(Array.isArray(e)===!1)h(e);else for(let p=0;p<e.length;p++)h(e[p]),this.addGroup(c,f,p),c+=f,f=0;this.setIndex(n),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(l,2));function h(p){const m=r.length/3,g=p.extractPoints(t);let _=g.shape;const y=g.holes;yr.isClockWise(_)===!1&&(_=_.reverse());for(let S=0,b=y.length;S<b;S++){const w=y[S];yr.isClockWise(w)===!0&&(y[S]=w.reverse())}const M=yr.triangulateShape(_,y);for(let S=0,b=y.length;S<b;S++){const w=y[S];_=_.concat(w)}for(let S=0,b=_.length;S<b;S++){const w=_[S];r.push(w.x,w.y,0),o.push(0,0,1),l.push(w.x,w.y)}for(let S=0,b=M.length;S<b;S++){const w=M[S],R=w[0]+m,T=w[1]+m,I=w[2]+m;n.push(R,T,I),f+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return mC(t,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const l=t[e.shapes[r]];n.push(l)}return new bd(n,e.curveSegments)}}function mC(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const r=s[t];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e}class Kc extends pt{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(l+c,Math.PI);let h=0;const p=[],m=new O,g=new O,_=[],y=[],M=[],S=[];for(let b=0;b<=n;b++){const w=[],R=b/n,T=l+R*c,I=e*Math.cos(T),C=Math.sqrt(e*e-I*I);let D=0;b===0&&l===0?D=.5/t:b===n&&f===Math.PI&&(D=-.5/t);for(let E=0;E<=t;E++){const N=E/t,U=r+N*o;m.x=-C*Math.cos(U),m.y=I,m.z=C*Math.sin(U),y.push(m.x,m.y,m.z),g.copy(m).normalize(),M.push(g.x,g.y,g.z),S.push(N+D,1-R),w.push(h++)}p.push(w)}for(let b=0;b<n;b++)for(let w=0;w<t;w++){const R=p[b][w+1],T=p[b][w],I=p[b+1][w],C=p[b+1][w+1];(b!==0||l>0)&&_.push(R,T,C),(b!==n-1||f<Math.PI)&&_.push(T,I,C)}this.setIndex(_),this.setAttribute("position",new $e(y,3)),this.setAttribute("normal",new $e(M,3)),this.setAttribute("uv",new $e(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sd extends Zs{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sd(e.radius,e.detail)}}class Md extends pt{constructor(e=1,t=.4,n=12,r=48,o=Math.PI*2,l=0,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:o,thetaStart:l,thetaLength:c},n=Math.floor(n),r=Math.floor(r);const f=[],h=[],p=[],m=[],g=new O,_=new O,y=new O;for(let M=0;M<=n;M++){const S=l+M/n*c;for(let b=0;b<=r;b++){const w=b/r*o;_.x=(e+t*Math.cos(S))*Math.cos(w),_.y=(e+t*Math.cos(S))*Math.sin(w),_.z=t*Math.sin(S),h.push(_.x,_.y,_.z),g.x=e*Math.cos(w),g.y=e*Math.sin(w),y.subVectors(_,g).normalize(),p.push(y.x,y.y,y.z),m.push(b/r),m.push(M/n)}}for(let M=1;M<=n;M++)for(let S=1;S<=r;S++){const b=(r+1)*M+S-1,w=(r+1)*(M-1)+S-1,R=(r+1)*(M-1)+S,T=(r+1)*M+S;f.push(b,w,T),f.push(w,R,T)}this.setIndex(f),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(p,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Md(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class wd extends pt{constructor(e=1,t=.4,n=64,r=8,o=2,l=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:o,q:l},n=Math.floor(n),r=Math.floor(r);const c=[],f=[],h=[],p=[],m=new O,g=new O,_=new O,y=new O,M=new O,S=new O,b=new O;for(let R=0;R<=n;++R){const T=R/n*o*Math.PI*2;w(T,o,l,e,_),w(T+.01,o,l,e,y),S.subVectors(y,_),b.addVectors(y,_),M.crossVectors(S,b),b.crossVectors(M,S),M.normalize(),b.normalize();for(let I=0;I<=r;++I){const C=I/r*Math.PI*2,D=-t*Math.cos(C),E=t*Math.sin(C);m.x=_.x+(D*b.x+E*M.x),m.y=_.y+(D*b.y+E*M.y),m.z=_.z+(D*b.z+E*M.z),f.push(m.x,m.y,m.z),g.subVectors(m,_).normalize(),h.push(g.x,g.y,g.z),p.push(R/n),p.push(I/r)}}for(let R=1;R<=n;R++)for(let T=1;T<=r;T++){const I=(r+1)*(R-1)+(T-1),C=(r+1)*R+(T-1),D=(r+1)*R+T,E=(r+1)*(R-1)+T;c.push(I,C,E),c.push(C,D,E)}this.setIndex(c),this.setAttribute("position",new $e(f,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(p,2));function w(R,T,I,C,D){const E=Math.cos(R),N=Math.sin(R),U=I/T*R,B=Math.cos(U);D.x=C*(2+B)*.5*E,D.y=C*(2+B)*N*.5,D.z=C*Math.sin(U)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wd(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Td extends pt{constructor(e=new g0(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:o};const l=e.computeFrenetFrames(t,o);this.tangents=l.tangents,this.normals=l.normals,this.binormals=l.binormals;const c=new O,f=new O,h=new _e;let p=new O;const m=[],g=[],_=[],y=[];M(),this.setIndex(y),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(g,3)),this.setAttribute("uv",new $e(_,2));function M(){for(let R=0;R<t;R++)S(R);S(o===!1?t:0),w(),b()}function S(R){p=e.getPointAt(R/t,p);const T=l.normals[R],I=l.binormals[R];for(let C=0;C<=r;C++){const D=C/r*Math.PI*2,E=Math.sin(D),N=-Math.cos(D);f.x=N*T.x+E*I.x,f.y=N*T.y+E*I.y,f.z=N*T.z+E*I.z,f.normalize(),g.push(f.x,f.y,f.z),c.x=p.x+n*f.x,c.y=p.y+n*f.y,c.z=p.z+n*f.z,m.push(c.x,c.y,c.z)}}function b(){for(let R=1;R<=t;R++)for(let T=1;T<=r;T++){const I=(r+1)*(R-1)+(T-1),C=(r+1)*R+(T-1),D=(r+1)*R+T,E=(r+1)*(R-1)+T;y.push(I,C,E),y.push(C,D,E)}}function w(){for(let R=0;R<=t;R++)for(let T=0;T<=r;T++)h.x=R/t,h.y=T/r,_.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Td(new zh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class US extends pt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new O,o=new O;if(e.index!==null){const l=e.attributes.position,c=e.index;let f=e.groups;f.length===0&&(f=[{start:0,count:c.count,materialIndex:0}]);for(let h=0,p=f.length;h<p;++h){const m=f[h],g=m.start,_=m.count;for(let y=g,M=g+_;y<M;y+=3)for(let S=0;S<3;S++){const b=c.getX(y+S),w=c.getX(y+(S+1)%3);r.fromBufferAttribute(l,b),o.fromBufferAttribute(l,w),uy(r,o,n)===!0&&(t.push(r.x,r.y,r.z),t.push(o.x,o.y,o.z))}}}else{const l=e.attributes.position;for(let c=0,f=l.count/3;c<f;c++)for(let h=0;h<3;h++){const p=3*c+h,m=3*c+(h+1)%3;r.fromBufferAttribute(l,p),o.fromBufferAttribute(l,m),uy(r,o,n)===!0&&(t.push(r.x,r.y,r.z),t.push(o.x,o.y,o.z))}}this.setAttribute("position",new $e(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function uy(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}var fy=Object.freeze({__proto__:null,BoxGeometry:Va,CapsuleGeometry:pd,CircleGeometry:md,ConeGeometry:$c,CylinderGeometry:jc,DodecahedronGeometry:gd,EdgesGeometry:TS,ExtrudeGeometry:_d,IcosahedronGeometry:xd,LatheGeometry:yd,OctahedronGeometry:Jc,PlaneGeometry:pl,PolyhedronGeometry:Zs,RingGeometry:cl,ShapeGeometry:bd,SphereGeometry:Kc,TetrahedronGeometry:Sd,TorusGeometry:Md,TorusKnotGeometry:wd,TubeGeometry:Td,WireframeGeometry:US});class FS extends ti{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function ul(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const r=s[t][n];if(hy(r))r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(hy(r[0])){const o=[];for(let l=0,c=r.length;l<c;l++)o[l]=r[l].clone();e[t][n]=o}else e[t][n]=r.slice();else e[t][n]=r}}return e}function hi(s){const e={};for(let t=0;t<s.length;t++){const n=ul(s[t]);for(const r in n)e[r]=n[r]}return e}function hy(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function gC(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function OS(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const BS={clone:ul,merge:hi};var vC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_C=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vC,this.fragmentShader=_C,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ul(e.uniforms),this.uniformsGroups=gC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new be().setHex(r.value);break;case"v2":this.uniforms[n].value=new _e().fromArray(r.value);break;case"v3":this.uniforms[n].value=new O().fromArray(r.value);break;case"v4":this.uniforms[n].value=new tn().fromArray(r.value);break;case"m3":this.uniforms[n].value=new bt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new _t().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class _0 extends Li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class x0 extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gs,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zS extends x0{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class kS extends ti{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gs,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=Xc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class VS extends ti{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new be(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gs,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class HS extends ti{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gs,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class GS extends ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gs,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=Xc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class y0 extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class b0 extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class WS extends ti{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new be(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gs,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class XS extends xi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function _r(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Tc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function qS(s){function e(r,o){return s[r]-s[o]}const t=s.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Cg(s,e,t){const n=s.length,r=new s.constructor(n);for(let o=0,l=0;l!==n;++o){const c=t[o]*e;for(let f=0;f!==e;++f)r[l++]=s[c+f]}return r}function YS(s,e,t,n){let r=1,o=s[0];for(;o!==void 0&&o[n]===void 0;)o=s[r++];if(o===void 0)return;let l=o[n];if(l!==void 0)if(Array.isArray(l))do l=o[n],l!==void 0&&(e.push(o.time),t.push(...l)),o=s[r++];while(o!==void 0);else if(l.toArray!==void 0)do l=o[n],l!==void 0&&(e.push(o.time),l.toArray(t,t.length)),o=s[r++];while(o!==void 0);else do l=o[n],l!==void 0&&(e.push(o.time),t.push(l)),o=s[r++];while(o!==void 0)}function xC(s,e,t,n,r=30){const o=s.clone();o.name=e;const l=[];for(let f=0;f<o.tracks.length;++f){const h=o.tracks[f],p=h.getValueSize(),m=[],g=[];for(let _=0;_<h.times.length;++_){const y=h.times[_]*r;if(!(y<t||y>=n)){m.push(h.times[_]);for(let M=0;M<p;++M)g.push(h.values[_*p+M])}}m.length!==0&&(h.times=_r(m,h.times.constructor),h.values=_r(g,h.values.constructor),l.push(h))}o.tracks=l;let c=1/0;for(let f=0;f<o.tracks.length;++f)c>o.tracks[f].times[0]&&(c=o.tracks[f].times[0]);for(let f=0;f<o.tracks.length;++f)o.tracks[f].shift(-1*c);return o.resetDuration(),o}function yC(s,e=0,t=s,n=30){n<=0&&(n=30);const r=t.tracks.length,o=e/n;for(let l=0;l<r;++l){const c=t.tracks[l],f=c.ValueTypeName;if(f==="bool"||f==="string")continue;const h=s.tracks.find(function(b){return b.name===c.name&&b.ValueTypeName===f});if(h===void 0)continue;let p=0;const m=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(p=m/3);let g=0;const _=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(g=_/3);const y=c.times.length-1;let M;if(o<=c.times[0]){const b=p,w=m-p;M=c.values.slice(b,w)}else if(o>=c.times[y]){const b=y*m+p,w=b+m-p;M=c.values.slice(b,w)}else{const b=c.createInterpolant(),w=p,R=m-p;b.evaluate(o),M=b.resultBuffer.slice(w,R)}f==="quaternion"&&new _i().fromArray(M).normalize().conjugate().toArray(M);const S=h.times.length;for(let b=0;b<S;++b){const w=b*_+g;if(f==="quaternion")_i.multiplyQuaternionsFlat(h.values,w,M,0,h.values,w);else{const R=_-g*2;for(let T=0;T<R;++T)h.values[w+T]-=M[T]}}}return s.blendMode=n0,s}class bC{static convertArray(e,t){return _r(e,t)}static isTypedArray(e){return uS(e)}static hasTangents(e){return Tc(e)}static getKeyframeOrder(e){return qS(e)}static sortedArray(e,t,n){return Cg(e,t,n)}static flattenJSON(e,t,n,r){YS(e,t,n,r)}static subclip(e,t,n,r,o=30){return xC(e,t,n,r,o)}static makeClipAdditive(e,t=0,n=e,r=30){return yC(e,t,n,r)}}class ml{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],o=t[n-1];e:{t:{let l;n:{i:if(!(e<r)){for(let c=n+2;;){if(r===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(o=r,r=t[++n],e<r)break t}l=t.length;break n}if(!(e>=o)){const c=t[1];e<c&&(n=2,o=c);for(let f=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===f)break;if(r=o,o=t[--n-1],e>=o)break t}l=n,n=0;break n}break e}for(;n<l;){const c=n+l>>>1;e<t[c]?l=c:n=c+1}if(r=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=e*r;for(let l=0;l!==r;++l)t[l]=n[o+l];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class jS extends ml{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Na,endingEnd:Na}}intervalChanged_(e,t,n){const r=this.parameterPositions;let o=e-2,l=e+1,c=r[o],f=r[l];if(c===void 0)switch(this.getSettings_().endingStart){case Da:o=e,c=2*t-n;break;case Lc:o=r.length-2,c=t+r[o]-r[o+1];break;default:o=e,c=n}if(f===void 0)switch(this.getSettings_().endingEnd){case Da:l=e,f=2*n-t;break;case Lc:l=1,f=n+r[1]-r[0];break;default:l=e-1,f=t}const h=(n-t)*.5,p=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(f-n),this._offsetPrev=o*p,this._offsetNext=l*p}interpolate_(e,t,n,r){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,f=e*c,h=f-c,p=this._offsetPrev,m=this._offsetNext,g=this._weightPrev,_=this._weightNext,y=(n-t)/(r-t),M=y*y,S=M*y,b=-g*S+2*g*M-g*y,w=(1+g)*S+(-1.5-2*g)*M+(-.5+g)*y+1,R=(-1-_)*S+(1.5+_)*M+.5*y,T=_*S-_*M;for(let I=0;I!==c;++I)o[I]=b*l[p+I]+w*l[h+I]+R*l[f+I]+T*l[m+I];return o}}class S0 extends ml{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,f=e*c,h=f-c,p=(n-t)/(r-t),m=1-p;for(let g=0;g!==c;++g)o[g]=l[h+g]*m+l[f+g]*p;return o}}class $S extends ml{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ZS extends ml{interpolate_(e,t,n,r){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,f=e*c,h=f-c,p=this.inTangents,m=this.outTangents;if(!p||!m){const y=(n-t)/(r-t),M=1-y;for(let S=0;S!==c;++S)o[S]=l[h+S]*M+l[f+S]*y;return o}const g=c*2,_=e-1;for(let y=0;y!==c;++y){const M=l[h+y],S=l[f+y],b=_*g+y*2,w=m[b],R=m[b+1],T=e*g+y*2,I=p[T],C=p[T+1],D=MC(n,t,w,I,r);o[y]=JS(D,M,R,C,S)}return o}}function JS(s,e,t,n,r){const o=1-s;return o*o*o*e+3*o*o*s*t+3*o*s*s*n+s*s*s*r}function SC(s,e,t,n,r){const o=1-s;return 3*o*o*(t-e)+6*o*s*(n-t)+3*s*s*(r-n)}function MC(s,e,t,n,r){let o=(s-e)/(r-e);for(let l=0;l<8;l++){const c=JS(o,e,t,n,r)-s;if(Math.abs(c)<1e-10)break;const f=SC(o,e,t,n,r);if(Math.abs(f)<1e-10)break;o=Math.max(0,Math.min(1,o-c/f))}return o}class lr{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_r(t,this.TimeBufferType),this.values=_r(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_r(e.times,Array),values:_r(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Tc(e.settings)&&(n.settings={inTangents:_r(e.settings.inTangents,Array),outTangents:_r(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $S(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new S0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new ZS(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ic:t=this.InterpolantFactoryMethodDiscrete;break;case Fh:t=this.InterpolantFactoryMethodLinear;break;case Yf:t=this.InterpolantFactoryMethodSmooth;break;case Mg:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ic;case this.InterpolantFactoryMethodLinear:return Fh;case this.InterpolantFactoryMethodSmooth:return Yf;case this.InterpolantFactoryMethodBezier:return Mg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Tc(this.settings)&&(dy(this.settings.inTangents,e),dy(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,r=n.length;let o=0,l=r-1;for(;o!==r&&n[o]<e;)++o;for(;l!==-1&&n[l]>t;)--l;if(++l,o!==0||l!==r){o>=l&&(l=Math.max(l,1),o=l-1);const c=this.getValueSize();this.times=n.slice(o,l),this.values=this.values.slice(o*c,l*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(st("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,o=n.length;o===0&&(st("KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let c=0;c!==o;c++){const f=n[c];if(typeof f=="number"&&isNaN(f)){st("KeyframeTrack: Time is not a valid number.",this,c,f),e=!1;break}if(l!==null&&l>f){st("KeyframeTrack: Out of order keys.",this,c,f,l),e=!1;break}l=f}if(r!==void 0&&uS(r))for(let c=0,f=r.length;c!==f;++c){const h=r[c];if(isNaN(h)){st("KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Yf,o=e.length-1;let l=1;for(let c=1;c<o;++c){let f=!1;const h=e[c],p=e[c+1];if(h!==p&&(c!==1||h!==e[0]))if(r)f=!0;else{const m=c*n,g=m-n,_=m+n;for(let y=0;y!==n;++y){const M=t[m+y];if(M!==t[g+y]||M!==t[_+y]){f=!0;break}}}if(f){if(c!==l){e[l]=e[c];const m=c*n,g=l*n;for(let _=0;_!==n;++_)t[g+_]=t[m+_]}++l}}if(o>0){e[l]=e[o];for(let c=o*n,f=l*n,h=0;h!==n;++h)t[f+h]=t[c+h];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Tc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}}function dy(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}lr.prototype.ValueTypeName="";lr.prototype.TimeBufferType=Float32Array;lr.prototype.ValueBufferType=Float32Array;lr.prototype.DefaultInterpolation=Fh;class Ha extends lr{constructor(e,t,n){super(e,t,n)}}Ha.prototype.ValueTypeName="bool";Ha.prototype.ValueBufferType=Array;Ha.prototype.DefaultInterpolation=Ic;Ha.prototype.InterpolantFactoryMethodLinear=void 0;Ha.prototype.InterpolantFactoryMethodSmooth=void 0;class M0 extends lr{constructor(e,t,n,r){super(e,t,n,r)}}M0.prototype.ValueTypeName="color";class Ed extends lr{constructor(e,t,n,r){super(e,t,n,r)}}Ed.prototype.ValueTypeName="number";class KS extends ml{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,f=(n-t)/(r-t);let h=e*c;for(let p=h+c;h!==p;h+=4)_i.slerpFlat(o,0,l,h-c,l,h,f);return o}}class Ad extends lr{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new KS(this.times,this.values,this.getValueSize(),e)}}Ad.prototype.ValueTypeName="quaternion";Ad.prototype.InterpolantFactoryMethodSmooth=void 0;class Ga extends lr{constructor(e,t,n){super(e,t,n)}}Ga.prototype.ValueTypeName="string";Ga.prototype.ValueBufferType=Array;Ga.prototype.DefaultInterpolation=Ic;Ga.prototype.InterpolantFactoryMethodLinear=void 0;Ga.prototype.InterpolantFactoryMethodSmooth=void 0;class w0 extends lr{constructor(e,t,n,r){super(e,t,n,r)}}w0.prototype.ValueTypeName="vector";class kc{constructor(e="",t=-1,n=[],r=nd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Yi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let l=0,c=n.length;l!==c;++l)t.push(TC(n[l]).scale(r));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o.userData=JSON.parse(e.userData||"{}"),o}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let o=0,l=n.length;o!==l;++o)t.push(lr.toJSON(n[o]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const o=t.length,l=[];for(let c=0;c<o;c++){let f=[],h=[];f.push((c+o-1)%o,c,(c+1)%o),h.push(0,1,0);const p=qS(f);f=Cg(f,1,p),h=Cg(h,1,p),!r&&f[0]===0&&(f.push(o),h.push(h[0])),l.push(new Ed(".morphTargetInfluences["+t[c].name+"]",f,h).scale(1/n))}return new this(e,-1,l)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},o=/^([\w-]*?)([\d]+)$/;for(let c=0,f=e.length;c<f;c++){const h=e[c],p=h.name.match(o);if(p&&p.length>1){const m=p[1];let g=r[m];g||(r[m]=g=[]),g.push(h)}}const l=[];for(const c in r)l.push(this.CreateFromMorphTargetSequence(c,r[c],t,n));return l}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function wC(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ed;case"vector":case"vector2":case"vector3":case"vector4":return w0;case"color":return M0;case"quaternion":return Ad;case"bool":case"boolean":return Ha;case"string":return Ga}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function TC(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=wC(s.type);if(s.times===void 0){const n=[],r=[];YS(s.keys,n,r,"value"),s.times=n,s.values=r}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Tc(s.settings)&&(t.settings={inTangents:_r(s.settings.inTangents,Float32Array),outTangents:_r(s.settings.outTangents,Float32Array)}),t}const Vr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(py(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!py(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function py(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class T0{constructor(e,t,n){const r=this;let o=!1,l=0,c=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(p){c++,o===!1&&r.onStart!==void 0&&r.onStart(p,l,c),o=!0},this.itemEnd=function(p){l++,r.onProgress!==void 0&&r.onProgress(p,l,c),l===c&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,m){return h.push(p,m),this},this.removeHandler=function(p){const m=h.indexOf(p);return m!==-1&&h.splice(m,2),this},this.getHandler=function(p){for(let m=0,g=h.length;m<g;m+=2){const _=h[m],y=h[m+1];if(_.global&&(_.lastIndex=0),_.test(p))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const QS=new T0;class Ni{constructor(e){this.manager=e!==void 0?e:QS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ni.DEFAULT_MATERIAL_NAME="__DEFAULT";const os={};class EC extends Error{constructor(e,t){super(e),this.response=t}}class vs extends Ni{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Vr.get(`file:${e}`);if(o!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0);return}if(os[e]!==void 0){os[e].push({onLoad:t,onProgress:n,onError:r});return}os[e]=[],os[e].push({onLoad:t,onProgress:n,onError:r});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,f=this.responseType;fetch(l).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const p=os[e],m=h.body.getReader(),g=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),_=g?parseInt(g):0,y=_!==0;let M=0;const S=new ReadableStream({start(b){w();function w(){m.read().then(({done:R,value:T})=>{if(R)b.close();else{M+=T.byteLength;const I=new ProgressEvent("progress",{lengthComputable:y,loaded:M,total:_});for(let C=0,D=p.length;C<D;C++){const E=p[C];E.onProgress&&E.onProgress(I)}b.enqueue(T),w()}},R=>{b.error(R)})}}});return new Response(S)}else throw new EC(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(f){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(p=>new DOMParser().parseFromString(p,c));case"json":return h.json();default:if(c==="")return h.text();{const m=/charset="?([^;"\s]*)"?/i.exec(c),g=m&&m[1]?m[1].toLowerCase():void 0,_=new TextDecoder(g);return h.arrayBuffer().then(y=>_.decode(y))}}}).then(h=>{Vr.add(`file:${e}`,h);const p=os[e];delete os[e];for(let m=0,g=p.length;m<g;m++){const _=p[m];_.onLoad&&_.onLoad(h)}}).catch(h=>{const p=os[e];if(p===void 0)throw this.manager.itemError(e),h;delete os[e];for(let m=0,g=p.length;m<g;m++){const _=p[m];_.onError&&_.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class AC extends Ni{constructor(e){super(e)}load(e,t,n,r){const o=this,l=new vs(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{t(o.parse(JSON.parse(c)))}catch(f){r?r(f):st(f),o.manager.itemError(e)}},n,r)}parse(e){const t=[];for(let n=0;n<e.length;n++){const r=kc.parse(e[n]);t.push(r)}return t}}class CC extends Ni{constructor(e){super(e)}load(e,t,n,r){const o=this,l=[],c=new dd,f=new vs(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(o.withCredentials);let h=0;function p(m){f.load(e[m],function(g){const _=o.parse(g,!0);l[m]={width:_.width,height:_.height,format:_.format,mipmaps:_.mipmaps},h+=1,h===6&&(_.mipmapCount===1&&(c.minFilter=fn),c.image=l,c.format=_.format,c.needsUpdate=!0,t&&t(c))},n,r)}if(Array.isArray(e))for(let m=0,g=e.length;m<g;++m)p(m);else f.load(e,function(m){const g=o.parse(m,!0);if(g.isCubemap){const _=g.mipmaps.length/g.mipmapCount;for(let y=0;y<_;y++){l[y]={mipmaps:[]};for(let M=0;M<g.mipmapCount;M++)l[y].mipmaps.push(g.mipmaps[y*g.mipmapCount+M]),l[y].format=g.format,l[y].width=g.width,l[y].height=g.height}c.image=l}else c.image.width=g.width,c.image.height=g.height,c.mipmaps=g.mipmaps;g.mipmapCount===1&&(c.minFilter=fn),c.format=g.format,c.needsUpdate=!0,t&&t(c)},n,r);return c}}const Oo=new WeakMap;class Vc extends Ni{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=Vr.get(`image:${e}`);if(l!==void 0){if(l.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0);else{let m=Oo.get(l);m===void 0&&(m=[],Oo.set(l,m)),m.push({onLoad:t,onError:r})}return l}const c=Dc("img");function f(){p(),t&&t(this);const m=Oo.get(this)||[];for(let g=0;g<m.length;g++){const _=m[g];_.onLoad&&_.onLoad(this)}Oo.delete(this),o.manager.itemEnd(e)}function h(m){p(),r&&r(m),Vr.remove(`image:${e}`);const g=Oo.get(this)||[];for(let _=0;_<g.length;_++){const y=g[_];y.onError&&y.onError(m)}Oo.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){c.removeEventListener("load",f,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",f,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),Vr.add(`image:${e}`,c),o.manager.itemStart(e),c.src=e,c}}class RC extends Ni{constructor(e){super(e)}load(e,t,n,r){const o=new Yc;o.colorSpace=Yn;const l=new Vc(this.manager);l.setCrossOrigin(this.crossOrigin),l.setPath(this.path);let c=0;function f(h){l.load(e[h],function(p){o.images[h]=p,c++,c===6&&(o.needsUpdate=!0,t&&t(o))},void 0,r)}for(let h=0;h<e.length;++h)f(h);return o}}class PC extends Ni{constructor(e){super(e)}load(e,t,n,r){const o=this,l=new ar,c=new vs(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(o.withCredentials),c.load(e,function(f){let h;try{h=o.parse(f)}catch(p){r!==void 0?r(p):st(p);return}o._applyTexData(l,h),t&&t(l,h)},n,r),l}createDataTexture(e){const t=new ar;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Pi,e.wrapT=t.wrapT!==void 0?t.wrapT:Pi,e.magFilter=t.magFilter!==void 0?t.magFilter:fn,e.minFilter=t.minFilter!==void 0?t.minFilter:fn,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=kr),t.mipmapCount===1&&(e.minFilter=fn),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class IC extends Ni{constructor(e){super(e)}load(e,t,n,r){const o=new hn,l=new Vc(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){o.image=c,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class Js extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class eM extends Js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Wm=new _t,my=new O,gy=new O;class Cd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new za,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;my.setFromMatrixPosition(e.matrixWorld),t.position.copy(my),gy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gy),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Wm.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Wm,e.coordinateSystem,e.reversedDepth);const o=this._frameExtents,l=r?r.z/o.x:1,c=r?r.w/o.y:1,f=r?r.x/o.x:0,h=r?r.y/o.y:0;e.coordinateSystem===Oa||e.reversedDepth?t.set(.5*l,0,0,.5*l+f,0,.5*c,0,.5*c+h,0,0,1,0,0,0,0,1):t.set(.5*l,0,0,.5*l+f,0,.5*c,0,.5*c+h,0,0,.5,.5,0,0,0,1),t.multiply(Wm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Lf=new O,Nf=new _i,Br=new O;class Rd extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lf,Nf,Br),Br.x===1&&Br.y===1&&Br.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lf,Nf,Br.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Lf,Nf,Br),Br.x===1&&Br.y===1&&Br.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lf,Nf,Br.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zs=new O,vy=new _e,_y=new _e;class jn extends Rd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zs.x,zs.y).multiplyScalar(-e/zs.z),zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zs.x,zs.y).multiplyScalar(-e/zs.z)}getViewSize(e,t){return this.getViewBounds(e,vy,_y),t.subVectors(_y,vy)}setViewOffset(e,t,n,r,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,h=l.fullHeight;o+=l.offsetX*r/f,t-=l.offsetY*n/h,r*=l.width/f,n*=l.height/h}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class LC extends Cd{constructor(){super(new jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=rl*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,o=e.distance||t.far;(n!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class tM extends Js{constructor(e,t,n=0,r=Math.PI/3,o=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=r,this.penumbra=o,this.decay=l,this.map=null,this.shadow=new LC}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class NC extends Cd{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0}}class nM extends Js{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new NC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class gl extends Rd{constructor(e=-1,t=1,n=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,l=n+e,c=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,l=o+h*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,c,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class DC extends Cd{constructor(){super(new gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iM extends Js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new DC}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class rM extends Js{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sM extends Js{constructor(e,t,n=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class E0{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new O)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,o=e.z,l=this.coefficients;return t.copy(l[0]).multiplyScalar(.282095),t.addScaledVector(l[1],.488603*r),t.addScaledVector(l[2],.488603*o),t.addScaledVector(l[3],.488603*n),t.addScaledVector(l[4],1.092548*(n*r)),t.addScaledVector(l[5],1.092548*(r*o)),t.addScaledVector(l[6],.315392*(3*o*o-1)),t.addScaledVector(l[7],1.092548*(n*o)),t.addScaledVector(l[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,o=e.z,l=this.coefficients;return t.copy(l[0]).multiplyScalar(.886227),t.addScaledVector(l[1],2*.511664*r),t.addScaledVector(l[2],2*.511664*o),t.addScaledVector(l[3],2*.511664*n),t.addScaledVector(l[4],2*.429043*n*r),t.addScaledVector(l[5],2*.429043*r*o),t.addScaledVector(l[6],.743125*o*o-.247708),t.addScaledVector(l[7],2*.429043*n*o),t.addScaledVector(l[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const n=e.x,r=e.y,o=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*o,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*o,t[6]=.315392*(3*o*o-1),t[7]=1.092548*n*o,t[8]=.546274*(n*n-r*r)}}class aM extends Js{constructor(e=new E0,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}const xy={};class Pd extends Ni{constructor(e){super(e),this.textures={}}load(e,t,n,r){const o=this,l=new vs(o.manager);l.setPath(o.path),l.setRequestHeader(o.requestHeader),l.setWithCredentials(o.withCredentials),l.load(e,function(c){try{t(o.parse(JSON.parse(c)))}catch(f){r?r(f):st(f),o.manager.itemError(e)}},n,r)}parse(e){const t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Pd.createMaterialFromType(e)}static createMaterialFromType(e){const n={ShadowMaterial:FS,SpriteMaterial:l0,RawShaderMaterial:_0,ShaderMaterial:Li,PointsMaterial:u0,MeshPhysicalMaterial:zS,MeshStandardMaterial:x0,MeshPhongMaterial:kS,MeshToonMaterial:VS,MeshNormalMaterial:HS,MeshLambertMaterial:GS,MeshDepthMaterial:y0,MeshDistanceMaterial:b0,MeshBasicMaterial:$s,MeshMatcapMaterial:WS,LineDashedMaterial:XS,LineBasicMaterial:xi,Material:ti,...xy}[e];let r;return n===void 0?(ps(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),r=new ti):r=new n,r}static registerMaterial(e,t){xy[e]=t}}class Rg{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class oM extends pt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class lM extends Ni{constructor(e){super(e)}load(e,t,n,r){const o=this,l=new vs(o.manager);l.setPath(o.path),l.setRequestHeader(o.requestHeader),l.setWithCredentials(o.withCredentials),l.load(e,function(c){try{t(o.parse(JSON.parse(c)))}catch(f){r?r(f):st(f),o.manager.itemError(e)}},n,r)}parse(e){const t={},n={};function r(_,y){if(t[y]!==void 0)return t[y];const S=_.interleavedBuffers[y],b=o(_,S.buffer),w=Yo(S.type,b),R=new ud(w,S.stride);return R.uuid=S.uuid,S.usage!==void 0&&R.setUsage(S.usage),t[y]=R,R}function o(_,y){if(n[y]!==void 0)return n[y];const S=_.arrayBuffers[y],b=new Uint32Array(S).buffer;return n[y]=b,b}const l=e.isInstancedBufferGeometry?new oM:new pt,c=e.data.index;if(c!==void 0){const _=Yo(c.type,c.array);l.setIndex(new ct(_,1))}const f=e.data.attributes;for(const _ in f){const y=f[_];let M;if(y.isInterleavedBufferAttribute){const S=r(e.data,y.data);M=new Ba(S,y.itemSize,y.offset,y.normalized)}else{const S=Yo(y.type,y.array),b=y.isInstancedBufferAttribute?al:ct;M=new b(S,y.itemSize,y.normalized)}y.name!==void 0&&(M.name=y.name),y.usage!==void 0&&M.setUsage(y.usage),y.gpuType!==void 0&&(M.gpuType=y.gpuType),l.setAttribute(_,M)}const h=e.data.morphAttributes;if(h)for(const _ in h){const y=h[_],M=[];for(let S=0,b=y.length;S<b;S++){const w=y[S];let R;if(w.isInterleavedBufferAttribute){const T=r(e.data,w.data);R=new Ba(T,w.itemSize,w.offset,w.normalized)}else{const T=Yo(w.type,w.array);R=new ct(T,w.itemSize,w.normalized)}w.name!==void 0&&(R.name=w.name),w.usage!==void 0&&R.setUsage(w.usage),w.gpuType!==void 0&&(R.gpuType=w.gpuType),M.push(R)}l.morphAttributes[_]=M}e.data.morphTargetsRelative&&(l.morphTargetsRelative=!0);const m=e.data.groups||e.data.drawcalls||e.data.offsets;if(m!==void 0)for(let _=0,y=m.length;_!==y;++_){const M=m[_];l.addGroup(M.start,M.count,M.materialIndex)}const g=e.data.boundingSphere;return g!==void 0&&(l.boundingSphere=new gn().fromJSON(g)),e.name&&(l.name=e.name),e.userData&&(l.userData=e.userData),l}}const Xm={};class UC extends Ni{constructor(e){super(e)}load(e,t,n,r){const o=this,l=this.path===""?Rg.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||l;const c=new vs(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(f){let h=null;try{h=JSON.parse(f)}catch(m){r!==void 0&&r(m),st("ObjectLoader: Can't parse "+e+".",m.message);return}const p=h.metadata;if(p===void 0||p.type===void 0||p.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),st("ObjectLoader: Can't load "+e);return}o.parse(h,t)},n,r)}async loadAsync(e,t){const n=this,r=this.path===""?Rg.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const o=new vs(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials);const l=await o.loadAsync(e,t);let c;try{c=JSON.parse(l)}catch(h){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+h.message)}const f=c.metadata;if(f===void 0||f.type===void 0||f.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(c)}parse(e,t){const n=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),o=this.parseGeometries(e.geometries,r),l=this.parseImages(e.images,function(){t!==void 0&&t(h)}),c=this.parseTextures(e.textures,l),f=this.parseMaterials(e.materials,c),h=this.parseObject(e.object,o,f,c,n),p=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,p),this.bindLightTargets(h),t!==void 0){let m=!1;for(const g in l)if(l[g].data instanceof HTMLImageElement){m=!0;break}m===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),o=await this.parseImagesAsync(e.images),l=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,l),f=this.parseObject(e.object,r,c,l,t),h=this.parseSkeletons(e.skeletons,f);return this.bindSkeletons(f,h),this.bindLightTargets(f),f}static registerGeometry(e,t){Xm[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let n=0,r=e.length;n<r;n++){const o=new Zc().fromJSON(e[n]);t[o.uuid]=o}return t}parseSkeletons(e,t){const n={},r={};if(t.traverse(function(o){o.isBone&&(r[o.uuid]=o)}),e!==void 0)for(let o=0,l=e.length;o<l;o++){const c=new fd().fromJSON(e[o],r);n[c.uuid]=c}return n}parseGeometries(e,t){const n={};if(e!==void 0){const r=new lM;for(let o=0,l=e.length;o<l;o++){let c;const f=e[o];switch(f.type){case"BufferGeometry":case"InstancedBufferGeometry":c=r.parse(f);break;default:f.type in fy?c=fy[f.type].fromJSON(f,t):f.type in Xm?c=Xm[f.type].fromJSON(f,t):Be(`ObjectLoader: Unknown geometry type "${f.type}". Use .registerGeometry() before starting the deserialization process.`)}c.uuid=f.uuid,f.name!==void 0&&(c.name=f.name),f.userData!==void 0&&(c.userData=f.userData),n[f.uuid]=c}}return n}parseMaterials(e,t){const n={},r={};if(e!==void 0){const o=new Pd;o.setTextures(t);for(let l=0,c=e.length;l<c;l++){const f=e[l];n[f.uuid]===void 0&&(n[f.uuid]=o.parse(f)),r[f.uuid]=n[f.uuid]}}return r}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const r=e[n],o=kc.parse(r);t[o.uuid]=o}return t}parseImages(e,t){const n=this,r={};let o;function l(f){return f=n.manager.resolveURL(f),n.manager.itemStart(f),o.load(f,function(){n.manager.itemEnd(f)},void 0,function(){n.manager.itemError(f),n.manager.itemEnd(f)})}function c(f){if(typeof f=="string"){const h=f,p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return l(p)}else return f.data?{data:Yo(f.type,f.data),width:f.width,height:f.height}:null}if(e!==void 0&&e.length>0){const f=new T0(t);o=new Vc(f),o.setCrossOrigin(this.crossOrigin);for(let h=0,p=e.length;h<p;h++){const m=e[h],g=m.url;if(Array.isArray(g)){const _=[];for(let y=0,M=g.length;y<M;y++){const S=g[y],b=c(S);b!==null&&(b instanceof HTMLImageElement?_.push(b):_.push(new ar(b.data,b.width,b.height)))}r[m.uuid]=new ds(_)}else{const _=c(m.url);r[m.uuid]=new ds(_)}}}return r}async parseImagesAsync(e){const t=this,n={};let r;async function o(l){if(typeof l=="string"){const c=l,f=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:t.resourcePath+c;return await r.loadAsync(f)}else return l.data?{data:Yo(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){r=new Vc(this.manager),r.setCrossOrigin(this.crossOrigin);for(let l=0,c=e.length;l<c;l++){const f=e[l],h=f.url;if(Array.isArray(h)){const p=[];for(let m=0,g=h.length;m<g;m++){const _=h[m],y=await o(_);y!==null&&(y instanceof HTMLImageElement?p.push(y):p.push(new ar(y.data,y.width,y.height)))}n[f.uuid]=new ds(p)}else{const p=await o(f.url);n[f.uuid]=new ds(p)}}}return n}parseTextures(e,t){function n(o,l){return typeof o=="number"?o:(Be("ObjectLoader.parseTexture: Constant should be in numeric form.",o),l[o])}const r={};if(e!==void 0)for(let o=0,l=e.length;o<l;o++){const c=e[o];c.image===void 0&&Be('ObjectLoader: No "image" specified for',c.uuid),t[c.image]===void 0&&Be("ObjectLoader: Undefined image",c.image);const f=t[c.image],h=f.data;let p;Array.isArray(h)?(p=new Yc,h.length===6&&(p.needsUpdate=!0)):(h&&h.data?p=new ar:p=new hn,h&&(p.needsUpdate=!0)),p.source=f,p.uuid=c.uuid,c.name!==void 0&&(p.name=c.name),c.mapping!==void 0&&(p.mapping=n(c.mapping,FC)),c.channel!==void 0&&(p.channel=c.channel),c.offset!==void 0&&p.offset.fromArray(c.offset),c.repeat!==void 0&&p.repeat.fromArray(c.repeat),c.center!==void 0&&p.center.fromArray(c.center),c.rotation!==void 0&&(p.rotation=c.rotation),c.wrap!==void 0&&(p.wrapS=n(c.wrap[0],yy),p.wrapT=n(c.wrap[1],yy)),c.format!==void 0&&(p.format=c.format),c.internalFormat!==void 0&&(p.internalFormat=c.internalFormat),c.type!==void 0&&(p.type=c.type),c.colorSpace!==void 0&&(p.colorSpace=c.colorSpace),c.minFilter!==void 0&&(p.minFilter=n(c.minFilter,by)),c.magFilter!==void 0&&(p.magFilter=n(c.magFilter,by)),c.anisotropy!==void 0&&(p.anisotropy=c.anisotropy),c.flipY!==void 0&&(p.flipY=c.flipY),c.generateMipmaps!==void 0&&(p.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(p.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(p.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(p.compareFunction=c.compareFunction),c.normalized!==void 0&&(p.normalized=c.normalized),c.userData!==void 0&&(p.userData=c.userData),r[c.uuid]=p}return r}parseObject(e,t,n,r,o){let l;function c(g){return t[g]===void 0&&Be("ObjectLoader: Undefined geometry",g),t[g]}function f(g){if(g!==void 0){if(Array.isArray(g)){const _=[];for(let y=0,M=g.length;y<M;y++){const S=g[y];n[S]===void 0&&Be("ObjectLoader: Undefined material",S),_.push(n[S])}return _}return n[g]===void 0&&Be("ObjectLoader: Undefined material",g),n[g]}}function h(g){return r[g]===void 0&&Be("ObjectLoader: Undefined texture",g),r[g]}let p,m;switch(e.type){case"Scene":l=new s0,e.background!==void 0&&(Number.isInteger(e.background)?l.background=new be(e.background):l.background=h(e.background)),e.environment!==void 0&&(l.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?l.fog=new cd(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(l.fog=new ld(e.fog.color,e.fog.density)),e.fog.name!==""&&(l.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(l.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(l.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&l.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(l.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&l.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":l=new jn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(l.focus=e.focus),e.zoom!==void 0&&(l.zoom=e.zoom),e.filmGauge!==void 0&&(l.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(l.filmOffset=e.filmOffset),e.view!==void 0&&(l.view=Object.assign({},e.view));break;case"OrthographicCamera":l=new gl(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(l.zoom=e.zoom),e.view!==void 0&&(l.view=Object.assign({},e.view));break;case"AmbientLight":l=new rM(e.color,e.intensity);break;case"DirectionalLight":l=new iM(e.color,e.intensity),l.target=e.target||"";break;case"PointLight":l=new nM(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":l=new sM(e.color,e.intensity,e.width,e.height);break;case"SpotLight":l=new tM(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),l.target=e.target||"";break;case"HemisphereLight":l=new eM(e.color,e.groundColor,e.intensity);break;case"LightProbe":const g=new E0().fromArray(e.sh);l=new aM(g,e.intensity);break;case"SkinnedMesh":p=c(e.geometry),m=f(e.material),l=new _S(p,m),e.bindMode!==void 0&&(l.bindMode=e.bindMode),e.bindMatrix!==void 0&&l.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(l.skeleton=e.skeleton);break;case"Mesh":p=c(e.geometry),m=f(e.material),l=new Dn(p,m);break;case"InstancedMesh":p=c(e.geometry),m=f(e.material);const _=e.count,y=e.instanceMatrix,M=e.instanceColor;l=new xS(p,m,_),l.instanceMatrix=new al(new Float32Array(y.array),16),M!==void 0&&(l.instanceColor=new al(new Float32Array(M.array),M.itemSize));break;case"BatchedMesh":p=c(e.geometry),m=f(e.material),l=new yS(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,m),l.geometry=p,l.perObjectFrustumCulled=e.perObjectFrustumCulled,l.sortObjects=e.sortObjects,l._drawRanges=e.drawRanges,l._reservedRanges=e.reservedRanges,l._geometryInfo=e.geometryInfo.map(S=>{let b=null,w=null;return S.boundingBox!==void 0&&(b=new ci().fromJSON(S.boundingBox)),S.boundingSphere!==void 0&&(w=new gn().fromJSON(S.boundingSphere)),{...S,boundingBox:b,boundingSphere:w}}),l._instanceInfo=e.instanceInfo,l._availableInstanceIds=e._availableInstanceIds,l._availableGeometryIds=e._availableGeometryIds,l._nextIndexStart=e.nextIndexStart,l._nextVertexStart=e.nextVertexStart,l._geometryCount=e.geometryCount,l._maxInstanceCount=e.maxInstanceCount,l._maxVertexCount=e.maxVertexCount,l._maxIndexCount=e.maxIndexCount,l._geometryInitialized=e.geometryInitialized,l._matricesTexture=h(e.matricesTexture.uuid),l._indirectTexture=h(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(l._colorsTexture=h(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(l.boundingSphere=new gn().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(l.boundingBox=new ci().fromJSON(e.boundingBox));break;case"LOD":l=new vS;break;case"Line":l=new js(c(e.geometry),f(e.material));break;case"LineLoop":l=new bS(c(e.geometry),f(e.material));break;case"LineSegments":l=new Xr(c(e.geometry),f(e.material));break;case"PointCloud":case"Points":l=new SS(c(e.geometry),f(e.material));break;case"Sprite":l=new gS(f(e.material));break;case"Group":l=new jo;break;case"Bone":l=new c0;break;default:l=new Bt}if(l.uuid=e.uuid,e.name!==void 0&&(l.name=e.name),e.matrix!==void 0?(l.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(l.matrixAutoUpdate=e.matrixAutoUpdate),l.matrixAutoUpdate&&l.matrix.decompose(l.position,l.quaternion,l.scale)):(e.position!==void 0&&l.position.fromArray(e.position),e.rotation!==void 0&&l.rotation.fromArray(e.rotation),e.quaternion!==void 0&&l.quaternion.fromArray(e.quaternion),e.scale!==void 0&&l.scale.fromArray(e.scale)),e.up!==void 0&&l.up.fromArray(e.up),e.pivot!==void 0&&(l.pivot=new O().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(l.castShadow=e.castShadow),e.receiveShadow!==void 0&&(l.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(l.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(l.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(l.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(l.shadow.radius=e.shadow.radius),e.shadow.blurSamples!==void 0&&(l.shadow.blurSamples=e.shadow.blurSamples),e.shadow.focus!==void 0&&(l.shadow.focus=e.shadow.focus),e.shadow.aspect!==void 0&&(l.shadow.aspect=e.shadow.aspect),e.shadow.mapSize!==void 0&&l.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(l.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(l.visible=e.visible),e.frustumCulled!==void 0&&(l.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(l.renderOrder=e.renderOrder),e.static!==void 0&&(l.static=e.static),e.userData!==void 0&&(l.userData=e.userData),e.layers!==void 0&&(l.layers.mask=e.layers),e.children!==void 0){const g=e.children;for(let _=0;_<g.length;_++)l.add(this.parseObject(g[_],t,n,r,o))}if(e.animations!==void 0){const g=e.animations;for(let _=0;_<g.length;_++){const y=g[_];l.animations.push(o[y])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(l.autoUpdate=e.autoUpdate);const g=e.levels;for(let _=0;_<g.length;_++){const y=g[_],M=l.getObjectByProperty("uuid",y.object);M!==void 0&&l.addLevel(M,y.distance,y.hysteresis)}}return l}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const r=t[n.skeleton];r===void 0?Be("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(r,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,r=e.getObjectByProperty("uuid",n);r!==void 0?t.target=r:t.target=new Bt}})}}const FC={UVMapping:$h,CubeReflectionMapping:Gr,CubeRefractionMapping:Xs,EquirectangularReflectionMapping:mc,EquirectangularRefractionMapping:gc,CubeUVReflectionMapping:hl},yy={RepeatWrapping:Ac,ClampToEdgeWrapping:Pi,MirroredRepeatWrapping:Cc},by={NearestFilter:An,NearestMipmapNearestFilter:$g,NearestMipmapLinearFilter:qo,LinearFilter:fn,LinearMipmapNearestFilter:vc,LinearMipmapLinearFilter:kr},qm=new WeakMap;class OC extends Ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=Vr.get(`image-bitmap:${e}`);if(l!==void 0){if(o.manager.itemStart(e),l.then){l.then(h=>{qm.has(l)===!0?(r&&r(qm.get(l)),o.manager.itemError(e),o.manager.itemEnd(e)):(t&&t(h),o.manager.itemEnd(e))});return}setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0);return}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader,c.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const f=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign({},o.options,{colorSpaceConversion:"none"}))}).then(function(h){return Vr.add(`image-bitmap:${e}`,h),t&&t(h),o.manager.itemEnd(e),h}).catch(function(h){r&&r(h),qm.set(f,h),Vr.remove(`image-bitmap:${e}`),o.manager.itemError(e),o.manager.itemEnd(e)});Vr.add(`image-bitmap:${e}`,f),o.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Df;class A0{static getContext(){return Df===void 0&&(Df=new(window.AudioContext||window.webkitAudioContext)),Df}static setContext(e){Df=e}}class BC extends Ni{constructor(e){super(e)}load(e,t,n,r){const o=this,l=new vs(this.manager);l.setResponseType("arraybuffer"),l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(f){try{const h=f.slice(0),p=A0.getContext(),m=e+"#decode";o.manager.itemStart(m),p.decodeAudioData(h,function(g){t(g),o.manager.itemEnd(m)}).catch(function(g){c(g),o.manager.itemEnd(m)})}catch(h){c(h)}},n,r);function c(f){r?r(f):st(f),o.manager.itemError(e)}}}const Sy=new _t,My=new _t,wa=new _t;class zC{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new jn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new jn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,wa.copy(e.projectionMatrix);const r=t.eyeSep/2,o=r*t.near/t.focus,l=t.near*Math.tan(Fa*t.fov*.5)/t.zoom;let c,f;My.elements[12]=-r,Sy.elements[12]=r,c=-l*t.aspect+o,f=l*t.aspect+o,wa.elements[0]=2*t.near/(f-c),wa.elements[8]=(f+c)/(f-c),this.cameraL.projectionMatrix.copy(wa),c=-l*t.aspect-o,f=l*t.aspect-o,wa.elements[0]=2*t.near/(f-c),wa.elements[8]=(f+c)/(f-c),this.cameraR.projectionMatrix.copy(wa)}this.cameraL.matrix.copy(e.matrixWorld).multiply(My),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(Sy),this.cameraR.matrixWorldNeedsUpdate=!0}}const Bo=-90,zo=1;class cM extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jn(Bo,zo,e,t);r.layers=this.layers,this.add(r);const o=new jn(Bo,zo,e,t);o.layers=this.layers,this.add(o);const l=new jn(Bo,zo,e,t);l.layers=this.layers,this.add(l);const c=new jn(Bo,zo,e,t);c.layers=this.layers,this.add(c);const f=new jn(Bo,zo,e,t);f.layers=this.layers,this.add(f);const h=new jn(Bo,zo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,l,c,f]=t;for(const h of t)this.remove(h);if(e===qi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,c,f,h,p]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,2,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(n,4,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(m,g,_),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class uM extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class fM{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=kC.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function kC(){this._document.hidden===!1&&this.reset()}const Ta=new O,Ym=new _i,VC=new O,Ea=new O,Aa=new O;class HC extends Bt{constructor(){super(),this.type="AudioListener",this.context=A0.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new fM}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Ta,Ym,VC),Ea.set(0,0,-1).applyQuaternion(Ym),Aa.set(0,1,0).applyQuaternion(Ym),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ta.x,n),t.positionY.linearRampToValueAtTime(Ta.y,n),t.positionZ.linearRampToValueAtTime(Ta.z,n),t.forwardX.linearRampToValueAtTime(Ea.x,n),t.forwardY.linearRampToValueAtTime(Ea.y,n),t.forwardZ.linearRampToValueAtTime(Ea.z,n),t.upX.linearRampToValueAtTime(Aa.x,n),t.upY.linearRampToValueAtTime(Aa.y,n),t.upZ.linearRampToValueAtTime(Aa.z,n)}else t.setPosition(Ta.x,Ta.y,Ta.z),t.setOrientation(Ea.x,Ea.y,Ea.z,Aa.x,Aa.y,Aa.z)}}class hM extends Bt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){Be("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Be("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Be("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){Be("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){Be("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Be("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){Be("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(Be("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Ca=new O,wy=new _i,GC=new O,Ra=new O;class WC extends hM{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ca,wy,GC),Ra.set(0,0,1).applyQuaternion(wy);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ca.x,n),t.positionY.linearRampToValueAtTime(Ca.y,n),t.positionZ.linearRampToValueAtTime(Ca.z,n),t.orientationX.linearRampToValueAtTime(Ra.x,n),t.orientationY.linearRampToValueAtTime(Ra.y,n),t.orientationZ.linearRampToValueAtTime(Ra.z,n)}else t.setPosition(Ca.x,Ca.y,Ca.z),t.setOrientation(Ra.x,Ra.y,Ra.z)}}class XC{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class dM{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,o,l;switch(t){case"quaternion":r=this._slerp,o=this._slerpAdditive,l=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,o=this._select,l=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,o=this._lerpAdditive,l=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=o,this._setIdentity=l,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,o=e*r+r;let l=this.cumulativeWeight;if(l===0){for(let c=0;c!==r;++c)n[o+c]=n[c];l=t}else{l+=t;const c=t/l;this._mixBufferRegion(n,o,0,c,r)}this.cumulativeWeight=l}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,o=this.cumulativeWeight,l=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,o<1){const f=t*this._origIndex;this._mixBufferRegion(n,r,f,1-o,t)}l>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let f=t,h=t+t;f!==h;++f)if(n[f]!==n[f+t]){c.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let o=n,l=r;o!==l;++o)t[o]=t[r+o%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,o){if(r>=.5)for(let l=0;l!==o;++l)e[t+l]=e[n+l]}_slerp(e,t,n,r){_i.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,o){const l=this._workIndex*o;_i.multiplyQuaternionsFlat(e,l,e,t,e,n),_i.slerpFlat(e,t,e,t,e,l,r)}_lerp(e,t,n,r,o){const l=1-r;for(let c=0;c!==o;++c){const f=t+c;e[f]=e[f]*l+e[n+c]*r}}_lerpAdditive(e,t,n,r,o){for(let l=0;l!==o;++l){const c=t+l;e[c]=e[c]+e[n+l]*r}}}const C0="\\[\\]\\.:\\/",qC=new RegExp("["+C0+"]","g"),R0="[^"+C0+"]",YC="[^"+C0.replace("\\.","")+"]",jC=/((?:WC+[\/:])*)/.source.replace("WC",R0),$C=/(WCOD+)?/.source.replace("WCOD",YC),ZC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",R0),JC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",R0),KC=new RegExp("^"+jC+$C+ZC+JC+"$"),QC=["material","materials","bones","map"];class e3{constructor(e,t,n){const r=n||Xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Xt{constructor(e,t,n){this.path=t,this.parsedPath=n||Xt.parseTrackName(t),this.node=Xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Xt.Composite(e,t,n):new Xt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qC,"")}static parseTrackName(e){const t=KC.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const o=n.nodeName.substring(r+1);QC.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(o){for(let l=0;l<o.length;l++){const c=o[l];if(c.name===t||c.uuid===t)return c;const f=n(c.children);if(f)return f}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let o=t.propertyIndex;if(e||(e=Xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){st("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){st("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){st("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){st("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){st("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const l=e[r];if(l===void 0){const h=t.nodeName;st("PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}f=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(f=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Xt.Composite=e3;Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class t3{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Yi(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,r=arguments.length;n!==r;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,r=this._parsedPaths,o=this._bindings,l=o.length;let c,f=e.length,h=this.nCachedObjects_;for(let p=0,m=arguments.length;p!==m;++p){const g=arguments[p],_=g.uuid;let y=t[_];if(y===void 0){y=f++,t[_]=y,e.push(g);for(let M=0,S=l;M!==S;++M)o[M].push(new Xt(g,n[M],r[M]))}else if(y<h){c=e[y];const M=--h,S=e[M];t[S.uuid]=y,e[y]=S,t[_]=M,e[M]=g;for(let b=0,w=l;b!==w;++b){const R=o[b],T=R[M];let I=R[y];R[y]=T,I===void 0&&(I=new Xt(g,n[b],r[b])),R[M]=I}}else e[y]!==c&&st("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let o=this.nCachedObjects_;for(let l=0,c=arguments.length;l!==c;++l){const f=arguments[l],h=f.uuid,p=t[h];if(p!==void 0&&p>=o){const m=o++,g=e[m];t[g.uuid]=p,e[p]=g,t[h]=m,e[m]=f;for(let _=0,y=r;_!==y;++_){const M=n[_],S=M[m],b=M[p];M[p]=S,M[m]=b}}}this.nCachedObjects_=o}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let o=this.nCachedObjects_,l=e.length;for(let c=0,f=arguments.length;c!==f;++c){const h=arguments[c],p=h.uuid,m=t[p];if(m!==void 0)if(delete t[p],m<o){const g=--o,_=e[g],y=--l,M=e[y];m!==g&&(t[_.uuid]=m),e[m]=_,g!==y&&(t[M.uuid]=g),e[g]=M,e.pop();for(let S=0,b=r;S!==b;++S){const w=n[S],R=w[g],T=w[y];w[m]=R,w[g]=T,w.pop()}}else{const g=--l,_=e[g];m!==g&&(t[_.uuid]=m),e[m]=_,e.pop();for(let y=0,M=r;y!==M;++y){const S=n[y];S[m]=S[g],S.pop()}}}this.nCachedObjects_=o}subscribe_(e,t){const n=this._bindingsIndicesByPath;let r=n[e];const o=this._bindings;if(r!==void 0)return o[r];const l=this._paths,c=this._parsedPaths,f=this._objects,h=f.length,p=this.nCachedObjects_,m=new Array(h);r=o.length,n[e]=r,l.push(e),c.push(t),o.push(m);for(let g=p,_=f.length;g!==_;++g){const y=f[g];m[g]=new Xt(y,e,t)}return m}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const r=this._paths,o=this._parsedPaths,l=this._bindings,c=l.length-1,f=l[c],h=r[c];t[h]=n,l[n]=f,l.pop(),o[n]=o[c],o.pop(),r[n]=r[c],r.pop()}}}class pM{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const o=t.tracks,l=o.length,c=new Array(l),f={endingStart:Na,endingEnd:Na};for(let h=0;h!==l;++h){const p=o[h].createInterpolant(null);c[h]=p,p.settings=f}this._interpolantSettings=f,this._interpolants=c,this._propertyBindings=new Array(l),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Qb,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const r=this._clip.duration,o=e._clip.duration,l=o/r,c=r/o;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,l,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,o=r.time,l=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=r._lendControlInterpolant(),this._timeScaleInterpolant=c);const f=c.parameterPositions,h=c.sampleValues;return f[0]=o,f[1]=o+n,h[0]=e/l,h[1]=t/l,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const o=this._startTime;if(o!==null){const f=(e-o)*n;f<0||n===0?t=0:(this._startTime=null,t=n*f)}t*=this._updateTimeScale(e);const l=this._updateTime(t),c=this._updateWeight(e);if(c>0){const f=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case n0:for(let p=0,m=f.length;p!==m;++p)f[p].evaluate(l),h[p].accumulateAdditive(c);break;case nd:default:for(let p=0,m=f.length;p!==m;++p)f[p].evaluate(l),h[p].accumulate(r,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,o=this._loopCount;const l=n===eS;if(e===0)return o===-1?r:l&&(o&1)===1?t-r:r;if(n===Kb){o===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(o===-1&&(e>=0?(o=0,this._setEndings(!0,this.repetitions===0,l)):this._setEndings(this.repetitions===0,!0,l)),r>=t||r<0){const c=Math.floor(r/t);r-=t*c,o+=Math.abs(c);const f=this.repetitions-o;if(f<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(f===1){const h=e<0;this._setEndings(h,!h,l)}else this._setEndings(!1,!1,l);this._loopCount=o,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this._loopCount=o,this.time=r;if(l&&(o&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=Da,r.endingEnd=Da):(e?r.endingStart=this.zeroSlopeAtStart?Da:Na:r.endingStart=Lc,t?r.endingEnd=this.zeroSlopeAtEnd?Da:Na:r.endingEnd=Lc)}_scheduleFading(e,t,n){const r=this._mixer,o=r.time;let l=this._weightInterpolant;l===null&&(l=r._lendControlInterpolant(),this._weightInterpolant=l);const c=l.parameterPositions,f=l.sampleValues;return c[0]=o,f[0]=t,c[1]=o+e,f[1]=n,this}}const n3=new Float32Array(1);class i3 extends Mr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,o=r.length,l=e._propertyBindings,c=e._interpolants,f=n.uuid,h=this._bindingsByRootAndName;let p=h[f];p===void 0&&(p={},h[f]=p);for(let m=0;m!==o;++m){const g=r[m],_=g.name;let y=p[_];if(y!==void 0)++y.referenceCount,l[m]=y;else{if(y=l[m],y!==void 0){y._cacheIndex===null&&(++y.referenceCount,this._addInactiveBinding(y,f,_));continue}const M=t&&t._propertyBindings[m].binding.parsedPath;y=new dM(Xt.create(n,_,M),g.ValueTypeName,g.getValueSize()),++y.referenceCount,this._addInactiveBinding(y,f,_),l[m]=y}c[m].resultBuffer=y.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,o=this._actionsByClip[r];this._bindAction(e,o&&o.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const o=t[n];o.useCount++===0&&(this._lendBinding(o),o.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const o=t[n];--o.useCount===0&&(o.restoreOriginalState(),this._takeBackBinding(o))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,o=this._actionsByClip;let l=o[t];if(l===void 0)l={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,o[t]=l;else{const c=l.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=r.length,r.push(e),l.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const o=e._clip.uuid,l=this._actionsByClip,c=l[o],f=c.knownActions,h=f[f.length-1],p=e._byClipCacheIndex;h._byClipCacheIndex=p,f[p]=h,f.pop(),e._byClipCacheIndex=null;const m=c.actionByRoot,g=(e._localRoot||this._root).uuid;delete m[g],f.length===0&&delete l[o],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const o=t[n];--o.referenceCount===0&&this._removeInactiveBinding(o)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,o=t[r];e._cacheIndex=r,t[r]=e,o._cacheIndex=n,t[n]=o}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,o=t[r];e._cacheIndex=r,t[r]=e,o._cacheIndex=n,t[n]=o}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,o=this._bindings;let l=r[t];l===void 0&&(l={},r[t]=l),l[n]=e,e._cacheIndex=o.length,o.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,o=n.path,l=this._bindingsByRootAndName,c=l[r],f=t[t.length-1],h=e._cacheIndex;f._cacheIndex=h,t[h]=f,t.pop(),delete c[o],Object.keys(c).length===0&&delete l[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,o=t[r];e._cacheIndex=r,t[r]=e,o._cacheIndex=n,t[n]=o}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,o=t[r];e._cacheIndex=r,t[r]=e,o._cacheIndex=n,t[n]=o}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new S0(new Float32Array(2),new Float32Array(2),1,n3),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,o=t[r];e.__cacheIndex=r,t[r]=e,o.__cacheIndex=n,t[n]=o}clipAction(e,t,n){const r=t||this._root,o=r.uuid;let l=typeof e=="string"?kc.findByName(r,e):e;const c=l!==null?l.uuid:e,f=this._actionsByClip[c];let h=null;if(n===void 0&&(l!==null?n=l.blendMode:n=nd),f!==void 0){const m=f.actionByRoot[o];if(m!==void 0&&m.blendMode===n)return m;h=f.knownActions[0],l===null&&(l=h._clip)}if(l===null)return null;const p=new pM(this,l,t,n);return this._bindAction(p,h),this._addInactiveAction(p,c,o),p}existingAction(e,t){const n=t||this._root,r=n.uuid,o=typeof e=="string"?kc.findByName(n,e):e,l=o?o.uuid:e,c=this._actionsByClip[l];return c!==void 0&&c.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,o=Math.sign(e),l=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(r,e,o,l);const c=this._bindings,f=this._nActiveBindings;for(let h=0;h!==f;++h)c[h].apply(l);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,o=r[n];if(o!==void 0){const l=o.knownActions;for(let c=0,f=l.length;c!==f;++c){const h=l[c];this._deactivateAction(h);const p=h._cacheIndex,m=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,m._cacheIndex=p,t[p]=m,t.pop(),this._removeInactiveBindingsForAction(h)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const l in n){const c=n[l].actionByRoot,f=c[t];f!==void 0&&(this._deactivateAction(f),this._removeInactiveAction(f))}const r=this._bindingsByRootAndName,o=r[t];if(o!==void 0)for(const l in o){const c=o[l];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class r3 extends r0{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isRenderTarget3D=!0,this.depth=n;for(let o=0;o<this.textures.length;o++){const l=new od(null,e,t,n);l.isRenderTargetTexture=!0,l.renderTarget=this,this.textures[o]=l}this._setTextureOptions(r)}}class P0{constructor(e){this.value=e}clone(){return new P0(this.value.clone===void 0?this.value:this.value.clone())}}let s3=0;class a3 extends Mr{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:s3++}),this.name="",this.usage=sd,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,r=t.length;n<r;n++){const o=Array.isArray(t[n])?t[n]:[t[n]];for(let l=0;l<o.length;l++)this.uniforms.push(o[l].clone())}return this}clone(){return new this.constructor().copy(this)}}class o3 extends ud{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class l3{constructor(e,t,n,r,o,l=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=o,this.normalized=l,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Ty=new _t;class mM{constructor(e,t,n=0,r=1/0){this.ray=new dl(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):st("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ty.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ty),this}intersectObject(e,t=!0,n=[]){return Pg(e,this,n,t),n.sort(Ey),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)Pg(e[r],this,n,t);return n.sort(Ey),n}}function Ey(s,e){return s.distance-e.distance}function Pg(s,e,t,n){let r=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const o=s.children;for(let l=0,c=o.length;l<c;l++)Pg(o[l],e,t,!0)}}class gM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Be("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class c3{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class u3{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class I0{static{I0.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const o=this.elements;return o[0]=e,o[2]=t,o[1]=n,o[3]=r,this}}const Ay=new _e;class vM{constructor(e=new _e(1/0,1/0),t=new _e(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ay.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ay).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cy=new O,Uf=new O,ko=new O,Vo=new O,jm=new O,f3=new O,h3=new O;class d3{constructor(e=new O,t=new O){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Cy.subVectors(e,this.start),Uf.subVectors(this.end,this.start);const n=Uf.dot(Uf);if(n===0)return 0;let o=Uf.dot(Cy)/n;return t&&(o=gt(o,0,1)),o}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=f3,n=h3){const r=10000000000000001e-32;let o,l;const c=this.start,f=e.start,h=this.end,p=e.end;ko.subVectors(h,c),Vo.subVectors(p,f),jm.subVectors(c,f);const m=ko.dot(ko),g=Vo.dot(Vo),_=Vo.dot(jm);if(m<=r&&g<=r)return t.copy(c),n.copy(f),t.sub(n),t.dot(t);if(m<=r)o=0,l=_/g,l=gt(l,0,1);else{const y=ko.dot(jm);if(g<=r)l=0,o=gt(-y/m,0,1);else{const M=ko.dot(Vo),S=m*g-M*M;S!==0?o=gt((M*_-y*g)/S,0,1):o=0,l=(M*o+_)/g,l<0?(l=0,o=gt(-y/m,0,1)):l>1&&(l=1,o=gt((M-y)/m,0,1))}}return t.copy(c).addScaledVector(ko,o),n.copy(f).addScaledVector(Vo,l),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Ry=new O;class p3 extends Bt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new pt,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let l=0,c=1,f=32;l<f;l++,c++){const h=l/f*Math.PI*2,p=c/f*Math.PI*2;r.push(Math.cos(h),Math.sin(h),1,Math.cos(p),Math.sin(p),1)}n.setAttribute("position",new $e(r,3));const o=new xi({fog:!1,toneMapped:!1});this.cone=new Xr(n,o),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Ry.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Ry),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const ks=new O,Ff=new _t,$m=new _t;class m3 extends Xr{constructor(e){const t=_M(e),n=new pt,r=[],o=[];for(let h=0;h<t.length;h++){const p=t[h];p.parent&&p.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),o.push(0,0,0),o.push(0,0,0))}n.setAttribute("position",new $e(r,3)),n.setAttribute("color",new $e(o,3));const l=new xi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const c=new be(255),f=new be(65280);this.setColors(c,f)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,r=n.getAttribute("position");$m.copy(this.root.matrixWorld).invert();for(let o=0,l=0;o<t.length;o++){const c=t[o];c.parent&&c.parent.isBone&&(Ff.multiplyMatrices($m,c.matrixWorld),ks.setFromMatrixPosition(Ff),r.setXYZ(l,ks.x,ks.y,ks.z),Ff.multiplyMatrices($m,c.parent.matrixWorld),ks.setFromMatrixPosition(Ff),r.setXYZ(l+1,ks.x,ks.y,ks.z),l+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const r=this.geometry.getAttribute("color");for(let o=0;o<r.count;o+=2)r.setXYZ(o,e.r,e.g,e.b),r.setXYZ(o+1,t.r,t.g,t.b);return r.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function _M(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(..._M(s.children[t]));return e}class g3 extends Dn{constructor(e,t,n){const r=new Kc(t,4,2),o=new $s({wireframe:!0,fog:!1,toneMapped:!1});super(r,o),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const v3=new O,Py=new be,Iy=new be;class _3 extends Bt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const r=new Jc(t);r.rotateY(Math.PI*.5),this.material=new $s({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const o=r.getAttribute("position"),l=new Float32Array(o.count*3);r.setAttribute("color",new ct(l,3)),this.add(new Dn(r,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Py.copy(this.light.color),Iy.copy(this.light.groundColor);for(let n=0,r=t.count;n<r;n++){const o=n<r/2?Py:Iy;t.setXYZ(n,o.r,o.g,o.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(v3.setFromMatrixPosition(this.light.matrixWorld).negate())}}class x3 extends Xr{constructor(e=10,t=10,n=4473924,r=8947848){n=new be(n),r=new be(r);const o=t/2,l=e/t,c=e/2,f=[],h=[];for(let g=0,_=0,y=-c;g<=t;g++,y+=l){f.push(-c,0,y,c,0,y),f.push(y,0,-c,y,0,c);const M=g===o?n:r;M.toArray(h,_),_+=3,M.toArray(h,_),_+=3,M.toArray(h,_),_+=3,M.toArray(h,_),_+=3}const p=new pt;p.setAttribute("position",new $e(f,3)),p.setAttribute("color",new $e(h,3));const m=new xi({vertexColors:!0,toneMapped:!1});super(p,m),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class y3 extends Xr{constructor(e=10,t=16,n=8,r=64,o=4473924,l=8947848){o=new be(o),l=new be(l);const c=[],f=[];if(t>1)for(let m=0;m<t;m++){const g=m/t*(Math.PI*2),_=Math.sin(g)*e,y=Math.cos(g)*e;c.push(0,0,0),c.push(_,0,y);const M=m&1?o:l;f.push(M.r,M.g,M.b),f.push(M.r,M.g,M.b)}for(let m=0;m<n;m++){const g=m&1?o:l,_=e-e/n*m;for(let y=0;y<r;y++){let M=y/r*(Math.PI*2),S=Math.sin(M)*_,b=Math.cos(M)*_;c.push(S,0,b),f.push(g.r,g.g,g.b),M=(y+1)/r*(Math.PI*2),S=Math.sin(M)*_,b=Math.cos(M)*_,c.push(S,0,b),f.push(g.r,g.g,g.b)}}const h=new pt;h.setAttribute("position",new $e(c,3)),h.setAttribute("color",new $e(f,3));const p=new xi({vertexColors:!0,toneMapped:!1});super(h,p),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}const Ly=new O,Of=new O,Ny=new O;class b3 extends Bt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new pt;r.setAttribute("position",new $e([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const o=new xi({fog:!1,toneMapped:!1});this.lightPlane=new js(r,o),this.add(this.lightPlane),r=new pt,r.setAttribute("position",new $e([0,0,0,0,0,1],3)),this.targetLine=new js(r,o),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Ly.setFromMatrixPosition(this.light.matrixWorld),Of.setFromMatrixPosition(this.light.target.matrixWorld),Ny.subVectors(Of,Ly),this.lightPlane.lookAt(Of),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Of),this.targetLine.scale.z=Ny.length()}}const Bf=new O,wn=new Rd;class S3 extends Xr{constructor(e){const t=new pt,n=new xi({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],o=[],l={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(y,M){f(y),f(M)}function f(y){r.push(0,0,0),o.push(0,0,0),l[y]===void 0&&(l[y]=[]),l[y].push(r.length/3-1)}t.setAttribute("position",new $e(r,3)),t.setAttribute("color",new $e(o,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=l,this.update();const h=new be(16755200),p=new be(16711680),m=new be(43775),g=new be(16777215),_=new be(3355443);this.setColors(h,p,m,g,_)}setColors(e,t,n,r,o){const c=this.geometry.getAttribute("color");return c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,r.r,r.g,r.b),c.setXYZ(39,r.r,r.g,r.b),c.setXYZ(40,o.r,o.g,o.b),c.setXYZ(41,o.r,o.g,o.b),c.setXYZ(42,o.r,o.g,o.b),c.setXYZ(43,o.r,o.g,o.b),c.setXYZ(44,o.r,o.g,o.b),c.setXYZ(45,o.r,o.g,o.b),c.setXYZ(46,o.r,o.g,o.b),c.setXYZ(47,o.r,o.g,o.b),c.setXYZ(48,o.r,o.g,o.b),c.setXYZ(49,o.r,o.g,o.b),c.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,r=1;let o,l;if(wn.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)o=1,l=0;else if(this.camera.coordinateSystem===qi)o=-1,l=1;else if(this.camera.coordinateSystem===Oa)o=0,l=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);En("c",t,e,wn,0,0,o),En("t",t,e,wn,0,0,l),En("n1",t,e,wn,-n,-r,o),En("n2",t,e,wn,n,-r,o),En("n3",t,e,wn,-n,r,o),En("n4",t,e,wn,n,r,o),En("f1",t,e,wn,-n,-r,l),En("f2",t,e,wn,n,-r,l),En("f3",t,e,wn,-n,r,l),En("f4",t,e,wn,n,r,l),En("u1",t,e,wn,n*.7,r*1.1,o),En("u2",t,e,wn,-n*.7,r*1.1,o),En("u3",t,e,wn,0,r*2,o),En("cf1",t,e,wn,-n,0,l),En("cf2",t,e,wn,n,0,l),En("cf3",t,e,wn,0,-r,l),En("cf4",t,e,wn,0,r,l),En("cn1",t,e,wn,-n,0,o),En("cn2",t,e,wn,n,0,o),En("cn3",t,e,wn,0,-r,o),En("cn4",t,e,wn,0,r,o),e.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function En(s,e,t,n,r,o,l){Bf.set(r,o,l).unproject(n);const c=e[s];if(c!==void 0){const f=t.getAttribute("position");for(let h=0,p=c.length;h<p;h++)f.setXYZ(c[h],Bf.x,Bf.y,Bf.z)}}const zf=new ci;class M3 extends Xr{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(24),o=new pt;o.setIndex(new ct(n,1)),o.setAttribute("position",new ct(r,3)),super(o,new xi({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&zf.setFromObject(this.object),zf.isEmpty())return;const e=zf.min,t=zf.max,n=this.geometry.attributes.position,r=n.array;r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=e.x,r[4]=t.y,r[5]=t.z,r[6]=e.x,r[7]=e.y,r[8]=t.z,r[9]=t.x,r[10]=e.y,r[11]=t.z,r[12]=t.x,r[13]=t.y,r[14]=e.z,r[15]=e.x,r[16]=t.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=t.x,r[22]=e.y,r[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class w3 extends Xr{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],o=new pt;o.setIndex(new ct(n,1)),o.setAttribute("position",new $e(r,3)),super(o,new xi({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class T3 extends js{constructor(e,t=1,n=16776960){const r=n,o=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],l=new pt;l.setAttribute("position",new $e(o,3)),l.computeBoundingSphere(),super(l,new xi({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],f=new pt;f.setAttribute("position",new $e(c,3)),f.computeBoundingSphere(),this.add(new Dn(f,new $s({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Dy=new O;let kf,Zm;class E3 extends Bt{constructor(e=new O(0,0,1),t=new O(0,0,0),n=1,r=16776960,o=n*.2,l=o*.2){super(),this.type="ArrowHelper",kf===void 0&&(kf=new pt,kf.setAttribute("position",new $e([0,0,0,0,1,0],3)),Zm=new $c(.5,1,5,1),Zm.translate(0,-.5,0)),this.position.copy(t),this.line=new js(kf,new xi({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Dn(Zm,new $s({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,o,l)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Dy.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Dy,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class A3 extends Xr{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new pt;r.setAttribute("position",new $e(t,3)),r.setAttribute("color",new $e(n,3));const o=new xi({vertexColors:!0,toneMapped:!1});super(r,o),this.type="AxesHelper"}setColors(e,t,n){const r=new be,o=this.geometry.attributes.color.array;return r.set(e),r.toArray(o,0),r.toArray(o,3),r.set(t),r.toArray(o,6),r.toArray(o,9),r.set(n),r.toArray(o,12),r.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class C3{constructor(){this.type="ShapePath",this.color=new be,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new Fc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,o,l){return this.currentPath.bezierCurveTo(e,t,n,r,o,l),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(f,h){let p=!1;const m=h.length;for(let g=0,_=m-1;g<m;_=g++){const y=h[g],M=h[_];y.y>f.y!=M.y>f.y&&f.x<(M.x-y.x)*(f.y-y.y)/(M.y-y.y)+y.x&&(p=!p)}return p}function t(f,h){const p=h.getCenter(new _e);if(e(p,f))return p;const m=p.y,g=[],_=f.length;for(let y=0;y<_;y++){const M=f[y],S=f[(y+1)%_];if(M.y>m!=S.y>m){const b=M.x+(m-M.y)*(S.x-M.x)/(S.y-M.y);g.push(b)}}return g.length>1&&(g.sort((y,M)=>y-M),p.x=(g[0]+g[1])/2),p}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Be('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");const r=n==="nonzero"?(f=>f!==0):(f=>(f&1)!==0),o=[];for(const f of this.subPaths){const h=f.getPoints();if(h.length<3)continue;const p=yr.area(h);if(p===0)continue;const m=new vM;for(let g=0;g<h.length;g++)m.expandByPoint(h[g]);o.push({subPath:f,points:h,boundingBox:m,interiorPoint:t(h,m),absArea:Math.abs(p),winding:p<0?-1:1,container:null,exclude:!1,role:null})}o.sort((f,h)=>h.absArea-f.absArea);for(let f=0;f<o.length;f++){const h=o[f];let p=0;for(let m=f-1;m>=0;m--){const g=o[m];if(g.boundingBox.containsBox(h.boundingBox)&&e(h.interiorPoint,g.points)){h.container=g.exclude?g.container:g,p=g.winding,h.winding+=p;break}}r(h.winding)===r(p)&&(h.exclude=!0)}for(const f of o)f.exclude||(f.role=f.container===null||f.container.role==="hole"?"outer":"hole");const l=[],c=new Map;for(const f of o){if(f.exclude||f.role!=="outer")continue;const h=new Zc;h.curves=f.subPath.curves,l.push(h),c.set(f,h)}for(const f of o){if(f.exclude||f.role!=="hole")continue;const h=c.get(f.container);if(!h)continue;const p=new Fc;p.curves=f.subPath.curves,h.holes.push(p)}return l}}class R3 extends Mr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function P3(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function I3(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function L3(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Ig(s,e,t,n){const r=N3(n);switch(t){case e0:return s*e;case Qh:return s*e/r.components*r.byteLength;case qc:return s*e/r.components*r.byteLength;case qs:return s*e*2/r.components*r.byteLength;case ed:return s*e*2/r.components*r.byteLength;case t0:return s*e*3/r.components*r.byteLength;case oi:return s*e*4/r.components*r.byteLength;case td:return s*e*4/r.components*r.byteLength;case _c:case xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yc:case bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case oh:case ch:return Math.max(s,16)*Math.max(e,8)/4;case ah:case lh:return Math.max(s,8)*Math.max(e,8)/2;case uh:case fh:case dh:case ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hh:case Rc:case mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _h:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case xh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case wh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Th:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ph:case Ih:case Lh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Nh:case Dh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Pc:case Uh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function N3(s){switch(s){case pi:case Zg:return{byteLength:1,components:1};case tl:case Jg:case br:return{byteLength:2,components:1};case Jh:case Kh:return{byteLength:2,components:4};case or:case Zh:case gi:return{byteLength:4,components:1};case Kg:case Qg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}class D3{static contain(e,t){return P3(e,t)}static cover(e,t){return I3(e,t)}static fill(e){return L3(e)}static getByteLength(e,t,n,r){return Ig(e,t,n,r)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);function xM(){let s=null,e=!1,t=null,n=null;function r(o,l){n=s.requestAnimationFrame(r),t(o,l)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(r),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function U3(s){const e=new WeakMap;function t(c,f){const h=c.array,p=c.usage,m=h.byteLength,g=s.createBuffer();s.bindBuffer(f,g),s.bufferData(f,h,p),c.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=s.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,f,h){const p=f.array,m=f.updateRanges;if(s.bindBuffer(h,c),m.length===0)s.bufferSubData(h,0,p);else{m.sort((_,y)=>_.start-y.start);let g=0;for(let _=1;_<m.length;_++){const y=m[g],M=m[_];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++g,m[g]=M)}m.length=g+1;for(let _=0,y=m.length;_<y;_++){const M=m[_];s.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(s.deleteBuffer(f.buffer),e.delete(c))}function l(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,f),h.version=c.version}}return{get:r,remove:o,update:l}}var F3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,B3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,V3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,G3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,X3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,q3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Z3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,J3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,K3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,sR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,lR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hR="gl_FragColor = linearToOutputTexel( gl_FragColor );",dR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,mR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_R=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ER=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,CR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,RR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,DR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BR=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,zR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$R=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,QR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_P=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,EP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,UP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,GP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,WP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,qP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$P=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eI=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tI=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nI=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rI=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sI=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oI=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lI=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hI=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,At={alphahash_fragment:F3,alphahash_pars_fragment:O3,alphamap_fragment:B3,alphamap_pars_fragment:z3,alphatest_fragment:k3,alphatest_pars_fragment:V3,aomap_fragment:H3,aomap_pars_fragment:G3,batching_pars_vertex:W3,batching_vertex:X3,begin_vertex:q3,beginnormal_vertex:Y3,bsdfs:j3,iridescence_fragment:$3,bumpmap_pars_fragment:Z3,clipping_planes_fragment:J3,clipping_planes_pars_fragment:K3,clipping_planes_pars_vertex:Q3,clipping_planes_vertex:eR,color_fragment:tR,color_pars_fragment:nR,color_pars_vertex:iR,color_vertex:rR,common:sR,cube_uv_reflection_fragment:aR,defaultnormal_vertex:oR,displacementmap_pars_vertex:lR,displacementmap_vertex:cR,emissivemap_fragment:uR,emissivemap_pars_fragment:fR,colorspace_fragment:hR,colorspace_pars_fragment:dR,envmap_fragment:pR,envmap_common_pars_fragment:mR,envmap_pars_fragment:gR,envmap_pars_vertex:vR,envmap_physical_pars_fragment:CR,envmap_vertex:_R,fog_vertex:xR,fog_pars_vertex:yR,fog_fragment:bR,fog_pars_fragment:SR,gradientmap_pars_fragment:MR,lightmap_pars_fragment:wR,lights_lambert_fragment:TR,lights_lambert_pars_fragment:ER,lights_pars_begin:AR,lights_toon_fragment:RR,lights_toon_pars_fragment:PR,lights_phong_fragment:IR,lights_phong_pars_fragment:LR,lights_physical_fragment:NR,lights_physical_pars_fragment:DR,lights_fragment_begin:UR,lights_fragment_maps:FR,lights_fragment_end:OR,lightprobes_pars_fragment:BR,logdepthbuf_fragment:zR,logdepthbuf_pars_fragment:kR,logdepthbuf_pars_vertex:VR,logdepthbuf_vertex:HR,map_fragment:GR,map_pars_fragment:WR,map_particle_fragment:XR,map_particle_pars_fragment:qR,metalnessmap_fragment:YR,metalnessmap_pars_fragment:jR,morphinstance_vertex:$R,morphcolor_vertex:ZR,morphnormal_vertex:JR,morphtarget_pars_vertex:KR,morphtarget_vertex:QR,normal_fragment_begin:eP,normal_fragment_maps:tP,normal_pars_fragment:nP,normal_pars_vertex:iP,normal_vertex:rP,normalmap_pars_fragment:sP,clearcoat_normal_fragment_begin:aP,clearcoat_normal_fragment_maps:oP,clearcoat_pars_fragment:lP,iridescence_pars_fragment:cP,opaque_fragment:uP,packing:fP,premultiplied_alpha_fragment:hP,project_vertex:dP,dithering_fragment:pP,dithering_pars_fragment:mP,roughnessmap_fragment:gP,roughnessmap_pars_fragment:vP,shadowmap_pars_fragment:_P,shadowmap_pars_vertex:xP,shadowmap_vertex:yP,shadowmask_pars_fragment:bP,skinbase_vertex:SP,skinning_pars_vertex:MP,skinning_vertex:wP,skinnormal_vertex:TP,specularmap_fragment:EP,specularmap_pars_fragment:AP,tonemapping_fragment:CP,tonemapping_pars_fragment:RP,transmission_fragment:PP,transmission_pars_fragment:IP,uv_pars_fragment:LP,uv_pars_vertex:NP,uv_vertex:DP,worldpos_vertex:UP,background_vert:FP,background_frag:OP,backgroundCube_vert:BP,backgroundCube_frag:zP,cube_vert:kP,cube_frag:VP,depth_vert:HP,depth_frag:GP,distance_vert:WP,distance_frag:XP,equirect_vert:qP,equirect_frag:YP,linedashed_vert:jP,linedashed_frag:$P,meshbasic_vert:ZP,meshbasic_frag:JP,meshlambert_vert:KP,meshlambert_frag:QP,meshmatcap_vert:eI,meshmatcap_frag:tI,meshnormal_vert:nI,meshnormal_frag:iI,meshphong_vert:rI,meshphong_frag:sI,meshphysical_vert:aI,meshphysical_frag:oI,meshtoon_vert:lI,meshtoon_frag:cI,points_vert:uI,points_frag:fI,shadow_vert:hI,shadow_frag:dI,sprite_vert:pI,sprite_frag:mI},He={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},xr={basic:{uniforms:hi([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:hi([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:hi([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:hi([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:hi([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new be(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:hi([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:hi([He.points,He.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:hi([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:hi([He.common,He.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:hi([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:hi([He.sprite,He.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:hi([He.common,He.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:hi([He.lights,He.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};xr.physical={uniforms:hi([xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const Vf={r:0,b:0,g:0},gI=new _t,yM=new bt;yM.set(-1,0,0,0,1,0,0,0,1);function vI(s,e,t,n,r,o){const l=new be(0);let c=r===!0?0:1,f,h,p=null,m=0,g=null;function _(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){const T=w.backgroundBlurriness>0;R=e.get(R,T)}return R}function y(w){let R=!1;const T=_(w);T===null?S(l,c):T&&T.isColor&&(S(T,1),R=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(s.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(w,R){const T=_(R);T&&(T.isCubeTexture||T.mapping===hl)?(h===void 0&&(h=new Dn(new Va(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:ul(xr.backgroundCube.uniforms),vertexShader:xr.backgroundCube.vertexShader,fragmentShader:xr.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gI.makeRotationFromEuler(R.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(yM),h.material.toneMapped=Lt.getTransfer(T.colorSpace)!==Qt,(p!==T||m!==T.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,p=T,m=T.version,g=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(f===void 0&&(f=new Dn(new pl(2,2),new Li({name:"BackgroundMaterial",uniforms:ul(xr.background.uniforms),vertexShader:xr.background.vertexShader,fragmentShader:xr.background.fragmentShader,side:Ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(f)),f.material.uniforms.t2D.value=T,f.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,f.material.toneMapped=Lt.getTransfer(T.colorSpace)!==Qt,T.matrixAutoUpdate===!0&&T.updateMatrix(),f.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||m!==T.version||g!==s.toneMapping)&&(f.material.needsUpdate=!0,p=T,m=T.version,g=s.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null))}function S(w,R){w.getRGB(Vf,OS(s)),t.buffers.color.setClear(Vf.r,Vf.g,Vf.b,R,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return l},setClearColor:function(w,R=1){l.set(w),c=R,S(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,S(l,c)},render:y,addToRenderList:M,dispose:b}}function _I(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},r=g(null);let o=r,l=!1;function c(B,G,Y,k,j){let H=!1;const q=m(B,k,Y,G);o!==q&&(o=q,h(o.object)),H=_(B,k,Y,j),H&&y(B,k,Y,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(H||l)&&(l=!1,T(B,G,Y,k),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function f(){return s.createVertexArray()}function h(B){return s.bindVertexArray(B)}function p(B){return s.deleteVertexArray(B)}function m(B,G,Y,k){const j=k.wireframe===!0;let H=n[G.id];H===void 0&&(H={},n[G.id]=H);const q=B.isInstancedMesh===!0?B.id:0;let ne=H[q];ne===void 0&&(ne={},H[q]=ne);let K=ne[Y.id];K===void 0&&(K={},ne[Y.id]=K);let oe=K[j];return oe===void 0&&(oe=g(f()),K[j]=oe),oe}function g(B){const G=[],Y=[],k=[];for(let j=0;j<t;j++)G[j]=0,Y[j]=0,k[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:k,object:B,attributes:{},index:null}}function _(B,G,Y,k){const j=o.attributes,H=G.attributes;let q=0;const ne=Y.getAttributes();for(const K in ne)if(ne[K].location>=0){const he=j[K];let qe=H[K];if(qe===void 0&&(K==="instanceMatrix"&&B.instanceMatrix&&(qe=B.instanceMatrix),K==="instanceColor"&&B.instanceColor&&(qe=B.instanceColor)),he===void 0||he.attribute!==qe||qe&&he.data!==qe.data)return!0;q++}return o.attributesNum!==q||o.index!==k}function y(B,G,Y,k){const j={},H=G.attributes;let q=0;const ne=Y.getAttributes();for(const K in ne)if(ne[K].location>=0){let he=H[K];he===void 0&&(K==="instanceMatrix"&&B.instanceMatrix&&(he=B.instanceMatrix),K==="instanceColor"&&B.instanceColor&&(he=B.instanceColor));const qe={};qe.attribute=he,he&&he.data&&(qe.data=he.data),j[K]=qe,q++}o.attributes=j,o.attributesNum=q,o.index=k}function M(){const B=o.newAttributes;for(let G=0,Y=B.length;G<Y;G++)B[G]=0}function S(B){b(B,0)}function b(B,G){const Y=o.newAttributes,k=o.enabledAttributes,j=o.attributeDivisors;Y[B]=1,k[B]===0&&(s.enableVertexAttribArray(B),k[B]=1),j[B]!==G&&(s.vertexAttribDivisor(B,G),j[B]=G)}function w(){const B=o.newAttributes,G=o.enabledAttributes;for(let Y=0,k=G.length;Y<k;Y++)G[Y]!==B[Y]&&(s.disableVertexAttribArray(Y),G[Y]=0)}function R(B,G,Y,k,j,H,q){q===!0?s.vertexAttribIPointer(B,G,Y,j,H):s.vertexAttribPointer(B,G,Y,k,j,H)}function T(B,G,Y,k){M();const j=k.attributes,H=Y.getAttributes(),q=G.defaultAttributeValues;for(const ne in H){const K=H[ne];if(K.location>=0){let oe=j[ne];if(oe===void 0&&(ne==="instanceMatrix"&&B.instanceMatrix&&(oe=B.instanceMatrix),ne==="instanceColor"&&B.instanceColor&&(oe=B.instanceColor)),oe!==void 0){const he=oe.normalized,qe=oe.itemSize,Ie=e.get(oe);if(Ie===void 0)continue;const et=Ie.buffer,rt=Ie.type,xt=Ie.bytesPerElement,le=rt===s.INT||rt===s.UNSIGNED_INT||oe.gpuType===Zh;if(oe.isInterleavedBufferAttribute){const fe=oe.data,Ne=fe.stride,at=oe.offset;if(fe.isInstancedInterleavedBuffer){for(let We=0;We<K.locationSize;We++)b(K.location+We,fe.meshPerAttribute);B.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let We=0;We<K.locationSize;We++)S(K.location+We);s.bindBuffer(s.ARRAY_BUFFER,et);for(let We=0;We<K.locationSize;We++)R(K.location+We,qe/K.locationSize,rt,he,Ne*xt,(at+qe/K.locationSize*We)*xt,le)}else{if(oe.isInstancedBufferAttribute){for(let fe=0;fe<K.locationSize;fe++)b(K.location+fe,oe.meshPerAttribute);B.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let fe=0;fe<K.locationSize;fe++)S(K.location+fe);s.bindBuffer(s.ARRAY_BUFFER,et);for(let fe=0;fe<K.locationSize;fe++)R(K.location+fe,qe/K.locationSize,rt,he,qe*xt,qe/K.locationSize*fe*xt,le)}}else if(q!==void 0){const he=q[ne];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(K.location,he);break;case 3:s.vertexAttrib3fv(K.location,he);break;case 4:s.vertexAttrib4fv(K.location,he);break;default:s.vertexAttrib1fv(K.location,he)}}}}w()}function I(){N();for(const B in n){const G=n[B];for(const Y in G){const k=G[Y];for(const j in k){const H=k[j];for(const q in H)p(H[q].object),delete H[q];delete k[j]}}delete n[B]}}function C(B){if(n[B.id]===void 0)return;const G=n[B.id];for(const Y in G){const k=G[Y];for(const j in k){const H=k[j];for(const q in H)p(H[q].object),delete H[q];delete k[j]}}delete n[B.id]}function D(B){for(const G in n){const Y=n[G];for(const k in Y){const j=Y[k];if(j[B.id]===void 0)continue;const H=j[B.id];for(const q in H)p(H[q].object),delete H[q];delete j[B.id]}}}function E(B){for(const G in n){const Y=n[G],k=B.isInstancedMesh===!0?B.id:0,j=Y[k];if(j!==void 0){for(const H in j){const q=j[H];for(const ne in q)p(q[ne].object),delete q[ne];delete j[H]}delete Y[k],Object.keys(Y).length===0&&delete n[G]}}}function N(){U(),l=!0,o!==r&&(o=r,h(o.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:N,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfObject:E,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:S,disableUnusedAttributes:w}}function xI(s,e,t){let n;function r(f){n=f}function o(f,h){s.drawArrays(n,f,h),t.update(h,n,1)}function l(f,h,p){p!==0&&(s.drawArraysInstanced(n,f,h,p),t.update(h,n,p))}function c(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,h,0,p);let g=0;for(let _=0;_<p;_++)g+=h[_];t.update(g,n,1)}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function yI(s,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(D){return!(D!==oi&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const E=D===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==pi&&D!==gi&&!E&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function f(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(Be("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),C=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:S,maxAttributes:b,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:T,maxSamples:I,samples:C}}function bI(s){const e=this;let t=null,n=0,r=!1,o=!1;const l=new ls,c=new bt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const _=m.length!==0||g||n!==0||r;return r=g,n=m.length,_},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,g){t=p(m,g,0)},this.setState=function(m,g,_){const y=m.clippingPlanes,M=m.clipIntersection,S=m.clipShadows,b=s.get(m);if(!r||y===null||y.length===0||o&&!S)o?p(null):h();else{const w=o?0:n,R=w*4;let T=b.clippingState||null;f.value=T,T=p(y,g,R,_);for(let I=0;I!==R;++I)T[I]=t[I];b.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,g,_,y){const M=m!==null?m.length:0;let S=null;if(M!==0){if(S=f.value,y!==!0||S===null){const b=_+M*4,w=g.matrixWorldInverse;c.getNormalMatrix(w),(S===null||S.length<b)&&(S=new Float32Array(b));for(let R=0,T=_;R!==M;++R,T+=4)l.copy(m[R]).applyMatrix4(w,c),l.normal.toArray(S,T),S[T+3]=l.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}const $o=4,SI=6,MI=20,wI=256,lc=new gl,Uy=new be;let Jm=null,Km=0,Qm=0,eg=!1;const TI=new O,Pa=new O;class Lg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,o={}){const{size:l=256,position:c=TI}=o;Jm=this._renderer.getRenderTarget(),Km=this._renderer.getActiveCubeFace(),Qm=this._renderer.getActiveMipmapLevel(),eg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,r,f,c),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=By(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jm,Km,Qm),this._renderer.xr.enabled=eg,e.scissorTest=!1,Ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gr||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jm=this._renderer.getRenderTarget(),Km=this._renderer.getActiveCubeFace(),Qm=this._renderer.getActiveMipmapLevel(),eg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:br,format:oi,colorSpace:il,depthBuffer:!1},r=Fy(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fy(e,t,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=EI(o)),this._blurMaterial=CI(o,e,t),this._ggxMaterial=AI(o,e,t)}return r}_compileMaterial(e){const t=new Dn(new pt,e);this._renderer.compile(t,lc)}_sceneToCubeUV(e,t,n,r,o){const f=new jn(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(Uy),m.toneMapping=sr,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dn(new Va,new $s({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,S=M.material;let b=!1;const w=e.background;w?w.isColor&&(S.color.copy(w),e.background=null,b=!0):(S.color.copy(Uy),b=!0);for(let R=0;R<6;R++){const T=R%3;T===0?(f.up.set(0,h[R],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x+p[R],o.y,o.z)):T===1?(f.up.set(0,0,h[R]),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y+p[R],o.z)):(f.up.set(0,h[R],0),f.position.set(o.x,o.y,o.z),f.lookAt(o.x,o.y,o.z+p[R]));const I=this._cubeSize;Ho(r,T*I,R>2?I:0,I,I),m.setRenderTarget(r),b&&m.render(M,f),m.render(e,f)}m.toneMapping=_,m.autoClear=g,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Gr||e.mapping===Xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=By()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oy());const o=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=o;const c=o.uniforms;c.envMap.value=e;const f=this._cubeSize;Ho(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(l,lc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,o=this._pingPongRenderTarget,l=this._ggxMaterial,c=this._lodMeshes[n];c.material=l;const f=l.uniforms,h=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),m=Math.sqrt(h*h-p*p),g=h*1.25,_=m*g,{_lodMax:y}=this,M=this._sizeLods[n],S=3*M*(n>y-$o?n-y+$o:0),b=4*(this._cubeSize-M);f.envMap.value=e.texture,f.roughness.value=_,f.mipInt.value=y-t,Ho(o,S,b,3*M,2*M),r.setRenderTarget(o),r.render(c,lc),f.envMap.value=o.texture,f.roughness.value=0,f.mipInt.value=y-n,Ho(e,S,b,3*M,2*M),r.setRenderTarget(e),r.render(c,lc)}_blur(e,t,n,r){const o=this._pingPongRenderTarget,l=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,n,l),this._blurPass(o,e,n,n,l)}_blurPass(e,t,n,r,o){const l=this._renderer,c=this._blurMaterial,f=this._lodMeshes[r];f.material=c;const h=c.uniforms;h.envMap.value=e.texture,h.sigma.value=o,h.mipInt.value=this._lodMax-n;const p=this._sizeLods[r],m=3*p*(r>this._lodMax-$o?r-this._lodMax+$o:0),g=4*(this._cubeSize-p);Ho(t,m,g,3*p,2*p),l.setRenderTarget(t),l.render(f,lc)}}function EI(s){const e=[],t=[];let n=s;const r=s-$o+1+SI;for(let o=0;o<r;o++){const l=Math.pow(2,n);e.push(l);const c=1/(l-2),f=-c,h=1+c,p=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,g=6,_=3,y=new Float32Array(_*g*m),M=new Float32Array(_*g*m);for(let b=0;b<m;b++){const w=b%3*2/3-1,R=b>2?0:-1,T=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];y.set(T,_*g*b);for(let I=0;I<g;I++){const C=p[I*2]*2-1,D=p[I*2+1]*2-1;b===0?Pa.set(1,D,C):b===1?Pa.set(-C,1,-D):b===2?Pa.set(-C,D,1):b===3?Pa.set(-1,D,-C):b===4?Pa.set(-C,-1,D):Pa.set(C,D,-1),Pa.toArray(M,(b*g+I)*_)}}const S=new pt;S.setAttribute("position",new ct(y,_)),S.setAttribute("outputDirection",new ct(M,_)),t.push(new Dn(S,null)),n>$o&&n--}return{lodMeshes:t,sizeLods:e}}function Fy(s,e,t){const n=new Ii(s,e,t);return n.texture.mapping=hl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ho(s,e,t,n,r){s.viewport.set(e,t,n,r),s.scissor.set(e,t,n,r)}function AI(s,e,t){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wI,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Id(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function CI(s,e,t){return new Li({name:"SphericalGaussianBlur",defines:{SAMPLES:MI,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Id(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function Oy(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function By(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function Id(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class L0 extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Yc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Va(5,5,5),o=new Li({name:"CubemapFromEquirect",uniforms:ul(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:li,blending:Hr});o.uniforms.tEquirect.value=t;const l=new Dn(r,o),c=t.minFilter;return t.minFilter===kr&&(t.minFilter=fn),new cM(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(o)}}function RI(s){let e=new WeakMap,t=new WeakMap,n=null;function r(g,_=!1){return g==null?null:_?l(g):o(g)}function o(g){if(g&&g.isTexture){const _=g.mapping;if(_===mc||_===gc)if(e.has(g)){const y=e.get(g).texture;return c(y,g.mapping)}else{const y=g.image;if(y&&y.height>0){const M=new L0(y.height);return M.fromEquirectangularTexture(s,g),e.set(g,M),g.addEventListener("dispose",h),c(M.texture,g.mapping)}else return null}}return g}function l(g){if(g&&g.isTexture){const _=g.mapping,y=_===mc||_===gc,M=_===Gr||_===Xs;if(y||M){let S=t.get(g);const b=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==b)return n===null&&(n=new Lg(s)),S=y?n.fromEquirectangular(g,S):n.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const w=g.image;return y&&w&&w.height>0||M&&w&&f(w)?(n===null&&(n=new Lg(s)),S=y?n.fromEquirectangular(g):n.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",p),S.texture):null}}}return g}function c(g,_){return _===mc?g.mapping=Gr:_===gc&&(g.mapping=Xs),g}function f(g){let _=0;const y=6;for(let M=0;M<y;M++)g[M]!==void 0&&_++;return _===y}function h(g){const _=g.target;_.removeEventListener("dispose",h);const y=e.get(_);y!==void 0&&(e.delete(_),y.dispose())}function p(g){const _=g.target;_.removeEventListener("dispose",p);const y=t.get(_);y!==void 0&&(t.delete(_),y.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:m}}function PI(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=s.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ps("WebGLRenderer: "+n+" extension not supported."),r}}}function II(s,e,t,n){const r={},o=new WeakMap;function l(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const y in g.attributes)e.remove(g.attributes[y]);g.removeEventListener("dispose",l),delete r[g.id];const _=o.get(g);_&&(e.remove(_),o.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(m,g){return r[g.id]===!0||(g.addEventListener("dispose",l),r[g.id]=!0,t.memory.geometries++),g}function f(m){const g=m.attributes;for(const _ in g)e.update(g[_],s.ARRAY_BUFFER)}function h(m){const g=[],_=m.index,y=m.attributes.position;let M=0;if(y===void 0)return;if(_!==null){const w=_.array;M=_.version;for(let R=0,T=w.length;R<T;R+=3){const I=w[R+0],C=w[R+1],D=w[R+2];g.push(I,C,C,D,D,I)}}else{const w=y.array;M=y.version;for(let R=0,T=w.length/3-1;R<T;R+=3){const I=R+0,C=R+1,D=R+2;g.push(I,C,C,D,D,I)}}const S=new(y.count>=65535?o0:a0)(g,1);S.version=M;const b=o.get(m);b&&e.remove(b),o.set(m,S)}function p(m){const g=o.get(m);if(g){const _=m.index;_!==null&&g.version<_.version&&h(m)}else h(m);return o.get(m)}return{get:c,update:f,getWireframeAttribute:p}}function LI(s,e,t){let n;function r(m){n=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function f(m,g){s.drawElements(n,g,o,m*l),t.update(g,n,1)}function h(m,g,_){_!==0&&(s.drawElementsInstanced(n,g,o,m*l,_),t.update(g,n,_))}function p(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,o,m,0,_);let M=0;for(let S=0;S<_;S++)M+=g[S];t.update(M,n,1)}this.setMode=r,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=p}function NI(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,c){switch(t.calls++,l){case s.TRIANGLES:t.triangles+=c*(o/3);break;case s.LINES:t.lines+=c*(o/2);break;case s.LINE_STRIP:t.lines+=c*(o-1);break;case s.LINE_LOOP:t.lines+=c*o;break;case s.POINTS:t.points+=c*o;break;default:st("WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function DI(s,e,t){const n=new WeakMap,r=new tn;function o(l,c,f){const h=l.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=p!==void 0?p.length:0;let g=n.get(c);if(g===void 0||g.count!==m){let N=function(){D.dispose(),n.delete(c),c.removeEventListener("dispose",N)};g!==void 0&&g.texture.dispose();const _=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let R=0;_===!0&&(R=1),y===!0&&(R=2),M===!0&&(R=3);let T=c.attributes.position.count*R,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*I*4*m),D=new ad(C,T,I,m);D.type=gi,D.needsUpdate=!0;const E=R*4;for(let U=0;U<m;U++){const B=S[U],G=b[U],Y=w[U],k=T*I*4*U;for(let j=0;j<B.count;j++){const H=j*E;_===!0&&(r.fromBufferAttribute(B,j),C[k+H+0]=r.x,C[k+H+1]=r.y,C[k+H+2]=r.z,C[k+H+3]=0),y===!0&&(r.fromBufferAttribute(G,j),C[k+H+4]=r.x,C[k+H+5]=r.y,C[k+H+6]=r.z,C[k+H+7]=0),M===!0&&(r.fromBufferAttribute(Y,j),C[k+H+8]=r.x,C[k+H+9]=r.y,C[k+H+10]=r.z,C[k+H+11]=Y.itemSize===4?r.w:1)}}g={count:m,texture:D,size:new _e(T,I)},n.set(c,g),c.addEventListener("dispose",N)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",l.morphTexture,t);else{let _=0;for(let M=0;M<h.length;M++)_+=h[M];const y=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",h)}f.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:o}}function UI(s,e,t,n,r){let o=new WeakMap;function l(h){const p=r.render.frame,m=h.geometry,g=e.get(h,m);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return g}function c(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const FI={[Gg]:"LINEAR_TONE_MAPPING",[Wg]:"REINHARD_TONE_MAPPING",[Xg]:"CINEON_TONE_MAPPING",[jh]:"ACES_FILMIC_TONE_MAPPING",[Yg]:"AGX_TONE_MAPPING",[jg]:"NEUTRAL_TONE_MAPPING",[qg]:"CUSTOM_TONE_MAPPING"};function OI(s,e,t,n,r,o){const l=new Ii(e,t,{type:s,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let c=null,f=null;const h=new pt;h.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $e([0,2,0,0,2,0],2));const p=new _0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Dn(h,p),g=new gl(-1,1,1,-1,0,1);let _=null,y=null,M=!1,S,b=null,w=[],R=!1;this.setSize=function(T,I){l.setSize(T,I),c!==null&&c.setSize(T,I),f!==null&&f.setSize(T,I);for(let C=0;C<w.length;C++){const D=w[C];D.setSize&&D.setSize(T,I)}},this.setEffects=function(T){w=T,R=w.length>0&&w[0].isRenderPass===!0;const I=l.width,C=l.height;w.length>0&&c===null&&(c=new Ii(I,C,{type:br,depthBuffer:!1,stencilBuffer:!1}),f=new Ii(I,C,{type:br,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<w.length;D++){const E=w[D];E.setSize&&E.setSize(I,C)}},this.begin=function(T,I){if(M||T.toneMapping===sr&&w.length===0)return!1;if(b=I,I!==null){const C=I.width,D=I.height;(l.width!==C||l.height!==D)&&this.setSize(C,D)}return R===!1&&T.setRenderTarget(l),S=T.toneMapping,T.toneMapping=sr,!0},this.hasRenderPass=function(){return R},this.end=function(T,I){T.toneMapping=S,M=!0;let C=l,D=c;for(let E=0;E<w.length;E++){const N=w[E];N.enabled!==!1&&(N.render(T,D,C,I),N.needsSwap!==!1&&(C=D,D=D===c?f:c))}if(_!==T.outputColorSpace||y!==T.toneMapping){_=T.outputColorSpace,y=T.toneMapping,p.defines={},Lt.getTransfer(_)===Qt&&(p.defines.SRGB_TRANSFER="");const E=FI[y];E&&(p.defines[E]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=C.texture,T.setRenderTarget(b),T.render(m,g),b=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.dispose(),c!==null&&c.dispose(),f!==null&&f.dispose(),h.dispose(),p.dispose()}}const bM=new hn,Ng=new ol(1,1),SM=new ad,MM=new od,wM=new Yc,zy=[],ky=[],Vy=new Float32Array(16),Hy=new Float32Array(9),Gy=new Float32Array(4);function vl(s,e,t){const n=s[0];if(n<=0||n>0)return s;const r=e*t;let o=zy[r];if(o===void 0&&(o=new Float32Array(r),zy[r]=o),e!==0){n.toArray(o,0);for(let l=1,c=0;l!==e;++l)c+=t,s[l].toArray(o,c)}return o}function On(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Bn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ld(s,e){let t=ky[e];t===void 0&&(t=new Int32Array(e),ky[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function BI(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function zI(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;s.uniform2fv(this.addr,e),Bn(t,e)}}function kI(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(On(t,e))return;s.uniform3fv(this.addr,e),Bn(t,e)}}function VI(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;s.uniform4fv(this.addr,e),Bn(t,e)}}function HI(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Bn(t,e)}else{if(On(t,n))return;Gy.set(n),s.uniformMatrix2fv(this.addr,!1,Gy),Bn(t,n)}}function GI(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Bn(t,e)}else{if(On(t,n))return;Hy.set(n),s.uniformMatrix3fv(this.addr,!1,Hy),Bn(t,n)}}function WI(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Bn(t,e)}else{if(On(t,n))return;Vy.set(n),s.uniformMatrix4fv(this.addr,!1,Vy),Bn(t,n)}}function XI(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function qI(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;s.uniform2iv(this.addr,e),Bn(t,e)}}function YI(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;s.uniform3iv(this.addr,e),Bn(t,e)}}function jI(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;s.uniform4iv(this.addr,e),Bn(t,e)}}function $I(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ZI(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;s.uniform2uiv(this.addr,e),Bn(t,e)}}function JI(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;s.uniform3uiv(this.addr,e),Bn(t,e)}}function KI(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;s.uniform4uiv(this.addr,e),Bn(t,e)}}function QI(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r);let o;this.type===s.SAMPLER_2D_SHADOW?(Ng.compareFunction=t.isReversedDepthBuffer()?rd:id,o=Ng):o=bM,t.setTexture2D(e||o,r)}function eL(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||MM,r)}function tL(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||wM,r)}function nL(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||SM,r)}function iL(s){switch(s){case 5126:return BI;case 35664:return zI;case 35665:return kI;case 35666:return VI;case 35674:return HI;case 35675:return GI;case 35676:return WI;case 5124:case 35670:return XI;case 35667:case 35671:return qI;case 35668:case 35672:return YI;case 35669:case 35673:return jI;case 5125:return $I;case 36294:return ZI;case 36295:return JI;case 36296:return KI;case 35678:case 36198:case 36298:case 36306:case 35682:return QI;case 35679:case 36299:case 36307:return eL;case 35680:case 36300:case 36308:case 36293:return tL;case 36289:case 36303:case 36311:case 36292:return nL}}function rL(s,e){s.uniform1fv(this.addr,e)}function sL(s,e){const t=vl(e,this.size,2);s.uniform2fv(this.addr,t)}function aL(s,e){const t=vl(e,this.size,3);s.uniform3fv(this.addr,t)}function oL(s,e){const t=vl(e,this.size,4);s.uniform4fv(this.addr,t)}function lL(s,e){const t=vl(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function cL(s,e){const t=vl(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function uL(s,e){const t=vl(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function fL(s,e){s.uniform1iv(this.addr,e)}function hL(s,e){s.uniform2iv(this.addr,e)}function dL(s,e){s.uniform3iv(this.addr,e)}function pL(s,e){s.uniform4iv(this.addr,e)}function mL(s,e){s.uniform1uiv(this.addr,e)}function gL(s,e){s.uniform2uiv(this.addr,e)}function vL(s,e){s.uniform3uiv(this.addr,e)}function _L(s,e){s.uniform4uiv(this.addr,e)}function xL(s,e,t){const n=this.cache,r=e.length,o=Ld(t,r);On(n,o)||(s.uniform1iv(this.addr,o),Bn(n,o));let l;this.type===s.SAMPLER_2D_SHADOW?l=Ng:l=bM;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||l,o[c])}function yL(s,e,t){const n=this.cache,r=e.length,o=Ld(t,r);On(n,o)||(s.uniform1iv(this.addr,o),Bn(n,o));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||MM,o[l])}function bL(s,e,t){const n=this.cache,r=e.length,o=Ld(t,r);On(n,o)||(s.uniform1iv(this.addr,o),Bn(n,o));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||wM,o[l])}function SL(s,e,t){const n=this.cache,r=e.length,o=Ld(t,r);On(n,o)||(s.uniform1iv(this.addr,o),Bn(n,o));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||SM,o[l])}function ML(s){switch(s){case 5126:return rL;case 35664:return sL;case 35665:return aL;case 35666:return oL;case 35674:return lL;case 35675:return cL;case 35676:return uL;case 5124:case 35670:return fL;case 35667:case 35671:return hL;case 35668:case 35672:return dL;case 35669:case 35673:return pL;case 5125:return mL;case 36294:return gL;case 36295:return vL;case 36296:return _L;case 35678:case 36198:case 36298:case 36306:case 35682:return xL;case 35679:case 36299:case 36307:return yL;case 35680:case 36300:case 36308:case 36293:return bL;case 36289:case 36303:case 36311:case 36292:return SL}}class wL{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iL(t.type)}}class TL{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ML(t.type)}}class EL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const c=r[o];c.setValue(e,t[c.id],n)}}}const tg=/(\w+)(\])?(\[|\.)?/g;function Wy(s,e){s.seq.push(e),s.map[e.id]=e}function AL(s,e,t){const n=s.name,r=n.length;for(tg.lastIndex=0;;){const o=tg.exec(n),l=tg.lastIndex;let c=o[1];const f=o[2]==="]",h=o[3];if(f&&(c=c|0),h===void 0||h==="["&&l+2===r){Wy(t,h===void 0?new wL(c,s,e):new TL(c,s,e));break}else{let m=t.map[c];m===void 0&&(m=new EL(c),Wy(t,m)),t=m}}}class Zf{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const c=e.getActiveUniform(t,l),f=e.getUniformLocation(t,c.name);AL(c,f,this)}const r=[],o=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(l):o.push(l);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,l=t.length;o!==l;++o){const c=t[o],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function Xy(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const CL=37297;let RL=0;function PL(s,e){const t=s.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=r;l<o;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const qy=new bt;function IL(s){Lt._getMatrix(qy,Lt.workingColorSpace,s);const e=`mat3( ${qy.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(s)){case Nc:return[e,"LinearTransferOETF"];case Qt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Yy(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),o=(s.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+PL(s.getShaderSource(e),c)}else return o}function LL(s,e){const t=IL(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const NL={[Gg]:"Linear",[Wg]:"Reinhard",[Xg]:"Cineon",[jh]:"ACESFilmic",[Yg]:"AgX",[jg]:"Neutral",[qg]:"Custom"};function DL(s,e){const t=NL[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hf=new O;function UL(){Lt.getLuminanceCoefficients(Hf);const s=Hf.x.toFixed(4),e=Hf.y.toFixed(4),t=Hf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FL(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hc).join(`
`)}function OL(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function BL(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=s.getActiveAttrib(e,r),l=o.name;let c=1;o.type===s.FLOAT_MAT2&&(c=2),o.type===s.FLOAT_MAT3&&(c=3),o.type===s.FLOAT_MAT4&&(c=4),t[l]={type:o.type,location:s.getAttribLocation(e,l),locationSize:c}}return t}function hc(s){return s!==""}function jy(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $y(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dg(s){return s.replace(zL,VL)}const kL=new Map;function VL(s,e){let t=At[e];if(t===void 0){const n=kL.get(e);if(n!==void 0)t=At[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Dg(t)}const HL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zy(s){return s.replace(HL,GL)}function GL(s,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Jy(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const WL={[Jo]:"SHADOWMAP_TYPE_PCF",[La]:"SHADOWMAP_TYPE_VSM"};function XL(s){return WL[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qL={[Gr]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE",[hl]:"ENVMAP_TYPE_CUBE_UV"};function YL(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":qL[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const jL={[Xs]:"ENVMAP_MODE_REFRACTION"};function $L(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":jL[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ZL={[Xc]:"ENVMAP_BLENDING_MULTIPLY",[$b]:"ENVMAP_BLENDING_MIX",[Zb]:"ENVMAP_BLENDING_ADD"};function JL(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ZL[s.combine]||"ENVMAP_BLENDING_NONE"}function KL(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function QL(s,e,t,n){const r=s.getContext(),o=t.defines;let l=t.vertexShader,c=t.fragmentShader;const f=XL(t),h=YL(t),p=$L(t),m=JL(t),g=KL(t),_=FL(t),y=OL(o),M=r.createProgram();let S,b,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(hc).join(`
`),S.length>0&&(S+=`
`),b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(hc).join(`
`),b.length>0&&(b+=`
`)):(S=[Jy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hc).join(`
`),b=[Jy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sr?"#define TONE_MAPPING":"",t.toneMapping!==sr?At.tonemapping_pars_fragment:"",t.toneMapping!==sr?DL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,LL("linearToOutputTexel",t.outputColorSpace),UL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hc).join(`
`)),l=Dg(l),l=jy(l,t),l=$y(l,t),c=Dg(c),c=jy(c,t),c=$y(c,t),l=Zy(l),c=Zy(c),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,S=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,b=["#define varying in",t.glslVersion===wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const R=w+S+l,T=w+b+c,I=Xy(r,r.VERTEX_SHADER,R),C=Xy(r,r.FRAGMENT_SHADER,T);r.attachShader(M,I),r.attachShader(M,C),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function D(B){if(s.debug.checkShaderErrors){const G=r.getProgramInfoLog(M)||"",Y=r.getShaderInfoLog(I)||"",k=r.getShaderInfoLog(C)||"",j=G.trim(),H=Y.trim(),q=k.trim();let ne=!0,K=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,M,I,C);else{const oe=Yy(r,I,"vertex"),he=Yy(r,C,"fragment");st("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+j+`
`+oe+`
`+he)}else j!==""?Be("WebGLProgram: Program Info Log:",j):(H===""||q==="")&&(K=!1);K&&(B.diagnostics={runnable:ne,programLog:j,vertexShader:{log:H,prefix:S},fragmentShader:{log:q,prefix:b}})}r.deleteShader(I),r.deleteShader(C),E=new Zf(r,M),N=BL(r,M)}let E;this.getUniforms=function(){return E===void 0&&D(this),E};let N;this.getAttributes=function(){return N===void 0&&D(this),N};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(M,CL)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RL++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=C,this}let eN=0;class tN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nN(e),t.set(e,n)),n}}class nN{constructor(e){this.id=eN++,this.code=e,this.usedTimes=0}}function iN(s){return s===qs||s===Rc||s===Pc}function rN(s,e,t,n,r,o){const l=new sl,c=new tN,f=new Set,h=[],p=new Map,m=n.logarithmicDepthBuffer;let g=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return f.add(E),E===0?"uv":`uv${E}`}function M(E,N,U,B,G,Y){const k=B.fog,j=G.geometry,H=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,q=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,ne=e.get(E.envMap||H,q),K=ne&&ne.mapping===hl?ne.image.height:null,oe=_[E.type];E.precision!==null&&(g=n.getMaxPrecision(E.precision),g!==E.precision&&Be("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const he=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,qe=he!==void 0?he.length:0;let Ie=0;j.morphAttributes.position!==void 0&&(Ie=1),j.morphAttributes.normal!==void 0&&(Ie=2),j.morphAttributes.color!==void 0&&(Ie=3);let et,rt,xt,le;if(oe){const $t=xr[oe];et=$t.vertexShader,rt=$t.fragmentShader}else{et=E.vertexShader,rt=E.fragmentShader;const $t=c.getVertexShaderStage(E),Ht=c.getFragmentShaderStage(E);c.update(E,$t,Ht),xt=$t.id,le=Ht.id}const fe=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),at=G.isInstancedMesh===!0,We=G.isBatchedMesh===!0,ft=!!E.map,Ct=!!E.matcap,me=!!ne,ye=!!E.aoMap,Se=!!E.lightMap,Me=!!E.bumpMap&&E.wireframe===!1,Re=!!E.normalMap,lt=!!E.displacementMap,Ke=!!E.emissiveMap,ot=!!E.metalnessMap,mt=!!E.roughnessMap,V=E.anisotropy>0,Pt=E.clearcoat>0,Mt=E.dispersion>0,F=E.retroreflectivity>0,A=E.iridescence>0,$=E.sheen>0,ee=E.transmission>0,ce=V&&!!E.anisotropyMap,Te=Pt&&!!E.clearcoatMap,Pe=Pt&&!!E.clearcoatNormalMap,ue=Pt&&!!E.clearcoatRoughnessMap,de=A&&!!E.iridescenceMap,Ae=A&&!!E.iridescenceThicknessMap,Je=$&&!!E.sheenColorMap,ze=$&&!!E.sheenRoughnessMap,Fe=!!E.specularMap,it=!!E.specularColorMap,ut=!!E.specularIntensityMap,yt=ee&&!!E.transmissionMap,X=ee&&!!E.thicknessMap,De=!!E.gradientMap,pe=!!E.alphaMap,Oe=E.alphaTest>0,Ge=!!E.alphaHash,xe=!!E.extensions;let nt=sr;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(nt=s.toneMapping);const Qe={shaderID:oe,shaderType:E.type,shaderName:E.name,vertexShader:et,fragmentShader:rt,defines:E.defines,customVertexShaderID:xt,customFragmentShaderID:le,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:We,batchingColor:We&&G._colorsTexture!==null,instancing:at,instancingColor:at&&G.instanceColor!==null,instancingMorph:at&&G.morphTexture!==null,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:ft,matcap:Ct,envMap:me,envMapMode:me&&ne.mapping,envMapCubeUVHeight:K,aoMap:ye,lightMap:Se,bumpMap:Me,normalMap:Re,displacementMap:lt,emissiveMap:Ke,normalMapObjectSpace:Re&&E.normalMapType===nS,normalMapTangentSpace:Re&&E.normalMapType===gs,packedNormalMap:Re&&E.normalMapType===gs&&iN(E.normalMap.format),metalnessMap:ot,roughnessMap:mt,anisotropy:V,anisotropyMap:ce,clearcoat:Pt,clearcoatMap:Te,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ue,dispersion:Mt,retroreflection:F,iridescence:A,iridescenceMap:de,iridescenceThicknessMap:Ae,sheen:$,sheenColorMap:Je,sheenRoughnessMap:ze,specularMap:Fe,specularColorMap:it,specularIntensityMap:ut,transmission:ee,transmissionMap:yt,thicknessMap:X,gradientMap:De,opaque:E.transparent===!1&&E.blending===Ko&&E.alphaToCoverage===!1,alphaMap:pe,alphaTest:Oe,alphaHash:Ge,combine:E.combine,mapUv:ft&&y(E.map.channel),aoMapUv:ye&&y(E.aoMap.channel),lightMapUv:Se&&y(E.lightMap.channel),bumpMapUv:Me&&y(E.bumpMap.channel),normalMapUv:Re&&y(E.normalMap.channel),displacementMapUv:lt&&y(E.displacementMap.channel),emissiveMapUv:Ke&&y(E.emissiveMap.channel),metalnessMapUv:ot&&y(E.metalnessMap.channel),roughnessMapUv:mt&&y(E.roughnessMap.channel),anisotropyMapUv:ce&&y(E.anisotropyMap.channel),clearcoatMapUv:Te&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:ze&&y(E.sheenRoughnessMap.channel),specularMapUv:Fe&&y(E.specularMap.channel),specularColorMapUv:it&&y(E.specularColorMap.channel),specularIntensityMapUv:ut&&y(E.specularIntensityMap.channel),transmissionMapUv:yt&&y(E.transmissionMap.channel),thicknessMapUv:X&&y(E.thicknessMap.channel),alphaMapUv:pe&&y(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Re||V),vertexNormals:!!j.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!j.attributes.uv&&(ft||pe),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||j.attributes.normal===void 0&&Re===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Ne,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:qe,morphTextureStride:Ie,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,decodeVideoTexture:ft&&E.map.isVideoTexture===!0&&Lt.getTransfer(E.map.colorSpace)===Qt,decodeVideoTextureEmissive:Ke&&E.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(E.emissiveMap.colorSpace)===Qt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===di,flipSided:E.side===li,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:xe&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&E.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Qe.vertexUv1s=f.has(1),Qe.vertexUv2s=f.has(2),Qe.vertexUv3s=f.has(3),f.clear(),Qe}function S(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)N.push(U),N.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(b(N,E),w(N,E),N.push(s.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function b(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numSunLights),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numSunLightShadows),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function w(E,N){l.disableAll(),N.instancing&&l.enable(0),N.instancingColor&&l.enable(1),N.instancingMorph&&l.enable(2),N.matcap&&l.enable(3),N.envMap&&l.enable(4),N.normalMapObjectSpace&&l.enable(5),N.normalMapTangentSpace&&l.enable(6),N.clearcoat&&l.enable(7),N.iridescence&&l.enable(8),N.alphaTest&&l.enable(9),N.vertexColors&&l.enable(10),N.vertexAlphas&&l.enable(11),N.vertexUv1s&&l.enable(12),N.vertexUv2s&&l.enable(13),N.vertexUv3s&&l.enable(14),N.vertexTangents&&l.enable(15),N.anisotropy&&l.enable(16),N.alphaHash&&l.enable(17),N.batching&&l.enable(18),N.dispersion&&l.enable(19),N.retroreflection&&l.enable(24),N.batchingColor&&l.enable(20),N.gradientMap&&l.enable(21),N.packedNormalMap&&l.enable(22),N.vertexNormals&&l.enable(23),E.push(l.mask),l.disableAll(),N.fog&&l.enable(0),N.useFog&&l.enable(1),N.flatShading&&l.enable(2),N.logarithmicDepthBuffer&&l.enable(3),N.reversedDepthBuffer&&l.enable(4),N.skinning&&l.enable(5),N.morphTargets&&l.enable(6),N.morphNormals&&l.enable(7),N.morphColors&&l.enable(8),N.premultipliedAlpha&&l.enable(9),N.shadowMapEnabled&&l.enable(10),N.doubleSided&&l.enable(11),N.flipSided&&l.enable(12),N.useDepthPacking&&l.enable(13),N.dithering&&l.enable(14),N.transmission&&l.enable(15),N.sheen&&l.enable(16),N.opaque&&l.enable(17),N.pointsUvs&&l.enable(18),N.decodeVideoTexture&&l.enable(19),N.decodeVideoTextureEmissive&&l.enable(20),N.alphaToCoverage&&l.enable(21),N.numLightProbeGrids>0&&l.enable(22),N.hasPositionAttribute&&l.enable(23),E.push(l.mask)}function R(E){const N=_[E.type];let U;if(N){const B=xr[N];U=BS.clone(B.uniforms)}else U=E.uniforms;return U}function T(E,N){let U=p.get(N);return U!==void 0?++U.usedTimes:(U=new QL(s,N,E,r),h.push(U),p.set(N,U)),U}function I(E){if(--E.usedTimes===0){const N=h.indexOf(E);h[N]=h[h.length-1],h.pop(),p.delete(E.cacheKey),E.destroy()}}function C(E){c.remove(E)}function D(){c.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:R,acquireProgram:T,releaseProgram:I,releaseShaderCache:C,programs:h,dispose:D}}function sN(){let s=new WeakMap;function e(l){return s.has(l)}function t(l){let c=s.get(l);return c===void 0&&(c={},s.set(l,c)),c}function n(l){s.delete(l)}function r(l,c,f){s.get(l)[c]=f}function o(){s=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function aN(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Ky(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qy(){const s=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function l(g){let _=0;return g.isInstancedMesh&&(_+=2),g.isSkinnedMesh&&(_+=1),_}function c(g,_,y,M,S,b){let w=s[e];return w===void 0?(w={id:g.id,object:g,geometry:_,material:y,materialVariant:l(g),groupOrder:M,renderOrder:g.renderOrder,z:S,group:b},s[e]=w):(w.id=g.id,w.object=g,w.geometry=_,w.material=y,w.materialVariant=l(g),w.groupOrder=M,w.renderOrder=g.renderOrder,w.z=S,w.group=b),e++,w}function f(g,_,y,M,S,b,w){w.reversedDepth===!0&&(S=-S);const R=c(g,_,y,M,S,b);y.transmission>0?n.push(R):y.transparent===!0?r.push(R):t.push(R)}function h(g,_,y,M,S,b){const w=c(g,_,y,M,S,b);y.transmission>0?n.unshift(w):y.transparent===!0?r.unshift(w):t.unshift(w)}function p(g,_){t.length>1&&t.sort(g||aN),n.length>1&&n.sort(_||Ky),r.length>1&&r.sort(_||Ky)}function m(){for(let g=e,_=s.length;g<_;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:f,unshift:h,finish:m,sort:p}}function oN(){let s=new WeakMap;function e(n,r){const o=s.get(n);let l;return o===void 0?(l=new Qy,s.set(n,[l])):r>=o.length?(l=new Qy,o.push(l)):l=o[r],l}function t(){s=new WeakMap}return{get:e,dispose:t}}function lN(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new be};break;case"SpotLight":t={position:new O,direction:new O,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function cN(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let uN=0;function fN(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function hN(s){const e=new lN,t=cN(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new O);const r=new O,o=new _t,l=new _t;function c(h){let p=0,m=0,g=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let _=0,y=0,M=0,S=0,b=0,w=0,R=0,T=0,I=0,C=0,D=0,E=0,N=0,U=0;h.sort(fN);for(let G=0,Y=h.length;G<Y;G++){const k=h[G],j=k.color,H=k.intensity,q=k.distance;let ne=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===qs?ne=k.shadow.map.texture:ne=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)p+=j.r*H,m+=j.g*H,g+=j.b*H;else if(k.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(k.sh.coefficients[K],H);U++}else if(k.isSunLight){const K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const oe=k.shadow,he=t.get(k);he.shadowIntensity=oe.intensity,he.shadowBias=oe.bias,he.shadowNormalBias=oe.normalBias,he.shadowRadius=oe.radius,he.shadowMapSize.copy(oe.mapSize).multiply(oe.getFrameExtents()),n.sunShadow[y]=he,n.sunShadowMap[y]=ne;const qe=oe.getViewportCount();for(let Ie=0;Ie<qe;Ie++)n.sunShadowMatrix[M+Ie]=oe.getMatrix(Ie),n.sunShadowCascade[M+Ie]=oe._cascadeData[Ie];M+=qe,y++}n.sun[_]=K,_++}else if(k.isDirectionalLight){const K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const oe=k.shadow,he=t.get(k);he.shadowIntensity=oe.intensity,he.shadowBias=oe.bias,he.shadowNormalBias=oe.normalBias,he.shadowRadius=oe.radius,he.shadowMapSize=oe.mapSize,n.directionalShadow[S]=he,n.directionalShadowMap[S]=ne,n.directionalShadowMatrix[S]=k.shadow.matrix,I++}n.directional[S]=K,S++}else if(k.isSpotLight){const K=e.get(k);K.position.setFromMatrixPosition(k.matrixWorld),K.color.copy(j).multiplyScalar(H),K.distance=q,K.coneCos=Math.cos(k.angle),K.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),K.decay=k.decay,n.spot[w]=K;const oe=k.shadow;if(k.map&&(n.spotLightMap[E]=k.map,E++,oe.updateMatrices(k),k.castShadow&&N++),n.spotLightMatrix[w]=oe.matrix,k.castShadow){const he=t.get(k);he.shadowIntensity=oe.intensity,he.shadowBias=oe.bias,he.shadowNormalBias=oe.normalBias,he.shadowRadius=oe.radius,he.shadowMapSize=oe.mapSize,n.spotShadow[w]=he,n.spotShadowMap[w]=ne,D++}w++}else if(k.isRectAreaLight){const K=e.get(k);K.color.copy(j).multiplyScalar(H),K.halfWidth.set(k.width*.5,0,0),K.halfHeight.set(0,k.height*.5,0),n.rectArea[R]=K,R++}else if(k.isPointLight){const K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),K.distance=k.distance,K.decay=k.decay,k.castShadow){const oe=k.shadow,he=t.get(k);he.shadowIntensity=oe.intensity,he.shadowBias=oe.bias,he.shadowNormalBias=oe.normalBias,he.shadowRadius=oe.radius,he.shadowMapSize=oe.mapSize,he.shadowCameraNear=oe.camera.near,he.shadowCameraFar=oe.camera.far,n.pointShadow[b]=he,n.pointShadowMap[b]=ne,n.pointShadowMatrix[b]=k.shadow.matrix,C++}n.point[b]=K,b++}else if(k.isHemisphereLight){const K=e.get(k);K.skyColor.copy(k.color).multiplyScalar(H),K.groundColor.copy(k.groundColor).multiplyScalar(H),n.hemi[T]=K,T++}}R>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=He.LTC_FLOAT_1,n.rectAreaLTC2=He.LTC_FLOAT_2):(n.rectAreaLTC1=He.LTC_HALF_1,n.rectAreaLTC2=He.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=g;const B=n.hash;(B.sunLength!==_||B.directionalLength!==S||B.pointLength!==b||B.spotLength!==w||B.rectAreaLength!==R||B.hemiLength!==T||B.numSunShadows!==y||B.numDirectionalShadows!==I||B.numPointShadows!==C||B.numSpotShadows!==D||B.numSpotMaps!==E||B.numLightProbes!==U)&&(n.sun.length=_,n.directional.length=S,n.spot.length=w,n.rectArea.length=R,n.point.length=b,n.hemi.length=T,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+E-N,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=U,B.sunLength=_,B.directionalLength=S,B.pointLength=b,B.spotLength=w,B.rectAreaLength=R,B.hemiLength=T,B.numSunShadows=y,B.numDirectionalShadows=I,B.numPointShadows=C,B.numSpotShadows=D,B.numSpotMaps=E,B.numLightProbes=U,n.version=uN++)}function f(h,p){let m=0,g=0,_=0,y=0,M=0,S=0;const b=p.matrixWorldInverse;for(let w=0,R=h.length;w<R;w++){const T=h[w];if(T.isSunLight){const I=n.sun[m];I.direction.setFromMatrixPosition(T.matrixWorld),I.direction.transformDirection(b),m++}else if(T.isDirectionalLight){const I=n.directional[g];I.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(b),g++}else if(T.isSpotLight){const I=n.spot[y];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(b),I.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(b),y++}else if(T.isRectAreaLight){const I=n.rectArea[M];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(b),l.identity(),o.copy(T.matrixWorld),o.premultiply(b),l.extractRotation(o),I.halfWidth.set(T.width*.5,0,0),I.halfHeight.set(0,T.height*.5,0),I.halfWidth.applyMatrix4(l),I.halfHeight.applyMatrix4(l),M++}else if(T.isPointLight){const I=n.point[_];I.position.setFromMatrixPosition(T.matrixWorld),I.position.applyMatrix4(b),_++}else if(T.isHemisphereLight){const I=n.hemi[S];I.direction.setFromMatrixPosition(T.matrixWorld),I.direction.transformDirection(b),S++}}}return{setup:c,setupView:f,state:n}}function eb(s){const e=new hN(s),t=[],n=[],r=[];function o(g){m.camera=g,t.length=0,n.length=0,r.length=0}function l(g){t.push(g)}function c(g){n.push(g)}function f(g){r.push(g)}function h(){e.setup(t)}function p(g){e.setupView(t,g)}const m={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:m,setupLights:h,setupLightsView:p,pushLight:l,pushShadow:c,pushLightProbeGrid:f}}function dN(s){let e=new WeakMap;function t(r,o=0){const l=e.get(r);let c;return l===void 0?(c=new eb(s),e.set(r,[c])):o>=l.length?(c=new eb(s),l.push(c)):c=l[o],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const pN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gN=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],vN=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],tb=new _t,cc=new O,ng=new O;function _N(s,e,t){let n=new za;const r=new _e,o=new _e,l=new tn,c=new y0,f=new b0,h={},p=t.maxTextureSize,m={[Ws]:li,[li]:Ws,[di]:di},g=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:pN,fragmentShader:mN}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const y=new pt;y.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Dn(y,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let b=this.type;this.render=function(C,D,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||C.length===0)return;this.type===pc&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jo);const N=s.getRenderTarget(),U=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Hr),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Y=b!==this.type;Y&&D.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(j=>j.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,j=C.length;k<j;k++){const H=C[k],q=H.shadow;if(q===void 0){Be("WebGLShadowMap:",H,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ne=q.getFrameExtents();r.multiply(ne),o.copy(q.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/ne.x),r.x=o.x*ne.x,q.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/ne.y),r.y=o.y*ne.y,q.mapSize.y=o.y));const K=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=K,q.map===null||Y===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===La){if(H.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Ii(r.x,r.y,{format:qs,type:br,minFilter:fn,magFilter:fn,generateMipmaps:!1}),q.map.texture.name=H.name+".shadowMap",q.map.depthTexture=new ol(r.x,r.y,gi),q.map.depthTexture.name=H.name+".shadowMapDepth",q.map.depthTexture.format=Wr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=An,q.map.depthTexture.magFilter=An}else H.isPointLight?(q.map=new L0(r.x),q.map.depthTexture=new wS(r.x,or)):(q.map=new Ii(r.x,r.y),q.map.depthTexture=new ol(r.x,r.y,or)),q.map.depthTexture.name=H.name+".shadowMap",q.map.depthTexture.format=Wr,this.type===Jo?(q.map.depthTexture.compareFunction=K?rd:id,q.map.depthTexture.minFilter=fn,q.map.depthTexture.magFilter=fn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=An,q.map.depthTexture.magFilter=An);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==r.x||q.map.height!==r.y)&&q.map.setSize(r.x,r.y);const oe=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();H.isPointLight!==!0&&q.updateMatrices(H,E);for(let he=0;he<oe;he++){const qe=q.getCamera(he);if(H.isPointLight){const Ie=q.camera,et=q.matrix,rt=H.distance||Ie.far;rt!==Ie.far&&(Ie.far=rt,Ie.updateProjectionMatrix()),cc.setFromMatrixPosition(H.matrixWorld),Ie.position.copy(cc),ng.copy(Ie.position),ng.add(gN[he]),Ie.up.copy(vN[he]),Ie.lookAt(ng),Ie.updateMatrixWorld(),et.makeTranslation(-cc.x,-cc.y,-cc.z),tb.multiplyMatrices(Ie.projectionMatrix,Ie.matrixWorldInverse),q._frustum.setFromProjectionMatrix(tb,Ie.coordinateSystem,Ie.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,he),s.clear();else{he===0&&(s.setRenderTarget(q.map),s.clear());const Ie=q.getViewport(he);l.set(o.x*Ie.x,o.y*Ie.y,o.x*Ie.z,o.y*Ie.w),G.viewport(l)}n=q.getFrustum(he),T(D,E,qe,H,this.type)}q.isPointLightShadow!==!0&&this.type===La&&w(q,E),q.needsUpdate=!1}b=this.type,S.needsUpdate=!1,s.setRenderTarget(N,U,B)};function w(C,D){const E=e.update(M);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,_.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),C.mapPass===null?C.mapPass=new Ii(r.x,r.y,{format:qs,type:br}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),g.uniforms.shadow_pass.value=C.map.depthTexture,g.uniforms.resolution.value.set(C.map.width,C.map.height),g.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(D,null,E,g,M,null),_.uniforms.shadow_pass.value=C.mapPass.texture,_.uniforms.resolution.value.set(C.map.width,C.map.height),_.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(D,null,E,_,M,null)}function R(C,D,E,N){let U=null;const B=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(B!==void 0)U=B;else if(U=E.isPointLight===!0?f:c,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const G=U.uuid,Y=D.uuid;let k=h[G];k===void 0&&(k={},h[G]=k);let j=k[Y];j===void 0&&(j=U.clone(),k[Y]=j,D.addEventListener("dispose",I)),U=j}if(U.visible=D.visible,U.wireframe=D.wireframe,N===La?U.side=D.shadowSide!==null?D.shadowSide:D.side:U.side=D.shadowSide!==null?D.shadowSide:m[D.side],U.alphaMap=D.alphaMap,U.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,U.map=D.map,U.clipShadows=D.clipShadows,U.clippingPlanes=D.clippingPlanes,U.clipIntersection=D.clipIntersection,U.displacementMap=D.displacementMap,U.displacementScale=D.displacementScale,U.displacementBias=D.displacementBias,U.wireframeLinewidth=D.wireframeLinewidth,U.linewidth=D.linewidth,E.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const G=s.properties.get(U);G.light=E}return U}function T(C,D,E,N,U){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&U===La)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);const Y=e.update(C),k=C.material;if(Array.isArray(k)){const j=Y.groups;for(let H=0,q=j.length;H<q;H++){const ne=j[H],K=k[ne.materialIndex];if(K&&K.visible){const oe=R(C,K,N,U);C.onBeforeShadow(s,C,D,E,Y,oe,ne),s.renderBufferDirect(E,null,Y,oe,C,ne),C.onAfterShadow(s,C,D,E,Y,oe,ne)}}}else if(k.visible){const j=R(C,k,N,U);C.onBeforeShadow(s,C,D,E,Y,j,null),s.renderBufferDirect(E,null,Y,j,C,null),C.onAfterShadow(s,C,D,E,Y,j,null)}}const G=C.children;for(let Y=0,k=G.length;Y<k;Y++)T(G[Y],D,E,N,U)}function I(C){C.target.removeEventListener("dispose",I);for(const E in h){const N=h[E],U=C.target.uuid;U in N&&(N[U].dispose(),delete N[U])}}}function xN(s,e){function t(){let X=!1;const De=new tn;let pe=null;const Oe=new tn(0,0,0,0);return{setMask:function(Ge){pe!==Ge&&!X&&(s.colorMask(Ge,Ge,Ge,Ge),pe=Ge)},setLocked:function(Ge){X=Ge},setClear:function(Ge,xe,nt,Qe,$t){$t===!0&&(Ge*=Qe,xe*=Qe,nt*=Qe),De.set(Ge,xe,nt,Qe),Oe.equals(De)===!1&&(s.clearColor(Ge,xe,nt,Qe),Oe.copy(De))},reset:function(){X=!1,pe=null,Oe.set(-1,0,0,0)}}}function n(){let X=!1,De=!1,pe=null,Oe=null,Ge=null;return{setReversed:function(xe){if(De!==xe){const nt=e.get("EXT_clip_control");xe?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),De=xe;const Qe=Ge;Ge=null,this.setClear(Qe)}},getReversed:function(){return De},setTest:function(xe){xe?fe(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(xe){pe!==xe&&!X&&(s.depthMask(xe),pe=xe)},setFunc:function(xe){if(De&&(xe=LE[xe]),Oe!==xe){switch(xe){case Qf:s.depthFunc(s.NEVER);break;case eh:s.depthFunc(s.ALWAYS);break;case th:s.depthFunc(s.LESS);break;case el:s.depthFunc(s.LEQUAL);break;case nh:s.depthFunc(s.EQUAL);break;case ih:s.depthFunc(s.GEQUAL);break;case rh:s.depthFunc(s.GREATER);break;case sh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Oe=xe}},setLocked:function(xe){X=xe},setClear:function(xe){Ge!==xe&&(Ge=xe,De&&(xe=1-xe),s.clearDepth(xe))},reset:function(){X=!1,pe=null,Oe=null,Ge=null,De=!1}}}function r(){let X=!1,De=null,pe=null,Oe=null,Ge=null,xe=null,nt=null,Qe=null,$t=null;return{setTest:function(Ht){X||(Ht?fe(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Ht){De!==Ht&&!X&&(s.stencilMask(Ht),De=Ht)},setFunc:function(Ht,yi,zn){(pe!==Ht||Oe!==yi||Ge!==zn)&&(s.stencilFunc(Ht,yi,zn),pe=Ht,Oe=yi,Ge=zn)},setOp:function(Ht,yi,zn){(xe!==Ht||nt!==yi||Qe!==zn)&&(s.stencilOp(Ht,yi,zn),xe=Ht,nt=yi,Qe=zn)},setLocked:function(Ht){X=Ht},setClear:function(Ht){$t!==Ht&&(s.clearStencil(Ht),$t=Ht)},reset:function(){X=!1,De=null,pe=null,Oe=null,Ge=null,xe=null,nt=null,Qe=null,$t=null}}}const o=new t,l=new n,c=new r,f=new WeakMap,h=new WeakMap;let p={},m={},g={},_=new WeakMap,y=[],M=null,S=!1,b=null,w=null,R=null,T=null,I=null,C=null,D=null,E=new be(0,0,0),N=0,U=!1,B=null,G=null,Y=null,k=null,j=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ne=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=ne>=1):K.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=ne>=2);let oe=null,he={};const qe=s.getParameter(s.SCISSOR_BOX),Ie=s.getParameter(s.VIEWPORT),et=new tn().fromArray(qe),rt=new tn().fromArray(Ie);function xt(X,De,pe,Oe){const Ge=new Uint8Array(4),xe=s.createTexture();s.bindTexture(X,xe),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let nt=0;nt<pe;nt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,Ge):s.texImage2D(De+nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ge);return xe}const le={};le[s.TEXTURE_2D]=xt(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=xt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[s.TEXTURE_2D_ARRAY]=xt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=xt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(s.DEPTH_TEST),l.setFunc(el),Me(!1),Re(xg),fe(s.CULL_FACE),ye(Hr);function fe(X){p[X]!==!0&&(s.enable(X),p[X]=!0)}function Ne(X){p[X]!==!1&&(s.disable(X),p[X]=!1)}function at(X,De){return g[X]!==De?(s.bindFramebuffer(X,De),g[X]=De,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=De),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=De),!0):!1}function We(X,De){let pe=y,Oe=!1;if(X){pe=_.get(De),pe===void 0&&(pe=[],_.set(De,pe));const Ge=X.textures;if(pe.length!==Ge.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,nt=Ge.length;xe<nt;xe++)pe[xe]=s.COLOR_ATTACHMENT0+xe;pe.length=Ge.length,Oe=!0}}else pe[0]!==s.BACK&&(pe[0]=s.BACK,Oe=!0);Oe&&s.drawBuffers(pe)}function ft(X){return M!==X?(s.useProgram(X),M=X,!0):!1}const Ct={[Ia]:s.FUNC_ADD,[Lb]:s.FUNC_SUBTRACT,[Nb]:s.FUNC_REVERSE_SUBTRACT};Ct[Db]=s.MIN,Ct[Ub]=s.MAX;const me={[Fb]:s.ZERO,[Ob]:s.ONE,[Bb]:s.SRC_COLOR,[Vg]:s.SRC_ALPHA,[Wb]:s.SRC_ALPHA_SATURATE,[Hb]:s.DST_COLOR,[kb]:s.DST_ALPHA,[zb]:s.ONE_MINUS_SRC_COLOR,[Hg]:s.ONE_MINUS_SRC_ALPHA,[Gb]:s.ONE_MINUS_DST_COLOR,[Vb]:s.ONE_MINUS_DST_ALPHA,[Xb]:s.CONSTANT_COLOR,[qb]:s.ONE_MINUS_CONSTANT_COLOR,[Yb]:s.CONSTANT_ALPHA,[jb]:s.ONE_MINUS_CONSTANT_ALPHA};function ye(X,De,pe,Oe,Ge,xe,nt,Qe,$t,Ht){if(X===Hr){S===!0&&(Ne(s.BLEND),S=!1);return}if(S===!1&&(fe(s.BLEND),S=!0),X!==Ib){if(X!==b||Ht!==U){if((w!==Ia||I!==Ia)&&(s.blendEquation(s.FUNC_ADD),w=Ia,I=Ia),Ht)switch(X){case Ko:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dn:s.blendFunc(s.ONE,s.ONE);break;case yg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:st("WebGLState: Invalid blending: ",X);break}else switch(X){case Ko:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case yg:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bg:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",X);break}R=null,T=null,C=null,D=null,E.set(0,0,0),N=0,b=X,U=Ht}return}Ge=Ge||De,xe=xe||pe,nt=nt||Oe,(De!==w||Ge!==I)&&(s.blendEquationSeparate(Ct[De],Ct[Ge]),w=De,I=Ge),(pe!==R||Oe!==T||xe!==C||nt!==D)&&(s.blendFuncSeparate(me[pe],me[Oe],me[xe],me[nt]),R=pe,T=Oe,C=xe,D=nt),(Qe.equals(E)===!1||$t!==N)&&(s.blendColor(Qe.r,Qe.g,Qe.b,$t),E.copy(Qe),N=$t),b=X,U=!1}function Se(X,De){X.side===di?Ne(s.CULL_FACE):fe(s.CULL_FACE);let pe=X.side===li;De&&(pe=!pe),Me(pe),X.blending===Ko&&X.transparent===!1?ye(Hr):ye(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),l.setFunc(X.depthFunc),l.setTest(X.depthTest),l.setMask(X.depthWrite),o.setMask(X.colorWrite);const Oe=X.stencilWrite;c.setTest(Oe),Oe&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ke(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function Me(X){B!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),B=X)}function Re(X){X!==Cb?(fe(s.CULL_FACE),X!==G&&(X===xg?s.cullFace(s.BACK):X===Rb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),G=X}function lt(X){X!==Y&&(q&&s.lineWidth(X),Y=X)}function Ke(X,De,pe){X?(fe(s.POLYGON_OFFSET_FILL),(k!==De||j!==pe)&&(k=De,j=pe,l.getReversed()&&(De=-De),s.polygonOffset(De,pe))):Ne(s.POLYGON_OFFSET_FILL)}function ot(X){X?fe(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function mt(X){X===void 0&&(X=s.TEXTURE0+H-1),oe!==X&&(s.activeTexture(X),oe=X)}function V(X,De,pe){pe===void 0&&(oe===null?pe=s.TEXTURE0+H-1:pe=oe);let Oe=he[pe];Oe===void 0&&(Oe={type:void 0,texture:void 0},he[pe]=Oe),(Oe.type!==X||Oe.texture!==De)&&(oe!==pe&&(s.activeTexture(pe),oe=pe),s.bindTexture(X,De||le[X]),Oe.type=X,Oe.texture=De)}function Pt(){const X=he[oe];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Mt(){try{s.compressedTexImage2D(...arguments)}catch(X){st("WebGLState:",X)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(X){st("WebGLState:",X)}}function A(){try{s.texSubImage2D(...arguments)}catch(X){st("WebGLState:",X)}}function $(){try{s.texSubImage3D(...arguments)}catch(X){st("WebGLState:",X)}}function ee(){try{s.compressedTexSubImage2D(...arguments)}catch(X){st("WebGLState:",X)}}function ce(){try{s.compressedTexSubImage3D(...arguments)}catch(X){st("WebGLState:",X)}}function Te(){try{s.texStorage2D(...arguments)}catch(X){st("WebGLState:",X)}}function Pe(){try{s.texStorage3D(...arguments)}catch(X){st("WebGLState:",X)}}function ue(){try{s.texImage2D(...arguments)}catch(X){st("WebGLState:",X)}}function de(){try{s.texImage3D(...arguments)}catch(X){st("WebGLState:",X)}}function Ae(X){return m[X]!==void 0?m[X]:s.getParameter(X)}function Je(X,De){m[X]!==De&&(s.pixelStorei(X,De),m[X]=De)}function ze(X){et.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),et.copy(X))}function Fe(X){rt.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),rt.copy(X))}function it(X,De){let pe=h.get(De);pe===void 0&&(pe=new WeakMap,h.set(De,pe));let Oe=pe.get(X);Oe===void 0&&(Oe=s.getUniformBlockIndex(De,X.name),pe.set(X,Oe))}function ut(X,De){const Oe=h.get(De).get(X);f.get(De)!==Oe&&(s.uniformBlockBinding(De,Oe,X.__bindingPointIndex),f.set(De,Oe))}function yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),l.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),p={},m={},oe=null,he={},g={},_=new WeakMap,y=[],M=null,S=!1,b=null,w=null,R=null,T=null,I=null,C=null,D=null,E=new be(0,0,0),N=0,U=!1,B=null,G=null,Y=null,k=null,j=null,et.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:fe,disable:Ne,bindFramebuffer:at,drawBuffers:We,useProgram:ft,setBlending:ye,setMaterial:Se,setFlipSided:Me,setCullFace:Re,setLineWidth:lt,setPolygonOffset:Ke,setScissorTest:ot,activeTexture:mt,bindTexture:V,unbindTexture:Pt,compressedTexImage2D:Mt,compressedTexImage3D:F,texImage2D:ue,texImage3D:de,pixelStorei:Je,getParameter:Ae,updateUBOMapping:it,uniformBlockBinding:ut,texStorage2D:Te,texStorage3D:Pe,texSubImage2D:A,texSubImage3D:$,compressedTexSubImage2D:ee,compressedTexSubImage3D:ce,scissor:ze,viewport:Fe,reset:yt}}function yN(s,e,t,n,r,o,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new _e,p=new WeakMap,m=new Set;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(F,A){return y?new OffscreenCanvas(F,A):Dc("canvas")}function S(F,A,$){let ee=1;const ce=Mt(F);if((ce.width>$||ce.height>$)&&(ee=$/Math.max(ce.width,ce.height)),ee<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Te=Math.floor(ee*ce.width),Pe=Math.floor(ee*ce.height);g===void 0&&(g=M(Te,Pe));const ue=A?M(Te,Pe):g;return ue.width=Te,ue.height=Pe,ue.getContext("2d").drawImage(F,0,0,Te,Pe),Be("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Te+"x"+Pe+")."),ue}else return"data"in F&&Be("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),F;return F}function b(F){return F.generateMipmaps}function w(F){s.generateMipmap(F)}function R(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(F,A,$,ee,ce,Te=!1){if(F!==null){if(s[F]!==void 0)return s[F];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Pe;ee&&(Pe=e.get("EXT_texture_norm16"),Pe||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=A;if(A===s.RED&&($===s.FLOAT&&(ue=s.R32F),$===s.HALF_FLOAT&&(ue=s.R16F),$===s.UNSIGNED_BYTE&&(ue=s.R8),$===s.UNSIGNED_SHORT&&Pe&&(ue=Pe.R16_EXT),$===s.SHORT&&Pe&&(ue=Pe.R16_SNORM_EXT)),A===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.R8UI),$===s.UNSIGNED_SHORT&&(ue=s.R16UI),$===s.UNSIGNED_INT&&(ue=s.R32UI),$===s.BYTE&&(ue=s.R8I),$===s.SHORT&&(ue=s.R16I),$===s.INT&&(ue=s.R32I)),A===s.RG&&($===s.FLOAT&&(ue=s.RG32F),$===s.HALF_FLOAT&&(ue=s.RG16F),$===s.UNSIGNED_BYTE&&(ue=s.RG8),$===s.UNSIGNED_SHORT&&Pe&&(ue=Pe.RG16_EXT),$===s.SHORT&&Pe&&(ue=Pe.RG16_SNORM_EXT)),A===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.RG8UI),$===s.UNSIGNED_SHORT&&(ue=s.RG16UI),$===s.UNSIGNED_INT&&(ue=s.RG32UI),$===s.BYTE&&(ue=s.RG8I),$===s.SHORT&&(ue=s.RG16I),$===s.INT&&(ue=s.RG32I)),A===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),$===s.UNSIGNED_INT&&(ue=s.RGB32UI),$===s.BYTE&&(ue=s.RGB8I),$===s.SHORT&&(ue=s.RGB16I),$===s.INT&&(ue=s.RGB32I)),A===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),$===s.UNSIGNED_INT&&(ue=s.RGBA32UI),$===s.BYTE&&(ue=s.RGBA8I),$===s.SHORT&&(ue=s.RGBA16I),$===s.INT&&(ue=s.RGBA32I)),A===s.RGB&&($===s.UNSIGNED_SHORT&&Pe&&(ue=Pe.RGB16_EXT),$===s.SHORT&&Pe&&(ue=Pe.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),A===s.RGBA){const de=Te?Nc:Lt.getTransfer(ce);$===s.FLOAT&&(ue=s.RGBA32F),$===s.HALF_FLOAT&&(ue=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ue=de===Qt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Pe&&(ue=Pe.RGBA16_EXT),$===s.SHORT&&Pe&&(ue=Pe.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function I(F,A){let $;return F?A===null||A===or||A===nl?$=s.DEPTH24_STENCIL8:A===gi?$=s.DEPTH32F_STENCIL8:A===tl&&($=s.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===or||A===nl?$=s.DEPTH_COMPONENT24:A===gi?$=s.DEPTH_COMPONENT32F:A===tl&&($=s.DEPTH_COMPONENT16),$}function C(F,A){return b(F)===!0||F.isFramebufferTexture&&F.minFilter!==An&&F.minFilter!==fn?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function D(F){const A=F.target;A.removeEventListener("dispose",D),N(A),A.isVideoTexture&&p.delete(A),A.isHTMLTexture&&m.delete(A)}function E(F){const A=F.target;A.removeEventListener("dispose",E),B(A)}function N(F){const A=n.get(F);if(A.__webglInit===void 0)return;const $=F.source,ee=_.get($);if(ee){const ce=ee[A.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&U(F),Object.keys(ee).length===0&&_.delete($)}n.remove(F)}function U(F){const A=n.get(F);s.deleteTexture(A.__webglTexture);const $=F.source,ee=_.get($);delete ee[A.__cacheKey],l.memory.textures--}function B(F){const A=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(A.__webglFramebuffer[ee]))for(let ce=0;ce<A.__webglFramebuffer[ee].length;ce++)s.deleteFramebuffer(A.__webglFramebuffer[ee][ce]);else s.deleteFramebuffer(A.__webglFramebuffer[ee]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ee])}else{if(Array.isArray(A.__webglFramebuffer))for(let ee=0;ee<A.__webglFramebuffer.length;ee++)s.deleteFramebuffer(A.__webglFramebuffer[ee]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ee=0;ee<A.__webglColorRenderbuffer.length;ee++)A.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ee]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const $=F.textures;for(let ee=0,ce=$.length;ee<ce;ee++){const Te=n.get($[ee]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),l.memory.textures--),n.remove($[ee])}n.remove(F)}let G=0;function Y(){G=0}function k(){return G}function j(F){G=F}function H(){const F=G;return F>=r.maxTextures&&Be("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+r.maxTextures),G+=1,F}function q(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function ne(F,A){const $=n.get(F);if(F.isVideoTexture&&V(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&$.__version!==F.version){const ee=F.image;if(ee===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne($,F,A);return}}else F.isExternalTexture&&($.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+A)}function K(F,A){const $=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&$.__version!==F.version){Ne($,F,A);return}else F.isExternalTexture&&($.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+A)}function oe(F,A){const $=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&$.__version!==F.version){Ne($,F,A);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+A)}function he(F,A){const $=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&$.__version!==F.version){at($,F,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+A)}const qe={[Ac]:s.REPEAT,[Pi]:s.CLAMP_TO_EDGE,[Cc]:s.MIRRORED_REPEAT},Ie={[An]:s.NEAREST,[$g]:s.NEAREST_MIPMAP_NEAREST,[qo]:s.NEAREST_MIPMAP_LINEAR,[fn]:s.LINEAR,[vc]:s.LINEAR_MIPMAP_NEAREST,[kr]:s.LINEAR_MIPMAP_LINEAR},et={[rS]:s.NEVER,[cS]:s.ALWAYS,[sS]:s.LESS,[id]:s.LEQUAL,[aS]:s.EQUAL,[rd]:s.GEQUAL,[oS]:s.GREATER,[lS]:s.NOTEQUAL};function rt(F,A){if(A.type===gi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===fn||A.magFilter===vc||A.magFilter===qo||A.magFilter===kr||A.minFilter===fn||A.minFilter===vc||A.minFilter===qo||A.minFilter===kr)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,qe[A.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,qe[A.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,qe[A.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,Ie[A.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,Ie[A.minFilter]),A.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,et[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===An||A.minFilter!==qo&&A.minFilter!==kr||A.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(F,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function xt(F,A){let $=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",D));const ee=A.source;let ce=_.get(ee);ce===void 0&&(ce={},_.set(ee,ce));const Te=q(A);if(Te!==F.__cacheKey){ce[Te]===void 0&&(ce[Te]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,$=!0),ce[Te].usedTimes++;const Pe=ce[F.__cacheKey];Pe!==void 0&&(ce[F.__cacheKey].usedTimes--,Pe.usedTimes===0&&U(A)),F.__cacheKey=Te,F.__webglTexture=ce[Te].texture}return $}function le(F,A,$){return Math.floor(Math.floor(F/$)/A)}function fe(F,A,$,ee){const Te=F.updateRanges;if(Te.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,$,ee,A.data);else{Te.sort((Je,ze)=>Je.start-ze.start);let Pe=0;for(let Je=1;Je<Te.length;Je++){const ze=Te[Pe],Fe=Te[Je],it=ze.start+ze.count,ut=le(Fe.start,A.width,4),yt=le(ze.start,A.width,4);Fe.start<=it+1&&ut===yt&&le(Fe.start+Fe.count-1,A.width,4)===ut?ze.count=Math.max(ze.count,Fe.start+Fe.count-ze.start):(++Pe,Te[Pe]=Fe)}Te.length=Pe+1;const ue=t.getParameter(s.UNPACK_ROW_LENGTH),de=t.getParameter(s.UNPACK_SKIP_PIXELS),Ae=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Je=0,ze=Te.length;Je<ze;Je++){const Fe=Te[Je],it=Math.floor(Fe.start/4),ut=Math.ceil(Fe.count/4),yt=it%A.width,X=Math.floor(it/A.width),De=ut,pe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,yt),t.pixelStorei(s.UNPACK_SKIP_ROWS,X),t.texSubImage2D(s.TEXTURE_2D,0,yt,X,De,pe,$,ee,A.data)}F.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ue),t.pixelStorei(s.UNPACK_SKIP_PIXELS,de),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ae)}}function Ne(F,A,$){let ee=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ee=s.TEXTURE_3D);const ce=xt(F,A),Te=A.source;t.bindTexture(ee,F.__webglTexture,s.TEXTURE0+$);const Pe=n.get(Te);if(Te.version!==Pe.__version||ce===!0){if(t.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const pe=Lt.getPrimaries(Lt.workingColorSpace),Oe=A.colorSpace===fs?null:Lt.getPrimaries(A.colorSpace),Ge=A.colorSpace===fs||pe===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let de=S(A.image,!1,r.maxTextureSize);de=Pt(A,de);const Ae=o.convert(A.format,A.colorSpace),Je=o.convert(A.type);let ze=T(A.internalFormat,Ae,Je,A.normalized,A.colorSpace,A.isVideoTexture);rt(ee,A);let Fe;const it=A.mipmaps,ut=A.isVideoTexture!==!0,yt=Pe.__version===void 0||ce===!0,X=Te.dataReady,De=C(A,de);if(A.isDepthTexture)ze=I(A.format===Hs,A.type),yt&&(ut?t.texStorage2D(s.TEXTURE_2D,1,ze,de.width,de.height):t.texImage2D(s.TEXTURE_2D,0,ze,de.width,de.height,0,Ae,Je,null));else if(A.isDataTexture)if(it.length>0){ut&&yt&&t.texStorage2D(s.TEXTURE_2D,De,ze,it[0].width,it[0].height);for(let pe=0,Oe=it.length;pe<Oe;pe++)Fe=it[pe],ut?X&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,Fe.width,Fe.height,Ae,Je,Fe.data):t.texImage2D(s.TEXTURE_2D,pe,ze,Fe.width,Fe.height,0,Ae,Je,Fe.data);A.generateMipmaps=!1}else ut?(yt&&t.texStorage2D(s.TEXTURE_2D,De,ze,de.width,de.height),X&&fe(A,de,Ae,Je)):t.texImage2D(s.TEXTURE_2D,0,ze,de.width,de.height,0,Ae,Je,de.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ut&&yt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,ze,it[0].width,it[0].height,de.depth);for(let pe=0,Oe=it.length;pe<Oe;pe++)if(Fe=it[pe],A.format!==oi)if(Ae!==null)if(ut){if(X)if(A.layerUpdates.size>0){const Ge=Ig(Fe.width,Fe.height,A.format,A.type);for(const xe of A.layerUpdates){const nt=Fe.data.subarray(xe*Ge/Fe.data.BYTES_PER_ELEMENT,(xe+1)*Ge/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,xe,Fe.width,Fe.height,1,Ae,nt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Fe.width,Fe.height,de.depth,Ae,Fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pe,ze,Fe.width,Fe.height,de.depth,0,Fe.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?X&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Fe.width,Fe.height,de.depth,Ae,Je,Fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,pe,ze,Fe.width,Fe.height,de.depth,0,Ae,Je,Fe.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{ut&&yt&&t.texStorage2D(s.TEXTURE_2D,De,ze,it[0].width,it[0].height);for(let pe=0,Oe=it.length;pe<Oe;pe++)Fe=it[pe],A.format!==oi?Ae!==null?ut?X&&t.compressedTexSubImage2D(s.TEXTURE_2D,pe,0,0,Fe.width,Fe.height,Ae,Fe.data):t.compressedTexImage2D(s.TEXTURE_2D,pe,ze,Fe.width,Fe.height,0,Fe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?X&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,Fe.width,Fe.height,Ae,Je,Fe.data):t.texImage2D(s.TEXTURE_2D,pe,ze,Fe.width,Fe.height,0,Ae,Je,Fe.data)}else if(A.isDataArrayTexture)if(ut){if(yt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,ze,de.width,de.height,de.depth),X)if(A.layerUpdates.size>0){const pe=Ig(de.width,de.height,A.format,A.type);for(const Oe of A.layerUpdates){const Ge=de.data.subarray(Oe*pe/de.data.BYTES_PER_ELEMENT,(Oe+1)*pe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Oe,de.width,de.height,1,Ae,Je,Ge)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ae,Je,de.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ze,de.width,de.height,de.depth,0,Ae,Je,de.data);else if(A.isData3DTexture)ut?(yt&&t.texStorage3D(s.TEXTURE_3D,De,ze,de.width,de.height,de.depth),X&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ae,Je,de.data)):t.texImage3D(s.TEXTURE_3D,0,ze,de.width,de.height,de.depth,0,Ae,Je,de.data);else if(A.isFramebufferTexture){if(yt)if(ut)t.texStorage2D(s.TEXTURE_2D,De,ze,de.width,de.height);else{let pe=de.width,Oe=de.height;for(let Ge=0;Ge<De;Ge++)t.texImage2D(s.TEXTURE_2D,Ge,ze,pe,Oe,0,Ae,Je,null),pe>>=1,Oe>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){const pe=s.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),de.parentNode!==pe){pe.appendChild(de),m.add(A),pe.onpaint=Oe=>{const Ge=Oe.changedElements;for(const xe of m)Ge.includes(xe.image)&&(xe.needsUpdate=!0)},pe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,de);else{const Ge=s.RGBA,xe=s.RGBA,nt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ge,xe,nt,de)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(it.length>0){if(ut&&yt){const pe=Mt(it[0]);t.texStorage2D(s.TEXTURE_2D,De,ze,pe.width,pe.height)}for(let pe=0,Oe=it.length;pe<Oe;pe++)Fe=it[pe],ut?X&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,Ae,Je,Fe):t.texImage2D(s.TEXTURE_2D,pe,ze,Ae,Je,Fe);A.generateMipmaps=!1}else if(ut){if(yt){const pe=Mt(de);t.texStorage2D(s.TEXTURE_2D,De,ze,pe.width,pe.height)}X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Je,de)}else t.texImage2D(s.TEXTURE_2D,0,ze,Ae,Je,de);b(A)&&w(ee),Pe.__version=Te.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function at(F,A,$){if(A.image.length!==6)return;const ee=xt(F,A),ce=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+$);const Te=n.get(ce);if(ce.version!==Te.__version||ee===!0){t.activeTexture(s.TEXTURE0+$);const Pe=Lt.getPrimaries(Lt.workingColorSpace),ue=A.colorSpace===fs?null:Lt.getPrimaries(A.colorSpace),de=A.colorSpace===fs||Pe===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ae=A.isCompressedTexture||A.image[0].isCompressedTexture,Je=A.image[0]&&A.image[0].isDataTexture,ze=[];for(let xe=0;xe<6;xe++)!Ae&&!Je?ze[xe]=S(A.image[xe],!0,r.maxCubemapSize):ze[xe]=Je?A.image[xe].image:A.image[xe],ze[xe]=Pt(A,ze[xe]);const Fe=ze[0],it=o.convert(A.format,A.colorSpace),ut=o.convert(A.type),yt=T(A.internalFormat,it,ut,A.normalized,A.colorSpace),X=A.isVideoTexture!==!0,De=Te.__version===void 0||ee===!0,pe=ce.dataReady;let Oe=C(A,Fe);rt(s.TEXTURE_CUBE_MAP,A);let Ge;if(Ae){X&&De&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,yt,Fe.width,Fe.height);for(let xe=0;xe<6;xe++){Ge=ze[xe].mipmaps;for(let nt=0;nt<Ge.length;nt++){const Qe=Ge[nt];A.format!==oi?it!==null?X?pe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt,0,0,Qe.width,Qe.height,it,Qe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt,yt,Qe.width,Qe.height,0,Qe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt,0,0,Qe.width,Qe.height,it,ut,Qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt,yt,Qe.width,Qe.height,0,it,ut,Qe.data)}}}else{if(Ge=A.mipmaps,X&&De){Ge.length>0&&Oe++;const xe=Mt(ze[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,yt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Je){X?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ze[xe].width,ze[xe].height,it,ut,ze[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,yt,ze[xe].width,ze[xe].height,0,it,ut,ze[xe].data);for(let nt=0;nt<Ge.length;nt++){const $t=Ge[nt].image[xe].image;X?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt+1,0,0,$t.width,$t.height,it,ut,$t.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt+1,yt,$t.width,$t.height,0,it,ut,$t.data)}}else{X?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,it,ut,ze[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,yt,it,ut,ze[xe]);for(let nt=0;nt<Ge.length;nt++){const Qe=Ge[nt];X?pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt+1,0,0,it,ut,Qe.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,nt+1,yt,it,ut,Qe.image[xe])}}}b(A)&&w(s.TEXTURE_CUBE_MAP),Te.__version=ce.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function We(F,A,$,ee,ce,Te){const Pe=o.convert($.format,$.colorSpace),ue=o.convert($.type),de=T($.internalFormat,Pe,ue,$.normalized,$.colorSpace),Ae=n.get(A),Je=n.get($);if(Je.__renderTarget=A,!Ae.__hasExternalTextures){const ze=Math.max(1,A.width>>Te),Fe=Math.max(1,A.height>>Te);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?t.texImage3D(ce,Te,de,ze,Fe,A.depth,0,Pe,ue,null):t.texImage2D(ce,Te,de,ze,Fe,0,Pe,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,F),mt(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,ce,Je.__webglTexture,0,ot(A)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,ce,Je.__webglTexture,Te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(F,A,$){if(s.bindRenderbuffer(s.RENDERBUFFER,F),A.depthBuffer){const ee=A.depthTexture,ce=ee&&ee.isDepthTexture?ee.type:null,Te=I(A.stencilBuffer,ce),Pe=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;mt(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot(A),Te,A.width,A.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot(A),Te,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Te,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,F)}else{const ee=A.textures;for(let ce=0;ce<ee.length;ce++){const Te=ee[ce],Pe=o.convert(Te.format,Te.colorSpace),ue=o.convert(Te.type),de=T(Te.internalFormat,Pe,ue,Te.normalized,Te.colorSpace);mt(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot(A),de,A.width,A.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot(A),de,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,de,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(F,A,$){const ee=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ce=n.get(A.depthTexture);if(ce.__renderTarget=A,(!ce.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ee){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,A.depthTexture.addEventListener("dispose",D)),ce.__webglTexture===void 0){ce.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),rt(s.TEXTURE_CUBE_MAP,A.depthTexture);const Ae=o.convert(A.depthTexture.format),Je=o.convert(A.depthTexture.type);let ze;A.depthTexture.format===Wr?ze=s.DEPTH_COMPONENT24:A.depthTexture.format===Hs&&(ze=s.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,ze,A.width,A.height,0,Ae,Je,null)}}else ne(A.depthTexture,0);const Te=ce.__webglTexture,Pe=ot(A),ue=ee?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,de=A.depthTexture.format===Hs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===Wr)mt(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ue,Te,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,de,ue,Te,0);else if(A.depthTexture.format===Hs)mt(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ue,Te,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,de,ue,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(F){const A=n.get(F),$=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const ee=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ee){const ce=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ee.removeEventListener("dispose",ce)};ee.addEventListener("dispose",ce),A.__depthDisposeCallback=ce}A.__boundDepthTexture=ee}if(F.depthTexture&&!A.__autoAllocateDepthBuffer)if($)for(let ee=0;ee<6;ee++)Ct(A.__webglFramebuffer[ee],F,ee);else{const ee=F.texture.mipmaps;ee&&ee.length>0?Ct(A.__webglFramebuffer[0],F,0):Ct(A.__webglFramebuffer,F,0)}else if($){A.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ee]),A.__webglDepthbuffer[ee]===void 0)A.__webglDepthbuffer[ee]=s.createRenderbuffer(),ft(A.__webglDepthbuffer[ee],F,!1);else{const ce=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=A.__webglDepthbuffer[ee];s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,Te)}}else{const ee=F.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),ft(A.__webglDepthbuffer,F,!1);else{const ce=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,Te)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(F,A,$){const ee=n.get(F);A!==void 0&&We(ee.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&me(F)}function Se(F){const A=F.texture,$=n.get(F),ee=n.get(A);F.addEventListener("dispose",E);const ce=F.textures,Te=F.isWebGLCubeRenderTarget===!0,Pe=ce.length>1;if(Pe||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=A.version,l.memory.textures++),Te){$.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[ue]=[];for(let de=0;de<A.mipmaps.length;de++)$.__webglFramebuffer[ue][de]=s.createFramebuffer()}else $.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let ue=0;ue<A.mipmaps.length;ue++)$.__webglFramebuffer[ue]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let ue=0,de=ce.length;ue<de;ue++){const Ae=n.get(ce[ue]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),l.memory.textures++)}if(F.samples>0&&mt(F)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ue=0;ue<ce.length;ue++){const de=ce[ue];$.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[ue]);const Ae=o.convert(de.format,de.colorSpace),Je=o.convert(de.type),ze=T(de.internalFormat,Ae,Je,de.normalized,de.colorSpace,F.isXRRenderTarget===!0),Fe=ot(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,ze,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,$.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ft($.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Te){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),rt(s.TEXTURE_CUBE_MAP,A);for(let ue=0;ue<6;ue++)if(A.mipmaps&&A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)We($.__webglFramebuffer[ue][de],F,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else We($.__webglFramebuffer[ue],F,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);b(A)&&w(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ue=0,de=ce.length;ue<de;ue++){const Ae=ce[ue],Je=n.get(Ae);let ze=s.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ze=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ze,Je.__webglTexture),rt(ze,Ae),We($.__webglFramebuffer,F,Ae,s.COLOR_ATTACHMENT0+ue,ze,0),b(Ae)&&w(ze)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ue=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,ee.__webglTexture),rt(ue,A),A.mipmaps&&A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)We($.__webglFramebuffer[de],F,A,s.COLOR_ATTACHMENT0,ue,de);else We($.__webglFramebuffer,F,A,s.COLOR_ATTACHMENT0,ue,0);b(A)&&w(ue),t.unbindTexture()}F.depthBuffer&&me(F)}function Me(F){const A=F.textures;for(let $=0,ee=A.length;$<ee;$++){const ce=A[$];if(b(ce)){const Te=R(F),Pe=n.get(ce).__webglTexture;t.bindTexture(Te,Pe),w(Te),t.unbindTexture()}}}const Re=[],lt=[];function Ke(F){if(F.samples>0){if(mt(F)===!1){const A=F.textures,$=F.width,ee=F.height;let ce=s.COLOR_BUFFER_BIT;const Te=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=n.get(F),ue=A.length>1;if(ue)for(let Ae=0;Ae<A.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const de=F.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ae=0;Ae<A.length;Ae++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ae]);const Je=n.get(A[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,$,ee,0,0,$,ee,ce,s.NEAREST),f===!0&&(Re.length=0,lt.length=0,Re.push(s.COLOR_ATTACHMENT0+Ae),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Re.push(Te),lt.push(Te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Re))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Ae=0;Ae<A.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ae]);const Je=n.get(A[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&f){const A=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function ot(F){return Math.min(r.maxSamples,F.samples)}function mt(F){const A=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function V(F){const A=l.render.frame;p.get(F)!==A&&(p.set(F,A),F.update())}function Pt(F,A){const $=F.colorSpace,ee=F.format,ce=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||$!==il&&$!==fs&&(Lt.getTransfer($)===Qt?(ee!==oi||ce!==pi)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",$)),A}function Mt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=Y,this.getTextureUnits=k,this.setTextureUnits=j,this.setTexture2D=ne,this.setTexture2DArray=K,this.setTexture3D=oe,this.setTextureCube=he,this.rebindTextures=ye,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=We,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function TM(s,e){function t(n,r=fs){let o;const l=Lt.getTransfer(r);if(n===pi)return s.UNSIGNED_BYTE;if(n===Jh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Kh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Kg)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Qg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zg)return s.BYTE;if(n===Jg)return s.SHORT;if(n===tl)return s.UNSIGNED_SHORT;if(n===Zh)return s.INT;if(n===or)return s.UNSIGNED_INT;if(n===gi)return s.FLOAT;if(n===br)return s.HALF_FLOAT;if(n===e0)return s.ALPHA;if(n===t0)return s.RGB;if(n===oi)return s.RGBA;if(n===Wr)return s.DEPTH_COMPONENT;if(n===Hs)return s.DEPTH_STENCIL;if(n===Qh)return s.RED;if(n===qc)return s.RED_INTEGER;if(n===qs)return s.RG;if(n===ed)return s.RG_INTEGER;if(n===td)return s.RGBA_INTEGER;if(n===_c||n===xc||n===yc||n===bc)if(l===Qt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===_c)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===_c)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ah||n===oh||n===lh||n===ch)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ah)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ch)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uh||n===fh||n===hh||n===dh||n===ph||n===Rc||n===mh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===uh||n===fh)return l===Qt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===hh)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===dh)return o.COMPRESSED_R11_EAC;if(n===ph)return o.COMPRESSED_SIGNED_R11_EAC;if(n===Rc)return o.COMPRESSED_RG11_EAC;if(n===mh)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===gh||n===vh||n===_h||n===xh||n===yh||n===bh||n===Sh||n===Mh||n===wh||n===Th||n===Eh||n===Ah||n===Ch||n===Rh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===gh)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vh)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_h)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xh)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yh)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bh)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sh)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mh)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wh)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Th)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eh)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ah)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ch)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rh)return l===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ph||n===Ih||n===Lh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Ph)return l===Qt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ih)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nh||n===Dh||n===Pc||n===Uh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Nh)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Dh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nl?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const bN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class MN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new f0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Li({vertexShader:bN,fragmentShader:SN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dn(new pl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wN extends Mr{constructor(e,t){super();const n=this;let r=null,o=1,l=null,c="local-floor",f=1,h=null,p=null,m=null,g=null,_=null,y=null;const M=typeof XRWebGLBinding<"u",S=new MN,b={},w=t.getContextAttributes();let R=null,T=null;const I=[],C=[],D=new _e;let E=null,N=null;const U=new jn;U.viewport=new tn;const B=new jn;B.viewport=new tn;const G=[U,B],Y=new uM;let k=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let fe=I[le];return fe===void 0&&(fe=new $f,I[le]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(le){let fe=I[le];return fe===void 0&&(fe=new $f,I[le]=fe),fe.getGripSpace()},this.getHand=function(le){let fe=I[le];return fe===void 0&&(fe=new $f,I[le]=fe),fe.getHandSpace()};function H(le){const fe=C.indexOf(le.inputSource);if(fe===-1)return;const Ne=I[fe];Ne!==void 0&&(Ne.update(le.inputSource,le.frame,h||l),Ne.dispatchEvent({type:le.type,data:le.inputSource}))}function q(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",ne);for(let le=0;le<I.length;le++){const fe=C[le];fe!==null&&(C[le]=null,I[le].disconnect(fe))}k=null,j=null,S.reset();for(const le in b)delete b[le];if(e.setRenderTarget(R),_=null,g=null,m=null,r=null,T=null,xt.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(D.width,D.height,!1),N!==null){const le=N.camera;le.fov=N.fov,le.zoom=N.zoom,le.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){o=le,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){c=le,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(le){h=le},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return m===null&&M&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(le){if(r=le,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",q),r.addEventListener("inputsourceschange",ne),w.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(D),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,at=null,We=null;w.depth&&(We=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ne=w.stencil?Hs:Wr,at=w.stencil?nl:or);const ft={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:o};m=this.getBinding(),g=m.createProjectionLayer(ft),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),T=new Ii(g.textureWidth,g.textureHeight,{format:oi,type:pi,depthTexture:new ol(g.textureWidth,g.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Ne={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(r,t,Ne),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),T=new Ii(_.framebufferWidth,_.framebufferHeight,{format:oi,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(f),h=null,l=await r.requestReferenceSpace(c),xt.setContext(r),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ne(le){for(let fe=0;fe<le.removed.length;fe++){const Ne=le.removed[fe],at=C.indexOf(Ne);at>=0&&(C[at]=null,I[at].disconnect(Ne))}for(let fe=0;fe<le.added.length;fe++){const Ne=le.added[fe];let at=C.indexOf(Ne);if(at===-1){for(let ft=0;ft<I.length;ft++)if(ft>=C.length){C.push(Ne),at=ft;break}else if(C[ft]===null){C[ft]=Ne,at=ft;break}if(at===-1)break}const We=I[at];We&&We.connect(Ne)}}const K=new O,oe=new O;function he(le,fe,Ne){K.setFromMatrixPosition(fe.matrixWorld),oe.setFromMatrixPosition(Ne.matrixWorld);const at=K.distanceTo(oe),We=fe.projectionMatrix.elements,ft=Ne.projectionMatrix.elements,Ct=We[14]/(We[10]-1),me=We[14]/(We[10]+1),ye=(We[9]+1)/We[5],Se=(We[9]-1)/We[5],Me=(We[8]-1)/We[0],Re=(ft[8]+1)/ft[0],lt=Ct*Me,Ke=Ct*Re,ot=at/(-Me+Re),mt=ot*-Me;if(fe.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(mt),le.translateZ(ot),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),We[10]===-1)le.projectionMatrix.copy(fe.projectionMatrix),le.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const V=Ct+ot,Pt=me+ot,Mt=lt-mt,F=Ke+(at-mt),A=ye*me/Pt*V,$=Se*me/Pt*V;le.projectionMatrix.makePerspective(Mt,F,A,$,V,Pt),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function qe(le,fe){fe===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(fe.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(r===null)return;let fe=le.near,Ne=le.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(Ne=S.depthFar)),Y.near=B.near=U.near=fe,Y.far=B.far=U.far=Ne,(k!==Y.near||j!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),k=Y.near,j=Y.far),Y.layers.mask=le.layers.mask|6,U.layers.mask=Y.layers.mask&-5,B.layers.mask=Y.layers.mask&-3;const at=le.parent,We=Y.cameras;qe(Y,at);for(let ft=0;ft<We.length;ft++)qe(We[ft],at);We.length===2?he(Y,U,B):Y.projectionMatrix.copy(U.projectionMatrix),N===null&&le.isPerspectiveCamera&&(N={camera:le,fov:le.fov,zoom:le.zoom}),Ie(le,Y,at)};function Ie(le,fe,Ne){Ne===null?le.matrix.copy(fe.matrixWorld):(le.matrix.copy(Ne.matrixWorld),le.matrix.invert(),le.matrix.multiply(fe.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(fe.projectionMatrix),le.projectionMatrixInverse.copy(fe.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=rl*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&_===null))return f},this.setFoveation=function(le){f=le,g!==null&&(g.fixedFoveation=le),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=le)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Y)},this.getCameraTexture=function(le){return b[le]};let et=null;function rt(le,fe){if(p=fe.getViewerPose(h||l),y=fe,p!==null){const Ne=p.views;_!==null&&(e.setRenderTargetFramebuffer(T,_.framebuffer),e.setRenderTarget(T));let at=!1;Ne.length!==Y.cameras.length&&(Y.cameras.length=0,at=!0);for(let me=0;me<Ne.length;me++){const ye=Ne[me];let Se=null;if(_!==null)Se=_.getViewport(ye);else{const Re=m.getViewSubImage(g,ye);Se=Re.viewport,me===0&&(e.setRenderTargetTextures(T,Re.colorTexture,Re.depthStencilTexture),e.setRenderTarget(T))}let Me=G[me];Me===void 0&&(Me=new jn,Me.layers.enable(me),Me.viewport=new tn,G[me]=Me),Me.matrix.fromArray(ye.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(ye.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Se.x,Se.y,Se.width,Se.height),me===0&&(Y.matrix.copy(Me.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),at===!0&&Y.cameras.push(Me)}const We=r.enabledFeatures;if(We&&We.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){m=n.getBinding();const me=m.getDepthInformation(Ne[0]);me&&me.isValid&&me.texture&&S.init(me,r.renderState)}if(We&&We.includes("camera-access")&&M){e.state.unbindTexture(),m=n.getBinding();for(let me=0;me<Ne.length;me++){const ye=Ne[me].camera;if(ye){let Se=b[ye];Se||(Se=new f0,b[ye]=Se);const Me=m.getCameraImage(ye);Se.sourceTexture=Me}}}}for(let Ne=0;Ne<I.length;Ne++){const at=C[Ne],We=I[Ne];at!==null&&We!==void 0&&We.update(at,fe,h||l)}et&&et(le,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),y=null}const xt=new xM;xt.setAnimationLoop(rt),this.setAnimationLoop=function(le){et=le},this.dispose=function(){}}}const TN=new _t,EM=new bt;EM.set(-1,0,0,0,1,0,0,0,1);function EN(s,e){function t(S,b){S.matrixAutoUpdate===!0&&S.updateMatrix(),b.value.copy(S.matrix)}function n(S,b){b.color.getRGB(S.fogColor.value,OS(s)),b.isFog?(S.fogNear.value=b.near,S.fogFar.value=b.far):b.isFogExp2&&(S.fogDensity.value=b.density)}function r(S,b,w,R,T){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?o(S,b):b.isMeshLambertMaterial?(o(S,b),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(o(S,b),m(S,b)):b.isMeshPhongMaterial?(o(S,b),p(S,b),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(o(S,b),g(S,b),b.isMeshPhysicalMaterial&&_(S,b,T)):b.isMeshMatcapMaterial?(o(S,b),y(S,b)):b.isMeshDepthMaterial?o(S,b):b.isMeshDistanceMaterial?(o(S,b),M(S,b)):b.isMeshNormalMaterial?o(S,b):b.isLineBasicMaterial?(l(S,b),b.isLineDashedMaterial&&c(S,b)):b.isPointsMaterial?f(S,b,w,R):b.isSpriteMaterial?h(S,b):b.isShadowMaterial?(S.color.value.copy(b.color),S.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function o(S,b){S.opacity.value=b.opacity,b.color&&S.diffuse.value.copy(b.color),b.emissive&&S.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(S.map.value=b.map,t(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,t(b.alphaMap,S.alphaMapTransform)),b.bumpMap&&(S.bumpMap.value=b.bumpMap,t(b.bumpMap,S.bumpMapTransform),S.bumpScale.value=b.bumpScale,b.side===li&&(S.bumpScale.value*=-1)),b.normalMap&&(S.normalMap.value=b.normalMap,t(b.normalMap,S.normalMapTransform),S.normalScale.value.copy(b.normalScale),b.side===li&&S.normalScale.value.negate()),b.displacementMap&&(S.displacementMap.value=b.displacementMap,t(b.displacementMap,S.displacementMapTransform),S.displacementScale.value=b.displacementScale,S.displacementBias.value=b.displacementBias),b.emissiveMap&&(S.emissiveMap.value=b.emissiveMap,t(b.emissiveMap,S.emissiveMapTransform)),b.specularMap&&(S.specularMap.value=b.specularMap,t(b.specularMap,S.specularMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest);const w=e.get(b),R=w.envMap,T=w.envMapRotation;R&&(S.envMap.value=R,S.envMapRotation.value.setFromMatrix4(TN.makeRotationFromEuler(T)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(EM),S.reflectivity.value=b.reflectivity,S.ior.value=b.ior,S.refractionRatio.value=b.refractionRatio),b.lightMap&&(S.lightMap.value=b.lightMap,S.lightMapIntensity.value=b.lightMapIntensity,t(b.lightMap,S.lightMapTransform)),b.aoMap&&(S.aoMap.value=b.aoMap,S.aoMapIntensity.value=b.aoMapIntensity,t(b.aoMap,S.aoMapTransform))}function l(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,b.map&&(S.map.value=b.map,t(b.map,S.mapTransform))}function c(S,b){S.dashSize.value=b.dashSize,S.totalSize.value=b.dashSize+b.gapSize,S.scale.value=b.scale}function f(S,b,w,R){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.size.value=b.size*w,S.scale.value=R*.5,b.map&&(S.map.value=b.map,t(b.map,S.uvTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,t(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function h(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.rotation.value=b.rotation,b.map&&(S.map.value=b.map,t(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,t(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function p(S,b){S.specular.value.copy(b.specular),S.shininess.value=Math.max(b.shininess,1e-4)}function m(S,b){b.gradientMap&&(S.gradientMap.value=b.gradientMap)}function g(S,b){S.metalness.value=b.metalness,b.metalnessMap&&(S.metalnessMap.value=b.metalnessMap,t(b.metalnessMap,S.metalnessMapTransform)),S.roughness.value=b.roughness,b.roughnessMap&&(S.roughnessMap.value=b.roughnessMap,t(b.roughnessMap,S.roughnessMapTransform)),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)}function _(S,b,w){S.ior.value=b.ior,b.sheen>0&&(S.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),S.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(S.sheenColorMap.value=b.sheenColorMap,t(b.sheenColorMap,S.sheenColorMapTransform)),b.sheenRoughnessMap&&(S.sheenRoughnessMap.value=b.sheenRoughnessMap,t(b.sheenRoughnessMap,S.sheenRoughnessMapTransform))),b.clearcoat>0&&(S.clearcoat.value=b.clearcoat,S.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(S.clearcoatMap.value=b.clearcoatMap,t(b.clearcoatMap,S.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,t(b.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(S.clearcoatNormalMap.value=b.clearcoatNormalMap,t(b.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===li&&S.clearcoatNormalScale.value.negate())),b.dispersion>0&&(S.dispersion.value=b.dispersion),b.retroreflectivity>0&&(S.retroreflectivity.value=b.retroreflectivity),b.iridescence>0&&(S.iridescence.value=b.iridescence,S.iridescenceIOR.value=b.iridescenceIOR,S.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(S.iridescenceMap.value=b.iridescenceMap,t(b.iridescenceMap,S.iridescenceMapTransform)),b.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=b.iridescenceThicknessMap,t(b.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),b.transmission>0&&(S.transmission.value=b.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),b.transmissionMap&&(S.transmissionMap.value=b.transmissionMap,t(b.transmissionMap,S.transmissionMapTransform)),S.thickness.value=b.thickness,b.thicknessMap&&(S.thicknessMap.value=b.thicknessMap,t(b.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=b.attenuationDistance,S.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(S.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(S.anisotropyMap.value=b.anisotropyMap,t(b.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=b.specularIntensity,S.specularColor.value.copy(b.specularColor),b.specularColorMap&&(S.specularColorMap.value=b.specularColorMap,t(b.specularColorMap,S.specularColorMapTransform)),b.specularIntensityMap&&(S.specularIntensityMap.value=b.specularIntensityMap,t(b.specularIntensityMap,S.specularIntensityMapTransform))}function y(S,b){b.matcap&&(S.matcap.value=b.matcap)}function M(S,b){const w=e.get(b).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function AN(s,e,t,n){let r={},o={},l=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(T,I){const C=I.program;n.uniformBlockBinding(T,C)}function h(T,I){let C=r[T.id];C===void 0&&(S(T),C=p(T),r[T.id]=C,T.addEventListener("dispose",w));const D=I.program;n.updateUBOMapping(T,D);const E=e.render.frame;o[T.id]!==E&&(g(T),o[T.id]=E)}function p(T){const I=m();T.__bindingPointIndex=I;const C=s.createBuffer(),D=T.__size,E=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,D,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,C),C}function m(){for(let T=0;T<c;T++)if(l.indexOf(T)===-1)return l.push(T),T;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const I=r[T.id],C=T.uniforms,D=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let E=0,N=C.length;E<N;E++){const U=C[E];if(Array.isArray(U))for(let B=0,G=U.length;B<G;B++)_(U[B],E,B,D);else _(U,E,0,D)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(T,I,C,D){if(M(T,I,C,D)===!0){const E=T.__offset,N=T.value;if(Array.isArray(N)){let U=0;for(let B=0;B<N.length;B++){const G=N[B],Y=b(G);y(G,T.__data,U),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(N,T.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,T.__data)}}function y(T,I,C){typeof T=="number"||typeof T=="boolean"?I[0]=T:T.isMatrix3?(I[0]=T.elements[0],I[1]=T.elements[1],I[2]=T.elements[2],I[3]=0,I[4]=T.elements[3],I[5]=T.elements[4],I[6]=T.elements[5],I[7]=0,I[8]=T.elements[6],I[9]=T.elements[7],I[10]=T.elements[8],I[11]=0):ArrayBuffer.isView(T)?I.set(new T.constructor(T.buffer,T.byteOffset,I.length)):T.toArray(I,C)}function M(T,I,C,D){const E=T.value,N=I+"_"+C;if(D[N]===void 0)return typeof E=="number"||typeof E=="boolean"?D[N]=E:ArrayBuffer.isView(E)?D[N]=E.slice():D[N]=E.clone(),!0;{const U=D[N];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return D[N]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(U.equals(E)===!1)return U.copy(E),!0}}return!1}function S(T){const I=T.uniforms;let C=0;const D=16;for(let N=0,U=I.length;N<U;N++){const B=Array.isArray(I[N])?I[N]:[I[N]];for(let G=0,Y=B.length;G<Y;G++){const k=B[G],j=Array.isArray(k.value)?k.value:[k.value];for(let H=0,q=j.length;H<q;H++){const ne=j[H],K=b(ne),oe=C%D,he=oe%K.boundary,qe=oe+he;C+=he,qe!==0&&D-qe<K.storage&&(C+=D-qe),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=C,C+=K.storage}}}const E=C%D;return E>0&&(C+=D-E),T.__size=C,T.__cache={},this}function b(T){const I={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(I.boundary=4,I.storage=4):T.isVector2?(I.boundary=8,I.storage=8):T.isVector3||T.isColor?(I.boundary=16,I.storage=12):T.isVector4?(I.boundary=16,I.storage=16):T.isMatrix3?(I.boundary=48,I.storage=48):T.isMatrix4?(I.boundary=64,I.storage=64):T.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(I.boundary=16,I.storage=T.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",T),I}function w(T){const I=T.target;I.removeEventListener("dispose",w);const C=l.indexOf(I.__bindingPointIndex);l.splice(C,1),s.deleteBuffer(r[I.id]),delete r[I.id],delete o[I.id]}function R(){for(const T in r)s.deleteBuffer(r[T]);l=[],r={},o={}}return{bind:f,update:h,dispose:R}}const CN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zr=null;function RN(){return zr===null&&(zr=new ar(CN,16,16,qs,br),zr.name="DFG_LUT",zr.minFilter=fn,zr.magFilter=fn,zr.wrapS=Pi,zr.wrapT=Pi,zr.generateMipmaps=!1,zr.needsUpdate=!0),zr}class AM{constructor(e={}){const{canvas:t=fS(),context:n=null,depth:r=!0,stencil:o=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1,outputBufferType:_=pi}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=l;const M=_,S=new Set([td,ed,qc]),b=new Set([pi,or,tl,nl,Jh,Kh]),w=new Uint32Array(4),R=new Int32Array(4),T=new O;let I=null,C=null;const D=[],E=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let B=!1,G=null,Y=null,k=null,j=null;this._outputColorSpace=Yn;let H=0,q=0,ne=null,K=-1,oe=null;const he=new tn,qe=new tn;let Ie=null;const et=new be(0);let rt=0,xt=t.width,le=t.height,fe=1,Ne=null,at=null;const We=new tn(0,0,xt,le),ft=new tn(0,0,xt,le);let Ct=!1;const me=new za;let ye=!1,Se=!1;const Me=new _t,Re=new O,lt=new tn,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function mt(){return ne===null?fe:1}let V=n;function Pt(L,W){return t.getContext(L,W)}let Mt,F,A,$,ee,ce,Te,Pe,ue,de,Ae,Je,ze,Fe,it,ut,yt,X,De,pe,Oe,Ge,xe;try{const L={alpha:!0,depth:r,stencil:o,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yh}`),t.addEventListener("webglcontextlost",$t,!1),t.addEventListener("webglcontextrestored",Ht,!1),t.addEventListener("webglcontextcreationerror",yi,!1),V===null){const W="webgl2";if(V=Pt(W,L),V===null)throw Pt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(L){throw t.removeEventListener("webglcontextlost",$t,!1),t.removeEventListener("webglcontextrestored",Ht,!1),t.removeEventListener("webglcontextcreationerror",yi,!1),st("WebGLRenderer: "+L.message),L}function nt(){Mt=new PI(V),Mt.init(),Oe=new TM(V,Mt),F=new yI(V,Mt,e,Oe),A=new xN(V,Mt),F.reversedDepthBuffer&&g&&A.buffers.depth.setReversed(!0),Y=V.createFramebuffer(),k=V.createFramebuffer(),j=V.createFramebuffer(),$=new NI(V),ee=new sN,ce=new yN(V,Mt,A,ee,F,Oe,$),Te=new RI(U),Pe=new U3(V),Ge=new _I(V,Pe),ue=new II(V,Pe,$,Ge),de=new UI(V,ue,Pe,Ge,$),X=new DI(V,F,ce),it=new bI(ee),Ae=new rN(U,Te,Mt,F,Ge,it),Je=new EN(U,ee),ze=new oN,Fe=new dN(Mt),yt=new vI(U,Te,A,de,y,f),ut=new _N(U,de,F),xe=new AN(V,$,F,A),De=new xI(V,Mt,$),pe=new LI(V,Mt,$),$.programs=Ae.programs,U.capabilities=F,U.extensions=Mt,U.properties=ee,U.renderLists=ze,U.shadowMap=ut,U.state=A,U.info=$}M!==pi&&(N=new OI(M,t.width,t.height,c,r,o));const Qe=new wN(U,V);this.xr=Qe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const L=Mt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Mt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(L){L!==void 0&&(fe=L,this.setSize(xt,le,!1))},this.getSize=function(L){return L.set(xt,le)},this.setSize=function(L,W,re=!0){if(Qe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=L,le=W,t.width=Math.floor(L*fe),t.height=Math.floor(W*fe),re===!0&&(t.style.width=L+"px",t.style.height=W+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,L,W)},this.getDrawingBufferSize=function(L){return L.set(xt*fe,le*fe).floor()},this.setDrawingBufferSize=function(L,W,re){xt=L,le=W,fe=re,t.width=Math.floor(L*re),t.height=Math.floor(W*re),this.setViewport(0,0,L,W)},this.setEffects=function(L){if(M===pi){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let W=0;W<L.length;W++)if(L[W].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(he)},this.getViewport=function(L){return L.copy(We)},this.setViewport=function(L,W,re,Q){L.isVector4?We.set(L.x,L.y,L.z,L.w):We.set(L,W,re,Q),A.viewport(he.copy(We).multiplyScalar(fe).round())},this.getScissor=function(L){return L.copy(ft)},this.setScissor=function(L,W,re,Q){L.isVector4?ft.set(L.x,L.y,L.z,L.w):ft.set(L,W,re,Q),A.scissor(qe.copy(ft).multiplyScalar(fe).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(L){A.setScissorTest(Ct=L)},this.setOpaqueSort=function(L){Ne=L},this.setTransparentSort=function(L){at=L},this.getClearColor=function(L){return L.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(L=!0,W=!0,re=!0){let Q=0;if(L){let J=!1;if(ne!==null){const ke=ne.texture.format;J=S.has(ke)}if(J){const ke=ne.texture.type,Ye=b.has(ke),Le=yt.getClearColor(),Ve=yt.getClearAlpha(),Ze=Le.r,St=Le.g,wt=Le.b;Ye?(w[0]=Ze,w[1]=St,w[2]=wt,w[3]=Ve,V.clearBufferuiv(V.COLOR,0,w)):(R[0]=Ze,R[1]=St,R[2]=wt,R[3]=Ve,V.clearBufferiv(V.COLOR,0,R))}else Q|=V.COLOR_BUFFER_BIT}W&&(Q|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(Q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&V.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),G=L},this.dispose=function(){t.removeEventListener("webglcontextlost",$t,!1),t.removeEventListener("webglcontextrestored",Ht,!1),t.removeEventListener("webglcontextcreationerror",yi,!1),yt.dispose(),ze.dispose(),Fe.dispose(),ee.dispose(),Te.dispose(),de.dispose(),Ge.dispose(),xe.dispose(),Ae.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",bl),Qe.removeEventListener("sessionend",Qs),$i.stop()};function $t(L){L.preventDefault(),Uc("WebGLRenderer: Context Lost."),B=!0}function Ht(){Uc("WebGLRenderer: Context Restored."),B=!1;const L=$.autoReset,W=ut.enabled,re=ut.autoUpdate,Q=ut.needsUpdate,J=ut.type;nt(),$.autoReset=L,ut.enabled=W,ut.autoUpdate=re,ut.needsUpdate=Q,ut.type=J}function yi(L){st("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function zn(L){const W=L.target;W.removeEventListener("dispose",zn),tu(W)}function tu(L){nu(L),ee.remove(L)}function nu(L){const W=ee.get(L).programs;W!==void 0&&(W.forEach(function(re){Ae.releaseProgram(re)}),L.isShaderMaterial&&Ae.releaseShaderCache(L))}this.renderBufferDirect=function(L,W,re,Q,J,ke){W===null&&(W=Ke);const Ye=J.isMesh&&J.matrixWorld.determinantAffine()<0,Le=Ml(L,W,re,Q,J);A.setMaterial(Q,Ye);let Ve=re.index,Ze=1;if(Q.wireframe===!0){if(Ve=ue.getWireframeAttribute(re),Ve===void 0)return;Ze=2}const St=re.drawRange,wt=re.attributes.position;let Ce=St.start*Ze,zt=(St.start+St.count)*Ze;ke!==null&&(Ce=Math.max(Ce,ke.start*Ze),zt=Math.min(zt,(ke.start+ke.count)*Ze)),Ve!==null?(Ce=Math.max(Ce,0),zt=Math.min(zt,Ve.count)):wt!=null&&(Ce=Math.max(Ce,0),zt=Math.min(zt,wt.count));const pn=zt-Ce;if(pn<0||pn===1/0)return;Ge.setup(J,Q,Le,re,Ve);let nn,Jt=De;if(Ve!==null&&(nn=Pe.get(Ve),Jt=pe,Jt.setIndex(nn)),J.isMesh)Q.wireframe===!0?(A.setLineWidth(Q.wireframeLinewidth*mt()),Jt.setMode(V.LINES)):Jt.setMode(V.TRIANGLES);else if(J.isLine){let kn=Q.linewidth;kn===void 0&&(kn=1),A.setLineWidth(kn*mt()),J.isLineSegments?Jt.setMode(V.LINES):J.isLineLoop?Jt.setMode(V.LINE_LOOP):Jt.setMode(V.LINE_STRIP)}else J.isPoints?Jt.setMode(V.POINTS):J.isSprite&&Jt.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const kn=J._multiDrawStarts,Xe=J._multiDrawCounts,Un=J._multiDrawCount,Nt=Ve?Pe.get(Ve).bytesPerElement:1,rn=ee.get(Q).currentProgram.getUniforms();for(let qt=0;qt<Un;qt++)rn.setValue(V,"_gl_DrawID",qt),Jt.render(kn[qt]/Nt,Xe[qt])}else if(J.isInstancedMesh)Jt.renderInstances(Ce,pn,J.count);else if(re.isInstancedBufferGeometry){const kn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Xe=Math.min(re.instanceCount,kn);Jt.renderInstances(Ce,pn,Xe)}else Jt.render(Ce,pn)};function Ks(L,W,re,Q){G!==null&&L.isNodeMaterial&&G.setObject(Q,L),ye===!0&&it.setState(L,re,!1),L.transparent===!0&&L.side===di&&L.forceSinglePass===!1?(L.side=li,L.needsUpdate=!0,xs(L,W,Q),L.side=Ws,L.needsUpdate=!0,xs(L,W,Q),L.side=di):xs(L,W,Q)}this.compile=function(L,W,re=null){re===null&&(re=L),G!==null&&G.renderStart(L,W,re),C=Fe.get(re),C.init(W),E.push(C),re.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(C.pushLight(J),J.castShadow&&C.pushShadow(J))}),L!==re&&L.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(C.pushLight(J),J.castShadow&&C.pushShadow(J))}),C.setupLights(),G!==null&&G.updateLights(C.state.lightsArray),Se=this.localClippingEnabled,ye=it.init(this.clippingPlanes,Se),ye===!0&&it.setGlobalState(this.clippingPlanes,W),G!==null&&ut.render(C.state.shadowsArray,re,W);const Q=new Set;return L.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const ke=J.material;if(ke)if(Array.isArray(ke))for(let Ye=0;Ye<ke.length;Ye++){const Le=ke[Ye];Ks(Le,re,W,J),Q.add(Le)}else Ks(ke,re,W,J),Q.add(ke)}),C=E.pop(),G!==null&&G.renderEnd(),Q},this.compileAsync=function(L,W,re=null){const Q=this.compile(L,W,re);return new Promise(J=>{function ke(){if(Q.forEach(function(Ye){const Ve=ee.get(Ye).currentProgram;(Ve===void 0||Ve.isReady())&&Q.delete(Ye)}),Q.size===0){J(L);return}setTimeout(ke,10)}Mt.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let ji=null;function Wa(L){ji&&ji(L)}function bl(){$i.stop()}function Qs(){$i.start()}const $i=new xM;$i.setAnimationLoop(Wa),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(L){ji=L,Qe.setAnimationLoop(L),L===null?$i.stop():$i.start()},Qe.addEventListener("sessionstart",bl),Qe.addEventListener("sessionend",Qs),this.render=function(L,W){if(W!==void 0&&W.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;G!==null&&G.renderStart(L,W);const re=Qe.enabled===!0&&Qe.isPresenting===!0,Q=N!==null&&(ne===null||re)&&N.begin(U,ne);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(W),W=Qe.getCamera()),L.isScene===!0&&L.onBeforeRender(U,L,W,ne),C=Fe.get(L,E.length),C.init(W),C.state.textureUnits=ce.getTextureUnits(),E.push(C),Me.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),me.setFromProjectionMatrix(Me,qi,W.reversedDepth),Se=this.localClippingEnabled,ye=it.init(this.clippingPlanes,Se),I=ze.get(L,D.length),I.init(),D.push(I),Qe.enabled===!0&&Qe.isPresenting===!0){const Ye=U.xr.getDepthSensingMesh();Ye!==null&&ea(Ye,W,-1/0,U.sortObjects)}ea(L,W,0,U.sortObjects),I.finish(),G!==null&&G.updateLights(C.state.lightsArray),U.sortObjects===!0&&I.sort(Ne,at),ot=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1,ot&&yt.addToRenderList(I,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&it.beginShadows();const J=C.state.shadowsArray;if(ut.render(J,L,W),ye===!0&&it.endShadows(),(Q&&N.hasRenderPass())===!1){const Ye=I.opaque,Le=I.transmissive;if(C.setupLights(),W.isArrayCamera){const Ve=W.cameras;if(Le.length>0)for(let Ze=0,St=Ve.length;Ze<St;Ze++){const wt=Ve[Ze];Sl(Ye,Le,L,wt)}ot&&yt.render(L);for(let Ze=0,St=Ve.length;Ze<St;Ze++){const wt=Ve[Ze];Tr(I,L,wt,wt.viewport)}}else Le.length>0&&Sl(Ye,Le,L,W),ot&&yt.render(L),Tr(I,L,W)}ne!==null&&q===0&&(ce.updateMultisampleRenderTarget(ne),ce.updateRenderTargetMipmap(ne)),Q&&N.end(U),L.isScene===!0&&L.onAfterRender(U,L,W),Ge.resetDefaultState(),K=-1,oe=null,E.pop(),E.length>0?(C=E[E.length-1],ce.setTextureUnits(C.state.textureUnits),ye===!0&&it.setGlobalState(U.clippingPlanes,C.state.camera)):C=null,D.pop(),D.length>0?I=D[D.length-1]:I=null,G!==null&&G.renderEnd()};function ea(L,W,re,Q){if(L.visible===!1)return;if(L.layers.test(W.layers)){if(L.isGroup)re=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(W);else if(L.isLightProbeGrid)C.pushLightProbeGrid(L);else if(L.isLight)C.pushLight(L),L.castShadow&&C.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(me)){Q&&lt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Me);const Ye=de.update(L),Le=L.material;Le.visible&&I.push(L,Ye,Le,re,lt.z,null,W)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(me))){const Ye=de.update(L),Le=L.material;if(Q&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),lt.copy(L.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),lt.copy(Ye.boundingSphere.center)),lt.applyMatrix4(L.matrixWorld).applyMatrix4(Me)),Array.isArray(Le)){const Ve=Ye.groups;for(let Ze=0,St=Ve.length;Ze<St;Ze++){const wt=Ve[Ze],Ce=Le[wt.materialIndex];Ce&&Ce.visible&&I.push(L,Ye,Ce,re,lt.z,wt,W)}}else Le.visible&&I.push(L,Ye,Le,re,lt.z,null,W)}}const ke=L.children;for(let Ye=0,Le=ke.length;Ye<Le;Ye++)ea(ke[Ye],W,re,Q)}function Tr(L,W,re,Q){const{opaque:J,transmissive:ke,transparent:Ye}=L;C.setupLightsView(re),ye===!0&&it.setGlobalState(U.clippingPlanes,re),Q&&A.viewport(he.copy(Q)),J.length>0&&Yr(J,W,re),ke.length>0&&Yr(ke,W,re),Ye.length>0&&Yr(Ye,W,re),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Sl(L,W,re,Q){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[Q.id]===void 0){const Ce=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[Q.id]=new Ii(1,1,{generateMipmaps:!0,type:Ce?br:pi,minFilter:kr,samples:Math.max(4,F.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const ke=C.state.transmissionRenderTarget[Q.id],Ye=Q.viewport||he;ke.setSize(Ye.z*U.transmissionResolutionScale,Ye.w*U.transmissionResolutionScale);const Le=U.getRenderTarget(),Ve=U.getActiveCubeFace(),Ze=U.getActiveMipmapLevel();U.setRenderTarget(ke),U.getClearColor(et),rt=U.getClearAlpha(),rt<1&&U.setClearColor(16777215,.5),U.clear(),ot&&yt.render(re);const St=U.toneMapping;U.toneMapping=sr;const wt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),C.setupLightsView(Q),ye===!0&&it.setGlobalState(U.clippingPlanes,Q),Yr(L,re,Q),ce.updateMultisampleRenderTarget(ke),ce.updateRenderTargetMipmap(ke),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let zt=0,pn=W.length;zt<pn;zt++){const nn=W[zt],{object:Jt,geometry:kn,material:Xe,group:Un}=nn;if(Xe.side===di&&Jt.layers.test(Q.layers)){const Nt=Xe.side;Xe.side=li,Xe.needsUpdate=!0,Xa(Jt,re,Q,kn,Xe,Un),Xe.side=Nt,Xe.needsUpdate=!0,Ce=!0}}Ce===!0&&(ce.updateMultisampleRenderTarget(ke),ce.updateRenderTargetMipmap(ke))}U.setRenderTarget(Le,Ve,Ze),U.setClearColor(et,rt),wt!==void 0&&(Q.viewport=wt),U.toneMapping=St}function Yr(L,W,re){const Q=W.isScene===!0?W.overrideMaterial:null;for(let J=0,ke=L.length;J<ke;J++){const Ye=L[J],{object:Le,geometry:Ve,group:Ze}=Ye;let St=Ye.material;St.allowOverride===!0&&Q!==null&&(St=Q),Le.layers.test(re.layers)&&Xa(Le,W,re,Ve,St,Ze)}}function Xa(L,W,re,Q,J,ke){G!==null&&J.isNodeMaterial&&G.setObject(L,J),L.onBeforeRender(U,W,re,Q,J,ke),L.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),J.onBeforeRender(U,W,re,Q,L,ke),J.transparent===!0&&J.side===di&&J.forceSinglePass===!1?(J.side=li,J.needsUpdate=!0,U.renderBufferDirect(re,W,Q,J,L,ke),J.side=Ws,J.needsUpdate=!0,U.renderBufferDirect(re,W,Q,J,L,ke),J.side=di):U.renderBufferDirect(re,W,Q,J,L,ke),L.onAfterRender(U,W,re,Q,J,ke)}function xs(L,W,re){W.isScene!==!0&&(W=Ke);const Q=ee.get(L),J=C.state.lights,ke=C.state.shadowsArray,Ye=J.state.version,Le=Ae.getParameters(L,J.state,ke,W,re,C.state.lightProbeGridArray),Ve=Ae.getProgramCacheKey(Le);let Ze=Q.programs;Q.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?W.environment:null,Q.fog=W.fog;const St=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;Q.envMap=Te.get(L.envMap||Q.environment,St),Q.envMapRotation=Q.environment!==null&&L.envMap===null?W.environmentRotation:L.envMapRotation,Ze===void 0&&(L.addEventListener("dispose",zn),Ze=new Map,Q.programs=Ze);let wt=Ze.get(Ve);if(wt!==void 0){if(Q.currentProgram===wt&&Q.lightsStateVersion===Ye)return ur(L,Le),wt}else Le.uniforms=Ae.getUniforms(L),G!==null&&L.isNodeMaterial&&G.build(L,re,Le),L.onBeforeCompile(Le,U),wt=Ae.acquireProgram(Le,Ve),Ze.set(Ve,wt),Q.uniforms=Le.uniforms;const Ce=Q.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ce.clippingPlanes=it.uniform),ur(L,Le),Q.needsLights=ia(L),Q.lightsStateVersion=Ye,Q.needsLights&&(Ce.ambientLightColor.value=J.state.ambient,Ce.lightProbe.value=J.state.probe,Ce.sunLights.value=J.state.sun,Ce.sunLightShadows.value=J.state.sunShadow,Ce.directionalLights.value=J.state.directional,Ce.directionalLightShadows.value=J.state.directionalShadow,Ce.spotLights.value=J.state.spot,Ce.spotLightShadows.value=J.state.spotShadow,Ce.rectAreaLights.value=J.state.rectArea,Ce.ltc_1.value=J.state.rectAreaLTC1,Ce.ltc_2.value=J.state.rectAreaLTC2,Ce.pointLights.value=J.state.point,Ce.pointLightShadows.value=J.state.pointShadow,Ce.hemisphereLights.value=J.state.hemi,Ce.sunShadowMatrix.value=J.state.sunShadowMatrix,Ce.sunShadowCascade.value=J.state.sunShadowCascade,Ce.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ce.spotLightMatrix.value=J.state.spotLightMatrix,Ce.spotLightMap.value=J.state.spotLightMap,Ce.pointShadowMatrix.value=J.state.pointShadowMatrix),Q.lightProbeGrid=C.state.lightProbeGridArray.length>0,Q.currentProgram=wt,Q.uniformsList=null,wt}function cr(L){if(L.uniformsList===null){const W=L.currentProgram.getUniforms();L.uniformsList=Zf.seqWithValue(W.seq,L.uniforms)}return L.uniformsList}function ur(L,W){const re=ee.get(L);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function ta(L,W){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;T.setFromMatrixPosition(W.matrixWorld);for(let re=0,Q=L.length;re<Q;re++){const J=L[re];if(J.texture!==null&&J.boundingBox.containsPoint(T))return J}return null}function Ml(L,W,re,Q,J){W.isScene!==!0&&(W=Ke),ce.resetTextureUnits();const ke=W.fog,Ye=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?W.environment:null,Le=ne===null?U.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Lt.workingColorSpace,Ve=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ze=Te.get(Q.envMap||Ye,Ve),St=Q.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,wt=!!re.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ce=!!re.morphAttributes.position,zt=!!re.morphAttributes.normal,pn=!!re.morphAttributes.color;let nn=sr;Q.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(nn=U.toneMapping);const Jt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,kn=Jt!==void 0?Jt.length:0,Xe=ee.get(Q),Un=C.state.lights;if(ye===!0&&(Se===!0||L!==oe)){const Zt=L===oe&&Q.id===K;it.setState(Q,L,Zt)}let Nt=!1;Q.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Un.state.version||Xe.outputColorSpace!==Le||J.isBatchedMesh&&Xe.batching===!1||!J.isBatchedMesh&&Xe.batching===!0||J.isBatchedMesh&&Xe.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Xe.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Xe.instancing===!1||!J.isInstancedMesh&&Xe.instancing===!0||J.isSkinnedMesh&&Xe.skinning===!1||!J.isSkinnedMesh&&Xe.skinning===!0||J.isInstancedMesh&&Xe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Xe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Xe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Xe.instancingMorph===!1&&J.morphTexture!==null||Xe.envMap!==Ze||Q.fog===!0&&Xe.fog!==ke||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==it.numPlanes||Xe.numIntersection!==it.numIntersection)||Xe.vertexAlphas!==St||Xe.vertexTangents!==wt||Xe.morphTargets!==Ce||Xe.morphNormals!==zt||Xe.morphColors!==pn||Xe.toneMapping!==nn||Xe.morphTargetsCount!==kn||!!Xe.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(Nt=!0):(Nt=!0,Xe.__version=Q.version);let rn=Xe.currentProgram;Nt===!0&&(rn=xs(Q,W,J),G&&Q.isNodeMaterial&&G.onUpdateProgram(Q,rn,Xe));let qt=!1,Di=!1,Zi=!1;const Gt=rn.getUniforms(),cn=Xe.uniforms;if(A.useProgram(rn.program)&&(qt=!0,Di=!0,Zi=!0),Q.id!==K&&(K=Q.id,Di=!0),Xe.needsLights){const Zt=ta(C.state.lightProbeGridArray,J);Xe.lightProbeGrid!==Zt&&(Xe.lightProbeGrid=Zt,Di=!0)}if(qt||oe!==L){A.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Gt.setValue(V,"projectionMatrix",L.projectionMatrix),Gt.setValue(V,"viewMatrix",L.matrixWorldInverse);const Ji=Gt.map.cameraPosition;Ji!==void 0&&Ji.setValue(V,Re.setFromMatrixPosition(L.matrixWorld)),F.logarithmicDepthBuffer&&Gt.setValue(V,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Gt.setValue(V,"isOrthographic",L.isOrthographicCamera===!0),oe!==L&&(oe=L,Di=!0,Zi=!0)}if(Xe.needsLights&&(Un.state.sunShadowMap.length>0&&Gt.setValue(V,"sunShadowMap",Un.state.sunShadowMap,ce),Un.state.directionalShadowMap.length>0&&Gt.setValue(V,"directionalShadowMap",Un.state.directionalShadowMap,ce),Un.state.spotShadowMap.length>0&&Gt.setValue(V,"spotShadowMap",Un.state.spotShadowMap,ce),Un.state.pointShadowMap.length>0&&Gt.setValue(V,"pointShadowMap",Un.state.pointShadowMap,ce)),J.isSkinnedMesh){Gt.setOptional(V,J,"bindMatrix"),Gt.setOptional(V,J,"bindMatrixInverse");const Zt=J.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Gt.setValue(V,"boneTexture",Zt.boneTexture,ce))}J.isBatchedMesh&&(Gt.setOptional(V,J,"batchingTexture"),Gt.setValue(V,"batchingTexture",J._matricesTexture,ce),Gt.setOptional(V,J,"batchingIdTexture"),Gt.setValue(V,"batchingIdTexture",J._indirectTexture,ce),Gt.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&Gt.setValue(V,"batchingColorTexture",J._colorsTexture,ce));const Vn=re.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&X.update(J,re,rn),(Di||Xe.receiveShadow!==J.receiveShadow)&&(Xe.receiveShadow=J.receiveShadow,Gt.setValue(V,"receiveShadow",J.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&W.environment!==null&&(cn.envMapIntensity.value=W.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=RN()),Di){if(Gt.setValue(V,"toneMappingExposure",U.toneMappingExposure),Xe.needsLights&&na(cn,Zi),ke&&Q.fog===!0&&Je.refreshFogUniforms(cn,ke),Je.refreshMaterialUniforms(cn,Q,fe,le,C.state.transmissionRenderTarget[L.id]),Xe.needsLights&&Xe.lightProbeGrid){const Zt=Xe.lightProbeGrid;cn.probesSH.value=Zt.texture,cn.probesMin.value.copy(Zt.boundingBox.min),cn.probesMax.value.copy(Zt.boundingBox.max),cn.probesResolution.value.copy(Zt.resolution)}Zf.upload(V,cr(Xe),cn,ce)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Zf.upload(V,cr(Xe),cn,ce),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Gt.setValue(V,"center",J.center),Gt.setValue(V,"modelViewMatrix",J.modelViewMatrix),Gt.setValue(V,"normalMatrix",J.normalMatrix),Gt.setValue(V,"modelMatrix",J.matrixWorld),Q.uniformsGroups!==void 0){const Zt=Q.uniformsGroups;for(let Ji=0,Er=Zt.length;Ji<Er;Ji++){const Tl=Zt[Ji];xe.update(Tl,rn),xe.bind(Tl,rn)}}return rn}function na(L,W){L.ambientLightColor.needsUpdate=W,L.lightProbe.needsUpdate=W,L.sunLights.needsUpdate=W,L.sunLightShadows.needsUpdate=W,L.directionalLights.needsUpdate=W,L.directionalLightShadows.needsUpdate=W,L.pointLights.needsUpdate=W,L.pointLightShadows.needsUpdate=W,L.spotLights.needsUpdate=W,L.spotLightShadows.needsUpdate=W,L.rectAreaLights.needsUpdate=W,L.hemisphereLights.needsUpdate=W}function ia(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(L,W,re){const Q=ee.get(L);Q.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),ee.get(L.texture).__webglTexture=W,ee.get(L.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:re,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,W){const re=ee.get(L);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(L,W=0,re=0){ne=L,H=W,q=re;let Q=null,J=!1,ke=!1;if(L){const Le=ee.get(L);if(Le.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(V.FRAMEBUFFER,Le.__webglFramebuffer),he.copy(L.viewport),qe.copy(L.scissor),Ie=L.scissorTest,A.viewport(he),A.scissor(qe),A.setScissorTest(Ie),K=-1;return}else if(Le.__webglFramebuffer===void 0)ce.setupRenderTarget(L);else if(Le.__hasExternalTextures)ce.rebindTextures(L,ee.get(L.texture).__webglTexture,ee.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const St=L.depthTexture;if(Le.__boundDepthTexture!==St){if(St!==null&&ee.has(St)&&(L.width!==St.image.width||L.height!==St.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(L)}}const Ve=L.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ke=!0);const Ze=ee.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ze[W])?Q=Ze[W][re]:Q=Ze[W],J=!0):L.samples>0&&ce.useMultisampledRTT(L)===!1?Q=ee.get(L).__webglMultisampledFramebuffer:Array.isArray(Ze)?Q=Ze[re]:Q=Ze,he.copy(L.viewport),qe.copy(L.scissor),Ie=L.scissorTest}else he.copy(We).multiplyScalar(fe).floor(),qe.copy(ft).multiplyScalar(fe).floor(),Ie=Ct;if(re!==0&&(Q=Y),A.bindFramebuffer(V.FRAMEBUFFER,Q)&&A.drawBuffers(L,Q),A.viewport(he),A.scissor(qe),A.setScissorTest(Ie),J){const Le=ee.get(L.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,re)}else if(ke){const Le=W;for(let Ve=0;Ve<L.textures.length;Ve++){const Ze=ee.get(L.textures[Ve]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ve,Ze.__webglTexture,re,Le)}}else if(L!==null&&re!==0){const Le=ee.get(L.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Le.__webglTexture,re)}K=-1};function wl(L){const W=ee.get(L);return(W.__readFormat!==L.format||W.__readType!==L.type)&&(W.__readFormat=L.format,W.__readType=L.type,W.__formatReadable=F.textureFormatReadable(L.format),W.__typeReadable=F.textureTypeReadable(L.type)),W}this.readRenderTargetPixels=function(L,W,re,Q,J,ke,Ye,Le=0){if(!(L&&L.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ee.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ye!==void 0&&(Ve=Ve[Ye]),Ve){A.bindFramebuffer(V.FRAMEBUFFER,Ve);try{const Ze=L.textures[Le],St=Ze.format,wt=Ze.type;L.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Le);const Ce=wl(Ze);if(Ce.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=L.width-Q&&re>=0&&re<=L.height-J&&V.readPixels(W,re,Q,J,Oe.convert(St),Oe.convert(wt),ke)}finally{const Ze=ne!==null?ee.get(ne).__webglFramebuffer:null;A.bindFramebuffer(V.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(L,W,re,Q,J,ke,Ye,Le=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=ee.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ye!==void 0&&(Ve=Ve[Ye]),Ve)if(W>=0&&W<=L.width-Q&&re>=0&&re<=L.height-J){A.bindFramebuffer(V.FRAMEBUFFER,Ve);const Ze=L.textures[Le],St=Ze.format,wt=Ze.type;L.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Le);const Ce=wl(Ze);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const zt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,zt),V.bufferData(V.PIXEL_PACK_BUFFER,ke.byteLength,V.STREAM_READ),V.readPixels(W,re,Q,J,Oe.convert(St),Oe.convert(wt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const pn=ne!==null?ee.get(ne).__webglFramebuffer:null;A.bindFramebuffer(V.FRAMEBUFFER,pn);const nn=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await IE(V,nn,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,zt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,ke),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(zt),V.deleteSync(nn),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,W=null,re=0){const Q=Math.pow(2,-re),J=Math.floor(L.image.width*Q),ke=Math.floor(L.image.height*Q),Ye=W!==null?W.x:0,Le=W!==null?W.y:0;ce.setTexture2D(L,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,Ye,Le,J,ke),A.unbindTexture()},this.copyTextureToTexture=function(L,W,re=null,Q=null,J=0,ke=0){let Ye,Le,Ve,Ze,St,wt,Ce,zt,pn;const nn=L.isCompressedTexture?L.mipmaps[ke]:L.image;if(re!==null)Ye=re.max.x-re.min.x,Le=re.max.y-re.min.y,Ve=re.isBox3?re.max.z-re.min.z:1,Ze=re.min.x,St=re.min.y,wt=re.isBox3?re.min.z:0;else{const cn=Math.pow(2,-J);Ye=Math.floor(nn.width*cn),Le=Math.floor(nn.height*cn),L.isDataArrayTexture?Ve=nn.depth:L.isData3DTexture?Ve=Math.floor(nn.depth*cn):Ve=1,Ze=0,St=0,wt=0}Q!==null?(Ce=Q.x,zt=Q.y,pn=Q.z):(Ce=0,zt=0,pn=0);const Jt=Oe.convert(W.format),kn=Oe.convert(W.type);let Xe;W.isData3DTexture?(ce.setTexture3D(W,0),Xe=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ce.setTexture2DArray(W,0),Xe=V.TEXTURE_2D_ARRAY):(ce.setTexture2D(W,0),Xe=V.TEXTURE_2D),A.activeTexture(V.TEXTURE0),A.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),A.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),A.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const Un=A.getParameter(V.UNPACK_ROW_LENGTH),Nt=A.getParameter(V.UNPACK_IMAGE_HEIGHT),rn=A.getParameter(V.UNPACK_SKIP_PIXELS),qt=A.getParameter(V.UNPACK_SKIP_ROWS),Di=A.getParameter(V.UNPACK_SKIP_IMAGES);A.pixelStorei(V.UNPACK_ROW_LENGTH,nn.width),A.pixelStorei(V.UNPACK_IMAGE_HEIGHT,nn.height),A.pixelStorei(V.UNPACK_SKIP_PIXELS,Ze),A.pixelStorei(V.UNPACK_SKIP_ROWS,St),A.pixelStorei(V.UNPACK_SKIP_IMAGES,wt);const Zi=L.isDataArrayTexture||L.isData3DTexture,Gt=W.isDataArrayTexture||W.isData3DTexture;if(L.isDepthTexture){const cn=ee.get(L),Vn=ee.get(W),Zt=ee.get(cn.__renderTarget),Ji=ee.get(Vn.__renderTarget);A.bindFramebuffer(V.READ_FRAMEBUFFER,Zt.__webglFramebuffer),A.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let Er=0;Er<Ve;Er++)Zi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ee.get(L).__webglTexture,J,wt+Er),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ee.get(W).__webglTexture,ke,pn+Er)),V.blitFramebuffer(Ze,St,Ye,Le,Ce,zt,Ye,Le,V.DEPTH_BUFFER_BIT,V.NEAREST);A.bindFramebuffer(V.READ_FRAMEBUFFER,null),A.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||L.isRenderTargetTexture||ee.has(L)){const cn=ee.get(L),Vn=ee.get(W);A.bindFramebuffer(V.READ_FRAMEBUFFER,k),A.bindFramebuffer(V.DRAW_FRAMEBUFFER,j);for(let Zt=0;Zt<Ve;Zt++)Zi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,cn.__webglTexture,J,wt+Zt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,cn.__webglTexture,J),Gt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Vn.__webglTexture,ke,pn+Zt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Vn.__webglTexture,ke),J!==0?V.blitFramebuffer(Ze,St,Ye,Le,Ce,zt,Ye,Le,V.COLOR_BUFFER_BIT,V.NEAREST):Gt?V.copyTexSubImage3D(Xe,ke,Ce,zt,pn+Zt,Ze,St,Ye,Le):V.copyTexSubImage2D(Xe,ke,Ce,zt,Ze,St,Ye,Le);A.bindFramebuffer(V.READ_FRAMEBUFFER,null),A.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Gt?L.isDataTexture||L.isData3DTexture?V.texSubImage3D(Xe,ke,Ce,zt,pn,Ye,Le,Ve,Jt,kn,nn.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(Xe,ke,Ce,zt,pn,Ye,Le,Ve,Jt,nn.data):V.texSubImage3D(Xe,ke,Ce,zt,pn,Ye,Le,Ve,Jt,kn,nn):L.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ke,Ce,zt,Ye,Le,Jt,kn,nn.data):L.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ke,Ce,zt,nn.width,nn.height,Jt,nn.data):V.texSubImage2D(V.TEXTURE_2D,ke,Ce,zt,Ye,Le,Jt,kn,nn);A.pixelStorei(V.UNPACK_ROW_LENGTH,Un),A.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Nt),A.pixelStorei(V.UNPACK_SKIP_PIXELS,rn),A.pixelStorei(V.UNPACK_SKIP_ROWS,qt),A.pixelStorei(V.UNPACK_SKIP_IMAGES,Di),ke===0&&W.generateMipmaps&&V.generateMipmap(Xe),A.unbindTexture()},this.initRenderTarget=function(L){ee.get(L).__webglFramebuffer===void 0&&ce.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ce.setTextureCube(L,0):L.isData3DTexture?ce.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ce.setTexture2DArray(L,0):ce.setTexture2D(L,0),A.unbindTexture()},this.resetState=function(){H=0,q=0,ne=null,A.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}const PN=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:jh,AddEquation:Ia,AddOperation:Zb,AdditiveAnimationBlendMode:n0,AdditiveBlending:dn,AgXToneMapping:Yg,AlphaFormat:e0,AlwaysCompare:cS,AlwaysDepth:eh,AlwaysStencilFunc:iS,AmbientLight:rM,AnimationAction:pM,AnimationClip:kc,AnimationLoader:AC,AnimationMixer:i3,AnimationObjectGroup:t3,AnimationUtils:bC,ArcCurve:ES,ArrayCamera:uM,ArrowHelper:E3,AttachedBindMode:Sg,Audio:hM,AudioAnalyser:XC,AudioContext:A0,AudioListener:HC,AudioLoader:BC,AxesHelper:A3,BackSide:li,BasicDepthPacking:tS,BasicShadowMap:Pb,BatchedMesh:yS,BezierInterpolant:ZS,Bone:c0,BooleanKeyframeTrack:Ha,Box2:vM,Box3:ci,Box3Helper:w3,BoxGeometry:Va,BoxHelper:M3,BufferAttribute:ct,BufferGeometry:pt,BufferGeometryLoader:lM,ByteType:Zg,Cache:Vr,Camera:Rd,CameraHelper:S3,CanvasTexture:kA,CapsuleGeometry:pd,CatmullRomCurve3:AS,CineonToneMapping:Xg,CircleGeometry:md,ClampToEdgeWrapping:Pi,Clock:gM,Color:be,ColorKeyframeTrack:M0,ColorManagement:Lt,Compatibility:TE,CompressedArrayTexture:BA,CompressedCubeTexture:zA,CompressedTexture:dd,CompressedTextureLoader:CC,ConeGeometry:$c,ConstantAlphaFactor:Yb,ConstantColorFactor:Xb,Controls:R3,CubeCamera:cM,CubeDepthTexture:wS,CubeReflectionMapping:Gr,CubeRefractionMapping:Xs,CubeTexture:Yc,CubeTextureLoader:RC,CubeUVReflectionMapping:hl,CubicBezierCurve:d0,CubicBezierCurve3:CS,CubicInterpolant:jS,CullFaceBack:xg,CullFaceFront:Rb,CullFaceFrontBack:OT,CullFaceNone:Cb,Curve:wr,CurvePath:PS,CustomBlending:Ib,CustomToneMapping:qg,CylinderGeometry:jc,Cylindrical:u3,Data3DTexture:od,DataArrayTexture:ad,DataTexture:ar,DataTextureLoader:PC,DataUtils:uA,DecrementStencilOp:nE,DecrementWrapStencilOp:rE,DefaultLoadingManager:QS,DepthFormat:Wr,DepthStencilFormat:Hs,DepthTexture:ol,DetachedBindMode:Jb,DirectionalLight:iM,DirectionalLightHelper:b3,DiscreteInterpolant:$S,DodecahedronGeometry:gd,DoubleSide:di,DstAlphaFactor:kb,DstColorFactor:Hb,DynamicCopyUsage:xE,DynamicDrawUsage:dE,DynamicReadUsage:gE,EdgesGeometry:TS,EllipseCurve:vd,EqualCompare:aS,EqualDepth:nh,EqualStencilFunc:lE,EquirectangularReflectionMapping:mc,EquirectangularRefractionMapping:gc,Euler:Sr,EventDispatcher:Mr,ExternalTexture:f0,ExtrudeGeometry:_d,FileLoader:vs,Float16BufferAttribute:vA,Float32BufferAttribute:$e,FloatType:gi,Fog:cd,FogExp2:ld,FramebufferTexture:OA,FrontSide:Ws,Frustum:za,FrustumArray:hd,GLBufferAttribute:l3,GLSL1:bE,GLSL3:wg,GreaterCompare:oS,GreaterDepth:rh,GreaterEqualCompare:rd,GreaterEqualDepth:ih,GreaterEqualStencilFunc:hE,GreaterStencilFunc:uE,GridHelper:x3,Group:jo,HTMLTexture:VA,HalfFloatType:br,HemisphereLight:eM,HemisphereLightHelper:_3,IcosahedronGeometry:xd,ImageBitmapLoader:OC,ImageLoader:Vc,ImageUtils:dS,IncrementStencilOp:tE,IncrementWrapStencilOp:iE,InstancedBufferAttribute:al,InstancedBufferGeometry:oM,InstancedInterleavedBuffer:o3,InstancedMesh:xS,Int16BufferAttribute:mA,Int32BufferAttribute:gA,Int8BufferAttribute:hA,IntType:Zh,InterleavedBuffer:ud,InterleavedBufferAttribute:Ba,Interpolant:ml,InterpolateBezier:Mg,InterpolateDiscrete:Ic,InterpolateLinear:Fh,InterpolateSmooth:Yf,InterpolationSamplingMode:wE,InterpolationSamplingType:ME,InvertStencilOp:sE,KeepStencilOp:jf,KeyframeTrack:lr,LOD:vS,LatheGeometry:yd,Layers:sl,LessCompare:sS,LessDepth:th,LessEqualCompare:id,LessEqualDepth:el,LessEqualStencilFunc:cE,LessStencilFunc:oE,Light:Js,LightProbe:aM,LightShadow:Cd,Line:js,Line3:d3,LineBasicMaterial:xi,LineCurve:p0,LineCurve3:RS,LineDashedMaterial:XS,LineLoop:bS,LineSegments:Xr,LinearFilter:fn,LinearInterpolant:S0,LinearMipMapLinearFilter:HT,LinearMipMapNearestFilter:VT,LinearMipmapLinearFilter:kr,LinearMipmapNearestFilter:vc,LinearSRGBColorSpace:il,LinearToneMapping:Gg,LinearTransfer:Nc,Loader:Ni,LoaderUtils:Rg,LoadingManager:T0,LoopOnce:Kb,LoopPingPong:eS,LoopRepeat:Qb,MOUSE:UT,Material:ti,MaterialBlending:BT,MaterialLoader:Pd,MathUtils:$E,Matrix2:I0,Matrix3:bt,Matrix4:_t,MaxEquation:Ub,Mesh:Dn,MeshBasicMaterial:$s,MeshDepthMaterial:y0,MeshDistanceMaterial:b0,MeshLambertMaterial:GS,MeshMatcapMaterial:WS,MeshNormalMaterial:HS,MeshPhongMaterial:kS,MeshPhysicalMaterial:zS,MeshStandardMaterial:x0,MeshToonMaterial:VS,MinEquation:Db,MirroredRepeatWrapping:Cc,MixOperation:$b,MultiplyBlending:bg,MultiplyOperation:Xc,NearestFilter:An,NearestMipMapLinearFilter:kT,NearestMipMapNearestFilter:zT,NearestMipmapLinearFilter:qo,NearestMipmapNearestFilter:$g,NeutralToneMapping:jg,NeverCompare:rS,NeverDepth:Qf,NeverStencilFunc:aE,NoBlending:Hr,NoColorSpace:fs,NoNormalPacking:ZT,NoToneMapping:sr,NormalAnimationBlendMode:nd,NormalBlending:Ko,NormalGAPacking:KT,NormalRGPacking:JT,NotEqualCompare:lS,NotEqualDepth:sh,NotEqualStencilFunc:fE,NumberKeyframeTrack:Ed,Object3D:Bt,ObjectLoader:UC,ObjectSpaceNormalMap:nS,OctahedronGeometry:Jc,OneFactor:Ob,OneMinusConstantAlphaFactor:jb,OneMinusConstantColorFactor:qb,OneMinusDstAlphaFactor:Vb,OneMinusDstColorFactor:Gb,OneMinusSrcAlphaFactor:Hg,OneMinusSrcColorFactor:zb,OrthographicCamera:gl,PCFShadowMap:Jo,PCFSoftShadowMap:pc,PMREMGenerator:Lg,Path:Fc,PerspectiveCamera:jn,Plane:ls,PlaneGeometry:pl,PlaneHelper:T3,PointLight:nM,PointLightHelper:g3,Points:SS,PointsMaterial:u0,PolarGridHelper:y3,PolyhedronGeometry:Zs,PositionalAudio:WC,PropertyBinding:Xt,PropertyMixer:dM,QuadraticBezierCurve:m0,QuadraticBezierCurve3:g0,Quaternion:_i,QuaternionKeyframeTrack:Ad,QuaternionLinearInterpolant:KS,R11_EAC_Format:dh,RED_GREEN_RGTC2_Format:Pc,RED_RGTC1_Format:Nh,REVISION:Yh,RG11_EAC_Format:Rc,RGBADepthPacking:YT,RGBAFormat:oi,RGBAIntegerFormat:td,RGBA_ASTC_10x10_Format:Ah,RGBA_ASTC_10x5_Format:wh,RGBA_ASTC_10x6_Format:Th,RGBA_ASTC_10x8_Format:Eh,RGBA_ASTC_12x10_Format:Ch,RGBA_ASTC_12x12_Format:Rh,RGBA_ASTC_4x4_Format:gh,RGBA_ASTC_5x4_Format:vh,RGBA_ASTC_5x5_Format:_h,RGBA_ASTC_6x5_Format:xh,RGBA_ASTC_6x6_Format:yh,RGBA_ASTC_8x5_Format:bh,RGBA_ASTC_8x6_Format:Sh,RGBA_ASTC_8x8_Format:Mh,RGBA_BPTC_Format:Ph,RGBA_ETC2_EAC_Format:hh,RGBA_PVRTC_2BPPV1_Format:ch,RGBA_PVRTC_4BPPV1_Format:lh,RGBA_S3TC_DXT1_Format:xc,RGBA_S3TC_DXT3_Format:yc,RGBA_S3TC_DXT5_Format:bc,RGBDepthPacking:jT,RGBFormat:t0,RGBIntegerFormat:GT,RGB_BPTC_SIGNED_Format:Ih,RGB_BPTC_UNSIGNED_Format:Lh,RGB_ETC1_Format:uh,RGB_ETC2_Format:fh,RGB_PVRTC_2BPPV1_Format:oh,RGB_PVRTC_4BPPV1_Format:ah,RGB_S3TC_DXT1_Format:_c,RGDepthPacking:$T,RGFormat:qs,RGIntegerFormat:ed,RawShaderMaterial:_0,Ray:dl,Raycaster:mM,RectAreaLight:sM,RedFormat:Qh,RedIntegerFormat:qc,ReinhardToneMapping:Wg,RenderObjectRefreshType:EE,RenderTarget:r0,RenderTarget3D:r3,RepeatWrapping:Ac,ReplaceStencilOp:eE,ReverseSubtractEquation:Nb,RingGeometry:cl,SIGNED_R11_EAC_Format:ph,SIGNED_RED_GREEN_RGTC2_Format:Uh,SIGNED_RED_RGTC1_Format:Dh,SIGNED_RG11_EAC_Format:mh,SRGBColorSpace:Yn,SRGBTransfer:Qt,Scene:s0,ShaderChunk:At,ShaderLib:xr,ShaderMaterial:Li,ShadowMaterial:FS,Shape:Zc,ShapeGeometry:bd,ShapePath:C3,ShapeUtils:yr,ShortType:Jg,Skeleton:fd,SkeletonHelper:m3,SkinnedMesh:_S,Source:KE,Sphere:gn,SphereGeometry:Kc,Spherical:c3,SphericalHarmonics3:E0,SplineCurve:v0,SpotLight:tM,SpotLightHelper:p3,Sprite:gS,SpriteMaterial:l0,SrcAlphaFactor:Vg,SrcAlphaSaturateFactor:Wb,SrcColorFactor:Bb,StaticCopyUsage:_E,StaticDrawUsage:sd,StaticReadUsage:mE,StereoCamera:zC,StreamCopyUsage:yE,StreamDrawUsage:pE,StreamReadUsage:vE,StringKeyframeTrack:Ga,SubtractEquation:Lb,SubtractiveBlending:yg,TOUCH:FT,TangentSpaceNormalMap:gs,TetrahedronGeometry:Sd,Texture:hn,TextureLoader:IC,TextureSource:ds,TextureUtils:D3,Timer:fM,TimestampQuery:SE,TorusGeometry:Md,TorusKnotGeometry:wd,Triangle:Ri,TriangleFanDrawMode:qT,TriangleStripDrawMode:XT,TrianglesDrawMode:WT,TubeGeometry:Td,UVMapping:$h,Uint16BufferAttribute:a0,Uint32BufferAttribute:o0,Uint8BufferAttribute:dA,Uint8ClampedBufferAttribute:pA,Uniform:P0,UniformsGroup:a3,UniformsLib:He,UniformsUtils:BS,UnsignedByteType:pi,UnsignedInt101111Type:Qg,UnsignedInt248Type:nl,UnsignedInt5999Type:Kg,UnsignedIntType:or,UnsignedShort4444Type:Jh,UnsignedShort5551Type:Kh,UnsignedShortType:tl,VSMShadowMap:La,Vector2:_e,Vector3:O,Vector4:tn,VectorKeyframeTrack:w0,VideoFrameTexture:FA,VideoTexture:MS,WebGL3DRenderTarget:tA,WebGLArrayRenderTarget:eA,WebGLCoordinateSystem:qi,WebGLCubeRenderTarget:L0,WebGLRenderTarget:Ii,WebGLRenderer:AM,WebGLUtils:TM,WebGPUCoordinateSystem:Oa,WebXRController:$f,WireframeGeometry:US,WrapAroundEnding:Lc,ZeroCurvatureEnding:Na,ZeroFactor:Fb,ZeroSlopeEnding:Da,ZeroStencilOp:QT,createCanvasElement:fS,error:st,getConsoleFunction:PE,log:Uc,setConsoleFunction:RE,warn:Be,warnOnce:ps},Symbol.toStringTag,{value:"Module"}));var ig={exports:{}},rg={},sg={exports:{}},ag={};var nb;function IN(){if(nb)return ag;nb=1;var s=Eb();function e(m,g){return m===g&&(m!==0||1/m===1/g)||m!==m&&g!==g}var t=typeof Object.is=="function"?Object.is:e,n=s.useState,r=s.useEffect,o=s.useLayoutEffect,l=s.useDebugValue;function c(m,g){var _=g(),y=n({inst:{value:_,getSnapshot:g}}),M=y[0].inst,S=y[1];return o(function(){M.value=_,M.getSnapshot=g,f(M)&&S({inst:M})},[m,_,g]),r(function(){return f(M)&&S({inst:M}),m(function(){f(M)&&S({inst:M})})},[m]),l(_),_}function f(m){var g=m.getSnapshot;m=m.value;try{var _=g();return!t(m,_)}catch{return!0}}function h(m,g){return g()}var p=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:c;return ag.useSyncExternalStore=s.useSyncExternalStore!==void 0?s.useSyncExternalStore:p,ag}var ib;function LN(){return ib||(ib=1,sg.exports=IN()),sg.exports}var rb;function NN(){if(rb)return rg;rb=1;var s=Eb(),e=LN();function t(h,p){return h===p&&(h!==0||1/h===1/p)||h!==h&&p!==p}var n=typeof Object.is=="function"?Object.is:t,r=e.useSyncExternalStore,o=s.useRef,l=s.useEffect,c=s.useMemo,f=s.useDebugValue;return rg.useSyncExternalStoreWithSelector=function(h,p,m,g,_){var y=o(null);if(y.current===null){var M={hasValue:!1,value:null};y.current=M}else M=y.current;y=c(function(){function b(C){if(!w){if(w=!0,R=C,C=g(C),_!==void 0&&M.hasValue){var D=M.value;if(_(D,C))return T=D}return T=C}if(D=T,n(R,C))return D;var E=g(C);return _!==void 0&&_(D,E)?(R=C,D):(R=C,T=E)}var w=!1,R,T,I=m===void 0?null:m;return[function(){return b(p())},I===null?void 0:function(){return b(I())}]},[p,m,g,_]);var S=r(h,y[0],y[1]);return l(function(){M.hasValue=!0,M.value=S},[S]),f(S),S},rg}var sb;function DN(){return sb||(sb=1,ig.exports=NN()),ig.exports}var UN=DN();const FN=Ab(UN),ab=s=>{let e;const t=new Set,n=(h,p)=>{const m=typeof h=="function"?h(e):h;if(!Object.is(m,e)){const g=e;e=p??(typeof m!="object"||m===null)?m:Object.assign({},e,m),t.forEach(_=>_(e,g))}},r=()=>e,c={setState:n,getState:r,getInitialState:()=>f,subscribe:h=>(t.add(h),()=>t.delete(h))},f=e=s(n,r,c);return c},ON=(s=>s?ab(s):ab),{useSyncExternalStoreWithSelector:BN}=FN,zN=s=>s;function kN(s,e=zN,t){const n=BN(s.subscribe,s.getState,s.getInitialState,e,t);return un.useDebugValue(n),n}const ob=(s,e)=>{const t=ON(s),n=(r,o=e)=>kN(t,r,o);return Object.assign(n,t),n},VN=((s,e)=>s?ob(s,e):ob);var og={exports:{}},lg={};var lb;function HN(){return lb||(lb=1,(function(s){function e(H,q){var ne=H.length;H.push(q);e:for(;0<ne;){var K=ne-1>>>1,oe=H[K];if(0<r(oe,q))H[K]=q,H[ne]=oe,ne=K;else break e}}function t(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var q=H[0],ne=H.pop();if(ne!==q){H[0]=ne;e:for(var K=0,oe=H.length,he=oe>>>1;K<he;){var qe=2*(K+1)-1,Ie=H[qe],et=qe+1,rt=H[et];if(0>r(Ie,ne))et<oe&&0>r(rt,Ie)?(H[K]=rt,H[et]=ne,K=et):(H[K]=Ie,H[qe]=ne,K=qe);else if(et<oe&&0>r(rt,ne))H[K]=rt,H[et]=ne,K=et;else break e}}return q}function r(H,q){var ne=H.sortIndex-q.sortIndex;return ne!==0?ne:H.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;s.unstable_now=function(){return o.now()}}else{var l=Date,c=l.now();s.unstable_now=function(){return l.now()-c}}var f=[],h=[],p=1,m=null,g=3,_=!1,y=!1,M=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function T(H){for(var q=t(h);q!==null;){if(q.callback===null)n(h);else if(q.startTime<=H)n(h),q.sortIndex=q.expirationTime,e(f,q);else break;q=t(h)}}function I(H){if(M=!1,T(H),!y)if(t(f)!==null)y=!0,C||(C=!0,G());else{var q=t(h);q!==null&&j(I,q.startTime-H)}}var C=!1,D=-1,E=5,N=-1;function U(){return S?!0:!(s.unstable_now()-N<E)}function B(){if(S=!1,C){var H=s.unstable_now();N=H;var q=!0;try{e:{y=!1,M&&(M=!1,w(D),D=-1),_=!0;var ne=g;try{t:{for(T(H),m=t(f);m!==null&&!(m.expirationTime>H&&U());){var K=m.callback;if(typeof K=="function"){m.callback=null,g=m.priorityLevel;var oe=K(m.expirationTime<=H);if(H=s.unstable_now(),typeof oe=="function"){m.callback=oe,T(H),q=!0;break t}m===t(f)&&n(f),T(H)}else n(f);m=t(f)}if(m!==null)q=!0;else{var he=t(h);he!==null&&j(I,he.startTime-H),q=!1}}break e}finally{m=null,g=ne,_=!1}q=void 0}}finally{q?G():C=!1}}}var G;if(typeof R=="function")G=function(){R(B)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,k=Y.port2;Y.port1.onmessage=B,G=function(){k.postMessage(null)}}else G=function(){b(B,0)};function j(H,q){D=b(function(){H(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(H){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var ne=g;g=q;try{return H()}finally{g=ne}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(H,q){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ne=g;g=H;try{return q()}finally{g=ne}},s.unstable_scheduleCallback=function(H,q,ne){var K=s.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?K+ne:K):ne=K,H){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=ne+oe,H={id:p++,callback:q,priorityLevel:H,startTime:ne,expirationTime:oe,sortIndex:-1},ne>K?(H.sortIndex=ne,e(h,H),t(f)===null&&H===t(h)&&(M?(w(D),D=-1):M=!0,j(I,ne-K))):(H.sortIndex=oe,e(f,H),y||_||(y=!0,C||(C=!0,G()))),H},s.unstable_shouldYield=U,s.unstable_wrapCallback=function(H){var q=g;return function(){var ne=g;g=q;try{return H.apply(this,arguments)}finally{g=ne}}}})(lg)),lg}var cb;function GN(){return cb||(cb=1,og.exports=HN()),og.exports}var cs=GN();const WN=Ab(cs);(()=>{var s,e;return typeof window<"u"&&(((s=window.document)==null?void 0:s.createElement)||((e=window.navigator)==null?void 0:e.product)==="ReactNative")})()?un.useLayoutEffect:un.useEffect;function Nd(s,e,t){if(!s)return;if(t(s)===!0)return s;let n=e?s.return:s.child;for(;n;){const r=Nd(n,e,t);if(r)return r;n=e?null:n.sibling}}function CM(s){try{return Object.defineProperties(s,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return s}}const N0=CM(un.createContext(null));class RM extends un.Component{render(){return un.createElement(N0.Provider,{value:this._reactInternals},this.props.children)}}function D0(){const s=un.useContext(N0);if(s===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const e=un.useId();return un.useMemo(()=>{for(const t of[s,s?.alternate]){if(!t)continue;const n=Nd(t,!1,r=>{let o=r.memoizedState;for(;o;){if(o.memoizedState===e)return!0;o=o.next}});if(n)return n}},[s,e])}const XN=Symbol.for("react.context"),qN=s=>s!==null&&typeof s=="object"&&"$$typeof"in s&&s.$$typeof===XN;function YN(){const s=D0(),[e]=un.useState(()=>new Map);e.clear();let t=s;for(;t;){const n=t.type;qN(n)&&n!==N0&&!e.has(n)&&e.set(n,un.use(CM(n))),t=t.return}return e}function jN(){const s=YN();return un.useMemo(()=>Array.from(s.keys()).reduce((e,t)=>n=>un.createElement(e,null,un.createElement(t.Provider,{...n,value:s.get(t)})),e=>un.createElement(RM,{...e})),[s])}function $N(s){if(typeof requestAnimationFrame=="function"){const t=requestAnimationFrame(s);return()=>cancelAnimationFrame(t)}const e=setTimeout(s,16);return()=>clearTimeout(e)}function ZN(){if(!un.Activity)throw new Error("its-fine: useActivityBridge requires React 19.2 or later!");const s=D0(),[e]=un.useState(()=>{const t=[];let n=!1;Nd(s,!0,f=>{var h,p;if(f.elementType===un.Activity){const m=((h=f.child)==null?void 0:h.tag)===22?f.child.stateNode:null;if(typeof m?._visibility!="number")throw new Error("its-fine: unsupported React Activity internals!");t.push(m)}else f.tag===22&&((p=f.return)==null?void 0:p.elementType)!==un.Activity&&(n=!0)});let r="hidden";const o=new Set;let l;const c={mounted:!1,connected:!1,subscribe(f){return o.add(f),()=>{o.delete(f)}},sync(f){c.mounted&&!c.connected&&n&&t.length>0?l||(l=$N(()=>{l=void 0,c.sync(!0)})):(l?.(),l=void 0);let h=r;if(c.mounted?c.connected?h="visible":f&&(h=t.every(p=>(p._visibility&1)!==0)?"visible":"hidden"):h="hidden",r!==h){r=h;for(const p of o)p()}},Bridge({children:f}){return un.createElement(un.Activity,{mode:un.useSyncExternalStore(c.subscribe,()=>r,()=>"hidden")},f)}};return c});return un.useInsertionEffect(()=>(e.mounted=!0,queueMicrotask(()=>e.sync(!1)),()=>{e.mounted=!1,queueMicrotask(()=>e.sync(!1))}),[e]),un.useLayoutEffect(()=>(e.connected=!0,e.sync(!1),()=>{e.connected=!1,e.sync(!0)}),[e]),e.Bridge}function U0(s){let e=s.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const PM=s=>s&&s.isOrthographicCamera,JN=s=>s&&s.hasOwnProperty("current"),KN=s=>s!=null&&(typeof s=="string"||typeof s=="number"||s.isColor),_l=((s,e)=>typeof window<"u"&&(((s=window.document)==null?void 0:s.createElement)||((e=window.navigator)==null?void 0:e.product)==="ReactNative"))()?ge.useLayoutEffect:ge.useEffect;function IM(s){const e=ge.useRef(s);return _l(()=>void(e.current=s),[s]),e}const kh=()=>{};function QN({promise:s,onSettled:e}){return ge.use(s),_l(e,[e]),null}function eD(){const[s,e]=ge.useState(null),t=ge.useCallback(()=>e(null),[]),n=ge.useCallback(o=>e(l=>l??Promise.resolve(o).then(kh,kh)),[]);return[s?se.jsx(ge.Suspense,{fallback:null,children:se.jsx(QN,{promise:s,onSettled:t})}):null,n]}const tD=ge.Activity?ZN:()=>ge.Fragment;function nD(){const s=D0(),e=jN(),t=tD();return ge.useMemo(()=>({children:n})=>{const o=!!Nd(s,!0,l=>l.type===ge.StrictMode)?ge.StrictMode:ge.Fragment;return se.jsx(o,{children:se.jsx(t,{children:se.jsx(e,{children:n})})})},[s,e,t])}function iD({set:s}){return _l(()=>(s(new Promise(()=>null)),()=>s(!1)),[s]),null}const rD=(s=>(s=class extends ge.Component{constructor(...t){super(...t),this.state={error:!1}}componentDidCatch(t){this.props.set(t)}render(){return this.state.error?null:this.props.children}},s.getDerivedStateFromError=()=>({error:!0}),s))();function LM(s){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(s)?Math.min(Math.max(s[0],t),s[1]):s}function Go(s){var e;return(e=s.__r3f)==null?void 0:e.root.getState()}const Nn={obj:s=>s===Object(s)&&!Nn.arr(s)&&typeof s!="function",fun:s=>typeof s=="function",str:s=>typeof s=="string",num:s=>typeof s=="number",boo:s=>typeof s=="boolean",und:s=>s===void 0,nul:s=>s===null,arr:s=>Array.isArray(s),equ(s,e,{arrays:t="shallow",objects:n="reference",strict:r=!0}={}){if(typeof s!=typeof e||!!s!=!!e)return!1;if(Nn.str(s)||Nn.num(s)||Nn.boo(s))return s===e;const o=Nn.obj(s);if(o&&n==="reference")return s===e;const l=Nn.arr(s);if(l&&t==="reference")return s===e;if((l||o)&&s===e)return!0;let c;for(c in s)if(!(c in e))return!1;if(o&&t==="shallow"&&n==="shallow"){for(c in r?e:s)if(!Nn.equ(s[c],e[c],{strict:r,objects:"reference"}))return!1}else for(c in r?e:s)if(s[c]!==e[c])return!1;if(Nn.und(c)){if(l&&s.length===0&&e.length===0||o&&Object.keys(s).length===0&&Object.keys(e).length===0)return!0;if(s!==e)return!1}return!0}};function sD(s){s.type!=="Scene"&&(s.dispose==null||s.dispose());for(const e in s){const t=s[e];t?.type!=="Scene"&&(t==null||t.dispose==null||t.dispose())}}const NM=["children","key","ref"];function Ug(s){const e={};for(const t in s)NM.includes(t)||(e[t]=s[t]);return e}function Vh(s,e,t,n){const r=s;let o=r?.__r3f;return o||(o={root:e,type:t,parent:null,children:[],props:Ug(n),object:r,eventCount:0,handlers:{},previousVisible:void 0,isHidden:!1},r&&(r.__r3f=o)),o}function Hc(s,e){if(!e.includes("-"))return{root:s,key:e,target:s[e]};if(e in s)return{root:s,key:e,target:s[e]};let t=s;const n=e.split("-");for(const r of n){if(typeof t!="object"||t===null){if(t!==void 0){const o=n.slice(n.indexOf(r)).join("-");return{root:t,key:o,target:void 0}}return{root:s,key:e,target:void 0}}e=r,s=t,t=t[e]}return{root:s,key:e,target:t}}const ub=/-\d+$/;function Hh(s,e){if(Nn.str(e.props.attach)){if(ub.test(e.props.attach)){const r=e.props.attach.replace(ub,""),{root:o,key:l}=Hc(s.object,r);Array.isArray(o[l])||(o[l]=[])}const{root:t,key:n}=Hc(s.object,e.props.attach);e.previousAttach=t[n],t[n]=e.object}else Nn.fun(e.props.attach)&&(e.previousAttach=e.props.attach(s.object,e.object))}function Gh(s,e){if(Nn.str(e.props.attach)){const{root:t,key:n}=Hc(s.object,e.props.attach),r=e.previousAttach;r===void 0?delete t[n]:t[n]=r}else e.previousAttach==null||e.previousAttach(s.object,e.object);delete e.previousAttach}const Fg=[...NM,"args","dispose","attach","object","onUpdate","dispose"],fb=new Map;function aD(s){let e=fb.get(s.constructor);try{e||(e=new s.constructor,fb.set(s.constructor,e))}catch{}return e}function oD(s,e){const t={};for(const n in e)if(!Fg.includes(n)&&!Nn.equ(e[n],s.props[n])){t[n]=e[n];for(const r in e)r.startsWith(`${n}-`)&&(t[r]=e[r])}for(const n in s.props){if(Fg.includes(n)||e.hasOwnProperty(n))continue;const{root:r,key:o}=Hc(s.object,n);if(r.constructor&&r.constructor.length===0){const l=aD(r);Nn.und(l)||(t[n]=l[o])}else t[n]=0}return t}const lD=["map","emissiveMap","sheenColorMap","specularColorMap","envMap"],cD=/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;function Ua(s,e){var t;const n=s.__r3f,r=n&&U0(n).getState(),o=n?.eventCount;for(const c in e){let f=e[c];if(Fg.includes(c))continue;if(n&&cD.test(c)){typeof f=="function"?n.handlers[c]=f:delete n.handlers[c],n.eventCount=Object.keys(n.handlers).length;continue}if(f===void 0)continue;if(c==="visible"&&n!=null&&n.isHidden&&n.previousVisible!==void 0){n.previousVisible=f;continue}let{root:h,key:p,target:m}=Hc(s,c);if(m===void 0&&(typeof h!="object"||h===null))throw Error(`R3F: Cannot set "${c}". Ensure it is an object before setting "${p}".`);if(m instanceof sl&&f instanceof sl)m.mask=f.mask;else if(m instanceof be&&KN(f))m.set(f);else if(m!==null&&typeof m=="object"&&typeof m.set=="function"&&typeof m.copy=="function"&&f!=null&&f.constructor&&m.constructor===f.constructor)m.copy(f);else if(m!==null&&typeof m=="object"&&typeof m.set=="function"&&Array.isArray(f))typeof m.fromArray=="function"?m.fromArray(f):m.set(...f);else if(m!==null&&typeof m=="object"&&typeof m.set=="function"&&typeof f=="number")typeof m.setScalar=="function"?m.setScalar(f):m.set(f);else if(h instanceof Li&&p==="uniforms"&&Nn.obj(f)){Nn.obj(h.uniforms)||(h.uniforms={});const g=h.uniforms,_=f;for(const y in _){const M=_[y],S=g[y];S?Object.assign(S,M):g[y]={...M}}}else{var l;h[p]=f,r&&!r.linear&&lD.includes(p)&&(l=h[p])!=null&&l.isTexture&&h[p].format===oi&&h[p].type===pi&&(h[p].colorSpace=Yn)}}if(n!=null&&n.parent&&r!=null&&r.internal&&(t=n.object)!=null&&t.isObject3D&&o!==n.eventCount){const c=n.object,f=r.internal.interaction.indexOf(c);f>-1&&r.internal.interaction.splice(f,1),n.eventCount&&c.raycast!==null&&r.internal.interaction.push(c)}return n&&n.props.attach===void 0&&(n.object.isBufferGeometry?n.props.attach="geometry":n.object.isMaterial&&(n.props.attach="material")),n&&xl(n),s}function xl(s){var e;if(!s.parent)return;s.props.onUpdate==null||s.props.onUpdate(s.object);const t=(e=s.root)==null||e.getState==null?void 0:e.getState();t&&t.internal.frames===0&&t.invalidate()}function uD(s,e){s.manual||(PM(s)?(s.left=e.width/-2,s.right=e.width/2,s.top=e.height/2,s.bottom=e.height/-2):s.aspect=e.width/e.height,s.updateProjectionMatrix())}const Ci=s=>s?.isObject3D;function dc(s){return(s.eventObject||s.object).uuid+"/"+s.index+s.instanceId}function DM(s,e,t,n){const r=t.get(e);r&&(t.delete(e),t.size===0&&(s.delete(n),r.target.releasePointerCapture(n)))}function fD(s,e,t){const{internal:n}=s.getState();for(let r=0;r<n.interaction.length;r++)n.interaction[r]===e&&(n.interaction[r]=t);for(let r=0;r<n.initialHits.length;r++)n.initialHits[r]===e&&(n.initialHits[r]=t);n.hovered.forEach((r,o)=>{if(r.eventObject===e||r.object===e){n.hovered.delete(o);const l={...r,eventObject:r.eventObject===e?t:r.eventObject,object:r.object===e?t:r.object};n.hovered.set(dc(l),l)}}),n.capturedMap.forEach(r=>{const o=r.get(e);o&&(r.delete(e),r.set(t,o))})}function hD(s,e){const{internal:t}=s.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,r)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(r)}),t.capturedMap.forEach((n,r)=>{DM(t.capturedMap,e,n,r)})}function dD(s){function e(f){const{internal:h}=s.getState(),p=f.offsetX-h.initialClick[0],m=f.offsetY-h.initialClick[1];return Math.round(Math.sqrt(p*p+m*m))}function t(f){return f.filter(h=>["Move","Over","Enter","Out","Leave"].some(p=>{var m;return(m=h.__r3f)==null?void 0:m.handlers["onPointer"+p]}))}function n(f,h){const p=s.getState(),m=new Set,g=[],_=h?h(p.internal.interaction):p.internal.interaction;for(let b=0;b<_.length;b++){const w=Go(_[b]);w&&(w.raycaster.camera=void 0)}p.previousRoot||p.events.compute==null||p.events.compute(f,p);function y(b){const w=Go(b);if(!w||!w.events.enabled||w.raycaster.camera===null)return[];if(w.raycaster.camera===void 0){var R;w.events.compute==null||w.events.compute(f,w,(R=w.previousRoot)==null?void 0:R.getState()),w.raycaster.camera===void 0&&(w.raycaster.camera=null)}return w.raycaster.camera?w.raycaster.intersectObject(b,!0):[]}let M=_.flatMap(y).sort((b,w)=>{const R=Go(b.object),T=Go(w.object);return!R||!T?b.distance-w.distance:T.events.priority-R.events.priority||b.distance-w.distance}).filter(b=>{const w=dc(b);return m.has(w)?!1:(m.add(w),!0)});p.events.filter&&(M=p.events.filter(M,p));for(const b of M){let w=b.object;for(;w;){var S;(S=w.__r3f)!=null&&S.eventCount&&g.push({...b,eventObject:w}),w=w.parent}}if("pointerId"in f&&p.internal.capturedMap.has(f.pointerId))for(let b of p.internal.capturedMap.get(f.pointerId).values())m.has(dc(b.intersection))||g.push(b.intersection);return g}function r(f,h,p,m){if(f.length){const g={stopped:!1};for(const _ of f){let y=Go(_.object);if(y||_.object.traverseAncestors(M=>{const S=Go(M);if(S)return y=S,!1}),y){const{raycaster:M,pointer:S,camera:b,internal:w}=y,R=new O(S.x,S.y,0).unproject(b),T=N=>{var U,B;return(U=(B=w.capturedMap.get(N))==null?void 0:B.has(_.eventObject))!=null?U:!1},I=N=>{const U={intersection:_,target:h.target};w.capturedMap.has(N)?w.capturedMap.get(N).set(_.eventObject,U):w.capturedMap.set(N,new Map([[_.eventObject,U]])),h.target.setPointerCapture(N)},C=N=>{const U=w.capturedMap.get(N);U&&DM(w.capturedMap,_.eventObject,U,N)};let D={};for(let N in h){let U=h[N];typeof U!="function"&&(D[N]=U)}let E={..._,...D,pointer:S,intersections:f,stopped:g.stopped,delta:p,unprojectedPoint:R,ray:M.ray,camera:b,stopPropagation(){const N="pointerId"in h&&w.capturedMap.get(h.pointerId);if((!N||N.has(_.eventObject))&&(E.stopped=g.stopped=!0,w.hovered.size&&Array.from(w.hovered.values()).find(U=>U.eventObject===_.eventObject))){const U=f.slice(0,f.indexOf(_));o([...U,_])}},target:{hasPointerCapture:T,setPointerCapture:I,releasePointerCapture:C},currentTarget:{hasPointerCapture:T,setPointerCapture:I,releasePointerCapture:C},nativeEvent:h};if(m(E),g.stopped===!0)break}}}return f}function o(f){const{internal:h}=s.getState();for(const p of h.hovered.values())if(!f.length||!f.find(m=>m.object===p.object&&m.index===p.index&&m.instanceId===p.instanceId)){const g=p.eventObject.__r3f;if(h.hovered.delete(dc(p)),g!=null&&g.eventCount){const _=g.handlers,y={...p,intersections:f};_.onPointerOut==null||_.onPointerOut(y),_.onPointerLeave==null||_.onPointerLeave(y)}}}function l(f,h){for(let p=0;p<h.length;p++){const m=h[p].__r3f;m==null||m.handlers.onPointerMissed==null||m.handlers.onPointerMissed(f)}}function c(f){switch(f){case"onPointerLeave":case"onPointerCancel":return()=>o([]);case"onLostPointerCapture":return h=>{const{internal:p}=s.getState();"pointerId"in h&&p.capturedMap.has(h.pointerId)&&requestAnimationFrame(()=>{p.capturedMap.has(h.pointerId)&&(p.capturedMap.delete(h.pointerId),o([]))})}}return function(p){const{onPointerMissed:m,internal:g}=s.getState();g.lastEvent.current=p;const _=f==="onPointerMove",y=f==="onClick"||f==="onContextMenu"||f==="onDoubleClick",S=n(p,_?t:void 0),b=y?e(p):0;f==="onPointerDown"&&(g.initialClick=[p.offsetX,p.offsetY],g.initialHits=S.map(R=>R.eventObject)),y&&!S.length&&b<=2&&(l(p,g.interaction),m&&m(p)),_&&o(S);function w(R){const T=R.eventObject,I=T.__r3f;if(!(I!=null&&I.eventCount))return;const C=I.handlers;if(_){if(C.onPointerOver||C.onPointerEnter||C.onPointerOut||C.onPointerLeave){const D=dc(R),E=g.hovered.get(D);E?E.stopped&&R.stopPropagation():(g.hovered.set(D,R),C.onPointerOver==null||C.onPointerOver(R),C.onPointerEnter==null||C.onPointerEnter(R))}C.onPointerMove==null||C.onPointerMove(R)}else{const D=C[f];D?(!y||g.initialHits.includes(T))&&(l(p,g.interaction.filter(E=>!g.initialHits.includes(E))),D(R)):y&&g.initialHits.includes(T)&&l(p,g.interaction.filter(E=>!g.initialHits.includes(E)))}}r(S,p,b,w)}}return{handlePointer:c}}const F0=s=>!!(s!=null&&s.render),UM=ge.createContext(null),pD=(s,e)=>{const t=VN((c,f)=>{const h=new O,p=new O,m=new O;function g(b=f().camera,w=p,R=f().size){const{width:T,height:I,top:C,left:D}=R,E=T/I;w.isVector3?m.copy(w):m.set(...w);const N=b.getWorldPosition(h).distanceTo(m);if(PM(b))return{width:T/b.zoom,height:I/b.zoom,top:C,left:D,factor:1,distance:N,aspect:E};{const U=b.fov*Math.PI/180,B=2*Math.tan(U/2)*N,G=B*(T/I);return{width:G,height:B,top:C,left:D,factor:T/G,distance:N,aspect:E}}}let _;const y=b=>c(w=>({performance:{...w.performance,current:b}})),M=new _e;return{set:c,get:f,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},scene:null,xr:null,invalidate:(b=1)=>s(f(),b),advance:(b,w)=>e(b,w,f()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new gM,pointer:M,mouse:M,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const b=f();_&&clearTimeout(_),b.performance.current!==b.performance.min&&y(b.performance.min),_=setTimeout(()=>y(f().performance.max),b.performance.debounce)}},size:{width:0,height:0,top:0,left:0},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:g},setEvents:b=>c(w=>({...w,events:{...w.events,...b}})),setSize:(b,w,R=0,T=0)=>{const I=f().camera,C={width:b,height:w,top:R,left:T};c(D=>({size:C,viewport:{...D.viewport,...g(I,p,C)}}))},setDpr:b=>c(w=>{const R=LM(b);return{viewport:{...w.viewport,dpr:R,initialDpr:w.viewport.initialDpr||R}}}),setFrameloop:(b="always")=>{const w=f().clock;w.stop(),w.elapsedTime=0,b!=="never"&&(w.start(),w.elapsedTime=0),c(()=>({frameloop:b}))},previousRoot:void 0,internal:{interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,lastEvent:ge.createRef(),active:!1,frames:0,priority:0,subscribe:(b,w,R)=>{const T=f().internal;return T.priority=T.priority+(w>0?1:0),T.subscribers.push({ref:b,priority:w,store:R}),T.subscribers=T.subscribers.sort((I,C)=>I.priority-C.priority),()=>{const I=f().internal;I!=null&&I.subscribers&&(I.priority=I.priority-(w>0?1:0),I.subscribers=I.subscribers.filter(C=>C.ref!==b))}}}}}),n=t.getState();let r=n.size,o=n.viewport.dpr,l=n.camera;return t.subscribe(()=>{const{camera:c,size:f,viewport:h,gl:p,set:m}=t.getState();if(f.width!==r.width||f.height!==r.height||h.dpr!==o){r=f,o=h.dpr,uD(c,f),h.dpr>0&&p.setPixelRatio(h.dpr);const g=typeof HTMLCanvasElement<"u"&&p.domElement instanceof HTMLCanvasElement;p.setSize(f.width,f.height,g)}c!==l&&(l=c,m(g=>({viewport:{...g.viewport,...g.viewport.getCurrentViewport(c)}})))}),t.subscribe(c=>s(c)),t};function FM(){const s=ge.useContext(UM);if(!s)throw new Error("R3F: Hooks can only be used within the Canvas component!");return s}function yl(s=t=>t,e){return FM()(s,e)}function Tn(s,e=0){const t=FM(),n=t.getState().internal.subscribe,r=IM(s);return _l(()=>n(r,e,t),[e,n,t]),null}const mD=1,hb=8,Jf=32,db=2,gD=268435456,vD={objects:"shallow"};function _D(s,e){const t={canvas:s,powerPreference:"high-performance",antialias:!0,alpha:!0};return typeof e=="function"?e(t):F0(e)?e:new AM({...t,...e})}function xD(s,e){if(!e&&typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement&&s.parentElement){const{width:t,height:n,top:r,left:o}=s.parentElement.getBoundingClientRect();return{width:t,height:n,top:r,left:o}}else if(!e&&typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas)return{width:s.width,height:s.height,top:0,left:0};return{width:0,height:0,top:0,left:0,...e}}function yD({store:s,configuration:e},t,n){const{gl:r,scene:o,camera:l,shadows:c=!1,linear:f=!1,flat:h=!1,legacy:p=!1,frameloop:m="always",dpr:g=[1,2],performance:_,onPointerMissed:y}=n,M=xD(t,n.size),S={...n,shadows:c,linear:f,flat:h,legacy:p,frameloop:m,size:M},b=s.getState(),w=b.gl,R=e.previous,T=U=>!R||!Nn.equ(S[U],R[U],vD);e.previous=void 0;let I=b.raycaster;if(I||b.set({raycaster:I=new mM}),T("raycaster")){var C;const{params:U,...B}=(C=n.raycaster)!=null?C:{};Ua(I,{...B,params:{...I.params,...U}})}if(!b.camera||b.camera===e.camera&&T("camera")){e.camera=l;const U=l?.isCamera,B=U?l:n.orthographic?new gl(0,0,0,0,.1,1e3):new jn(75,0,.1,1e3);U||(B.position.z=5,l&&(Ua(B,l),B.manual||("aspect"in l||"left"in l||"right"in l||"bottom"in l||"top"in l)&&(B.manual=!0,B.updateProjectionMatrix())),!b.camera&&!(l!=null&&l.rotation)&&B.lookAt(0,0,0)),b.set({camera:B}),I.camera=B}if(!b.scene){let U;o!=null&&o.isScene?(U=o,Vh(U,s,"",{})):(U=new s0,Vh(U,s,"",{}),o&&Ua(U,o)),b.set({scene:U})}if(n.events&&!b.events.handlers&&b.set({events:n.events(s)}),T("size")&&b.setSize(M.width,M.height,M.top,M.left),b.viewport.dpr!==LM(g)&&b.setDpr(g),T("frameloop")&&b.setFrameloop(m),T("onPointerMissed")&&b.set({onPointerMissed:y}),_&&T("performance")&&b.set(U=>({performance:{...U.performance,..._}})),!b.xr){var D;const U=(Y,k)=>{const j=s.getState();j.frameloop!=="never"&&HM(Y,!0,j,k)},B=()=>{const Y=s.getState();Y.gl.xr.enabled=Y.gl.xr.isPresenting,Y.gl.xr.setAnimationLoop(Y.gl.xr.isPresenting?U:null),Y.gl.xr.isPresenting||z0(Y)},G={connect(){const Y=s.getState().gl;Y.xr.addEventListener("sessionstart",B),Y.xr.addEventListener("sessionend",B)},disconnect(){const Y=s.getState().gl;Y.xr.removeEventListener("sessionstart",B),Y.xr.removeEventListener("sessionend",B)}};typeof((D=w.xr)==null?void 0:D.addEventListener)=="function"&&G.connect(),b.set({xr:G})}if(w.shadowMap&&T("shadows")){const U=w.shadowMap.enabled,B=w.shadowMap.type;if(w.shadowMap.enabled=!!c,Nn.boo(c))w.shadowMap.type=pc;else if(Nn.str(c)){var E;const G={basic:Pb,percentage:Jo,soft:pc,variance:La};w.shadowMap.type=(E=G[c])!=null?E:pc}else Nn.obj(c)&&Object.assign(w.shadowMap,c);(U!==w.shadowMap.enabled||B!==w.shadowMap.type)&&(w.shadowMap.needsUpdate=!0)}const N=r&&!Nn.fun(r)&&!F0(r)?r:void 0;T("legacy")&&(Lt.enabled=!p,b.set({legacy:p})),T("linear")&&(N?.outputColorSpace===void 0&&(w.outputColorSpace=f?il:Yn),b.set({linear:f})),T("flat")&&(N?.toneMapping===void 0&&(w.toneMapping=h?sr:jh),b.set({flat:h})),N&&T("gl")&&Ua(w,N),e.previous=S}const O0=s=>typeof s?.then=="function",bD=s=>Object.assign(Promise.resolve(s),{status:"fulfilled",value:s}),SD=s=>{const e=Promise.reject(s);return e.catch(()=>{}),Object.assign(e,{status:"rejected",reason:s})},MD=()=>{let s,e;const t=new Promise((n,r)=>{s=o=>{Object.assign(t,{status:"fulfilled",value:o}),n(o)},e=o=>{Object.assign(t,{status:"rejected",reason:o}),r(o)}});return t.status="pending",t.catch(()=>{}),{promise:t,resolve:s,reject:e}};var wD={version:"9.8.1"};function TD(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var pb={exports:{}},mb={exports:{}},gb;function ED(){return gb||(gb=1,(function(s){s.exports=function(e){function t(i,a,u,d){return new x1(i,a,u,d)}function n(){}function r(i){var a="https://react.dev/errors/"+i;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var u=2;u<arguments.length;u++)a+="&args[]="+encodeURIComponent(arguments[u])}return"Minified React error #"+i+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(i){for(var a=i,u=a;u&&!u.alternate;)a=u,(a.flags&4098)!==0&&(i=a.return),u=a.return;for(;a.return;)a=a.return;return a.tag===3?i:null}function l(i){if(o(i)!==i)throw Error(r(188))}function c(i){var a=i.alternate;if(!a){if(a=o(i),a===null)throw Error(r(188));return a!==i?null:i}for(var u=i,d=a;;){var v=u.return;if(v===null)break;var x=v.alternate;if(x===null){if(d=v.return,d!==null){u=d;continue}break}if(v.child===x.child){for(x=v.child;x;){if(x===u)return l(v),i;if(x===d)return l(v),a;x=x.sibling}throw Error(r(188))}if(u.return!==d.return)u=v,d=x;else{for(var P=!1,z=v.child;z;){if(z===u){P=!0,u=v,d=x;break}if(z===d){P=!0,d=v,u=x;break}z=z.sibling}if(!P){for(z=x.child;z;){if(z===u){P=!0,u=x,d=v;break}if(z===d){P=!0,d=x,u=v;break}z=z.sibling}if(!P)throw Error(r(189))}}if(u.alternate!==d)throw Error(r(190))}if(u.tag!==3)throw Error(r(188));return u.stateNode.current===u?i:a}function f(i){var a=i.tag;if(a===5||a===26||a===27||a===6)return i;for(i=i.child;i!==null;){if(a=f(i),a!==null)return a;i=i.sibling}return null}function h(i){var a=i.tag;if(a===5||a===26||a===27||a===6)return i;for(i=i.child;i!==null;){if(i.tag!==4&&(a=h(i),a!==null))return a;i=i.sibling}return null}function p(i){return i===null||typeof i!="object"?null:(i=k_&&i[k_]||i["@@iterator"],typeof i=="function"?i:null)}function m(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===E1?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case to:return"Fragment";case Np:return"Profiler";case B_:return"StrictMode";case Up:return"Suspense";case Fp:return"SuspenseList";case Bp:return"Activity";case zp:return"ViewTransition"}if(typeof i=="object")switch(i.$$typeof){case eo:return"Portal";case Zr:return i.displayName||"Context";case z_:return(i._context.displayName||"Context")+".Consumer";case Dp:var a=i.render;return i=i.displayName,i||(i=a.displayName||a.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Op:return a=i.displayName||null,a!==null?a:m(i.type)||"Memo";case ws:a=i._payload,i=i._init;try{return m(i(a))}catch{}}return null}function g(i){return{current:i}}function _(i){0>ro||(i.current=Yp[ro],Yp[ro]=null,ro--)}function y(i,a){ro++,Yp[ro]=i.current,i.current=a}function M(i){return i>>>=0,i===0?32:31-(hT(i)/dT|0)|0}function S(i){var a=i&42;if(a!==0)return a;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return i&-i;case 262144:case 524288:case 1048576:case 2097152:return i&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function b(i,a,u){var d=i.pendingLanes;if(d===0)return 0;var v=0,x=i.suspendedLanes,P=i.pingedLanes;i=i.warmLanes;var z=d&134217727;return z!==0?(d=z&~x,d!==0?v=S(d):(P&=z,P!==0?v=S(P):u||(u=z&~i,u!==0&&(v=S(u))))):(z=d&~x,z!==0?v=S(z):P!==0?v=S(P):u||(u=d&~i,u!==0&&(v=S(u)))),v===0?0:a!==0&&a!==v&&(a&x)===0&&(x=v&-v,u=a&-a,x>=u||x===32&&(u&4194048)!==0)?a:v}function w(i,a){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&a)===0}function R(i,a){(a&8)!==0&&(a|=a&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=a;0<u;){var d=31-Bi(u),v=1<<d;a|=i[d],u&=~v}return a}function T(i,a){switch(i){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I(){var i=Ru;return Ru<<=1,(Ru&62914560)===0&&(Ru=4194304),i}function C(i){for(var a=[],u=0;31>u;u++)a.push(i);return a}function D(i,a){i.pendingLanes|=a,a!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function E(i,a,u,d,v,x){var P=i.pendingLanes;i.pendingLanes=u,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=u,i.entangledLanes&=u,i.errorRecoveryDisabledLanes&=u,i.shellSuspendCounter=0;var z=i.entanglements,ie=i.expirationTimes,ve=i.hiddenUpdates;for(u=P&~u;0<u;){var we=31-Bi(u),Ue=1<<we;z[we]=0,ie[we]=-1;var je=ve[we];if(je!==null)for(ve[we]=null,we=0;we<je.length;we++){var It=je[we];It!==null&&(It.lane&=-536870913)}u&=~Ue}d!==0&&N(i,d,0),x!==0&&v===0&&i.tag!==0&&(i.suspendedLanes|=x&~(P&~a))}function N(i,a,u){i.pendingLanes|=a,i.suspendedLanes&=~a;var d=31-Bi(a);i.entangledLanes|=a,i.entanglements[d]=i.entanglements[d]|1073741824|u&261930}function U(i,a){var u=i.entangledLanes|=a;for(i=i.entanglements;u;){var d=31-Bi(u),v=1<<d;v&a|i[d]&a&&(i[d]|=a),u&=~v}}function B(i,a){var u=a&-a;return u=(u&42)!==0?1:G(u),(u&(i.suspendedLanes|a))!==0?0:u}function G(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Y(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function k(i){if(typeof _T=="function"&&xT(i),zi&&typeof zi.setStrictMode=="function")try{zi.setStrictMode(Bl,i)}catch{}}function j(i,a){if(i.name!=null&&i.name!=="auto")return i.name;if(a.autoName!==null)return a.autoName;i=pr.identifierPrefix;var u=yT++;return i="_"+i+"t_"+u.toString(32)+"_",a.autoName=i}function H(i){var a;if(i==null||typeof i=="string")return i;var u=null,d=bo;if(d!==null)for(var v=0;v<d.length;v++){var x=i[d[v]];if(x!=null){if(x==="none")return"none";u=u==null?x:u+(" "+x)}}return(a=u)!=null?a:i.default}function q(i,a){return i=H(i),a=H(a),a==null?i==="auto"?null:i:a==="auto"?null:a}function ne(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}function K(i){if(Zp===void 0)try{throw Error()}catch(u){var a=u.stack.trim().match(/\n( *(at )?)/);Zp=a&&a[1]||"",mx=-1<u.stack.indexOf(`
    at`)?" (<anonymous>)":-1<u.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zp+i+mx}function oe(i,a){if(!i||Jp)return"";Jp=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var d={DetermineComponentFrameRoot:function(){try{if(a){var Ue=function(){throw Error()};if(Object.defineProperty(Ue.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ue,[])}catch(Wt){var je=Wt}Reflect.construct(i,[],Ue)}else{try{Ue.call()}catch(Wt){je=Wt}Ue=!1;try{var It=Object.getOwnPropertyDescriptor(i.prototype,"props");Object.defineProperty(i.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Ue=!0,new i}finally{Ue&&(It!==void 0?Object.defineProperty(i.prototype,"props",It):delete i.prototype.props)}}}else{try{throw Error()}catch(Wt){je=Wt}(Ue=i())&&typeof Ue.catch=="function"&&Ue.catch(function(){})}}catch(Wt){if(Wt&&je&&typeof Wt.stack=="string")return[Wt.stack,je.stack]}return[null,null]}};d.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var v=Object.getOwnPropertyDescriptor(d.DetermineComponentFrameRoot,"name");v&&v.configurable&&Object.defineProperty(d.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var x=d.DetermineComponentFrameRoot(),P=x[0],z=x[1];if(P&&z){var ie=P.split(`
`),ve=z.split(`
`);for(v=d=0;d<ie.length&&!ie[d].includes("DetermineComponentFrameRoot");)d++;for(;v<ve.length&&!ve[v].includes("DetermineComponentFrameRoot");)v++;if(d===ie.length||v===ve.length)for(d=ie.length-1,v=ve.length-1;1<=d&&0<=v&&ie[d]!==ve[v];)v--;for(;1<=d&&0<=v;d--,v--)if(ie[d]!==ve[v]){if(d!==1||v!==1)do if(d--,v--,0>v||ie[d]!==ve[v]){var we=`
`+ie[d].replace(" at new "," at ");return i.displayName&&we.includes("<anonymous>")&&(we=we.replace("<anonymous>",i.displayName)),we}while(1<=d&&0<=v);break}}}finally{Jp=!1,Error.prepareStackTrace=u}return(u=i?i.displayName||i.name:"")?K(u):""}function he(i,a){switch(i.tag){case 26:case 27:case 5:return K(i.type);case 16:return K("Lazy");case 13:return i.child!==a&&a!==null?K("Suspense Fallback"):K("Suspense");case 19:return K("SuspenseList");case 0:case 15:return oe(i.type,!1);case 11:return oe(i.type.render,!1);case 1:return oe(i.type,!0);case 31:return K("Activity");case 30:return K("ViewTransition");default:return""}}function qe(i){try{var a="",u=null;do a+=he(i,u),u=i,i=i.return;while(i);return a}catch(d){return`
Error generating stack: `+d.message+`
`+d.stack}}function Ie(i,a){if(typeof i=="object"&&i!==null){var u=gx.get(i);return u!==void 0?u:(a={value:i,source:a,stack:qe(a)},gx.set(i,a),a)}return{value:i,source:a,stack:qe(a)}}function et(i,a){ao[oo++]=zl,ao[oo++]=Iu,Iu=i,zl=a}function rt(i,a,u){er[tr++]=Lr,er[tr++]=Nr,er[tr++]=Ts,Ts=i;var d=Lr;i=Nr;var v=32-Bi(d)-1;d&=~(1<<v),u+=1;var x=32-Bi(a)+v;if(30<x){var P=v-v%5;x=(d&(1<<P)-1).toString(32),d>>=P,v-=P,Lr=1<<32-Bi(a)+v|u<<v|d,Nr=x+i}else Lr=1<<x|u<<v|d,Nr=i}function xt(i){i.return!==null&&(et(i,1),rt(i,1,0))}function le(i){for(;i===Iu;)Iu=ao[--oo],ao[oo]=null,zl=ao[--oo],ao[oo]=null;for(;i===Ts;)Ts=er[--tr],er[tr]=null,Nr=er[--tr],er[tr]=null,Lr=er[--tr],er[tr]=null}function fe(i,a){er[tr++]=Lr,er[tr++]=Nr,er[tr++]=Ts,Lr=a.id,Nr=a.overflow,Ts=i}function Ne(i,a){y(Es,a),y(kl,i),y(Kn,null),i=R1(a),_(Kn),y(Kn,i)}function at(){_(Kn),_(kl),_(Es)}function We(i){var a=i.memoizedState;a!==null&&(a=a.memoizedState,Pr?Kr._currentValue=a:Kr._currentValue2=a,y(Lu,i)),a=Kn.current;var u=P1(a,i.type);a!==u&&(y(kl,i),y(Kn,u))}function ft(i){kl.current===i&&(_(Kn),_(kl)),Lu.current===i&&(_(Lu),Pr?Kr._currentValue=no:Kr._currentValue2=no)}function Ct(i){var a=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lt(Ie(a,i)),Kp}function me(i,a){if(!Jn)throw Error(r(175));Gw(i.stateNode,i.type,i.memoizedProps,a,i)||Ct(i,!0)}function ye(i){for(Gn=i.return;Gn;)switch(Gn.tag){case 5:case 31:case 13:nr=!1;return;case 27:case 3:nr=!0;return;default:Gn=Gn.return}}function Se(i){if(!Jn||i!==Gn)return!1;if(!Rt)return ye(i),Rt=!0,!1;var a=i.tag;if(_n?a!==3&&a!==27&&(a!==5||ix(i.type)&&!wu(i.type,i.memoizedProps))&&mn&&Ct(i):a!==3&&(a!==5||ix(i.type)&&!wu(i.type,i.memoizedProps))&&mn&&Ct(i),ye(i),a===13){if(!Jn)throw Error(r(316));if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));mn=jw(i)}else if(a===31){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));mn=Yw(i)}else mn=_n&&a===27?Nw(i.type,mn):Gn?nx(i.stateNode):null;return!0}function Me(){Jn&&(mn=Gn=null,Rt=!1)}function Re(){var i=As;return i!==null&&(Ti===null?Ti=i:Ti.push.apply(Ti,i),As=null),i}function lt(i){As===null?As=[i]:As.push(i)}function Ke(i,a,u){Pr?(y(Nu,a._currentValue),a._currentValue=u):(y(Nu,a._currentValue2),a._currentValue2=u)}function ot(i){var a=Nu.current;Pr?i._currentValue=a:i._currentValue2=a,_(Nu)}function mt(i,a,u){for(;i!==null;){var d=i.alternate;if((i.childLanes&a)!==a?(i.childLanes|=a,d!==null&&(d.childLanes|=a)):d!==null&&(d.childLanes&a)!==a&&(d.childLanes|=a),i===u)break;i=i.return}}function V(i,a,u,d){var v=i.child;for(v!==null&&(v.return=i);v!==null;){var x=v.dependencies;if(x!==null){var P=v.child;x=x.firstContext;e:for(;x!==null;){var z=x;x=v;for(var ie=0;ie<a.length;ie++)if(z.context===a[ie]){x.lanes|=u,z=x.alternate,z!==null&&(z.lanes|=u),mt(x.return,u,i),d||(P=null);break e}x=z.next}}else if(v.tag===18){if(P=v.return,P===null)throw Error(r(341));P.lanes|=u,x=P.alternate,x!==null&&(x.lanes|=u),mt(P,u,i),P=null}else v.tag===13&&v.memoizedState!==null&&v.memoizedState.dehydrated===null?(v.lanes|=u,P=v.alternate,P!==null&&(P.lanes|=u),mt(v.return,u,i),P=v.child,P=P!==null?P.sibling:null):P=v.child;if(P!==null)P.return=v;else for(P=v;P!==null;){if(P===i){P=null;break}if(v=P.sibling,v!==null){v.return=P.return,P=v;break}P=P.return}v=P}}function Pt(i,a,u,d){i=null;for(var v=a,x=!1;v!==null;){if(!x){if((v.flags&524288)!==0)x=!0;else if((v.flags&262144)!==0)break}if(v.tag===10){var P=v.alternate;if(P===null)throw Error(r(387));if(P=P.memoizedProps,P!==null){var z=v.type;ki(v.pendingProps.value,P.value)||(i!==null?i.push(z):i=[z])}}else if(v===Lu.current){if(P=v.alternate,P===null)throw Error(r(387));P.memoizedState.memoizedState!==v.memoizedState.memoizedState&&(i!==null?i.push(Kr):i=[Kr])}v=v.return}return i!==null&&V(a,i,u,d),a.flags|=262144,i!==null}function Mt(i){for(i=i.firstContext;i!==null;){var a=i.context;if(!ki(Pr?a._currentValue:a._currentValue2,i.memoizedValue))return!0;i=i.next}return!1}function F(i){oa=i,Qr=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function A(i){return ee(oa,i)}function $(i,a){return oa===null&&F(i),ee(i,a)}function ee(i,a){var u=Pr?a._currentValue:a._currentValue2;if(a={context:a,memoizedValue:u,next:null},Qr===null){if(i===null)throw Error(r(308));Qr=a,i.dependencies={lanes:0,firstContext:a},i.flags|=524288}else Qr=Qr.next=a;return u}function ce(){return{controller:new ST,data:new Map,refCount:0}}function Te(i){i.refCount--,i.refCount===0&&MT(wT,function(){i.controller.abort()})}function Pe(i,a){if((i.pendingLanes&4194048)!==0){var u=i.transitionTypes;for(u===null&&(u=i.transitionTypes=[]),i=0;i<a.length;i++){var d=a[i];u.indexOf(d)===-1&&u.push(d)}}}function ue(i){var a=i.transitionTypes;return i.transitionTypes=null,a}function de(){}function Ae(i){i!==co&&i.next===null&&(co===null?lo=co=i:co=co.next=i),Du=!0,Qp||(Qp=!0,X())}function Je(i,a){if(!em&&Du){em=!0;do for(var u=!1,d=lo;d!==null;){if(i!==0){var v=d.pendingLanes;if(v===0)var x=0;else{var P=d.suspendedLanes,z=d.pingedLanes;x=(1<<31-Bi(42|i)+1)-1,x&=v&~(P&~z),x=x&201326741?x&201326741|1:x?x|2:0}x!==0&&(u=!0,yt(d,x))}else x=Ot,x=b(d,d===an?x:0,d.cancelPendingCommit!==null||d.timeoutHandle!==aa),(x&3)===0||w(d,x)||(u=!0,yt(d,x));d=d.next}while(u);em=!1}}function ze(){Fe()}function Fe(){Du=Qp=!1;var i=0;la!==0&&z1()&&(i=la);for(var a=Si(),u=null,d=lo;d!==null;){var v=d.next,x=it(d,a);x===0?(d.next=null,u===null?lo=v:u.next=v,v===null&&(co=u)):(u=d,(i!==0||(x&3)!==0)&&(Du=!0)),d=v}yn!==0&&yn!==5||Je(i),la!==0&&(la=0)}function it(i,a){for(var u=i.suspendedLanes,d=i.pingedLanes,v=i.expirationTimes,x=i.pendingLanes&-62914561;0<x;){var P=31-Bi(x),z=1<<P,ie=v[P];ie===-1?((z&u)===0||(z&d)!==0)&&(v[P]=T(z,a)):ie<=a&&(i.expiredLanes|=z),x&=~z}if(a=an,u=Ot,u=b(i,i===a?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==aa),d=i.callbackNode,u===0||i===a&&(en===2||en===9)||i.cancelPendingCommit!==null)return d!==null&&d!==null&&jp(d),i.callbackNode=null,i.callbackPriority=0;if((u&3)===0||w(i,u)){if(a=u&-u,a===i.callbackPriority)return a;switch(d!==null&&jp(d),Y(u)){case 2:case 8:u=gT;break;case 32:u=$p;break;case 268435456:u=vT;break;default:u=$p}return d=ut.bind(null,i),u=Pu(u,d),i.callbackPriority=a,i.callbackNode=u,a}return d!==null&&d!==null&&jp(d),i.callbackPriority=2,i.callbackNode=null,2}function ut(i,a){if(yn!==0&&yn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var u=i.callbackNode;if(Dl()&&i.callbackNode!==u)return null;var d=Ot;return d=b(i,i===an?d:0,i.cancelPendingCommit!==null||i.timeoutHandle!==aa),d===0?null:(v_(i,d,a),it(i,Si()),i.callbackNode!=null&&i.callbackNode===u?ut.bind(null,i):null)}function yt(i,a){if(Dl())return null;v_(i,a,!0)}function X(){Y1?j1(function(){(Ut&6)!==0?Pu(dx,ze):Fe()}):Pu(dx,ze)}function De(){if(la===0){var i=ca;i===0&&(i=Au,Au<<=1,(Au&261888)===0&&(Au=256)),la=i}return la}function pe(i,a){if(Hl===null){var u=Hl=[];tm=0,ca=De(),uo={status:"pending",value:void 0,then:function(d){u.push(d)}}}return tm++,a.then(Oe,Oe),a}function Oe(){if(--tm===0&&(Vl=null,Hl!==null)){uo!==null&&(uo.status="fulfilled");var i=Hl;Hl=null,ca=0,uo=null;for(var a=0;a<i.length;a++)(0,i[a])()}}function Ge(i,a){var u=[],d={status:"pending",value:null,reason:null,then:function(v){u.push(v)}};return i.then(function(){d.status="fulfilled",d.value=a;for(var v=0;v<u.length;v++)(0,u[v])(a)},function(v){for(d.status="rejected",d.reason=v,v=0;v<u.length;v++)(0,u[v])(void 0)}),d}function xe(){var i=ua.current;return i!==null?i:an.pooledCache}function nt(i,a){a===null?y(ua,ua.current):y(ua,a.pool)}function Qe(){var i=xe();return i===null?null:{parent:Pr?xn._currentValue:xn._currentValue2,pool:i}}function $t(i,a){if(ki(i,a))return!0;if(typeof i!="object"||i===null||typeof a!="object"||a===null)return!1;var u=Object.keys(i),d=Object.keys(a);if(u.length!==d.length)return!1;for(d=0;d<u.length;d++){var v=u[d];if(!bT.call(a,v)||!ki(i[v],a[v]))return!1}return!0}function Ht(i){return i=i.status,i==="fulfilled"||i==="rejected"}function yi(i,a,u){switch(u=i[u],u===void 0?i.push(a):u!==a&&(a.then(de,de),a=u),a.status){case"fulfilled":return a.value;case"rejected":throw i=a.reason,nu(i),i===void 0&&!("reason"in a)?Error(r(600)):i;default:if(typeof a.status=="string")a.then(de,de);else{if(i=an,i!==null&&100<i.shellSuspendCounter)throw Error(r(482));i=a,i.status="pending",i.then(function(d){if(a.status==="pending"){var v=a;v.status="fulfilled",v.value=d}},function(d){if(a.status==="pending"){var v=a;v.status="rejected",v.reason=d}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw i=a.reason,nu(i),i}throw fa=a,fo}}function zn(i){try{var a=i._init;return a(i._payload)}catch(u){throw u!==null&&typeof u=="object"&&typeof u.then=="function"?(fa=u,fo):u}}function tu(){if(fa===null)throw Error(r(459));var i=fa;return fa=null,i}function nu(i){if(i===fo||i===Uu)throw Error(r(483))}function Ks(i){var a=Gl;return Gl+=1,ho===null&&(ho=[]),yi(ho,i,a)}function ji(i,a){a=a.props.ref,i.ref=a!==void 0?a:null}function Wa(i,a){throw a.$$typeof===S1?Error(r(525)):(i=Object.prototype.toString.call(a),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":i)))}function bl(i){function a(te,Z){if(i){var ae=te.deletions;ae===null?(te.deletions=[Z],te.flags|=16):ae.push(Z)}}function u(te,Z){if(!i)return null;for(;Z!==null;)a(te,Z),Z=Z.sibling;return null}function d(te){for(var Z=new Map;te!==null;)te.key===null?Z.set(te.index,te):Z.set(te.key,te),te=te.sibling;return Z}function v(te,Z){return te=$r(te,Z),te.index=0,te.sibling=null,te}function x(te,Z,ae){return te.index=ae,i?(ae=te.alternate,ae!==null?(ae=ae.index,ae<Z?(te.flags|=2,Z):ae):(te.flags|=134217730,Z)):(te.flags|=1048576,Z)}function P(te){return i&&te.alternate===null&&(te.flags|=134217730),te}function z(te,Z,ae,Ee){return Z===null||Z.tag!==6?(Z=Rp(ae,te.mode,Ee),Z.return=te,Z):(Z=v(Z,ae),Z.return=te,Z)}function ie(te,Z,ae,Ee){var dt=ae.type;return dt===to?(te=we(te,Z,ae.props.children,Ee,ae.key),ji(te,ae),te):Z!==null&&(Z.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===ws&&zn(dt)===Z.type)?(Z=v(Z,ae.props),ji(Z,ae),Z.return=te,Z):(Z=bu(ae.type,ae.key,ae.props,null,te.mode,Ee),ji(Z,ae),Z.return=te,Z)}function ve(te,Z,ae,Ee){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==ae.containerInfo||Z.stateNode.implementation!==ae.implementation?(Z=Pp(ae,te.mode,Ee),Z.return=te,Z):(Z=v(Z,ae.children||[]),Z.return=te,Z)}function we(te,Z,ae,Ee,dt){return Z===null||Z.tag!==7?(Z=sa(ae,te.mode,Ee,dt),Z.return=te,Z):(Z=v(Z,ae),Z.return=te,Z)}function Ue(te,Z,ae){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Rp(""+Z,te.mode,ae),Z.return=te,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Su:return ae=bu(Z.type,Z.key,Z.props,null,te.mode,ae),ji(ae,Z),ae.return=te,ae;case eo:return Z=Pp(Z,te.mode,ae),Z.return=te,Z;case ws:return Z=zn(Z),Ue(te,Z,ae)}if(Mu(Z)||p(Z))return Z=sa(Z,te.mode,ae,null),Z.return=te,Z;if(typeof Z.then=="function")return Ue(te,Ks(Z),ae);if(Z.$$typeof===Zr)return Ue(te,$(te,Z),ae);Wa(te,Z)}return null}function je(te,Z,ae,Ee){var dt=Z!==null?Z.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return dt!==null?null:z(te,Z,""+ae,Ee);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case Su:return ae.key===dt?ie(te,Z,ae,Ee):null;case eo:return ae.key===dt?ve(te,Z,ae,Ee):null;case ws:return ae=zn(ae),je(te,Z,ae,Ee)}if(Mu(ae)||p(ae))return dt!==null?null:we(te,Z,ae,Ee,null);if(typeof ae.then=="function")return je(te,Z,Ks(ae),Ee);if(ae.$$typeof===Zr)return je(te,Z,$(te,ae),Ee);Wa(te,ae)}return null}function It(te,Z,ae,Ee,dt){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number"||typeof Ee=="bigint")return te=te.get(ae)||null,z(Z,te,""+Ee,dt);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case Su:return te=te.get(Ee.key===null?ae:Ee.key)||null,ie(Z,te,Ee,dt);case eo:return te=te.get(Ee.key===null?ae:Ee.key)||null,ve(Z,te,Ee,dt);case ws:return Ee=zn(Ee),It(te,Z,ae,Ee,dt)}if(Mu(Ee)||p(Ee))return te=te.get(ae)||null,we(Z,te,Ee,dt,null);if(typeof Ee.then=="function")return It(te,Z,ae,Ks(Ee),dt);if(Ee.$$typeof===Zr)return It(te,Z,ae,$(Z,Ee),dt);Wa(Z,Ee)}return null}function Wt(te,Z,ae,Ee){for(var dt=null,bn=null,vt=Z,jt=Z=0,In=null;vt!==null&&jt<ae.length;jt++){vt.index>jt?(In=vt,vt=null):In=vt.sibling;var kt=je(te,vt,ae[jt],Ee);if(kt===null){vt===null&&(vt=In);break}i&&vt&&kt.alternate===null&&a(te,vt),Z=x(kt,Z,jt),bn===null?dt=kt:bn.sibling=kt,bn=kt,vt=In}if(jt===ae.length)return u(te,vt),Rt&&et(te,jt),dt;if(vt===null){for(;jt<ae.length;jt++)vt=Ue(te,ae[jt],Ee),vt!==null&&(Z=x(vt,Z,jt),bn===null?dt=vt:bn.sibling=vt,bn=vt);return Rt&&et(te,jt),dt}for(vt=d(vt);jt<ae.length;jt++)In=It(vt,te,jt,ae[jt],Ee),In!==null&&(i&&(kt=In.alternate,kt!==null&&vt.delete(kt.key===null?jt:kt.key)),Z=x(In,Z,jt),bn===null?dt=In:bn.sibling=In,bn=In);return i&&vt.forEach(function(Ds){return a(te,Ds)}),Rt&&et(te,jt),dt}function Ns(te,Z,ae,Ee){if(ae==null)throw Error(r(151));for(var dt=null,bn=null,vt=Z,jt=Z=0,In=null,kt=ae.next();vt!==null&&!kt.done;jt++,kt=ae.next()){vt.index>jt?(In=vt,vt=null):In=vt.sibling;var Ds=je(te,vt,kt.value,Ee);if(Ds===null){vt===null&&(vt=In);break}i&&vt&&Ds.alternate===null&&a(te,vt),Z=x(Ds,Z,jt),bn===null?dt=Ds:bn.sibling=Ds,bn=Ds,vt=In}if(kt.done)return u(te,vt),Rt&&et(te,jt),dt;if(vt===null){for(;!kt.done;jt++,kt=ae.next())kt=Ue(te,kt.value,Ee),kt!==null&&(Z=x(kt,Z,jt),bn===null?dt=kt:bn.sibling=kt,bn=kt);return Rt&&et(te,jt),dt}for(vt=d(vt);!kt.done;jt++,kt=ae.next())kt=It(vt,te,jt,kt.value,Ee),kt!==null&&(i&&(In=kt.alternate,In!==null&&vt.delete(In.key===null?jt:In.key)),Z=x(kt,Z,jt),bn===null?dt=kt:bn.sibling=kt,bn=kt);return i&&vt.forEach(function(RT){return a(te,RT)}),Rt&&et(te,jt),dt}function va(te,Z,ae,Ee){if(typeof ae=="object"&&ae!==null&&ae.type===to&&ae.key===null&&ae.props.ref===void 0&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case Su:e:{for(var dt=ae.key;Z!==null;){if(Z.key===dt){if(dt=ae.type,dt===to){if(Z.tag===7){u(te,Z.sibling),Ee=v(Z,ae.props.children),ji(Ee,ae),Ee.return=te,te=Ee;break e}}else if(Z.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===ws&&zn(dt)===Z.type){u(te,Z.sibling),Ee=v(Z,ae.props),ji(Ee,ae),Ee.return=te,te=Ee;break e}u(te,Z);break}else a(te,Z);Z=Z.sibling}ae.type===to?(Ee=sa(ae.props.children,te.mode,Ee,ae.key),ji(Ee,ae),Ee.return=te,te=Ee):(Ee=bu(ae.type,ae.key,ae.props,null,te.mode,Ee),ji(Ee,ae),Ee.return=te,te=Ee)}return P(te);case eo:e:{for(dt=ae.key;Z!==null;){if(Z.key===dt)if(Z.tag===4&&Z.stateNode.containerInfo===ae.containerInfo&&Z.stateNode.implementation===ae.implementation){u(te,Z.sibling),Ee=v(Z,ae.children||[]),Ee.return=te,te=Ee;break e}else{u(te,Z);break}else a(te,Z);Z=Z.sibling}Ee=Pp(ae,te.mode,Ee),Ee.return=te,te=Ee}return P(te);case ws:return ae=zn(ae),va(te,Z,ae,Ee)}if(Mu(ae))return Wt(te,Z,ae,Ee);if(p(ae)){if(dt=p(ae),typeof dt!="function")throw Error(r(150));return ae=dt.call(ae),Ns(te,Z,ae,Ee)}if(typeof ae.then=="function")return va(te,Z,Ks(ae),Ee);if(ae.$$typeof===Zr)return va(te,Z,$(te,ae),Ee);Wa(te,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint"?(ae=""+ae,Z!==null&&Z.tag===6?(u(te,Z.sibling),Ee=v(Z,ae),Ee.return=te,te=Ee):(u(te,Z),Ee=Rp(ae,te.mode,Ee),Ee.return=te,te=Ee),P(te)):u(te,Z)}return function(te,Z,ae,Ee){try{Gl=0;var dt=va(te,Z,ae,Ee);return ho=null,dt}catch(vt){if(vt===fo||vt===Uu)throw vt;var bn=t(29,vt,null,te.mode);return bn.lanes=Ee,bn.return=te,bn}finally{}}}function Qs(){for(var i=po,a=im=po=0;a<i;){var u=ir[a];ir[a++]=null;var d=ir[a];ir[a++]=null;var v=ir[a];ir[a++]=null;var x=ir[a];if(ir[a++]=null,d!==null&&v!==null){var P=d.pending;P===null?v.next=v:(v.next=P.next,P.next=v),d.pending=v}x!==0&&Sl(u,v,x)}}function $i(i,a,u,d){ir[po++]=i,ir[po++]=a,ir[po++]=u,ir[po++]=d,im|=d,i.lanes|=d,i=i.alternate,i!==null&&(i.lanes|=d)}function ea(i,a,u,d){return $i(i,a,u,d),Yr(i)}function Tr(i,a){return $i(i,null,null,a),Yr(i)}function Sl(i,a,u){i.lanes|=u;var d=i.alternate;d!==null&&(d.lanes|=u);for(var v=!1,x=i.return;x!==null;)x.childLanes|=u,d=x.alternate,d!==null&&(d.childLanes|=u),x.tag===22&&(i=x.stateNode,i===null||i._visibility&1||(v=!0)),i=x,x=x.return;return i.tag===3?(x=i.stateNode,v&&a!==null&&(v=31-Bi(u),i=x.hiddenUpdates,d=i[v],d===null?i[v]=[a]:d.push(a),a.lane=u|536870912),x):null}function Yr(i){if(50<$l)throw $l=0,Zu=null,Error(r(185));for(var a=i.return;a!==null;)i=a,a=i.return;return i.tag===3?i.stateNode:null}function Xa(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xs(i,a){i=i.updateQueue,a.updateQueue===i&&(a.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function cr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function ur(i,a,u){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(Ut&2)!==0){var v=d.pending;return v===null?a.next=a:(a.next=v.next,v.next=a),d.pending=a,a=Yr(i),Sl(i,null,u),a}return $i(i,d,a,u),Yr(i)}function ta(i,a,u){if(a=a.updateQueue,a!==null&&(a=a.shared,(u&4194048)!==0)){var d=a.lanes;d&=i.pendingLanes,u|=d,a.lanes=u,U(i,u)}}function Ml(i,a){var u=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,u===d)){var v=null,x=null;if(u=u.firstBaseUpdate,u!==null){do{var P={lane:u.lane,tag:u.tag,payload:u.payload,callback:null,next:null};x===null?v=x=P:x=x.next=P,u=u.next}while(u!==null);x===null?v=x=a:x=x.next=a}else v=x=a;u={baseState:d.baseState,firstBaseUpdate:v,lastBaseUpdate:x,shared:d.shared,callbacks:d.callbacks},i.updateQueue=u;return}i=u.lastBaseUpdate,i===null?u.firstBaseUpdate=a:i.next=a,u.lastBaseUpdate=a}function na(){if(rm){var i=uo;if(i!==null)throw i}}function ia(i,a,u,d){rm=!1;var v=i.updateQueue;Cs=!1;var x=v.firstBaseUpdate,P=v.lastBaseUpdate,z=v.shared.pending;if(z!==null){v.shared.pending=null;var ie=z,ve=ie.next;ie.next=null,P===null?x=ve:P.next=ve,P=ie;var we=i.alternate;we!==null&&(we=we.updateQueue,z=we.lastBaseUpdate,z!==P&&(z===null?we.firstBaseUpdate=ve:z.next=ve,we.lastBaseUpdate=ie))}if(x!==null){var Ue=v.baseState;P=0,we=ve=ie=null,z=x;do{var je=z.lane&-536870913,It=je!==z.lane;if(It?(Ot&je)===je:(d&je)===je){je!==0&&je===ca&&(rm=!0),we!==null&&(we=we.next={lane:0,tag:z.tag,payload:z.payload,callback:null,next:null});e:{var Wt=i,Ns=z;je=a;var va=u;switch(Ns.tag){case 1:if(Wt=Ns.payload,typeof Wt=="function"){Ue=Wt.call(va,Ue,je);break e}Ue=Wt;break e;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=Ns.payload,je=typeof Wt=="function"?Wt.call(va,Ue,je):Wt,je==null)break e;Ue=Lp({},Ue,je);break e;case 2:Cs=!0}}je=z.callback,je!==null&&(i.flags|=64,It&&(i.flags|=8192),It=v.callbacks,It===null?v.callbacks=[je]:It.push(je))}else It={lane:je,tag:z.tag,payload:z.payload,callback:z.callback,next:null},we===null?(ve=we=It,ie=Ue):we=we.next=It,P|=je;if(z=z.next,z===null){if(z=v.shared.pending,z===null)break;It=z,z=It.next,It.next=null,v.lastBaseUpdate=It,v.shared.pending=null}}while(!0);we===null&&(ie=Ue),v.baseState=ie,v.firstBaseUpdate=ve,v.lastBaseUpdate=we,x===null&&(v.shared.lanes=0),Is|=P,i.lanes=P,i.memoizedState=Ue}}function wl(i,a){if(typeof i!="function")throw Error(r(191,i));i.call(a)}function L(i,a){var u=i.callbacks;if(u!==null)for(i.callbacks=null,i=0;i<u.length;i++)wl(u[i],a)}function W(i,a){i=ts,y(Ou,i),y(Rs,a),ts=i|a.baseLanes}function re(){y(Ou,ts),y(Rs,Rs.current)}function Q(){ts=Ou.current,_(Rs),_(Ou)}function J(i){var a=i.alternate;y(ei,ei.current&1),y(Qn,i),ui===null&&(a===null||Rs.current!==null||a.memoizedState!==null)&&(ui=i)}function ke(i){y(ei,ei.current),y(Qn,i),ui===null&&(ui=i)}function Ye(i){i.tag===22?(y(ei,ei.current),y(Qn,i),ui===null&&(ui=i)):Le()}function Le(){y(ei,ei.current),y(Qn,Qn.current)}function Ve(i){_(Qn),ui===i&&(ui=null),_(ei)}function Ze(i,a){y(Qn,Qn.current),y(ei,a)}function St(i){_(ei),_(Qn),ui===i&&(ui=null)}function wt(i){for(var a=i;a!==null;){if(a.tag===13){var u=a.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||Gp(u)||Wp(u)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!=="independent"){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Ce(){throw Error(r(321))}function zt(i,a){if(a===null)return!1;for(var u=0;u<a.length&&u<i.length;u++)if(!ki(i[u],a[u]))return!1;return!0}function pn(i,a,u,d,v,x){return es=x,Tt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,ht.H=i===null||i.memoizedState===null?xx:yx,da=!1,x=u(d,v),da=!1,mo&&(x=Jt(a,u,d,v)),nn(i),x}function nn(i){ht.H=ku;var a=sn!==null&&sn.next!==null;if(es=0,Cn=sn=Tt=null,Bu=!1,Wl=0,go=null,a)throw Error(r(300));i===null||Rn||(i=i.dependencies,i!==null&&Mt(i)&&(Rn=!0))}function Jt(i,a,u,d){Tt=i;var v=0;do{if(mo&&(go=null),Wl=0,mo=!1,25<=v)throw Error(r(301));if(v+=1,Cn=sn=null,i.updateQueue!=null){var x=i.updateQueue;x.lastEffect=null,x.events=null,x.stores=null,x.memoCache!=null&&(x.memoCache.index=0)}ht.H=ET,x=a(u,d)}while(mo);return x}function kn(){var i=ht.H,a=i.useState()[0];return a=typeof a.then=="function"?Zi(a):a,i=i.useState()[0],(sn!==null?sn.memoizedState:null)!==i&&(Tt.flags|=1024),a}function Xe(){var i=zu!==0;return zu=0,i}function Un(i,a,u){a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~u}function Nt(i){if(Bu){for(i=i.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Bu=!1}es=0,Cn=sn=Tt=null,mo=!1,Wl=zu=0,go=null}function rn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?Tt.memoizedState=Cn=i:Cn=Cn.next=i,Cn}function qt(){if(sn===null){var i=Tt.alternate;i=i!==null?i.memoizedState:null}else i=sn.next;var a=Cn===null?Tt.memoizedState:Cn.next;if(a!==null)Cn=a,sn=i;else{if(i===null)throw Tt.alternate===null?Error(r(467)):Error(r(310));sn=i,i={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},Cn===null?Tt.memoizedState=Cn=i:Cn=Cn.next=i}return Cn}function Di(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zi(i){var a=Wl;return Wl+=1,go===null&&(go=[]),i=yi(go,i,a),a=Tt,(Cn===null?a.memoizedState:Cn.next)===null&&(a=a.alternate,ht.H=a===null||a.memoizedState===null?xx:yx),i}function Gt(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Zi(i);if(i.$$typeof===T1)return;if(i.$$typeof===Zr)return A(i)}throw Error(r(438,String(i)))}function cn(i){var a=null,u=Tt.updateQueue;if(u!==null&&(a=u.memoCache),a==null){var d=Tt.alternate;d!==null&&(d=d.updateQueue,d!==null&&(d=d.memoCache,d!=null&&(a={data:d.data.map(function(v){return v.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),u===null&&(u=Di(),Tt.updateQueue=u),u.memoCache=a,u=a.data[a.index],u===void 0)for(u=a.data[a.index]=Array(i),d=0;d<i;d++)u[d]=w1;return a.index++,u}function Vn(i,a){return typeof a=="function"?a(i):a}function Zt(i){var a=qt();return Ji(a,sn,i)}function Ji(i,a,u){var d=i.queue;if(d===null)throw Error(r(311));d.lastRenderedReducer=u;var v=i.baseQueue,x=d.pending;if(x!==null){if(v!==null){var P=v.next;v.next=x.next,x.next=P}a.baseQueue=v=x,d.pending=null}if(x=i.baseState,v===null)i.memoizedState=x;else{a=v.next;var z=P=null,ie=null,ve=a,we=!1;do{var Ue=ve.lane&-536870913;if(Ue!==ve.lane?(Ot&Ue)===Ue:(es&Ue)===Ue){var je=ve.revertLane;if(je===0)ie!==null&&(ie=ie.next={lane:0,revertLane:0,gesture:null,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null}),Ue===ca&&(we=!0);else if((es&je)===je){ve=ve.next,je===ca&&(we=!0);continue}else Ue={lane:0,revertLane:ve.revertLane,gesture:null,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null},ie===null?(z=ie=Ue,P=x):ie=ie.next=Ue,Tt.lanes|=je,Is|=je;Ue=ve.action,da&&u(x,Ue),x=ve.hasEagerState?ve.eagerState:u(x,Ue)}else je={lane:Ue,revertLane:ve.revertLane,gesture:ve.gesture,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null},ie===null?(z=ie=je,P=x):ie=ie.next=je,Tt.lanes|=Ue,Is|=Ue;ve=ve.next}while(ve!==null&&ve!==a);if(ie===null?P=x:ie.next=z,!ki(x,i.memoizedState)&&(Rn=!0,we&&(u=uo,u!==null)))throw u;i.memoizedState=x,i.baseState=P,i.baseQueue=ie,d.lastRenderedState=x}return v===null&&(d.lanes=0),[i.memoizedState,d.dispatch]}function Er(i){var a=qt(),u=a.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=i;var d=u.dispatch,v=u.pending,x=a.memoizedState;if(v!==null){u.pending=null;var P=v=v.next;do x=i(x,P.action),P=P.next;while(P!==v);ki(x,a.memoizedState)||(Rn=!0),a.memoizedState=x,a.baseQueue===null&&(a.baseState=x),u.lastRenderedState=x}return[x,d]}function Tl(i,a,u){var d=Tt,v=qt(),x=Rt;if(x){if(u===void 0)throw Error(r(407));u=u()}else u=a();var P=!ki((sn||v).memoizedState,u);if(P&&(v.memoizedState=u,Rn=!0),v=v.queue,Od(G0.bind(null,d,v,i),[i]),i=v.getSnapshot!==a||P||Cn!==null&&(Cn.memoizedState.tag&1)!==0,qa(i?9:8,{destroy:void 0},H0.bind(null,d,v,u,a),null),i){if(d.flags|=2048,an===null)throw Error(r(349));x||(es&127)!==0||V0(d,a,u)}return u}function V0(i,a,u){i.flags|=16384,i={getSnapshot:a,value:u},a=Tt.updateQueue,a===null?(a=Di(),Tt.updateQueue=a,a.stores=[i]):(u=a.stores,u===null?a.stores=[i]:u.push(i))}function H0(i,a,u,d){a.value=u,a.getSnapshot=d,W0(a)&&X0(i)}function G0(i,a,u){return u(function(){W0(a)&&X0(i)})}function W0(i){var a=i.getSnapshot;i=i.value;try{var u=a();return!ki(i,u)}catch{return!0}}function X0(i){var a=Tr(i,2);a!==null&&bi(a,i,2)}function Ud(i){var a=rn();if(typeof i=="function"){var u=i;if(i=u(),da){k(!0);try{u()}finally{k(!1)}}}return a.memoizedState=a.baseState=i,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:i},a}function q0(i,a,u,d){return i.baseState=u,Ji(i,sn,typeof d=="function"?d:Vn)}function $M(i,a,u,d,v){if(su(i))throw Error(r(485));if(i=a.action,i!==null){var x={payload:v,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(P){x.listeners.push(P)}};ht.T!==null?u(!0):x.isTransition=!1,d(x),u=a.pending,u===null?(x.next=a.pending=x,Y0(a,x)):(x.next=u.next,a.pending=u.next=x)}}function Y0(i,a){var u=a.action,d=a.payload,v=i.state;if(a.isTransition){var x=ht.T,P={};P.types=x!==null?x.types:null,ht.T=P;try{var z=u(v,d),ie=ht.S;ie!==null&&ie(P,z),j0(i,a,z)}catch(ve){Fd(i,a,ve)}finally{x!==null&&P.types!==null&&(x.types=P.types),ht.T=x}}else try{x=u(v,d),j0(i,a,x)}catch(ve){Fd(i,a,ve)}}function j0(i,a,u){u!==null&&typeof u=="object"&&typeof u.then=="function"?u.then(function(d){$0(i,a,d)},function(d){return Fd(i,a,d)}):$0(i,a,u)}function $0(i,a,u){a.status="fulfilled",a.value=u,Z0(a),i.state=u,a=i.pending,a!==null&&(u=a.next,u===a?i.pending=null:(u=u.next,a.next=u,Y0(i,u)))}function Fd(i,a,u){var d=i.pending;if(i.pending=null,d!==null){d=d.next;do a.status="rejected",a.reason=u,Z0(a),a=a.next;while(a!==d)}i.action=null}function Z0(i){i=i.listeners;for(var a=0;a<i.length;a++)(0,i[a])()}function J0(i,a){return a}function K0(i,a){if(Rt){var u=an.formState;if(u!==null){e:{var d=Tt;if(Rt){if(mn){var v=Iw(mn,nr);if(v){mn=nx(v),d=Lw(v);break e}}Ct(d)}d=!1}d&&(a=u[0])}}u=rn(),u.memoizedState=u.baseState=a,d={pending:null,lanes:0,dispatch:null,lastRenderedReducer:J0,lastRenderedState:a},u.queue=d,u=gv.bind(null,Tt,d),d.dispatch=u,d=Ud(!1);var x=Vd.bind(null,Tt,!1,d.queue);return d=rn(),v={state:a,dispatch:null,action:i,pending:null},d.queue=v,u=$M.bind(null,Tt,v,x,u),v.dispatch=u,d.memoizedState=i,[a,u,!1]}function Q0(i){var a=qt();return ev(a,sn,i)}function ev(i,a,u){if(a=Ji(i,a,J0)[0],i=Zt(Vn)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var d=Zi(a)}catch(P){throw P===fo?Uu:P}else d=a;a=qt();var v=a.queue,x=v.dispatch;return u!==a.memoizedState&&(Tt.flags|=2048,qa(9,{destroy:void 0},ZM.bind(null,v,u),null)),[d,x,i]}function ZM(i,a){i.action=a}function tv(i){var a=qt(),u=sn;if(u!==null)return ev(a,u,i);qt(),a=a.memoizedState,u=qt();var d=u.queue.dispatch;return u.memoizedState=i,[a,d,!1]}function qa(i,a,u,d){return i={tag:i,create:u,deps:d,inst:a,next:null},a=Tt.updateQueue,a===null&&(a=Di(),Tt.updateQueue=a),u=a.lastEffect,u===null?a.lastEffect=i.next=i:(d=u.next,u.next=i,i.next=d,a.lastEffect=i),i}function nv(){return qt().memoizedState}function iu(i,a,u,d){var v=rn();Tt.flags|=i,v.memoizedState=qa(1|a,{destroy:void 0},u,d===void 0?null:d)}function ru(i,a,u,d){var v=qt();d=d===void 0?null:d;var x=v.memoizedState.inst;sn!==null&&d!==null&&zt(d,sn.memoizedState.deps)?v.memoizedState=qa(a,x,u,d):(Tt.flags|=i,v.memoizedState=qa(1|a,x,u,d))}function iv(i,a){iu(8390656,8,i,a)}function Od(i,a){ru(2048,8,i,a)}function JM(i){Tt.flags|=4;var a=Tt.updateQueue;if(a===null)a=Di(),Tt.updateQueue=a,a.events=[i];else{var u=a.events;u===null?a.events=[i]:u.push(i)}}function rv(i){var a=qt().memoizedState;return JM({ref:a,nextImpl:i}),function(){if((Ut&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}function sv(i,a){return ru(4,2,i,a)}function av(i,a){return ru(4,4,i,a)}function ov(i,a){if(typeof a=="function"){i=i();var u=a(i);return function(){typeof u=="function"?u():a(null)}}if(a!=null)return i=i(),a.current=i,function(){a.current=null}}function lv(i,a,u){u=u!=null?u.concat([i]):null,ru(4,4,ov.bind(null,a,i),u)}function Bd(){}function cv(i,a){var u=qt();a=a===void 0?null:a;var d=u.memoizedState;return a!==null&&zt(a,d[1])?d[0]:(u.memoizedState=[i,a],i)}function uv(i,a){var u=qt();a=a===void 0?null:a;var d=u.memoizedState;if(a!==null&&zt(a,d[1]))return d[0];if(d=i(),da){k(!0);try{i()}finally{k(!1)}}return u.memoizedState=[d,a],d}function zd(i,a,u){return u===void 0||(es&1073741824)!==0&&(Ot&261930)===0?i.memoizedState=a:(i.memoizedState=u,i=g_(),Tt.lanes|=i,Is|=i,u)}function fv(i,a,u,d){return ki(u,a)?u:Rs.current!==null?(i=zd(i,u,d),ki(i,a)||(Rn=!0),i):(es&106)===0||(es&1073741824)!==0&&(Ot&261930)===0?(Rn=!0,i.memoizedState=u):(i=g_(),Tt.lanes|=i,Is|=i,a)}function hv(i,a,u,d,v){var x=Jr();Hn(x!==0&&8>x?x:8);var P=ht.T,z={};z.types=P!==null?P.types:null,ht.T=z,Vd(i,!1,a,u);try{var ie=v(),ve=ht.S;if(ve!==null&&ve(z,ie),ie!==null&&typeof ie=="object"&&typeof ie.then=="function"){var we=Ge(ie,d);El(i,a,we,Fi(i))}else El(i,a,d,Fi(i))}catch(Ue){El(i,a,{then:function(){},status:"rejected",reason:Ue},Fi())}finally{Hn(x),P!==null&&z.types!==null&&(P.types=z.types),ht.T=P}}function dv(i){var a=i.memoizedState;if(a!==null)return a;a={memoizedState:no,baseState:no,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:no},next:null};var u={};return a.next={memoizedState:u,baseState:u,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:u},next:null},i.memoizedState=a,i=i.alternate,i!==null&&(i.memoizedState=a),a}function kd(){return A(Kr)}function pv(){return qt().memoizedState}function mv(){return qt().memoizedState}function KM(i){for(var a=i.return;a!==null;){switch(a.tag){case 24:case 3:var u=Fi();i=cr(u);var d=ur(a,i,u);d!==null&&(bi(d,a,u),ta(d,a,u)),a={cache:ce()},i.payload=a;return}a=a.return}}function QM(i,a,u){var d=Fi();u={lane:d,revertLane:0,gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},su(i)?vv(a,u):(u=ea(i,a,u,d),u!==null&&(bi(u,i,d),_v(u,a,d)))}function gv(i,a,u){var d=Fi();El(i,a,u,d)}function El(i,a,u,d){var v={lane:d,revertLane:0,gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null};if(su(i))vv(a,v);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=a.lastRenderedReducer,x!==null))try{var P=a.lastRenderedState,z=x(P,u);if(v.hasEagerState=!0,v.eagerState=z,ki(z,P))return $i(i,a,v,0),an===null&&Qs(),!1}catch{}finally{}if(u=ea(i,a,v,d),u!==null)return bi(u,i,d),_v(u,a,d),!0}return!1}function Vd(i,a,u,d){if(d={lane:2,revertLane:De(),gesture:null,action:d,hasEagerState:!1,eagerState:null,next:null},su(i)){if(a)throw Error(r(479))}else a=ea(i,u,d,2),a!==null&&bi(a,i,2)}function su(i){var a=i.alternate;return i===Tt||a!==null&&a===Tt}function vv(i,a){mo=Bu=!0;var u=i.pending;u===null?a.next=a:(a.next=u.next,u.next=a),i.pending=a}function _v(i,a,u){if((u&4194048)!==0){var d=a.lanes;d&=i.pendingLanes,u|=d,a.lanes=u,U(i,u)}}function Hd(i,a,u,d){a=i.memoizedState,u=u(d,a),u=u==null?a:Lp({},a,u),i.memoizedState=u,i.lanes===0&&(i.updateQueue.baseState=u)}function xv(i,a,u,d,v,x,P){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,x,P):a.prototype&&a.prototype.isPureReactComponent?!$t(u,d)||!$t(v,x):!0}function yv(i,a,u,d){i=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(u,d),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(u,d),a.state!==i&&sm.enqueueReplaceState(a,a.state,null)}function ra(i,a){var u=a;if("ref"in a){u={};for(var d in a)d!=="ref"&&(u[d]=a[d])}if(i=i.defaultProps){u===a&&(u=Lp({},u));for(var v in i)u[v]===void 0&&(u[v]=i[v])}return u}function au(i,a){try{var u=i.onUncaughtError;u(a.value,{componentStack:a.stack})}catch(d){setTimeout(function(){throw d})}}function bv(i,a,u){try{var d=i.onCaughtError;d(u.value,{componentStack:u.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(v){setTimeout(function(){throw v})}}function Gd(i,a,u){return u=cr(u),u.tag=3,u.payload={element:null},u.callback=function(){au(i,a)},u}function Sv(i){return i=cr(i),i.tag=3,i}function Mv(i,a,u,d){var v=u.type.getDerivedStateFromError;if(typeof v=="function"){var x=d.value;i.payload=function(){return v(x)},i.callback=function(){bv(a,u,d)}}var P=u.stateNode;P!==null&&typeof P.componentDidCatch=="function"&&(i.callback=function(){bv(a,u,d),typeof v!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var z=d.stack;this.componentDidCatch(d.value,{componentStack:z!==null?z:""})})}function e1(i,a,u,d,v){if(u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){if(a=u.alternate,a!==null&&Pt(a,u,v,!0),u=Qn.current,u!==null){switch(u.tag){case 31:case 13:case 19:return ui===null?xu():u.alternate===null&&Mn===0&&(Mn=3),u.flags&=-257,u.flags|=65536,u.lanes=v,d===Fu?u.flags|=16384:(a=u.updateQueue,a===null?u.updateQueue=new Set([d]):a.add(d),Ap(i,d,v)),!1;case 22:return u.flags|=65536,d===Fu?u.flags|=16384:(a=u.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([d])},u.updateQueue=a):(u=a.retryQueue,u===null?a.retryQueue=new Set([d]):u.add(d)),Ap(i,d,v)),!1}throw Error(r(435,u.tag))}return Ap(i,d,v),xu(),!1}if(Rt)return a=Qn.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=v,d!==Kp&&(i=Error(r(422),{cause:d}),lt(Ie(i,u)))):(d!==Kp&&(a=Error(r(423),{cause:d}),lt(Ie(a,u))),i=i.current.alternate,i.flags|=65536,v&=-v,i.lanes|=v,d=Ie(d,u),v=Gd(i.stateNode,d,v),Ml(i,v),Mn!==4&&(Mn=2)),!1;var x=Error(r(520),{cause:d});if(x=Ie(x,u),Yl===null?Yl=[x]:Yl.push(x),Mn!==4&&(Mn=2),a===null)return!0;d=Ie(d,u),u=a;do{switch(u.tag){case 3:return u.flags|=65536,i=v&-v,u.lanes|=i,i=Gd(u.stateNode,d,i),Ml(u,i),!1;case 1:if(a=u.type,x=u.stateNode,(u.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ls===null||!Ls.has(x))))return u.flags|=65536,v&=-v,u.lanes|=v,v=Sv(v),Mv(v,i,u,d),Ml(u,v),!1;break;case 22:if(u.memoizedState!==null)return u.flags|=65536,!1}u=u.return}while(u!==null);return!1}function Fn(i,a,u,d){a.child=i===null?_x(a,null,u,d):ha(a,i.child,u,d)}function wv(i,a,u,d,v){u=u.render;var x=a.ref;if("ref"in d){var P={};for(var z in d)z!=="ref"&&(P[z]=d[z])}else P=d;return F(a),d=pn(i,a,u,P,x,v),z=Xe(),i!==null&&!Rn?(Un(i,a,v),jr(i,a,v)):(Rt&&z&&xt(a),a.flags|=1,Fn(i,a,d,v),a.child)}function Tv(i,a,u,d,v){if(i===null){var x=u.type;return typeof x=="function"&&!Cp(x)&&x.defaultProps===void 0&&u.compare===null?(a.tag=15,a.type=x,Ev(i,a,x,d,v)):(i=bu(u.type,null,d,a,a.mode,v),i.ref=a.ref,i.return=a,a.child=i)}if(x=i.child,!Zd(i,v)){var P=x.memoizedProps;if(u=u.compare,u=u!==null?u:$t,u(P,d)&&i.ref===a.ref)return jr(i,a,v)}return a.flags|=1,i=$r(x,d),i.ref=a.ref,i.return=a,a.child=i}function Ev(i,a,u,d,v){if(i!==null){var x=i.memoizedProps;if($t(x,d)&&i.ref===a.ref)if(Rn=!1,a.pendingProps=d=x,Zd(i,v))(i.flags&131072)!==0&&(Rn=!0);else return a.lanes=i.lanes,jr(i,a,v)}return Wd(i,a,u,d,v)}function Av(i,a,u,d){var v=d.children,x=i!==null?i.memoizedState:null;if(i===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),d.mode==="hidden"){if((a.flags&128)!==0){if(x=x!==null?x.baseLanes|u:u,i!==null){for(d=a.child=i.child,v=0;d!==null;)v=v|d.lanes|d.childLanes,d=d.sibling;d=v&~x}else d=0,a.child=null;return Cv(i,a,x,u,d)}if((u&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},i!==null&&nt(a,x!==null?x.cachePool:null),x!==null?W(a,x):re(),Ye(a);else return d=a.lanes=536870912,Cv(i,a,x!==null?x.baseLanes|u:u,u,d)}else x!==null?(nt(a,x.cachePool),W(a,x),Le(),a.memoizedState=null):(i!==null&&nt(a,null),re(),Le());return Fn(i,a,v,u),a.child}function Al(i,a){return i!==null&&i.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Cv(i,a,u,d,v){var x=xe();return x=x===null?null:{parent:Pr?xn._currentValue:xn._currentValue2,pool:x},a.memoizedState={baseLanes:u,cachePool:x},i!==null&&nt(a,null),re(),Ye(a),i!==null&&Pt(i,a,d,!0),a.childLanes=v,null}function ou(i,a){return a=lu({mode:a.mode,children:a.children},i.mode),a.ref=i.ref,i.child=a,a.return=i,a}function Rv(i,a,u){return ha(a,i.child,null,u),i=ou(a,a.pendingProps),i.flags|=2,Ve(a),a.memoizedState=null,i}function t1(i,a,u){var d=a.pendingProps,v=(a.flags&128)!==0;if(a.flags&=-129,i===null){if(Rt){if(d.mode==="hidden")return i=ou(a,d),a.lanes=536870912,i.memoizedState={baseLanes:0,cachePool:null},Al(null,i);if(ke(a),(i=mn)?(i=Vw(i,nr),i!==null&&(a.memoizedState={dehydrated:i,treeContext:Ts!==null?{id:Lr,overflow:Nr}:null,retryLane:536870912,hydrationErrors:null},u=L_(i),u.return=a,a.child=u,Gn=a,mn=null)):i=null,i===null)throw Ct(a);return a.lanes=536870912,null}return ou(a,d)}var x=i.memoizedState;if(x!==null){var P=x.dehydrated;if(ke(a),v)if(a.flags&256)a.flags&=-257,a=Rv(i,a,u);else if(a.memoizedState!==null)a.child=i.child,a.flags|=128,a=null;else throw Error(r(558));else if(Rn||Pt(i,a,u,!1),v=(u&i.childLanes)!==0,Rn||v){if(Rs.current===null){if(d=an,d!==null&&(P=B(d,u),P!==0&&P!==x.retryLane))throw x.retryLane=P,Tr(i,P),bi(d,i,P),am;xu()}a=Rv(i,a,u)}else i=x.treeContext,Jn&&(mn=Fw(P),Gn=a,Rt=!0,As=null,nr=!1,i!==null&&fe(a,i)),a=ou(a,d),a.flags|=134221824;return a}return i=$r(i.child,{mode:d.mode,children:d.children}),i.ref=a.ref,a.child=i,i.return=a,i}function Ya(i,a){var u=a.ref;if(u===null)i!==null&&i.ref!==null&&(a.flags|=4194816);else{if(typeof u!="function"&&typeof u!="object")throw Error(r(284));(i===null||i.ref!==u)&&(a.flags|=4194816)}}function Wd(i,a,u,d,v){return F(a),u=pn(i,a,u,d,void 0,v),d=Xe(),i!==null&&!Rn?(Un(i,a,v),jr(i,a,v)):(Rt&&d&&xt(a),a.flags|=1,Fn(i,a,u,v),a.child)}function Pv(i,a,u,d,v,x){return F(a),a.updateQueue=null,u=Jt(a,d,u,v),nn(i),d=Xe(),i!==null&&!Rn?(Un(i,a,x),jr(i,a,x)):(Rt&&d&&xt(a),a.flags|=1,Fn(i,a,u,x),a.child)}function Iv(i,a,u,d,v){if(F(a),a.stateNode===null){var x=so,P=u.contextType;typeof P=="object"&&P!==null&&(x=A(P)),x=new u(d,x),a.memoizedState=x.state!==null&&x.state!==void 0?x.state:null,x.updater=sm,a.stateNode=x,x._reactInternals=a,x=a.stateNode,x.props=d,x.state=a.memoizedState,x.refs={},Xa(a),P=u.contextType,x.context=typeof P=="object"&&P!==null?A(P):so,x.state=a.memoizedState,P=u.getDerivedStateFromProps,typeof P=="function"&&(Hd(a,u,P,d),x.state=a.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof x.getSnapshotBeforeUpdate=="function"||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(P=x.state,typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount(),P!==x.state&&sm.enqueueReplaceState(x,x.state,null),ia(a,d,x,v),na(),x.state=a.memoizedState),typeof x.componentDidMount=="function"&&(a.flags|=4194308),d=!0}else if(i===null){x=a.stateNode;var z=a.memoizedProps,ie=ra(u,z);x.props=ie;var ve=x.context,we=u.contextType;P=so,typeof we=="object"&&we!==null&&(P=A(we));var Ue=u.getDerivedStateFromProps;we=typeof Ue=="function"||typeof x.getSnapshotBeforeUpdate=="function",z=a.pendingProps!==z,we||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(z||ve!==P)&&yv(a,x,d,P),Cs=!1;var je=a.memoizedState;x.state=je,ia(a,d,x,v),na(),ve=a.memoizedState,z||je!==ve||Cs?(typeof Ue=="function"&&(Hd(a,u,Ue,d),ve=a.memoizedState),(ie=Cs||xv(a,u,ie,d,je,ve,P))?(we||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(a.flags|=4194308)):(typeof x.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=d,a.memoizedState=ve),x.props=d,x.state=ve,x.context=P,d=ie):(typeof x.componentDidMount=="function"&&(a.flags|=4194308),d=!1)}else{x=a.stateNode,xs(i,a),P=a.memoizedProps,we=ra(u,P),x.props=we,Ue=a.pendingProps,je=x.context,ve=u.contextType,ie=so,typeof ve=="object"&&ve!==null&&(ie=A(ve)),z=u.getDerivedStateFromProps,(ve=typeof z=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(P!==Ue||je!==ie)&&yv(a,x,d,ie),Cs=!1,je=a.memoizedState,x.state=je,ia(a,d,x,v),na();var It=a.memoizedState;P!==Ue||je!==It||Cs||i!==null&&i.dependencies!==null&&Mt(i.dependencies)?(typeof z=="function"&&(Hd(a,u,z,d),It=a.memoizedState),(we=Cs||xv(a,u,we,d,je,It,ie)||i!==null&&i.dependencies!==null&&Mt(i.dependencies))?(ve||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(d,It,ie),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(d,It,ie)),typeof x.componentDidUpdate=="function"&&(a.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof x.componentDidUpdate!="function"||P===i.memoizedProps&&je===i.memoizedState||(a.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||P===i.memoizedProps&&je===i.memoizedState||(a.flags|=1024),a.memoizedProps=d,a.memoizedState=It),x.props=d,x.state=It,x.context=ie,d=we):(typeof x.componentDidUpdate!="function"||P===i.memoizedProps&&je===i.memoizedState||(a.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||P===i.memoizedProps&&je===i.memoizedState||(a.flags|=1024),d=!1)}return x=d,Ya(i,a),d=(a.flags&128)!==0,x||d?(x=a.stateNode,u=d&&typeof u.getDerivedStateFromError!="function"?null:x.render(),a.flags|=1,i!==null&&d?(a.child=ha(a,i.child,null,v),a.child=ha(a,null,u,v)):Fn(i,a,u,v),a.memoizedState=x.state,i=a.child):i=jr(i,a,v),i}function Lv(i,a,u,d){return Me(),a.flags|=256,Fn(i,a,u,d),a.child}function Xd(i){return{baseLanes:i,cachePool:Qe()}}function qd(i,a,u){return i=i!==null?i.childLanes&~u:0,a&&(i|=Gi),i}function Nv(i,a,u){var d=a.pendingProps,v=!1,x=(a.flags&128)!==0,P;if((P=x)||(P=i!==null&&i.memoizedState===null?!1:(ei.current&2)!==0),P&&(v=!0,a.flags&=-129),P=(a.flags&32)!==0,a.flags&=-33,i===null){if(Rt){if(v?J(a):Le(),(i=mn)?(i=Hw(i,nr),i!==null&&(a.memoizedState={dehydrated:i,treeContext:Ts!==null?{id:Lr,overflow:Nr}:null,retryLane:536870912,hydrationErrors:null},u=L_(i),u.return=a,a.child=u,Gn=a,mn=null)):i=null,i===null)throw Ct(a);return Wp(i)?a.lanes=32:a.lanes=536870912,null}return x=d.children,d=d.fallback,v?(Le(),v=a.mode,x=lu({mode:"hidden",children:x},v),d=sa(d,v,u,null),x.return=a,d.return=a,x.sibling=d,a.child=x,d=a.child,d.memoizedState=Xd(u),d.childLanes=qd(i,P,u),a.memoizedState=om,Al(null,d)):(J(a),Yd(a,x))}var z=i.memoizedState;if(z!==null){var ie=z.dehydrated;if(ie!==null)return n1(i,a,x,P,d,ie,z,u)}return v?(Le(),v=d.fallback,x=a.mode,z=i.child,ie=z.sibling,d=$r(z,{mode:"hidden",children:d.children}),d.subtreeFlags=z.subtreeFlags&1206910976,ie!==null?v=$r(ie,v):(v=sa(v,x,u,null),v.flags|=2),v.return=a,d.return=a,d.sibling=v,a.child=d,Al(null,d),d=a.child,v=i.child.memoizedState,v===null?v=Xd(u):(x=v.cachePool,x!==null?(z=Pr?xn._currentValue:xn._currentValue2,x=x.parent!==z?{parent:z,pool:z}:x):x=Qe(),v={baseLanes:v.baseLanes|u,cachePool:x}),d.memoizedState=v,d.childLanes=qd(i,P,u),a.memoizedState=om,Al(i.child,d)):(J(a),u=i.child,i=u.sibling,u=$r(u,{mode:"visible",children:d.children}),u.return=a,u.sibling=null,i!==null&&(P=a.deletions,P===null?(a.deletions=[i],a.flags|=16):P.push(i)),a.child=u,a.memoizedState=null,u)}function Yd(i,a){return a=lu({mode:"visible",children:a},i.mode),a.return=i,i.child=a}function lu(i,a){return i=t(22,i,null,a),i.lanes=0,i}function cu(i,a,u){return ha(a,i.child,null,u),i=Yd(a,a.pendingProps.children),i.flags|=2,a.memoizedState=null,i}function n1(i,a,u,d,v,x,P,z){if(u)return a.flags&256?(J(a),a.flags&=-257,cu(i,a,z)):a.memoizedState!==null?(Le(),a.child=i.child,a.flags|=128,null):(Le(),x=v.fallback,P=a.mode,v=lu({mode:"visible",children:v.children},P),x=sa(x,P,z,null),x.flags|=2,v.return=a,x.return=a,v.sibling=x,a.child=v,ha(a,i.child,null,z),v=a.child,v.memoizedState=Xd(z),v.childLanes=qd(i,d,z),a.memoizedState=om,Al(null,v));if(J(a),Wp(x))return d=Rw(x).digest,d!==""&&(v=Error(r(419)),v.stack="",v.digest=d,lt({value:v,source:null,stack:null})),cu(i,a,z);if(Rn||Pt(i,a,z,!1),d=(z&i.childLanes)!==0,Rn||d){if(Rs.current!==null)return cu(i,a,z);if(d=an,d!==null&&(v=B(d,z),v!==0&&v!==P.retryLane))throw P.retryLane=v,Tr(i,v),bi(d,i,v),am;return Gp(x)||xu(),cu(i,a,z)}return Gp(x)?(a.flags|=192,a.child=i.child,null):(i=P.treeContext,Jn&&(mn=Ow(x),Gn=a,Rt=!0,As=null,nr=!1,i!==null&&fe(a,i)),a=Yd(a,v.children),a.flags|=134221824,a)}function Dv(i,a,u){i.lanes|=a;var d=i.alternate;d!==null&&(d.lanes|=a),mt(i.return,a,u)}function Uv(i){for(var a=null;i!==null;){var u=i.alternate;u!==null&&wt(u)===null&&(a=i),i=i.sibling}return a}function uu(i,a,u,d,v,x){var P=i.memoizedState;P===null?i.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:d,tail:u,tailMode:v,treeForkCount:x}:(P.isBackwards=a,P.rendering=null,P.renderingStartTime=0,P.last=d,P.tail=u,P.tailMode=v,P.treeForkCount=x)}function jd(i){var a=i.child;for(i.child=null;a!==null;){var u=a.sibling;a.sibling=i.child,i.child=a,a=u}}function $d(i,a,u){var d=a.pendingProps,v=d.revealOrder,x=d.tail;d=d.children;var P=ei.current;if(a.flags&128)return Ze(a,P),null;var z=(P&2)!==0;if(z?(P=P&1|2,a.flags|=128):P&=1,Ze(a,P),v==="backwards"&&i!==null?(jd(i),Fn(i,a,d,u),jd(i)):Fn(i,a,d,u),d=Rt?zl:0,!z&&i!==null&&(i.flags&128)!==0)e:for(i=a.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Dv(i,u,a);else if(i.tag===19)Dv(i,u,a);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}switch(v){case"backwards":u=Uv(a.child),u===null?(v=a.child,a.child=null):(v=u.sibling,u.sibling=null,jd(a)),uu(a,!0,v,null,x,d);break;case"unstable_legacy-backwards":for(u=null,v=a.child,a.child=null;v!==null;){if(i=v.alternate,i!==null&&wt(i)===null){a.child=v;break}i=v.sibling,v.sibling=u,u=v,v=i}uu(a,!0,u,null,x,d);break;case"together":uu(a,!1,null,null,void 0,d);break;case"independent":a.memoizedState=null;break;default:u=Uv(a.child),u===null?(v=a.child,a.child=null):(v=u.sibling,u.sibling=null),uu(a,!1,v,u,x,d)}return a.child}function Fv(i,a,u){var d=a.pendingProps;return Ke(a,a.type,d.value),Fn(i,a,d.children,u),a.child}function jr(i,a,u){if(i!==null&&(a.dependencies=i.dependencies),Is|=a.lanes,(u&a.childLanes)===0)if(i!==null){if(Pt(i,a,u,!1),(u&a.childLanes)===0)return null}else return null;if(i!==null&&a.child!==i.child)throw Error(r(153));if(a.child!==null){for(i=a.child,u=$r(i,i.pendingProps),a.child=u,u.return=a;i.sibling!==null;)i=i.sibling,u=u.sibling=$r(i,i.pendingProps),u.return=a;u.sibling=null}return a.child}function Zd(i,a){return(i.lanes&a)!==0?!0:(i=i.dependencies,!!(i!==null&&Mt(i)))}function i1(i,a,u){switch(a.tag){case 3:Ne(a,a.stateNode.containerInfo),Ke(a,xn,i.memoizedState.cache),Me();break;case 27:case 5:We(a);break;case 4:Ne(a,a.stateNode.containerInfo);break;case 10:Ke(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,ke(a),null;break;case 13:var d=a.memoizedState;if(d!==null){if(d.dehydrated!==null)return J(a),a.flags|=128,null;d=Pt(i,a,u,!1);var v=a.child.childLanes;return d||(u&v)!==0?Nv(i,a,u):(J(a),i=jr(i,a,u),i!==null?i.sibling:null)}J(a);break;case 19:if(a.flags&128)return $d(i,a,u);if(v=(i.flags&128)!==0,d=(u&a.childLanes)!==0,d||(Pt(i,a,u,!1),d=(u&a.childLanes)!==0),v){if(d)return $d(i,a,u);a.flags|=128}if(v=a.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),Ze(a,ei.current),d)break;return null;case 22:return a.lanes=0,Av(i,a,u,a.pendingProps);case 24:Ke(a,xn,i.memoizedState.cache)}return jr(i,a,u)}function Ov(i,a,u){if(i!==null)if(i.memoizedProps!==a.pendingProps)Rn=!0;else{if(!Zd(i,u)&&(a.flags&128)===0)return Rn=!1,i1(i,a,u);Rn=(i.flags&131072)!==0}else Rn=!1,Rt&&(a.flags&1048576)!==0&&rt(a,zl,a.index);switch(a.lanes=0,a.tag){case 16:e:{var d=a.pendingProps;if(i=zn(a.elementType),a.type=i,typeof i=="function")Cp(i)?(d=ra(i,d),a.tag=1,a=Iv(null,a,i,d,u)):(a.tag=0,a=Wd(null,a,i,d,u));else{if(i!=null){var v=i.$$typeof;if(v===Dp){a.tag=11,a=wv(null,a,i,d,u);break e}else if(v===Op){a.tag=14,a=Tv(null,a,i,d,u);break e}else if(v===Zr){a.tag=10,a.type=i,a=Fv(null,a,u);break e}}throw a=m(i)||i,Error(r(306,a,""))}}return a;case 0:return Wd(i,a,a.type,a.pendingProps,u);case 1:return d=a.type,v=ra(d,a.pendingProps),Iv(i,a,d,v,u);case 3:e:{if(Ne(a,a.stateNode.containerInfo),i===null)throw Error(r(387));var x=a.pendingProps;v=a.memoizedState,d=v.element,xs(i,a),ia(a,x,null,u);var P=a.memoizedState;if(x=P.cache,Ke(a,xn,x),x!==v.cache&&V(a,[xn],u,!0),na(),x=P.element,Jn&&v.isDehydrated)if(v={element:x,isDehydrated:!1,cache:P.cache},a.updateQueue.baseState=v,a.memoizedState=v,a.flags&256){a=Lv(i,a,x,u);break e}else if(x!==d){d=Ie(Error(r(424)),a),lt(d),a=Lv(i,a,x,u);break e}else for(Jn&&(mn=Uw(a.stateNode.containerInfo),Gn=a,Rt=!0,As=null,nr=!0),u=_x(a,null,x,u),a.child=u;u;)u.flags=u.flags&-3|134221824,u=u.sibling;else{if(Me(),x===d){a=jr(i,a,u);break e}Fn(i,a,x,u)}a=a.child}return a;case 26:if(Qi)return Ya(i,a),i===null?(u=sx(a.type,null,a.pendingProps,null))?a.memoizedState=u:Rt||(a.stateNode=lx(a.type,a.pendingProps,Es.current,a)):a.memoizedState=sx(a.type,i.memoizedProps,a.pendingProps,i.memoizedState),null;case 27:if(_n)return We(a),i===null&&_n&&Rt&&(d=a.stateNode=ux(a.type,a.pendingProps,Es.current,Kn.current,!1),Gn=a,nr=!0,mn=Bw(a.type,d,mn)),Fn(i,a,a.pendingProps.children,u),Ya(i,a),i===null&&(a.flags|=4194304),a.child;case 5:return i===null&&Rt&&(sT(a.type,a.pendingProps,Kn.current),(v=d=mn)&&(d=zw(d,a.type,a.pendingProps,nr),d!==null?(a.stateNode=d,Gn=a,mn=Dw(d),nr=!1,v=!0):v=!1),v||Ct(a)),We(a),v=a.type,x=a.pendingProps,P=i!==null?i.memoizedProps:null,d=x.children,wu(v,x)?d=null:P!==null&&wu(v,P)&&(a.flags|=32),a.memoizedState!==null&&(v=pn(i,a,kn,null,null,u),Pr?Kr._currentValue=v:Kr._currentValue2=v),Ya(i,a),Fn(i,a,d,u),a.child;case 6:return i===null&&Rt&&(aT(a.pendingProps,Kn.current),(i=u=mn)&&(u=kw(u,a.pendingProps,nr),u!==null?(a.stateNode=u,Gn=a,mn=null,i=!0):i=!1),i||Ct(a)),null;case 13:return Nv(i,a,u);case 4:return Ne(a,a.stateNode.containerInfo),d=a.pendingProps,i===null?a.child=ha(a,null,d,u):Fn(i,a,d,u),a.child;case 11:return wv(i,a,a.type,a.pendingProps,u);case 7:return d=a.pendingProps,Ya(i,a),Fn(i,a,d,u),a.child;case 8:return Fn(i,a,a.pendingProps.children,u),a.child;case 12:return Fn(i,a,a.pendingProps.children,u),a.child;case 10:return Fv(i,a,u);case 9:return v=a.type._context,d=a.pendingProps.children,F(a),v=A(v),d=d(v),a.flags|=1,Fn(i,a,d,u),a.child;case 14:return Tv(i,a,a.type,a.pendingProps,u);case 15:return Ev(i,a,a.type,a.pendingProps,u);case 19:return $d(i,a,u);case 31:return t1(i,a,u);case 22:return Av(i,a,u,a.pendingProps);case 24:return F(a),d=A(xn),i===null?(v=xe(),v===null&&(v=an,x=ce(),v.pooledCache=x,x.refCount++,x!==null&&(v.pooledCacheLanes|=u),v=x),a.memoizedState={parent:d,cache:v},Xa(a),Ke(a,xn,v)):((i.lanes&u)!==0&&(xs(i,a),ia(a,null,null,u),na()),v=i.memoizedState,x=a.memoizedState,v.parent!==d?(v={parent:d,cache:d},a.memoizedState=v,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=v),Ke(a,xn,d)):(d=x.cache,Ke(a,xn,d),d!==v.cache&&V(a,[xn],u,!0))),Fn(i,a,a.pendingProps.children,u),a.child;case 30:return a.stateNode===null&&(a.stateNode={autoName:null,paired:null,clones:null,ref:null}),d=a.pendingProps,d.name!=null&&d.name!=="auto"?a.flags|=i===null?18882560:18874368:Rt&&xt(a),i!==null&&i.memoizedProps.name!==d.name?a.flags|=4194816:Ya(i,a),Fn(i,a,d.children,u),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function fr(i){i.flags|=4}function fu(i){Ir&&(i.flags|=8)}function Bv(i,a){if(i!==null&&i.child===a.child)return!1;if((a.flags&16)!==0)return!0;for(i=a.child;i!==null;){if((i.flags&8218)!==0||(i.subtreeFlags&8218)!==0)return!0;i=i.sibling}return!1}function Jd(i,a,u,d){if(vn)for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)kp(i,u.stateNode);else if(!(u.tag===4||_n&&u.tag===27)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break;for(;u.sibling===null;){if(u.return===null||u.return===a)return;u=u.return}u.sibling.return=u.return,u=u.sibling}else if(Ir)for(var v=a.child;v!==null;){if(v.tag===5){var x=v.stateNode;u&&d&&(x=ex(x,v.type,v.memoizedProps)),kp(i,x)}else if(v.tag===6)x=v.stateNode,u&&d&&(x=tx(x,v.memoizedProps)),kp(i,x);else if(v.tag!==4){if(v.tag===22&&v.memoizedState!==null)x=v.child,x!==null&&(x.return=v),Jd(i,v,!0,!0);else if(v.child!==null){v.child.return=v,v=v.child;continue}}if(v===a)break;for(;v.sibling===null;){if(v.return===null||v.return===a)return;v=v.return}v.sibling.return=v.return,v=v.sibling}}function zv(i,a,u,d){var v=!1;if(Ir)for(var x=a.child;x!==null;){if(x.tag===5){var P=x.stateNode;u&&d&&(P=ex(P,x.type,x.memoizedProps)),K_(i,P)}else if(x.tag===6)P=x.stateNode,u&&d&&(P=tx(P,x.memoizedProps)),K_(i,P);else if(x.tag!==4){if(x.tag===22&&x.memoizedState!==null)v=x.child,v!==null&&(v.return=x),zv(i,x,!0,!0),v=!0;else if(x.child!==null){x.child.return=x,x=x.child;continue}}if(x===a)break;for(;x.sibling===null;){if(x.return===null||x.return===a)return v;x=x.return}x.sibling.return=x.return,x=x.sibling}return v}function kv(i,a){if(Ir&&Bv(i,a)){i=a.stateNode;var u=i.containerInfo,d=J_();zv(d,a,!1,!1),i.pendingChildren=d,fr(a),Cw(u,d)}}function Kd(i,a,u,d){if(vn)i.memoizedProps!==d&&fr(a);else if(Ir){var v=i.stateNode,x=i.memoizedProps;if((i=Bv(i,a))||x!==d){var P=Kn.current;x=Aw(v,u,x,d,!i,null),x===v?a.stateNode=v:(fu(a),G_(x,u,d,P)&&fr(a),a.stateNode=x,i&&Jd(x,a,!1,!1))}else a.stateNode=v}}function Qd(i,a,u,d,v){if((i.mode&32)!==0&&(u===null?V1(a,d):H1(a,u,d))){if(i.flags|=16777216,(v&335544128)===v||Vp(a,d))if(X_(i.stateNode,a,d))i.flags|=8192;else if(b_())i.flags|=8192;else throw fa=Fu,nm}else i.flags&=-16777217}function Vv(i,a){if(cT(a)){if(i.flags|=16777216,!cx(a))if(b_())i.flags|=8192;else throw fa=Fu,nm}else i.flags&=-16777217}function hu(i,a){a!==null&&(i.flags|=4),i.flags&16384&&(a=i.tag!==22?I():536870912,i.lanes|=a,_o|=a)}function Cl(i,a){if(!Rt)switch(i.tailMode){case"visible":break;case"collapsed":for(var u=i.tail,d=null;u!==null;)u.alternate!==null&&(d=u),u=u.sibling;d===null?a||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null;break;default:for(a=i.tail,u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i.tail=null:u.sibling=null}}function ln(i){var a=i.alternate!==null&&i.alternate.child===i.child,u=0,d=0;if(a)for(var v=i.child;v!==null;)u|=v.lanes|v.childLanes,d|=v.subtreeFlags&1206910976,d|=v.flags&1206910976,v.return=i,v=v.sibling;else for(v=i.child;v!==null;)u|=v.lanes|v.childLanes,d|=v.subtreeFlags,d|=v.flags,v.return=i,v=v.sibling;return i.subtreeFlags|=d,i.childLanes=u,a}function r1(i,a,u){var d=a.pendingProps;switch(le(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(a),null;case 1:return ln(a),null;case 3:return u=a.stateNode,d=null,i!==null&&(d=i.memoizedState.cache),a.memoizedState.cache!==d&&(a.flags|=2048),ot(xn),at(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(i===null||i.child===null)&&(Se(a)?fr(a):i===null||i.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Re())),kv(i,a),ln(a),null;case 26:if(Qi){var v=a.type,x=a.memoizedState;return i===null?(fr(a),x!==null?(ln(a),Vv(a,x)):(ln(a),Qd(a,v,null,d,u))):x?x!==i.memoizedState?(fr(a),ln(a),Vv(a,x)):(ln(a),a.flags&=-16777217):(x=i.memoizedProps,vn?x!==d&&fr(a):Kd(i,a,v,d),ln(a),Qd(a,v,x,d,u)),null}case 27:if(_n){if(ft(a),u=Es.current,v=a.type,i!==null&&a.stateNode!=null)vn?i.memoizedProps!==d&&fr(a):Kd(i,a,v,d);else{if(!d){if(a.stateNode===null)throw Error(r(166));return ln(a),a.subtreeFlags&=-33554433,null}i=Kn.current,Se(a)?me(a,i):(i=ux(v,d,u,i,!0),a.stateNode=i,fr(a))}return ln(a),a.subtreeFlags&=-33554433,null}case 5:if(ft(a),v=a.type,i!==null&&a.stateNode!=null)Kd(i,a,v,d);else{if(!d){if(a.stateNode===null)throw Error(r(166));return ln(a),a.subtreeFlags&=-33554433,null}if(x=Kn.current,Se(a))me(a,x),Qw(a.stateNode,v,d,x)&&(a.flags|=64);else{var P=N1(v,d,Es.current,x,a);fu(a),Jd(P,a,!1,!1),a.stateNode=P,G_(P,v,d,x)&&fr(a)}}return ln(a),a.subtreeFlags&=-33554433,Qd(a,a.type,i===null?null:i.memoizedProps,a.pendingProps,u),null;case 6:if(i&&a.stateNode!=null)u=i.memoizedProps,vn?u!==d&&fr(a):Ir&&(u!==d?(i=Es.current,u=Kn.current,fu(a),a.stateNode=W_(d,i,u,a)):a.stateNode=i.stateNode);else{if(typeof d!="string"&&a.stateNode===null)throw Error(r(166));if(i=Es.current,u=Kn.current,Se(a)){if(!Jn)throw Error(r(176));if(i=a.stateNode,u=a.memoizedProps,d=null,v=Gn,v!==null)switch(v.tag){case 27:case 5:d=v.memoizedProps}Ww(i,u,a,d)||Ct(a,!0)}else fu(a),a.stateNode=W_(d,i,u,a)}return ln(a),null;case 31:if(u=a.memoizedState,i===null||i.memoizedState!==null){if(d=Se(a),u!==null){if(i===null){if(!d)throw Error(r(318));if(!Jn)throw Error(r(556));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(557));Xw(i,a)}else Me(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ln(a),i=!1}else u=Re(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=u),i=!0;if(!i)return a.flags&256?(Ve(a),a):(Ve(a),null);if((a.flags&128)!==0)throw Error(r(558))}return ln(a),null;case 13:if(d=a.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(v=Se(a),d!==null&&d.dehydrated!==null){if(i===null){if(!v)throw Error(r(318));if(!Jn)throw Error(r(344));if(v=a.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(r(317));qw(v,a)}else Me(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ln(a),v=!1}else v=Re(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=v),v=!0;if(!v)return a.flags&256?(Ve(a),a):(Ve(a),null)}return Ve(a),(a.flags&128)!==0?(a.lanes=u,a):(u=d!==null,i=i!==null&&i.memoizedState!==null,u&&(d=a.child,v=null,d.alternate!==null&&d.alternate.memoizedState!==null&&d.alternate.memoizedState.cachePool!==null&&(v=d.alternate.memoizedState.cachePool.pool),x=null,d.memoizedState!==null&&d.memoizedState.cachePool!==null&&(x=d.memoizedState.cachePool.pool),x!==v&&(d.flags|=2048)),u!==i&&u&&(a.child.flags|=8192),hu(a,a.updateQueue),ln(a),null);case 4:return at(),kv(i,a),i===null&&O1(a.stateNode.containerInfo),a.flags|=67108864,ln(a),null;case 10:return ot(a.type),ln(a),null;case 19:if(St(a),d=a.memoizedState,d===null)return ln(a),null;if(v=(a.flags&128)!==0,x=d.rendering,x===null)if(v)Cl(d,!1);else{if(Mn!==0||i!==null&&(i.flags&128)!==0)for(i=a.child;i!==null;){if(x=wt(i),x!==null){for(a.flags|=128,Cl(d,!1),i=x.updateQueue,a.updateQueue=i,hu(a,i),a.subtreeFlags=0,i=u,u=a.child;u!==null;)I_(u,i),u=u.sibling;return Ze(a,ei.current&1|2),Rt&&et(a,d.treeForkCount),a.child}i=i.sibling}d.tail!==null&&Si()>jl&&(a.flags|=128,v=!0,Cl(d,!1),a.lanes=4194304)}else{if(!v)if(i=wt(x),i!==null){if(a.flags|=128,v=!0,i=i.updateQueue,a.updateQueue=i,hu(a,i),Cl(d,!0),d.tail===null&&d.tailMode!=="collapsed"&&d.tailMode!=="visible"&&!x.alternate&&!Rt)return ln(a),null}else 2*Si()-d.renderingStartTime>jl&&u!==536870912&&(a.flags|=128,v=!0,Cl(d,!1),a.lanes=4194304);d.isBackwards?(x.sibling=a.child,a.child=x):(i=d.last,i!==null?i.sibling=x:a.child=x,d.last=x)}if(d.tail!==null){i=d.tail;e:{for(u=i;u!==null;){if(u.alternate!==null){u=!1;break e}u=u.sibling}u=!0}return d.rendering=i,d.tail=i.sibling,d.renderingStartTime=Si(),i.sibling=null,x=ei.current,x=v?x&1|2:x&1,d.tailMode==="visible"||d.tailMode==="collapsed"||!u||Rt?Ze(a,x):(u=x,y(Qn,a),y(ei,u),ui===null&&(ui=a)),Rt&&et(a,d.treeForkCount),i}return ln(a),null;case 22:case 23:return Ve(a),Q(),d=a.memoizedState!==null,i!==null?i.memoizedState!==null!==d&&(a.flags|=8192):d&&(a.flags|=8192),d?(u&536870912)!==0&&(a.flags&128)===0&&(ln(a),a.subtreeFlags&6&&(a.flags|=8192)):ln(a),u=a.updateQueue,u!==null&&hu(a,u.retryQueue),u=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),d=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(d=a.memoizedState.cachePool.pool),d!==u&&(a.flags|=2048),i!==null&&_(ua),null;case 24:return u=null,i!==null&&(u=i.memoizedState.cache),a.memoizedState.cache!==u&&(a.flags|=2048),ot(xn),ln(a),null;case 25:return null;case 30:return a.flags|=33554432,ln(a),null}throw Error(r(156,a.tag))}function s1(i,a){switch(le(a),a.tag){case 1:return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 3:return ot(xn),at(),i=a.flags,(i&65536)!==0&&(i&128)===0?(a.flags=i&-65537|128,a):null;case 26:case 27:case 5:return ft(a),null;case 31:if(a.memoizedState!==null){if(Ve(a),a.alternate===null)throw Error(r(340));Me()}return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 13:if(Ve(a),i=a.memoizedState,i!==null&&i.dehydrated!==null){if(a.alternate===null)throw Error(r(340));Me()}return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 19:return St(a),i=a.flags,i&65536?(a.flags=i&-65537|128,i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null),a.flags|=4,a):null;case 4:return at(),null;case 10:return ot(a.type),null;case 22:case 23:return Ve(a),Q(),i!==null&&_(ua),i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 24:return ot(xn),null;case 25:return null;default:return null}}function Hv(i,a){switch(le(a),a.tag){case 3:ot(xn),at();break;case 26:case 27:case 5:ft(a);break;case 4:at();break;case 31:a.memoizedState!==null&&Ve(a);break;case 13:Ve(a);break;case 19:St(a);break;case 10:ot(a.type);break;case 22:case 23:Ve(a),Q(),i!==null&&_(ua);break;case 24:ot(xn)}}function Rl(i,a){try{var u=a.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var v=d.next;u=v;do{if((u.tag&i)===i){d=void 0;var x=u.create,P=u.inst;d=x(),P.destroy=d}u=u.next}while(u!==v)}}catch(z){Yt(a,a.return,z)}}function ys(i,a,u){try{var d=a.updateQueue,v=d!==null?d.lastEffect:null;if(v!==null){var x=v.next;d=x;do{if((d.tag&i)===i){var P=d.inst,z=P.destroy;if(z!==void 0){P.destroy=void 0,v=a;var ie=u,ve=z;try{ve()}catch(we){Yt(v,ie,we)}}}d=d.next}while(d!==x)}}catch(we){Yt(a,a.return,we)}}function Gv(i){var a=i.updateQueue;if(a!==null){var u=i.stateNode;try{L(a,u)}catch(d){Yt(i,i.return,d)}}}function Wv(i,a,u){u.props=ra(i.type,i.memoizedProps),u.state=i.memoizedState;try{u.componentWillUnmount()}catch(d){Yt(i,a,d)}}function Ar(i,a){try{var u=i.ref;if(u!==null){switch(i.tag){case 26:case 27:case 5:var d=Ul(i.stateNode);break;case 30:var v=i.stateNode,x=j(i.memoizedProps,v);(v.ref===null||v.ref.name!==x)&&(v.ref=$_(x)),d=v.ref;break;case 7:i.stateNode===null&&(i.stateNode=ww(i)),d=i.stateNode;break;default:d=i.stateNode}typeof u=="function"?i.refCleanup=u(d):u.current=d}}catch(P){Yt(i,a,P)}}function $n(i,a){var u=i.ref,d=i.refCleanup;if(u!==null)if(typeof d=="function")try{d()}catch(v){Yt(i,a,v)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof u=="function")try{u(null)}catch(v){Yt(i,a,v)}else u.current=null}function Xv(){var i=ii;return ii=!1,i}function Pl(i,a){if((i.tag===5||i.tag===27||i.tag===6)&&i.alternate===null&&a!==null)for(var u=0;u<a.length;u++)Z_(i.stateNode,a[u])}function qv(i){for(var a=i.return;a!==null&&(tp(a)&&Z_(i.stateNode,a.stateNode),!ep(a));)a=a.return}function Il(i){for(var a=i.return;a!==null&&(tp(a)&&Ew(i.stateNode,a.stateNode),!ep(a));)a=a.return}function ep(i){return i.tag===5||i.tag===3||(_n?i.tag===27:!1)}function tp(i){return i&&i.tag===7&&i.stateNode!==null}function np(i){var a=i.type,u=i.memoizedProps,d=i.stateNode;try{rw(d,a,u,i)}catch(v){Yt(i,i.return,v)}}function ip(i,a,u){try{sw(i.stateNode,i.type,u,a,i)}catch(d){Yt(i,i.return,d)}}function Yv(i){return i.tag===5||i.tag===3||(Qi?i.tag===26:!1)||(_n?i.tag===27&&io(i.type):!1)||i.tag===4}function rp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Yv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(_n&&i.tag===27&&io(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function sp(i,a,u,d){var v=i.tag;if(v===5||v===6)v=i.stateNode,a?ow(u,v,a):nw(u,v),Pl(i,d),ii=!0;else if(v!==4&&(_n&&v===27&&(Pl(i,d),d=null,io(i.type)&&(u=i.stateNode,a=null)),i=i.child,i!==null))for(sp(i,a,u,d),i=i.sibling;i!==null;)sp(i,a,u,d),i=i.sibling}function du(i,a,u,d){var v=i.tag;if(v===5||v===6)v=i.stateNode,a?aw(u,v,a):tw(u,v),Pl(i,d),ii=!0;else if(v!==4&&(_n&&v===27&&(Pl(i,d),d=null,io(i.type)&&(u=i.stateNode)),i=i.child,i!==null))for(du(i,a,u,d),i=i.sibling;i!==null;)du(i,a,u,d),i=i.sibling}function ap(i,a){if(i.tag===5||_n&&i.tag===27)Pl(i,a);else if(i.tag!==4&&(i=i.child,i!==null))for(ap(i,a),i=i.sibling;i!==null;)ap(i,a),i=i.sibling}function jv(i,a,u){i=i.containerInfo;try{Q_(i,u)}catch(d){Yt(a,a.return,d)}}function $v(i){var a=i.stateNode,u=i.memoizedProps;try{fT(i.type,u,a,i)}catch(d){Yt(i,i.return,d)}}function Zv(i){(i.tag===30||(i.subtreeFlags&33554432)!==0)&&(Vu=!0)}function Jv(){var i=Dr;return Dr=null,i}function ja(i,a,u,d,v){return Mi=0,Kv(i.child,a,u,d,v)}function Kv(i,a,u,d,v){if(!vn)return!1;for(var x=!1;i!==null;){if(i.tag===5){var P=i.stateNode;if(d!==null){var z=Hp(P);d.push(z),Tu(z)&&(x=!0)}else x||Tu(Hp(P))&&(x=!0);Vu=!0,j_(P,Mi===0?a:a+"_"+Mi,u),Mi++}else(i.tag!==22||i.memoizedState===null)&&(i.tag===30&&v||Kv(i.child,a,u,d,v)&&(x=!0));i=i.sibling}return x}function Cr(i,a){if(vn)for(;i!==null;)i.tag===5?pw(i.stateNode,i.memoizedProps):(i.tag!==22||i.memoizedState===null)&&(i.tag===30&&a||Cr(i.child,a)),i=i.sibling}function pu(i){if((i.subtreeFlags&18874368)!==0)for(i=i.child;i!==null;){if((i.tag!==22||i.memoizedState===null)&&(pu(i),i.tag===30&&(i.flags&18874368)!==0&&i.stateNode.paired)){var a=i.memoizedProps;if(a.name==null||a.name==="auto")throw Error(r(544));var u=a.name;a=q(a.default,a.share),a!=="none"&&(ja(i,u,a,null,!1)||Cr(i.child,!1))}i=i.sibling}}function op(i,a){if(i.tag===30){var u=i.stateNode,d=i.memoizedProps,v=j(d,u),x=q(d.default,u.paired?d.share:d.enter);x!=="none"?ja(i,v,x,null,!1)?(pu(i),u.paired||a||Ja(i,d.onEnter)):Cr(i.child,!1):pu(i)}else if((i.subtreeFlags&33554432)!==0)for(i=i.child;i!==null;)op(i,a),i=i.sibling;else pu(i)}function lp(i){if(Vi!==null&&Vi.size!==0){var a=Vi;if((i.subtreeFlags&18874368)!==0)for(i=i.child;i!==null;){if(i.tag!==22||i.memoizedState===null){if(i.tag===30&&(i.flags&18874368)!==0){var u=i.memoizedProps,d=u.name;if(d!=null&&d!=="auto"){var v=a.get(d);if(v!==void 0){var x=q(u.default,u.share);if(x!=="none"&&(ja(i,d,x,null,!1)?(x=i.stateNode,v.paired=x,x.paired=v,Ja(i,u.onShare)):Cr(i.child,!1)),a.delete(d),a.size===0)break}}}lp(i)}i=i.sibling}}}function cp(i){if(i.tag===30){var a=i.memoizedProps,u=j(a,i.stateNode),d=Vi!==null?Vi.get(u):void 0,v=q(a.default,d!==void 0?a.share:a.exit);v!=="none"&&(ja(i,u,v,null,!1)?d!==void 0?(v=i.stateNode,d.paired=v,v.paired=d,Vi.delete(u),Ja(i,a.onShare)):Ja(i,a.onExit):Cr(i.child,!1)),Vi!==null&&lp(i)}else if((i.subtreeFlags&33554432)!==0)for(i=i.child;i!==null;)cp(i),i=i.sibling;else Vi!==null&&lp(i)}function Qv(i){for(i=i.child;i!==null;){if(i.tag===30){var a=i.memoizedProps,u=j(a,i.stateNode);a=q(a.default,a.update),i.flags&=-5,a!=="none"&&ja(i,u,a,i.memoizedState=[],!1)}else(i.subtreeFlags&33554432)!==0&&Qv(i);i=i.sibling}}function up(i){if((i.subtreeFlags&18874368)!==0)for(i=i.child;i!==null;){if(i.tag!==22||i.memoizedState===null){if(i.tag===30&&(i.flags&18874368)!==0){var a=i.stateNode;a.paired!==null&&(a.paired=null,Cr(i.child,!1))}up(i)}i=i.sibling}}function mu(i){if(i.tag===30)i.stateNode.paired=null,Cr(i.child,!1),up(i);else if((i.subtreeFlags&33554432)!==0)for(i=i.child;i!==null;)mu(i),i=i.sibling;else up(i)}function e_(i){for(i=i.child;i!==null;)i.tag===30?Cr(i.child,!1):(i.subtreeFlags&33554432)!==0&&e_(i),i=i.sibling}function fp(i,a,u,d,v,x,P){if(!vn)return!1;for(var z=!1;a!==null;){if(a.tag===5){var ie=a.stateNode;if(x!==null&&Mi<x.length){var ve=x[Mi],we=Hp(ie);(Tu(ve)||Tu(we))&&(z=!0),(i.flags&4)===0&&_w(ve,we)&&(i.flags|=4),xw(ve,we)&&(i.flags|=32)}else i.flags|=32;(i.flags&4)!==0&&j_(ie,Mi===0?u:u+"_"+Mi,v),z&&(i.flags&4)!==0||(Dr===null&&(Dr=[]),Dr.push(ie,Mi===0?d:d+"_"+Mi,a.memoizedProps)),Mi++}else(a.tag!==22||a.memoizedState===null)&&(a.tag===30&&P?i.flags|=a.flags&32:fp(i,a.child,u,d,v,x,P)&&(z=!0));a=a.sibling}return z}function t_(i,a){for(i=i.child;i!==null;){if(i.tag===30){var u=i.memoizedProps,d=i.stateNode,v=j(u,d),x=q(u.default,u.update),P;P=i.memoizedState,i.memoizedState=null,d=i;var z=i.child;Mi=0,v=fp(d,z,v,v,x,P,!1),(i.flags&4)!==0&&v&&Ja(i,u.onUpdate)}else(i.subtreeFlags&33554432)!==0&&t_(i);i=i.sibling}}function a1(i,a,u){for(I1(i.containerInfo),i=(u&335544064)===u,Xn=a,a=i?9270:1024;Xn!==null;){if(u=Xn,i){var d=u.deletions;if(d!==null)for(var v=0;v<d.length;v++)i&&cp(d[v])}if(u.alternate===null&&(u.flags&2)!==0)i&&Zv(u),gu(i);else{if(u.tag===22){if(d=u.alternate,u.memoizedState!==null){d!==null&&d.memoizedState===null&&i&&cp(d),gu(i);continue}else if(d!==null&&d.memoizedState!==null){i&&Zv(u),gu(i);continue}}d=u.child,(u.subtreeFlags&a)!==0&&d!==null?(d.return=u,Xn=d):(i&&Qv(u),gu(i))}}Vi=null}function gu(i){for(;Xn!==null;){var a=Xn,u=i,d=a.alternate,v=a.flags;switch(a.tag){case 0:case 11:case 15:break;case 1:if((v&1024)!==0&&d!==null){u=void 0,v=d.memoizedProps,d=d.memoizedState;var x=a.stateNode;try{var P=ra(a.type,v);u=x.getSnapshotBeforeUpdate(P,d),x.__reactInternalSnapshotBeforeUpdate=u}catch(z){Yt(a,a.return,z)}}break;case 3:(v&1024)!==0&&vn&&Mw(a.stateNode.containerInfo);break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:u&&d!==null&&(u=j(d.memoizedProps,d.stateNode),v=a.memoizedProps,v=q(v.default,v.update),v!=="none"&&ja(d,u,v,d.memoizedState=[],!0));break;default:if((v&1024)!==0)throw Error(r(163))}if(d=a.sibling,d!==null){d.return=a.return,Xn=d;break}Xn=a.return}}function n_(i,a,u){var d=u.flags;switch(u.tag){case 0:case 11:case 15:Rr(i,u),d&4&&Rl(5,u);break;case 1:if(Rr(i,u),d&4)if(i=u.stateNode,a===null)try{i.componentDidMount()}catch(P){Yt(u,u.return,P)}else{var v=ra(u.type,a.memoizedProps);a=a.memoizedState;try{i.componentDidUpdate(v,a,i.__reactInternalSnapshotBeforeUpdate)}catch(P){Yt(u,u.return,P)}}d&64&&Gv(u),d&512&&Ar(u,u.return);break;case 3:if(Rr(i,u),d&64&&(d=u.updateQueue,d!==null)){if(i=null,u.child!==null)switch(u.child.tag){case 27:case 5:i=Ul(u.child.stateNode);break;case 1:i=u.child.stateNode}try{L(d,i)}catch(P){Yt(u,u.return,P)}}break;case 27:_n&&a===null&&d&4&&$v(u);case 26:case 5:if(Rr(i,u),a===null){if(d&4)np(u);else if(d&64){i=u.type,a=u.memoizedProps,v=u.stateNode;try{$w(v,i,a,u)}catch(P){Yt(u,u.return,P)}}}d&512&&Ar(u,u.return);break;case 12:Rr(i,u);break;case 31:Rr(i,u),d&4&&s_(i,u);break;case 13:Rr(i,u),d&4&&a_(i,u),d&64&&(d=u.memoizedState,d!==null&&(d=d.dehydrated,d!==null&&(u=g1.bind(null,u),Pw(d,u))));break;case 22:if(d=u.memoizedState!==null||Wn,!d){var x=a!==null&&a.memoizedState!==null||Kt;a=Wn,v=Kt,Wn=d,(Kt=x)&&!v?(d=_n?2:0,(u.subtreeFlags&8772)!==0&&(d|=1),hr(i,u,d)):Rr(i,u),Wn=a,Kt=v}break;case 30:Rr(i,u),d&512&&Ar(u,u.return);break;case 7:d&512&&Ar(u,u.return);default:Rr(i,u)}}function hp(i,a){if(vn)for(i=i.child;i!==null;)i_(i,a),i=i.sibling}function i_(i,a){if(vn)switch(i.tag){case 5:case 26:try{var u=i.stateNode;a?uw(u):hw(i.stateNode,i.memoizedProps)}catch(x){Yt(i,i.return,x)}dp(i,a);break;case 6:try{var d=i.stateNode;a?fw(d):dw(d,i.memoizedProps),ii=!0}catch(x){Yt(i,i.return,x)}break;case 18:try{var v=i.stateNode;a?iT(v):rT(i.stateNode)}catch(x){Yt(i,i.return,x)}break;case 22:case 23:i.memoizedState===null&&hp(i,a);break;default:hp(i,a)}}function dp(i,a){if(vn&&i.subtreeFlags&67108864)for(i=i.child;i!==null;){var u=i,d=a;if(vn)switch(u.tag){case 4:i_(u,d);break;case 22:u.memoizedState===null&&dp(u,d);break;default:dp(u,d)}i=i.sibling}}function r_(i){var a=i.alternate;a!==null&&(i.alternate=null,r_(a)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(a=i.stateNode,a!==null&&k1(a)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Ui(i,a,u){for(u=u.child;u!==null;)pp(i,a,u),u=u.sibling}function pp(i,a,u){if(zi&&typeof zi.onCommitFiberUnmount=="function")try{zi.onCommitFiberUnmount(Bl,u)}catch{}switch(u.tag){case 26:if(Qi){Kt||$n(u,a),Ui(i,a,u),u.memoizedState?ox(u.memoizedState):u.stateNode&&(Kt||qp(u.stateNode));break}case 27:if(_n){Kt||$n(u,a),Il(u);var d=Pn,v=wi;io(u.type)&&(Pn=u.stateNode,wi=!1),Ui(i,a,u),fx(u.stateNode,u.type,u.memoizedProps),Pn=d,wi=v;break}case 5:Kt||$n(u,a),Il(u);case 6:if(u.tag===6&&Il(u),vn){if(d=Pn,v=wi,Pn=null,Ui(i,a,u),Pn=d,wi=v,Pn!==null)if(wi)try{cw(Pn,u.stateNode),ii=!0}catch(x){Yt(u,a,x)}else try{lw(Pn,u.stateNode),ii=!0}catch(x){Yt(u,a,x)}}else Ui(i,a,u);break;case 18:vn&&Pn!==null&&(wi?nT(Pn,u.stateNode):tT(Pn,u.stateNode));break;case 4:vn?(d=Pn,v=wi,Pn=u.stateNode.containerInfo,wi=!0,Ui(i,a,u),Pn=d,wi=v):(Ir&&jv(u.stateNode,u,J_()),Ui(i,a,u));break;case 0:case 11:case 14:case 15:ys(2,u,a),Kt||ys(4,u,a),Ui(i,a,u);break;case 1:Kt||($n(u,a),d=u.stateNode,typeof d.componentWillUnmount=="function"&&Wv(u,a,d)),Ui(i,a,u);break;case 21:Ui(i,a,u);break;case 22:Kt=(d=Kt)||u.memoizedState!==null,Ui(i,a,u),Kt=d;break;case 30:$n(u,a),Ui(i,a,u);break;case 7:Kt||$n(u,a),Ui(i,a,u);break;default:Ui(i,a,u)}}function s_(i,a){if(Jn&&a.memoizedState===null&&(i=a.alternate,i!==null&&(i=i.memoizedState,i!==null))){i=i.dehydrated;try{Jw(i)}catch(u){Yt(a,a.return,u)}}}function a_(i,a){if(Jn&&a.memoizedState===null&&(i=a.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Kw(i)}catch(u){Yt(a,a.return,u)}}function o1(i){switch(i.tag){case 31:case 13:case 19:var a=i.stateNode;return a===null&&(a=i.stateNode=new bx),a;case 22:return i=i.stateNode,a=i._retryCache,a===null&&(a=i._retryCache=new bx),a;default:throw Error(r(435,i.tag))}}function vu(i,a){var u=o1(i);a.forEach(function(d){if(!u.has(d)){u.add(d);var v=v1.bind(null,i,d);d.then(v,v)}})}function Zn(i,a,u){var d=a.deletions;if(d!==null)for(var v=0;v<d.length;v++){var x=d[v],P=i,z=a;if(vn){var ie=z;e:for(;ie!==null;){switch(ie.tag){case 27:if(_n){if(io(ie.type)){Pn=ie.stateNode,wi=!1;break e}break}case 5:Pn=ie.stateNode,wi=!1;break e;case 3:case 4:Pn=ie.stateNode.containerInfo,wi=!0;break e}ie=ie.return}if(Pn===null)throw Error(r(160));pp(P,z,x),Pn=null,wi=!1}else pp(P,z,x);P=x.alternate,P!==null&&(P.return=null),x.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)o_(a,i,u),a=a.sibling}function o_(i,a,u){var d=i.alternate,v=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(v&4&&(d=i.updateQueue,d=d!==null?d.events:null,d!==null))for(var x=0;x<d.length;x++){var P=d[x];P.ref.impl=P.nextImpl}Zn(a,i,u),ni(i),v&4&&(ys(3,i,i.return),Rl(3,i),ys(5,i,i.return));break;case 1:Zn(a,i,u),ni(i),v&512&&(Kt||d===null||$n(d,d.return)),v&64&&Wn&&(i=i.updateQueue,i!==null&&(a=i.callbacks,a!==null&&(v=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=v===null?a:v.concat(a))));break;case 26:if(Qi){x=dr,Zn(a,i,u),ni(i),v&512&&(Kt||d===null||$n(d,d.return)),v&4&&(u=d!==null?d.memoizedState:null,v=i.memoizedState,d===null?v===null?i.stateNode===null?i.stateNode=Wn?lx(i.type,i.memoizedProps,a.containerInfo,i):oT(x,i.type,i.memoizedProps,i):Wn||Xp(x,i.type,i.stateNode):i.stateNode=ax(x,v,i.memoizedProps):u!==v?(u===null?(a=d.stateNode,a===null||Kt||qp(a)):ox(u),v===null?Wn||Xp(x,i.type,i.stateNode):ax(x,v,i.memoizedProps)):v===null&&i.stateNode!==null&&ip(i,i.memoizedProps,d.memoizedProps));break}case 27:if(_n){Zn(a,i,u),ni(i),v&512&&(Kt||d===null||$n(d,d.return)),d!==null&&v&4&&ip(i,i.memoizedProps,d.memoizedProps);break}case 5:if(x=Ur,Ur=!1,Zn(a,i,u),Ur=x,ni(i),v&512&&(Kt||d===null||$n(d,d.return)),vn){if(i.flags&32){a=i.stateNode;try{Y_(a),ii=!0}catch(we){Yt(i,i.return,we)}}v&4&&i.stateNode!=null&&(a=i.memoizedProps,ip(i,a,d!==null?d.memoizedProps:a)),v&1024&&(lm=!0)}else Ir&&i.alternate!==null&&(i.alternate.stateNode=i.stateNode);break;case 6:if(Zn(a,i,u),ni(i),v&4&&vn){if(i.stateNode===null)throw Error(r(162));a=i.memoizedProps,v=d!==null?d.memoizedProps:a,u=i.stateNode;try{iw(u,v,a),ii=!0}catch(we){Yt(i,i.return,we)}}break;case 3:if(ii=!1,Qi?(lT(),x=dr,dr=Eu(a.containerInfo),Zn(a,i,u),dr=x):Zn(a,i,u),ni(i),v&4){if(vn&&Jn&&d!==null&&d.memoizedState.isDehydrated)try{Zw(a.containerInfo)}catch(we){Yt(i,i.return,we)}if(Ir){v=a.containerInfo,a=a.pendingChildren;try{Q_(v,a),ii=!0}catch(we){Yt(i,i.return,we)}}}lm&&(lm=!1,l_(i)),ii=!1;break;case 4:d=Ur,Ur=Wn,x=Xv(),Qi?(P=dr,dr=Eu(i.stateNode.containerInfo),Zn(a,i,u),ni(i),dr=P):(Zn(a,i,u),ni(i)),ii&&Xl&&(Hu=!0),ii=x,Ur=d,v&4&&Ir&&jv(i.stateNode,i,i.stateNode.pendingChildren);break;case 12:Zn(a,i,u),ni(i);break;case 31:Zn(a,i,u),ni(i),v&4&&(a=i.updateQueue,a!==null&&(i.updateQueue=null,vu(i,a)));break;case 13:Zn(a,i,u),ni(i),i.child.flags&8192&&i.memoizedState!==null!=(d!==null&&d.memoizedState!==null)&&(ju=Si()),v&4&&(a=i.updateQueue,a!==null&&(i.updateQueue=null,vu(i,a)));break;case 22:x=i.memoizedState!==null,P=d!==null&&d.memoizedState!==null;var z=Wn,ie=Kt,ve=Ur;Wn=z||x,Ur=ve||x,Kt=ie||P,Zn(a,i,u),Kt=ie,Ur=ve,Wn=z,ni(i),v&8192&&(a=i.stateNode,a._visibility=x?a._visibility&-2:a._visibility|1,!x||d===null||P||Wn||Kt||(a=_n?2:0,u=P||Kt,d=Wn,P=Kt,Wn=x||Wn,Kt=u,bs(i,a),Wn=d,Kt=P),vn&&(x||!Ur)&&hp(i,x)),v&4&&(a=i.updateQueue,a!==null&&(v=a.retryQueue,v!==null&&(a.retryQueue=null,vu(i,v))));break;case 19:Zn(a,i,u),ni(i),v&4&&(a=i.updateQueue,a!==null&&(i.updateQueue=null,vu(i,a)));break;case 30:v&512&&(Kt||d===null||$n(d,d.return)),v=Xv(),x=Xl,P=(u&335544064)===u,z=i.memoizedProps,Xl=P&&q(z.default,z.update)!=="none",Zn(a,i,u),ni(i),P&&d!==null&&ii&&(i.flags|=4),Xl=x,ii=v;break;case 21:break;case 7:v&512&&(Kt||d===null||$n(d,d.return)),d&&d.stateNode!==null&&Tw(i,d.stateNode);default:Zn(a,i,u),ni(i)}}function ni(i){var a=i.flags;if(a&2){try{for(var u,d=i.return;d!==null;){if(Yv(d)){u=d;break}d=d.return}d=null;for(var v=i.return;v!==null;){if(tp(v)){var x=v.stateNode;d===null?d=[x]:d.push(x)}if(ep(v))break;v=v.return}var P=d;if(vn){if(u==null)throw Error(r(160));switch(u.tag){case 27:if(_n){var z=u.stateNode,ie=rp(i);du(i,ie,z,P);break}case 5:var ve=u.stateNode;u.flags&32&&(Y_(ve),u.flags&=-33);var we=rp(i);du(i,we,ve,P);break;case 3:case 4:var Ue=u.stateNode.containerInfo,je=rp(i);sp(i,je,Ue,P);break;default:throw Error(r(161))}}else ap(i,P)}catch(It){Yt(i,i.return,It)}i.flags&=-3}a&4096&&(i.flags&=-4097)}function l_(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var a=i;l_(a),a.tag===5&&a.flags&1024&&q1(a.stateNode),i=i.sibling}}function $a(i,a){if(a.subtreeFlags&9270)for(a=a.child;a!==null;)c_(a,i),a=a.sibling;else t_(a)}function c_(i,a){var u=i.alternate;if(u===null)op(i,!1);else switch(i.tag){case 3:if(cm=Fr=!1,Jv(),$a(a,i),!Fr&&!Hu){if(i=Dr,i!==null)for(var d=0;d<i.length;d+=3)mw(i[d],i[d+1],i[d+2]);gw(a.containerInfo),cm=!0}Dr=null;break;case 5:$a(a,i);break;case 4:d=Fr,Fr=!1,$a(a,i),Fr&&(Hu=!0),Fr=d;break;case 22:i.memoizedState===null&&(u.memoizedState!==null?op(i,!1):$a(a,i));break;case 30:d=Fr;var v=Jv();Fr=!1,$a(a,i),Fr&&(i.flags|=4);var x=i.memoizedProps,P=i.stateNode;a=j(x,P),P=j(u.memoizedProps,P);var z=q(x.default,x.update);z==="none"?u=!1:(x=u.memoizedState,u.memoizedState=null,u=i.child,Mi=0,u=fp(i,u,a,P,z,x,!0),Mi!==(x===null?0:x.length)&&(i.flags|=32)),(i.flags&4)!==0&&u?(Ja(i,i.memoizedProps.onUpdate),Dr=v):v!==null&&(v.push.apply(v,Dr),Dr=v),Fr=(i.flags&32)!==0?!0:d;break;default:$a(a,i)}}function Rr(i,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)n_(i,a.alternate,a),a=a.sibling}function bs(i,a){for(i=i.child;i!==null;){var u=i,d=a;switch(u.tag){case 0:case 11:case 14:case 15:ys(4,u,u.return),bs(u,d);break;case 1:$n(u,u.return);var v=u.stateNode;typeof v.componentWillUnmount=="function"&&Wv(u,u.return,v),bs(u,d);break;case 27:_n&&(d&2)!==0&&fx(u.stateNode,u.type,u.memoizedProps);case 5:$n(u,u.return),u.tag!==5&&u.tag!==27||Il(u),bs(u,d);break;case 6:Il(u);break;case 26:$n(u,u.return),Qi&&(v=u.stateNode,u.memoizedState!==null||v===null||Kt||qp(v)),bs(u,d);break;case 22:u.memoizedState===null&&bs(u,d);break;case 30:$n(u,u.return),bs(u,d);break;case 7:$n(u,u.return);default:bs(u,d)}i=i.sibling}}function hr(i,a,u){for(u=(a.subtreeFlags&8772)!==0?u:u&-2,a=a.child;a!==null;){var d=a.alternate,v=i,x=a,P=x.flags,z=(u&1)!==0;switch(x.tag){case 0:case 11:case 15:hr(v,x,u),Rl(4,x);break;case 1:if(hr(v,x,u),d=x,v=d.stateNode,typeof v.componentDidMount=="function")try{v.componentDidMount()}catch(we){Yt(d,d.return,we)}if(d=x,v=d.updateQueue,v!==null){var ie=d.stateNode;try{var ve=v.shared.hiddenCallbacks;if(ve!==null)for(v.shared.hiddenCallbacks=null,v=0;v<ve.length;v++)wl(ve[v],ie)}catch(we){Yt(d,d.return,we)}}z&&P&64&&Gv(x),Ar(x,x.return);break;case 27:_n&&(u&2)!==0&&$v(x);case 5:x.tag!==5&&x.tag!==27||qv(x),hr(v,x,u),z&&d===null&&P&4&&np(x),Ar(x,x.return);break;case 6:qv(x);break;case 26:Qi&&(ie=x.stateNode,x.memoizedState!==null||ie===null||Wn||Xp(Eu(ie.ownerDocument),x.type,ie)),hr(v,x,u),z&&d===null&&P&4&&np(x),Ar(x,x.return);break;case 12:hr(v,x,u);break;case 31:hr(v,x,u),z&&P&4&&s_(v,x);break;case 13:hr(v,x,u),z&&P&4&&a_(v,x);break;case 22:x.memoizedState===null&&hr(v,x,u),Ar(x,x.return);break;case 30:hr(v,x,u),Ar(x,x.return);break;case 7:Ar(x,x.return);default:hr(v,x,u)}a=a.sibling}}function mp(i,a){var u=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==u&&(i!=null&&i.refCount++,u!=null&&Te(u))}function gp(i,a){i=null,a.alternate!==null&&(i=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==i&&(a.refCount++,i!=null&&Te(i))}function Ki(i,a,u,d){var v=(u&335544064)===u;if(a.subtreeFlags&(v?10262:10256))for(a=a.child;a!==null;)u_(i,a,u,d),a=a.sibling;else v&&e_(a)}function u_(i,a,u,d){var v=(u&335544064)===u;v&&a.alternate===null&&a.return!==null&&a.return.alternate!==null&&mu(a);var x=a.flags;switch(a.tag){case 0:case 11:case 15:Ki(i,a,u,d),x&2048&&Rl(9,a);break;case 1:Ki(i,a,u,d);break;case 3:Ki(i,a,u,d),v&&vn&&cm&&vw(i.containerInfo),x&2048&&(i=null,a.alternate!==null&&(i=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==i&&(a.refCount++,i!=null&&Te(i)));break;case 12:if(x&2048){Ki(i,a,u,d),i=a.stateNode;try{var P=a.memoizedProps,z=P.id,ie=P.onPostCommit;typeof ie=="function"&&ie(z,a.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(ve){Yt(a,a.return,ve)}}else Ki(i,a,u,d);break;case 31:Ki(i,a,u,d);break;case 13:Ki(i,a,u,d);break;case 23:break;case 22:P=a.stateNode,z=a.alternate,a.memoizedState!==null?(v&&z!==null&&z.memoizedState===null&&mu(z),P._visibility&2?Ki(i,a,u,d):Ll(i,a)):(v&&z!==null&&z.memoizedState!==null&&mu(a),P._visibility&2?Ki(i,a,u,d):(P._visibility|=2,Za(i,a,u,d,(a.subtreeFlags&10256)!==0||!1))),x&2048&&mp(z,a);break;case 24:Ki(i,a,u,d),x&2048&&gp(a.alternate,a);break;case 30:v&&(v=a.alternate,v!==null&&(Cr(v.child,!0),Cr(a.child,!0))),Ki(i,a,u,d);break;default:Ki(i,a,u,d)}}function Za(i,a,u,d,v){for(v=v&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var x=i,P=a,z=u,ie=d,ve=P.flags;switch(P.tag){case 0:case 11:case 15:Za(x,P,z,ie,v),Rl(8,P);break;case 23:break;case 22:var we=P.stateNode;P.memoizedState!==null?we._visibility&2?Za(x,P,z,ie,v):Ll(x,P):(we._visibility|=2,Za(x,P,z,ie,v)),v&&ve&2048&&mp(P.alternate,P);break;case 24:Za(x,P,z,ie,v),v&&ve&2048&&gp(P.alternate,P);break;default:Za(x,P,z,ie,v)}a=a.sibling}}function Ll(i,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var u=i,d=a,v=d.flags;switch(d.tag){case 22:Ll(u,d),v&2048&&mp(d.alternate,d);break;case 24:Ll(u,d),v&2048&&gp(d.alternate,d);break;default:Ll(u,d)}a=a.sibling}}function Ss(i,a,u){if(i.subtreeFlags&pa)for(i=i.child;i!==null;)f_(i,a,u),i=i.sibling}function f_(i,a,u){switch(i.tag){case 26:if(Ss(i,a,u),i.flags&pa)if(i.memoizedState!==null)uT(u,dr,i.memoizedState,i.memoizedProps);else{var d=i.stateNode,v=i.type;i=i.memoizedProps,((a&335544128)===a||Vp(v,i))&&q_(u,d,v,i)}break;case 5:Ss(i,a,u),i.flags&pa&&(d=i.stateNode,v=i.type,i=i.memoizedProps,((a&335544128)===a||Vp(v,i))&&q_(u,d,v,i));break;case 3:case 4:Qi?(d=dr,dr=Eu(i.stateNode.containerInfo),Ss(i,a,u),dr=d):Ss(i,a,u);break;case 22:i.memoizedState===null&&(d=i.alternate,d!==null&&d.memoizedState!==null?(d=pa,pa=16777216,Ss(i,a,u),pa=d):Ss(i,a,u));break;case 30:(i.flags&pa)!==0&&(d=i.memoizedProps.name,d!=null&&d!=="auto"&&(v=i.stateNode,v.paired=null,Vi===null&&(Vi=new Map),Vi.set(d,v))),Ss(i,a,u);break;default:Ss(i,a,u)}}function h_(i){var a=i.alternate;if(a!==null&&(i=a.child,i!==null)){a.child=null;do a=i.sibling,i.sibling=null,i=a;while(i!==null)}}function Nl(i){var a=i.deletions;if((i.flags&16)!==0){if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];Xn=d,p_(d,i)}h_(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)d_(i),i=i.sibling}function d_(i){switch(i.tag){case 0:case 11:case 15:Nl(i),i.flags&2048&&ys(9,i,i.return);break;case 3:Nl(i);break;case 12:Nl(i);break;case 22:var a=i.stateNode;i.memoizedState!==null&&a._visibility&2&&(i.return===null||i.return.tag!==13)?(a._visibility&=-3,_u(i)):Nl(i);break;default:Nl(i)}}function _u(i){var a=i.deletions;if((i.flags&16)!==0){if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];Xn=d,p_(d,i)}h_(i)}for(i=i.child;i!==null;){switch(a=i,a.tag){case 0:case 11:case 15:ys(8,a,a.return),_u(a);break;case 22:u=a.stateNode,u._visibility&2&&(u._visibility&=-3,_u(a));break;default:_u(a)}i=i.sibling}}function p_(i,a){for(;Xn!==null;){var u=Xn;switch(u.tag){case 0:case 11:case 15:ys(8,u,a);break;case 23:case 22:if(u.memoizedState!==null&&u.memoizedState.cachePool!==null){var d=u.memoizedState.cachePool.pool;d!=null&&d.refCount++}break;case 24:Te(u.memoizedState.cache)}if(d=u.child,d!==null)d.return=u,Xn=d;else e:for(u=i;Xn!==null;){d=Xn;var v=d.sibling,x=d.return;if(r_(d),d===u){Xn=null;break e}if(v!==null){v.return=x,Xn=v;break e}Xn=x}}}function vp(i){var a=F1(i);if(a!=null){if(typeof a.memoizedProps["data-testname"]!="string")throw Error(r(364));return a}if(i=$1(i),i===null)throw Error(r(362));return i.stateNode.current}function _p(i,a){var u=i.tag;switch(a.$$typeof){case Gu:if(i.type===a.value)return!0;break;case Wu:e:{for(a=a.value,i=[i,0],u=0;u<i.length;){var d=i[u++],v=d.tag,x=i[u++],P=a[x];if(v!==5&&v!==26&&v!==27||!Ol(d)){for(;P!=null&&_p(d,P);)x++,P=a[x];if(x===a.length){a=!0;break e}else for(d=d.child;d!==null;)i.push(d,x),d=d.sibling}}a=!1}return a;case Xu:if((u===5||u===26||u===27)&&K1(i.stateNode,a.value))return!0;break;case Yu:if((u===5||u===6||u===26||u===27)&&(i=J1(i),i!==null&&0<=i.indexOf(a.value)))return!0;break;case qu:if((u===5||u===26||u===27)&&(i=i.memoizedProps["data-testname"],typeof i=="string"&&i.toLowerCase()===a.value.toLowerCase()))return!0;break;default:throw Error(r(365))}return!1}function xp(i){switch(i.$$typeof){case Gu:return"<"+(m(i.value)||"Unknown")+">";case Wu:return":has("+(xp(i)||"")+")";case Xu:return'[role="'+i.value+'"]';case Yu:return'"'+i.value+'"';case qu:return'[data-testname="'+i.value+'"]';default:throw Error(r(365))}}function m_(i,a){var u=[];i=[i,0];for(var d=0;d<i.length;){var v=i[d++],x=v.tag,P=i[d++],z=a[P];if(x!==5&&x!==26&&x!==27||!Ol(v)){for(;z!=null&&_p(v,z);)P++,z=a[P];if(P===a.length)u.push(v);else for(v=v.child;v!==null;)i.push(v,P),v=v.sibling}}return u}function yp(i,a){if(!Fl)throw Error(r(363));i=vp(i),i=m_(i,a),a=[],i=Array.from(i);for(var u=0;u<i.length;){var d=i[u++],v=d.tag;if(v===5||v===26||v===27)Ol(d)||a.push(d.stateNode);else for(d=d.child;d!==null;)i.push(d),d=d.sibling}return a}function Fi(){return(Ut&2)!==0&&Ot!==0?Ot&-Ot:ht.T!==null?De():B1()}function g_(){if(Gi===0)if((Ot&536870912)===0||Rt){var i=Cu;Cu<<=1,(Cu&3932160)===0&&(Cu=262144),Gi=i}else Gi=536870912;return i=Qn.current,i!==null&&(i.flags|=32),Gi}function Ja(i,a){if(a!=null){var u=i.stateNode,d=u.ref;d===null&&(d=u.ref=$_(j(i.memoizedProps,u))),yo===null&&(yo=[]),yo.push(a.bind(null,d))}}function bi(i,a,u){(i===an&&(en===2||en===9)||i.cancelPendingCommit!==null)&&(Ka(i,0),Ms(i,Ot,Gi,!1)),D(i,u),((Ut&2)===0||i!==an)&&(i===an&&((Ut&2)===0&&(ma|=u),Mn===4&&Ms(i,Ot,Gi,!1)),Ae(i))}function v_(i,a,u){if((Ut&6)!==0)throw Error(r(327));var d=!u&&(a&127)===0&&(a&i.expiredLanes)===0||w(i,a),v=d?u1(i,a):Sp(i,a,!0),x=d;do{if(v===0){vo&&!d&&Ms(i,a,0,!1);break}else{if(u=i.current.alternate,x&&!l1(u)){v=Sp(i,a,!1),x=!1;continue}if(v===2){if(x=a,i.errorRecoveryDisabledLanes&x)var P=0;else P=i.pendingLanes&-536870913,P=P!==0?P:P&536870912?536870912:0;if(P!==0){a=P;e:{var z=i;v=Yl;var ie=Jn&&z.current.memoizedState.isDehydrated;if(ie&&(Ka(z,P).flags|=256),P=Sp(z,P,!1),P!==2&&P!==6){if(um&&!ie){z.errorRecoveryDisabledLanes|=x,ma|=x,v=4;break e}x=Ti,Ti=v,x!==null&&(Ti===null?Ti=x:Ti.push.apply(Ti,x))}v=P}if(x=!1,v!==2)continue}}if(v===1){Ka(i,0),Ms(i,a,0,!0);break}e:{switch(d=i,x=v,x){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a&&(a&62914560)!==a)break;case 6:Ms(d,a,Gi,!Ps);break e;case 2:Ti=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(v=ju+300-Si(),10<v)){if(Ms(d,a,Gi,!Ps),b(d,0,!0)!==0)break e;Or=a,d.timeoutHandle=D1(__.bind(null,d,u,Ti,$u,hm,a,Gi,ma,_o,Ps,x,"Throttled",-0,0),v);break e}__(d,u,Ti,$u,hm,a,Gi,ma,_o,Ps,x,null,-0,0)}}break}while(!0);Ae(i)}function __(i,a,u,d,v,x,P,z,ie,ve,we,Ue,je,It){i.timeoutHandle=aa;var Wt=a.subtreeFlags,Ns=(x&335544064)===x;if(Ue=null,(Ns||Wt&8192||(Wt&16785408)===16785408)&&(Ue=G1(),Vi=null,f_(a,x,Ue),Ns&&W1(Ue,i.containerInfo),Wt=(x&62914560)===x?ju-Si():(x&4194048)===x?Sx-Si():0,Wt=X1(Ue,Wt),Wt!==null)){Or=x,i.cancelPendingCommit=Wt(A_.bind(null,i,a,x,u,d,v,P,z,ie,ve,we,Ue,null,je,It)),Ms(i,x,P,!ve);return}A_(i,a,x,u,d,v,P,z,ie,ve,we,Ue)}function l1(i){for(var a=i;;){var u=a.tag;if((u===0||u===11||u===15)&&a.flags&16384&&(u=a.updateQueue,u!==null&&(u=u.stores,u!==null)))for(var d=0;d<u.length;d++){var v=u[d],x=v.getSnapshot;v=v.value;try{if(!ki(x(),v))return!1}catch{return!1}}if(u=a.child,a.subtreeFlags&16384&&u!==null)u.return=a,a=u;else{if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ms(i,a,u,d){a=R(i,a),a&=~fm,a&=~ma,i.suspendedLanes|=a,i.pingedLanes&=~a,d&&(i.warmLanes|=a),d=i.expirationTimes;for(var v=a;0<v;){var x=31-Bi(v),P=1<<x;d[x]=-1,v&=~P}u!==0&&N(i,u,a)}function x_(){return(Ut&6)===0?(Je(0),!1):!0}function bp(){if(Ft!==null){if(en===0)var i=Ft.return;else i=Ft,Qr=oa=null,Nt(i),ho=null,Gl=0,i=Ft;for(;i!==null;)Hv(i.alternate,i),i=i.return;Ft=null}}function Ka(i,a){var u=i.timeoutHandle;return u!==aa&&(i.timeoutHandle=aa,U1(u)),u=i.cancelPendingCommit,u!==null&&(i.cancelPendingCommit=null,u()),Or=0,bp(),an=i,Ft=u=$r(i.current,null),Ot=a,en=0,Hi=null,Ps=!1,vo=w(i,a),um=!1,_o=Gi=fm=ma=Is=Mn=0,Ti=Yl=null,hm=!1,ts=R(i,a),Qs(),u}function y_(i,a){Tt=null,ht.H=ku,a===fo||a===Uu?(a=tu(),en=3):a===nm?(a=tu(),en=4):en=a===am?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Hi=a,Ft===null&&(Mn=1,au(i,Ie(a,i.current)))}function b_(){var i=Qn.current;return i===null?!0:(Ot&4194048)===Ot?ui===null:(Ot&62914560)===Ot||(Ot&536870912)!==0?i===ui:!1}function S_(){var i=ht.H;return ht.H=ku,i===null?ku:i}function M_(){var i=ht.A;return ht.A=AT,i}function xu(){Mn=4,Ps||(Ot&4194048)!==Ot&&Qn.current!==null||(vo=!0),(Is&134217727)===0&&(ma&134217727)===0||an===null||Ms(an,Ot,Gi,!1)}function Sp(i,a,u){var d=Ut;Ut|=2;var v=S_(),x=M_();(an!==i||Ot!==a)&&($u=null,Ka(i,a)),a=!1;var P=Mn;e:do try{if(en!==0&&Ft!==null){var z=Ft,ie=Hi;switch(en){case 8:bp(),P=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(a=!0);var ve=en;if(en=0,Hi=null,Qa(i,z,ie,ve),u&&vo){P=0;break e}break;default:ve=en,en=0,Hi=null,Qa(i,z,ie,ve)}}c1(),P=Mn;break}catch(we){y_(i,we)}while(!0);return a&&i.shellSuspendCounter++,Qr=oa=null,Ut=d,ht.H=v,ht.A=x,Ft===null&&(an=null,Ot=0,Qs()),P}function c1(){for(;Ft!==null;)w_(Ft)}function u1(i,a){var u=Ut;Ut|=2;var d=S_(),v=M_();an!==i||Ot!==a?($u=null,jl=Si()+500,Ka(i,a)):vo=w(i,a);e:do try{if(en!==0&&Ft!==null){a=Ft;var x=Hi;t:switch(en){case 1:en=0,Hi=null,Qa(i,a,x,1);break;case 2:case 9:if(Ht(x)){en=0,Hi=null,T_(a);break}a=function(){en!==2&&en!==9||an!==i||(en=7),Ae(i)},x.then(a,a);break e;case 3:en=7;break e;case 4:en=5;break e;case 7:Ht(x)?(en=0,Hi=null,T_(a)):(en=0,Hi=null,Qa(i,a,x,7));break;case 5:var P=null;switch(Ft.tag){case 26:P=Ft.memoizedState;case 5:case 27:var z=Ft,ie=z.type,ve=z.pendingProps;if(P?cx(P):X_(z.stateNode,ie,ve)){en=0,Hi=null;var we=z.sibling;if(we!==null)Ft=we;else{var Ue=z.return;Ue!==null?(Ft=Ue,yu(Ue)):Ft=null}break t}}en=0,Hi=null,Qa(i,a,x,5);break;case 6:en=0,Hi=null,Qa(i,a,x,6);break;case 8:bp(),Mn=6;break e;default:throw Error(r(462))}}f1();break}catch(je){y_(i,je)}while(!0);return Qr=oa=null,ht.H=d,ht.A=v,Ut=u,Ft!==null?0:(an=null,Ot=0,Qs(),Mn)}function f1(){for(;Ft!==null&&!pT();)w_(Ft)}function w_(i){var a=Ov(i.alternate,i,ts);i.memoizedProps=i.pendingProps,a===null?yu(i):Ft=a}function T_(i){var a=i,u=a.alternate;switch(a.tag){case 15:case 0:a=Pv(u,a,a.pendingProps,a.type,void 0,Ot);break;case 11:a=Pv(u,a,a.pendingProps,a.type.render,a.ref,Ot);break;case 5:Nt(a);var d=a;Jn&&d===Gn&&(Rt?(ye(d),d.tag===5&&d.stateNode!=null&&(mn=d.stateNode)):(ye(d),Rt=!0));default:Hv(u,a),a=Ft=I_(a,ts),a=Ov(u,a,ts)}i.memoizedProps=i.pendingProps,a===null?yu(i):Ft=a}function Qa(i,a,u,d){Qr=oa=null,Nt(a),ho=null,Gl=0;var v=a.return;try{if(e1(i,v,a,u,Ot)){Mn=1,au(i,Ie(u,i.current)),Ft=null;return}}catch(x){if(v!==null)throw Ft=v,x;Mn=1,au(i,Ie(u,i.current)),Ft=null;return}a.flags&32768?(Rt||d===1?i=!0:vo||(Ot&536870912)!==0?i=!1:(Ps=i=!0,(d===2||d===9||d===3||d===6)&&(d=Qn.current,d!==null&&d.tag===13&&(d.flags|=16384))),E_(a,i)):yu(a)}function yu(i){var a=i;do{if((a.flags&32768)!==0){E_(a,Ps);return}i=a.return;var u=r1(a.alternate,a,ts);if(u!==null){Ft=u;return}if(a=a.sibling,a!==null){Ft=a;return}Ft=a=i}while(a!==null);Mn===0&&(Mn=5)}function E_(i,a){do{var u=s1(i.alternate,i);if(u!==null){u.flags&=32767,Ft=u;return}if(u=i.return,u!==null&&(u.flags|=32768,u.subtreeFlags=0,u.deletions=null),!a&&(i=i.sibling,i!==null)){Ft=i;return}Ft=i=u}while(i!==null);Mn=6,Ft=null}function A_(i,a,u,d,v,x,P,z,ie,ve,we,Ue){i.cancelPendingCommit=null;do Dl();while(yn!==0);if((Ut&6)!==0)throw Error(r(327));if(a!==null){if(a===i.current)throw Error(r(177));i===an&&(Ft=an=null,Ot=0),ga=a,pr=i,Or=u,pm=v,Mx=d,h1(i,a,u,P,z,ie,Ue)}}function h1(i,a,u,d,v,x,P){var z=a.lanes|a.childLanes;if(dm=z,z|=im,E(i,u,z,d,v,x),yo=null,(u&335544064)===u?(bo=ue(i),d=10262):(bo=null,d=10256),(a.subtreeFlags&d)!==0||(a.flags&d)!==0?(i.callbackNode=null,i.callbackPriority=0,_1($p,function(){return Ep(),null})):(i.callbackNode=null,i.callbackPriority=0),Vu=!1,d=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||d){d=ht.T,ht.T=null,v=Jr(),Hn(2),x=Ut,Ut|=4;try{a1(i,a,u)}finally{Ut=x,Hn(v),ht.T=d}}yn=1,Vu?xo=yw(P,i.containerInfo,bo,Mp,wp,p1,Tp,Ep,d1,null,null):(Mp(),wp(),Tp())}function d1(i){if(yn!==0){var a=pr.onRecoverableError;a(i,{componentStack:null})}}function p1(){yn===3&&(yn=0,c_(ga,pr),yn=4)}function Mp(){if(yn===1){yn=0;var i=pr,a=ga,u=Or,d=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||d){d=ht.T,ht.T=null;var v=Jr();Hn(2);var x=Ut;Ut|=4;try{Xl=Hu=!1,o_(a,i,u),L1(i.containerInfo)}finally{Ut=x,Hn(v),ht.T=d}}i.current=a,yn=2}}function wp(){if(yn===2){yn=0;var i=pr,a=ga,u=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||u){u=ht.T,ht.T=null;var d=Jr();Hn(2);var v=Ut;Ut|=4;try{n_(i,a.alternate,a)}finally{Ut=v,Hn(d),ht.T=u}}yn=3}}function Tp(){if(yn===4||yn===3){yn=0;var i=xo;xo=null,mT();var a=pr,u=ga,d=Or,v=Mx,x=(d&335544064)===d?10262:10256;if((u.subtreeFlags&x)!==0||(u.flags&x)!==0?yn=5:(yn=0,ga=pr=null,C_(a,a.pendingLanes)),x=a.pendingLanes,x===0&&(Ls=null),Y(d),u=u.stateNode,zi&&typeof zi.onCommitFiberRoot=="function")try{zi.onCommitFiberRoot(Bl,u,void 0,(u.current.flags&128)===128)}catch{}if(v!==null){u=ht.T,x=Jr(),Hn(2),ht.T=null;try{for(var P=a.onRecoverableError,z=0;z<v.length;z++){var ie=v[z];P(ie.value,{componentStack:ie.stack})}}finally{ht.T=u,Hn(x)}}if(v=yo,P=bo,bo=null,v!==null&&(yo=null,P===null&&(P=[]),i!==null))for(ie=0;ie<v.length;ie++)u=(0,v[ie])(P),u!==void 0&&Sw(i,u);(Or&3)!==0&&Dl(),Ae(a),x=a.pendingLanes,(d&261930)!==0&&(x&42)!==0?a===Zu?$l++:($l=0,Zu=a):($l=0,Zu=null),Jn&&eT(),Je(0)}}function C_(i,a){(i.pooledCacheLanes&=a)===0&&(a=i.pooledCache,a!=null&&(i.pooledCache=null,Te(a)))}function Dl(){return xo!==null&&(bw(xo),xo=null),Mp(),wp(),Tp(),Ep()}function Ep(){if(yn!==5)return!1;var i=pr,a=dm;dm=0;var u=Y(Or),d=32>u?32:u;u=ht.T;var v=Jr();try{Hn(d),ht.T=null,d=pm,pm=null;var x=pr,P=Or;if(yn=0,ga=pr=null,Or=0,(Ut&6)!==0)throw Error(r(331));var z=Ut;if(Ut|=4,d_(x.current),u_(x,x.current,P,d),Ut=z,Je(0,!1),zi&&typeof zi.onPostCommitFiberRoot=="function")try{zi.onPostCommitFiberRoot(Bl,x)}catch{}return!0}finally{Hn(v),ht.T=u,C_(i,a)}}function R_(i,a,u){a=Ie(u,a),a=Gd(i.stateNode,a,2),i=ur(i,a,2),i!==null&&(D(i,2),Ae(i))}function Yt(i,a,u){if(i.tag===3)R_(i,i,u);else for(;a!==null;){if(a.tag===3){R_(a,i,u);break}else if(a.tag===1){var d=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Ls===null||!Ls.has(d))){i=Ie(u,i),u=Sv(2),d=ur(a,u,2),d!==null&&(Mv(u,d,a,i),D(d,2),Ae(d));break}}a=a.return}}function Ap(i,a,u){var d=i.pingCache;if(d===null){d=i.pingCache=new CT;var v=new Set;d.set(a,v)}else v=d.get(a),v===void 0&&(v=new Set,d.set(a,v));v.has(u)||(um=!0,v.add(u),i=m1.bind(null,i,a,u),a.then(i,i))}function m1(i,a,u){var d=i.pingCache;d!==null&&d.delete(a),i.pingedLanes|=i.suspendedLanes&u,i.warmLanes&=~u,an===i&&(Ot&u)===u&&((Mn===4||Mn===3&&(Ot&62914560)===Ot&&300>Si()-ju)&&(Ut&2)===0?Ka(i,0):fm|=u,_o===Ot&&(_o=0)),Ae(i)}function P_(i,a){a===0&&(a=I()),i=Tr(i,a),i!==null&&(D(i,a),Ae(i))}function g1(i){var a=i.memoizedState,u=0;a!==null&&(u=a.retryLane),P_(i,u)}function v1(i,a){var u=0;switch(i.tag){case 31:case 13:var d=i.stateNode,v=i.memoizedState;v!==null&&(u=v.retryLane);break;case 19:d=i.stateNode;break;case 22:d=i.stateNode._retryCache;break;default:throw Error(r(314))}d!==null&&d.delete(a),P_(i,u)}function _1(i,a){return Pu(i,a)}function x1(i,a,u,d){this.tag=i,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function $r(i,a){var u=i.alternate;return u===null?(u=t(i.tag,a,i.key,i.mode),u.elementType=i.elementType,u.type=i.type,u.stateNode=i.stateNode,u.alternate=i,i.alternate=u):(u.pendingProps=a,u.type=i.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=i.flags&1206910976,u.childLanes=i.childLanes,u.lanes=i.lanes,u.child=i.child,u.memoizedProps=i.memoizedProps,u.memoizedState=i.memoizedState,u.updateQueue=i.updateQueue,a=i.dependencies,u.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},u.sibling=i.sibling,u.index=i.index,u.ref=i.ref,u.refCleanup=i.refCleanup,u}function I_(i,a){i.flags&=1206910978;var u=i.alternate;return u===null?(i.childLanes=0,i.lanes=a,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=u.childLanes,i.lanes=u.lanes,i.child=u.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=u.memoizedProps,i.memoizedState=u.memoizedState,i.updateQueue=u.updateQueue,i.type=u.type,a=u.dependencies,i.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),i}function bu(i,a,u,d,v,x){var P=0;if(d=i,typeof d=="function")Cp(d)&&(P=1);else if(typeof d=="string")P=Qi&&_n?rx(i,u,Kn.current)?26:hx(i)?27:5:Qi?rx(i,u,Kn.current)?26:5:_n&&hx(i)?27:5;else e:switch(d){case Bp:return i=t(31,u,a,v),i.elementType=Bp,i.lanes=x,i;case to:return sa(u.children,v,x,a);case B_:P=8,v|=24;break;case Np:return i=t(12,u,a,v|2),i.elementType=Np,i.lanes=x,i;case Up:return i=t(13,u,a,v),i.elementType=Up,i.lanes=x,i;case Fp:return i=t(19,u,a,v),i.elementType=Fp,i.lanes=x,i;case M1:case zp:return i=v|32,i=t(30,u,a,i),i.elementType=zp,i.lanes=x,i.stateNode={autoName:null,paired:null,clones:null,ref:null},i;default:if(typeof d=="object"&&d!==null)switch(d.$$typeof){case Zr:P=10;break e;case z_:P=9;break e;case Dp:P=11;break e;case Op:P=14;break e;case ws:P=16,d=null;break e}P=29,u=Error(r(130,i===null?"null":typeof i,"")),d=null}return a=t(P,u,a,v),a.elementType=i,a.type=d,a.lanes=x,a}function sa(i,a,u,d){return i=t(7,i,d,a),i.lanes=u,i}function Rp(i,a,u){return i=t(6,i,null,a),i.lanes=u,i}function L_(i){var a=t(18,null,null,0);return a.stateNode=i,a}function Pp(i,a,u){return a=t(4,i.children!==null?i.children:[],i.key,a),a.lanes=u,a.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},a}function y1(i,a,u,d,v,x,P,z,ie){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=aa,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=C(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=C(0),this.hiddenUpdates=C(null),this.identifierPrefix=d,this.onUncaughtError=v,this.onCaughtError=x,this.onRecoverableError=P,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=ie,this.transitionTypes=null,this.incompleteTransitions=new Map}function N_(i,a,u,d,v,x,P,z,ie,ve,we,Ue){return i=new y1(i,a,u,P,ie,ve,we,Ue,z),a=1,x===!0&&(a|=24),x=t(3,null,null,a),i.current=x,x.stateNode=i,a=ce(),a.refCount++,i.pooledCache=a,a.refCount++,x.memoizedState={element:d,isDehydrated:u,cache:a},Xa(x),i}function D_(i){return i?(i=so,i):so}function U_(i){var a=i._reactInternals;if(a===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=c(a),i=i!==null?f(i):null,i===null?null:Ul(i.stateNode)}function F_(i,a,u,d,v,x){v=D_(v),d.context===null?d.context=v:d.pendingContext=v,d=cr(a),d.payload={element:u},x=x===void 0?null:x,x!==null&&(d.callback=x),u=ur(i,d,a),u!==null&&(bi(u,i,a),ta(u,i,a))}function O_(i,a){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var u=i.retryLane;i.retryLane=u!==0&&u<a?u:a}}function Ip(i,a){O_(i,a),(i=i.alternate)&&O_(i,a)}var Dt={},b1=un,Oi=WN,Lp=Object.assign,S1=Symbol.for("react.element"),Su=Symbol.for("react.transitional.element"),eo=Symbol.for("react.portal"),to=Symbol.for("react.fragment"),B_=Symbol.for("react.strict_mode"),Np=Symbol.for("react.profiler"),z_=Symbol.for("react.consumer"),Zr=Symbol.for("react.context"),Dp=Symbol.for("react.forward_ref"),Up=Symbol.for("react.suspense"),Fp=Symbol.for("react.suspense_list"),Op=Symbol.for("react.memo"),ws=Symbol.for("react.lazy"),Bp=Symbol.for("react.activity"),M1=Symbol.for("react.legacy_hidden"),w1=Symbol.for("react.memo_cache_sentinel"),zp=Symbol.for("react.view_transition"),T1=Symbol.for("react.recoverable"),k_=Symbol.iterator,V_=Symbol.for("react.optimistic_key"),E1=Symbol.for("react.client.reference"),Mu=Array.isArray,ht=b1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A1=e.rendererVersion,C1=e.rendererPackageName,H_=e.extraDevToolsConfig,Ul=e.getPublicInstance,R1=e.getRootHostContext,P1=e.getChildHostContext,I1=e.prepareForCommit,L1=e.resetAfterCommit,N1=e.createInstance;e.cloneMutableInstance;var kp=e.appendInitialChild,G_=e.finalizeInitialChildren,wu=e.shouldSetTextContent,W_=e.createTextInstance;e.cloneMutableTextInstance;var D1=e.scheduleTimeout,U1=e.cancelTimeout,aa=e.noTimeout,Pr=e.isPrimaryRenderer;e.warnsIfNotActing;var vn=e.supportsMutation,Ir=e.supportsPersistence,Jn=e.supportsHydration,F1=e.getInstanceFromNode;e.beforeActiveInstanceBlur;var O1=e.preparePortalMount;e.prepareScopeUpdate,e.getInstanceFromScope;var Hn=e.setCurrentUpdatePriority,Jr=e.getCurrentUpdatePriority,B1=e.resolveUpdatePriority;e.trackSchedulerEvent,e.resolveEventType,e.resolveEventTimeStamp;var z1=e.shouldAttemptEagerTransition,k1=e.detachDeletedInstance;e.requestPostPaintCallback;var V1=e.maySuspendCommit,H1=e.maySuspendCommitOnUpdate,Vp=e.maySuspendCommitInSyncRender,X_=e.preloadInstance,G1=e.startSuspendingCommit,q_=e.suspendInstance,W1=e.suspendOnActiveViewTransition,X1=e.waitForCommitToBeReady;e.getSuspendedCommitReason;var no=e.NotPendingTransition,Kr=e.HostTransitionContext,q1=e.resetFormInstance;e.bindToConsole;var Y1=e.supportsMicrotasks,j1=e.scheduleMicrotask,Fl=e.supportsTestSelectors,$1=e.findFiberRoot,Z1=e.getBoundingRect,J1=e.getTextContent,Ol=e.isHiddenSubtree,K1=e.matchAccessibilityRole,Q1=e.setFocusIfFocusable,ew=e.setupIntersectionObserver,tw=e.appendChild,nw=e.appendChildToContainer,iw=e.commitTextUpdate,rw=e.commitMount,sw=e.commitUpdate,aw=e.insertBefore,ow=e.insertInContainerBefore,lw=e.removeChild,cw=e.removeChildFromContainer,Y_=e.resetTextContent,uw=e.hideInstance,fw=e.hideTextInstance,hw=e.unhideInstance,dw=e.unhideTextInstance,j_=e.applyViewTransitionName,pw=e.restoreViewTransitionName,mw=e.cancelViewTransitionName,gw=e.cancelRootViewTransitionName,vw=e.restoreRootViewTransitionName;e.cloneRootViewTransitionContainer,e.removeRootViewTransitionClone;var Hp=e.measureInstance;e.measureClonedInstance;var Tu=e.wasInstanceInViewport,_w=e.hasInstanceChanged,xw=e.hasInstanceAffectedParent,yw=e.startViewTransition;e.startGestureTransition;var bw=e.stopViewTransition,Sw=e.addViewTransitionFinishedListener;e.getCurrentGestureOffset;var $_=e.createViewTransitionInstance,Mw=e.clearContainer,ww=e.createFragmentInstance,Tw=e.updateFragmentInstanceFiber,Z_=e.commitNewChildToFragmentInstance,Ew=e.deleteChildFromFragmentInstance,Aw=e.cloneInstance,J_=e.createContainerChildSet,K_=e.appendChildToContainerChildSet,Cw=e.finalizeContainerChildren,Q_=e.replaceContainerChildren,ex=e.cloneHiddenInstance,tx=e.cloneHiddenTextInstance,Gp=e.isSuspenseInstancePending,Wp=e.isSuspenseInstanceFallback,Rw=e.getSuspenseInstanceFallbackErrorDetails,Pw=e.registerSuspenseInstanceRetry,Iw=e.canHydrateFormStateMarker,Lw=e.isFormStateMarkerMatching,nx=e.getNextHydratableSibling,Nw=e.getNextHydratableSiblingAfterSingleton,Dw=e.getFirstHydratableChild,Uw=e.getFirstHydratableChildWithinContainer,Fw=e.getFirstHydratableChildWithinActivityInstance,Ow=e.getFirstHydratableChildWithinSuspenseInstance,Bw=e.getFirstHydratableChildWithinSingleton,zw=e.canHydrateInstance,kw=e.canHydrateTextInstance,Vw=e.canHydrateActivityInstance,Hw=e.canHydrateSuspenseInstance,Gw=e.hydrateInstance,Ww=e.hydrateTextInstance,Xw=e.hydrateActivityInstance,qw=e.hydrateSuspenseInstance,Yw=e.getNextHydratableInstanceAfterActivityInstance,jw=e.getNextHydratableInstanceAfterSuspenseInstance,$w=e.commitHydratedInstance,Zw=e.commitHydratedContainer,Jw=e.commitHydratedActivityInstance,Kw=e.commitHydratedSuspenseInstance,Qw=e.finalizeHydratedChildren,eT=e.flushHydrationEvents;e.clearActivityBoundary;var tT=e.clearSuspenseBoundary;e.clearActivityBoundaryFromContainer;var nT=e.clearSuspenseBoundaryFromContainer,iT=e.hideDehydratedBoundary,rT=e.unhideDehydratedBoundary,ix=e.shouldDeleteUnhydratedTailInstances;e.diffHydratedPropsForDevWarnings,e.diffHydratedTextForDevWarnings,e.describeHydratableInstanceForDevWarnings;var sT=e.validateHydratableInstance,aT=e.validateHydratableTextInstance,Qi=e.supportsResources,rx=e.isHostHoistableType,Eu=e.getHoistableRoot,sx=e.getResource,ax=e.acquireResource,ox=e.releaseResource,oT=e.hydrateHoistable,Xp=e.mountHoistable,qp=e.unmountHoistable,lx=e.createHoistableInstance,lT=e.prepareToCommitHoistables,cT=e.mayResourceSuspendCommit,cx=e.preloadResource,uT=e.suspendResource,_n=e.supportsSingletons,ux=e.resolveSingletonInstance,fT=e.acquireSingletonInstance,fx=e.releaseSingletonInstance,hx=e.isHostSingletonType,io=e.isSingletonScope,Yp=[],ro=-1,so={},Bi=Math.clz32?Math.clz32:M,hT=Math.log,dT=Math.LN2,Au=256,Cu=262144,Ru=4194304,Pu=Oi.unstable_scheduleCallback,jp=Oi.unstable_cancelCallback,pT=Oi.unstable_shouldYield,mT=Oi.unstable_requestPaint,Si=Oi.unstable_now,dx=Oi.unstable_ImmediatePriority,gT=Oi.unstable_UserBlockingPriority,$p=Oi.unstable_NormalPriority,vT=Oi.unstable_IdlePriority,_T=Oi.log,xT=Oi.unstable_setDisableYieldValue,Bl=null,zi=null,yT=0,ki=typeof Object.is=="function"?Object.is:ne,px=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)},bT=Object.prototype.hasOwnProperty,Zp,mx,Jp=!1,gx=new WeakMap,ao=[],oo=0,Iu=null,zl=0,er=[],tr=0,Ts=null,Lr=1,Nr="",Kn=g(null),kl=g(null),Es=g(null),Lu=g(null),Gn=null,mn=null,Rt=!1,As=null,nr=!1,Kp=Error(r(519)),Nu=g(null),oa=null,Qr=null,ST=typeof AbortController<"u"?AbortController:function(){var i=[],a=this.signal={aborted:!1,addEventListener:function(u,d){i.push(d)}};this.abort=function(){a.aborted=!0,i.forEach(function(u){return u()})}},MT=Oi.unstable_scheduleCallback,wT=Oi.unstable_NormalPriority,xn={$$typeof:Zr,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0},Vl=null,lo=null,co=null,Qp=!1,Du=!1,em=!1,la=0,Hl=null,tm=0,ca=0,uo=null,vx=ht.S;ht.S=function(i,a){if(Sx=Si(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&pe(i,a),Vl!==null)for(var u=lo;u!==null;)Pe(u,Vl),u=u.next;if(u=i.types,u!=null){for(var d=lo;d!==null;)Pe(d,u),d=d.next;if(ca!==0){d=Vl,d===null&&(d=Vl=[]);for(var v=0;v<u.length;v++){var x=u[v];d.indexOf(x)===-1&&d.push(x)}}}vx!==null&&vx(i,a)};var ua=g(null),fo=Error(r(460)),nm=Error(r(474)),Uu=Error(r(542)),Fu={then:function(){}},fa=null,ho=null,Gl=0,ha=bl(!0),_x=bl(!1),ir=[],po=0,im=0,Cs=!1,rm=!1,Rs=g(null),Ou=g(0),Qn=g(null),ui=null,ei=g(0),es=0,Tt=null,sn=null,Cn=null,Bu=!1,mo=!1,da=!1,zu=0,Wl=0,go=null,TT=0,ku={readContext:A,use:Gt,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useSyncExternalStore:Ce,useId:Ce,useHostTransitionStatus:Ce,useFormState:Ce,useActionState:Ce,useOptimistic:Ce,useMemoCache:Ce,useCacheRefresh:Ce,useEffectEvent:Ce},xx={readContext:A,use:Gt,useCallback:function(i,a){return rn().memoizedState=[i,a===void 0?null:a],i},useContext:A,useEffect:iv,useImperativeHandle:function(i,a,u){u=u!=null?u.concat([i]):null,iu(4194308,4,ov.bind(null,a,i),u)},useLayoutEffect:function(i,a){return iu(4194308,4,i,a)},useInsertionEffect:function(i,a){iu(4,2,i,a)},useMemo:function(i,a){var u=rn();a=a===void 0?null:a;var d=i();if(da){k(!0);try{i()}finally{k(!1)}}return u.memoizedState=[d,a],d},useReducer:function(i,a,u){var d=rn();if(u!==void 0){var v=u(a);if(da){k(!0);try{u(a)}finally{k(!1)}}}else v=a;return d.memoizedState=d.baseState=v,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:v},d.queue=i,i=i.dispatch=QM.bind(null,Tt,i),[d.memoizedState,i]},useRef:function(i){var a=rn();return i={current:i},a.memoizedState=i},useState:function(i){i=Ud(i);var a=i.queue,u=gv.bind(null,Tt,a);return a.dispatch=u,[i.memoizedState,u]},useDebugValue:Bd,useDeferredValue:function(i,a){var u=rn();return zd(u,i,a)},useTransition:function(){var i=Ud(!1);return i=hv.bind(null,Tt,i.queue,!0,!1),rn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,a,u){var d=Tt,v=rn();if(Rt){if(u===void 0)throw Error(r(407));u=u()}else{if(u=a(),an===null)throw Error(r(349));(Ot&127)!==0||V0(d,a,u)}v.memoizedState=u;var x={value:u,getSnapshot:a};return v.queue=x,iv(G0.bind(null,d,x,i),[i]),d.flags|=2048,qa(9,{destroy:void 0},H0.bind(null,d,x,u,a),null),u},useId:function(){var i=rn(),a=an.identifierPrefix;if(Rt){var u=Nr,d=Lr;u=(d&~(1<<32-Bi(d)-1)).toString(32)+u,a="_"+a+"R_"+u,u=zu++,0<u&&(a+="H"+u.toString(32)),a+="_"}else u=TT++,a="_"+a+"r_"+u.toString(32)+"_";return i.memoizedState=a},useHostTransitionStatus:kd,useFormState:K0,useActionState:K0,useOptimistic:function(i){var a=rn();a.memoizedState=a.baseState=i;var u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=u,a=Vd.bind(null,Tt,!0,u),u.dispatch=a,[i,a]},useMemoCache:cn,useCacheRefresh:function(){return rn().memoizedState=KM.bind(null,Tt)},useEffectEvent:function(i){var a=rn(),u={impl:i};return a.memoizedState=u,function(){if((Ut&2)!==0)throw Error(r(440));return u.impl.apply(void 0,arguments)}}},yx={readContext:A,use:Gt,useCallback:cv,useContext:A,useEffect:Od,useImperativeHandle:lv,useInsertionEffect:sv,useLayoutEffect:av,useMemo:uv,useReducer:Zt,useRef:nv,useState:function(){return Zt(Vn)},useDebugValue:Bd,useDeferredValue:function(i,a){var u=qt();return fv(u,sn.memoizedState,i,a)},useTransition:function(){var i=Zt(Vn)[0],a=qt().memoizedState;return[typeof i=="boolean"?i:Zi(i),a]},useSyncExternalStore:Tl,useId:pv,useHostTransitionStatus:kd,useFormState:Q0,useActionState:Q0,useOptimistic:function(i,a){var u=qt();return q0(u,sn,i,a)},useMemoCache:cn,useCacheRefresh:mv,useEffectEvent:rv},ET={readContext:A,use:Gt,useCallback:cv,useContext:A,useEffect:Od,useImperativeHandle:lv,useInsertionEffect:sv,useLayoutEffect:av,useMemo:uv,useReducer:Er,useRef:nv,useState:function(){return Er(Vn)},useDebugValue:Bd,useDeferredValue:function(i,a){var u=qt();return sn===null?zd(u,i,a):fv(u,sn.memoizedState,i,a)},useTransition:function(){var i=Er(Vn)[0],a=qt().memoizedState;return[typeof i=="boolean"?i:Zi(i),a]},useSyncExternalStore:Tl,useId:pv,useHostTransitionStatus:kd,useFormState:tv,useActionState:tv,useOptimistic:function(i,a){var u=qt();return sn!==null?q0(u,sn,i,a):(u.baseState=i,[i,u.queue.dispatch])},useMemoCache:cn,useCacheRefresh:mv,useEffectEvent:rv},sm={enqueueSetState:function(i,a,u){i=i._reactInternals;var d=Fi(),v=cr(d);v.payload=a,u!=null&&(v.callback=u),a=ur(i,v,d),a!==null&&(bi(a,i,d),ta(a,i,d))},enqueueReplaceState:function(i,a,u){i=i._reactInternals;var d=Fi(),v=cr(d);v.tag=1,v.payload=a,u!=null&&(v.callback=u),a=ur(i,v,d),a!==null&&(bi(a,i,d),ta(a,i,d))},enqueueForceUpdate:function(i,a){i=i._reactInternals;var u=Fi(),d=cr(u);d.tag=2,a!=null&&(d.callback=a),a=ur(i,d,u),a!==null&&(bi(a,i,u),ta(a,i,u))}},am=Error(r(461)),Rn=!1,om={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},ii=!1,Vu=!1,Vi=null,Dr=null,Mi=0,Wn=!1,Kt=!1,Ur=!1,lm=!1,bx=typeof WeakSet=="function"?WeakSet:Set,Xn=null,Fr=!1,Xl=!1,Hu=!1,cm=!1,Pn=null,wi=!1,dr=null,pa=8192,AT={getCacheForType:function(i){var a=A(xn),u=a.data.get(i);return u===void 0&&(u=i(),a.data.set(i,u)),u},cacheSignal:function(){return A(xn).controller.signal}},Gu=0,Wu=1,Xu=2,qu=3,Yu=4;if(typeof Symbol=="function"&&Symbol.for){var ql=Symbol.for;Gu=ql("selector.component"),Wu=ql("selector.has_pseudo_class"),Xu=ql("selector.role"),qu=ql("selector.test_id"),Yu=ql("selector.text")}var CT=typeof WeakMap=="function"?WeakMap:Map,Ut=0,an=null,Ft=null,Ot=0,en=0,Hi=null,Ps=!1,vo=!1,um=!1,ts=0,Mn=0,Is=0,ma=0,fm=0,Gi=0,_o=0,Yl=null,Ti=null,hm=!1,ju=0,Sx=0,jl=1/0,$u=null,Ls=null,yn=0,pr=null,ga=null,Or=0,dm=0,pm=null,Mx=null,xo=null,yo=null,bo=null,$l=0,Zu=null;return Dt.attemptContinuousHydration=function(i){if(i.tag===13||i.tag===31){var a=Tr(i,67108864);a!==null&&bi(a,i,67108864),Ip(i,67108864)}},Dt.attemptHydrationAtCurrentPriority=function(i){if(i.tag===13||i.tag===31){var a=Fi();a=G(a);var u=Tr(i,a);u!==null&&bi(u,i,a),Ip(i,a)}},Dt.attemptSynchronousHydration=function(i){switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var a=S(i.pendingLanes);if(a!==0){for(i.pendingLanes|=2,i.entangledLanes|=2;a;){var u=1<<31-Bi(a);i.entanglements[1]|=u,a&=~u}Ae(i),(Ut&6)===0&&(jl=Si()+500,Je(0))}}break;case 31:case 13:a=Tr(i,2),a!==null&&bi(a,i,2),x_(),Ip(i,2)}},Dt.batchedUpdates=function(i,a){return i(a)},Dt.createComponentSelector=function(i){return{$$typeof:Gu,value:i}},Dt.createContainer=function(i,a,u,d,v,x,P,z,ie,ve){return N_(i,a,!1,null,u,d,x,null,P,z,ie,ve)},Dt.createHasPseudoClassSelector=function(i){return{$$typeof:Wu,value:i}},Dt.createHydrationContainer=function(i,a,u,d,v,x,P,z,ie,ve,we,Ue,je,It){var Wt;return i=N_(u,d,!0,i,v,x,z,It,ie,ve,we,Ue),i.context=D_(null),u=i.current,d=Fi(),d=G(d),v=cr(d),v.callback=(Wt=a)!=null?Wt:null,ur(u,v,d),a=d,i.current.lanes=a,D(i,a),Ae(i),i},Dt.createPortal=function(i,a,u){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:eo,key:d==null?null:d===V_?V_:""+d,children:i,containerInfo:a,implementation:u}},Dt.createRoleSelector=function(i){return{$$typeof:Xu,value:i}},Dt.createTestNameSelector=function(i){return{$$typeof:qu,value:i}},Dt.createTextSelector=function(i){return{$$typeof:Yu,value:i}},Dt.defaultOnCaughtError=function(i){console.error(i)},Dt.defaultOnRecoverableError=function(i){px(i)},Dt.defaultOnUncaughtError=function(i){px(i)},Dt.deferredUpdates=function(i){var a=ht.T,u=Jr();try{return Hn(32),ht.T=null,i()}finally{Hn(u),ht.T=a}},Dt.discreteUpdates=function(i,a,u,d,v){var x=ht.T,P=Jr();try{return Hn(2),ht.T=null,i(a,u,d,v)}finally{Hn(P),ht.T=x,Ut===0&&(jl=Si()+500)}},Dt.findAllNodes=yp,Dt.findBoundingRects=function(i,a){if(!Fl)throw Error(r(363));a=yp(i,a),i=[];for(var u=0;u<a.length;u++)i.push(Z1(a[u]));for(a=i.length-1;0<a;a--){u=i[a];for(var d=u.x,v=d+u.width,x=u.y,P=x+u.height,z=a-1;0<=z;z--)if(a!==z){var ie=i[z],ve=ie.x,we=ve+ie.width,Ue=ie.y,je=Ue+ie.height;if(d>=ve&&x>=Ue&&v<=we&&P<=je){i.splice(a,1);break}else if(d!==ve||u.width!==ie.width||je<x||Ue>P){if(!(x!==Ue||u.height!==ie.height||we<d||ve>v)){ve>d&&(ie.width+=ve-d,ie.x=d),we<v&&(ie.width=v-ve),i.splice(a,1);break}}else{Ue>x&&(ie.height+=Ue-x,ie.y=x),je<P&&(ie.height=P-Ue),i.splice(a,1);break}}}return i},Dt.findHostInstance=U_,Dt.findHostInstanceWithNoPortals=function(i){return i=c(i),i=i!==null?h(i):null,i===null?null:Ul(i.stateNode)},Dt.findHostInstanceWithWarning=function(i){return U_(i)},Dt.flushPassiveEffects=Dl,Dt.flushSyncFromReconciler=function(i){var a=Ut;Ut|=1;var u=ht.T,d=Jr();try{if(Hn(2),ht.T=null,i)return i()}finally{Hn(d),ht.T=u,Ut=a,(Ut&6)===0&&Je(0)}},Dt.flushSyncWork=x_,Dt.focusWithin=function(i,a){if(!Fl)throw Error(r(363));for(i=vp(i),a=m_(i,a),a=Array.from(a),i=0;i<a.length;){var u=a[i++],d=u.tag;if(!Ol(u)){if((d===5||d===26||d===27)&&Q1(u.stateNode))return!0;for(u=u.child;u!==null;)a.push(u),u=u.sibling}}return!1},Dt.getFindAllNodesFailureDescription=function(i,a){if(!Fl)throw Error(r(363));var u=0,d=[];i=[vp(i),0];for(var v=0;v<i.length;){var x=i[v++],P=x.tag,z=i[v++],ie=a[z];if((P!==5&&P!==26&&P!==27||!Ol(x))&&(_p(x,ie)&&(d.push(xp(ie)),z++,z>u&&(u=z)),z<a.length))for(x=x.child;x!==null;)i.push(x,z),x=x.sibling}if(u<a.length){for(i=[];u<a.length;u++)i.push(xp(a[u]));return`findAllNodes was able to match part of the selector:
  `+(d.join(" > ")+`

No matching component was found for:
  `)+i.join(" > ")}return null},Dt.getPublicRootInstance=function(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 27:case 5:return Ul(i.child.stateNode);default:return i.child.stateNode}},Dt.injectIntoDevTools=function(){var i={bundleType:0,version:A1,rendererPackageName:C1,currentDispatcherRef:ht,reconcilerVersion:"19.3.0"};if(H_!==null&&(i.rendererConfig=H_),typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")i=!1;else{var a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(a.isDisabled||!a.supportsFiber)i=!0;else{try{Bl=a.inject(i),zi=a}catch{}i=!!a.checkDCE}}return i},Dt.isAlreadyRendering=function(){return(Ut&6)!==0},Dt.observeVisibleRects=function(i,a,u,d){if(!Fl)throw Error(r(363));i=yp(i,a);var v=ew(i,u,d).disconnect;return{disconnect:function(){v()}}},Dt.shouldError=function(){return null},Dt.shouldSuspend=function(){return!1},Dt.startHostTransition=function(i,a,u,d){if(i.tag!==5)throw Error(r(476));var v=dv(i).queue;hv(i,v,a,no,u===null?n:function(){var x=dv(i);return x.next===null&&(x=i.alternate.memoizedState),El(i,x.next.queue,{},Fi()),u(d)})},Dt.updateContainer=function(i,a,u,d){var v=a.current,x=Fi();return F_(v,x,i,a,u,d),x},Dt.updateContainerSync=function(i,a,u,d){return F_(a.current,2,i,a,u,d),2},Dt},s.exports.default=s.exports,Object.defineProperty(s.exports,"__esModule",{value:!0})})(mb)),mb.exports}var vb;function AD(){return vb||(vb=1,pb.exports=ED()),pb.exports}var CD=AD();const RD=TD(CD);function PD(s){const e=RD(s);return e.injectIntoDevTools(),e}const OM=0,fl={},ID=/^three(?=[A-Z])/,Dd=s=>`${s[0].toUpperCase()}${s.slice(1)}`;let LD=0;const ND=s=>typeof s=="function";function DD(s){if(ND(s)){const e=`${LD++}`;return fl[e]=s,e}else Object.assign(fl,s)}function BM(s,e){const t=Dd(s),n=fl[t];if(s!=="primitive"&&!n)throw new Error(`R3F: ${t} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(s==="primitive"&&!e.object)throw new Error("R3F: Primitives without 'object' are invalid!");if(e.args!==void 0&&!Array.isArray(e.args))throw new Error("R3F: The args prop must be an array!")}function UD(s,e,t){var n;return s=Dd(s)in fl?s:s.replace(ID,""),BM(s,e),s==="primitive"&&(n=e.object)!=null&&n.__r3f&&delete e.object.__r3f,Vh(e.object,t,s,e)}function FD(s){if(!s.isHidden){var e;s.props.attach&&(e=s.parent)!=null&&e.object?Gh(s.parent,s):Ci(s.object)&&(s.previousVisible=s.object.visible,s.object.visible=!1),s.isHidden=!0,xl(s)}}function zM(s){if(s.isHidden){var e;if(s.props.attach&&(e=s.parent)!=null&&e.object)Hh(s.parent,s);else if(Ci(s.object)){var t;s.object.visible=(t=s.previousVisible)!=null?t:!0}s.previousVisible=void 0,s.isHidden=!1,xl(s)}}function B0(s,e,t){const n=e.root.getState();if(!(!s.parent&&s.object!==n.scene)){if(!e.object){var r,o;const l=fl[Dd(e.type)];e.object=(r=e.props.object)!=null?r:new l(...(o=e.props.args)!=null?o:[]),e.object.__r3f=e}if(Ua(e.object,e.props),e.props.attach)Hh(s,e);else if(Ci(e.object)&&Ci(s.object)){const l=s.object.children.indexOf(t?.object);if(t&&l!==-1){const c=s.object.children.indexOf(e.object);if(c!==-1){s.object.children.splice(c,1);const f=c<l?l-1:l;s.object.children.splice(f,0,e.object)}else e.object.parent=s.object,s.object.children.splice(l,0,e.object),e.object.dispatchEvent({type:"added"}),s.object.dispatchEvent({type:"childadded",child:e.object})}else s.object.add(e.object)}for(const l of e.children)B0(e,l);xl(e)}}function cg(s,e){if(e){if(e.parent===s){const t=s.children.indexOf(e);t!==-1&&s.children.splice(t,1)}e.parent=s,s.children.push(e),B0(s,e)}}function _b(s,e,t){if(!e||!t)return;if(e.parent===s){const r=s.children.indexOf(e);r!==-1&&s.children.splice(r,1)}e.parent=s;const n=s.children.indexOf(t);n!==-1?s.children.splice(n,0,e):s.children.push(e),B0(s,e,t)}function kM(s){if(typeof s.dispose=="function"){const e=()=>{try{s.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT<"u"?e():cs.unstable_scheduleCallback(cs.unstable_IdlePriority,e)}}function Og(s,e,t){if(!e)return;e.parent=null;const n=s.children.indexOf(e);n!==-1&&s.children.splice(n,1),e.props.attach?Gh(s,e):Ci(e.object)&&Ci(s.object)&&(s.object.remove(e.object),hD(U0(e),e.object));const r=e.props.dispose!==null&&t!==!1;for(let o=e.children.length-1;o>=0;o--){const l=e.children[o];Og(e,l,r)}e.children.length=0,delete e.object.__r3f,r&&e.type!=="primitive"&&e.object.type!=="Scene"&&kM(e.object),t===void 0&&xl(e)}function OD(s,e){for(const t of[s,s.alternate])if(t!==null)if(typeof t.ref=="function"){t.refCleanup==null||t.refCleanup();const n=t.ref(e);typeof n=="function"&&(t.refCleanup=n)}else t.ref&&(t.ref.current=e)}const Gc=[];function BD(){if(Gc.length!==0)try{zD()}finally{Gc.length=0}}function zD(){for(const[t]of Gc){const n=t.parent;if(n){t.props.attach?Gh(n,t):Ci(t.object)&&Ci(n.object)&&n.object.remove(t.object);for(const r of t.children)r.props.attach?Gh(t,r):Ci(r.object)&&Ci(t.object)&&t.object.remove(r.object)}t.isHidden&&zM(t),t.object.__r3f&&delete t.object.__r3f,t.type!=="primitive"&&kM(t.object)}for(const[t,n,r]of Gc){t.props=n;const o=t.parent;if(o){var s,e;const l=fl[Dd(t.type)],c=t.object;t.object=(s=t.props.object)!=null?s:new l(...(e=t.props.args)!=null?e:[]),t.object.__r3f=t,OD(r,t.object),fD(U0(t),c,t.object),Ua(t.object,t.props),t.props.attach?Hh(o,t):Ci(t.object)&&Ci(o.object)&&o.object.add(t.object);for(const f of t.children)f.props.attach?Hh(t,f):Ci(f.object)&&Ci(t.object)&&t.object.add(f.object);xl(t)}}}const ug=()=>{},xb={};let Gf=OM;function kD(s){switch(s){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return db;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return hb;case"message":switch(cs.unstable_getCurrentPriorityLevel()){case cs.unstable_ImmediatePriority:return db;case cs.unstable_UserBlockingPriority:return hb;case cs.unstable_NormalPriority:case cs.unstable_LowPriority:return Jf;case cs.unstable_IdlePriority:return gD;default:return Jf}default:return Jf}}function VD(s){typeof queueMicrotask=="function"?queueMicrotask(s):typeof Promise<"u"?Promise.resolve().then(s).catch(e=>{setTimeout(()=>{throw e})}):setTimeout(s)}const Zo=PD({isPrimaryRenderer:!1,warnsIfNotActing:!1,supportsMutation:!0,supportsPersistence:!1,supportsHydration:!1,createInstance:UD,removeChild:Og,appendChild:cg,appendInitialChild:cg,insertBefore:_b,appendChildToContainer(s,e){const t=s.getState().scene.__r3f;!e||!t||cg(t,e)},removeChildFromContainer(s,e){const t=s.getState().scene.__r3f;!e||!t||Og(t,e)},insertInContainerBefore(s,e,t){const n=s.getState().scene.__r3f;!e||!t||!n||_b(n,e,t)},getRootHostContext:()=>xb,getChildHostContext:()=>xb,commitUpdate(s,e,t,n,r){var o,l,c;BM(e,n);let f=!1;if((s.type==="primitive"&&t.object!==n.object||((o=n.args)==null?void 0:o.length)!==((l=t.args)==null?void 0:l.length)||(c=n.args)!=null&&c.some((h,p)=>{var m;return h!==((m=t.args)==null?void 0:m[p])}))&&(f=!0),f)Gc.push([s,Ug(n),r]);else{const h=oD(s,n),p=s.props.attach;s.props=Ug(n),p!==void 0?s.props.attach=p:delete s.props.attach,Object.keys(h).length&&Ua(s.object,h)}},finalizeInitialChildren:()=>!1,commitMount(){},getPublicInstance:s=>s?.object,prepareForCommit:()=>null,preparePortalMount:s=>Vh(s.getState().scene,s,"",{}),resetAfterCommit:BD,shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance:FD,unhideInstance:zM,createTextInstance:ug,hideTextInstance:ug,unhideTextInstance:ug,supportsMicrotasks:!0,scheduleMicrotask:VD,scheduleTimeout:typeof setTimeout=="function"?setTimeout:void 0,cancelTimeout:typeof clearTimeout=="function"?clearTimeout:void 0,noTimeout:-1,getInstanceFromNode:()=>null,beforeActiveInstanceBlur(){},afterActiveInstanceBlur(){},detachDeletedInstance(){},prepareScopeUpdate(){},getInstanceFromScope:()=>null,shouldAttemptEagerTransition:()=>!1,trackSchedulerEvent:()=>{},resolveEventType:()=>null,resolveEventTimeStamp:()=>-1.1,requestPostPaintCallback(){},maySuspendCommit:()=>!1,preloadInstance:()=>!0,suspendInstance(){},waitForCommitToBeReady:()=>null,NotPendingTransition:null,HostTransitionContext:ge.createContext(null),setCurrentUpdatePriority(s){Gf=s},getCurrentUpdatePriority(){return Gf},resolveUpdatePriority(){var s;if(Gf!==OM)return Gf;const e=typeof window<"u"?(s=window.event)==null?void 0:s.type:void 0;return e===void 0?Jf:kD(e)},resetFormInstance(){},rendererPackageName:"@react-three/fiber",rendererVersion:wD.version,applyViewTransitionName(s,e,t){},restoreViewTransitionName(s,e){},cancelViewTransitionName(s,e,t){},cancelRootViewTransitionName(s){},restoreRootViewTransitionName(s){},InstanceMeasurement:null,measureInstance:s=>null,wasInstanceInViewport:s=>!0,hasInstanceChanged:(s,e)=>!1,hasInstanceAffectedParent:(s,e)=>!1,suspendOnActiveViewTransition(s,e){},startViewTransition(s,e,t,n,r,o,l,c,f,h,p){return n(),r(),p?.(),l(),null},startGestureTransition(s,e,t,n,r,o,l,c,f,h){return l(),c(),h?.(),null},stopViewTransition(s){},addViewTransitionFinishedListener(s,e){e()},createViewTransitionInstance:s=>null,getCurrentGestureOffset(s){throw new Error("startGestureTransition is not yet supported in react-three-fiber.")},cloneMutableInstance(s,e){return s},cloneMutableTextInstance(s){return s},cloneRootViewTransitionContainer(s){throw new Error("Not implemented.")},removeRootViewTransitionClone(s,e){throw new Error("Not implemented.")},createFragmentInstance:s=>null,updateFragmentInstanceFiber(s,e){},commitNewChildToFragmentInstance(s,e){},deleteChildFromFragmentInstance(s,e){},measureClonedInstance:s=>null,maySuspendCommitOnUpdate:(s,e,t)=>!1,maySuspendCommitInSyncRender:(s,e)=>!1,startSuspendingCommit:()=>null,getSuspendedCommitReason:(s,e)=>null}),Gs=new Map;function Wh(s,e){const t=s.state;switch(e.type){case"use":return t.status==="disposed"?!1:(s.state={status:"open"},!0);case"unmount":return t.status==="disposed"?!1:(s.state={status:"closing",token:e.token},!0);case"dispose":return t.status!=="closing"||t.token!==e.token?!1:(s.state={status:"disposed"},!0)}}function HD(s){const e=Gs.get(s),t=e?.fiber,n=e?.store;e&&console.warn("R3F.createRoot should only be called once!");const r=typeof reportError=="function"?reportError:console.error,o=n||pD(z0,HM),l=t||Zo.createContainer(o,mD,null,!1,null,"",r,r,r,null),c=e||{fiber:l,store:o,state:{status:"open"},ready:bD(void 0),configuration:{},ownsRenderer:!1};e||Gs.set(s,c);let f=!1;return{get ready(){return c.ready},configure(h={}){if(!Wh(c,{type:"use"}))return SD(new Error("R3F: Cannot configure a root after disposal has started."));const p=c.ready,{promise:m,resolve:g,reject:_}=MD();c.ready=m;const y=S=>{const b=o.getState();b.gl||(c.ownsRenderer=!F0(h.gl),b.set({gl:S})),yD(c,s,h),g(this)},M=()=>{try{var S;const b=(S=o.getState().gl)!=null?S:_D(s,h.gl);O0(b)?Promise.resolve(b).then(y).catch(_):y(b)}catch(b){_(b)}};return p.status==="pending"?p.then(M,_):M(),m},render(h){if(!Wh(c,{type:"use"}))return o;if(!o.getState().gl&&c.ready.status==="fulfilled"&&this.configure(),c.ready.status==="rejected")throw c.ready.reason;const p=()=>{var m;if(c.state.status!=="open"||c.ready.status==="rejected")return;if(c.ready.status==="pending"){c.ready.then(p,r);return}const g=(m=c.configuration.previous)==null?void 0:m.onCreated,_=se.jsx(GD,{store:o,children:h,onCreated:g,rootElement:s});if(f){Zo.updateContainer(_,l,null,kh);return}f=!0,Zo.updateContainerSync(_,l,null,kh),Zo.flushSyncWork()};return p(),o},unmount(){Gs.get(s)===c&&XD(s)}}}function GD({store:s,children:e,onCreated:t,rootElement:n}){return _l(()=>{const r=s.getState();r.set(o=>({internal:{...o.internal,active:!0}})),t&&t(r),s.getState().events.connected||r.events.connect==null||r.events.connect(n)},[]),se.jsx(UM.Provider,{value:s,children:e})}function WD(s){if((s.hasInitialized==null?void 0:s.hasInitialized())===!1)return;const e=us(()=>{var t;return s.dispose?s.dispose():(t=s.renderLists)==null||t.dispose==null?void 0:t.dispose()});if(O0(e))return Promise.resolve(e).catch(t=>console.warn("[R3F] Error disposing renderer",t)).then(()=>us(()=>s.forceContextLoss==null?void 0:s.forceContextLoss()));us(()=>s.forceContextLoss==null?void 0:s.forceContextLoss())}function us(s){try{return s()}catch(e){console.warn("[R3F] Error while unmounting root; teardown may be incomplete:",e)}}function XD(s,e){const t=Gs.get(s),n=Symbol("unmount");if(!t||!Wh(t,{type:"unmount",token:n}))return;const r=()=>{var o;if(t.ready.status==="pending"){t.ready.then(r,r);return}if(!Wh(t,{type:"dispose",token:n}))return;Gs.delete(s);const l=t.store.getState();l.internal.active=!1,us(()=>l.events.disconnect==null?void 0:l.events.disconnect()),(o=l.gl)!=null&&o.xr&&us(()=>l.xr.disconnect()),l.scene&&us(()=>sD(l.scene));const c=l.gl;let f;c&&t.ownsRenderer?f=us(()=>WD(c)):c&&(us(()=>{var h;return(h=c.renderLists)==null||h.dispose==null?void 0:h.dispose()}),us(()=>c.forceContextLoss==null?void 0:c.forceContextLoss())),O0(f)&&f.then(()=>{})};Zo.updateContainer(null,t.fiber,null,()=>{t.state.status!=="closing"||t.state.token!==n||Zo.updateContainer(null,t.fiber,null,r)})}const qD=new Set,YD=new Set,jD=new Set;function fg(s,e){if(s.size)for(const{callback:t}of s.values())t(e)}function Ec(s,e){switch(s){case"before":return fg(qD,e);case"after":return fg(YD,e);case"tail":return fg(jD,e)}}let hg,dg;function Bg(s,e,t){let n=e.clock.getDelta();e.frameloop==="never"&&typeof s=="number"&&(n=s-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=s),hg=e.internal.subscribers;for(let r=0;r<hg.length;r++)dg=hg[r],dg.ref.current(dg.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}let Xh=!1,zg=!1,pg,yb,Wo;function VM(s){yb=requestAnimationFrame(VM),Xh=!0,pg=0,Ec("before",s),zg=!0;for(const t of Gs.values()){var e;Wo=t.store.getState(),Wo.internal.active&&(Wo.frameloop==="always"||Wo.internal.frames>0)&&!((e=Wo.gl.xr)!=null&&e.isPresenting)&&(pg+=Bg(s,Wo))}if(zg=!1,Ec("after",s),pg===0)return Ec("tail",s),Xh=!1,cancelAnimationFrame(yb)}function z0(s,e=1){var t;if(!s)return Gs.forEach(n=>z0(n.store.getState(),e));(t=s.gl.xr)!=null&&t.isPresenting||!s.internal.active||s.frameloop==="never"||(e>1?s.internal.frames=Math.min(60,s.internal.frames+e):zg?s.internal.frames=2:s.internal.frames=1,Xh||(Xh=!0,requestAnimationFrame(VM)))}function HM(s,e=!0,t,n){if(e&&Ec("before",s),t)Bg(s,t,n);else for(const r of Gs.values())Bg(s,r.store.getState());e&&Ec("after",s)}const mg={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function $D(s){const{handlePointer:e}=dD(s);return{priority:1,enabled:!0,compute(t,n,r){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(mg).reduce((t,n)=>({...t,[n]:e(n)}),{}),update:()=>{var t;const{events:n,internal:r}=s.getState();(t=r.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(r.lastEvent.current)},connect:t=>{const{set:n,events:r}=s.getState();if(r.disconnect==null||r.disconnect(),n(o=>({events:{...o.events,connected:t}})),r.handlers)for(const o in r.handlers){const l=r.handlers[o],[c,f]=mg[o];t.addEventListener(c,l,{passive:f})}},disconnect:()=>{const{set:t,events:n}=s.getState();if(n.connected){if(n.handlers)for(const r in n.handlers){const o=n.handlers[r],[l]=mg[r];n.connected.removeEventListener(l,o)}t(r=>({events:{...r.events,connected:void 0}}))}}}}function bb(s,e){let t;return(...n)=>{window.clearTimeout(t),t=window.setTimeout(()=>s(...n),e)}}function ZD({debounce:s,scroll:e,polyfill:t,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const r=t||(typeof window>"u"?class{}:window.ResizeObserver);if(!r)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[o,l]=ge.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),c=ge.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:o,orientationHandler:null}),f=s?typeof s=="number"?s:s.scroll:null,h=s?typeof s=="number"?s:s.resize:null,p=ge.useRef(!1);ge.useEffect(()=>(p.current=!0,()=>void(p.current=!1)));const[m,g,_]=ge.useMemo(()=>{const b=()=>{if(!c.current.element)return;const{left:w,top:R,width:T,height:I,bottom:C,right:D,x:E,y:N}=c.current.element.getBoundingClientRect(),U={left:w,top:R,width:T,height:I,bottom:C,right:D,x:E,y:N};c.current.element instanceof HTMLElement&&n&&(U.height=c.current.element.offsetHeight,U.width=c.current.element.offsetWidth),Object.freeze(U),p.current&&!eU(c.current.lastBounds,U)&&l(c.current.lastBounds=U)};return[b,h?bb(b,h):b,f?bb(b,f):b]},[l,n,f,h]);function y(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(b=>b.removeEventListener("scroll",_,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null),c.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",c.current.orientationHandler))}function M(){c.current.element&&(c.current.resizeObserver=new r(_),c.current.resizeObserver.observe(c.current.element),e&&c.current.scrollContainers&&c.current.scrollContainers.forEach(b=>b.addEventListener("scroll",_,{capture:!0,passive:!0})),c.current.orientationHandler=()=>{_()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",c.current.orientationHandler))}const S=b=>{!b||b===c.current.element||(y(),c.current.element=b,c.current.scrollContainers=GM(b),M())};return KD(_,!!e),JD(g),ge.useEffect(()=>{y(),M()},[e,_,g]),ge.useEffect(()=>y,[]),[S,o,m]}function JD(s){ge.useEffect(()=>{const e=s;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[s])}function KD(s,e){ge.useEffect(()=>{if(e){const t=s;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[s,e])}function GM(s){const e=[];if(!s||s===document.body)return e;const{overflow:t,overflowX:n,overflowY:r}=window.getComputedStyle(s);return[t,n,r].some(o=>o==="auto"||o==="scroll")&&e.push(s),[...e,...GM(s.parentElement)]}const QD=["x","y","top","bottom","left","right","width","height"],eU=(s,e)=>QD.every(t=>s[t]===e[t]);function tU({ref:s,children:e,fallback:t,resize:n,style:r,gl:o,events:l=$D,eventSource:c,eventPrefix:f,shadows:h,linear:p,flat:m,legacy:g,orthographic:_,frameloop:y,dpr:M,performance:S,raycaster:b,camera:w,scene:R,onPointerMissed:T,onCreated:I,...C}){ge.useMemo(()=>DD(PN),[]);const D=nD(),[E,N]=ZD({scroll:!0,debounce:{scroll:50,resize:0},...n}),U=ge.useRef(null),B=ge.useRef(null);ge.useImperativeHandle(s,()=>U.current);const G=IM(T),Y=ge.useCallback(et=>G.current==null?void 0:G.current(et),[G]),[k,j]=ge.useState(!1),[H,q]=ge.useState(!1);if(k)throw k;if(H)throw H;const ne=ge.useRef(null),[K,oe]=eD(),he=ge.useRef(null),qe=()=>c?JN(c)?c.current:c:B.current;ge.useInsertionEffect(()=>()=>{const et=ne.current;ne.current=null,et?.unmount()},[]),_l(()=>{const et=U.current;N.width>0&&N.height>0&&et&&(ne.current||(ne.current=HD(et)),ne.current.configure({gl:o,scene:R,events:l,shadows:h,linear:p,flat:m,legacy:g,orthographic:_,frameloop:y,dpr:M,performance:S,raycaster:b,camera:w,size:N,onPointerMissed:Y,onCreated:rt=>{var xt;he.current=rt,rt.events.connect==null||rt.events.connect((xt=qe())!=null?xt:B.current),f&&rt.setEvents({compute:(le,fe)=>{const Ne=le[f+"X"],at=le[f+"Y"];fe.pointer.set(Ne/fe.size.width*2-1,-(at/fe.size.height)*2+1),fe.raycaster.setFromCamera(fe.pointer,fe.camera)}}),I?.(rt)}}).catch(q),ne.current.ready.status==="fulfilled"?ne.current.render(se.jsx(D,{children:se.jsx(rD,{set:q,children:se.jsx(ge.Suspense,{fallback:se.jsx(iD,{set:j}),children:e??null})})})):ne.current.ready.status==="pending"&&oe(ne.current.ready))}),ge.useEffect(()=>{var et;const rt=(et=he.current)==null?void 0:et.get(),xt=qe();rt&&xt&&rt.events.connected!==xt&&(rt.events.connect==null||rt.events.connect(xt))}),ge.useEffect(()=>{const et=U.current;return()=>{var rt;et.isConnected||(rt=ne.current)==null||rt.unmount()}},[]);const Ie=c?"none":"auto";return se.jsxs("div",{ref:B,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:Ie,...r},...C,children:[se.jsx("div",{ref:E,style:{width:"100%",height:"100%"},children:se.jsx("canvas",{ref:U,style:{display:"block"},children:t})}),K]})}function nU(s){return se.jsx(RM,{children:se.jsx(tU,{...s})})}const iU="data:image/svg+xml;utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='160'%20height='160'%3E%3Cfilter%20id='n'%3E%3CfeTurbulence%20type='fractalNoise'%20baseFrequency='0.85'%20numOctaves='2'/%3E%3CfeColorMatrix%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.4%200'/%3E%3C/filter%3E%3Crect%20width='160'%20height='160'%20filter='url(%23n)'/%3E%3C/svg%3E",_s=`
float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

float hash31(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.x + p.y) * p.z);
}

float vnoise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash31(i + vec3(0.0, 0.0, 0.0));
  float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash31(i + vec3(1.0, 1.0, 1.0));
  return mix(
    mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
    mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y),
    f.z
  );
}

float fbm3(vec3 p) {
  float sum = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 3; i++) {
    sum += amp * vnoise(p);
    p *= 2.03;
    amp *= 0.5;
  }
  return sum;
}
`;function qr(s=20261014){let e=s%2147483647;return e<=0&&(e+=2147483646),()=>(e=e*16807%2147483647,(e-1)/2147483646)}function k0(s){const e=s()*2-1,t=s()*Math.PI*2,n=Math.sqrt(Math.max(0,1-e*e));return[n*Math.cos(t),n*Math.sin(t),e]}function Sb(s,e){const[t,n,r]=k0(s),o=e*Math.cbrt(s());return[t*o,n*o,r*o]}const WM=6,gg=6.7,Kf=34;function Qc(s){const e=vi(s,Vt.convergence.end-.06,Vt.horizon.start+.1),t=vi(s,Vt.passage.start+.06,Vt.passage.end);return e*(1-t)}function rU(){return se.jsxs("mesh",{children:[se.jsx("sphereGeometry",{args:[WM,48,32]}),se.jsx("meshBasicMaterial",{color:"#000000"})]})}const sU=`
  varying vec3 vLocal;
  void main() {
    vLocal = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,aU=`
  ${_s}
  uniform float uTime;
  uniform float uOpacity;
  uniform float uGain;
  uniform float uInner;
  uniform float uOuter;
  uniform float uSpin;
  uniform float uTint;
  varying vec3 vLocal;

  void main() {
    float radius = length(vLocal.xy);
    float t = clamp((radius - uInner) / (uOuter - uInner), 0.0, 1.0);
    float angle = atan(vLocal.y, vLocal.x);

    // Keplerian shear — the inner material orbits much faster than the rim.
    float shear = angle + uTime * uSpin * (0.9 / (0.22 + t * 1.7));

    float fine = fbm3(vec3(cos(shear) * 2.4, sin(shear) * 2.4, t * 4.2 + uTime * 0.04));
    float coarse = fbm3(vec3(cos(shear * 0.55) * 4.4, sin(shear * 0.55) * 4.4, t * 8.0));
    float filaments = 0.35 + fine * coarse * 3.4;

    float radial = smoothstep(0.0, 0.1, t) * (1.0 - smoothstep(0.42, 1.0, t));

    // Relativistic beaming: the approaching side of the disk is far brighter.
    float doppler = 0.42 + 0.58 * pow(0.5 + 0.5 * cos(angle - 2.4), 1.4);

    vec3 hot = vec3(1.0, 0.93, 0.8);
    vec3 amber = vec3(1.0, 0.58, 0.2);
    vec3 violet = vec3(0.52, 0.36, 1.0);
    vec3 blue = vec3(0.35, 0.62, 1.0);

    vec3 color = mix(violet, amber, 1.0 - smoothstep(0.05, 0.62, t));
    color = mix(color, blue, smoothstep(0.6, 1.0, t) * 0.7);
    color = mix(color, hot, 1.0 - smoothstep(0.0, 0.22, t));
    color += vec3(0.1, 0.22, 0.6) * (1.0 - t) * uTint;

    float alpha = radial * filaments * doppler * uOpacity * uGain;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;function oU(){const s=ge.useMemo(()=>({uTime:{value:0},uOpacity:{value:0},uGain:{value:1},uInner:{value:gg},uOuter:{value:Kf},uSpin:{value:.5},uTint:{value:1}}),[]),e=ge.useMemo(()=>new cl(gg,Kf,176,4),[]),t=ge.useMemo(()=>new cl(gg+1,Kf*.72,128,3),[]),n=ge.useMemo(()=>new Li({uniforms:s,vertexShader:sU,fragmentShader:aU,transparent:!0,depthWrite:!1,depthTest:!1,side:di,blending:dn}),[s]);return Tn(()=>{const r=tt.progress;s.uTime.value=tt.time,s.uOpacity.value=Qc(r),s.uGain.value=.55+Wc(r,Vt.horizon.start,Vt.horizon.end)*.9}),se.jsxs("group",{children:[se.jsx("mesh",{geometry:e,material:n,rotation:[-Math.PI/2+.3,0,.55],scale:[1,1,.94],renderOrder:1}),se.jsx("mesh",{geometry:t,material:n,rotation:[-Math.PI/2+.62,0,-.4],scale:[1,1,.6],renderOrder:1})]})}const lU=`
  varying vec2 vUv;
  void main() {
    vUv = position.xy * 2.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,cU=`
  uniform float uOpacity;
  uniform float uSize;
  varying vec2 vUv;

  void main() {
    float r = length(vUv);
    float band = smoothstep(0.055, 0.0, abs(r - 0.27));
    float bloom = exp(-pow(abs(r - 0.27) * 8.0, 2.0));

    // Light bent over the top and under the bottom of the shadow.
    float vertical = 0.42 + 0.58 * pow(clamp(abs(vUv.y) / max(r, 0.0001), 0.0, 1.0), 1.5);

    vec3 color = mix(vec3(1.0, 0.72, 0.34), vec3(1.0), band);
    color = mix(color, vec3(0.65, 0.78, 1.0), 1.0 - vertical);

    float alpha = (band * 1.15 + bloom * 0.55) * vertical * uOpacity;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;function uU(){const s=ge.useRef(null),e=yl(n=>n.camera),t=ge.useMemo(()=>({uOpacity:{value:0},uSize:{value:64}}),[]);return Tn(()=>{t.uOpacity.value=Qc(tt.progress),s.current?.quaternion.copy(e.quaternion)}),se.jsxs("mesh",{ref:s,renderOrder:2,children:[se.jsx("planeGeometry",{args:[64,64]}),se.jsx("shaderMaterial",{uniforms:t,vertexShader:lU,fragmentShader:cU,transparent:!0,depthWrite:!1,depthTest:!1,blending:dn})]})}function fU({count:s}){const e=ge.useRef(null),t=ge.useMemo(()=>new Bt,[]),n=ge.useMemo(()=>{const r=qr(8123);return Array.from({length:s},()=>({radius:Kf+4+r()*24,angle:r()*Math.PI*2,speed:.05+r()*.12,tilt:(r()-.5)*.5,size:.35+Math.pow(r(),2)*1.5,spin:(r()-.5)*.8,y:(r()-.5)*5}))},[s]);return Tn(()=>{const r=e.current;if(!r)return;const o=Qc(tt.progress);if(r.visible=o>.02,!r.visible)return;const l=tt.time;for(let c=0;c<n.length;c++){const f=n[c],h=f.angle+l*f.speed;t.position.set(Math.cos(h)*f.radius,f.y+Math.sin(h*1.7)*f.tilt*6,Math.sin(h)*f.radius),t.rotation.set(l*f.spin,h*2,h*f.spin),t.scale.setScalar(f.size),t.updateMatrix(),r.setMatrixAt(c,t.matrix)}r.instanceMatrix.needsUpdate=!0}),se.jsxs("instancedMesh",{ref:e,args:[void 0,void 0,s],frustumCulled:!1,children:[se.jsx("icosahedronGeometry",{args:[1,0]}),se.jsx("meshBasicMaterial",{color:"#2a2a3c"})]})}const hU=`
  uniform float uTime;
  uniform float uPixelRatio;
  attribute float aRadius;
  attribute float aAngle;
  attribute float aY;
  attribute float aSeed;
  varying float vBright;

  void main() {
    // Keplerian shear: the closer a grain orbits, the harder it is whipped
    // around the shadow — the swarm visibly smears into the flow.
    float kepler = 2.6 / pow(aRadius / 6.6, 1.5);
    float ang = aAngle + uTime * kepler * 0.42;
    vec3 p = vec3(
      cos(ang) * aRadius,
      aY + sin(ang * 2.0 + aSeed * 6.28) * 0.14,
      sin(ang) * aRadius
    );

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(
      (0.55 + aSeed * 1.7) * uPixelRatio * (150.0 / max(-mv.z, 0.9)),
      0.7,
      5.5
    );
    vBright = 0.45 + 0.55 * sin(uTime * 2.4 + aSeed * 47.0);
  }
`,dU=`
  uniform float uOpacity;
  varying float vBright;

  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float core = smoothstep(1.0, 0.0, d);
    float alpha = pow(core, 2.2) * vBright * uOpacity;
    if (alpha < 0.004) discard;
    vec3 color = mix(vec3(0.55, 0.72, 1.0), vec3(1.0, 0.88, 0.7), vBright - 0.45);
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;function pU({count:s}){const e=ge.useMemo(()=>{const n=qr(3311),r=new Float32Array(s),o=new Float32Array(s),l=new Float32Array(s),c=new Float32Array(s);for(let h=0;h<s;h++)r[h]=WM+.55+Math.pow(n(),1.6)*7.4,o[h]=n()*Math.PI*2,l[h]=(n()-.5)*1.5,c[h]=n();const f=new pt;return f.setAttribute("position",new ct(new Float32Array(s*3),3)),f.setAttribute("aRadius",new ct(r,1)),f.setAttribute("aAngle",new ct(o,1)),f.setAttribute("aY",new ct(l,1)),f.setAttribute("aSeed",new ct(c,1)),f.boundingSphere=new gn(new O,18),f},[s]),t=ge.useMemo(()=>({uTime:{value:0},uOpacity:{value:0},uPixelRatio:{value:1}}),[]);return Tn(()=>{t.uTime.value=tt.time,t.uOpacity.value=Qc(tt.progress),t.uPixelRatio.value=Math.min(window.devicePixelRatio||1,1.5)}),se.jsx("points",{geometry:e,frustumCulled:!1,rotation:[-Math.PI/2+.3,0,.55],children:se.jsx("shaderMaterial",{uniforms:t,vertexShader:hU,fragmentShader:dU,transparent:!0,depthWrite:!1,blending:dn})})}function mU({quality:s}){const e=ge.useRef(null);return Tn(()=>{e.current&&(e.current.visible=Qc(tt.progress)>.01)}),se.jsxs("group",{ref:e,position:on.core,visible:!1,children:[se.jsx(rU,{}),se.jsx(oU,{}),se.jsx(uU,{}),se.jsx(pU,{count:Math.max(260,Math.round(900*s))}),se.jsx(fU,{count:Math.max(28,Math.round(96*s))})]})}function gU(){const s=ge.useRef(new O),e=ge.useRef(new O),t=ge.useRef(40);return Tn(n=>{const r=n.camera,o=tt.progress,l=PT(o);if(s.current.set(l.pos[0],l.pos[1],l.pos[2]),e.current.set(l.look[0],l.look[1],l.look[2]),!tt.reduced){const c=tt.pointerX,f=tt.pointerY,h=tt.time;s.current.x+=Math.sin(h*.29)*.05,s.current.y+=Math.cos(h*.23)*.045,s.current.x+=c*.9,s.current.y+=-f*.55,e.current.x+=c*1.8,e.current.y+=-f*1.15;const p=qh(o,Vt.passage.start,Vt.passage.end,.04,.06);if(p>.001){const m=.05*p;s.current.x+=Math.sin(h*41)*m,s.current.y+=Math.cos(h*37)*m}}r.position.copy(s.current),r.up.set(0,1,0),r.lookAt(e.current),l.roll!==0&&r.rotateZ(l.roll),Math.abs(l.fov-t.current)>.02&&(r.fov=l.fov,r.updateProjectionMatrix(),t.current=l.fov)}),null}const vU=`
  varying vec2 vUv;
  void main() {
    // Quad is 1x1 and scaled by the mesh, so this is exactly -1..1.
    vUv = position.xy * 2.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,_U=`
  ${_s}
  uniform float uTime;
  uniform float uOpacity;
  uniform float uPower;
  varying vec2 vUv;

  void main() {
    float r = length(vUv);
    float angle = atan(vUv.y, vUv.x);

    float core = exp(-r * r * 24.0);
    float halo = exp(-r * r * 3.2);

    // The converged filaments, still visible as rotating spokes of light.
    float spokes = fbm3(vec3(
      cos(angle + uTime * 0.4) * 2.6,
      sin(angle + uTime * 0.4) * 2.6,
      uTime * 0.05 + r * 3.2
    ));
    float ring = smoothstep(0.05, 0.0, abs(r - 0.34)) * (0.35 + 0.9 * spokes);

    vec3 hot = vec3(1.0);
    vec3 mid = vec3(1.0, 0.68, 0.32);
    vec3 cool = vec3(0.40, 0.55, 1.0);
    vec3 color = mix(mid, cool, smoothstep(0.06, 0.45, r));
    color = mix(color, hot, core);

    float energy = 0.55 + uPower * 0.85;
    float alpha = (core * 1.5 + halo * 0.5 + ring * 0.45) * uOpacity * energy;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;function xU(){const s=ge.useRef(null),e=yl(n=>n.camera),t=ge.useMemo(()=>({uTime:{value:0},uOpacity:{value:0},uPower:{value:0}}),[]);return Tn(()=>{const n=tt.progress;t.uTime.value=tt.time;const r=vi(n,Vt.convergence.start+.05,Vt.convergence.end);t.uPower.value=r,t.uOpacity.value=.15+r*.85-vi(n,Vt.horizon.start+.02,Vt.horizon.start+.3)*1;const o=2.2+r*26+Wc(n,Vt.horizon.start,Vt.horizon.end)*8;s.current&&(s.current.quaternion.copy(e.quaternion),s.current.scale.setScalar(o))}),se.jsxs("mesh",{ref:s,position:on.core,children:[se.jsx("planeGeometry",{args:[1,1]}),se.jsx("shaderMaterial",{uniforms:t,vertexShader:vU,fragmentShader:_U,transparent:!0,depthWrite:!1,blending:dn})]})}function XM(s){return 1-vi(s,Vt.mind.end-.02,Vt.convergence.start+.1)}function yU(s){const[e,t]=ge.useState(null);return ge.useEffect(()=>{let n=!1;const r=new Image;return r.crossOrigin="anonymous",r.decoding="async",r.onload=()=>{if(n)return;const o=new hn(r);o.colorSpace=Yn,o.needsUpdate=!0,t(o)},r.onerror=()=>{},r.src=s,()=>{n=!0}},[s]),ge.useEffect(()=>()=>{e?.dispose()},[e]),e}const Mb=`
  varying vec2 vUv;
  void main() {
    vUv = position.xy * 2.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,wb=`
  ${_s}
  uniform float uTime;
  uniform float uOpacity;
  uniform vec3 uColor;
  uniform float uSeed;
  varying vec2 vUv;

  void main() {
    vec2 edge = abs(vUv);
    float border = smoothstep(0.86, 1.0, max(edge.x, edge.y));
    float glow = smoothstep(0.6, 1.0, max(edge.x, edge.y)) * 0.35;

    // A faint, shifting interior so a frame still reads as a *thing* without a
    // texture behind it.
    float inner = fbm3(vec3(vUv * 2.2, uSeed + uTime * 0.05));
    float fill = smoothstep(0.42, 0.9, inner) * 0.22;

    float alpha = (border * 0.9 + glow + fill) * uOpacity;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(uColor * alpha, alpha);
  }
`;function bU({config:s,src:e,tint:t}){const n=ge.useRef(null),r=yU(e),o=ge.useMemo(()=>({uTime:{value:0},uOpacity:{value:1},uColor:{value:new be(t)},uSeed:{value:s.bob}}),[t,s.bob]);return Tn(()=>{const l=tt.progress,c=XM(l),f=n.current;if(!f||(f.visible=c>.01,!f.visible))return;o.uTime.value=tt.time,o.uOpacity.value=c;const h=tt.time;f.position.set(s.position[0]+Math.sin(h*.16+s.bob)*s.drift,s.position[1]+Math.cos(h*.21+s.bob)*s.drift*.7,s.position[2]+Math.sin(h*.11+s.bob*2)*s.drift),f.rotation.x=s.rotation[0]+Math.sin(h*.14+s.bob)*.14,f.rotation.y=s.rotation[1]+h*s.spin,f.rotation.z=s.rotation[2]+Math.cos(h*.12+s.bob)*.1}),se.jsxs("group",{ref:n,position:s.position,rotation:s.rotation,children:[se.jsxs("mesh",{children:[se.jsx("planeGeometry",{args:[s.size,s.size*.66]}),r?se.jsx("meshBasicMaterial",{map:r,transparent:!0,opacity:.62,depthWrite:!1,color:"#cddaff"}):se.jsx("shaderMaterial",{uniforms:o,vertexShader:Mb,fragmentShader:wb,transparent:!0,depthWrite:!1,side:di,blending:dn})]}),se.jsxs("mesh",{scale:1.02,children:[se.jsx("planeGeometry",{args:[s.size,s.size*.66]}),se.jsx("shaderMaterial",{uniforms:o,vertexShader:Mb,fragmentShader:wb,transparent:!0,depthWrite:!1,side:di,blending:dn})]})]})}function SU({quality:s}){const e=ge.useMemo(()=>qr(20482),[]),t=ge.useMemo(()=>IT.slice(0,6).map((c,f)=>({project:c,config:{position:[-5.4+e()*12,-1.6+e()*5.8,-3-e()*26],rotation:[(e()-.5)*.6,(e()-.5)*.8,(e()-.5)*.45],size:1.5+e()*1.5,spin:(e()-.5)*.06,bob:e()*Math.PI*2+f,drift:.5+e()*.7},tint:["#8fbaff","#b98cff","#ffc48a"][f%3]})),[e]),n=ge.useMemo(()=>{const l=Math.max(90,Math.round(300*s)),c=new Float32Array(l*3),f=new Float32Array(l);for(let p=0;p<l;p++){const m=.6+Math.pow(e(),1.7)*5.2,g=e()*Math.PI*2,_=Math.acos(e()*2-1);c[p*3]=on.crown[0]+m*Math.sin(_)*Math.cos(g),c[p*3+1]=on.crown[1]+m*Math.cos(_)*.8,c[p*3+2]=on.crown[2]+m*Math.sin(_)*Math.sin(g),f[p]=e()}const h=new pt;return h.setAttribute("position",new ct(c,3)),h.setAttribute("aSeed",new ct(f,1)),h.boundingSphere=new gn(new O(...on.crown),10),h},[s,e]),r=ge.useMemo(()=>({uTime:{value:0},uOpacity:{value:.8},uPixelRatio:{value:1},uPointer:{value:new _e(0,0)},uPull:{value:0}}),[]),o=ge.useRef(null);return Tn(()=>{const l=XM(tt.progress);r.uTime.value=tt.time,r.uOpacity.value=l*.8,r.uPixelRatio.value=Math.min(window.devicePixelRatio||1,1.5),r.uPull.value=tt.pointerActive&&!tt.reduced?.075:0,r.uPointer.value.set(tt.pointerX,-tt.pointerY);const c=o.current;c&&(c.visible=l>.01,c.rotation.y=tt.time*.05)}),se.jsxs("group",{children:[t.map(({project:l,config:c,tint:f})=>se.jsx(bU,{config:c,src:l.image,tint:f},l.slug)),se.jsx("points",{ref:o,geometry:n,frustumCulled:!1,children:se.jsx("shaderMaterial",{uniforms:r,vertexShader:`
            uniform float uTime;
            uniform float uPixelRatio;
            uniform vec2 uPointer;
            uniform float uPull;
            attribute float aSeed;
            varying float vBright;

            void main() {
              vec3 drifted = position;
              drifted.y += sin(uTime * 0.35 + aSeed * 30.0) * 0.28;
              drifted.x += cos(uTime * 0.27 + aSeed * 22.0) * 0.22;

              vec4 mv = modelViewMatrix * vec4(drifted, 1.0);
              gl_Position = projectionMatrix * mv;
              gl_PointSize = clamp(
                (0.9 + aSeed * 2.4) * uPixelRatio * (150.0 / max(-mv.z, 0.7)),
                0.7,
                9.0
              );
              vBright = 0.6 + 0.4 * sin(uTime * 1.6 + aSeed * 40.0);

              // Subtle attraction with a tangential twist, so the dust both
              // leans toward the cursor and wheels around it.
              if (gl_Position.w > 0.0 && uPull > 0.0001) {
                vec2 ndc = gl_Position.xy / gl_Position.w;
                vec2 d = uPointer - ndc;
                float r = max(length(d), 0.0012);
                float well = min(uPull / (r * 5.0 + 0.4), 0.07);
                vec2 dir = d / r;
                vec2 tangent = vec2(-dir.y, dir.x);
                gl_Position.xy +=
                  (dir * 0.75 + tangent * 0.5) * well * gl_Position.w;
              }
            }
          `,fragmentShader:`
            uniform float uOpacity;
            varying float vBright;
            void main() {
              float d = length(gl_PointCoord - 0.5) * 2.0;
              float core = smoothstep(1.0, 0.0, d);
              float alpha = pow(core, 2.4) * vBright * uOpacity;
              if (alpha < 0.004) discard;
              vec3 color = mix(vec3(0.62, 0.78, 1.0), vec3(1.0, 0.86, 0.66), vBright - 0.6);
              gl_FragColor = vec4(color * alpha, alpha);
            }
          `,transparent:!0,depthWrite:!1,blending:dn})})]})}const MU="/portrait.png",vg=5.1;function wU(){const[s,e]=ge.useState({texture:null,aspect:1});return ge.useEffect(()=>{let t=!1;const n=new Image;return n.decoding="async",n.onload=()=>{if(t)return;const r=new hn(n);r.colorSpace=Yn,r.needsUpdate=!0,e({texture:r,aspect:n.naturalHeight>0?n.naturalWidth/n.naturalHeight:1})},n.onerror=()=>{t||e({texture:null,aspect:1})},n.src=MU,()=>{t=!0}},[]),ge.useEffect(()=>()=>{s.texture?.dispose()},[s.texture]),s}const TU=`
  uniform float uSize;
  varying vec2 vUv;
  void main() {
    vUv = position.xy * 2.0 / uSize;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,EU=`
  ${_s}
  uniform float uTime;
  uniform float uOpacity;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec2 vUv;

  void main() {
    float r = length(vUv);
    float aura = exp(-r * r * 3.1);
    float flicker = 0.86 + 0.14 * fbm3(vec3(vUv * 3.0, uTime * 0.12));
    vec3 color = mix(uColorA, uColorB, smoothstep(0.0, 1.1, r));
    float alpha = aura * flicker * uOpacity;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(color * alpha, alpha);
  }
`,Tb=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,AU=`
  uniform sampler2D uMap;
  uniform float uOpacity;
  uniform vec3 uCool;
  uniform vec3 uWarm;
  varying vec2 vUv;

  void main() {
    vec4 tex = texture2D(uMap, vUv);
    if (tex.a < 0.004) discard;

    float key = smoothstep(0.05, 1.15, vUv.y * 0.8 + (1.0 - vUv.x) * 0.55);
    float kicker = smoothstep(0.35, 1.1, vUv.x * 0.7 + (1.0 - vUv.y) * 0.55);

    vec3 col = tex.rgb;
    col *= 0.84 + 0.32 * key;
    col += uCool * key * 0.11;
    col = mix(col, col * uWarm * 1.06, kicker * 0.35);

    gl_FragColor = vec4(col, tex.a) * uOpacity;
  }
`,CU=`
  ${_s}
  uniform sampler2D uMap;
  uniform vec2 uTexel;
  uniform float uTime;
  uniform float uOpacity;
  uniform vec3 uCool;
  uniform vec3 uWarm;
  varying vec2 vUv;

  void main() {
    float o = 3.5;
    vec2 t = uTexel * o;
    float n = 0.0;
    n += texture2D(uMap, vUv + vec2( t.x,  0.0)).a;
    n += texture2D(uMap, vUv + vec2(-t.x,  0.0)).a;
    n += texture2D(uMap, vUv + vec2( 0.0,  t.y)).a;
    n += texture2D(uMap, vUv + vec2( 0.0, -t.y)).a;
    n += texture2D(uMap, vUv + vec2( t.x,  t.y)).a;
    n += texture2D(uMap, vUv + vec2(-t.x,  t.y)).a;
    n += texture2D(uMap, vUv + vec2( t.x, -t.y)).a;
    n += texture2D(uMap, vUv + vec2(-t.x, -t.y)).a;
    n *= 0.125;

    float rim = clamp(n - texture2D(uMap, vUv).a, 0.0, 1.0);
    if (rim < 0.004) discard;

    float breathe = 0.72 + 0.28 * sin(uTime * 0.7 + vUv.y * 2.4);
    float side = smoothstep(0.05, 1.0, vUv.x * 0.8 + vUv.y * 0.35);
    vec3 color = mix(uWarm, uCool, side);
    color += vec3(1.0) * 0.18 * smoothstep(0.4, 1.0, rim);

    float alpha = rim * breathe * uOpacity;
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;function RU(){const s=ge.useRef(null),e=ge.useRef(null),t=ge.useMemo(()=>{const n=qr(60417),r=(o,l,c)=>{const f=new Float32Array(o*3),h=new Float32Array(o*3),p=new be("#8ec2ff"),m=new be("#ffc48a"),g=new be("#b489ff");for(let y=0;y<o;y++){const M=k0(n),S=l+(n()-.5)*c;f[y*3]=M[0]*S,f[y*3+1]=M[1]*S,f[y*3+2]=M[2]*S;const b=n(),w=b<.62?p:b<.86?g:m,R=.55+n()*.45;h[y*3]=w.r*R,h[y*3+1]=w.g*R,h[y*3+2]=w.b*R}const _=new pt;return _.setAttribute("position",new ct(f,3)),_.setAttribute("color",new ct(h,3)),_.boundingSphere=new gn(new O,l+c),_};return{outer:r(560,1.62,.75),inner:r(260,1,.5)}},[]);return Tn(()=>{const n=tt.time;s.current&&(s.current.rotation.y=n*.11,s.current.rotation.x=Math.sin(n*.14)*.22),e.current&&(e.current.rotation.y=-n*.19,e.current.rotation.z=n*.07)}),se.jsxs("group",{children:[se.jsx("points",{ref:s,geometry:t.outer,children:se.jsx("pointsMaterial",{size:.055,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:dn})}),se.jsx("points",{ref:e,geometry:t.inner,children:se.jsx("pointsMaterial",{size:.04,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.75,depthWrite:!1,blending:dn})}),se.jsxs("mesh",{children:[se.jsx("sphereGeometry",{args:[.78,32,24]}),se.jsx("meshBasicMaterial",{color:"#04060f"})]})]})}function PU(){const{texture:s,aspect:e}=wU(),t=yl(h=>h.camera),n=ge.useRef(null),r=ge.useRef(null),o=ge.useMemo(()=>({uTime:{value:0},uOpacity:{value:.55},uSize:{value:13},uColorA:{value:new be("#7fb4ff")},uColorB:{value:new be("#a366ff")}}),[]),l=ge.useMemo(()=>({uMap:{value:s},uOpacity:{value:1},uCool:{value:new be("#8fc4ff")},uWarm:{value:new be("#ffcf9a")}}),[s]),c=ge.useMemo(()=>({uMap:{value:s},uTexel:{value:new _e(1/1024,1/1024)},uTime:{value:0},uOpacity:{value:.85},uCool:{value:new be("#6fb6ff")},uWarm:{value:new be("#ff9f5a")}}),[s]);ge.useEffect(()=>{if(!s)return;const h=s.image,p=h?.width??1024,m=h?.height??1024;c.uTexel.value.set(1/Math.max(p,1),1/Math.max(m,1))},[s,c]);const f=vg*Math.max(.4,Math.min(e,2.4));return Tn(()=>{const h=tt.progress,p=tt.time;o.uTime.value=p,o.uOpacity.value=.5+Wc(h,0,.12)*.65*(1-vi(h,.06,.16)),n.current?.quaternion.copy(t.quaternion),l.uOpacity.value=1-vi(h,.02,.14),c.uTime.value=p,c.uOpacity.value=.55+.35*(1-vi(h,.04,.16));const m=r.current;if(m){const g=tt.pointerActive&&!tt.reduced?1:0;m.position.x=on.portrait[0]+tt.pointerX*.22*g,m.position.y=on.portrait[1]+-tt.pointerY*.13*g,m.position.z=on.portrait[2],m.rotation.y=tt.pointerX*.05*g,m.visible=l.uOpacity.value>.01||!s}}),se.jsxs("group",{ref:r,position:on.portrait,children:[se.jsxs("mesh",{ref:n,position:[0,.2,-.6],children:[se.jsx("planeGeometry",{args:[13,13]}),se.jsx("shaderMaterial",{uniforms:o,vertexShader:TU,fragmentShader:EU,transparent:!0,depthWrite:!1,blending:dn})]}),s?se.jsxs("group",{children:[se.jsxs("mesh",{children:[se.jsx("planeGeometry",{args:[f,vg]}),se.jsx("shaderMaterial",{uniforms:l,vertexShader:Tb,fragmentShader:AU,transparent:!0,depthWrite:!1})]}),se.jsxs("mesh",{position:[0,0,.012],children:[se.jsx("planeGeometry",{args:[f,vg]}),se.jsx("shaderMaterial",{uniforms:c,vertexShader:Tb,fragmentShader:CU,transparent:!0,depthWrite:!1,blending:dn})]})]}):se.jsx(RU,{})]})}function eu(s){return vi(s,Vt.passage.end-.03,Vt.multiverse.start+.12)}const Wf=[4,-12,-1088],IU=[-.55,.5,.66],LU=`
  ${_s}
  uniform float uSeed;
  uniform float uRelief;
  varying vec3 vNormalW;
  varying vec3 vPosW;

  void main() {
    vec3 n = normalize(position);
    float relief = fbm3(n * 2.6 + uSeed);
    vec3 local = n * (1.0 + uRelief * (relief - 0.5))
      + n * uRelief * 0.45 * (fbm3(n * 6.0 + uSeed * 2.0) - 0.5);
    vec4 world = modelMatrix * vec4(local, 1.0);
    vNormalW = normalize(mat3(modelMatrix) * n);
    vPosW = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,NU=`
  ${_s}
  uniform float uSeed;
  uniform vec3 uOcean;
  uniform vec3 uLand;
  uniform vec3 uAtmo;
  uniform vec3 uLightDir;
  varying vec3 vNormalW;
  varying vec3 vPosW;

  void main() {
    vec3 n = normalize(vNormalW);
    float continents = fbm3(n * 2.3 + uSeed);
    float detail = fbm3(n * 6.5 + uSeed * 3.1);
    float land = smoothstep(0.49, 0.56, continents + detail * 0.1);

    vec3 albedo = mix(uOcean, uLand, land);
    albedo = mix(albedo, uLand * 1.35, smoothstep(0.6, 0.82, continents) * 0.7);

    float lambert = clamp(dot(n, normalize(uLightDir)), 0.0, 1.0);
    float lit = smoothstep(0.0, 0.38, lambert);
    vec3 color = albedo * (0.05 + 1.25 * lit);

    vec3 view = normalize(cameraPosition - vPosW);
    float rim = pow(1.0 - clamp(dot(n, view), 0.0, 1.0), 2.8);
    color += uAtmo * rim * (0.4 + lit * 0.9);

    gl_FragColor = vec4(color, 1.0);
  }
`,DU=`
  varying vec3 vNormalW;
  varying vec3 vPosW;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vNormalW = normalize(mat3(modelMatrix) * normalize(position));
    vPosW = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,UU=`
  uniform vec3 uAtmo;
  uniform float uFade;
  varying vec3 vNormalW;
  varying vec3 vPosW;

  void main() {
    vec3 n = normalize(vNormalW);
    vec3 view = normalize(cameraPosition - vPosW);
    float rim = pow(1.0 - abs(dot(n, view)), 3.2);
    float alpha = rim * uFade;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(uAtmo * alpha, alpha);
  }
`;function Xf({position:s,radius:e,ocean:t,land:n,atmosphere:r,seed:o,spin:l=.05,relief:c=.05}){const f=ge.useRef(null),h=ge.useRef(.001),p=ge.useMemo(()=>({uSeed:{value:o},uRelief:{value:c},uOcean:{value:new be(t)},uLand:{value:new be(n)},uAtmo:{value:new be(r)},uLightDir:{value:new O(...IU).normalize()}}),[o,c,t,n,r]),m=ge.useMemo(()=>({uAtmo:{value:new be(r)},uFade:{value:0}}),[r]);return Tn((g,_)=>{const y=eu(tt.progress);h.current+=(y-h.current)*Math.min(_*1.7,1),m.uFade.value=h.current*.9;const M=f.current;M&&(M.visible=h.current>.004,M.scale.setScalar(Math.max(h.current,.004)*e),M.rotation.y+=_*l)}),se.jsxs("group",{ref:f,position:s,scale:.004,children:[se.jsxs("mesh",{children:[se.jsx("sphereGeometry",{args:[1,64,44]}),se.jsx("shaderMaterial",{uniforms:p,vertexShader:LU,fragmentShader:NU})]}),se.jsxs("mesh",{scale:1.045,children:[se.jsx("sphereGeometry",{args:[1,40,28]}),se.jsx("shaderMaterial",{uniforms:m,vertexShader:DU,fragmentShader:UU,transparent:!0,depthWrite:!1,side:li,blending:dn})]})]})}const FU=`
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uScale;

  attribute float aRadius;
  attribute float aAngle;
  attribute float aHeight;
  attribute float aTint;
  attribute float aSize;

  varying vec3 vColor;

  void main() {
    float r = aRadius;
    float angle = aAngle + r * 1.7 + uTime * (0.035 / (0.35 + r));

    vec3 spiral = vec3(
      cos(angle) * r * uScale,
      aHeight * uScale * (1.0 - r * 0.35),
      sin(angle) * r * uScale
    );

    vec4 mv = modelViewMatrix * vec4(position + spiral, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(aSize * uPixelRatio * (200.0 / max(-mv.z, 1.0)), 0.8, 9.0);

    vec3 core = vec3(1.0, 0.86, 0.62);
    vec3 arm = vec3(0.48, 0.62, 1.0);
    vec3 halo = vec3(0.62, 0.4, 1.0);
    vColor = mix(core, mix(arm, halo, aTint), smoothstep(0.0, 0.4, r));
  }
`,OU=`
  uniform float uOpacity;
  varying vec3 vColor;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float core = smoothstep(1.0, 0.0, d);
    float alpha = pow(core, 2.2) * uOpacity;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(vColor * alpha, alpha);
  }
`;function BU({count:s}){const e=ge.useMemo(()=>{const n=qr(2210),r=new Float32Array(s*3),o=new Float32Array(s),l=new Float32Array(s),c=new Float32Array(s),f=new Float32Array(s),h=new Float32Array(s);for(let m=0;m<s;m++){const g=Math.floor(n()*2),_=Math.pow(n(),.65);r[m*3]=Wf[0],r[m*3+1]=Wf[1],r[m*3+2]=Wf[2],o[m]=_,l[m]=g*Math.PI+(n()-.5)*.95+n()*.4,c[m]=(n()-.5)*.5*(1-_*.5),f[m]=n(),h[m]=1.1+n()*2.6}const p=new pt;return p.setAttribute("position",new ct(r,3)),p.setAttribute("aRadius",new ct(o,1)),p.setAttribute("aAngle",new ct(l,1)),p.setAttribute("aHeight",new ct(c,1)),p.setAttribute("aTint",new ct(f,1)),p.setAttribute("aSize",new ct(h,1)),p.boundingSphere=new gn(new O(...Wf),700),p},[s]),t=ge.useMemo(()=>({uTime:{value:0},uPixelRatio:{value:1},uScale:{value:168},uOpacity:{value:0}}),[]);return Tn(()=>{t.uTime.value=tt.time,t.uPixelRatio.value=Math.min(window.devicePixelRatio||1,1.5),t.uOpacity.value=vi(tt.progress,Vt.multiverse.start+.1,Vt.multiverse.end)*.95}),se.jsx("points",{geometry:e,frustumCulled:!1,children:se.jsx("shaderMaterial",{uniforms:t,vertexShader:FU,fragmentShader:OU,transparent:!0,depthWrite:!1,blending:dn})})}const zU=`
  uniform vec2 uSize;
  varying vec2 vUv;
  void main() {
    vUv = position.xy * 2.0 / uSize;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,kU=`
  ${_s}
  uniform float uTime;
  uniform float uSeed;
  uniform float uOpacity;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec2 vUv;

  void main() {
    float drift = uTime * 0.012;
    float n = fbm3(vec3(vUv * 1.7 + drift, uSeed));
    float detail = fbm3(vec3(vUv * 4.3 - drift, uSeed * 2.3));
    float mask = exp(-dot(vUv, vUv) * 1.9);
    float clouds = smoothstep(0.28, 0.86, n * 0.75 + detail * 0.5);
    float alpha = clouds * mask * uOpacity;
    if (alpha < 0.004) discard;
    vec3 color = mix(uColorA, uColorB, detail);
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;function _g({position:s,size:e,rotation:t,colorA:n,colorB:r,seed:o,strength:l=.6}){const c=ge.useRef(null),f=e[0],h=e[1],p=ge.useMemo(()=>({uTime:{value:0},uSeed:{value:o},uOpacity:{value:0},uColorA:{value:new be(n)},uColorB:{value:new be(r)},uSize:{value:new _e(f,h)}}),[o,n,r,f,h]);return Tn(()=>{const m=eu(tt.progress)*l;p.uTime.value=tt.time,p.uOpacity.value=m,c.current&&(c.current.visible=m>.01)}),se.jsxs("mesh",{ref:c,position:s,rotation:t,children:[se.jsx("planeGeometry",{args:e}),se.jsx("shaderMaterial",{uniforms:p,vertexShader:zU,fragmentShader:kU,transparent:!0,depthWrite:!1,side:di,blending:dn})]})}const VU=9;function HU(){const s=ge.useRef(null),e=ge.useMemo(()=>qr(6161),[]),t=ge.useMemo(()=>Array.from({length:VU},()=>{const n=e();return{position:[(e()-.5)*96,(e()-.5)*54,-600-e()*340],rotation:[e()*.5,e()*Math.PI*2,e()*.35],size:5+e()*11,spin:(e()-.5)*.22,bob:e()*Math.PI*2,color:new be().setHSL(.55+n*.22,.5,.28+e()*.12),edge:new be().setHSL(.06+n*.14,.75,.7)}}),[e]);return Tn((n,r)=>{const o=s.current;if(!o)return;const l=eu(tt.progress);if(o.visible=l>.01,!o.visible)return;const c=tt.time;o.children.forEach((f,h)=>{const p=t[h];p&&(f.rotation.y+=r*p.spin,f.position.y=p.position[1]+Math.sin(c*.16+p.bob)*2.6)})}),se.jsx("group",{ref:s,visible:!1,children:t.map((n,r)=>se.jsxs("group",{position:n.position,rotation:n.rotation,scale:[n.size,n.size*.4,n.size],children:[se.jsxs("mesh",{children:[se.jsx("icosahedronGeometry",{args:[1,1]}),se.jsx("meshBasicMaterial",{color:n.color})]}),se.jsxs("mesh",{scale:1.02,children:[se.jsx("icosahedronGeometry",{args:[1,1]}),se.jsx("meshBasicMaterial",{color:n.edge,wireframe:!0,transparent:!0,opacity:.4,blending:dn,depthWrite:!1})]})]},r))})}const GU=`
  uniform float uRadius;
  varying vec2 vUv;
  void main() {
    vUv = position.xy / uRadius;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,WU=`
  ${_s}
  uniform float uTime;
  uniform float uOpacity;
  uniform float uStyle;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec2 vUv;

  void main() {
    float r = length(vUv);
    float angle = atan(vUv.y, vUv.x);
    float swirl = fbm3(vec3(
      cos(angle + r * 3.4 - uTime * 0.22) * 2.2,
      sin(angle + r * 3.4 - uTime * 0.22) * 2.2,
      r * 3.2
    ));

    // Each portal holds a different kind of place, not just a different tint.
    float pattern;
    if (uStyle < 0.5) {
      // A city of lights: filaments running along a spiral.
      float streets = sin(angle * 3.0 + r * 9.0 - uTime * 0.35);
      pattern = smoothstep(0.3, 1.0, streets) * (0.55 + 0.45 * sin(r * 22.0));
    } else if (uStyle < 1.5) {
      // A banded world seen from above: concentric weather.
      pattern = smoothstep(0.2, 0.95, sin(r * 15.0 - uTime * 0.45) * 0.5 + 0.5);
      pattern *= 0.5 + 0.5 * swirl;
    } else if (uStyle < 2.5) {
      // A nebula: pure cloud.
      pattern = smoothstep(0.3, 0.85, swirl * 1.35);
    } else {
      // A cavern of light: rays from the centre.
      float rays = sin(angle * 12.0 + uTime * 0.18) * 0.5 + 0.5;
      pattern = smoothstep(0.15, 1.0, rays) * (1.0 - r * 0.45);
    }

    float mask = smoothstep(1.05, 0.1, r);
    float edge = smoothstep(0.7, 0.99, r) * 1.35;
    float alpha = (mask * (0.22 + pattern * 0.95) + edge) * uOpacity;
    if (alpha < 0.004) discard;
    vec3 color = mix(uColorA, uColorB, pattern);
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;function qf({position:s,radius:e,colorA:t,colorB:n,tilt:r=0,style:o}){const l=ge.useRef(null),c=ge.useMemo(()=>({uTime:{value:0},uOpacity:{value:0},uStyle:{value:o},uColorA:{value:new be(t)},uColorB:{value:new be(n)},uRadius:{value:e}}),[t,n,e,o]);return Tn((f,h)=>{const p=eu(tt.progress);c.uTime.value=tt.time,c.uOpacity.value=p*.95,l.current&&(l.current.visible=p>.01,l.current.children[1].rotation.z+=h*.12)}),se.jsxs("group",{ref:l,position:s,rotation:[0,r,0],children:[se.jsxs("mesh",{children:[se.jsx("circleGeometry",{args:[e,48]}),se.jsx("shaderMaterial",{uniforms:c,vertexShader:GU,fragmentShader:WU,transparent:!0,depthWrite:!1,side:di,blending:dn})]}),se.jsxs("mesh",{children:[se.jsx("torusGeometry",{args:[e,e*.035,8,64]}),se.jsx("meshBasicMaterial",{color:n,transparent:!0,opacity:.6,blending:dn,depthWrite:!1})]})]})}function XU({center:s,radius:e,count:t,tilt:n=.32}){const r=ge.useRef(null),o=ge.useMemo(()=>new Bt,[]),l=ge.useMemo(()=>{const c=qr(7788);return Array.from({length:t},()=>({angle:c()*Math.PI*2,band:e*(.78+c()*.42),y:(c()-.5)*e*.06,size:e*(.012+c()*.024),speed:.03+c()*.05,spin:c()*2}))},[t,e]);return Tn(()=>{const c=r.current;if(!c)return;const f=eu(tt.progress);if(c.visible=f>.01,!c.visible)return;const h=tt.time;for(let p=0;p<l.length;p++){const m=l[p],g=m.angle+h*m.speed;o.position.set(s[0]+Math.cos(g)*m.band,s[1]+m.y+Math.sin(g)*m.band*n,s[2]+Math.sin(g)*m.band*.35),o.rotation.set(h*m.spin,g*2,0),o.scale.setScalar(m.size),o.updateMatrix(),c.setMatrixAt(p,o.matrix)}c.instanceMatrix.needsUpdate=!0}),se.jsxs("instancedMesh",{ref:r,args:[void 0,void 0,t],visible:!1,frustumCulled:!1,children:[se.jsx("dodecahedronGeometry",{args:[1,0]}),se.jsx("meshBasicMaterial",{color:"#232741"})]})}function qU({quality:s}){return se.jsxs("group",{children:[se.jsx(Xf,{position:[-26,5,-565],radius:14,ocean:"#14295c",land:"#2f6b4f",atmosphere:"#5fa4ff",seed:1.3,relief:.055,spin:.04}),se.jsx(Xf,{position:[30,-9,-662],radius:10,ocean:"#43204a",land:"#a26b32",atmosphere:"#ff9a4d",seed:4.7,relief:.04,spin:.06}),se.jsx(Xf,{position:[-34,17,-802],radius:19,ocean:"#101f45",land:"#2b4d8a",atmosphere:"#a96bff",seed:8.1,relief:.07,spin:.03}),se.jsx(Xf,{position:[24,11,-952],radius:8.5,ocean:"#2a1a48",land:"#7f5cc4",atmosphere:"#7fb6ff",seed:2.2,relief:.05,spin:.08}),se.jsx(XU,{center:[24,11,-952],radius:20,count:Math.max(24,Math.round(70*s))}),se.jsx(BU,{count:Math.max(900,Math.round(3200*s))}),se.jsx(_g,{position:[-84,24,-700],size:[230,170],rotation:[.1,.5,.2],colorA:"#3d3aff",colorB:"#a96bff",seed:1.1}),se.jsx(_g,{position:[76,-28,-880],size:[280,200],rotation:[-.15,-.4,.1],colorA:"#1f6bff",colorB:"#ff9a4d",seed:3.4,strength:.5}),se.jsx(_g,{position:[-30,34,-1010],size:[340,230],rotation:[.2,.2,-.12],colorA:"#7a3cff",colorB:"#ffc07a",seed:6.2,strength:.45}),se.jsx(HU,{}),se.jsx(qf,{position:[-30,-16,-612],radius:13,colorA:"#2f6bff",colorB:"#8fd0ff",tilt:-.35,style:0}),se.jsx(qf,{position:[32,20,-720],radius:10,colorA:"#ff7a2f",colorB:"#ffd9a0",tilt:.4,style:1}),se.jsx(qf,{position:[-14,26,-876],radius:16,colorA:"#8a3cff",colorB:"#d5a6ff",tilt:-.2,style:2}),se.jsx(qf,{position:[28,-22,-1004],radius:12,colorA:"#12b5a6",colorB:"#9ff5e6",tilt:.25,style:3})]})}const Xo=["#6a4bff","#9f7bff"],qM=`
  uniform float uTime;
  uniform float uBlend;
  uniform float uFlowLength;
  uniform vec3 uDrift;
  uniform float uNear;
  uniform float uFar;

  attribute vec3 aEnd;
  attribute vec3 aDir;
  attribute float aBend;
  attribute float aT;
  attribute float aSeed;

  varying float vT;
  varying float vGlow;
  varying float vFade;

  void main() {
    float t = aT;
    float PI = 3.14159265;

    // Every strand runs at its own speed — nothing here is in lockstep.
    float pace = 0.5 + aSeed * 1.35;
    vec3 alive = aDir * (0.44 * sin(uTime * 0.55 * pace + aSeed * 31.0 + t * 4.2));

    // Lateral excursion: the fan out of the head, plus the bundle's drift.
    vec2 lateral = aDir.xy * (aBend * sin(t * PI))
                 + uDrift.xy * smoothstep(0.0, 0.36, t);

    // Twist + orbit: the excursion rotates around the corridor's axis, the
    // rotation accumulating along the strand (a helix) and turning over time
    // (an orbit), harder as the convergence takes hold.
    float twist = 1.0 + uBlend * 1.5;
    float ang = t * (2.3 + aSeed * 2.4) * twist
              + uTime * (0.14 + aSeed * 0.55) * twist;
    float ca = cos(ang);
    float sa = sin(ang);
    lateral = vec2(lateral.x * ca - lateral.y * sa,
                   lateral.x * sa + lateral.y * ca);

    // Loose: leaves the head, twists down the corridor, travels fast.
    vec3 loose = position
      + vec3(lateral, aDir.z * (aBend * sin(t * PI)))
      + vec3(0.0, 0.0, -1.0) * (t * uFlowLength)
      + alive;

    // Focused: every filament funnels into one point of light — but it spirals
    // in rather than flying straight, and the spiral keeps turning.
    float approach = smoothstep(0.0, 0.88, t);
    vec3 rel = (position - aEnd) * (1.0 - approach);
    float ang2 = (1.0 - approach) * (1.8 + aSeed * 2.4)
               + uTime * (0.22 + aSeed * 0.4);
    float c2 = cos(ang2);
    float s2 = sin(ang2);
    rel.xy = vec2(rel.xy.x * c2 - rel.xy.y * s2,
                  rel.xy.x * s2 + rel.xy.y * c2);
    vec3 focused = aEnd + rel;

    float w = clamp((uBlend - aSeed * 0.45) / 0.55, 0.0, 1.0);
    w = w * w * (3.0 - 2.0 * w);
    vec3 p = mix(loose, focused, w);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    // Two light trails per strand, each on its own clock: one races toward the
    // core and speeds up as it goes, the other runs back up the wire.
    float speedA = 0.1 + aSeed * 0.3;
    float speedB = 0.06 + fract(aSeed * 13.7) * 0.2;
    float pulseA = fract(uTime * speedA * (0.7 + t * 1.9) + aSeed * 7.0);
    float pulseB = fract(-uTime * speedB + fract(aSeed * 5.3) * 9.0);
    float trailA = smoothstep(0.17, 0.0, abs(t - pulseA));
    float trailB = 0.75 * smoothstep(0.1, 0.0, abs(t - pulseB));
    vGlow = clamp(trailA + trailB, 0.0, 1.6);
    vT = t;

    float dist = length(mv.xyz);
    vFade = smoothstep(0.55, 3.2, dist) * (1.0 - smoothstep(uNear, uFar, dist));
  }
`,YM=`
  uniform vec3 uCold;
  uniform vec3 uWarm;
  uniform vec3 uHot;
  uniform float uOpacity;
  uniform float uHotMix;
  uniform float uIntensity;

  varying float vT;
  varying float vGlow;
  varying float vFade;

  void main() {
    vec3 color = mix(uCold, uWarm, smoothstep(0.0, 0.85, vT));
    color = mix(color, uHot, uHotMix * smoothstep(0.45, 1.0, vT));
    float alpha = (0.3 + 0.7 * vGlow) * vFade * uOpacity * uIntensity;
    if (alpha < 0.003) discard;
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;function jM(s){const e=qr(s.seedOffset??913),{count:t,points:n}=s,r=n-1,o=t*r*2,l=new Float32Array(o*3),c=new Float32Array(o*3),f=new Float32Array(o*3),h=new Float32Array(o),p=new Float32Array(o),m=new Float32Array(o);let g=0;for(let y=0;y<t;y++){const M=s.root(y,e),S=s.end(y,e),b=k0(e),w=s.bend(e),R=e();for(let T=0;T<r;T++){const I=T/r,C=(T+1)/r;for(let D=0;D<2;D++){const E=D===0?I:C,N=g*3;l[N]=M[0],l[N+1]=M[1],l[N+2]=M[2],c[N]=S[0],c[N+1]=S[1],c[N+2]=S[2],f[N]=b[0],f[N+1]=b[1],f[N+2]=b[2],h[g]=w,p[g]=E,m[g]=R,g++}}}const _=new pt;return _.setAttribute("position",new ct(l,3)),_.setAttribute("aEnd",new ct(c,3)),_.setAttribute("aDir",new ct(f,3)),_.setAttribute("aBend",new ct(h,1)),_.setAttribute("aT",new ct(p,1)),_.setAttribute("aSeed",new ct(m,1)),_.boundingSphere=new gn(new O(0,0,-580),1400),_}function YU({count:s}){const e=ge.useMemo(()=>jM({count:s,points:22,root:(n,r)=>{const[o,l,c]=Sb(r,1.15);return[on.crown[0]+o,on.crown[1]+l,on.crown[2]+c]},end:(n,r)=>{const[o,l,c]=Sb(r,1.7);return[on.core[0]+o,on.core[1]+l,on.core[2]+c]},bend:n=>3+Math.pow(n(),1.4)*15,seedOffset:913}),[s]),t=ge.useMemo(()=>({uTime:{value:0},uBlend:{value:0},uFlowLength:{value:on.corridorLength},uDrift:{value:new O(...on.corridorDrift)},uNear:{value:1.2},uFar:{value:265},uCold:{value:new be("#2f6bff")},uWarm:{value:new be("#7fb6ff")},uHot:{value:new be("#ffd9a3")},uOpacity:{value:1},uHotMix:{value:0},uIntensity:{value:1.35}}),[]);return Tn(()=>{const n=tt.progress;t.uTime.value=tt.time,t.uBlend.value=vi(n,Vs("convergence",.24),Vs("convergence",.99))*1.3,t.uHotMix.value=t.uBlend.value*.8,t.uOpacity.value=1-vi(n,Vs("horizon",.16),Vs("horizon",.62)),t.uIntensity.value=1.35+Wc(n,Vs("convergence",.5),Vs("horizon",.1))*.9}),se.jsx("lineSegments",{geometry:e,frustumCulled:!1,children:se.jsx("shaderMaterial",{uniforms:t,vertexShader:qM,fragmentShader:YM,transparent:!0,depthWrite:!1,blending:dn})})}function jU({count:s}){const e=ge.useMemo(()=>{const o=on.multiverseStart+40,l=on.multiverseEnd+60;return jM({count:s,points:20,root:(c,f)=>[(f()-.5)*210,(f()-.5)*96,o-f()*150],end:(c,f)=>[(f()-.5)*260,(f()-.5)*120,o-120-f()*(l-o)],bend:c=>6+c()*26,seedOffset:5501})},[s]),t=ge.useMemo(()=>({uTime:{value:0},uBlend:{value:1.3},uFlowLength:{value:0},uDrift:{value:new O(0,0,0)},uNear:{value:2},uFar:{value:420},uCold:{value:new be(Xo[0])},uWarm:{value:new be(Xo[1])},uHot:{value:new be("#ffc48a")},uOpacity:{value:0},uHotMix:{value:.2},uIntensity:{value:1.1}}),[]),n=ge.useMemo(()=>new be(Xo[0]),[]),r=ge.useMemo(()=>new be(Xo[1]),[]);return Tn((o,l)=>{const c=tt.progress;t.uTime.value=tt.time,t.uOpacity.value=LT(vi(c,Vs("works",.35),Vs("beyond",.55))*.95);const f=NT[tt.universe-1];n.set(f?f.wire[0]:Xo[0]),r.set(f?f.wire[1]:Xo[1]);const h=1-Math.exp(-3.2*Math.max(l,1e-4));t.uCold.value.lerp(n,h),t.uWarm.value.lerp(r,h)}),se.jsx("lineSegments",{geometry:e,frustumCulled:!1,children:se.jsx("shaderMaterial",{uniforms:t,vertexShader:qM,fragmentShader:YM,transparent:!0,depthWrite:!1,blending:dn})})}const $U=`
  uniform float uTime;
  uniform float uPixelRatio;
  uniform vec2 uLensCenter;
  uniform float uLens;
  uniform float uWarp;
  uniform vec2 uPointer;
  uniform float uPull;

  attribute float aSize;
  attribute float aSeed;
  attribute float aTint;

  varying vec3 vColor;
  varying float vBright;

  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;

    // Gravitational lensing: the star's screen position is pushed away from the
    // singularity, which is what bends a background sky into a ring.
    if (gl_Position.w > 0.0 && uLens > 0.001) {
      vec2 ndc = gl_Position.xy / gl_Position.w;
      vec2 d = ndc - uLensCenter;
      float r = max(length(d), 0.0006);
      float amount = min(uLens / (r * r * 24.0 + 0.32), 0.9);
      gl_Position.xy += normalize(d) * amount * gl_Position.w;
    }

    // The cursor carries a small gravity well of its own: nearby stars lean
    // toward it and let go as it passes — restrained, never a swirl.
    if (gl_Position.w > 0.0 && uPull > 0.0001) {
      vec2 ndc = gl_Position.xy / gl_Position.w;
      vec2 d = uPointer - ndc;
      float r = max(length(d), 0.0008);
      float amount = min(uPull / (r * 6.0 + 1.0), 0.05);
      gl_Position.xy += (d / r) * amount * gl_Position.w;
    }

    // Warp: the whole sky stretches radially while falling through.
    if (gl_Position.w > 0.0 && uWarp > 0.001) {
      vec2 ndc = gl_Position.xy / gl_Position.w;
      float r = length(ndc);
      gl_Position.xy += ndc * uWarp * (0.22 + r * r) * gl_Position.w;
    }

    vec3 cold = vec3(0.60, 0.76, 1.0);
    vec3 warm = vec3(1.0, 0.80, 0.55);
    vColor = mix(mix(cold, vec3(1.0), 0.45), warm, aTint);

    float twinkle = 0.74 + 0.26 * sin(uTime * (0.7 + aSeed * 2.6) + aSeed * 41.0);
    float dist = max(-mv.z, 0.7);
    gl_PointSize = clamp(aSize * uPixelRatio * (160.0 / dist), 0.8, 18.0);
    vBright = twinkle;
  }
`,ZU=`
  uniform float uOpacity;

  varying vec3 vColor;
  varying float vBright;

  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float core = smoothstep(1.0, 0.0, d);
    float alpha = pow(core, 2.6) * vBright * uOpacity;
    if (alpha < 0.004) discard;
    gl_FragColor = vec4(vColor * alpha, alpha);
  }
`;function JU(s){const e=qr(4711),t=new Float32Array(s*3),n=new Float32Array(s),r=new Float32Array(s),o=new Float32Array(s);for(let c=0;c<s;c++){const f=e()*Math.PI*2,h=16+Math.pow(e(),2.3)*470;t[c*3]=Math.cos(f)*h,t[c*3+1]=Math.sin(f)*h*.72,t[c*3+2]=130-e()*1660,n[c]=1.05+Math.pow(e(),2.1)*3.8,r[c]=e(),o[c]=e()<.14?.55+e()*.45:e()*.12}const l=new pt;return l.setAttribute("position",new ct(t,3)),l.setAttribute("aSize",new ct(n,1)),l.setAttribute("aSeed",new ct(r,1)),l.setAttribute("aTint",new ct(o,1)),l.boundingSphere=new gn(new O(0,0,-700),2200),l}function KU({count:s}){const e=ge.useMemo(()=>JU(s),[s]),t=ge.useRef(null),n=yl(c=>c.camera),r=ge.useMemo(()=>new O(...on.core),[]),o=ge.useMemo(()=>new O,[]),l=ge.useMemo(()=>({uTime:{value:0},uPixelRatio:{value:1},uLensCenter:{value:new _e(0,0)},uLens:{value:0},uWarp:{value:0},uPointer:{value:new _e(0,0)},uPull:{value:0},uOpacity:{value:.9}}),[]);return Tn(()=>{const c=tt.progress;l.uTime.value=tt.time,l.uPixelRatio.value=Math.min(window.devicePixelRatio||1,tt.quality>.6?1.5:1),QU(c)&&(o.copy(r).project(n),l.uLensCenter.value.set(o.x,o.y)),l.uLens.value=eF(c),l.uWarp.value=tF(c);const f=tt.pointerActive&&!tt.reduced?.034:0;l.uPull.value=f*(1-l.uLens.value*.6),l.uPointer.value.set(tt.pointerX,-tt.pointerY)}),se.jsx("points",{geometry:e,frustumCulled:!1,children:se.jsx("shaderMaterial",{ref:t,uniforms:l,vertexShader:$U,fragmentShader:ZU,transparent:!0,depthWrite:!1,blending:dn})})}function QU(s){return s>Vt.horizon.start-.08&&s<Vt.passage.end+.12}function eF(s){const e=vi(s,Vt.horizon.start-.02,Vt.horizon.start+.14),t=vi(s,Vt.passage.end-.02,Vt.passage.end+.14),n=Wc(s,Vt.horizon.start,Vt.horizon.end);return e*(1-t)*(.12+n*.5)}function tF(s){return qh(s,Vt.passage.start-.02,Vt.passage.end+.03,.05,.04)*1.35}const nF=520,kg=Math.abs(on.tunnelEnd-on.tunnelStart),iF=`
  uniform float uTime;
  uniform float uSpeed;
  uniform float uLength;
  uniform float uStart;
  uniform float uStretch;
  uniform float uExpand;
  uniform float uSwirl;

  attribute float aLen;
  attribute float aT;
  attribute float aSeed;

  varying float vAlpha;
  varying float vT;

  void main() {
    float speed = uSpeed * (0.45 + aSeed);
    float base = max(position.z - uStart, 0.0);
    float z = uStart - mod(base - uTime * speed, uLength);

    // The cylinder twists as the camera falls, dragging light with it.
    float angle =
      aSeed * 6.2831853 + z * 0.02 + uTime * uSwirl * (0.3 + aSeed * 0.7);
    float radius = length(position.xy) * uExpand;

    vec3 p = vec3(cos(angle) * radius, sin(angle) * radius, z);
    p.z -= aT * aLen * (1.0 + uStretch * 9.0);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    float dist = abs(mv.z);
    vAlpha =
      smoothstep(0.7, 5.0, dist) * (1.0 - smoothstep(uLength * 0.5, uLength, dist));
    vT = aT;
  }
`,rF=`
  uniform float uOpacity;
  uniform vec3 uColor;

  varying float vAlpha;
  varying float vT;

  void main() {
    float alpha = uOpacity * vAlpha * mix(0.95, 0.12, vT);
    if (alpha < 0.004) discard;
    vec3 color = mix(vec3(1.0), uColor, vT * 0.85);
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;function sF(s){const e=qr(3391),t=new Float32Array(s*2*3),n=new Float32Array(s*2),r=new Float32Array(s*2),o=new Float32Array(s*2);let l=0;for(let f=0;f<s;f++){const h=2.4+Math.pow(e(),1.6)*13,p=e()*Math.PI*2,m=Math.cos(p)*h,g=Math.sin(p)*h,_=on.tunnelStart-Math.abs(e()*kg),y=2.5+e()*13,M=e();for(let S=0;S<2;S++){const b=l*3;t[b]=m,t[b+1]=g,t[b+2]=_,n[l]=y,r[l]=S,o[l]=M,l++}}const c=new pt;return c.setAttribute("position",new ct(t,3)),c.setAttribute("aLen",new ct(n,1)),c.setAttribute("aT",new ct(r,1)),c.setAttribute("aSeed",new ct(o,1)),c.boundingSphere=new gn(new O(0,0,(on.tunnelStart+on.tunnelEnd)/2),kg),c}function aF(){const s=ge.useRef(null),e=yl(n=>n.camera),t=ge.useMemo(()=>({uOpacity:{value:0},uColorA:{value:new be("#ffffff")},uColorB:{value:new be("#ffd9a0")}}),[]);return Tn(()=>{const n=tt.progress;t.uOpacity.value=qh(n,Vt.passage.start-.04,Vt.passage.start+.16,.06,.1);const r=40+t.uOpacity.value*420;s.current&&(s.current.quaternion.copy(e.quaternion),s.current.scale.setScalar(r))}),se.jsxs("mesh",{ref:s,position:[0,0,-262],renderOrder:3,children:[se.jsx("planeGeometry",{args:[1,1]}),se.jsx("shaderMaterial",{uniforms:t,vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = position.xy * 2.0;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform float uOpacity;
          uniform vec3 uColorA;
          uniform vec3 uColorB;
          varying vec2 vUv;
          void main() {
            float r = length(vUv);
            float core = exp(-r * r * 4.5);
            float full = smoothstep(1.35, 0.35, r);
            vec3 color = mix(uColorB, uColorA, core);
            float alpha = (core * 0.9 + full * 0.85) * uOpacity;
            if (alpha < 0.004) discard;
            gl_FragColor = vec4(color * alpha, alpha);
          }
        `,transparent:!0,depthWrite:!1,depthTest:!1,blending:dn})]})}function oF({quality:s}){const e=Math.max(140,Math.round(nF*s)),t=ge.useMemo(()=>sF(e),[e]),n=ge.useRef(null),r=ge.useMemo(()=>({uTime:{value:0},uSpeed:{value:34},uLength:{value:kg},uStart:{value:on.tunnelStart},uStretch:{value:0},uExpand:{value:1},uSwirl:{value:.55},uOpacity:{value:0},uColor:{value:new be("#bcd8ff")}}),[]);return Tn(()=>{const o=tt.progress;r.uTime.value=tt.time;const l=qh(o,Vt.passage.start-.02,Vt.passage.end+.02,.05,.05);r.uOpacity.value=l,r.uStretch.value=l,r.uExpand.value=1+l*.45,n.current&&(n.current.visible=l>.01)}),se.jsxs("group",{ref:n,visible:!1,children:[se.jsx("lineSegments",{geometry:t,frustumCulled:!1,children:se.jsx("shaderMaterial",{uniforms:r,vertexShader:iF,fragmentShader:rF,transparent:!0,depthWrite:!1,blending:dn})}),se.jsx(aF,{})]})}function lF(s){return Math.min(window.devicePixelRatio||1,s>.6?1.5:1)}function cF(s){const[e,t]=ge.useState(s),n=ge.useRef(s);return ge.useEffect(()=>{let r=0,o=0,l=performance.now(),c=0;const f=h=>{if(c=requestAnimationFrame(f),r++,o+=h-l,l=h,o<1200)return;const p=r*1e3/o;r=0,o=0,t(m=>p<40&&m>.86?.85:p>57&&m<n.current?n.current:m)};return c=requestAnimationFrame(f),()=>cancelAnimationFrame(c)},[]),e}function uF(){const s=yl(e=>e.invalidate);return ge.useEffect(()=>DT(()=>s()),[s]),null}function yF(){const s=tt.quality,e=cF(lF(s));return se.jsxs(se.Fragment,{children:[se.jsx("div",{className:"pointer-events-none fixed inset-0 z-0","aria-hidden":"true",children:se.jsxs(nU,{flat:!0,dpr:e,frameloop:tt.reduced?"demand":"always",gl:{antialias:!0,powerPreference:"high-performance",stencil:!1},camera:{position:[1.5,1.55,9.6],fov:41,near:.1,far:3400},children:[tt.reduced&&se.jsx(uF,{}),se.jsx(gU,{}),se.jsx(KU,{count:Math.max(1400,Math.round(4200*s))}),se.jsx(PU,{}),se.jsx(SU,{quality:s}),se.jsx(YU,{count:Math.max(260,Math.round(780*s))}),se.jsx(xU,{}),se.jsx(mU,{quality:s}),se.jsx(oF,{quality:s}),se.jsx(qU,{quality:s}),se.jsx(jU,{count:Math.max(160,Math.round(420*s))})]})}),se.jsxs("div",{"aria-hidden":"true",className:"pointer-events-none fixed inset-0 z-[5]",children:[se.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_45%,transparent_38%,rgba(0,0,0,0.55)_100%)]"}),se.jsx("div",{className:"absolute inset-0 opacity-[0.06] mix-blend-overlay",style:{backgroundImage:`url("${iU}")`,backgroundSize:"180px 180px"}})]})]})}export{yF as default};
