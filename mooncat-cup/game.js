(()=>{var ju=0,ch=1,Qu=2;var hh=1,ef=2,ri=3,vi=0,$t=1,St=2,Yn=0,es=1,Zn=2,uh=3,fh=4,tf=5,Ui=100,nf=101,sf=102,rf=103,of=104,af=200,lf=201,cf=202,hf=203,Ta=204,wa=205,uf=206,ff=207,df=208,pf=209,mf=210,gf=211,xf=212,vf=213,yf=214,il=0,sl=1,rl=2,ts=3,ol=4,al=5,ll=6,cl=7,dh=0,_f=1,Mf=2,Mi=0,hl=1,ul=2,fl=3,cr=4,dl=5,pl=6,ml=7;var ph=300,us=301,fs=302,gl=303,xl=304,Ro=306,Xs=1e3,Di=1001,Aa=1002,_n=1003,Ef=1004;var Co=1005;var Rn=1006,vl=1007;var Oi=1008;var $n=1009,mh=1010,gh=1011,hr=1012,yl=1013,zi=1014,Jn=1015,cn=1016,_l=1017,Ml=1018,ur=1020,xh=35902,vh=35899,yh=1021,_h=1022,On=1023,qs=1026,fr=1027,El=1028,bl=1029,Mh=1030,Sl=1031;var Tl=1033,Io=33776,Po=33777,Lo=33778,Do=33779,wl=35840,Al=35841,Rl=35842,Cl=35843,Il=36196,Pl=37492,Ll=37496,Dl=37808,Ul=37809,Nl=37810,Fl=37811,Bl=37812,Ol=37813,zl=37814,Hl=37815,kl=37816,Gl=37817,Vl=37818,Wl=37819,Xl=37820,ql=37821,Yl=36492,Zl=36494,$l=36495,Jl=36283,Kl=36284,jl=36285,Ql=36286;var Jr=2300,Ra=2301,Sa=2302,Kc=2400,jc=2401,Qc=2402;var bf=3200,Sf=3201;var Eh=0,Tf=1,Ei="",Kt="srgb",ns="srgb-linear",Kr="linear",Et="srgb";var ji=7680;var eh=519,wf=512,Af=513,Rf=514,bh=515,Cf=516,If=517,Pf=518,Lf=519,Ca=35044,Uo=35048;var Sh="300 es",Xn=2e3,jr=2001;var yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=1234567,qr=Math.PI/180,Ys=180/Math.PI;function ti(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function lt(n,e,t){return Math.max(e,Math.min(t,n))}function Th(n,e){return(n%e+e)%e}function Op(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function zp(n,e,t){return n!==e?(t-n)/(e-n):0}function Yr(n,e,t){return(1-t)*n+t*e}function Hp(n,e,t,i){return Yr(n,e,1-Math.exp(-t*i))}function kp(n,e=1){return e-Math.abs(Th(n,e*2)-e)}function Gp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Vp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Wp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Xp(n,e){return n+Math.random()*(e-n)}function qp(n){return n*(.5-Math.random())}function Yp(n){n!==void 0&&(yu=n);let e=yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zp(n){return n*qr}function $p(n){return n*Ys}function Jp(n){return(n&n-1)===0&&n!==0}function Kp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function jp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Qp(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*m,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*m,a*l);break;case"ZYZ":n.set(c*m,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var wh={DEG2RAD:qr,RAD2DEG:Ys,generateUUID:ti,clamp:lt,euclideanModulo:Th,mapLinear:Op,inverseLerp:zp,lerp:Yr,damp:Hp,pingpong:kp,smoothstep:Gp,smootherstep:Vp,randInt:Wp,randFloat:Xp,randFloatSpread:qp,seededRandom:Yp,degToRad:Zp,radToDeg:$p,isPowerOfTwo:Jp,ceilPowerOfTwo:Kp,floorPowerOfTwo:jp,setQuaternionFromProperEuler:Qp,normalize:wt,denormalize:Wn},ue=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(u!==x||c!==f||l!==d||h!==m){let g=1-a,p=c*f+l*d+h*m+u*x,M=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){let T=Math.sqrt(E),S=Math.atan2(T,p*M);g=Math.sin(g*S)/T,a=Math.sin(a*S)/T}let v=a*M;if(c=c*g+f*v,l=l*g+d*v,h=h*g+m*v,u=u*g+x*v,g===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*d-l*f,e[t+1]=c*m+h*f+l*u-a*d,e[t+2]=l*m+h*d+a*f-c*u,e[t+3]=h*m-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_u.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bc=new I,_u=new Yt,it=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],m=i[8],x=s[0],g=s[3],p=s[6],M=s[1],E=s[4],v=s[7],T=s[2],S=s[5],b=s[8];return r[0]=o*x+a*M+c*T,r[3]=o*g+a*E+c*S,r[6]=o*p+a*v+c*b,r[1]=l*x+h*M+u*T,r[4]=l*g+h*E+u*S,r[7]=l*p+h*v+u*b,r[2]=f*x+d*M+m*T,r[5]=f*g+d*E+m*S,r[8]=f*p+d*v+m*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,m=t*u+i*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*l-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Sc.makeScale(e,t)),this}rotate(e){return this.premultiply(Sc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Sc=new it;function Ah(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Df(){let n=Qr("canvas");return n.style.display="block",n}var Mu={};function Zs(n){n in Mu||(Mu[n]=!0,console.warn(n))}function Uf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Eu=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function em(){let n={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Et&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?Kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ns]:{primaries:e,whitePoint:i,transfer:Kr,toXYZ:Eu,fromXYZ:bu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:Eu,fromXYZ:bu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),n}var mt=em();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var As,Ia=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{As===void 0&&(As=Qr("canvas")),As.width=e.width,As.height=e.height;let s=As.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=As}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tm=0,$s=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Tc(s[o].image)):r.push(Tc(s[o]))}else r=Tc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Tc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ia.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nm=0,wc=new I,mn=class n extends yi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Di,s=Di,r=Rn,o=Oi,a=On,c=$n,l=n.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=ti(),this.name="",this.source=new $s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wc).x}get height(){return this.source.getSize(wc).y}get depth(){return this.source.getSize(wc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xs:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xs:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=ph;mn.DEFAULT_ANISOTROPY=1;var gt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,v=(d+1)/2,T=(p+1)/2,S=(h+f)/4,b=(u+x)/4,w=(m+g)/4;return E>v&&E>T?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=S/i,r=b/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=S/s,r=w/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=b/r,s=w/r),this.set(i,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pa=class extends yi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new mn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new $s(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends Pa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},eo=class extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var La=class extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ni=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$o.copy(i.boundingBox)),$o.applyMatrix4(e.matrixWorld),this.union($o)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),Jo.subVectors(this.max,Ur),Rs.subVectors(e.a,Ur),Cs.subVectors(e.b,Ur),Is.subVectors(e.c,Ur),Ai.subVectors(Cs,Rs),Ri.subVectors(Is,Cs),Zi.subVectors(Rs,Is);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Zi.z,Zi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Zi.z,0,-Zi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Zi.y,Zi.x,0];return!Ac(t,Rs,Cs,Is,Jo)||(t=[1,0,0,0,1,0,0,0,1],!Ac(t,Rs,Cs,Is,Jo))?!1:(Ko.crossVectors(Ai,Ri),t=[Ko.x,Ko.y,Ko.z],Ac(t,Rs,Cs,Is,Jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ui=[new I,new I,new I,new I,new I,new I,new I,new I],kn=new I,$o=new ni,Rs=new I,Cs=new I,Is=new I,Ai=new I,Ri=new I,Zi=new I,Ur=new I,Jo=new I,Ko=new I,$i=new I;function Ac(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){$i.fromArray(n,r);let a=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),c=e.dot($i),l=t.dot($i),h=i.dot($i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var im=new ni,Nr=new I,Rc=new I,ii=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):im.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);let t=Nr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Nr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(Rc)),this.expandByPoint(Nr.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fi=new I,Cc=new I,jo=new I,Ci=new I,Ic=new I,Qo=new I,Pc=new I,Js=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Cc.copy(e).add(t).multiplyScalar(.5),jo.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Cc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(jo),a=Ci.dot(this.direction),c=-Ci.dot(jo),l=Ci.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*c-a,f=o*a-c,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Cc).addScaledVector(jo,f),d}intersectSphere(e,t){fi.subVectors(e.center,this.origin);let i=fi.dot(this.direction),s=fi.dot(fi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,i,s,r){Ic.subVectors(t,e),Qo.subVectors(i,e),Pc.crossVectors(Ic,Qo);let o=this.direction.dot(Pc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);let c=a*this.direction.dot(Qo.crossVectors(Ci,Qo));if(c<0)return null;let l=a*this.direction.dot(Ic.cross(Ci));if(l<0||c+l>o)return null;let h=-a*Ci.dot(Pc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,f,d,m,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,f,d,m,x,g)}set(e,t,i,s,r,o,a,c,l,h,u,f,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+m*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,m=l*h,x=l*u;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,m=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=c*h,t[4]=m*l-d,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+m,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,d=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sm,e,rm)}lookAt(e,t,i){let s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ii.crossVectors(i,wn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ii.crossVectors(i,wn)),Ii.normalize(),ea.crossVectors(wn,Ii),s[0]=Ii.x,s[4]=ea.x,s[8]=wn.x,s[1]=Ii.y,s[5]=ea.y,s[9]=wn.y,s[2]=Ii.z,s[6]=ea.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],m=i[2],x=i[6],g=i[10],p=i[14],M=i[3],E=i[7],v=i[11],T=i[15],S=s[0],b=s[4],w=s[8],y=s[12],_=s[1],C=s[5],U=s[9],L=s[13],z=s[2],G=s[6],B=s[10],Q=s[14],O=s[3],J=s[7],re=s[11],me=s[15];return r[0]=o*S+a*_+c*z+l*O,r[4]=o*b+a*C+c*G+l*J,r[8]=o*w+a*U+c*B+l*re,r[12]=o*y+a*L+c*Q+l*me,r[1]=h*S+u*_+f*z+d*O,r[5]=h*b+u*C+f*G+d*J,r[9]=h*w+u*U+f*B+d*re,r[13]=h*y+u*L+f*Q+d*me,r[2]=m*S+x*_+g*z+p*O,r[6]=m*b+x*C+g*G+p*J,r[10]=m*w+x*U+g*B+p*re,r[14]=m*y+x*L+g*Q+p*me,r[3]=M*S+E*_+v*z+T*O,r[7]=M*b+E*C+v*G+T*J,r[11]=M*w+E*U+v*B+T*re,r[15]=M*y+E*L+v*Q+T*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*d-i*c*d)+x*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+g*(+t*l*u-t*a*d-r*o*u+i*o*d+r*a*h-i*l*h)+p*(-s*a*h-t*c*u+t*a*f+s*o*u-i*o*f+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],M=u*g*l-x*f*l+x*c*d-a*g*d-u*c*p+a*f*p,E=m*f*l-h*g*l-m*c*d+o*g*d+h*c*p-o*f*p,v=h*x*l-m*u*l+m*a*d-o*x*d-h*a*p+o*u*p,T=m*u*c-h*x*c-m*a*f+o*x*f+h*a*g-o*u*g,S=t*M+i*E+s*v+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/S;return e[0]=M*b,e[1]=(x*f*r-u*g*r-x*s*d+i*g*d+u*s*p-i*f*p)*b,e[2]=(a*g*r-x*c*r+x*s*l-i*g*l-a*s*p+i*c*p)*b,e[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*d-i*c*d)*b,e[4]=E*b,e[5]=(h*g*r-m*f*r+m*s*d-t*g*d-h*s*p+t*f*p)*b,e[6]=(m*c*r-o*g*r-m*s*l+t*g*l+o*s*p-t*c*p)*b,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*b,e[8]=v*b,e[9]=(m*u*r-h*x*r-m*i*d+t*x*d+h*i*p-t*u*p)*b,e[10]=(o*x*r-m*a*r+m*i*l-t*x*l-o*i*p+t*a*p)*b,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*d-t*a*d)*b,e[12]=T*b,e[13]=(h*x*s-m*u*s+m*i*f-t*x*f-h*i*g+t*u*g)*b,e[14]=(m*a*s-o*x*s-m*i*c+t*x*c+o*i*g-t*a*g)*b,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*f+t*a*f)*b,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,m=r*u,x=o*h,g=o*u,p=a*u,M=c*l,E=c*h,v=c*u,T=i.x,S=i.y,b=i.z;return s[0]=(1-(x+p))*T,s[1]=(d+v)*T,s[2]=(m-E)*T,s[3]=0,s[4]=(d-v)*S,s[5]=(1-(f+p))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(m+E)*b,s[9]=(g-M)*b,s[10]=(1-(f+x))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ps.set(s[0],s[1],s[2]).length(),o=Ps.set(s[4],s[5],s[6]).length(),a=Ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);let l=1/r,h=1/o,u=1/a;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,t.setFromRotationMatrix(Gn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Xn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===Xn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===jr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Xn,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===Xn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===jr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ps=new I,Gn=new et,sm=new I(0,0,0),rm=new I(1,1,1),Ii=new I,ea=new I,wn=new I,Su=new et,Tu=new Yt,rn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Su,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var to=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},om=0,wu=new I,Ls=new Yt,di=new et,ta=new I,Fr=new I,am=new I,lm=new Yt,Au=new I(1,0,0),Ru=new I(0,1,0),Cu=new I(0,0,1),Iu={type:"added"},cm={type:"removed"},Ds={type:"childadded",child:null},Lc={type:"childremoved",child:null},Qt=class n extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new rn,i=new Yt,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new it}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(Ru,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return wu.copy(e).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(Ru,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ta.copy(e):ta.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Fr,ta,this.up):di.lookAt(ta,Fr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(di),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Iu),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cm),Lc.child=e,this.dispatchEvent(Lc),Lc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Iu),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,am),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,lm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Qt.DEFAULT_UP=new I(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new I,pi=new I,Dc=new I,mi=new I,Us=new I,Ns=new I,Pu=new I,Uc=new I,Nc=new I,Fc=new I,Bc=new gt,Oc=new gt,zc=new gt,gi=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Vn.subVectors(e,t),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Vn.subVectors(s,t),pi.subVectors(i,t),Dc.subVectors(e,t);let o=Vn.dot(Vn),a=Vn.dot(pi),c=Vn.dot(Dc),l=pi.dot(pi),h=pi.dot(Dc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mi.x),c.addScaledVector(o,mi.y),c.addScaledVector(a,mi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Bc.setScalar(0),Oc.setScalar(0),zc.setScalar(0),Bc.fromBufferAttribute(e,t),Oc.fromBufferAttribute(e,i),zc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Bc,r.x),o.addScaledVector(Oc,r.y),o.addScaledVector(zc,r.z),o}static isFrontFacing(e,t,i,s){return Vn.subVectors(i,t),pi.subVectors(e,t),Vn.cross(pi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Vn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Us.subVectors(s,i),Ns.subVectors(r,i),Uc.subVectors(e,i);let c=Us.dot(Uc),l=Ns.dot(Uc);if(c<=0&&l<=0)return t.copy(i);Nc.subVectors(e,s);let h=Us.dot(Nc),u=Ns.dot(Nc);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Us,o);Fc.subVectors(e,r);let d=Us.dot(Fc),m=Ns.dot(Fc);if(m>=0&&d<=m)return t.copy(r);let x=d*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(Ns,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Pu.subVectors(r,s),a=(u-h)/(u-h+(d-m)),t.copy(s).addScaledVector(Pu,a);let p=1/(g+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Us,o).addScaledVector(Ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},na={h:0,s:0,l:0};function Hc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ee=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=mt.workingColorSpace){if(e=Th(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Hc(o,r,e+1/3),this.g=Hc(o,r,e),this.b=Hc(o,r,e-1/3)}return mt.colorSpaceToWorking(this,s),this}setStyle(e,t=Kt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let i=Nf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return mt.workingToColorSpace(ln.copy(this),e),Math.round(lt(ln.r*255,0,255))*65536+Math.round(lt(ln.g*255,0,255))*256+Math.round(lt(ln.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(ln.copy(this),t);let i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Kt){mt.workingToColorSpace(ln.copy(this),e);let t=ln.r,i=ln.g,s=ln.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(na);let i=Yr(Pi.h,na.h,t),s=Yr(Pi.s,na.s,t),r=Yr(Pi.l,na.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Ee;Ee.NAMES=Nf;var hm=0,qn=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=es,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=wa,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ta&&(i.blendSrc=this.blendSrc),this.blendDst!==wa&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},xt=class extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var qt=new I,ia=new ue,um=0,Ot=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:um++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ca,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ca&&(e.usage=this.usage),e}};var no=class extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var io=class extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ye=class extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}},fm=0,Nn=new et,kc=new Qt,Fs=new I,An=new ni,Br=new ni,sn=new I,ut=class n extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ah(e)?io:no)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(An.min,Br.min),An.expandByPoint(sn),sn.addVectors(An.max,Br.max),An.expandByPoint(sn)):(An.expandByPoint(Br.min),An.expandByPoint(Br.max))}An.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)sn.fromBufferAttribute(a,l),c&&(Fs.fromBufferAttribute(e,l),sn.add(Fs)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<i.count;w++)a[w]=new I,c[w]=new I;let l=new I,h=new I,u=new I,f=new ue,d=new ue,m=new ue,x=new I,g=new I;function p(w,y,_){l.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,_),f.fromBufferAttribute(r,w),d.fromBufferAttribute(r,y),m.fromBufferAttribute(r,_),h.sub(l),u.sub(l),d.sub(f),m.sub(f);let C=1/(d.x*m.y-m.x*d.y);isFinite(C)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(C),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(C),a[w].add(x),a[y].add(x),a[_].add(x),c[w].add(g),c[y].add(g),c[_].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let w=0,y=M.length;w<y;++w){let _=M[w],C=_.start,U=_.count;for(let L=C,z=C+U;L<z;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let E=new I,v=new I,T=new I,S=new I;function b(w){T.fromBufferAttribute(s,w),S.copy(T);let y=a[w];E.copy(y),E.sub(T.multiplyScalar(T.dot(y))).normalize(),v.crossVectors(S,y);let C=v.dot(c[w])<0?-1:1;o.setXYZW(w,E.x,E.y,E.z,C)}for(let w=0,y=M.length;w<y;++w){let _=M[w],C=_.start,U=_.count;for(let L=C,z=C+U;L<z;L+=3)b(e.getX(L+0)),b(e.getX(L+1)),b(e.getX(L+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),a.add(h),c.add(h),l.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new Ot(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lu=new et,Ji=new Js,sa=new ii,Du=new I,ra=new I,oa=new I,aa=new I,Gc=new I,la=new I,Uu=new I,ca=new I,W=class extends Qt{constructor(e=new ut,t=new xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){la.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Gc.fromBufferAttribute(u,e),o?la.addScaledVector(Gc,h):la.addScaledVector(Gc.sub(t),h))}t.add(la)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!(sa.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(sa,Du)===null||Ji.origin.distanceToSquared(Du)>(e.far-e.near)**2))&&(Lu.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(Lu),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),E=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,T=E;v<T;v+=3){let S=a.getX(v),b=a.getX(v+1),w=a.getX(v+2);s=ha(this,p,e,i,l,h,u,S,b,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let M=a.getX(g),E=a.getX(g+1),v=a.getX(g+2);s=ha(this,o,e,i,l,h,u,M,E,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),E=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,T=E;v<T;v+=3){let S=v,b=v+1,w=v+2;s=ha(this,p,e,i,l,h,u,S,b,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let M=g,E=g+1,v=g+2;s=ha(this,o,e,i,l,h,u,M,E,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function dm(n,e,t,i,s,r,o,a){let c;if(e.side===$t?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===vi,a),c===null)return null;ca.copy(a),ca.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(ca);return l<t.near||l>t.far?null:{distance:l,point:ca.clone(),object:n}}function ha(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ra),n.getVertexPosition(c,oa),n.getVertexPosition(l,aa);let h=dm(n,e,t,i,ra,oa,aa,Uu);if(h){let u=new I;gi.getBarycoord(Uu,ra,oa,aa,u),s&&(h.uv=gi.getInterpolatedAttribute(s,a,c,l,u,new ue)),r&&(h.uv1=gi.getInterpolatedAttribute(r,a,c,l,u,new ue)),o&&(h.normal=gi.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new I,materialIndex:0};gi.getNormal(ra,oa,aa,f.normal),h.face=f,h.barycoord=u}return h}var Ge=class n extends ut{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function m(x,g,p,M,E,v,T,S,b,w,y){let _=v/b,C=T/w,U=v/2,L=T/2,z=S/2,G=b+1,B=w+1,Q=0,O=0,J=new I;for(let re=0;re<B;re++){let me=re*C-L;for(let D=0;D<G;D++){let q=D*_-U;J[x]=q*M,J[g]=me*E,J[p]=z,l.push(J.x,J.y,J.z),J[x]=0,J[g]=0,J[p]=S>0?1:-1,h.push(J.x,J.y,J.z),u.push(D/b),u.push(1-re/w),Q+=1}}for(let re=0;re<w;re++)for(let me=0;me<b;me++){let D=f+me+G*re,q=f+me+G*(re+1),te=f+(me+1)+G*(re+1),ce=f+(me+1)+G*re;c.push(D,q,ce),c.push(q,te,ce),O+=6}a.addGroup(d,O,y),d+=O,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ds(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function hn(n){let e={};for(let t=0;t<n.length;t++){let i=ds(n[t]);for(let s in i)e[s]=i[s]}return e}function pm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var bi={clone:ds,merge:hn},mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,At=class extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mm,this.fragmentShader=gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=pm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},so=class extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new I,Nu=new ue,Fu=new ue,jt=class extends so{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Nu,Fu),t.subVectors(Fu,Nu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bs=-90,Os=1,Da=class extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(Bs,Os,e,t);s.layers=this.layers,this.add(s);let r=new jt(Bs,Os,e,t);r.layers=this.layers,this.add(r);let o=new jt(Bs,Os,e,t);o.layers=this.layers,this.add(o);let a=new jt(Bs,Os,e,t);a.layers=this.layers,this.add(a);let c=new jt(Bs,Os,e,t);c.layers=this.layers,this.add(c);let l=new jt(Bs,Os,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},ro=class extends mn{constructor(e=[],t=us,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ua=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ro(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ge(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Yn});r.uniforms.tEquirect.value=t;let o=new W(s,r),a=t.minFilter;return t.minFilter===Oi&&(t.minFilter=Rn),new Da(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},ke=class extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},xm={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ke;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},oo=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ee(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var js=class extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ao=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ca,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},pn=new I,Qs=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ni=class extends qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zs,Or=new I,Hs=new I,ks=new I,Gs=new ue,zr=new ue,Ff=new et,ua=new I,Hr=new I,fa=new I,Bu=new ue,Vc=new ue,Ou=new ue,is=class extends Qt{constructor(e=new Ni){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new ut;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ao(t,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new Qs(i,3,0,!1)),zs.setAttribute("uv",new Qs(i,2,3,!1))}this.geometry=zs,this.material=e,this.center=new ue(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),Ff.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-ks.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;da(ua.set(-.5,-.5,0),ks,o,Hs,s,r),da(Hr.set(.5,-.5,0),ks,o,Hs,s,r),da(fa.set(.5,.5,0),ks,o,Hs,s,r),Bu.set(0,0),Vc.set(1,0),Ou.set(1,1);let a=e.ray.intersectTriangle(ua,Hr,fa,!1,Or);if(a===null&&(da(Hr.set(-.5,.5,0),ks,o,Hs,s,r),Vc.set(0,1),a=e.ray.intersectTriangle(ua,fa,Hr,!1,Or),a===null))return;let c=e.ray.origin.distanceTo(Or);c<e.near||c>e.far||t.push({distance:c,point:Or.clone(),uv:gi.getInterpolation(Or,ua,Hr,fa,Bu,Vc,Ou,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function da(n,e,t,i,s,r){Gs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(zr.x=r*Gs.x-s*Gs.y,zr.y=s*Gs.x+r*Gs.y):zr.copy(Gs),n.copy(e),n.x+=zr.x,n.y+=zr.y,n.applyMatrix4(Ff)}var Na=class extends mn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=_n,h=_n,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class extends Ot{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vs=new et,zu=new et,pa=[],Hu=new ni,vm=new et,kr=new W,Gr=new ii,gn=class extends W{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,vm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),Hu.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(Hu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),Gr.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(i),e.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vs),zu.multiplyMatrices(i,Vs),kr.matrixWorld=zu,kr.raycast(e,pa);for(let o=0,a=pa.length;o<a;o++){let c=pa[o];c.instanceId=r,c.object=this,t.push(c)}pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Na(new Float32Array(s*this.count),s,this.count,El,Jn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Wc=new I,ym=new I,_m=new it,Fn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Wc.subVectors(i,t).cross(ym.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Wc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||_m.getNormalMatrix(e),s=this.coplanarPoint(Wc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ki=new ii,Mm=new ue(.5,.5),ma=new I,tr=class{constructor(e=new Fn,t=new Fn,i=new Fn,s=new Fn,r=new Fn,o=new Fn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],M=r[12],E=r[13],v=r[14],T=r[15];if(s[0].setComponents(l-o,d-h,p-m,T-M).normalize(),s[1].setComponents(l+o,d+h,p+m,T+M).normalize(),s[2].setComponents(l+a,d+u,p+x,T+E).normalize(),s[3].setComponents(l-a,d-u,p-x,T-E).normalize(),i)s[4].setComponents(c,f,g,v).normalize(),s[5].setComponents(l-c,d-f,p-g,T-v).normalize();else if(s[4].setComponents(l-c,d-f,p-g,T-v).normalize(),t===Xn)s[5].setComponents(l+c,d+f,p+g,T+v).normalize();else if(t===jr)s[5].setComponents(c,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){Ki.center.set(0,0,0);let t=Mm.distanceTo(e.center);return Ki.radius=.7071067811865476+t,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ma.x=s.normal.x>0?e.max.x:e.min.x,ma.y=s.normal.y>0?e.max.y:e.min.y,ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var nr=class extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fa=new I,Ba=new I,ku=new et,Vr=new Js,ga=new ii,Xc=new I,Gu=new I,lo=class extends Qt{constructor(e=new ut,t=new nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Fa.fromBufferAttribute(t,s-1),Ba.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Fa.distanceTo(Ba);e.setAttribute("lineDistance",new Ye(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;ku.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(ku);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=l){let p=h.getX(x),M=h.getX(x+1),E=xa(this,e,Vr,c,p,M,x);E&&t.push(E)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(d),p=xa(this,e,Vr,c,x,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=l){let p=xa(this,e,Vr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=xa(this,e,Vr,c,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xa(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Fa.fromBufferAttribute(a,s),Ba.fromBufferAttribute(a,r),t.distanceSqToSegment(Fa,Ba,Xc,Gu)>i)return;Xc.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Xc);if(!(l<e.near||l>e.far))return{distance:l,point:Gu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Oa=class extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vu=new et,th=new Js,va=new ii,ya=new I,co=class extends Qt{constructor(e=new ut,t=new Oa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(s),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;Vu.copy(s).invert(),th.copy(e.ray).applyMatrix4(Vu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=l.getX(m);ya.fromBufferAttribute(u,g),Wu(ya,g,c,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)ya.fromBufferAttribute(u,m),Wu(ya,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wu(n,e,t,i,s,r,o){let a=th.distanceSqToPoint(n);if(a<t){let c=new I;th.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ss=class extends mn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ho=class extends mn{constructor(e,t,i=zi,s,r,o,a=_n,c=_n,l,h=qs,u=1){if(h!==qs&&h!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},uo=class extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},si=class n extends ut{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,m=i*2+r,x=s+1,g=new I,p=new I;for(let M=0;M<=m;M++){let E=0,v=0,T=0,S=0;if(M<=i){let y=M/i,_=y*Math.PI/2;v=-h-e*Math.cos(_),T=e*Math.sin(_),S=-e*Math.cos(_),E=y*u}else if(M<=i+r){let y=(M-i)/r;v=-h+y*t,T=e,S=0,E=u+y*f}else{let y=(M-i-r)/i,_=y*Math.PI/2;v=h+e*Math.sin(_),T=e*Math.cos(_),S=e*Math.sin(_),E=u+f+y*u}let b=Math.max(0,Math.min(1,E/d)),w=0;M===0?w=.5/s:M===m&&(w=-.5/s);for(let y=0;y<=s;y++){let _=y/s,C=_*Math.PI*2,U=Math.sin(C),L=Math.cos(C);p.x=-T*L,p.y=v,p.z=T*U,a.push(p.x,p.y,p.z),g.set(-T*L,S,T*U),g.normalize(),c.push(g.x,g.y,g.z),l.push(_+w,b)}if(M>0){let y=(M-1)*x;for(let _=0;_<s;_++){let C=y+_,U=y+_+1,L=M*x+_,z=M*x+_+1;o.push(C,U,L),o.push(U,z,L)}}}this.setIndex(o),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},_i=class n extends ut{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new I,h=new ue;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(a,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Je=class n extends ut{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,x=[],g=i/2,p=0;M(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(d,2));function M(){let v=new I,T=new I,S=0,b=(t-e)/i;for(let w=0;w<=r;w++){let y=[],_=w/r,C=_*(t-e)+e;for(let U=0;U<=s;U++){let L=U/s,z=L*c+a,G=Math.sin(z),B=Math.cos(z);T.x=C*G,T.y=-_*i+g,T.z=C*B,u.push(T.x,T.y,T.z),v.set(G,b,B).normalize(),f.push(v.x,v.y,v.z),d.push(L,1-_),y.push(m++)}x.push(y)}for(let w=0;w<s;w++)for(let y=0;y<r;y++){let _=x[y][w],C=x[y+1][w],U=x[y+1][w+1],L=x[y][w+1];(e>0||y!==0)&&(h.push(_,C,L),S+=3),(t>0||y!==r-1)&&(h.push(C,U,L),S+=3)}l.addGroup(p,S,0),p+=S}function E(v){let T=m,S=new ue,b=new I,w=0,y=v===!0?e:t,_=v===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,g*_,0),f.push(0,_,0),d.push(.5,.5),m++;let C=m;for(let U=0;U<=s;U++){let z=U/s*c+a,G=Math.cos(z),B=Math.sin(z);b.x=y*B,b.y=g*_,b.z=y*G,u.push(b.x,b.y,b.z),f.push(0,_,0),S.x=G*.5+.5,S.y=B*.5*_+.5,d.push(S.x,S.y),m++}for(let U=0;U<s;U++){let L=T+U,z=C+U;v===!0?h.push(z,z+1,L):h.push(z+1,z,L),w+=3}l.addGroup(p,w,v===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xn=class n extends Je{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fo=class n extends ut{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let E=new I,v=new I,T=new I;for(let S=0;S<t.length;S+=3)d(t[S+0],E),d(t[S+1],v),d(t[S+2],T),c(E,v,T,M)}function c(M,E,v,T){let S=T+1,b=[];for(let w=0;w<=S;w++){b[w]=[];let y=M.clone().lerp(v,w/S),_=E.clone().lerp(v,w/S),C=S-w;for(let U=0;U<=C;U++)U===0&&w===S?b[w][U]=y:b[w][U]=y.clone().lerp(_,U/C)}for(let w=0;w<S;w++)for(let y=0;y<2*(S-w)-1;y++){let _=Math.floor(y/2);y%2===0?(f(b[w][_+1]),f(b[w+1][_]),f(b[w][_])):(f(b[w][_+1]),f(b[w+1][_+1]),f(b[w+1][_]))}}function l(M){let E=new I;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(M),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){let M=new I;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];let v=g(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;o.push(v,1-T)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){let E=o[M+0],v=o[M+2],T=o[M+4],S=Math.max(E,v,T),b=Math.min(E,v,T);S>.9&&b<.1&&(E<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,E){let v=M*3;E.x=e[v+0],E.y=e[v+1],E.z=e[v+2]}function m(){let M=new I,E=new I,v=new I,T=new I,S=new ue,b=new ue,w=new ue;for(let y=0,_=0;y<r.length;y+=9,_+=6){M.set(r[y+0],r[y+1],r[y+2]),E.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),S.set(o[_+0],o[_+1]),b.set(o[_+2],o[_+3]),w.set(o[_+4],o[_+5]),T.copy(M).add(E).add(v).divideScalar(3);let C=g(T);x(S,_+0,M,C),x(b,_+2,E,C),x(w,_+4,v,C)}}function x(M,E,v,T){T<0&&M.x===1&&(o[E]=M.x-1),v.x===0&&v.z===0&&(o[E]=T/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ue:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],r=[],o=[],a=new I,c=new et;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(lt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(lt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ir=class extends Cn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ue){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},za=class extends ir{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ch(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var _a=new I,qc=new Ch,Yc=new Ch,Zc=new Ch,sr=class extends Cn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(_a.subVectors(s[0],s[1]).add(s[0]),l=_a);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(_a.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_a),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),qc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,x,g),Yc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,x,g),Zc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(qc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Yc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Zc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(qc.calc(c),Yc.calc(c),Zc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Xu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Em(n,e){let t=1-n;return t*t*e}function bm(n,e){return 2*(1-n)*n*e}function Sm(n,e){return n*n*e}function Zr(n,e,t,i){return Em(n,e)+bm(n,t)+Sm(n,i)}function Tm(n,e){let t=1-n;return t*t*t*e}function wm(n,e){let t=1-n;return 3*t*t*n*e}function Am(n,e){return 3*(1-n)*n*n*e}function Rm(n,e){return n*n*n*e}function $r(n,e,t,i,s){return Tm(n,e)+wm(n,t)+Am(n,i)+Rm(n,s)}var po=class extends Cn{constructor(e=new ue,t=new ue,i=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ue){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($r(e,s.x,r.x,o.x,a.x),$r(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ha=class extends Cn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($r(e,s.x,r.x,o.x,a.x),$r(e,s.y,r.y,o.y,a.y),$r(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mo=class extends Cn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends Cn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},go=class extends Cn{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Zr(e,s.x,r.x,o.x),Zr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends Cn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Zr(e,s.x,r.x,o.x),Zr(e,s.y,r.y,o.y),Zr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo=class extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Xu(a,c.x,l.x,h.x,u.x),Xu(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ue().fromArray(s))}return this}},nh=Object.freeze({__proto__:null,ArcCurve:za,CatmullRomCurve3:sr,CubicBezierCurve:po,CubicBezierCurve3:Ha,EllipseCurve:ir,LineCurve:mo,LineCurve3:ka,QuadraticBezierCurve:go,QuadraticBezierCurve3:Ga,SplineCurve:xo}),Va=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new nh[s.type]().fromJSON(s))}return this}},rs=class extends Va{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new mo(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new go(this.currentPoint.clone(),new ue(e,t),new ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new po(this.currentPoint.clone(),new ue(e,t),new ue(i,s),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new xo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new ir(e,t,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},os=class extends rs{constructor(e){super(e),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new rs().fromJSON(s))}return this}};function Cm(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Bf(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=Um(n,e,r,t)),n.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){let d=n[f],m=n[f+1];d<a&&(a=d),m<c&&(c=m),d>h&&(h=d),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return vo(r,o,t,a,c,l,0),o}function Bf(n,e,t,i,s){let r;if(s===Xm(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=qu(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=qu(o/i|0,n[o],n[o+1],r);return r&&rr(r,r.next)&&(_o(r),r=r.next),r}function as(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(rr(t,t.next)||Bt(t.prev,t,t.next)===0)){if(_o(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function vo(n,e,t,i,s,r,o){if(!n)return;!o&&r&&zm(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?Pm(n,i,s,r):Im(n)){e.push(c.i,n.i,l.i),_o(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Lm(as(n),e),vo(n,e,t,i,s,r,2)):o===2&&Dm(n,e,t,i,s,r):vo(as(n),e,t,i,s,r,1);break}}}function Im(n){let e=n.prev,t=n,i=n.next;if(Bt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Xr(s,a,r,c,o,l,m.x,m.y)&&Bt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Pm(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Bt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),m=Math.min(h,u,f),x=Math.max(a,c,l),g=Math.max(h,u,f),p=ih(d,m,e,t,i),M=ih(x,g,e,t,i),E=n.prevZ,v=n.nextZ;for(;E&&E.z>=p&&v&&v.z<=M;){if(E.x>=d&&E.x<=x&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&Xr(a,h,c,u,l,f,E.x,E.y)&&Bt(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Xr(a,h,c,u,l,f,v.x,v.y)&&Bt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=p;){if(E.x>=d&&E.x<=x&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&Xr(a,h,c,u,l,f,E.x,E.y)&&Bt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Xr(a,h,c,u,l,f,v.x,v.y)&&Bt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Lm(n,e){let t=n;do{let i=t.prev,s=t.next.next;!rr(i,s)&&zf(i,t,t.next,s)&&yo(i,s)&&yo(s,i)&&(e.push(i.i,t.i,s.i),_o(t),_o(t.next),t=n=s),t=t.next}while(t!==n);return as(t)}function Dm(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gm(o,a)){let c=Hf(o,a);o=as(o,o.next),c=as(c,c.next),vo(o,e,t,i,s,r,0),vo(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Um(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=Bf(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(km(l))}s.sort(Nm);for(let r=0;r<s.length;r++)t=Fm(s[r],t);return t}function Nm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Fm(n,e){let t=Bm(n,e);if(!t)return e;let i=Hf(t,n);return as(i,i.next),as(t,t.next)}function Bm(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(rr(n,t))return t;do{if(rr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Of(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);yo(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Om(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Om(n,e){return Bt(n.prev,n,e.prev)<0&&Bt(e.next,n,n.next)<0}function zm(n,e,t,i){let s=n;do s.z===0&&(s.z=ih(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Hm(s)}function Hm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function ih(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function km(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Of(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Xr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Of(n,e,t,i,s,r,o,a)}function Gm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Vm(n,e)&&(yo(n,e)&&yo(e,n)&&Wm(n,e)&&(Bt(n.prev,n,e.prev)||Bt(n,e.prev,e))||rr(n,e)&&Bt(n.prev,n,n.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function rr(n,e){return n.x===e.x&&n.y===e.y}function zf(n,e,t,i){let s=Ea(Bt(n,e,t)),r=Ea(Bt(n,e,i)),o=Ea(Bt(t,i,n)),a=Ea(Bt(t,i,e));return!!(s!==r&&o!==a||s===0&&Ma(n,t,e)||r===0&&Ma(n,i,e)||o===0&&Ma(t,n,i)||a===0&&Ma(t,e,i))}function Ma(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ea(n){return n>0?1:n<0?-1:0}function Vm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&zf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function yo(n,e){return Bt(n.prev,n,n.next)<0?Bt(n,e,n.next)>=0&&Bt(n,n.prev,e)>=0:Bt(n,e,n.prev)<0||Bt(n,n.next,e)<0}function Wm(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Hf(n,e){let t=sh(n.i,n.x,n.y),i=sh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function qu(n,e,t,i){let s=sh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function _o(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function sh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xm(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var rh=class{static triangulate(e,t,i=2){return Cm(e,t,i)}},Qi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Yu(e),Zu(i,e);let o=e.length;t.forEach(Yu);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Zu(i,t[c]);let a=rh.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Yu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Zu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var or=class n extends ut{constructor(e=new os([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Ye(s,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:qm,E,v=!1,T,S,b,w;p&&(E=p.getSpacedPoints(h),v=!0,f=!1,T=p.computeFrenetFrames(h,!1),S=new I,b=new I,w=new I),f||(g=0,d=0,m=0,x=0);let y=a.extractPoints(l),_=y.shape,C=y.holes;if(!Qi.isClockWise(_)){_=_.reverse();for(let de=0,le=C.length;de<le;de++){let oe=C[de];Qi.isClockWise(oe)&&(C[de]=oe.reverse())}}function L(de){let oe=10000000000000001e-36,ae=de[0];for(let Se=1;Se<=de.length;Se++){let ge=Se%de.length,Te=de[ge],tt=Te.x-ae.x,Qe=Te.y-ae.y,P=tt*tt+Qe*Qe,A=Math.max(Math.abs(Te.x),Math.abs(Te.y),Math.abs(ae.x),Math.abs(ae.y)),$=oe*A*A;if(P<=$){de.splice(ge,1),Se--;continue}ae=Te}}L(_),C.forEach(L);let z=C.length,G=_;for(let de=0;de<z;de++){let le=C[de];_=_.concat(le)}function B(de,le,oe){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),de.clone().addScaledVector(le,oe)}let Q=_.length;function O(de,le,oe){let ae,Se,ge,Te=de.x-le.x,tt=de.y-le.y,Qe=oe.x-de.x,P=oe.y-de.y,A=Te*Te+tt*tt,$=Te*P-tt*Qe;if(Math.abs($)>Number.EPSILON){let ne=Math.sqrt(A),pe=Math.sqrt(Qe*Qe+P*P),ie=le.x-tt/ne,Oe=le.y+Te/ne,be=oe.x-P/pe,Ne=oe.y+Qe/pe,Fe=((be-ie)*P-(Ne-Oe)*Qe)/(Te*P-tt*Qe);ae=ie+Te*Fe-de.x,Se=Oe+tt*Fe-de.y;let xe=ae*ae+Se*Se;if(xe<=2)return new ue(ae,Se);ge=Math.sqrt(xe/2)}else{let ne=!1;Te>Number.EPSILON?Qe>Number.EPSILON&&(ne=!0):Te<-Number.EPSILON?Qe<-Number.EPSILON&&(ne=!0):Math.sign(tt)===Math.sign(P)&&(ne=!0),ne?(ae=-tt,Se=Te,ge=Math.sqrt(A)):(ae=Te,Se=tt,ge=Math.sqrt(A/2))}return new ue(ae/ge,Se/ge)}let J=[];for(let de=0,le=G.length,oe=le-1,ae=de+1;de<le;de++,oe++,ae++)oe===le&&(oe=0),ae===le&&(ae=0),J[de]=O(G[de],G[oe],G[ae]);let re=[],me,D=J.concat();for(let de=0,le=z;de<le;de++){let oe=C[de];me=[];for(let ae=0,Se=oe.length,ge=Se-1,Te=ae+1;ae<Se;ae++,ge++,Te++)ge===Se&&(ge=0),Te===Se&&(Te=0),me[ae]=O(oe[ae],oe[ge],oe[Te]);re.push(me),D=D.concat(me)}let q;if(g===0)q=Qi.triangulateShape(G,C);else{let de=[],le=[];for(let oe=0;oe<g;oe++){let ae=oe/g,Se=d*Math.cos(ae*Math.PI/2),ge=m*Math.sin(ae*Math.PI/2)+x;for(let Te=0,tt=G.length;Te<tt;Te++){let Qe=B(G[Te],J[Te],ge);Z(Qe.x,Qe.y,-Se),ae===0&&de.push(Qe)}for(let Te=0,tt=z;Te<tt;Te++){let Qe=C[Te];me=re[Te];let P=[];for(let A=0,$=Qe.length;A<$;A++){let ne=B(Qe[A],me[A],ge);Z(ne.x,ne.y,-Se),ae===0&&P.push(ne)}ae===0&&le.push(P)}}q=Qi.triangulateShape(de,le)}let te=q.length,ce=m+x;for(let de=0;de<Q;de++){let le=f?B(_[de],D[de],ce):_[de];v?(b.copy(T.normals[0]).multiplyScalar(le.x),S.copy(T.binormals[0]).multiplyScalar(le.y),w.copy(E[0]).add(b).add(S),Z(w.x,w.y,w.z)):Z(le.x,le.y,0)}for(let de=1;de<=h;de++)for(let le=0;le<Q;le++){let oe=f?B(_[le],D[le],ce):_[le];v?(b.copy(T.normals[de]).multiplyScalar(oe.x),S.copy(T.binormals[de]).multiplyScalar(oe.y),w.copy(E[de]).add(b).add(S),Z(w.x,w.y,w.z)):Z(oe.x,oe.y,u/h*de)}for(let de=g-1;de>=0;de--){let le=de/g,oe=d*Math.cos(le*Math.PI/2),ae=m*Math.sin(le*Math.PI/2)+x;for(let Se=0,ge=G.length;Se<ge;Se++){let Te=B(G[Se],J[Se],ae);Z(Te.x,Te.y,u+oe)}for(let Se=0,ge=C.length;Se<ge;Se++){let Te=C[Se];me=re[Se];for(let tt=0,Qe=Te.length;tt<Qe;tt++){let P=B(Te[tt],me[tt],ae);v?Z(P.x,P.y+E[h-1].y,E[h-1].x+oe):Z(P.x,P.y,u+oe)}}}Y(),j();function Y(){let de=s.length/3;if(f){let le=0,oe=Q*le;for(let ae=0;ae<te;ae++){let Se=q[ae];se(Se[2]+oe,Se[1]+oe,Se[0]+oe)}le=h+g*2,oe=Q*le;for(let ae=0;ae<te;ae++){let Se=q[ae];se(Se[0]+oe,Se[1]+oe,Se[2]+oe)}}else{for(let le=0;le<te;le++){let oe=q[le];se(oe[2],oe[1],oe[0])}for(let le=0;le<te;le++){let oe=q[le];se(oe[0]+Q*h,oe[1]+Q*h,oe[2]+Q*h)}}i.addGroup(de,s.length/3-de,0)}function j(){let de=s.length/3,le=0;H(G,le),le+=G.length;for(let oe=0,ae=C.length;oe<ae;oe++){let Se=C[oe];H(Se,le),le+=Se.length}i.addGroup(de,s.length/3-de,1)}function H(de,le){let oe=de.length;for(;--oe>=0;){let ae=oe,Se=oe-1;Se<0&&(Se=de.length-1);for(let ge=0,Te=h+g*2;ge<Te;ge++){let tt=Q*ge,Qe=Q*(ge+1),P=le+ae+tt,A=le+Se+tt,$=le+Se+Qe,ne=le+ae+Qe;Me(P,A,$,ne)}}}function Z(de,le,oe){c.push(de),c.push(le),c.push(oe)}function se(de,le,oe){je(de),je(le),je(oe);let ae=s.length/3,Se=M.generateTopUV(i,s,ae-3,ae-2,ae-1);N(Se[0]),N(Se[1]),N(Se[2])}function Me(de,le,oe,ae){je(de),je(le),je(ae),je(le),je(oe),je(ae);let Se=s.length/3,ge=M.generateSideWallUV(i,s,Se-6,Se-3,Se-2,Se-1);N(ge[0]),N(ge[1]),N(ge[3]),N(ge[1]),N(ge[2]),N(ge[3])}function je(de){s.push(c[de*3+0]),s.push(c[de*3+1]),s.push(c[de*3+2])}function N(de){r.push(de.x),r.push(de.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Ym(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new nh[s.type]().fromJSON(s)),new n(i,e.options)}},qm={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new ue(r,o),new ue(a,c),new ue(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ue(o,1-c),new ue(l,1-u),new ue(f,1-m),new ue(x,1-p)]:[new ue(a,1-c),new ue(h,1-u),new ue(d,1-m),new ue(g,1-p)]}};function Ym(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ls=class n extends fo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Mo=class n extends fo{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ht=class n extends ut{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let M=p*f-o;for(let E=0;E<l;E++){let v=E*u-r;m.push(v,-M,0),x.push(0,0,1),g.push(E/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let E=M+l*p,v=M+l*(p+1),T=M+1+l*(p+1),S=M+1+l*p;d.push(E,v,S),d.push(v,T,S)}this.setIndex(d),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Eo=class n extends ut{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,f=(t-e)/s,d=new I,m=new ue;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let p=r+g/i*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<s;x++){let g=x*(i+1);for(let p=0;p<i;p++){let M=p+g,E=M,v=M+i+1,T=M+i+2,S=M+1;a.push(E,v,S),a.push(v,T,S)}}this.setIndex(a),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ot=class n extends ut{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,f=new I,d=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let M=[],E=p/i,v=0;p===0&&o===0?v=.5/t:p===i&&c===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){let S=T/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+E*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(S+v,1-E),M.push(l++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let E=h[p][M+1],v=h[p][M],T=h[p+1][M],S=h[p+1][M+1];(p!==0||o>0)&&d.push(E,v,S),(p!==i-1||c<Math.PI)&&d.push(v,T,S)}this.setIndex(d),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Bn=class n extends ut{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new I,u=new I,f=new I;for(let d=0;d<=i;d++)for(let m=0;m<=s;m++){let x=m/s*r,g=d/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=s;m++){let x=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,M=(s+1)*d+m;o.push(x,g,M),o.push(g,p,M)}this.setIndex(o),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var bo=class extends At{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ft=class extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Wa=class extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xa=class extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ba(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Zm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var cs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qa=class extends cs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case jc:r=e,a=2*t-i;break;case Qc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case jc:o=e,c=2*i-t;break;case Qc:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(i-t)/(s-t),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,M=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,E=(-1-d)*g+(1.5+d)*x+.5*m,v=d*g-d*x;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+M*o[l+T]+E*o[c+T]+v*o[u+T];return r}},Ya=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Za=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},In=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ba(t,this.TimeBufferType),this.values=ba(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ba(e.times,Array),values:ba(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Jr:t=this.InterpolantFactoryMethodDiscrete;break;case Ra:t=this.InterpolantFactoryMethodLinear;break;case Sa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jr;case this.InterpolantFactoryMethodLinear:return Ra;case this.InterpolantFactoryMethodSmooth:return Sa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Zm(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Sa,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,f=u-i,d=u+i;for(let m=0;m!==i;++m){let x=t[u+m];if(x!==t[f+m]||x!==t[d+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Ra;var Fi=class extends In{constructor(e,t,i){super(e,t,i)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Jr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends In{constructor(e,t,i,s){super(e,t,i,s)}};$a.prototype.ValueTypeName="color";var Ja=class extends In{constructor(e,t,i,s){super(e,t,i,s)}};Ja.prototype.ValueTypeName="number";var Ka=class extends cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Yt.slerpFlat(r,0,o,l-a,o,l,c);return r}},So=class extends In{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ka(this.times,this.values,this.getValueSize(),e)}};So.prototype.ValueTypeName="quaternion";So.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends In{constructor(e,t,i){super(e,t,i)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Jr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends In{constructor(e,t,i,s){super(e,t,i,s)}};ja.prototype.ValueTypeName="vector";var Qa=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},kf=new Qa,el=class{constructor(e){this.manager=e!==void 0?e:kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};el.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar=class extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},To=class extends ar{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},$c=new et,$u=new I,Ju=new I,tl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;$u.setFromMatrixPosition(e.matrixWorld),t.position.copy($u),Ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ju),t.updateMatrixWorld(),$c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ku=new et,Wr=new I,Jc=new I,oh=class extends tl{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Wr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wr),Jc.copy(i.position),Jc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Jc),i.updateMatrixWorld(),s.makeTranslation(-Wr.x,-Wr.y,-Wr.z),Ku.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku,i.coordinateSystem,i.reversedDepth)}},wo=class extends ar{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new oh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},hs=class extends so{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ah=class extends tl{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lr=class extends ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new ah}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var nl=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ao=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Ih="\\[\\]\\.:\\/",$m=new RegExp("["+Ih+"]","g"),Ph="[^"+Ih+"]",Jm="[^"+Ih.replace("\\.","")+"]",Km=/((?:WC+[\/:])*)/.source.replace("WC",Ph),jm=/(WCOD+)?/.source.replace("WCOD",Jm),Qm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ph),e0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ph),t0=new RegExp("^"+Km+jm+Qm+e0+"$"),n0=["material","materials","bones","map"],lh=class{constructor(e,t,i){let s=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($m,"")}static parseTrackName(e){let t=t0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);n0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=lh;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O_=new Float32Array(1);function Lh(n,e,t,i){let s=i0(i);switch(t){case yh:return n*e;case El:return n*e/s.components*s.byteLength;case bl:return n*e/s.components*s.byteLength;case Mh:return n*e*2/s.components*s.byteLength;case Sl:return n*e*2/s.components*s.byteLength;case _h:return n*e*3/s.components*s.byteLength;case On:return n*e*4/s.components*s.byteLength;case Tl:return n*e*4/s.components*s.byteLength;case Io:case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Do:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Al:case Cl:return Math.max(n,16)*Math.max(e,8)/4;case wl:case Rl:return Math.max(n,8)*Math.max(e,8)/2;case Il:case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yl:case Zl:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Jl:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jl:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function i0(n){switch(n){case $n:case mh:return{byteLength:1,components:1};case hr:case gh:case cn:return{byteLength:2,components:1};case _l:case Ml:return{byteLength:2,components:4};case zi:case yl:case Jn:return{byteLength:4,components:1};case xh:case vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function ud(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function l0(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h0=`#ifdef USE_ALPHAHASH
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
#endif`,u0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m0=`#ifdef USE_AOMAP
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
#endif`,g0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x0=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,v0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E0=`#ifdef USE_IRIDESCENCE
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
#endif`,b0=`#ifdef USE_BUMPMAP
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,L0=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,D0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U0=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
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
}`,K0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eg=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,tg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,og=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ag=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lg=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vg=`#if defined( USE_POINTS_UV )
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
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`#ifdef USE_MORPHTARGETS
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
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Yg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nx=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ix=`#ifdef USE_TRANSMISSION
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`#include <common>
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
}`,mx=`#if DEPTH_PACKING == 3200
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
}`,gx=`#define DISTANCE
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
}`,xx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`uniform float scale;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,bx=`uniform vec3 diffuse;
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
}`,Sx=`#define LAMBERT
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
}`,Tx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,wx=`#define MATCAP
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
}`,Ax=`#define MATCAP
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ix=`#define PHONG
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
}`,Px=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Lx=`#define STANDARD
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
}`,Dx=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Ux=`#define TOON
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
}`,Nx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Fx=`uniform float size;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,Ox=`#include <common>
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
}`,zx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Hx=`uniform float rotation;
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
}`,kx=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:c0,alphahash_pars_fragment:h0,alphamap_fragment:u0,alphamap_pars_fragment:f0,alphatest_fragment:d0,alphatest_pars_fragment:p0,aomap_fragment:m0,aomap_pars_fragment:g0,batching_pars_vertex:x0,batching_vertex:v0,begin_vertex:y0,beginnormal_vertex:_0,bsdfs:M0,iridescence_fragment:E0,bumpmap_pars_fragment:b0,clipping_planes_fragment:S0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:A0,color_fragment:R0,color_pars_fragment:C0,color_pars_vertex:I0,color_vertex:P0,common:L0,cube_uv_reflection_fragment:D0,defaultnormal_vertex:U0,displacementmap_pars_vertex:N0,displacementmap_vertex:F0,emissivemap_fragment:B0,emissivemap_pars_fragment:O0,colorspace_fragment:z0,colorspace_pars_fragment:H0,envmap_fragment:k0,envmap_common_pars_fragment:G0,envmap_pars_fragment:V0,envmap_pars_vertex:W0,envmap_physical_pars_fragment:tg,envmap_vertex:X0,fog_vertex:q0,fog_pars_vertex:Y0,fog_fragment:Z0,fog_pars_fragment:$0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:K0,lights_lambert_fragment:j0,lights_lambert_pars_fragment:Q0,lights_pars_begin:eg,lights_toon_fragment:ng,lights_toon_pars_fragment:ig,lights_phong_fragment:sg,lights_phong_pars_fragment:rg,lights_physical_fragment:og,lights_physical_pars_fragment:ag,lights_fragment_begin:lg,lights_fragment_maps:cg,lights_fragment_end:hg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:fg,logdepthbuf_pars_vertex:dg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:xg,map_particle_pars_fragment:vg,metalnessmap_fragment:yg,metalnessmap_pars_fragment:_g,morphinstance_vertex:Mg,morphcolor_vertex:Eg,morphnormal_vertex:bg,morphtarget_pars_vertex:Sg,morphtarget_vertex:Tg,normal_fragment_begin:wg,normal_fragment_maps:Ag,normal_pars_fragment:Rg,normal_pars_vertex:Cg,normal_vertex:Ig,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ug,iridescence_pars_fragment:Ng,opaque_fragment:Fg,packing:Bg,premultiplied_alpha_fragment:Og,project_vertex:zg,dithering_fragment:Hg,dithering_pars_fragment:kg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Xg,shadowmap_vertex:qg,shadowmask_pars_fragment:Yg,skinbase_vertex:Zg,skinning_pars_vertex:$g,skinning_vertex:Jg,skinnormal_vertex:Kg,specularmap_fragment:jg,specularmap_pars_fragment:Qg,tonemapping_fragment:ex,tonemapping_pars_fragment:tx,transmission_fragment:nx,transmission_pars_fragment:ix,uv_pars_fragment:sx,uv_pars_vertex:rx,uv_vertex:ox,worldpos_vertex:ax,background_vert:lx,background_frag:cx,backgroundCube_vert:hx,backgroundCube_frag:ux,cube_vert:fx,cube_frag:dx,depth_vert:px,depth_frag:mx,distanceRGBA_vert:gx,distanceRGBA_frag:xx,equirect_vert:vx,equirect_frag:yx,linedashed_vert:_x,linedashed_frag:Mx,meshbasic_vert:Ex,meshbasic_frag:bx,meshlambert_vert:Sx,meshlambert_frag:Tx,meshmatcap_vert:wx,meshmatcap_frag:Ax,meshnormal_vert:Rx,meshnormal_frag:Cx,meshphong_vert:Ix,meshphong_frag:Px,meshphysical_vert:Lx,meshphysical_frag:Dx,meshtoon_vert:Ux,meshtoon_frag:Nx,points_vert:Fx,points_frag:Bx,shadow_vert:Ox,shadow_frag:zx,sprite_vert:Hx,sprite_frag:kx},Ae={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},oi={basic:{uniforms:hn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:hn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ee(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:hn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:hn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:hn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ee(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:hn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:hn([Ae.points,Ae.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:hn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:hn([Ae.common,Ae.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:hn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:hn([Ae.sprite,Ae.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:hn([Ae.common,Ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:hn([Ae.lights,Ae.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};oi.physical={uniforms:hn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var ec={r:0,b:0,g:0},ps=new rn,Gx=new et;function Vx(n,e,t,i,s,r,o){let a=new Ee(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function m(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function x(E){let v=!1,T=m(E);T===null?p(a,c):T&&T.isColor&&(p(T,1),v=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(E,v){let T=m(v);T&&(T.isCubeTexture||T.mapping===Ro)?(h===void 0&&(h=new W(new Ge(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:ds(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ps.copy(v.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(ps)),h.material.toneMapped=mt.getTransfer(T.colorSpace)!==Et,(u!==T||f!==T.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,d=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new W(new Ht(2,2),new At({name:"BackgroundMaterial",uniforms:ds(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=mt.getTransfer(T.colorSpace)!==Et,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=T,f=T.version,d=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,v){E.getRGB(ec,Rh(n)),i.buffers.color.setClear(ec.r,ec.g,ec.b,v,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(a,c)},render:x,addToRenderList:g,dispose:M}}function Wx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(_,C,U,L,z){let G=!1,B=u(L,U,C);r!==B&&(r=B,l(r.object)),G=d(_,L,U,z),G&&m(_,L,U,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(_,C,U,L),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function u(_,C,U){let L=U.wireframe===!0,z=i[_.id];z===void 0&&(z={},i[_.id]=z);let G=z[C.id];G===void 0&&(G={},z[C.id]=G);let B=G[L];return B===void 0&&(B=f(c()),G[L]=B),B}function f(_){let C=[],U=[],L=[];for(let z=0;z<t;z++)C[z]=0,U[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:L,object:_,attributes:{},index:null}}function d(_,C,U,L){let z=r.attributes,G=C.attributes,B=0,Q=U.getAttributes();for(let O in Q)if(Q[O].location>=0){let re=z[O],me=G[O];if(me===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(me=_.instanceColor)),re===void 0||re.attribute!==me||me&&re.data!==me.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function m(_,C,U,L){let z={},G=C.attributes,B=0,Q=U.getAttributes();for(let O in Q)if(Q[O].location>=0){let re=G[O];re===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(re=_.instanceColor));let me={};me.attribute=re,re&&re.data&&(me.data=re.data),z[O]=me,B++}r.attributes=z,r.attributesNum=B,r.index=L}function x(){let _=r.newAttributes;for(let C=0,U=_.length;C<U;C++)_[C]=0}function g(_){p(_,0)}function p(_,C){let U=r.newAttributes,L=r.enabledAttributes,z=r.attributeDivisors;U[_]=1,L[_]===0&&(n.enableVertexAttribArray(_),L[_]=1),z[_]!==C&&(n.vertexAttribDivisor(_,C),z[_]=C)}function M(){let _=r.newAttributes,C=r.enabledAttributes;for(let U=0,L=C.length;U<L;U++)C[U]!==_[U]&&(n.disableVertexAttribArray(U),C[U]=0)}function E(_,C,U,L,z,G,B){B===!0?n.vertexAttribIPointer(_,C,U,z,G):n.vertexAttribPointer(_,C,U,L,z,G)}function v(_,C,U,L){x();let z=L.attributes,G=U.getAttributes(),B=C.defaultAttributeValues;for(let Q in G){let O=G[Q];if(O.location>=0){let J=z[Q];if(J===void 0&&(Q==="instanceMatrix"&&_.instanceMatrix&&(J=_.instanceMatrix),Q==="instanceColor"&&_.instanceColor&&(J=_.instanceColor)),J!==void 0){let re=J.normalized,me=J.itemSize,D=e.get(J);if(D===void 0)continue;let q=D.buffer,te=D.type,ce=D.bytesPerElement,Y=te===n.INT||te===n.UNSIGNED_INT||J.gpuType===yl;if(J.isInterleavedBufferAttribute){let j=J.data,H=j.stride,Z=J.offset;if(j.isInstancedInterleavedBuffer){for(let se=0;se<O.locationSize;se++)p(O.location+se,j.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let se=0;se<O.locationSize;se++)g(O.location+se);n.bindBuffer(n.ARRAY_BUFFER,q);for(let se=0;se<O.locationSize;se++)E(O.location+se,me/O.locationSize,te,re,H*ce,(Z+me/O.locationSize*se)*ce,Y)}else{if(J.isInstancedBufferAttribute){for(let j=0;j<O.locationSize;j++)p(O.location+j,J.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let j=0;j<O.locationSize;j++)g(O.location+j);n.bindBuffer(n.ARRAY_BUFFER,q);for(let j=0;j<O.locationSize;j++)E(O.location+j,me/O.locationSize,te,re,me*ce,me/O.locationSize*j*ce,Y)}}else if(B!==void 0){let re=B[Q];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(O.location,re);break;case 3:n.vertexAttrib3fv(O.location,re);break;case 4:n.vertexAttrib4fv(O.location,re);break;default:n.vertexAttrib1fv(O.location,re)}}}}M()}function T(){w();for(let _ in i){let C=i[_];for(let U in C){let L=C[U];for(let z in L)h(L[z].object),delete L[z];delete C[U]}delete i[_]}}function S(_){if(i[_.id]===void 0)return;let C=i[_.id];for(let U in C){let L=C[U];for(let z in L)h(L[z].object),delete L[z];delete C[U]}delete i[_.id]}function b(_){for(let C in i){let U=i[C];if(U[_.id]===void 0)continue;let L=U[_.id];for(let z in L)h(L[z].object),delete L[z];delete U[_.id]}}function w(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function Xx(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,i,1)}function c(l,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)o(l[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function qx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==On&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let w=b===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==$n&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Jn&&!w)}function c(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:T,maxSamples:S}}function Yx(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Fn,a=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let M=r?0:i,E=M*4,v=p.clippingState||null;c.value=v,v=h(m,f,E,d);for(let T=0;T!==E;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,v=d;E!==x;++E,v+=4)o.copy(u[E]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Zx(n){let e=new WeakMap;function t(o,a){return a===gl?o.mapping=us:a===xl&&(o.mapping=fs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===gl||a===xl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ua(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var pr=4,Gf=[.125,.215,.35,.446,.526,.582],xs=20,Dh=new hs,Vf=new Ee,Uh=null,Nh=0,Fh=0,Bh=!1,gs=(1+Math.sqrt(5))/2,dr=1/gs,Wf=[new I(-gs,dr,0),new I(gs,dr,0),new I(-dr,0,gs),new I(dr,0,gs),new I(0,gs,-dr),new I(0,gs,dr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],$x=new I,gr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=$x}=r;Uh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uh,Nh,Fh),this._renderer.xr.enabled=Bh,e.scissorTest=!1,tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:cn,format:On,colorSpace:ns,depthBuffer:!1},s=Xf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jx(r)),this._blurMaterial=Kx(r,e,t)}return s}_compileMaterial(e){let t=new W(this._lodPlanes[0],e);this._renderer.compile(t,Dh)}_sceneToCubeUV(e,t,i,s,r){let c=new jt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Vf),u.toneMapping=Mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new xt({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new W(new Ge,x),p=!1,M=e.background;M?M.isColor&&(x.color.copy(M),e.background=null,p=!0):(x.color.copy(Vf),p=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):v===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));let T=this._cubeSize;tc(s,v*T,E>2?T:0,T,T),u.setRenderTarget(s),p&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===us||e.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new W(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;tc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Dh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wf[(s-r-1)%Wf.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new W(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*xs-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):xs;g>xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${xs}`);let p=[],M=0;for(let b=0;b<xs;++b){let w=b/x,y=Math.exp(-w*w/2);p.push(y),b===0?M+=y:b<g&&(M+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=m,f.mipInt.value=E-i;let v=this._sizeLods[s],T=3*v*(s>E-pr?s-E+pr:0),S=4*(this._cubeSize-v);tc(t,T,S,3*v,2*v),c.setRenderTarget(t),c.render(u,Dh)}};function Jx(n){let e=[],t=[],i=[],s=n,r=n-pr+1+Gf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-pr?c=Gf[o-n+pr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,g=2,p=1,M=new Float32Array(x*m*d),E=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let S=0;S<d;S++){let b=S%3*2/3-1,w=S>2?0:-1,y=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];M.set(y,x*m*S),E.set(f,g*m*S);let _=[S,S,S,S,S,S];v.set(_,p*m*S)}let T=new ut;T.setAttribute("position",new Ot(M,x)),T.setAttribute("uv",new Ot(E,g)),T.setAttribute("faceIndex",new Ot(v,p)),e.push(T),s>pr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xf(n,e,t){let i=new Zt(n,e,t);return i.texture.mapping=Ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Kx(n,e,t){let i=new Float32Array(xs),s=new I(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function qf(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yh(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Yf(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Yh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===gl||c===xl,h=c===us||c===fs;if(l||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new gr(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new gr(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Qx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Zs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ev(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)e.update(f[d],n.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(d!==null){let M=d.array;x=d.version;for(let E=0,v=M.length;E<v;E+=3){let T=M[E+0],S=M[E+1],b=M[E+2];f.push(T,S,S,b,b,T)}}else if(m!==void 0){let M=m.array;x=m.version;for(let E=0,v=M.length/3-1;E<v;E+=3){let T=E+0,S=E+1,b=E+2;f.push(T,S,S,b,b,T)}}else return;let g=new(Ah(f)?io:no)(f,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function tv(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function l(f,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,f*o,m),t.update(d,i,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,i,1)}function u(f,d,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*x[M];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function nv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function iv(n,e,t){let i=new WeakMap,s=new gt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let y=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;d===!0&&(E=1),m===!0&&(E=2),x===!0&&(E=3);let v=a.attributes.position.count*E,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*T*4*u),b=new eo(S,v,T,u);b.type=Jn,b.needsUpdate=!0;let w=E*4;for(let _=0;_<u;_++){let C=g[_],U=p[_],L=M[_],z=v*T*4*_;for(let G=0;G<C.count;G++){let B=G*w;d===!0&&(s.fromBufferAttribute(C,G),S[z+B+0]=s.x,S[z+B+1]=s.y,S[z+B+2]=s.z,S[z+B+3]=0),m===!0&&(s.fromBufferAttribute(U,G),S[z+B+4]=s.x,S[z+B+5]=s.y,S[z+B+6]=s.z,S[z+B+7]=0),x===!0&&(s.fromBufferAttribute(L,G),S[z+B+8]=s.x,S[z+B+9]=s.y,S[z+B+10]=s.z,S[z+B+11]=L.itemSize===4?s.w:1)}}f={count:u,texture:b,size:new ue(v,T)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function sv(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var fd=new mn,Zf=new ho(1,1),dd=new eo,pd=new La,md=new ro,$f=[],Jf=[],Kf=new Float32Array(16),jf=new Float32Array(9),Qf=new Float32Array(4);function xr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=$f[s];if(r===void 0&&(r=new Float32Array(s),$f[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sc(n,e){let t=Jf[e];t===void 0&&(t=new Int32Array(e),Jf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function rv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ov(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function lv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function cv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Qf.set(i),n.uniformMatrix2fv(this.addr,!1,Qf),tn(t,i)}}function hv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;jf.set(i),n.uniformMatrix3fv(this.addr,!1,jf),tn(t,i)}}function uv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Kf.set(i),n.uniformMatrix4fv(this.addr,!1,Kf),tn(t,i)}}function fv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function pv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function gv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function vv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function yv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function _v(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Zf.compareFunction=bh,r=Zf):r=fd,t.setTexture2D(e||r,s)}function Mv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||pd,s)}function Ev(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||md,s)}function bv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||dd,s)}function Sv(n){switch(n){case 5126:return rv;case 35664:return ov;case 35665:return av;case 35666:return lv;case 35674:return cv;case 35675:return hv;case 35676:return uv;case 5124:case 35670:return fv;case 35667:case 35671:return dv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return gv;case 36294:return xv;case 36295:return vv;case 36296:return yv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return bv}}function Tv(n,e){n.uniform1fv(this.addr,e)}function wv(n,e){let t=xr(e,this.size,2);n.uniform2fv(this.addr,t)}function Av(n,e){let t=xr(e,this.size,3);n.uniform3fv(this.addr,t)}function Rv(n,e){let t=xr(e,this.size,4);n.uniform4fv(this.addr,t)}function Cv(n,e){let t=xr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Iv(n,e){let t=xr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Pv(n,e){let t=xr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Lv(n,e){n.uniform1iv(this.addr,e)}function Dv(n,e){n.uniform2iv(this.addr,e)}function Uv(n,e){n.uniform3iv(this.addr,e)}function Nv(n,e){n.uniform4iv(this.addr,e)}function Fv(n,e){n.uniform1uiv(this.addr,e)}function Bv(n,e){n.uniform2uiv(this.addr,e)}function Ov(n,e){n.uniform3uiv(this.addr,e)}function zv(n,e){n.uniform4uiv(this.addr,e)}function Hv(n,e,t){let i=this.cache,s=e.length,r=sc(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||fd,r[o])}function kv(n,e,t){let i=this.cache,s=e.length,r=sc(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||pd,r[o])}function Gv(n,e,t){let i=this.cache,s=e.length,r=sc(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||md,r[o])}function Vv(n,e,t){let i=this.cache,s=e.length,r=sc(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||dd,r[o])}function Wv(n){switch(n){case 5126:return Tv;case 35664:return wv;case 35665:return Av;case 35666:return Rv;case 35674:return Cv;case 35675:return Iv;case 35676:return Pv;case 5124:case 35670:return Lv;case 35667:case 35671:return Dv;case 35668:case 35672:return Uv;case 35669:case 35673:return Nv;case 5125:return Fv;case 36294:return Bv;case 36295:return Ov;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Vv}}var zh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Sv(t.type)}},Hh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wv(t.type)}},kh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Oh=/(\w+)(\])?(\[|\.)?/g;function ed(n,e){n.seq.push(e),n.map[e.id]=e}function Xv(n,e,t){let i=n.name,s=i.length;for(Oh.lastIndex=0;;){let r=Oh.exec(i),o=Oh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ed(t,l===void 0?new zh(a,n,e):new Hh(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new kh(a),ed(t,u)),t=u}}}var mr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Xv(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function td(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var qv=37297,Yv=0;function Zv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var nd=new it;function $v(n){mt._getMatrix(nd,mt.workingColorSpace,n);let e=`mat3( ${nd.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case Kr:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function id(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Zv(n.getShaderSource(e),a)}else return r}function Jv(n,e){let t=$v(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Kv(n,e){let t;switch(e){case hl:t="Linear";break;case ul:t="Reinhard";break;case fl:t="Cineon";break;case cr:t="ACESFilmic";break;case pl:t="AgX";break;case ml:t="Neutral";break;case dl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var nc=new I;function jv(){mt.getLuminanceCoefficients(nc);let n=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function ey(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ty(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function No(n){return n!==""}function sd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(n){return n.replace(ny,sy)}var iy=new Map;function sy(n,e){let t=at[e];if(t===void 0){let i=iy.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gh(t)}var ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(n){return n.replace(ry,oy)}function oy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ad(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ay(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ef?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function ly(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case fs:e="ENVMAP_TYPE_CUBE";break;case Ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function hy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dh:e="ENVMAP_BLENDING_MULTIPLY";break;case _f:e="ENVMAP_BLENDING_MIX";break;case Mf:e="ENVMAP_BLENDING_ADD";break}return e}function uy(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function fy(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=ay(t),l=ly(t),h=cy(t),u=hy(t),f=uy(t),d=Qv(t),m=ey(r),x=s.createProgram(),g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(No).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(No).join(`
`),p.length>0&&(p+=`
`)):(g=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),p=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?at.tonemapping_pars_fragment:"",t.toneMapping!==Mi?Kv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Jv("linearToOutputTexel",t.outputColorSpace),jv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(No).join(`
`)),o=Gh(o),o=sd(o,t),o=rd(o,t),a=Gh(a),a=sd(a,t),a=rd(a,t),o=od(o),a=od(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=M+g+o,v=M+p+a,T=td(s,s.VERTEX_SHADER,E),S=td(s,s.FRAGMENT_SHADER,v);s.attachShader(x,T),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(C){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(T)||"",z=s.getShaderInfoLog(S)||"",G=U.trim(),B=L.trim(),Q=z.trim(),O=!0,J=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,S);else{let re=id(s,T,"vertex"),me=id(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+re+`
`+me)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||Q==="")&&(J=!1);J&&(C.diagnostics={runnable:O,programLog:G,vertexShader:{log:B,prefix:g},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(T),s.deleteShader(S),w=new mr(s,x),y=ty(s,x)}let w;this.getUniforms=function(){return w===void 0&&b(this),w};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,qv)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=S,this}var dy=0,Vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Wh(e),t.set(e,i)),i}},Wh=class{constructor(e){this.id=dy++,this.code=e,this.usedTimes=0}};function py(n,e,t,i,s,r,o){let a=new to,c=new Vh,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,_,C,U,L){let z=U.fog,G=L.geometry,B=y.isMeshStandardMaterial?U.environment:null,Q=(y.isMeshStandardMaterial?t:e).get(y.envMap||B),O=Q&&Q.mapping===Ro?Q.image.height:null,J=m[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,me=re!==void 0?re.length:0,D=0;G.morphAttributes.position!==void 0&&(D=1),G.morphAttributes.normal!==void 0&&(D=2),G.morphAttributes.color!==void 0&&(D=3);let q,te,ce,Y;if(J){let bt=oi[J];q=bt.vertexShader,te=bt.fragmentShader}else q=y.vertexShader,te=y.fragmentShader,c.update(y),ce=c.getVertexShaderID(y),Y=c.getFragmentShaderID(y);let j=n.getRenderTarget(),H=n.state.buffers.depth.getReversed(),Z=L.isInstancedMesh===!0,se=L.isBatchedMesh===!0,Me=!!y.map,je=!!y.matcap,N=!!Q,de=!!y.aoMap,le=!!y.lightMap,oe=!!y.bumpMap,ae=!!y.normalMap,Se=!!y.displacementMap,ge=!!y.emissiveMap,Te=!!y.metalnessMap,tt=!!y.roughnessMap,Qe=y.anisotropy>0,P=y.clearcoat>0,A=y.dispersion>0,$=y.iridescence>0,ne=y.sheen>0,pe=y.transmission>0,ie=Qe&&!!y.anisotropyMap,Oe=P&&!!y.clearcoatMap,be=P&&!!y.clearcoatNormalMap,Ne=P&&!!y.clearcoatRoughnessMap,Fe=$&&!!y.iridescenceMap,xe=$&&!!y.iridescenceThicknessMap,Pe=ne&&!!y.sheenColorMap,$e=ne&&!!y.sheenRoughnessMap,ze=!!y.specularMap,Ce=!!y.specularColorMap,st=!!y.specularIntensityMap,k=pe&&!!y.transmissionMap,_e=pe&&!!y.thicknessMap,we=!!y.gradientMap,De=!!y.alphaMap,ve=y.alphaTest>0,he=!!y.alphaHash,Be=!!y.extensions,nt=Mi;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(nt=n.toneMapping);let It={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:te,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:se,batchingColor:se&&L._colorsTexture!==null,instancing:Z,instancingColor:Z&&L.instanceColor!==null,instancingMorph:Z&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ns,alphaToCoverage:!!y.alphaToCoverage,map:Me,matcap:je,envMap:N,envMapMode:N&&Q.mapping,envMapCubeUVHeight:O,aoMap:de,lightMap:le,bumpMap:oe,normalMap:ae,displacementMap:f&&Se,emissiveMap:ge,normalMapObjectSpace:ae&&y.normalMapType===Tf,normalMapTangentSpace:ae&&y.normalMapType===Eh,metalnessMap:Te,roughnessMap:tt,anisotropy:Qe,anisotropyMap:ie,clearcoat:P,clearcoatMap:Oe,clearcoatNormalMap:be,clearcoatRoughnessMap:Ne,dispersion:A,iridescence:$,iridescenceMap:Fe,iridescenceThicknessMap:xe,sheen:ne,sheenColorMap:Pe,sheenRoughnessMap:$e,specularMap:ze,specularColorMap:Ce,specularIntensityMap:st,transmission:pe,transmissionMap:k,thicknessMap:_e,gradientMap:we,opaque:y.transparent===!1&&y.blending===es&&y.alphaToCoverage===!1,alphaMap:De,alphaTest:ve,alphaHash:he,combine:y.combine,mapUv:Me&&x(y.map.channel),aoMapUv:de&&x(y.aoMap.channel),lightMapUv:le&&x(y.lightMap.channel),bumpMapUv:oe&&x(y.bumpMap.channel),normalMapUv:ae&&x(y.normalMap.channel),displacementMapUv:Se&&x(y.displacementMap.channel),emissiveMapUv:ge&&x(y.emissiveMap.channel),metalnessMapUv:Te&&x(y.metalnessMap.channel),roughnessMapUv:tt&&x(y.roughnessMap.channel),anisotropyMapUv:ie&&x(y.anisotropyMap.channel),clearcoatMapUv:Oe&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:be&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:$e&&x(y.sheenRoughnessMap.channel),specularMapUv:ze&&x(y.specularMap.channel),specularColorMapUv:Ce&&x(y.specularColorMap.channel),specularIntensityMapUv:st&&x(y.specularIntensityMap.channel),transmissionMapUv:k&&x(y.transmissionMap.channel),thicknessMapUv:_e&&x(y.thicknessMap.channel),alphaMapUv:De&&x(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ae||Qe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(Me||De),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:H,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:D,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:Me&&y.map.isVideoTexture===!0&&mt.getTransfer(y.map.colorSpace)===Et,decodeVideoTextureEmissive:ge&&y.emissiveMap.isVideoTexture===!0&&mt.getTransfer(y.emissiveMap.colorSpace)===Et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===St,flipSided:y.side===$t,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Be&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&y.extensions.multiDraw===!0||se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function p(y){let _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)_.push(C),_.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(M(_,y),E(_,y),_.push(n.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function M(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function E(y,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){let _=m[y.type],C;if(_){let U=oi[_];C=bi.clone(U.uniforms)}else C=y.uniforms;return C}function T(y,_){let C;for(let U=0,L=h.length;U<L;U++){let z=h[U];if(z.cacheKey===_){C=z,++C.usedTimes;break}}return C===void 0&&(C=new fy(n,_,y,r),h.push(C)),C}function S(y){if(--y.usedTimes===0){let _=h.indexOf(y);h[_]=h[h.length-1],h.pop(),y.destroy()}}function b(y){c.remove(y)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:S,releaseShaderCache:b,programs:h,dispose:w}}function my(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function gy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ld(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,m,x,g){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function a(u,f,d,m,x,g){let p=o(u,f,d,m,x,g);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,m,x,g){let p=o(u,f,d,m,x,g);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||gy),i.length>1&&i.sort(f||ld),s.length>1&&s.sort(f||ld)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function xy(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new cd,n.set(i,[o])):s>=r.length?(o=new cd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function vy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ee};break;case"SpotLight":t={position:new I,direction:new I,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function yy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var _y=0;function My(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ey(n){let e=new vy,t=yy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);let s=new I,r=new et,o=new et;function a(l){let h=0,u=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,M=0,E=0,v=0,T=0,S=0,b=0;l.sort(My);for(let y=0,_=l.length;y<_;y++){let C=l[y],U=C.color,L=C.intensity,z=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=U.r*L,u+=U.g*L,f+=U.b*L;else if(C.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(C.sh.coefficients[B],L);b++}else if(C.isDirectionalLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,O=t.get(C);O.shadowIntensity=Q.intensity,O.shadowBias=Q.bias,O.shadowNormalBias=Q.normalBias,O.shadowRadius=Q.radius,O.shadowMapSize=Q.mapSize,i.directionalShadow[d]=O,i.directionalShadowMap[d]=G,i.directionalShadowMatrix[d]=C.shadow.matrix,M++}i.directional[d]=B,d++}else if(C.isSpotLight){let B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(U).multiplyScalar(L),B.distance=z,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,i.spot[x]=B;let Q=C.shadow;if(C.map&&(i.spotLightMap[T]=C.map,T++,Q.updateMatrices(C),C.castShadow&&S++),i.spotLightMatrix[x]=Q.matrix,C.castShadow){let O=t.get(C);O.shadowIntensity=Q.intensity,O.shadowBias=Q.bias,O.shadowNormalBias=Q.normalBias,O.shadowRadius=Q.radius,O.shadowMapSize=Q.mapSize,i.spotShadow[x]=O,i.spotShadowMap[x]=G,v++}x++}else if(C.isRectAreaLight){let B=e.get(C);B.color.copy(U).multiplyScalar(L),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=B,g++}else if(C.isPointLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let Q=C.shadow,O=t.get(C);O.shadowIntensity=Q.intensity,O.shadowBias=Q.bias,O.shadowNormalBias=Q.normalBias,O.shadowRadius=Q.radius,O.shadowMapSize=Q.mapSize,O.shadowCameraNear=Q.camera.near,O.shadowCameraFar=Q.camera.far,i.pointShadow[m]=O,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=C.shadow.matrix,E++}i.point[m]=B,m++}else if(C.isHemisphereLight){let B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(L),B.groundColor.copy(C.groundColor).multiplyScalar(L),i.hemi[p]=B,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let w=i.hash;(w.directionalLength!==d||w.pointLength!==m||w.spotLength!==x||w.rectAreaLength!==g||w.hemiLength!==p||w.numDirectionalShadows!==M||w.numPointShadows!==E||w.numSpotShadows!==v||w.numSpotMaps!==T||w.numLightProbes!==b)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=v+T-S,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=b,w.directionalLength=d,w.pointLength=m,w.spotLength=x,w.rectAreaLength=g,w.hemiLength=p,w.numDirectionalShadows=M,w.numPointShadows=E,w.numSpotShadows=v,w.numSpotMaps=T,w.numLightProbes=b,i.version=_y++)}function c(l,h){let u=0,f=0,d=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let E=l[p];if(E.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(E.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(E.isRectAreaLight){let v=i.rectArea[m];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(E.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(E.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(g),f++}else if(E.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:i}}function hd(n){let e=new Ey(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function by(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new hd(n),e.set(s,[a])):r>=o.length?(a=new hd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ty=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wy(n,e,t){let i=new tr,s=new ue,r=new ue,o=new gt,a=new Wa({depthPacking:Sf}),c=new Xa,l={},h=t.maxTextureSize,u={[vi]:$t,[$t]:vi,[St]:St},f=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Sy,fragmentShader:Ty}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new ut;m.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new W(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let p=this.type;this.render=function(S,b,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let y=n.getRenderTarget(),_=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Yn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let L=p!==ri&&this.type===ri,z=p===ri&&this.type!==ri;for(let G=0,B=S.length;G<B;G++){let Q=S[G],O=Q.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let J=O.getFrameExtents();if(s.multiply(J),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,O.mapSize.y=r.y)),O.map===null||L===!0||z===!0){let me=this.type!==ri?{minFilter:_n,magFilter:_n}:{};O.map!==null&&O.map.dispose(),O.map=new Zt(s.x,s.y,me),O.map.texture.name=Q.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();let re=O.getViewportCount();for(let me=0;me<re;me++){let D=O.getViewport(me);o.set(r.x*D.x,r.y*D.y,r.x*D.z,r.y*D.w),U.viewport(o),O.updateMatrices(Q,me),i=O.getFrustum(),v(b,w,O.camera,Q,this.type)}O.isPointLightShadow!==!0&&this.type===ri&&M(O,w),O.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(y,_,C)};function M(S,b){let w=e.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Zt(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(b,null,w,f,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(b,null,w,d,x,null)}function E(S,b,w,y){let _=null,C=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)_=C;else if(_=w.isPointLight===!0?c:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let U=_.uuid,L=b.uuid,z=l[U];z===void 0&&(z={},l[U]=z);let G=z[L];G===void 0&&(G=_.clone(),z[L]=G,b.addEventListener("dispose",T)),_=G}if(_.visible=b.visible,_.wireframe=b.wireframe,y===ri?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:u[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,w.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let U=n.properties.get(_);U.light=w}return _}function v(S,b,w,y,_){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===ri)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);let L=e.update(S),z=S.material;if(Array.isArray(z)){let G=L.groups;for(let B=0,Q=G.length;B<Q;B++){let O=G[B],J=z[O.materialIndex];if(J&&J.visible){let re=E(S,J,y,_);S.onBeforeShadow(n,S,b,w,L,re,O),n.renderBufferDirect(w,null,L,re,S,O),S.onAfterShadow(n,S,b,w,L,re,O)}}}else if(z.visible){let G=E(S,z,y,_);S.onBeforeShadow(n,S,b,w,L,G,null),n.renderBufferDirect(w,null,L,G,S,null),S.onAfterShadow(n,S,b,w,L,G,null)}}let U=S.children;for(let L=0,z=U.length;L<z;L++)v(U[L],b,w,y,_)}function T(S){S.target.removeEventListener("dispose",T);for(let w in l){let y=l[w],_=S.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}var Ay={[il]:sl,[rl]:ll,[ol]:cl,[ts]:al,[sl]:il,[ll]:rl,[cl]:ol,[al]:ts};function Ry(n,e){function t(){let k=!1,_e=new gt,we=null,De=new gt(0,0,0,0);return{setMask:function(ve){we!==ve&&!k&&(n.colorMask(ve,ve,ve,ve),we=ve)},setLocked:function(ve){k=ve},setClear:function(ve,he,Be,nt,It){It===!0&&(ve*=nt,he*=nt,Be*=nt),_e.set(ve,he,Be,nt),De.equals(_e)===!1&&(n.clearColor(ve,he,Be,nt),De.copy(_e))},reset:function(){k=!1,we=null,De.set(-1,0,0,0)}}}function i(){let k=!1,_e=!1,we=null,De=null,ve=null;return{setReversed:function(he){if(_e!==he){let Be=e.get("EXT_clip_control");he?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),_e=he;let nt=ve;ve=null,this.setClear(nt)}},getReversed:function(){return _e},setTest:function(he){he?j(n.DEPTH_TEST):H(n.DEPTH_TEST)},setMask:function(he){we!==he&&!k&&(n.depthMask(he),we=he)},setFunc:function(he){if(_e&&(he=Ay[he]),De!==he){switch(he){case il:n.depthFunc(n.NEVER);break;case sl:n.depthFunc(n.ALWAYS);break;case rl:n.depthFunc(n.LESS);break;case ts:n.depthFunc(n.LEQUAL);break;case ol:n.depthFunc(n.EQUAL);break;case al:n.depthFunc(n.GEQUAL);break;case ll:n.depthFunc(n.GREATER);break;case cl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=he}},setLocked:function(he){k=he},setClear:function(he){ve!==he&&(_e&&(he=1-he),n.clearDepth(he),ve=he)},reset:function(){k=!1,we=null,De=null,ve=null,_e=!1}}}function s(){let k=!1,_e=null,we=null,De=null,ve=null,he=null,Be=null,nt=null,It=null;return{setTest:function(bt){k||(bt?j(n.STENCIL_TEST):H(n.STENCIL_TEST))},setMask:function(bt){_e!==bt&&!k&&(n.stencilMask(bt),_e=bt)},setFunc:function(bt,hi,ei){(we!==bt||De!==hi||ve!==ei)&&(n.stencilFunc(bt,hi,ei),we=bt,De=hi,ve=ei)},setOp:function(bt,hi,ei){(he!==bt||Be!==hi||nt!==ei)&&(n.stencilOp(bt,hi,ei),he=bt,Be=hi,nt=ei)},setLocked:function(bt){k=bt},setClear:function(bt){It!==bt&&(n.clearStencil(bt),It=bt)},reset:function(){k=!1,_e=null,we=null,De=null,ve=null,he=null,Be=null,nt=null,It=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,E=null,v=null,T=null,S=null,b=new Ee(0,0,0),w=0,y=!1,_=null,C=null,U=null,L=null,z=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Q=0,O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=Q>=1):O.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=Q>=2);let J=null,re={},me=n.getParameter(n.SCISSOR_BOX),D=n.getParameter(n.VIEWPORT),q=new gt().fromArray(me),te=new gt().fromArray(D);function ce(k,_e,we,De){let ve=new Uint8Array(4),he=n.createTexture();n.bindTexture(k,he),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<we;Be++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(_e+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return he}let Y={};Y[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(ts),oe(!1),ae(ch),j(n.CULL_FACE),de(Yn);function j(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function H(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function Z(k,_e){return u[k]!==_e?(n.bindFramebuffer(k,_e),u[k]=_e,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=_e),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function se(k,_e){let we=d,De=!1;if(k){we=f.get(_e),we===void 0&&(we=[],f.set(_e,we));let ve=k.textures;if(we.length!==ve.length||we[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Be=ve.length;he<Be;he++)we[he]=n.COLOR_ATTACHMENT0+he;we.length=ve.length,De=!0}}else we[0]!==n.BACK&&(we[0]=n.BACK,De=!0);De&&n.drawBuffers(we)}function Me(k){return m!==k?(n.useProgram(k),m=k,!0):!1}let je={[Ui]:n.FUNC_ADD,[nf]:n.FUNC_SUBTRACT,[sf]:n.FUNC_REVERSE_SUBTRACT};je[rf]=n.MIN,je[of]=n.MAX;let N={[af]:n.ZERO,[lf]:n.ONE,[cf]:n.SRC_COLOR,[Ta]:n.SRC_ALPHA,[mf]:n.SRC_ALPHA_SATURATE,[df]:n.DST_COLOR,[uf]:n.DST_ALPHA,[hf]:n.ONE_MINUS_SRC_COLOR,[wa]:n.ONE_MINUS_SRC_ALPHA,[pf]:n.ONE_MINUS_DST_COLOR,[ff]:n.ONE_MINUS_DST_ALPHA,[gf]:n.CONSTANT_COLOR,[xf]:n.ONE_MINUS_CONSTANT_COLOR,[vf]:n.CONSTANT_ALPHA,[yf]:n.ONE_MINUS_CONSTANT_ALPHA};function de(k,_e,we,De,ve,he,Be,nt,It,bt){if(k===Yn){x===!0&&(H(n.BLEND),x=!1);return}if(x===!1&&(j(n.BLEND),x=!0),k!==tf){if(k!==g||bt!==y){if((p!==Ui||v!==Ui)&&(n.blendEquation(n.FUNC_ADD),p=Ui,v=Ui),bt)switch(k){case es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zn:n.blendFunc(n.ONE,n.ONE);break;case uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case uh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,E=null,T=null,S=null,b.set(0,0,0),w=0,g=k,y=bt}return}ve=ve||_e,he=he||we,Be=Be||De,(_e!==p||ve!==v)&&(n.blendEquationSeparate(je[_e],je[ve]),p=_e,v=ve),(we!==M||De!==E||he!==T||Be!==S)&&(n.blendFuncSeparate(N[we],N[De],N[he],N[Be]),M=we,E=De,T=he,S=Be),(nt.equals(b)===!1||It!==w)&&(n.blendColor(nt.r,nt.g,nt.b,It),b.copy(nt),w=It),g=k,y=!1}function le(k,_e){k.side===St?H(n.CULL_FACE):j(n.CULL_FACE);let we=k.side===$t;_e&&(we=!we),oe(we),k.blending===es&&k.transparent===!1?de(Yn):de(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let De=k.stencilWrite;a.setTest(De),De&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ge(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):H(n.SAMPLE_ALPHA_TO_COVERAGE)}function oe(k){_!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),_=k)}function ae(k){k!==ju?(j(n.CULL_FACE),k!==C&&(k===ch?n.cullFace(n.BACK):k===Qu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):H(n.CULL_FACE),C=k}function Se(k){k!==U&&(B&&n.lineWidth(k),U=k)}function ge(k,_e,we){k?(j(n.POLYGON_OFFSET_FILL),(L!==_e||z!==we)&&(n.polygonOffset(_e,we),L=_e,z=we)):H(n.POLYGON_OFFSET_FILL)}function Te(k){k?j(n.SCISSOR_TEST):H(n.SCISSOR_TEST)}function tt(k){k===void 0&&(k=n.TEXTURE0+G-1),J!==k&&(n.activeTexture(k),J=k)}function Qe(k,_e,we){we===void 0&&(J===null?we=n.TEXTURE0+G-1:we=J);let De=re[we];De===void 0&&(De={type:void 0,texture:void 0},re[we]=De),(De.type!==k||De.texture!==_e)&&(J!==we&&(n.activeTexture(we),J=we),n.bindTexture(k,_e||Y[k]),De.type=k,De.texture=_e)}function P(){let k=re[J];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function A(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(k){q.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),q.copy(k))}function $e(k){te.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),te.copy(k))}function ze(k,_e){let we=l.get(_e);we===void 0&&(we=new WeakMap,l.set(_e,we));let De=we.get(k);De===void 0&&(De=n.getUniformBlockIndex(_e,k.name),we.set(k,De))}function Ce(k,_e){let De=l.get(_e).get(k);c.get(_e)!==De&&(n.uniformBlockBinding(_e,De,k.__bindingPointIndex),c.set(_e,De))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},J=null,re={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,E=null,v=null,T=null,S=null,b=new Ee(0,0,0),w=0,y=!1,_=null,C=null,U=null,L=null,z=null,q.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:H,bindFramebuffer:Z,drawBuffers:se,useProgram:Me,setBlending:de,setMaterial:le,setFlipSided:oe,setCullFace:ae,setLineWidth:Se,setPolygonOffset:ge,setScissorTest:Te,activeTexture:tt,bindTexture:Qe,unbindTexture:P,compressedTexImage2D:A,compressedTexImage3D:$,texImage2D:Fe,texImage3D:xe,updateUBOMapping:ze,uniformBlockBinding:Ce,texStorage2D:be,texStorage3D:Ne,texSubImage2D:ne,texSubImage3D:pe,compressedTexSubImage2D:ie,compressedTexSubImage3D:Oe,scissor:Pe,viewport:$e,reset:st}}function Cy(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ue,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,A){return d?new OffscreenCanvas(P,A):Qr("canvas")}function x(P,A,$){let ne=1,pe=Qe(P);if((pe.width>$||pe.height>$)&&(ne=$/Math.max(pe.width,pe.height)),ne<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ie=Math.floor(ne*pe.width),Oe=Math.floor(ne*pe.height);u===void 0&&(u=m(ie,Oe));let be=A?m(ie,Oe):u;return be.width=ie,be.height=Oe,be.getContext("2d").drawImage(P,0,0,ie,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ie+"x"+Oe+")."),be}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){n.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(P,A,$,ne,pe=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ie=A;if(A===n.RED&&($===n.FLOAT&&(ie=n.R32F),$===n.HALF_FLOAT&&(ie=n.R16F),$===n.UNSIGNED_BYTE&&(ie=n.R8)),A===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(ie=n.R8UI),$===n.UNSIGNED_SHORT&&(ie=n.R16UI),$===n.UNSIGNED_INT&&(ie=n.R32UI),$===n.BYTE&&(ie=n.R8I),$===n.SHORT&&(ie=n.R16I),$===n.INT&&(ie=n.R32I)),A===n.RG&&($===n.FLOAT&&(ie=n.RG32F),$===n.HALF_FLOAT&&(ie=n.RG16F),$===n.UNSIGNED_BYTE&&(ie=n.RG8)),A===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(ie=n.RG8UI),$===n.UNSIGNED_SHORT&&(ie=n.RG16UI),$===n.UNSIGNED_INT&&(ie=n.RG32UI),$===n.BYTE&&(ie=n.RG8I),$===n.SHORT&&(ie=n.RG16I),$===n.INT&&(ie=n.RG32I)),A===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),$===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),$===n.UNSIGNED_INT&&(ie=n.RGB32UI),$===n.BYTE&&(ie=n.RGB8I),$===n.SHORT&&(ie=n.RGB16I),$===n.INT&&(ie=n.RGB32I)),A===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),$===n.UNSIGNED_INT&&(ie=n.RGBA32UI),$===n.BYTE&&(ie=n.RGBA8I),$===n.SHORT&&(ie=n.RGBA16I),$===n.INT&&(ie=n.RGBA32I)),A===n.RGB&&($===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),A===n.RGBA){let Oe=pe?Kr:mt.getTransfer(ne);$===n.FLOAT&&(ie=n.RGBA32F),$===n.HALF_FLOAT&&(ie=n.RGBA16F),$===n.UNSIGNED_BYTE&&(ie=Oe===Et?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(P,A){let $;return P?A===null||A===zi||A===ur?$=n.DEPTH24_STENCIL8:A===Jn?$=n.DEPTH32F_STENCIL8:A===hr&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===zi||A===ur?$=n.DEPTH_COMPONENT24:A===Jn?$=n.DEPTH_COMPONENT32F:A===hr&&($=n.DEPTH_COMPONENT16),$}function T(P,A){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==_n&&P.minFilter!==Rn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function S(P){let A=P.target;A.removeEventListener("dispose",S),w(A),A.isVideoTexture&&h.delete(A)}function b(P){let A=P.target;A.removeEventListener("dispose",b),_(A)}function w(P){let A=i.get(P);if(A.__webglInit===void 0)return;let $=P.source,ne=f.get($);if(ne){let pe=ne[A.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&y(P),Object.keys(ne).length===0&&f.delete($)}i.remove(P)}function y(P){let A=i.get(P);n.deleteTexture(A.__webglTexture);let $=P.source,ne=f.get($);delete ne[A.__cacheKey],o.memory.textures--}function _(P){let A=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(A.__webglFramebuffer[ne]))for(let pe=0;pe<A.__webglFramebuffer[ne].length;pe++)n.deleteFramebuffer(A.__webglFramebuffer[ne][pe]);else n.deleteFramebuffer(A.__webglFramebuffer[ne]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[ne])}else{if(Array.isArray(A.__webglFramebuffer))for(let ne=0;ne<A.__webglFramebuffer.length;ne++)n.deleteFramebuffer(A.__webglFramebuffer[ne]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ne=0;ne<A.__webglColorRenderbuffer.length;ne++)A.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[ne]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let $=P.textures;for(let ne=0,pe=$.length;ne<pe;ne++){let ie=i.get($[ne]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove($[ne])}i.remove(P)}let C=0;function U(){C=0}function L(){let P=C;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function z(P){let A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function G(P,A){let $=i.get(P);if(P.isVideoTexture&&Te(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){let ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y($,P,A);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+A)}function B(P,A){let $=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Y($,P,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+A)}function Q(P,A){let $=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Y($,P,A);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+A)}function O(P,A){let $=i.get(P);if(P.version>0&&$.__version!==P.version){j($,P,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+A)}let J={[Xs]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[Aa]:n.MIRRORED_REPEAT},re={[_n]:n.NEAREST,[Ef]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[vl]:n.LINEAR_MIPMAP_NEAREST,[Oi]:n.LINEAR_MIPMAP_LINEAR},me={[wf]:n.NEVER,[Lf]:n.ALWAYS,[Af]:n.LESS,[bh]:n.LEQUAL,[Rf]:n.EQUAL,[Pf]:n.GEQUAL,[Cf]:n.GREATER,[If]:n.NOTEQUAL};function D(P,A){if(A.type===Jn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Rn||A.magFilter===vl||A.magFilter===Co||A.magFilter===Oi||A.minFilter===Rn||A.minFilter===vl||A.minFilter===Co||A.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,J[A.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,J[A.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,J[A.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,re[A.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,re[A.minFilter]),A.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,me[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===_n||A.minFilter!==Co&&A.minFilter!==Oi||A.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function q(P,A){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",S));let ne=A.source,pe=f.get(ne);pe===void 0&&(pe={},f.set(ne,pe));let ie=z(A);if(ie!==P.__cacheKey){pe[ie]===void 0&&(pe[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),pe[ie].usedTimes++;let Oe=pe[P.__cacheKey];Oe!==void 0&&(pe[P.__cacheKey].usedTimes--,Oe.usedTimes===0&&y(A)),P.__cacheKey=ie,P.__webglTexture=pe[ie].texture}return $}function te(P,A,$){return Math.floor(Math.floor(P/$)/A)}function ce(P,A,$,ne){let ie=P.updateRanges;if(ie.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,$,ne,A.data);else{ie.sort((xe,Pe)=>xe.start-Pe.start);let Oe=0;for(let xe=1;xe<ie.length;xe++){let Pe=ie[Oe],$e=ie[xe],ze=Pe.start+Pe.count,Ce=te($e.start,A.width,4),st=te(Pe.start,A.width,4);$e.start<=ze+1&&Ce===st&&te($e.start+$e.count-1,A.width,4)===Ce?Pe.count=Math.max(Pe.count,$e.start+$e.count-Pe.start):(++Oe,ie[Oe]=$e)}ie.length=Oe+1;let be=n.getParameter(n.UNPACK_ROW_LENGTH),Ne=n.getParameter(n.UNPACK_SKIP_PIXELS),Fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let xe=0,Pe=ie.length;xe<Pe;xe++){let $e=ie[xe],ze=Math.floor($e.start/4),Ce=Math.ceil($e.count/4),st=ze%A.width,k=Math.floor(ze/A.width),_e=Ce,we=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,st),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,st,k,_e,we,$,ne,A.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,be),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ne),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function Y(P,A,$){let ne=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ne=n.TEXTURE_3D);let pe=q(P,A),ie=A.source;t.bindTexture(ne,P.__webglTexture,n.TEXTURE0+$);let Oe=i.get(ie);if(ie.version!==Oe.__version||pe===!0){t.activeTexture(n.TEXTURE0+$);let be=mt.getPrimaries(mt.workingColorSpace),Ne=A.colorSpace===Ei?null:mt.getPrimaries(A.colorSpace),Fe=A.colorSpace===Ei||be===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let xe=x(A.image,!1,s.maxTextureSize);xe=tt(A,xe);let Pe=r.convert(A.format,A.colorSpace),$e=r.convert(A.type),ze=E(A.internalFormat,Pe,$e,A.colorSpace,A.isVideoTexture);D(ne,A);let Ce,st=A.mipmaps,k=A.isVideoTexture!==!0,_e=Oe.__version===void 0||pe===!0,we=ie.dataReady,De=T(A,xe);if(A.isDepthTexture)ze=v(A.format===fr,A.type),_e&&(k?t.texStorage2D(n.TEXTURE_2D,1,ze,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,ze,xe.width,xe.height,0,Pe,$e,null));else if(A.isDataTexture)if(st.length>0){k&&_e&&t.texStorage2D(n.TEXTURE_2D,De,ze,st[0].width,st[0].height);for(let ve=0,he=st.length;ve<he;ve++)Ce=st[ve],k?we&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Pe,$e,Ce.data):t.texImage2D(n.TEXTURE_2D,ve,ze,Ce.width,Ce.height,0,Pe,$e,Ce.data);A.generateMipmaps=!1}else k?(_e&&t.texStorage2D(n.TEXTURE_2D,De,ze,xe.width,xe.height),we&&ce(A,xe,Pe,$e)):t.texImage2D(n.TEXTURE_2D,0,ze,xe.width,xe.height,0,Pe,$e,xe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){k&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,ze,st[0].width,st[0].height,xe.depth);for(let ve=0,he=st.length;ve<he;ve++)if(Ce=st[ve],A.format!==On)if(Pe!==null)if(k){if(we)if(A.layerUpdates.size>0){let Be=Lh(Ce.width,Ce.height,A.format,A.type);for(let nt of A.layerUpdates){let It=Ce.data.subarray(nt*Be/Ce.data.BYTES_PER_ELEMENT,(nt+1)*Be/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,nt,Ce.width,Ce.height,1,Pe,It)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,xe.depth,Pe,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,ze,Ce.width,Ce.height,xe.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,xe.depth,Pe,$e,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,ze,Ce.width,Ce.height,xe.depth,0,Pe,$e,Ce.data)}else{k&&_e&&t.texStorage2D(n.TEXTURE_2D,De,ze,st[0].width,st[0].height);for(let ve=0,he=st.length;ve<he;ve++)Ce=st[ve],A.format!==On?Pe!==null?k?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Pe,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,ze,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?we&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Pe,$e,Ce.data):t.texImage2D(n.TEXTURE_2D,ve,ze,Ce.width,Ce.height,0,Pe,$e,Ce.data)}else if(A.isDataArrayTexture)if(k){if(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,ze,xe.width,xe.height,xe.depth),we)if(A.layerUpdates.size>0){let ve=Lh(xe.width,xe.height,A.format,A.type);for(let he of A.layerUpdates){let Be=xe.data.subarray(he*ve/xe.data.BYTES_PER_ELEMENT,(he+1)*ve/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,xe.width,xe.height,1,Pe,$e,Be)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Pe,$e,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,xe.width,xe.height,xe.depth,0,Pe,$e,xe.data);else if(A.isData3DTexture)k?(_e&&t.texStorage3D(n.TEXTURE_3D,De,ze,xe.width,xe.height,xe.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Pe,$e,xe.data)):t.texImage3D(n.TEXTURE_3D,0,ze,xe.width,xe.height,xe.depth,0,Pe,$e,xe.data);else if(A.isFramebufferTexture){if(_e)if(k)t.texStorage2D(n.TEXTURE_2D,De,ze,xe.width,xe.height);else{let ve=xe.width,he=xe.height;for(let Be=0;Be<De;Be++)t.texImage2D(n.TEXTURE_2D,Be,ze,ve,he,0,Pe,$e,null),ve>>=1,he>>=1}}else if(st.length>0){if(k&&_e){let ve=Qe(st[0]);t.texStorage2D(n.TEXTURE_2D,De,ze,ve.width,ve.height)}for(let ve=0,he=st.length;ve<he;ve++)Ce=st[ve],k?we&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Pe,$e,Ce):t.texImage2D(n.TEXTURE_2D,ve,ze,Pe,$e,Ce);A.generateMipmaps=!1}else if(k){if(_e){let ve=Qe(xe);t.texStorage2D(n.TEXTURE_2D,De,ze,ve.width,ve.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,$e,xe)}else t.texImage2D(n.TEXTURE_2D,0,ze,Pe,$e,xe);g(A)&&p(ne),Oe.__version=ie.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function j(P,A,$){if(A.image.length!==6)return;let ne=q(P,A),pe=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+$);let ie=i.get(pe);if(pe.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+$);let Oe=mt.getPrimaries(mt.workingColorSpace),be=A.colorSpace===Ei?null:mt.getPrimaries(A.colorSpace),Ne=A.colorSpace===Ei||Oe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let Fe=A.isCompressedTexture||A.image[0].isCompressedTexture,xe=A.image[0]&&A.image[0].isDataTexture,Pe=[];for(let he=0;he<6;he++)!Fe&&!xe?Pe[he]=x(A.image[he],!0,s.maxCubemapSize):Pe[he]=xe?A.image[he].image:A.image[he],Pe[he]=tt(A,Pe[he]);let $e=Pe[0],ze=r.convert(A.format,A.colorSpace),Ce=r.convert(A.type),st=E(A.internalFormat,ze,Ce,A.colorSpace),k=A.isVideoTexture!==!0,_e=ie.__version===void 0||ne===!0,we=pe.dataReady,De=T(A,$e);D(n.TEXTURE_CUBE_MAP,A);let ve;if(Fe){k&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,st,$e.width,$e.height);for(let he=0;he<6;he++){ve=Pe[he].mipmaps;for(let Be=0;Be<ve.length;Be++){let nt=ve[Be];A.format!==On?ze!==null?k?we&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,nt.width,nt.height,ze,nt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,st,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,nt.width,nt.height,ze,Ce,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,st,nt.width,nt.height,0,ze,Ce,nt.data)}}}else{if(ve=A.mipmaps,k&&_e){ve.length>0&&De++;let he=Qe(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,st,he.width,he.height)}for(let he=0;he<6;he++)if(xe){k?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Pe[he].width,Pe[he].height,ze,Ce,Pe[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,Pe[he].width,Pe[he].height,0,ze,Ce,Pe[he].data);for(let Be=0;Be<ve.length;Be++){let It=ve[Be].image[he].image;k?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,It.width,It.height,ze,Ce,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,st,It.width,It.height,0,ze,Ce,It.data)}}else{k?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ze,Ce,Pe[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,ze,Ce,Pe[he]);for(let Be=0;Be<ve.length;Be++){let nt=ve[Be];k?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,ze,Ce,nt.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,st,ze,Ce,nt.image[he])}}}g(A)&&p(n.TEXTURE_CUBE_MAP),ie.__version=pe.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function H(P,A,$,ne,pe,ie){let Oe=r.convert($.format,$.colorSpace),be=r.convert($.type),Ne=E($.internalFormat,Oe,be,$.colorSpace),Fe=i.get(A),xe=i.get($);if(xe.__renderTarget=A,!Fe.__hasExternalTextures){let Pe=Math.max(1,A.width>>ie),$e=Math.max(1,A.height>>ie);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,ie,Ne,Pe,$e,A.depth,0,Oe,be,null):t.texImage2D(pe,ie,Ne,Pe,$e,0,Oe,be,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ge(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,pe,xe.__webglTexture,0,Se(A)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,pe,xe.__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(P,A,$){if(n.bindRenderbuffer(n.RENDERBUFFER,P),A.depthBuffer){let ne=A.depthTexture,pe=ne&&ne.isDepthTexture?ne.type:null,ie=v(A.stencilBuffer,pe),Oe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=Se(A);ge(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,ie,A.width,A.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,ie,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ie,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Oe,n.RENDERBUFFER,P)}else{let ne=A.textures;for(let pe=0;pe<ne.length;pe++){let ie=ne[pe],Oe=r.convert(ie.format,ie.colorSpace),be=r.convert(ie.type),Ne=E(ie.internalFormat,Oe,be,ie.colorSpace),Fe=Se(A);$&&ge(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Ne,A.width,A.height):ge(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,Ne,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ne=i.get(A.depthTexture);ne.__renderTarget=A,(!ne.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G(A.depthTexture,0);let pe=ne.__webglTexture,ie=Se(A);if(A.depthTexture.format===qs)ge(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0);else if(A.depthTexture.format===fr)ge(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Me(P){let A=i.get(P),$=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){let ne=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ne){let pe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ne.removeEventListener("dispose",pe)};ne.addEventListener("dispose",pe),A.__depthDisposeCallback=pe}A.__boundDepthTexture=ne}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");let ne=P.texture.mipmaps;ne&&ne.length>0?se(A.__webglFramebuffer[0],P):se(A.__webglFramebuffer,P)}else if($){A.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ne]),A.__webglDepthbuffer[ne]===void 0)A.__webglDepthbuffer[ne]=n.createRenderbuffer(),Z(A.__webglDepthbuffer[ne],P,!1);else{let pe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=A.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,ie)}}else{let ne=P.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Z(A.__webglDepthbuffer,P,!1);else{let pe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,ie)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(P,A,$){let ne=i.get(P);A!==void 0&&H(ne.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Me(P)}function N(P){let A=P.texture,$=i.get(P),ne=i.get(A);P.addEventListener("dispose",b);let pe=P.textures,ie=P.isWebGLCubeRenderTarget===!0,Oe=pe.length>1;if(Oe||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=A.version,o.memory.textures++),ie){$.__webglFramebuffer=[];for(let be=0;be<6;be++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[be]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)$.__webglFramebuffer[be][Ne]=n.createFramebuffer()}else $.__webglFramebuffer[be]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let be=0;be<A.mipmaps.length;be++)$.__webglFramebuffer[be]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Oe)for(let be=0,Ne=pe.length;be<Ne;be++){let Fe=i.get(pe[be]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&ge(P)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let be=0;be<pe.length;be++){let Ne=pe[be];$.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[be]);let Fe=r.convert(Ne.format,Ne.colorSpace),xe=r.convert(Ne.type),Pe=E(Ne.internalFormat,Fe,xe,Ne.colorSpace,P.isXRRenderTarget===!0),$e=Se(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,Pe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,$.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Z($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),D(n.TEXTURE_CUBE_MAP,A);for(let be=0;be<6;be++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)H($.__webglFramebuffer[be][Ne],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ne);else H($.__webglFramebuffer[be],P,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);g(A)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let be=0,Ne=pe.length;be<Ne;be++){let Fe=pe[be],xe=i.get(Fe),Pe=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Pe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,xe.__webglTexture),D(Pe,Fe),H($.__webglFramebuffer,P,Fe,n.COLOR_ATTACHMENT0+be,Pe,0),g(Fe)&&p(Pe)}t.unbindTexture()}else{let be=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(be=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,ne.__webglTexture),D(be,A),A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)H($.__webglFramebuffer[Ne],P,A,n.COLOR_ATTACHMENT0,be,Ne);else H($.__webglFramebuffer,P,A,n.COLOR_ATTACHMENT0,be,0);g(A)&&p(be),t.unbindTexture()}P.depthBuffer&&Me(P)}function de(P){let A=P.textures;for(let $=0,ne=A.length;$<ne;$++){let pe=A[$];if(g(pe)){let ie=M(P),Oe=i.get(pe).__webglTexture;t.bindTexture(ie,Oe),p(ie),t.unbindTexture()}}}let le=[],oe=[];function ae(P){if(P.samples>0){if(ge(P)===!1){let A=P.textures,$=P.width,ne=P.height,pe=n.COLOR_BUFFER_BIT,ie=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=i.get(P),be=A.length>1;if(be)for(let Fe=0;Fe<A.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);let Ne=P.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Fe=0;Fe<A.length;Fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),be){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Fe]);let xe=i.get(A[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,$,ne,0,0,$,ne,pe,n.NEAREST),c===!0&&(le.length=0,oe.length=0,le.push(n.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(le.push(ie),oe.push(ie),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let Fe=0;Fe<A.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Fe]);let xe=i.get(A[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let A=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Se(P){return Math.min(s.maxSamples,P.samples)}function ge(P){let A=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Te(P){let A=o.render.frame;h.get(P)!==A&&(h.set(P,A),P.update())}function tt(P,A){let $=P.colorSpace,ne=P.format,pe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==ns&&$!==Ei&&(mt.getTransfer($)===Et?(ne!==On||pe!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}function Qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=Q,this.setTextureCube=O,this.rebindTextures=je,this.setupRenderTarget=N,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=H,this.useMultisampledRTT=ge}function Iy(n,e){function t(i,s=Ei){let r,o=mt.getTransfer(s);if(i===$n)return n.UNSIGNED_BYTE;if(i===_l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ml)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===mh)return n.BYTE;if(i===gh)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===yl)return n.INT;if(i===zi)return n.UNSIGNED_INT;if(i===Jn)return n.FLOAT;if(i===cn)return n.HALF_FLOAT;if(i===yh)return n.ALPHA;if(i===_h)return n.RGB;if(i===On)return n.RGBA;if(i===qs)return n.DEPTH_COMPONENT;if(i===fr)return n.DEPTH_STENCIL;if(i===El)return n.RED;if(i===bl)return n.RED_INTEGER;if(i===Mh)return n.RG;if(i===Sl)return n.RG_INTEGER;if(i===Tl)return n.RGBA_INTEGER;if(i===Io||i===Po||i===Lo||i===Do)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wl||i===Al||i===Rl||i===Cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Il||i===Pl||i===Ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Il||i===Pl)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ll)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dl||i===Ul||i===Nl||i===Fl||i===Bl||i===Ol||i===zl||i===Hl||i===kl||i===Gl||i===Vl||i===Wl||i===Xl||i===ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ul)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ol)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ql)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yl||i===Zl||i===$l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Yl)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jl||i===Kl||i===jl||i===Ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Jl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Py=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ly=`
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

}`,Xh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new uo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new At({vertexShader:Py,fragmentShader:Ly,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new Ht(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qh=class extends yi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new Xh,p={},M=t.getContextAttributes(),E=null,v=null,T=[],S=[],b=new ue,w=null,y=new jt;y.viewport=new gt;let _=new jt;_.viewport=new gt;let C=[y,_],U=new nl,L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=T[Y];return j===void 0&&(j=new Ks,T[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=T[Y];return j===void 0&&(j=new Ks,T[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=T[Y];return j===void 0&&(j=new Ks,T[Y]=j),j.getHandSpace()};function G(Y){let j=S.indexOf(Y.inputSource);if(j===-1)return;let H=T[j];H!==void 0&&(H.update(Y.inputSource,Y.frame,l||o),H.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<T.length;Y++){let j=S[Y];j!==null&&(S[Y]=null,T[Y].disconnect(j))}L=null,z=null,g.reset();for(let Y in p)delete p[Y];e.setRenderTarget(E),d=null,f=null,u=null,s=null,v=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(b),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let H=null,Z=null,se=null;M.depth&&(se=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=M.stencil?fr:qs,Z=M.stencil?ur:zi);let Me={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Zt(f.textureWidth,f.textureHeight,{format:On,type:$n,depthTexture:new ho(f.textureWidth,f.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let H={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,H),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Zt(d.framebufferWidth,d.framebufferHeight,{format:On,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(Y){for(let j=0;j<Y.removed.length;j++){let H=Y.removed[j],Z=S.indexOf(H);Z>=0&&(S[Z]=null,T[Z].disconnect(H))}for(let j=0;j<Y.added.length;j++){let H=Y.added[j],Z=S.indexOf(H);if(Z===-1){for(let Me=0;Me<T.length;Me++)if(Me>=S.length){S.push(H),Z=Me;break}else if(S[Me]===null){S[Me]=H,Z=Me;break}if(Z===-1)break}let se=T[Z];se&&se.connect(H)}}let O=new I,J=new I;function re(Y,j,H){O.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(H.matrixWorld);let Z=O.distanceTo(J),se=j.projectionMatrix.elements,Me=H.projectionMatrix.elements,je=se[14]/(se[10]-1),N=se[14]/(se[10]+1),de=(se[9]+1)/se[5],le=(se[9]-1)/se[5],oe=(se[8]-1)/se[0],ae=(Me[8]+1)/Me[0],Se=je*oe,ge=je*ae,Te=Z/(-oe+ae),tt=Te*-oe;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(tt),Y.translateZ(Te),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),se[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Qe=je+Te,P=N+Te,A=Se-tt,$=ge+(Z-tt),ne=de*N/P*Qe,pe=le*N/P*Qe;Y.projectionMatrix.makePerspective(A,$,ne,pe,Qe,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function me(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let j=Y.near,H=Y.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(H=g.depthFar)),U.near=_.near=y.near=j,U.far=_.far=y.far=H,(L!==U.near||z!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),L=U.near,z=U.far),U.layers.mask=Y.layers.mask|6,y.layers.mask=U.layers.mask&3,_.layers.mask=U.layers.mask&5;let Z=Y.parent,se=U.cameras;me(U,Z);for(let Me=0;Me<se.length;Me++)me(se[Me],Z);se.length===2?re(U,y,_):U.projectionMatrix.copy(y.projectionMatrix),D(Y,U,Z)};function D(Y,j,H){H===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(H.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ys*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(Y){return p[Y]};let q=null;function te(Y,j){if(h=j.getViewerPose(l||o),m=j,h!==null){let H=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Z=!1;H.length!==U.cameras.length&&(U.cameras.length=0,Z=!0);for(let N=0;N<H.length;N++){let de=H[N],le=null;if(d!==null)le=d.getViewport(de);else{let ae=u.getViewSubImage(f,de);le=ae.viewport,N===0&&(e.setRenderTargetTextures(v,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(v))}let oe=C[N];oe===void 0&&(oe=new jt,oe.layers.enable(N),oe.viewport=new gt,C[N]=oe),oe.matrix.fromArray(de.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(de.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(le.x,le.y,le.width,le.height),N===0&&(U.matrix.copy(oe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Z===!0&&U.cameras.push(oe)}let se=s.enabledFeatures;if(se&&se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let N=u.getDepthInformation(H[0]);N&&N.isValid&&N.texture&&g.init(N,s.renderState)}if(se&&se.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let N=0;N<H.length;N++){let de=H[N].camera;if(de){let le=p[de];le||(le=new uo,p[de]=le);let oe=u.getCameraImage(de);le.sourceTexture=oe}}}}for(let H=0;H<T.length;H++){let Z=S[H],se=T[H];Z!==null&&se!==void 0&&se.update(Z,j,l||o)}q&&q(Y,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),m=null}let ce=new ud;ce.setAnimationLoop(te),this.setAnimationLoop=function(Y){q=Y},this.dispose=function(){}}},ms=new rn,Dy=new et;function Uy(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Rh(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,M,E):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===$t&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===$t&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),E=M.envMap,v=M.envMapRotation;E&&(g.envMap.value=E,ms.copy(v),ms.x*=-1,ms.y*=-1,ms.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),g.envMapRotation.value.setFromMatrix4(Dy.makeRotationFromEuler(ms)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=E*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ny(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,E){let v=E.program;i.uniformBlockBinding(M,v)}function l(M,E){let v=s[M.id];v===void 0&&(m(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",g));let T=E.program;i.updateUBOMapping(M,T);let S=e.render.frame;r[M.id]!==S&&(f(M),r[M.id]=S)}function h(M){let E=u();M.__bindingPointIndex=E;let v=n.createBuffer(),T=M.__size,S=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,T,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let E=s[M.id],v=M.uniforms,T=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let S=0,b=v.length;S<b;S++){let w=Array.isArray(v[S])?v[S]:[v[S]];for(let y=0,_=w.length;y<_;y++){let C=w[y];if(d(C,S,y,T)===!0){let U=C.__offset,L=Array.isArray(C.value)?C.value:[C.value],z=0;for(let G=0;G<L.length;G++){let B=L[G],Q=x(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,U+z,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,z),z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,E,v,T){let S=M.value,b=E+"_"+v;if(T[b]===void 0)return typeof S=="number"||typeof S=="boolean"?T[b]=S:T[b]=S.clone(),!0;{let w=T[b];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return T[b]=S,!0}else if(w.equals(S)===!1)return w.copy(S),!0}return!1}function m(M){let E=M.uniforms,v=0,T=16;for(let b=0,w=E.length;b<w;b++){let y=Array.isArray(E[b])?E[b]:[E[b]];for(let _=0,C=y.length;_<C;_++){let U=y[_],L=Array.isArray(U.value)?U.value:[U.value];for(let z=0,G=L.length;z<G;z++){let B=L[z],Q=x(B),O=v%T,J=O%Q.boundary,re=O+J;v+=J,re!==0&&T-re<Q.storage&&(v+=T-re),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=Q.storage}}}let S=v%T;return S>0&&(v+=T-S),M.__size=v,M.__cache={},this}function x(M){let E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function g(M){let E=M.target;E.removeEventListener("dispose",g);let v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var ic=class{constructor(e={}){let{canvas:t=Df(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,M=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,T=!1;this._outputColorSpace=Kt;let S=0,b=0,w=null,y=-1,_=null,C=new gt,U=new gt,L=null,z=new Ee(0),G=0,B=t.width,Q=t.height,O=1,J=null,re=null,me=new gt(0,0,B,Q),D=new gt(0,0,B,Q),q=!1,te=new tr,ce=!1,Y=!1,j=new et,H=new I,Z=new gt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function je(){return w===null?O:1}let N=i;function de(R,V){return t.getContext(R,V)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",ve,!1),N===null){let V="webgl2";if(N=de(V,R),N===null)throw de(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let le,oe,ae,Se,ge,Te,tt,Qe,P,A,$,ne,pe,ie,Oe,be,Ne,Fe,xe,Pe,$e,ze,Ce,st;function k(){le=new Qx(N),le.init(),ze=new Iy(N,le),oe=new qx(N,le,e,ze),ae=new Ry(N,le),oe.reversedDepthBuffer&&f&&ae.buffers.depth.setReversed(!0),Se=new nv(N),ge=new my,Te=new Cy(N,le,ae,ge,oe,ze,Se),tt=new Zx(v),Qe=new jx(v),P=new l0(N),Ce=new Wx(N,P),A=new ev(N,P,Se,Ce),$=new sv(N,A,P,Se),xe=new iv(N,oe,Te),be=new Yx(ge),ne=new py(v,tt,Qe,le,oe,Ce,be),pe=new Uy(v,ge),ie=new xy,Oe=new by(le),Fe=new Vx(v,tt,Qe,ae,$,d,c),Ne=new wy(v,$,oe),st=new Ny(N,Se,oe,ae),Pe=new Xx(N,le,Se),$e=new tv(N,le,Se),Se.programs=ne.programs,v.capabilities=oe,v.extensions=le,v.properties=ge,v.renderLists=ie,v.shadowMap=Ne,v.state=ae,v.info=Se}k();let _e=new qh(v,N);this.xr=_e,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let R=le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(R){R!==void 0&&(O=R,this.setSize(B,Q,!1))},this.getSize=function(R){return R.set(B,Q)},this.setSize=function(R,V,K=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Q=V,t.width=Math.floor(R*O),t.height=Math.floor(V*O),K===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(B*O,Q*O).floor()},this.setDrawingBufferSize=function(R,V,K){B=R,Q=V,O=K,t.width=Math.floor(R*K),t.height=Math.floor(V*K),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(me)},this.setViewport=function(R,V,K,ee){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,V,K,ee),ae.viewport(C.copy(me).multiplyScalar(O).round())},this.getScissor=function(R){return R.copy(D)},this.setScissor=function(R,V,K,ee){R.isVector4?D.set(R.x,R.y,R.z,R.w):D.set(R,V,K,ee),ae.scissor(U.copy(D).multiplyScalar(O).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(R){ae.setScissorTest(q=R)},this.setOpaqueSort=function(R){J=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,K=!0){let ee=0;if(R){let X=!1;if(w!==null){let ye=w.texture.format;X=ye===Tl||ye===Sl||ye===bl}if(X){let ye=w.texture.type,Ie=ye===$n||ye===zi||ye===hr||ye===ur||ye===_l||ye===Ml,Ue=Fe.getClearColor(),Le=Fe.getClearAlpha(),Ze=Ue.r,Ke=Ue.g,We=Ue.b;Ie?(m[0]=Ze,m[1]=Ke,m[2]=We,m[3]=Le,N.clearBufferuiv(N.COLOR,0,m)):(x[0]=Ze,x[1]=Ke,x[2]=We,x[3]=Le,N.clearBufferiv(N.COLOR,0,x))}else ee|=N.COLOR_BUFFER_BIT}V&&(ee|=N.DEPTH_BUFFER_BIT),K&&(ee|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Fe.dispose(),ie.dispose(),Oe.dispose(),ge.dispose(),tt.dispose(),Qe.dispose(),$.dispose(),Ce.dispose(),st.dispose(),ne.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",ei),_e.removeEventListener("sessionend",du),qi.stop()};function we(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let R=Se.autoReset,V=Ne.enabled,K=Ne.autoUpdate,ee=Ne.needsUpdate,X=Ne.type;k(),Se.autoReset=R,Ne.enabled=V,Ne.autoUpdate=K,Ne.needsUpdate=ee,Ne.type=X}function ve(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function he(R){let V=R.target;V.removeEventListener("dispose",he),Be(V)}function Be(R){nt(R),ge.remove(R)}function nt(R){let V=ge.get(R).programs;V!==void 0&&(V.forEach(function(K){ne.releaseProgram(K)}),R.isShaderMaterial&&ne.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,K,ee,X,ye){V===null&&(V=se);let Ie=X.isMesh&&X.matrixWorld.determinant()<0,Ue=Lp(R,V,K,ee,X);ae.setMaterial(ee,Ie);let Le=K.index,Ze=1;if(ee.wireframe===!0){if(Le=A.getWireframeAttribute(K),Le===void 0)return;Ze=2}let Ke=K.drawRange,We=K.attributes.position,pt=Ke.start*Ze,Rt=(Ke.start+Ke.count)*Ze;ye!==null&&(pt=Math.max(pt,ye.start*Ze),Rt=Math.min(Rt,(ye.start+ye.count)*Ze)),Le!==null?(pt=Math.max(pt,0),Rt=Math.min(Rt,Le.count)):We!=null&&(pt=Math.max(pt,0),Rt=Math.min(Rt,We.count));let zt=Rt-pt;if(zt<0||zt===1/0)return;Ce.setup(X,ee,Ue,K,Le);let Pt,Ct=Pe;if(Le!==null&&(Pt=P.get(Le),Ct=$e,Ct.setIndex(Pt)),X.isMesh)ee.wireframe===!0?(ae.setLineWidth(ee.wireframeLinewidth*je()),Ct.setMode(N.LINES)):Ct.setMode(N.TRIANGLES);else if(X.isLine){let qe=ee.linewidth;qe===void 0&&(qe=1),ae.setLineWidth(qe*je()),X.isLineSegments?Ct.setMode(N.LINES):X.isLineLoop?Ct.setMode(N.LINE_LOOP):Ct.setMode(N.LINE_STRIP)}else X.isPoints?Ct.setMode(N.POINTS):X.isSprite&&Ct.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))Ct.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let qe=X._multiDrawStarts,Nt=X._multiDrawCounts,_t=X._multiDrawCount,Sn=Le?P.get(Le).bytesPerElement:1,ws=ge.get(ee).currentProgram.getUniforms();for(let Tn=0;Tn<_t;Tn++)ws.setValue(N,"_gl_DrawID",Tn),Ct.render(qe[Tn]/Sn,Nt[Tn])}else if(X.isInstancedMesh)Ct.renderInstances(pt,zt,X.count);else if(K.isInstancedBufferGeometry){let qe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Nt=Math.min(K.instanceCount,qe);Ct.renderInstances(pt,zt,Nt)}else Ct.render(pt,zt)};function It(R,V,K){R.transparent===!0&&R.side===St&&R.forceSinglePass===!1?(R.side=$t,R.needsUpdate=!0,Zo(R,V,K),R.side=vi,R.needsUpdate=!0,Zo(R,V,K),R.side=St):Zo(R,V,K)}this.compile=function(R,V,K=null){K===null&&(K=R),p=Oe.get(K),p.init(V),E.push(p),K.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),R!==K&&R.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let ee=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ye=X.material;if(ye)if(Array.isArray(ye))for(let Ie=0;Ie<ye.length;Ie++){let Ue=ye[Ie];It(Ue,K,X),ee.add(Ue)}else It(ye,K,X),ee.add(ye)}),p=E.pop(),ee},this.compileAsync=function(R,V,K=null){let ee=this.compile(R,V,K);return new Promise(X=>{function ye(){if(ee.forEach(function(Ie){ge.get(Ie).currentProgram.isReady()&&ee.delete(Ie)}),ee.size===0){X(R);return}setTimeout(ye,10)}le.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let bt=null;function hi(R){bt&&bt(R)}function ei(){qi.stop()}function du(){qi.start()}let qi=new ud;qi.setAnimationLoop(hi),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(R){bt=R,_e.setAnimationLoop(R),R===null?qi.stop():qi.start()},_e.addEventListener("sessionstart",ei),_e.addEventListener("sessionend",du),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(V),V=_e.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,V,w),p=Oe.get(R,E.length),p.init(V),E.push(p),j.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),te.setFromProjectionMatrix(j,Xn,V.reversedDepth),Y=this.localClippingEnabled,ce=be.init(this.clippingPlanes,Y),g=ie.get(R,M.length),g.init(),M.push(g),_e.enabled===!0&&_e.isPresenting===!0){let ye=v.xr.getDepthSensingMesh();ye!==null&&Mc(ye,V,-1/0,v.sortObjects)}Mc(R,V,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(J,re),Me=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Me&&Fe.addToRenderList(g,R),this.info.render.frame++,ce===!0&&be.beginShadows();let K=p.state.shadowsArray;Ne.render(K,R,V),ce===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();let ee=g.opaque,X=g.transmissive;if(p.setupLights(),V.isArrayCamera){let ye=V.cameras;if(X.length>0)for(let Ie=0,Ue=ye.length;Ie<Ue;Ie++){let Le=ye[Ie];mu(ee,X,R,Le)}Me&&Fe.render(R);for(let Ie=0,Ue=ye.length;Ie<Ue;Ie++){let Le=ye[Ie];pu(g,R,Le,Le.viewport)}}else X.length>0&&mu(ee,X,R,V),Me&&Fe.render(R),pu(g,R,V);w!==null&&b===0&&(Te.updateMultisampleRenderTarget(w),Te.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(v,R,V),Ce.resetDefaultState(),y=-1,_=null,E.pop(),E.length>0?(p=E[E.length-1],ce===!0&&be.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Mc(R,V,K,ee){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||te.intersectsSprite(R)){ee&&Z.setFromMatrixPosition(R.matrixWorld).applyMatrix4(j);let Ie=$.update(R),Ue=R.material;Ue.visible&&g.push(R,Ie,Ue,K,Z.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||te.intersectsObject(R))){let Ie=$.update(R),Ue=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Z.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Z.copy(Ie.boundingSphere.center)),Z.applyMatrix4(R.matrixWorld).applyMatrix4(j)),Array.isArray(Ue)){let Le=Ie.groups;for(let Ze=0,Ke=Le.length;Ze<Ke;Ze++){let We=Le[Ze],pt=Ue[We.materialIndex];pt&&pt.visible&&g.push(R,Ie,pt,K,Z.z,We)}}else Ue.visible&&g.push(R,Ie,Ue,K,Z.z,null)}}let ye=R.children;for(let Ie=0,Ue=ye.length;Ie<Ue;Ie++)Mc(ye[Ie],V,K,ee)}function pu(R,V,K,ee){let X=R.opaque,ye=R.transmissive,Ie=R.transparent;p.setupLightsView(K),ce===!0&&be.setGlobalState(v.clippingPlanes,K),ee&&ae.viewport(C.copy(ee)),X.length>0&&Yo(X,V,K),ye.length>0&&Yo(ye,V,K),Ie.length>0&&Yo(Ie,V,K),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function mu(R,V,K,ee){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new Zt(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?cn:$n,minFilter:Oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));let ye=p.state.transmissionRenderTarget[ee.id],Ie=ee.viewport||C;ye.setSize(Ie.z*v.transmissionResolutionScale,Ie.w*v.transmissionResolutionScale);let Ue=v.getRenderTarget(),Le=v.getActiveCubeFace(),Ze=v.getActiveMipmapLevel();v.setRenderTarget(ye),v.getClearColor(z),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),Me&&Fe.render(K);let Ke=v.toneMapping;v.toneMapping=Mi;let We=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),ce===!0&&be.setGlobalState(v.clippingPlanes,ee),Yo(R,K,ee),Te.updateMultisampleRenderTarget(ye),Te.updateRenderTargetMipmap(ye),le.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Rt=0,zt=V.length;Rt<zt;Rt++){let Pt=V[Rt],Ct=Pt.object,qe=Pt.geometry,Nt=Pt.material,_t=Pt.group;if(Nt.side===St&&Ct.layers.test(ee.layers)){let Sn=Nt.side;Nt.side=$t,Nt.needsUpdate=!0,gu(Ct,K,ee,qe,Nt,_t),Nt.side=Sn,Nt.needsUpdate=!0,pt=!0}}pt===!0&&(Te.updateMultisampleRenderTarget(ye),Te.updateRenderTargetMipmap(ye))}v.setRenderTarget(Ue,Le,Ze),v.setClearColor(z,G),We!==void 0&&(ee.viewport=We),v.toneMapping=Ke}function Yo(R,V,K){let ee=V.isScene===!0?V.overrideMaterial:null;for(let X=0,ye=R.length;X<ye;X++){let Ie=R[X],Ue=Ie.object,Le=Ie.geometry,Ze=Ie.group,Ke=Ie.material;Ke.allowOverride===!0&&ee!==null&&(Ke=ee),Ue.layers.test(K.layers)&&gu(Ue,V,K,Le,Ke,Ze)}}function gu(R,V,K,ee,X,ye){R.onBeforeRender(v,V,K,ee,X,ye),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(v,V,K,ee,R,ye),X.transparent===!0&&X.side===St&&X.forceSinglePass===!1?(X.side=$t,X.needsUpdate=!0,v.renderBufferDirect(K,V,ee,X,R,ye),X.side=vi,X.needsUpdate=!0,v.renderBufferDirect(K,V,ee,X,R,ye),X.side=St):v.renderBufferDirect(K,V,ee,X,R,ye),R.onAfterRender(v,V,K,ee,X,ye)}function Zo(R,V,K){V.isScene!==!0&&(V=se);let ee=ge.get(R),X=p.state.lights,ye=p.state.shadowsArray,Ie=X.state.version,Ue=ne.getParameters(R,X.state,ye,V,K),Le=ne.getProgramCacheKey(Ue),Ze=ee.programs;ee.environment=R.isMeshStandardMaterial?V.environment:null,ee.fog=V.fog,ee.envMap=(R.isMeshStandardMaterial?Qe:tt).get(R.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",he),Ze=new Map,ee.programs=Ze);let Ke=Ze.get(Le);if(Ke!==void 0){if(ee.currentProgram===Ke&&ee.lightsStateVersion===Ie)return vu(R,Ue),Ke}else Ue.uniforms=ne.getUniforms(R),R.onBeforeCompile(Ue,v),Ke=ne.acquireProgram(Ue,Le),Ze.set(Le,Ke),ee.uniforms=Ue.uniforms;let We=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=be.uniform),vu(R,Ue),ee.needsLights=Up(R),ee.lightsStateVersion=Ie,ee.needsLights&&(We.ambientLightColor.value=X.state.ambient,We.lightProbe.value=X.state.probe,We.directionalLights.value=X.state.directional,We.directionalLightShadows.value=X.state.directionalShadow,We.spotLights.value=X.state.spot,We.spotLightShadows.value=X.state.spotShadow,We.rectAreaLights.value=X.state.rectArea,We.ltc_1.value=X.state.rectAreaLTC1,We.ltc_2.value=X.state.rectAreaLTC2,We.pointLights.value=X.state.point,We.pointLightShadows.value=X.state.pointShadow,We.hemisphereLights.value=X.state.hemi,We.directionalShadowMap.value=X.state.directionalShadowMap,We.directionalShadowMatrix.value=X.state.directionalShadowMatrix,We.spotShadowMap.value=X.state.spotShadowMap,We.spotLightMatrix.value=X.state.spotLightMatrix,We.spotLightMap.value=X.state.spotLightMap,We.pointShadowMap.value=X.state.pointShadowMap,We.pointShadowMatrix.value=X.state.pointShadowMatrix),ee.currentProgram=Ke,ee.uniformsList=null,Ke}function xu(R){if(R.uniformsList===null){let V=R.currentProgram.getUniforms();R.uniformsList=mr.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function vu(R,V){let K=ge.get(R);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function Lp(R,V,K,ee,X){V.isScene!==!0&&(V=se),Te.resetTextureUnits();let ye=V.fog,Ie=ee.isMeshStandardMaterial?V.environment:null,Ue=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ns,Le=(ee.isMeshStandardMaterial?Qe:tt).get(ee.envMap||Ie),Ze=ee.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ke=!!K.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),We=!!K.morphAttributes.position,pt=!!K.morphAttributes.normal,Rt=!!K.morphAttributes.color,zt=Mi;ee.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(zt=v.toneMapping);let Pt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ct=Pt!==void 0?Pt.length:0,qe=ge.get(ee),Nt=p.state.lights;if(ce===!0&&(Y===!0||R!==_)){let dn=R===_&&ee.id===y;be.setState(ee,R,dn)}let _t=!1;ee.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Nt.state.version||qe.outputColorSpace!==Ue||X.isBatchedMesh&&qe.batching===!1||!X.isBatchedMesh&&qe.batching===!0||X.isBatchedMesh&&qe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&qe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&qe.instancing===!1||!X.isInstancedMesh&&qe.instancing===!0||X.isSkinnedMesh&&qe.skinning===!1||!X.isSkinnedMesh&&qe.skinning===!0||X.isInstancedMesh&&qe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&qe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&qe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&qe.instancingMorph===!1&&X.morphTexture!==null||qe.envMap!==Le||ee.fog===!0&&qe.fog!==ye||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==be.numPlanes||qe.numIntersection!==be.numIntersection)||qe.vertexAlphas!==Ze||qe.vertexTangents!==Ke||qe.morphTargets!==We||qe.morphNormals!==pt||qe.morphColors!==Rt||qe.toneMapping!==zt||qe.morphTargetsCount!==Ct)&&(_t=!0):(_t=!0,qe.__version=ee.version);let Sn=qe.currentProgram;_t===!0&&(Sn=Zo(ee,V,X));let ws=!1,Tn=!1,Dr=!1,Ft=Sn.getUniforms(),Dn=qe.uniforms;if(ae.useProgram(Sn.program)&&(ws=!0,Tn=!0,Dr=!0),ee.id!==y&&(y=ee.id,Tn=!0),ws||_!==R){ae.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ft.setValue(N,"projectionMatrix",R.projectionMatrix),Ft.setValue(N,"viewMatrix",R.matrixWorldInverse);let yn=Ft.map.cameraPosition;yn!==void 0&&yn.setValue(N,H.setFromMatrixPosition(R.matrixWorld)),oe.logarithmicDepthBuffer&&Ft.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Ft.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),_!==R&&(_=R,Tn=!0,Dr=!0)}if(X.isSkinnedMesh){Ft.setOptional(N,X,"bindMatrix"),Ft.setOptional(N,X,"bindMatrixInverse");let dn=X.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Ft.setValue(N,"boneTexture",dn.boneTexture,Te))}X.isBatchedMesh&&(Ft.setOptional(N,X,"batchingTexture"),Ft.setValue(N,"batchingTexture",X._matricesTexture,Te),Ft.setOptional(N,X,"batchingIdTexture"),Ft.setValue(N,"batchingIdTexture",X._indirectTexture,Te),Ft.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&Ft.setValue(N,"batchingColorTexture",X._colorsTexture,Te));let Un=K.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&xe.update(X,K,Sn),(Tn||qe.receiveShadow!==X.receiveShadow)&&(qe.receiveShadow=X.receiveShadow,Ft.setValue(N,"receiveShadow",X.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Dn.envMap.value=Le,Dn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&V.environment!==null&&(Dn.envMapIntensity.value=V.environmentIntensity),Tn&&(Ft.setValue(N,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&Dp(Dn,Dr),ye&&ee.fog===!0&&pe.refreshFogUniforms(Dn,ye),pe.refreshMaterialUniforms(Dn,ee,O,Q,p.state.transmissionRenderTarget[R.id]),mr.upload(N,xu(qe),Dn,Te)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(mr.upload(N,xu(qe),Dn,Te),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Ft.setValue(N,"center",X.center),Ft.setValue(N,"modelViewMatrix",X.modelViewMatrix),Ft.setValue(N,"normalMatrix",X.normalMatrix),Ft.setValue(N,"modelMatrix",X.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let dn=ee.uniformsGroups;for(let yn=0,Ec=dn.length;yn<Ec;yn++){let Yi=dn[yn];st.update(Yi,Sn),st.bind(Yi,Sn)}}return Sn}function Dp(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Up(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,V,K){let ee=ge.get(R);ee.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),ge.get(R.texture).__webglTexture=V,ge.get(R.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:K,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){let K=ge.get(R);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0};let Np=N.createFramebuffer();this.setRenderTarget=function(R,V=0,K=0){w=R,S=V,b=K;let ee=!0,X=null,ye=!1,Ie=!1;if(R){let Le=ge.get(R);if(Le.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(N.FRAMEBUFFER,null),ee=!1;else if(Le.__webglFramebuffer===void 0)Te.setupRenderTarget(R);else if(Le.__hasExternalTextures)Te.rebindTextures(R,ge.get(R.texture).__webglTexture,ge.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let We=R.depthTexture;if(Le.__boundDepthTexture!==We){if(We!==null&&ge.has(We)&&(R.width!==We.image.width||R.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Te.setupDepthRenderbuffer(R)}}let Ze=R.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ie=!0);let Ke=ge.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ke[V])?X=Ke[V][K]:X=Ke[V],ye=!0):R.samples>0&&Te.useMultisampledRTT(R)===!1?X=ge.get(R).__webglMultisampledFramebuffer:Array.isArray(Ke)?X=Ke[K]:X=Ke,C.copy(R.viewport),U.copy(R.scissor),L=R.scissorTest}else C.copy(me).multiplyScalar(O).floor(),U.copy(D).multiplyScalar(O).floor(),L=q;if(K!==0&&(X=Np),ae.bindFramebuffer(N.FRAMEBUFFER,X)&&ee&&ae.drawBuffers(R,X),ae.viewport(C),ae.scissor(U),ae.setScissorTest(L),ye){let Le=ge.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Le.__webglTexture,K)}else if(Ie){let Le=V;for(let Ze=0;Ze<R.textures.length;Ze++){let Ke=ge.get(R.textures[Ze]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ze,Ke.__webglTexture,K,Le)}}else if(R!==null&&K!==0){let Le=ge.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Le.__webglTexture,K)}y=-1},this.readRenderTargetPixels=function(R,V,K,ee,X,ye,Ie,Ue=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le){ae.bindFramebuffer(N.FRAMEBUFFER,Le);try{let Ze=R.textures[Ue],Ke=Ze.format,We=Ze.type;if(!oe.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-ee&&K>=0&&K<=R.height-X&&(R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ue),N.readPixels(V,K,ee,X,ze.convert(Ke),ze.convert(We),ye))}finally{let Ze=w!==null?ge.get(w).__webglFramebuffer:null;ae.bindFramebuffer(N.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(R,V,K,ee,X,ye,Ie,Ue=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le)if(V>=0&&V<=R.width-ee&&K>=0&&K<=R.height-X){ae.bindFramebuffer(N.FRAMEBUFFER,Le);let Ze=R.textures[Ue],Ke=Ze.format,We=Ze.type;if(!oe.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,pt),N.bufferData(N.PIXEL_PACK_BUFFER,ye.byteLength,N.STREAM_READ),R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ue),N.readPixels(V,K,ee,X,ze.convert(Ke),ze.convert(We),0);let Rt=w!==null?ge.get(w).__webglFramebuffer:null;ae.bindFramebuffer(N.FRAMEBUFFER,Rt);let zt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Uf(N,zt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,pt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ye),N.deleteBuffer(pt),N.deleteSync(zt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,K=0){let ee=Math.pow(2,-K),X=Math.floor(R.image.width*ee),ye=Math.floor(R.image.height*ee),Ie=V!==null?V.x:0,Ue=V!==null?V.y:0;Te.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,Ie,Ue,X,ye),ae.unbindTexture()};let Fp=N.createFramebuffer(),Bp=N.createFramebuffer();this.copyTextureToTexture=function(R,V,K=null,ee=null,X=0,ye=null){ye===null&&(X!==0?(Zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=X,X=0):ye=0);let Ie,Ue,Le,Ze,Ke,We,pt,Rt,zt,Pt=R.isCompressedTexture?R.mipmaps[ye]:R.image;if(K!==null)Ie=K.max.x-K.min.x,Ue=K.max.y-K.min.y,Le=K.isBox3?K.max.z-K.min.z:1,Ze=K.min.x,Ke=K.min.y,We=K.isBox3?K.min.z:0;else{let Un=Math.pow(2,-X);Ie=Math.floor(Pt.width*Un),Ue=Math.floor(Pt.height*Un),R.isDataArrayTexture?Le=Pt.depth:R.isData3DTexture?Le=Math.floor(Pt.depth*Un):Le=1,Ze=0,Ke=0,We=0}ee!==null?(pt=ee.x,Rt=ee.y,zt=ee.z):(pt=0,Rt=0,zt=0);let Ct=ze.convert(V.format),qe=ze.convert(V.type),Nt;V.isData3DTexture?(Te.setTexture3D(V,0),Nt=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Te.setTexture2DArray(V,0),Nt=N.TEXTURE_2D_ARRAY):(Te.setTexture2D(V,0),Nt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);let _t=N.getParameter(N.UNPACK_ROW_LENGTH),Sn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ws=N.getParameter(N.UNPACK_SKIP_PIXELS),Tn=N.getParameter(N.UNPACK_SKIP_ROWS),Dr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Pt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Pt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,We);let Ft=R.isDataArrayTexture||R.isData3DTexture,Dn=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){let Un=ge.get(R),dn=ge.get(V),yn=ge.get(Un.__renderTarget),Ec=ge.get(dn.__renderTarget);ae.bindFramebuffer(N.READ_FRAMEBUFFER,yn.__webglFramebuffer),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ec.__webglFramebuffer);for(let Yi=0;Yi<Le;Yi++)Ft&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ge.get(R).__webglTexture,X,We+Yi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ge.get(V).__webglTexture,ye,zt+Yi)),N.blitFramebuffer(Ze,Ke,Ie,Ue,pt,Rt,Ie,Ue,N.DEPTH_BUFFER_BIT,N.NEAREST);ae.bindFramebuffer(N.READ_FRAMEBUFFER,null),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(X!==0||R.isRenderTargetTexture||ge.has(R)){let Un=ge.get(R),dn=ge.get(V);ae.bindFramebuffer(N.READ_FRAMEBUFFER,Fp),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,Bp);for(let yn=0;yn<Le;yn++)Ft?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Un.__webglTexture,X,We+yn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Un.__webglTexture,X),Dn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,dn.__webglTexture,ye,zt+yn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,dn.__webglTexture,ye),X!==0?N.blitFramebuffer(Ze,Ke,Ie,Ue,pt,Rt,Ie,Ue,N.COLOR_BUFFER_BIT,N.NEAREST):Dn?N.copyTexSubImage3D(Nt,ye,pt,Rt,zt+yn,Ze,Ke,Ie,Ue):N.copyTexSubImage2D(Nt,ye,pt,Rt,Ze,Ke,Ie,Ue);ae.bindFramebuffer(N.READ_FRAMEBUFFER,null),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Dn?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(Nt,ye,pt,Rt,zt,Ie,Ue,Le,Ct,qe,Pt.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(Nt,ye,pt,Rt,zt,Ie,Ue,Le,Ct,Pt.data):N.texSubImage3D(Nt,ye,pt,Rt,zt,Ie,Ue,Le,Ct,qe,Pt):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ye,pt,Rt,Ie,Ue,Ct,qe,Pt.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ye,pt,Rt,Pt.width,Pt.height,Ct,Pt.data):N.texSubImage2D(N.TEXTURE_2D,ye,pt,Rt,Ie,Ue,Ct,qe,Pt);N.pixelStorei(N.UNPACK_ROW_LENGTH,_t),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Sn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ws),N.pixelStorei(N.UNPACK_SKIP_ROWS,Tn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Dr),ye===0&&V.generateMipmaps&&N.generateMipmap(Nt),ae.unbindTexture()},this.initRenderTarget=function(R){ge.get(R).__webglFramebuffer===void 0&&Te.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Te.setTextureCube(R,0):R.isData3DTexture?Te.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Te.setTexture2DArray(R,0):Te.setTexture2D(R,0),ae.unbindTexture()},this.resetState=function(){S=0,b=0,w=null,ae.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};var Wt=[{id:"bund",name:"\u5916\u6EE9",sub:"\u4E07\u56FD\u5EFA\u7B51\u535A\u89C8\u7FA4"},{id:"nanjing",name:"\u5357\u4EAC\u8DEF",sub:"\u9713\u8679\u6B65\u884C\u8857"},{id:"wukang",name:"\u9759\u5B89\u5BFA \xB7 \u6B66\u5EB7\u8DEF",sub:"\u68A7\u6850\u4E0E\u8001\u6D0B\u623F"},{id:"yuyuan",name:"\u8C6B\u56ED",sub:"\u4E5D\u66F2\u6865\u706F\u4F1A"},{id:"nanpu",name:"\u5357\u6D66\u5927\u6865",sub:"\u87BA\u65CB\u5F15\u6865"},{id:"glide",name:"\u5B54\u660E\u706F\u6ED1\u7FD4",sub:"\u98DE\u8DC3\u9EC4\u6D66\u6C5F"},{id:"pudong",name:"\u6D66\u4E1C\u6EE8\u6C5F",sub:"\u6C5F\u8FB9\u8349\u576A"},{id:"lujiazui",name:"\u9646\u5BB6\u5634",sub:"\u73AF\u5F62\u5929\u6865"},{id:"tunnel",name:"\u5916\u6EE9\u89C2\u5149\u96A7\u9053",sub:"\u7A7F\u8D8A\u6C5F\u5E95"}],Fy=Object.fromEntries(Wt.map((n,e)=>[n.id,e])),By=.82,vr=By;function Xe(n,e,t,i,s=9,r=0,o="wall"){return{X:n*vr,N:e*vr,y:t,zone:Fy[i],hw:s,off:r,edge:o}}function gd(n,e,t,i,s,r,o,a,c){let l=[];for(let h=0;h<=a;h++){let u=h/a,f=i+(s-i)*u;l.push(Xe(n+Math.cos(f)*t,e+Math.sin(f)*t,r+(o-r)*u,c,8.5))}return l}var Si=(n,e)=>[n*vr,e*vr],Dt=[[35,-1300],[36,-640],[34,-440],[30,-200],[20,-20],[30,90],[90,180],[220,240],[500,270],[1300,300]].map(([n,e])=>[n*vr,e*vr]),vn=48,Fo=[Xe(-66,-205,1,"bund",9.5),Xe(-66,-130,1,"bund",9.5),Xe(-66,-50,1,"bund",9.5),Xe(-68,50,1,"bund",9.5),Xe(-86,100,1,"bund",9),Xe(-125,120,1,"nanjing",8.5),Xe(-205,121,1,"nanjing",8.5),Xe(-282,110,1,"nanjing",8.5),Xe(-360,124,1,"nanjing",8.5),Xe(-438,116,1,"nanjing",8.5),Xe(-500,106,1,"wukang",8.5,3),Xe(-536,74,1,"wukang",8.5,3),Xe(-546,12,1,"wukang",8.5,3.5),Xe(-528,-54,1,"wukang",8.5,3.5),Xe(-556,-122,1,"wukang",8.5,3.5),Xe(-540,-190,1,"wukang",8.5,3),Xe(-518,-244,1,"wukang",8.5,2),Xe(-468,-276,1,"wukang",8.5,2),Xe(-404,-290,1,"yuyuan",8,2),Xe(-346,-296,1,"yuyuan",8),Xe(-314,-286,1.4,"yuyuan",6.5,0,"open"),Xe(-287,-304,1.4,"yuyuan",6.5,0,"open"),Xe(-260,-286,1.4,"yuyuan",6.5,0,"open"),Xe(-233,-304,1.4,"yuyuan",6.5,0,"open"),Xe(-212,-300,1,"yuyuan",8),Xe(-194,-322,1,"nanpu",8.5),Xe(-190,-356,1.2,"nanpu",8.5),...gd(-150,-400,42,Math.PI,Math.PI*3.5,2,31,15,"nanpu"),Xe(-100,-442,31.5,"nanpu",9),Xe(-20,-444,32.5,"nanpu",9),Xe(60,-444,32.5,"nanpu",9),Xe(138,-442,32,"nanpu",9),Xe(186,-440,27,"glide",14,0,"air"),Xe(226,-434,15,"glide",14,0,"air"),Xe(258,-420,5,"glide",13,0,"air"),Xe(286,-392,1,"pudong",9.5,4),Xe(300,-322,1,"pudong",9.5,4),Xe(272,-242,1,"pudong",9.5,4),Xe(252,-162,1,"pudong",9.5,4),Xe(230,-92,1,"pudong",9,3),Xe(214,-30,2,"lujiazui",8.5),...gd(170,40,36,0,Math.PI,4,6,6,"lujiazui"),Xe(126,10,3,"lujiazui",8.5),Xe(108,-18,-2,"tunnel",8),Xe(80,-52,-10,"tunnel",8),Xe(42,-104,-14,"tunnel",8),Xe(6,-170,-14,"tunnel",8),Xe(-26,-236,-9,"tunnel",8),Xe(-44,-292,-1.5,"tunnel",8),Xe(-56,-336,1,"bund",9),Xe(-80,-352,1,"bund",9),Xe(-100,-332,1,"bund",9),Xe(-78,-296,1,"bund",9.5),Xe(-66,-258,1,"bund",9.5)],vs=3;function xd(){let n=Fo.map(S=>new I(S.X,S.y,-S.N)),e=new sr(n,!0,"centripetal",.5),t=e.getLength(),i=Math.ceil(t),s=t/i,r=new Float32Array(i),o=new Float32Array(i),a=new Float32Array(i),c=new Float32Array(i),l=new Float32Array(i),h=new Float32Array(i),u=new Float32Array(i),f=new Float32Array(i),d=new Float32Array(i),m=new Uint8Array(i),x=new Uint8Array(i),g={wall:0,open:1,air:2},p=Fo.length,M=new I,E=new I;for(let S=0;S<i;S++){let b=S/i;e.getPointAt(b,M),e.getTangentAt(b,E),r[S]=M.x,o[S]=M.y,a[S]=M.z;let w=Math.hypot(E.x,E.z)||1;c[S]=E.x/w,l[S]=E.z/w,h[S]=E.y;let y=e.getUtoTmapping(b)*p,_=Math.floor(y)%p,C=(_+1)%p,U=y-Math.floor(y),L=Fo[_],z=Fo[C];f[S]=L.hw+(z.hw-L.hw)*U,d[S]=L.off+(z.off-L.off)*U,m[S]=U<.5?L.zone:z.zone,x[S]=L.edge===z.edge?g[L.edge]:g[L.edge==="air"||z.edge==="air"?"air":"wall"]}for(let S=0;S<i;S++){let b=(S-2+i)%i,w=(S+2)%i,y=c[w]-c[b],_=l[w]-l[b];u[S]=(y*-l[S]+_*c[S])/(4*s)}let v=new Float32Array(i);for(let S=0;S<i;S++){let b=0;for(let w=-6;w<=6;w++)b+=u[(S+w+i)%i];v[S]=b/13}let T={curve:e,length:t,n:i,step:s,px:r,py:o,pz:a,fx:c,fy:h,fz:l,k:v,hw:f,off:d,zone:m,edge:x,control:Fo};return T.grid=zy(T),T}function Mn(n,e){let t=n.length;return(e%t+t)%t}function rt(n,e,t={}){let i=Mn(n,e)/n.step,s=Math.floor(i)%n.n,r=(s+1)%n.n,o=i-Math.floor(i),a=u=>u[s]+(u[r]-u[s])*o;t.x=a(n.px),t.y=a(n.py),t.z=a(n.pz);let c=a(n.fx),l=a(n.fz),h=Math.hypot(c,l)||1;return t.fx=c/h,t.fz=l/h,t.fy=a(n.fy),t.rx=-t.fz,t.rz=t.fx,t.k=a(n.k),t.hw=a(n.hw),t.off=a(n.off),t.zone=n.zone[o<.5?s:r],t.edge=n.edge[o<.5?s:r],t}function ai(n,e,t,i=0,s=new I){let r=rt(n,e,Oy);return s.set(r.x+r.rx*t,r.y+i,r.z+r.rz*t)}var Oy={};function zy(n){let t=new Map;for(let i=0;i<n.n;i+=2){let s=Math.floor(n.px[i]/24)+","+Math.floor(n.pz[i]/24);t.has(s)||t.set(s,[]),t.get(s).push(i)}return{cell:24,map:t}}function yr(n,e,t,i=3){let{cell:s,map:r}=n.grid,o=Math.floor(e/s),a=Math.floor(t/s),c=-1,l=1/0;for(let h=0;h<=i;h++){for(let u=-h;u<=h;u++)for(let f=-h;f<=h;f++){if(Math.max(Math.abs(u),Math.abs(f))!==h)continue;let d=r.get(o+u+","+(a+f));if(d)for(let m of d){let x=(n.px[m]-e)**2+(n.pz[m]-t)**2;x<l&&(l=x,c=m)}}if(c>=0&&h>=1)break}return c<0?{i:-1,dist:1/0,s:0}:{i:c,dist:Math.sqrt(l),s:c*n.step,y:n.py[c]}}function rc(n,e){let t=1/0;for(let i=0;i<Dt.length-1;i++){let[s,r]=Dt[i],[o,a]=Dt[i+1],c=o-s,l=a-r,h=Math.max(0,Math.min(1,((n-s)*c+(e-r)*l)/(c*c+l*l))),u=Math.hypot(n-(s+c*h),e-(r+l*h));u<t&&(t=u)}return t}function vd(n){let e={},t=-1;for(let b=0;b<n.n;b++){let w=n.zone[b];if(w!==t){let y=Wt[w].id;(e[y]||(e[y]=[])).push(b*n.step),t=w}}let i=(b,w=0)=>{let y=e[b][w],_=y,C=Wt.findIndex(U=>U.id===b);for(;_<y+n.length&&n.zone[Math.floor(Mn(n,_)/n.step)%n.n]===C;)_+=n.step;return _-y},s=(b,w,y=0)=>Mn(n,e[b][y]+w),r={},o=b=>rt(n,b,r).hw,a=b=>rt(n,b,r).k,c=[{s:s("nanjing",150),power:13.5,w:99},{s:s("wukang",292),power:11,w:99},{s:s("pudong",150),power:12.5,w:99},{s:s("tunnel",i("tunnel")-34),power:11.5,w:99},{s:s("lujiazui",150),power:10.5,w:99}],l=[],h=(b,w=0)=>l.push({s:b,d:w,w:4.2});h(s("bund",110),-4),h(s("bund",190),4),h(s("nanjing",62),0),h(s("wukang",150),3.5),h(s("wukang",372),-3),h(s("yuyuan",i("yuyuan")-18),0),h(s("nanpu",i("nanpu")-200),0),h(s("nanpu",i("nanpu")-80),-4),h(s("nanpu",i("nanpu")-80),4),h(s("pudong",64),-3),h(s("pudong",246),3),h(s("tunnel",64),0),h(s("tunnel",80),0),h(s("tunnel",96),0),h(s("tunnel",200),-3.5),h(s("tunnel",212),3.5),h(s("bund",110,1),0);let u=[],f=b=>{let w=o(b);u.push({s:b,ds:[-.62,-.21,.21,.62].map(y=>y*w*1.05)})};f(s("bund",150)),f(s("nanjing",232)),f(s("wukang",222)),f(s("nanpu",34)),f(s("nanpu",i("nanpu")-140)),f(s("pudong",118)),f(s("tunnel",150));let d=[],m=(b,w,y,_,C=()=>.9)=>{for(let U=0;U<w;U++){let L=Mn(n,b+U*y);d.push({s:L,d:typeof _=="function"?_(U,L):_,h:C(U,L)})}},x=(b=.55)=>(w,y)=>Math.sign(a(y+6))*o(y)*b,g=(b,w=5)=>y=>Math.sin(y/w*Math.PI*2)*b,p=(b,w,y=48)=>_=>{let C=_*w/y;return Math.max(.9,b*C-.5*44*C*C+.9)};m(s("bund",30),6,6,0),m(s("bund",205),6,6,-5),m(s("nanjing",18),8,6,g(5,8)),m(s("nanjing",150),7,5,0,p(13.5,5)),m(s("nanjing",262),6,6,5),m(s("wukang",36),6,6,-4),m(s("wukang",176),6,6,4.5),m(s("wukang",250),8,5,g(5,8)),m(s("wukang",292),6,5,0,p(11,5)),m(s("wukang",350),7,6,x()),m(s("yuyuan",58),14,7,0),m(s("nanpu",60),12,14,x(.5)),m(s("nanpu",290),10,14,x(.5));for(let b=0;b<12;b++){let w=s("glide",8+b*7.5);d.push({s:w,d:Math.sin(b*.9)*7,h:1.5+Math.cos(b*.7)*1.2})}m(s("pudong",20),6,6,4),m(s("pudong",150),7,5,0,p(12.5,5)),m(s("pudong",200),8,6,g(6,8)),m(s("lujiazui",30),10,9,x(.5)),m(s("lujiazui",150),6,5,0,p(10.5,5)),m(s("tunnel",110),8,6,-4),m(s("tunnel",170),8,6,4),m(s("bund",20,1),8,6,x(.5));let M=[],E=(b,w)=>M.push({type:"trash",s:b,d:w,r:1.5}),v=(b,w)=>M.push({type:"cone",s:b,d:w,r:.9});E(s("bund",238),2.5),v(s("nanjing",100),-6),v(s("nanjing",104),-3.5),v(s("nanjing",108),-1),E(s("wukang",118),-3),v(s("wukang",322),3.5),v(s("wukang",326),5.5),E(s("yuyuan",24),0),E(s("pudong",212),0),E(s("tunnel",258),3),E(s("lujiazui",80),-3);let T=[{type:"train",s:s("nanjing",178),d:0,range:13,speed:7.5,phase:0,r:5.2},{type:"rollcake",s0:s("lujiazui",128),s1:s("lujiazui",18),s:s("lujiazui",128),d:0,speed:18,phase:0,r:2.6}],S=[];for(let b=0;b<n.length;b+=10){let w=rt(n,b,r);Math.abs(w.k)>.028&&w.edge===0&&Wt[w.zone].id!=="tunnel"&&S.push({s:b,side:-Math.sign(w.k),dir:Math.sign(w.k)})}return{starts:e,at:s,zoneLen:i,ramps:c,pads:l,itemRows:u,cakes:d,hazards:M,movers:T,chevrons:S}}var Hi={easy:{id:"easy",name:"\u6842\u82B1\u676F",desc:"\u8F7B\u677E \xB7 \u9002\u5408\u7B2C\u4E00\u6B21",vmax:46,ai:[.84,.87,.9,.92,.94],itemRate:.45,aiDrift:.2},normal:{id:"normal",name:"\u6708\u997C\u676F",desc:"\u6807\u51C6 \xB7 \u9700\u8981\u6F02\u79FB",vmax:52,ai:[.89,.92,.95,.97,.99],itemRate:.75,aiDrift:.5},hard:{id:"hard",name:"\u6EE1\u6708\u676F",desc:"\u9AD8\u901F \xB7 \u7389\u5154\u5168\u529B",vmax:58,ai:[.93,.96,.98,1,1.02],itemRate:1,aiDrift:.85}},dt={accel:26,boostAccel:90,decel:20,steerMax:17,driftSteer:21,centrifugal:.15,pushCap:12.5,wallLoss:.86,gravity:44,hop:7.5,cakeBonus:.013,maxCakes:10,offroadMul:.58,boostMul:1.38,padTime:1.1,turbo:[.75,1.25,1.85],driftLevels:[.85,1.8,2.9],spinTime:1.05,rescueTime:1.9,lanternTime:3.6,lanternMul:1.55,invulnAfterHit:1.3,startWindow:.28},yd={boost:{name:"\u6842\u82B1\u51B2\u523A",key:"boost",desc:"\u7ACB\u523B\u52A0\u901F"},boost3:{name:"\u4E09\u8FDE\u6842\u82B1\u51B2\u523A",key:"boost3",desc:"\u4E09\u6B21\u52A0\u901F"},peel:{name:"\u67DA\u5B50\u76AE",key:"peel",desc:"\u4E22\u5728\u8EAB\u540E\u8BA9\u5BF9\u624B\u6253\u6ED1"},frisbee:{name:"\u6708\u997C\u98DE\u76D8",key:"frisbee",desc:"\u5411\u524D\u76F4\u7EBF\u98DE\u51FA"},firework:{name:"\u8FFD\u8E2A\u70DF\u82B1",key:"firework",desc:"\u81EA\u52A8\u8FFD\u51FB\u524D\u4E00\u540D"},shield:{name:"\u5154\u5B50\u706F\u62A4\u76FE",key:"shield",desc:"\u6321\u4E0B\u4E00\u6B21\u653B\u51FB"},lantern:{name:"\u5B54\u660E\u706F",key:"lantern",desc:"\u81EA\u52A8\u98DE\u884C\u3001\u65E0\u654C\u3001\u6781\u901F"},moon:{name:"\u6EE1\u6708\u4E4B\u5149",key:"moon",desc:"\u6643\u6655\u6240\u6709\u524D\u65B9\u9009\u624B"}},Zh=[{boost:22,peel:40,frisbee:24,shield:14},{boost:24,peel:20,frisbee:24,firework:16,shield:16},{boost:22,boost3:8,peel:14,frisbee:22,firework:20,shield:14},{boost3:24,frisbee:16,firework:28,shield:10,lantern:22},{boost3:26,firework:26,frisbee:8,lantern:30,moon:10},{boost3:28,firework:22,lantern:34,moon:16}];function Hy(n,e=6){let t=Math.min(Zh.length-1,Math.round((n-1)/Math.max(1,e-1)*(Zh.length-1)));return Zh[t]}function _d(n,e=Math.random,t=6){let i=Hy(n,t),s=Object.values(i).reduce((o,a)=>o+a,0),r=e()*s;for(let[o,a]of Object.entries(i))if((r-=a)<0)return o;return Object.keys(i)[0]}function Md(n,e={}){return{id:n,name:e.name||n,isPlayer:!!e.isPlayer,skill:e.skill??1,bias:e.bias??0,s:e.s??0,d:e.d??0,v:0,vLat:0,push:0,h:0,vh:0,grounded:!0,yaw:0,drift:0,driftCharge:0,driftLevel:0,boost:0,spin:0,dazed:0,invuln:0,shield:0,lantern:0,rescue:0,trickWindow:0,tricked:!1,cakes:0,totalCakes:0,item:null,itemCount:0,roulette:0,finished:!1,finishTime:0,lapTimes:[],lastLap:1,stats:{hits:0,falls:0,turbos:0,bigTurbos:0,itemsUsed:0,tricks:0},events:[],offroad:!1,rolling:!1,pendingDrift:!1,aiItemTimer:0,ai:{driftT:0,holdDrift:!1,aim:0,aimT:0}}}function oc(n,e){return Math.max(1,Math.floor(n/e)+1)}function $h(n){return[...n].sort((e,t)=>e.finished&&t.finished?e.finishTime-t.finishTime:e.finished?-1:t.finished?1:t.s-e.s)}function Ed(n){return n.cakes=Math.min(dt.maxCakes,n.cakes+1),n.totalCakes+=1,n.totalCakes}function _r(n,e="spin"){if(n.finished||n.rescue>0||n.lantern>0||n.invuln>0)return"ignored";if(n.shield>0)return n.shield=0,n.invuln=.5,n.events.push({type:"shieldBreak"}),"blocked";let t=Math.min(n.cakes,3);return n.cakes-=t,n.spin=e==="moon"?1.3:dt.spinTime,e==="moon"&&(n.dazed=2.6),n.drift=0,n.driftCharge=0,n.boost=0,n.invuln=dt.invulnAfterHit+n.spin,n.stats.hits+=1,n.events.push({type:"spin",lost:t,kind:e}),"hit"}function bd(n){if(n.rescue>0)return;n.rescue=dt.rescueTime;let e=Math.min(n.cakes,2);n.cakes-=e,n.drift=0,n.boost=0,n.stats.falls+=1,n.events.push({type:"fall",lost:e})}function Sd(n,e){if(n==null)return"normal";let t=n-e;return t<-1.1?"stall":Math.abs(t)<=dt.startWindow?"rocket":"normal"}var Td=[15,12,10,8,6,4];function wd(n,e){let t=[];return e===1&&t.push({id:"champion",name:"\u6708\u5149\u676F\u51A0\u519B",desc:"\u7B2C\u4E00\u540D\u51B2\u7EBF"}),n.totalCakes>=100&&t.push({id:"fullmoon",name:"\u6EE1\u6708\u52CB\u7AE0",desc:"\u5355\u573A\u5403\u5230 100 \u679A\u6708\u997C"}),n.stats.bigTurbos>=8&&t.push({id:"drift",name:"\u6F02\u79FB\u5927\u5E08",desc:"8 \u6B21\u4EE5\u4E0A\u91D1\u8272\u6F02\u79FB\u51B2\u523A"}),n.stats.hits===0&&n.stats.falls===0&&t.push({id:"clean",name:"\u96F6\u5931\u8BEF",desc:"\u6CA1\u6709\u88AB\u51FB\u4E2D\u6216\u843D\u6C34"}),n.stats.tricks>=6&&t.push({id:"trick",name:"\u7A7A\u4E2D\u7279\u6280",desc:"6 \u6B21\u4EE5\u4E0A\u7A7A\u4E2D\u82B1\u5F0F"}),t}function Mr(n){if(!isFinite(n))return"--:--.--";let e=Math.floor(n/60),t=n-e*60;return`${e}:${t.toFixed(2).padStart(5,"0")}`}function Ad(n,e,t,i){let s=Math.max(0,t-n.s);return e+s/Math.max(10,i*.92*n.skill)}var ys=(n,e,t)=>n<e?e:n>t?t:n,ky={};function Rd(n,e,t,i,s){n.events.length=0;let r=rt(t,n.s,ky);n.zone=r.zone,n.edge=r.edge;let o=["boost","spin","dazed","invuln","shield","lantern","trickWindow","roulette"];for(let b of o)n[b]>0&&(n[b]=Math.max(0,n[b]-i));if(n.rescue>0){if(n.rescue=Math.max(0,n.rescue-i),n.v=0,n.vLat=0,n.push=0,n.drift=0,n.rescue===0)n.d=0,n.h=.2,n.vh=0,n.grounded=!0,n.invuln=1.6,n.events.push({type:"rescued"});else{let b=1-n.rescue/dt.rescueTime;n.h=b<.5?-2+b*14:5-(b-.5)*9,n.d*=1-Math.min(1,i*3)}return}let a=!!s.locked,c=s.vmax*(n.isPlayer?1:n.skill*(s.rubber?.(n)??1)),l=c*(1+dt.cakeBonus*n.cakes);n.dazed>0&&(l*=.72);let h=!n.lantern&&n.grounded&&r.edge!==2&&Math.abs(n.d)>r.hw+.3;n.offroad=h,h&&(l*=n.boost>0?.9:dt.offroadMul),n.boost>0&&(l*=dt.boostMul),n.lantern>0&&(l=c*dt.lanternMul),n.spin>0&&(l=c*.22),s.locked&&(l=0),n.finished&&(l=c*.55);let u=n.v<l?n.boost>0||n.lantern>0?dt.boostAccel:dt.accel:-(n.spin>0?60:dt.decel);n.v+=ys(l-n.v,-Math.abs(u)*i,Math.abs(u)*i);let f=ys(e.steer||0,-1,1);(n.spin>0||s.locked)&&(f=0),n.lantern>0&&(f=ys(-n.d*.25+f*.6,-1,1));let d=ys(n.v/24,.25,1);if(!n.drift&&e.drift&&e.driftEdge&&n.grounded&&!a&&(n.vh=dt.hop*(n.v>10?1:.7),n.h=Math.max(n.h,.05),n.grounded=!1,n.pendingDrift=!0,n.events.push({type:"hop"})),n.pendingDrift&&Math.abs(f)>.25&&n.v>20&&n.spin<=0&&(n.drift=Math.sign(f),n.driftCharge=0,n.driftLevel=0,n.pendingDrift=!1,n.events.push({type:"driftStart",dir:n.drift})),e.drift||(n.pendingDrift=!1),n.drift&&(!e.drift||n.v<14||n.spin>0||n.lantern>0)){let b=n.driftLevel;b>0&&e.drift===!1&&n.spin<=0&&(n.boost=Math.max(n.boost,dt.turbo[b-1]),n.stats.turbos+=1,b>=2&&(n.stats.bigTurbos+=1),n.events.push({type:"turbo",level:b})),n.drift=0,n.driftCharge=0,n.driftLevel=0}let m;if(n.drift){let b=ys(.55+.55*f*n.drift,0,1);m=n.drift*dt.driftSteer*b*d,n.grounded&&(n.driftCharge+=i*(.75+.9*Math.max(0,f*n.drift)+Math.min(.8,Math.abs(r.k)*20)));let w=n.driftCharge>=dt.driftLevels[2]?3:n.driftCharge>=dt.driftLevels[1]?2:n.driftCharge>=dt.driftLevels[0]?1:0;w>n.driftLevel&&n.events.push({type:"driftLevel",level:w}),n.driftLevel=w}else m=f*dt.steerMax*d;n.vLat+=(m-n.vLat)*Math.min(1,i*(n.grounded?9:4));let x=(n.drift?.42:1)*(r.edge===1?.5:1);n.push=n.lantern>0?0:ys(r.k*n.v*n.v*dt.centrifugal*x*(n.grounded?1:.5),-dt.pushCap,dt.pushCap),n.d+=(n.vLat-n.push)*i;let g=r.hw+r.off-.8;if(r.edge===1&&n.grounded&&n.lantern<=0&&Math.abs(n.d)>r.hw+1.1){bd(n);return}let p=r.edge===1?r.hw+2:g;if(Math.abs(n.d)>p){let b=Math.sign(n.d);n.d=b*p;let w=(n.vLat-n.push)*b;w>3&&r.edge===0&&(n.v*=dt.wallLoss,n.events.push({type:"bump",side:b,strength:w})),n.vLat=-b*Math.min(5,Math.abs(n.vLat)*.3)}let M=Math.atan2(n.vLat-n.push,Math.max(1,n.v)),E=ys(1-r.k*n.d,.62,1.5),v=n.v*Math.cos(M)/E,T=n.s;if(n.s+=v*i,n.grounded&&s.ramps)for(let b of s.ramps)Gy(t,T,n.s,b.s)&&Math.abs(n.d-(b.d||0))<(b.w||99)&&(n.vh=b.power,n.grounded=!1,n.h=Math.max(n.h,.1),n.trickWindow=.55,n.tricked=!1,n.events.push({type:"ramp"}));if(!n.grounded&&(n.trickWindow>0&&e.trickEdge&&!n.tricked&&n.lantern<=0&&(n.tricked=!0,n.stats.tricks+=1,n.events.push({type:"trick"})),n.vh-=dt.gravity*i,n.h+=n.vh*i,n.h<=0)){n.h=0;let b=n.vh<-14;n.vh=0,n.grounded=!0,n.events.push({type:"land",hard:b}),n.tricked&&(n.boost=Math.max(n.boost,.9),n.tricked=!1,n.events.push({type:"trickBoost"}))}n.lantern>0?(n.h+=(3.2-n.h)*Math.min(1,i*3),n.grounded=!1,n.vh=0,n.lantern<=i*1.01&&(n.grounded=!1,n.vh=0)):!n.grounded&&n.h>0&&n.vh===0&&(n.vh=-.1);let S=Math.atan2(n.vLat-n.push,Math.max(4,n.v))*1.2+(n.drift?n.drift*.5:0)+(n.spin>0?n.spin*14:0);n.yaw+=(S-n.yaw)*Math.min(1,i*(n.spin>0?30:10))}function Gy(n,e,t,i){let s=n.length,r=Mn(n,e),o=Mn(n,t);return t-e>=s?!0:r<=o?r<i&&i<=o:i>r||i<=o}function Cd(n,e){for(let t=0;t<n.length;t++)for(let i=t+1;i<n.length;i++){let s=n[t],r=n[i];if(s.rescue>0||r.rescue>0)continue;let o=s.s-r.s,a=s.d-r.d;if(Math.abs(o)<2.2&&Math.abs(a)<1.7&&Math.abs(s.h-r.h)<1.6){let c=(1.7-Math.abs(a))*.5*(a>=0?1:-1),l=s.lantern>0,h=r.lantern>0;l||(s.d+=c),h||(r.d-=c),s.vLat+=c*6,r.vLat-=c*6,o>0?r.v*=1-e*2:s.v*=1-e*2;let u={type:"contact",other:null};s.events.push({...u,other:r.id,strong:h}),r.events.push({...u,other:s.id,strong:l})}}}typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(n,e,t,i,s=0){let r=Math.min(typeof s=="number"?s:s[0]??0,t/2,i/2);return this.moveTo(n+r,e),this.arcTo(n+t,e,n+t,e+i,r),this.arcTo(n+t,e+i,n,e+i,r),this.arcTo(n,e+i,n,e,r),this.arcTo(n,e,n+t,e,r),this.closePath(),this});var Jh=20260923;function fe(){return Jh=Jh*1664525+1013904223>>>0,Jh/4294967296}var Er=n=>n[Math.floor(fe()*n.length)];function Xt(n,e){let t=document.createElement("canvas");return t.width=n,t.height=e,[t,t.getContext("2d")]}function kt(n,{repeat:e=!1,srgb:t=!0,aniso:i=8,mip:s=!0}={}){let r=new ss(n);return t&&(r.colorSpace=Kt),e&&(r.wrapS=r.wrapT=Xs),r.anisotropy=i,s||(r.generateMipmaps=!1,r.minFilter=Rn),r}function Ti(n,e,t,i,s,r=2){for(let o=0;o<i;o++)n.fillStyle=Er(s),n.globalAlpha=.25+fe()*.5,n.fillRect(fe()*e,fe()*t,r*(.5+fe()),r*(.5+fe()));n.globalAlpha=1}function Kh(n){let[e,t]=Xt(256,512),i=256,s=512;if(n==="asphalt"||n==="bridge"||n==="wukang"){t.fillStyle=n==="wukang"?"#3d3b4a":"#34384d",t.fillRect(0,0,i,s),Ti(t,i,s,5e3,["#474c66","#2a2d3d","#565b78"],2),t.fillStyle="#f4f1e8",t.fillRect(8,0,7,s),t.fillRect(i-15,0,7,s),t.fillStyle="#ffd36b";for(let r=0;r<s;r+=128)t.fillRect(i/2-4,r,8,70);t.fillStyle="#f4f1e855";for(let r=64;r<s;r+=128)t.fillRect(i*.3-3,r,5,50),t.fillRect(i*.7-2,r,5,50);if(n==="wukang"){for(let r=0;r<140;r++)t.save(),t.translate(fe()*i,fe()*s),t.rotate(fe()*6.3),t.fillStyle=Er(["#d9a83e","#c9812d","#e8c55a","#a86a25"]),t.globalAlpha=.7,t.beginPath(),t.ellipse(0,0,7,4,0,0,6.3),t.fill(),t.restore();t.globalAlpha=1}}else if(n==="bund"){t.fillStyle="#8d8591",t.fillRect(0,0,i,s);for(let r=0;r<s;r+=32)for(let o=0;o<i;o+=64){let a=r/32%2?32:0;t.fillStyle=Er(["#9a939e","#857c89","#a59ea8","#8f8794"]),t.fillRect(o+a+1,r+1,62,30)}Ti(t,i,s,2500,["#6d6571","#b3acb6"],2),t.fillStyle="#ffe7a8",t.fillRect(6,0,8,s),t.fillRect(i-14,0,8,s),t.fillStyle="#ffffffaa";for(let r=0;r<s;r+=96)t.fillRect(i/2-3,r,6,48)}else if(n==="nanjing"){t.fillStyle="#5d4a57",t.fillRect(0,0,i,s);for(let r=0;r<s;r+=32)for(let o=0;o<i;o+=32)t.fillStyle=(o/32+r/32)%2?"#7a5566":"#6a4f60",t.fillRect(o+1,r+1,30,30);t.strokeStyle="#e7c16f",t.lineWidth=4;for(let r=0;r<s;r+=128)t.beginPath(),t.moveTo(0,r),t.lineTo(i,r+64),t.lineTo(0,r+128),t.stroke();t.fillStyle="#ffe0a0",t.fillRect(6,0,7,s),t.fillRect(i-13,0,7,s)}else if(n==="yuyuan"){t.fillStyle="#7c7a83",t.fillRect(0,0,i,s);for(let r=0;r<s;r+=64)t.fillStyle=Er(["#8a8791","#75727e","#918e98"]),t.fillRect(2,r+2,i-4,60),Ti(t,i,64,200,["#5e5b66","#a19eab"],2);t.fillStyle="#b8342f",t.fillRect(0,0,10,s),t.fillRect(i-10,0,10,s)}else if(n==="ring"){t.fillStyle="#3a4466",t.fillRect(0,0,i,s);for(let r=0;r<s;r+=16)t.fillStyle=r%32?"#414c73":"#36405f",t.fillRect(0,r,i,15);t.fillStyle="#8ff6ff",t.fillRect(4,0,10,s),t.fillRect(i-14,0,10,s),t.fillStyle="#ffffff99";for(let r=0;r<s;r+=128)t.fillRect(i/2-3,r,6,64)}else if(n==="tunnel"){t.fillStyle="#1c1b2e",t.fillRect(0,0,i,s),Ti(t,i,s,2500,["#2b2946","#141325"],2),t.fillStyle="#ff5fd2",t.fillRect(4,0,10,s),t.fillStyle="#5ff2ff",t.fillRect(i-14,0,10,s),t.fillStyle="#fff6";for(let r=0;r<s;r+=64)t.fillRect(i/2-3,r,6,32)}else n==="grass"?(t.fillStyle="#3d6b45",t.fillRect(0,0,i,s),Ti(t,i,s,7e3,["#4d8455","#2f5a38","#5c9960","#77b06a"],3)):n==="gravel"?(t.fillStyle="#6a6159",t.fillRect(0,0,i,s),Ti(t,i,s,7e3,["#80766c","#534b45","#948a7e"],3)):n==="leafy"&&(t.fillStyle="#4b5a3c",t.fillRect(0,0,i,s),Ti(t,i,s,5e3,["#617345","#3a472f","#c79a3d","#dcb44f"],4));return kt(e,{repeat:!0})}function Id(){let[n,e]=Xt(64,256);for(let t=0;t<256;t+=64)e.fillStyle="#e8363c",e.fillRect(0,t,64,32),e.fillStyle="#f8f4ee",e.fillRect(0,t+32,64,32);return kt(n,{repeat:!0})}function jh(n=8){let[e,t]=Xt(256,64),i=256/(n*2);for(let s=0;s<64/i;s++)for(let r=0;r<n*2;r++)t.fillStyle=(r+s)%2?"#111":"#f5f5f5",t.fillRect(r*i,s*i,i,i);return kt(e,{repeat:!0})}function Pd(n){let[e,t]=Xt(256,64);if(n==="stone"){t.fillStyle="#b9ad9e",t.fillRect(0,0,256,64),t.fillStyle="#d8ccb8",t.fillRect(0,0,256,10),t.fillStyle="#8d8273";for(let i=8;i<256;i+=22)t.fillRect(i,16,10,40);t.fillStyle="#6e6558",t.fillRect(0,56,256,8)}else if(n==="steel")t.fillStyle="#c9d4e6",t.fillRect(0,0,256,64),t.fillStyle="#6f7c96",t.fillRect(0,22,256,6),t.fillRect(0,42,256,6),t.fillStyle="#ffde7a",t.fillRect(0,0,256,8);else if(n==="glass"){t.fillStyle="#9ce8ff55",t.fillRect(0,0,256,64),t.fillStyle="#8ff6ff",t.fillRect(0,0,256,7),t.fillStyle="#ffffff44";for(let i=0;i<256;i+=64)t.fillRect(i,0,3,64)}else if(n==="red"){t.fillStyle="#a8322d",t.fillRect(0,0,256,64),t.fillStyle="#e9c46a",t.fillRect(0,0,256,8),t.fillStyle="#7a2320";for(let i=0;i<256;i+=32)t.fillRect(i,12,4,52)}else if(n==="hedge")t.fillStyle="#2f5b38",t.fillRect(0,0,256,64),Ti(t,256,64,1200,["#3f7a45","#23452a","#5d9a5a"],4);else{for(let i=0;i<256;i+=64)t.fillStyle="#f6f1ea",t.fillRect(i,0,32,64),t.fillStyle="#2c7be5",t.fillRect(i+32,0,32,64);t.fillStyle="#ffd34d",t.fillRect(0,0,256,8)}return kt(e,{repeat:!0})}function Ld(n=0){let[e,t]=Xt(256,256),i=["#e9c98f","#e2bb7c","#f0d7a4","#d9b27a"][n%4],s=t.createLinearGradient(0,256,0,0);s.addColorStop(0,"#fff0c4"),s.addColorStop(.35,i),s.addColorStop(1,"#8e6f4d"),t.fillStyle=s,t.fillRect(0,0,256,256),t.fillStyle="#00000022";for(let r=200;r<256;r+=10)t.fillRect(0,r,256,2);t.fillStyle="#ffffff30";for(let r=6;r<256;r+=42)t.fillRect(r,40,8,160);for(let r=0;r<5;r++)for(let o=0;o<6;o++){let a=18+o*42,c=46+r*32,l=fe()>.25;t.fillStyle=l?Er(["#ffe29a","#ffd27a","#fff0c0"]):"#4a3a33",t.fillRect(a,c,16,22),r===4&&(t.beginPath(),t.arc(a+8,c,8,Math.PI,0),t.fill()),t.fillStyle="#6b4f3a",t.fillRect(a+7,c,2,22)}t.fillStyle="#fff4d6",t.fillRect(0,30,256,6),t.fillStyle="#00000033",t.fillRect(0,36,256,3);for(let r=20;r<256;r+=64)t.fillStyle="#ffd98a",t.fillRect(r,212,22,44),t.beginPath(),t.arc(r+11,212,11,Math.PI,0),t.fill();return kt(e)}function Bo(n,e,t=!0,i="#1a0f22"){let s=[...n].length,r=96,o=t?r+24:r*s+24,a=t?r*s+24:r+24,[c,l]=Xt(o,a);return l.fillStyle=i,l.fillRect(0,0,o,a),l.strokeStyle=e,l.lineWidth=5,l.shadowColor=e,l.shadowBlur=14,l.strokeRect(7,7,o-14,a-14),l.font=`900 ${r*.78}px "Microsoft YaHei","PingFang SC","Noto Sans SC",sans-serif`,l.textAlign="center",l.textBaseline="middle",[...n].forEach((h,u)=>{let f=t?o/2:12+r*u+r/2,d=t?12+r*u+r/2:a/2+4;l.shadowBlur=22,l.fillStyle=e,l.fillText(h,f,d),l.shadowBlur=0,l.fillStyle="#ffffffcc",l.font=`900 ${r*.78}px "Microsoft YaHei","PingFang SC",sans-serif`,l.globalAlpha=.55,l.fillText(h,f,d),l.globalAlpha=1}),{texture:kt(c,{aniso:4}),aspect:o/a}}function br(n,{w:e=1024,h:t=160,bg:i="#c8102e",fg:s="#ffe9a8",stroke:r="#6a0d16",font:o=110,border:a="#ffd35c"}={}){let[c,l]=Xt(e,t);return l.fillStyle=i,l.fillRect(0,0,e,t),l.strokeStyle=a,l.lineWidth=10,l.strokeRect(8,8,e-16,t-16),l.font=`900 ${o}px "Microsoft YaHei","PingFang SC","Noto Sans SC",sans-serif`,l.textAlign="center",l.textBaseline="middle",l.lineWidth=14,l.strokeStyle=r,l.strokeText(n,e/2,t/2+6),l.fillStyle=s,l.fillText(n,e/2,t/2+6),kt(c,{aniso:4})}function ki(n="\u6708",e="#e0a24c"){let[t,i]=Xt(256,256),s=i.createRadialGradient(110,100,10,128,128,128);s.addColorStop(0,"#ffd88a"),s.addColorStop(.6,e),s.addColorStop(1,"#8f5220"),i.fillStyle=s,i.fillRect(0,0,256,256),i.strokeStyle="#8a4b1c",i.lineWidth=6;for(let r=0;r<16;r++){let o=r/16*Math.PI*2;i.save(),i.translate(128+Math.cos(o)*96,128+Math.sin(o)*96),i.rotate(o),i.beginPath(),i.ellipse(0,0,18,9,0,0,Math.PI*2),i.stroke(),i.restore()}return i.beginPath(),i.arc(128,128,70,0,Math.PI*2),i.stroke(),i.font='900 92px "KaiTi","STKaiti","Microsoft YaHei",serif',i.textAlign="center",i.textBaseline="middle",i.fillStyle="#7a3f14",i.fillText(n,130,134),i.fillStyle="#ffe1a0",i.fillText(n,126,128),kt(t)}function Dd(){let[n,e]=Xt(256,256),t=e.createLinearGradient(0,0,256,256);return t.addColorStop(0,"#ff7ad9"),t.addColorStop(.33,"#ffd84f"),t.addColorStop(.66,"#6ef5ff"),t.addColorStop(1,"#9b7bff"),e.fillStyle=t,e.fillRect(0,0,256,256),e.fillStyle="#ffffff66",e.fillRect(18,18,220,220),e.font='900 190px "Arial Black","Microsoft YaHei",sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineWidth=16,e.strokeStyle="#7a2d9a",e.strokeText("?",128,140),e.fillStyle="#fff",e.fillText("?",128,140),kt(n)}function Qh(n,e="body"){let[t,i]=Xt(256,128),s={orange:["#f28a2e","#c9601a","#ffd9a8"],tabby:["#9c8065","#5d4632","#e8d6be"],black:["#26232b","#15131a","#3b3742"],calico:["#fbf4ea","#f08a36","#2b2524"],cow:["#f8f4ef","#25222a","#f8f4ef"],rabbit:["#fbfbff","#e9e6f5","#ffffff"],siamese:["#efe0c8","#5a3e2e","#f8efe0"]}[n];if(i.fillStyle=s[0],i.fillRect(0,0,256,128),(n==="orange"||n==="tabby")&&e==="head"){i.fillStyle=s[1],i.globalAlpha=.75;for(let o of[54,64,74])i.beginPath(),i.ellipse(o,22,3,13,0,0,6.3),i.fill();for(let o of[44,84])i.beginPath(),i.ellipse(o,30,2.5,9,o<64?.5:-.5,0,6.3),i.fill();i.globalAlpha=1;let r=i.createLinearGradient(0,70,0,128);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,s[2]),i.fillStyle=r,i.fillRect(0,70,256,58)}else if(n==="orange"||n==="tabby"){i.fillStyle=s[1];for(let o=10;o<256;o+=30)for(let a of[[14,34],[40,62]])i.globalAlpha=.5+fe()*.2,i.beginPath(),i.ellipse(o+(fe()-.5)*6,(a[0]+a[1])/2,4.5,(a[1]-a[0])/2,.15,0,6.3),i.fill();i.globalAlpha=1;let r=i.createLinearGradient(0,70,0,128);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(.5,s[2]),i.fillStyle=r,i.fillRect(0,70,256,58)}else if(n==="calico"||n==="cow")for(let r=0;r<9;r++)i.fillStyle=n==="calico"?r%2?s[1]:s[2]:s[1],i.beginPath(),i.ellipse(fe()*256,fe()*80,20+fe()*26,14+fe()*18,fe()*3,0,6.3),i.fill();else if(n==="siamese"){let r=i.createLinearGradient(0,0,0,128);r.addColorStop(0,"#c8a882"),r.addColorStop(1,s[0]),i.fillStyle=r,i.fillRect(0,0,256,128)}return(n==="orange"||n==="tabby"||n==="rabbit")&&Ti(i,256,128,300,[s[1],s[2]],2),kt(t)}function Ud(){let[n,e]=Xt(512,512),t=e.createRadialGradient(220,210,20,256,256,250);t.addColorStop(0,"#fffbe8"),t.addColorStop(.7,"#ffe9a8"),t.addColorStop(1,"#f3c86c"),e.fillStyle=t,e.beginPath(),e.arc(256,256,250,0,Math.PI*2),e.fill();for(let i=0;i<26;i++){let s=10+fe()*42,r=fe()*6.3,o=fe()*190;e.fillStyle=`rgba(214,168,92,${.18+fe()*.22})`,e.beginPath(),e.arc(256+Math.cos(r)*o,256+Math.sin(r)*o,s,0,6.3),e.fill()}return e.fillStyle="rgba(200,150,80,0.22)",e.beginPath(),e.ellipse(300,300,46,34,.3,0,6.3),e.fill(),e.beginPath(),e.ellipse(330,250,10,38,-.2,0,6.3),e.fill(),e.beginPath(),e.ellipse(346,256,9,34,.2,0,6.3),e.fill(),e.beginPath(),e.arc(200,190,60,0,6.3),e.fill(),kt(n)}function Sr(n="#ffffff",e=0){let[t,i]=Xt(128,128),s=i.createRadialGradient(64,64,0,64,64,64);return s.addColorStop(0,n),s.addColorStop(Math.max(.05,e),n),s.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=s,i.fillRect(0,0,128,128),kt(t,{mip:!1})}function eu(n=1){let[e,t]=Xt(256,128);t.fillStyle="#1d2a55",t.fillRect(0,0,256,128),t.fillStyle="#ffd84f";for(let i=0;i<3;i++){let s=40+i*70;t.beginPath(),n>0?(t.moveTo(s,20),t.lineTo(s+40,64),t.lineTo(s,108),t.lineTo(s+22,108),t.lineTo(s+62,64),t.lineTo(s+22,20)):(t.moveTo(s+62,20),t.lineTo(s+22,64),t.lineTo(s+62,108),t.lineTo(s+40,108),t.lineTo(s,64),t.lineTo(s+40,20)),t.fill()}return kt(e)}function tu(){let[n,e]=Xt(128,256);e.fillStyle="#ff9d1c",e.fillRect(0,0,128,256);for(let t=0;t<256;t+=64)e.fillStyle="#fff4b0",e.beginPath(),e.moveTo(14,t+58),e.lineTo(64,t+10),e.lineTo(114,t+58),e.lineTo(94,t+58),e.lineTo(64,t+30),e.lineTo(34,t+58),e.fill();return e.strokeStyle="#ffe36b",e.lineWidth=8,e.strokeRect(4,0,120,256),kt(n,{repeat:!0})}function Nd(n,e=["#ff5fd2","#5ff2ff"]){let[t,i]=Xt(512,256),s=i.createLinearGradient(0,0,512,256);return s.addColorStop(0,"#241049"),s.addColorStop(1,"#0b2a4d"),i.fillStyle=s,i.fillRect(0,0,512,256),i.textAlign="center",i.textBaseline="middle",n.forEach((r,o)=>{i.font=`900 ${o?54:88}px "Microsoft YaHei","PingFang SC",sans-serif`,i.shadowColor=e[o%e.length],i.shadowBlur=20,i.fillStyle=e[o%e.length],i.fillText(r,256,90+o*100)}),kt(t)}function Fd(){let[n,e]=Xt(128,128);e.fillStyle="#ffb454",e.fillRect(0,0,128,128),e.strokeStyle="#6b1f16",e.lineWidth=6;for(let t=0;t<=128;t+=21)e.beginPath(),e.moveTo(t,0),e.lineTo(t,128),e.stroke(),e.beginPath(),e.moveTo(0,t),e.lineTo(128,t),e.stroke();e.lineWidth=3;for(let t=-128;t<=128;t+=32)e.beginPath(),e.moveTo(t,0),e.lineTo(t+128,128),e.stroke();return kt(n,{repeat:!0})}function Bd(){let[n,e]=Xt(256,256);e.fillStyle="#8c4a36",e.fillRect(0,0,256,256);for(let t=0;t<256;t+=16)for(let i=0;i<256;i+=32){let s=t/16%2?16:0;e.fillStyle=Er(["#9b553e","#834332","#a65f46","#7a3e2e"]),e.fillRect(i+s+1,t+1,30,14)}return kt(n,{repeat:!0})}function Od(n="#3f3c46"){let[e,t]=Xt(128,128);t.fillStyle=n,t.fillRect(0,0,128,128),t.fillStyle="#00000044";for(let i=0;i<128;i+=12)t.fillRect(i,0,4,128);t.fillStyle="#ffffff18";for(let i=0;i<128;i+=16)t.fillRect(0,i,128,2);return kt(e,{repeat:!0})}var un={time:{value:0},moonDir:{value:new I(.35,.36,-.86).normalize()}},Tr=new Map;function Re(n,e={}){let t=n+JSON.stringify(e);return Tr.has(t)||Tr.set(t,new ft({color:n,roughness:.7,metalness:.05,...e})),Tr.get(t)}function Ve(n,e=2){let t="glow"+n+e;if(!Tr.has(t)){let i=new Ee(n);Tr.set(t,new xt({color:i.multiplyScalar(e),toneMapped:!0,fog:!0}))}return Tr.get(t)}var zd=`
vec3 skyColor(vec3 dir) {
  float h = dir.y;
  vec3 zenith = vec3(0.012, 0.02, 0.075);
  vec3 mid = vec3(0.07, 0.045, 0.19);
  vec3 horizon = vec3(0.62, 0.24, 0.36);
  vec3 low = vec3(0.16, 0.08, 0.17);
  vec3 c = h > 0.0 ? mix(mix(horizon, mid, smoothstep(0.0, 0.18, h)), zenith, smoothstep(0.18, 0.75, h)) : mix(low, vec3(0.05, 0.05, 0.12), smoothstep(0.0, -0.3, h));
  float m = max(dot(dir, moonDir), 0.0);
  c += vec3(1.0, 0.8, 0.45) * (pow(m, 60.0) * 0.45 + pow(m, 8.0) * 0.1);
  return c;
}`;function Hd(){return new At({uniforms:{time:un.time,moonDir:un.moonDir},side:$t,depthWrite:!1,fog:!1,vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p.xyww;
      }`,fragmentShader:`
      uniform float time; uniform vec3 moonDir;
      varying vec3 vDir;
      ${zd}
      float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float noise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        float a = hash(vec3(i,0.)), b = hash(vec3(i+vec2(1,0),0.)), c = hash(vec3(i+vec2(0,1),0.)), d = hash(vec3(i+vec2(1,1),0.));
        return mix(mix(a,b,f.x), mix(c,d,f.x), f.y); }
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = skyColor(d);
        // Stars
        vec3 sp = d * 420.0;
        vec3 cell = floor(sp);
        float s = hash(cell);
        if (s > 0.9975 && d.y > 0.08) {
          vec3 f = fract(sp) - 0.5;
          float tw = 0.6 + 0.4 * sin(time * (2.0 + s * 9.0) + s * 40.0);
          c += vec3(1.0, 0.95, 0.85) * smoothstep(0.35, 0.0, length(f)) * tw * smoothstep(0.08, 0.3, d.y) * 1.6;
        }
        // Soft cloud bands lit by the city from below.
        vec2 q = d.xz / max(0.12, d.y + 0.25) * 2.2;
        float cl = noise(q + vec2(time * 0.01, 0.0)) * 0.6 + noise(q * 2.3 - time * 0.015) * 0.4;
        cl = smoothstep(0.55, 0.85, cl) * smoothstep(0.02, 0.12, d.y) * smoothstep(0.55, 0.2, d.y);
        c = mix(c, vec3(0.62, 0.36, 0.52), cl * 0.45);
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function kd(n){return new At({uniforms:{map:{value:n},phase:{value:.3},boost:{value:1}},transparent:!0,depthWrite:!1,fog:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform sampler2D map; uniform float phase; uniform float boost; varying vec2 vUv;
      void main(){
        vec2 p = vUv * 2.0 - 1.0;
        float r = length(p);
        vec4 t = texture2D(map, vUv);
        float disc = smoothstep(1.0, 0.985, r);
        float halo = exp(-max(r - 0.95, 0.0) * 5.0) * 0.55 * (1.0 - disc);
        float edge = (1.0 - 2.0 * phase) * sqrt(max(0.0, 1.0 - p.y * p.y));
        float lit = smoothstep(edge - 0.06, edge + 0.06, p.x);
        vec3 col = t.rgb * mix(0.35, 1.0, lit) * boost * mix(0.6, 2.2, lit);
        vec3 outc = col * disc + vec3(1.0, 0.82, 0.5) * halo * (0.25 + phase * 0.6);
        // The unlit side stays faint so the sky shows through, like earthshine.
        gl_FragColor = vec4(outc, max(disc * mix(0.22, 1.0, lit), halo));
      }`})}function ac(n){return new At({uniforms:{time:un.time,moonDir:un.moonDir,tReflect:{value:n?.texture||null},useReflect:{value:n?1:0},reflectMatrix:{value:new et},deep:{value:new Ee(464942)},fogColor:{value:new Ee},fogDensity:{value:0}},fog:!1,vertexShader:`
      uniform mat4 reflectMatrix;
      varying vec3 vWorld; varying vec4 vRef; varying float vDepth;
      void main(){
        vec4 w = modelMatrix * vec4(position, 1.0);
        vWorld = w.xyz;
        vRef = reflectMatrix * w;
        vec4 mv = viewMatrix * w;
        vDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float time; uniform vec3 moonDir; uniform sampler2D tReflect; uniform float useReflect;
      uniform vec3 deep; uniform vec3 fogColor; uniform float fogDensity;
      varying vec3 vWorld; varying vec4 vRef; varying float vDepth;
      ${zd}
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      vec2 waves(vec2 p){
        float t = time;
        vec2 g = vec2(0.0);
        g += vec2(cos(p.x * 0.21 + t * 1.3), sin(p.y * 0.17 + t * 1.1)) * 0.5;
        g += vec2(sin(p.y * 0.53 - t * 1.9 + p.x * 0.2), cos(p.x * 0.61 + t * 1.7)) * 0.3;
        g += vec2(sin((p.x + p.y) * 1.3 + t * 2.7), cos((p.x - p.y) * 1.1 - t * 2.3)) * 0.14;
        return g;
      }
      void main(){
        vec3 V = normalize(cameraPosition - vWorld);
        vec2 g = waves(vWorld.xz);
        vec3 N = normalize(vec3(g.x * 0.09, 1.0, g.y * 0.09));
        vec3 R = reflect(-V, N);
        float fres = 0.2 + 0.8 * pow(1.0 - max(dot(V, N), 0.0), 4.0);
        vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z)));
        if (useReflect > 0.5) {
          vec2 uv = vRef.xy / vRef.w + N.xz * 0.035;
          vec3 rc = texture2D(tReflect, uv).rgb;
          refl = mix(refl, rc, 0.9);
        }
        float moon = pow(max(dot(R, moonDir), 0.0), 380.0) * 14.0;
        float glit = step(0.93, h(floor(vWorld.xz * 1.5) + floor(time * 6.0))) * pow(max(dot(R, moonDir), 0.0), 30.0) * 3.0;
        vec3 c = mix(deep, refl, fres) + vec3(1.0, 0.85, 0.55) * (moon + glit);
        float fogF = 1.0 - exp(-fogDensity * fogDensity * vDepth * vDepth);
        c = mix(c, fogColor, fogF);
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function Gd(){let n=new ft({color:3814728,roughness:.92,metalness:0}),e=Dt.map(([t,i])=>new ue(t,-i));return n.onBeforeCompile=t=>{t.uniforms.riverPts={value:e},t.uniforms.riverHalf={value:vn},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vGW = (modelMatrix * vec4(transformed,1.0)).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vGW; uniform vec2 riverPts[${e.length}]; uniform float riverHalf;
      float rdist(vec2 p){ float b = 1e9; for (int i = 0; i < ${e.length-1}; i++){ vec2 a = riverPts[i], c = riverPts[i+1]; vec2 e = c - a; float t = clamp(dot(p - a, e) / dot(e, e), 0.0, 1.0); b = min(b, length(p - a - e * t)); } return b; }
      float gh(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }`).replace("#include <color_fragment>",`#include <color_fragment>
        float rd = rdist(vGW.xz);
        if (rd < riverHalf) discard;
        vec2 blk = vGW.xz / 34.0;
        vec2 f = abs(fract(blk) - 0.5);
        float street = step(0.44, max(f.x, f.y));
        float park = step(0.8, gh(floor(blk)));
        vec3 base = mix(vec3(0.13, 0.12, 0.19), vec3(0.08, 0.17, 0.11), park);
        base = mix(base, vec3(0.2, 0.19, 0.25), street);
        float bank = smoothstep(riverHalf + 7.0, riverHalf, rd);
        base = mix(base, vec3(0.4, 0.36, 0.36), bank);
        diffuseColor.rgb = base * (0.9 + 0.2 * gh(floor(vGW.xz * 0.5)));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        vec2 lampCell = fract(vGW.xz / 17.0);
        float lamp = street * smoothstep(0.12, 0.0, length(lampCell - 0.5)) ;
        totalEmissiveRadiance += vec3(1.0, 0.72, 0.4) * lamp * 0.9;`)},n}function _s(n=0){let e=new ft({color:16777215,roughness:n===0?.25:.8,metalness:n===0?.55:.05,envMapIntensity:n===0?1.2:.4});return e.onBeforeCompile=t=>{t.uniforms.time=un.time,t.uniforms.style={value:n},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vBW; varying vec3 vBN; varying float vSeed;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vec4 bw = modelMatrix * vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          bw = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
          vSeed = fract(sin(dot(instanceMatrix[3].xz, vec2(12.9898, 78.233))) * 43758.5453);
          vBN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * objectNormal);
        #else
          vSeed = 0.37;
          vBN = normalize(mat3(modelMatrix) * objectNormal);
        #endif
        vBW = bw.xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
      uniform float time; uniform int style; varying vec3 vBW; varying vec3 vBN; varying float vSeed;
      // Sine-free hash: stable for large inputs on mobile GPUs.
      float bh(vec3 p){ p = fract(p * vec3(0.1031, 0.1030, 0.0973)); p += dot(p, p.yxz + 33.33); return fract((p.x + p.y) * p.z); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        vec3 bn = normalize(vBN);
        if (abs(bn.y) < 0.5) {
          vec2 t2 = normalize(vec2(-bn.z, bn.x));
          float u = dot(vBW.xz, t2);
          float cw = style == 0 ? 2.4 : style == 1 ? 3.2 : 3.6;
          float ch = style == 0 ? 3.4 : 3.6;
          vec2 cell = vec2(floor(u / cw), floor(vBW.y / ch));
          vec2 fr = vec2(fract(u / cw), fract(vBW.y / ch));
          // Snap the interpolated seed so every fragment of a window hashes identically.
          float sd = floor(vSeed * 997.0 + 0.5);
          cell = mod(cell + 512.0, 1024.0);
          float win = step(0.18, fr.x) * step(fr.x, 0.82) * step(0.22, fr.y) * step(fr.y, 0.8);
          if (style == 0) win = step(0.12, fr.x) * step(fr.x, 0.88) * step(0.3, fr.y) * step(fr.y, 0.72);
          float r = bh(vec3(cell * 0.137, sd * 0.071));
          float lit = step(style == 0 ? 0.62 : 0.6, r);
          vec3 warm = mix(vec3(1.0, 0.72, 0.38), vec3(1.0, 0.88, 0.6), bh(vec3(cell.yx * 0.113, 3.0)));
          vec3 cool = vec3(0.55, 0.85, 1.0);
          vec3 wc = mix(warm, cool, style == 0 ? step(0.55, bh(vec3(cell * 0.091, 7.0))) : 0.0);
          float ground = step(vBW.y, 4.2) * (style == 1 ? 1.0 : 0.0);
          vec3 e = wc * win * lit * (style == 0 ? 0.62 : 0.72);
          e += vec3(1.0, 0.6, 0.3) * ground * 0.8;
          if (style == 0) {
            // LED facade wave, a Lujiazui night signature.
            float wave = sin(vBW.y * 0.08 - time * 1.4 + vSeed * 20.0);
            float band = smoothstep(0.95, 1.0, wave) * step(0.6, vSeed);
            vec3 led = 0.5 + 0.5 * cos(6.2831 * (vec3(0.0, 0.33, 0.67) + time * 0.05 + vSeed));
            e += led * band * 1.2;
          }
          totalEmissiveRadiance += e;
          diffuseColor.rgb *= mix(0.55, 0.3, win);
        } else {
          diffuseColor.rgb *= 0.3;
        }`)},e}function Vd(){return new At({uniforms:{time:un.time},side:$t,vertexShader:"varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vW = (modelMatrix*vec4(position,1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vW,1.0); }",fragmentShader:`
      uniform float time; varying vec2 vUv; varying vec3 vW;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      void main(){
        float s = vUv.y * 60.0;
        vec3 pal = 0.5 + 0.5 * cos(6.2831 * (vec3(0.0, 0.33, 0.67) + s * 0.02 - time * 0.25));
        float ring = smoothstep(0.82, 1.0, sin(s * 3.1416 - time * 7.0));
        float stripe = smoothstep(0.96, 1.0, sin(vUv.x * 62.83 + time * 1.5));
        vec2 g = floor(vec2(vUv.x * 80.0, vUv.y * 400.0));
        float star = step(0.985, h(g)) * (0.5 + 0.5 * sin(time * 6.0 + h(g) * 50.0));
        vec3 c = vec3(0.025, 0.012, 0.06) + pal * ring * 0.9 + pal.zxy * stripe * 0.35 + vec3(1.0) * star * 1.2;
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function Xd(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new ut,l=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Wd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let m=Wd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Wd(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ot(o,t,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){let x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var En=2;function qd(n,e,t=.35){let i=new ue;n.getDrawingBufferSize(i);let s=new Zt(Math.max(64,i.x*t),Math.max(64,i.y*t),{type:cn}),r=new jt;r.layers.set(En);let o=new et,a=new I,c=new I,l=new I,h=new I,u=new Yt,f=new Fn(new I(0,1,0),-e),d=new gt,m=new gt;return{target:s,matrix:o,resize(x,g){s.setSize(Math.max(64,x*t),Math.max(64,g*t))},render(x,g){g.updateMatrixWorld(),a.setFromMatrixPosition(g.matrixWorld),l.set(0,0,-1).applyQuaternion(g.getWorldQuaternion(u)).add(a),h.set(0,1,0).applyQuaternion(u),a.y=2*e-a.y,l.y=2*e-l.y,h.y=-h.y,r.position.copy(a),r.up.copy(h),r.lookAt(l),r.fov=g.fov,r.aspect=g.aspect,r.near=g.near,r.far=g.far,r.updateProjectionMatrix(),r.updateMatrixWorld(),r.matrixWorldInverse.copy(r.matrixWorld).invert();let p=f.clone().applyMatrix4(r.matrixWorldInverse);d.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let M=r.projectionMatrix.elements;m.x=(Math.sign(d.x)+M[8])/M[0],m.y=(Math.sign(d.y)+M[9])/M[5],m.z=-1,m.w=(1+M[10])/M[14],d.multiplyScalar(2/d.dot(m)),M[2]=d.x,M[6]=d.y,M[10]=d.z+1,M[14]=d.w,o.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),o.multiply(r.projectionMatrix).multiply(r.matrixWorldInverse);let E=n.getRenderTarget(),v=x.fog;n.setRenderTarget(s),n.clear(),n.render(x,r),n.setRenderTarget(E),x.fog=v}}}function bn(n,e=[]){n.updateMatrixWorld(!0);let t=new et().copy(n.matrixWorld).invert(),i=new Map,s=[],r=new Set;for(let c of e)c.traverse(l=>r.add(l));let o=(c,l,h)=>{let u=c.uuid+(l?"r":"");i.has(u)||i.set(u,{mat:c,reflect:l,geos:[]}),i.get(u).geos.push(h)};n.traverse(c=>{if(!c.isMesh||c.isInstancedMesh||r.has(c)||!c.visible)return;let l=c.geometry;if(!l.attributes.normal||!l.attributes.uv)return;let h=c.layers.isEnabled(En),u=new et().multiplyMatrices(t,c.matrixWorld),f=l.index?l.toNonIndexed():l.clone();for(let d of Object.keys(f.attributes))["position","normal","uv"].includes(d)||f.deleteAttribute(d);if(f.applyMatrix4(u),Array.isArray(c.material)){let d=l.groups.length?l.groups:[{start:0,count:f.attributes.position.count,materialIndex:0}];for(let m of d){let x=c.material[m.materialIndex];if(!x)continue;let g=new ut;for(let p of["position","normal","uv"]){let M=f.attributes[p];g.setAttribute(p,new Ot(M.array.slice(m.start*M.itemSize,(m.start+m.count)*M.itemSize),M.itemSize))}o(x,h,g)}f.dispose()}else o(c.material,h,f);s.push(c)});for(let c of s)c.parent.remove(c);let a=0;for(let c of i.values()){let l=Xd(c.geos,!1);if(!l)continue;let h=new W(l,c.mat);c.reflect&&h.layers.enable(En),n.add(h),a++;for(let u of c.geos)u.dispose()}return{removed:s.length,meshes:a}}var zn=class{constructor(){this.groups=new Map}add(e,t,i,s){let r=e.uuid+t.uuid;this.groups.has(r)||this.groups.set(r,{geo:e,mat:t,list:[],colors:[]});let o=this.groups.get(r);o.list.push(i.clone()),o.colors.push(s?new Ee(s):null)}build(e,{reflect:t=!1,name:i=""}={}){let s=[];for(let r of this.groups.values()){let o=new gn(r.geo,r.mat,r.list.length);r.list.forEach((a,c)=>o.setMatrixAt(c,a)),r.colors.some(Boolean)&&r.colors.forEach((a,c)=>o.setColorAt(c,a||new Ee(1,1,1))),o.computeBoundingSphere(),o.name=i,t&&o.layers.enable(En),e.add(o),s.push(o)}return s}},Vy=new et,Yd=new Yt,Wy=new rn,Xy=new I,qy=new I;function Gt(n,e,t,i=1,s=1,r=1,o=0,a=0,c=0){return Yd.setFromEuler(Wy.set(a,o,c,"YXZ")),Vy.compose(Xy.set(n,e,t),Yd,qy.set(i,s,r))}function li(n){return n.traverse(e=>e.layers.enable(En)),n}function on(n,e,t,i,{step:s=2,vScale:r=.125,uScale:o=null,flip:a=!1,yMode:c="road",swap:l=!1}={}){let h=[],u=[],f=[],d={},m=0,x=0,g=Math.max(1,Math.ceil((t-e)/s));for(let M=0;M<=g;M++){let E=Math.min(t,e+M*s);rt(n,E,d);let v=i(d,E);x=v.length;let T=0;for(let S=0;S<v.length;S++){let[b,w]=v[S];S>0&&(T+=Math.hypot(b-v[S-1][0],w-v[S-1][1]));let y=c==="abs"?0:d.y;h.push(d.x+d.rx*b,y+w,d.z+d.rz*b);let _=o?T*o:S/Math.max(1,v.length-1),C=E*r;l?u.push(C,_):u.push(_,C)}m++}for(let M=0;M<m-1;M++)for(let E=0;E<x-1;E++){let v=M*x+E,T=v+1,S=v+x,b=S+1;a?f.push(v,S,T,T,S,b):f.push(v,T,S,T,b,S)}let p=new ut;return p.setAttribute("position",new Ye(h,3)),p.setAttribute("uv",new Ye(u,2)),p.setIndex(f),p.computeVertexNormals(),p}function Kn(n,e){let t=[],i=-1;for(let s=0;s<=n.n;s++){let r=s<n.n&&e(s);r&&i<0&&(i=s),!r&&i>=0&&(t.push([i*n.step,s*n.step]),i=-1)}return t}function Zd(n,{color:e="#fff",bg:t="rgba(20,10,40,0.75)",font:i=44,pad:s=16,border:r=null}={}){let o=document.createElement("canvas"),a=o.getContext("2d");a.font=`900 ${i}px "Microsoft YaHei","PingFang SC",sans-serif`;let c=Math.ceil(a.measureText(n).width)+s*2,l=i+s*2;o.width=c,o.height=l,a.font=`900 ${i}px "Microsoft YaHei","PingFang SC",sans-serif`,a.fillStyle=t,a.beginPath(),a.roundRect(0,0,c,l,l/2),a.fill(),r&&(a.strokeStyle=r,a.lineWidth=5,a.stroke()),a.fillStyle=e,a.textAlign="center",a.textBaseline="middle",a.fillText(n,c/2,l/2+2);let h=new ss(o);h.colorSpace=Kt;let u=new is(new Ni({map:h,depthWrite:!1,transparent:!0}));return u.scale.set(c/l,1,1),u}function nn(n,e,t){let i=n.length,s=((e-t)%i+i)%i;return s>i/2&&(s-=i),s}function Yy(){let n=new ke,e=new Je(.32,.32,.9,12),t=[15218236,2915301,13225944,4177770];for(let o=0;o<6;o++){let a=new W(e,Re(t[o%4],{metalness:.7,roughness:.3})),c=o*1.1;a.position.set(Math.cos(c)*.7,.35,Math.sin(c)*.7),a.rotation.set(o%2?Math.PI/2:.2,c,o*.4),n.add(a)}let i=new W(new si(.25,.8,4,8),new ft({color:6279306,transparent:!0,opacity:.7,roughness:.1}));i.position.set(0,.9,0),i.rotation.z=.6,n.add(i);let s=new W(new ls(.7,0),Re(2829107,{roughness:.4}));s.position.set(.3,.55,-.2),n.add(s);let r=new W(new Eo(1.5,1.9,32),new xt({color:new Ee(2.2,.3,.3),transparent:!0,opacity:.7,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.position.y=.1,n.add(r),n}function Zy(){let n=new ke,e=new W(new xn(.5,1.4,16),Re(16738842,{emissive:16726528,emissiveIntensity:.3}));e.position.y=.75,n.add(e);let t=new W(new Je(.3,.37,.25,16),Ve("#ffffff",1.6));t.position.y=.8,n.add(t);let i=new W(new Ge(1.1,.12,1.1),Re(2236962));return i.position.y=.06,n.add(i),n}function $y(){let n=new ke,e=Re(13116474,{roughness:.4}),t=Re(16116952),i=Re(15250500,{metalness:.8,roughness:.3});for(let r=0;r<2;r++){let o=new ke,a=new W(new Ge(4.2,2.4,2.4),r?t:e);a.position.y=1.7,o.add(a);let c=new W(new Ge(4.5,.3,2.7),i);c.position.y=3.05,o.add(c);let l=new W(new Ge(3.8,.8,2.45),Ve("#ffe2a0",2.2));l.position.y=2.2,o.add(l);for(let h of[-1.4,1.4])for(let u of[-1.1,1.1]){let f=new W(new Je(.4,.4,.2,12),Re(2236962));f.rotation.x=Math.PI/2,f.position.set(h,.45,u),o.add(f)}o.position.x=(r-.5)*4.6,n.add(o)}let s=new W(new ot(.3,8,6),Ve("#ffd84f",3));return s.position.set(-4.8,3.3,0),n.add(s),n}function $d(n,e,t,i,s){let r=new ke;r.name="items",n.add(r);let o={},a=new I,c=[ki("\u6708"),ki("\u798F"),ki("\u5706","#d98f3e")].map(D=>new ft({map:D,emissiveMap:D,emissive:16777215,emissiveIntensity:.55,roughness:.5})),l=new ft({color:12745267,emissive:8010256,emissiveIntensity:.5,roughness:.6}),h=new Je(.62,.62,.26,28);h.rotateX(Math.PI/2);let u=c.map(D=>new gn(h,[l,D,D],Math.ceil(t.cakes.length/3)+1));u.forEach(D=>{D.frustumCulled=!1,r.add(D)});let f=t.cakes.map((D,q)=>({...D,alive:!0,timer:0,mesh:u[q%3],idx:Math.floor(q/3),pos:ai(e,D.s,D.d,D.h,new I)})),d=new et,m=new Yt,x=new rn,g=new I,p=Dd(),M=new ft({map:p,emissiveMap:p,emissive:16777215,emissiveIntensity:.9,transparent:!0,opacity:.88,roughness:.2}),E=new Ge(1.5,1.5,1.5),v=[],T=t.itemRows.reduce((D,q)=>D+q.ds.length,0),S=new gn(E,M,T),b=new gn(new Ge(1.62,1.62,1.62),new xt({color:16777215,wireframe:!0}),T);S.frustumCulled=b.frustumCulled=!1,r.add(S,b);for(let D of t.itemRows)for(let q of D.ds){let te=ai(e,D.s,q,1.35,new I);v.push({s:D.s,d:q,alive:!0,timer:0,pos:te,ph:Math.random()*6,idx:v.length})}let w=t.hazards.map(D=>{let q=D.type==="trash"?Yy():Zy(),te=rt(e,D.s,o);return q.position.copy(ai(e,D.s,D.d,0,new I)),q.rotation.y=Math.atan2(te.fx,te.fz),r.add(q),bn(q),{...D,mesh:q,cool:0}}),y=t.movers.map(D=>{let q;if(D.type==="train")q=$y(),bn(q);else{let te=ki("\u6708"),ce=new ft({map:te,emissiveMap:te,emissive:16777215,emissiveIntensity:.4});q=new W(new Je(2.6,2.6,1.3,36),[Re(12745267,{emissive:6959120,emissiveIntensity:.4}),ce,ce])}return r.add(q),{...D,mesh:q,t:0}}),_=new ot(.75,14,8,0,Math.PI*2,0,Math.PI/2.2),C=[Re(14082122,{side:St,emissive:6978064,emissiveIntensity:.5})],U=new ft({map:ki("\u6708"),emissive:16756800,emissiveIntensity:.6}),L=new Je(.8,.8,.28,24),z=new xn(.35,1.3,8);z.rotateX(Math.PI/2);let G=Ve("#ff4040",2.5),B=[];function Q(D,q){let te=new W(_,C[0]);r.add(te),B.push({type:"peel",s:Mn(e,D),d:q,h:0,life:40,mesh:te,owner:null,arm:0})}function O(D,q,te){if(!D.item)return!1;let ce=D.item;if(D.stats.itemsUsed+=1,ce==="boost"||ce==="boost3")return D.boost=Math.max(D.boost,1.35),D.v=Math.max(D.v,40),D.itemCount-=1,D.events.push({type:"boostItem"}),D.itemCount<=0&&(D.item=null),!0;if(ce==="peel")Q(D.s-2.8,D.d);else if(ce==="frisbee"){let Y=new W(L,U);r.add(Y),B.push({type:"frisbee",s:D.s+2.5,d:D.d,h:.9,v:Math.max(D.v,30)+36,life:3.4,mesh:Y,owner:D,arm:.25})}else if(ce==="firework"){let Y=te.indexOf(D),j=Y>0?te[Y-1]:null,H=new W(z,G);r.add(H),B.push({type:"firework",s:D.s+2,d:D.d,h:2,v:Math.max(D.v,40)+45,life:7,mesh:H,owner:D,target:j,arm:.2})}else if(ce==="shield")D.shield=12;else if(ce==="lantern")D.lantern=dt.lanternTime,D.spin=0,D.dazed=0;else if(ce==="moon"){let Y=te.indexOf(D);for(let j=0;j<Y;j++)_r(te[j],"moon");D.events.push({type:"moonFlash"})}return D.events.push({type:"useItem",item:ce}),D.item=null,D.itemCount=0,!0}let J=(D,q,te=14,ce=6,Y=.7)=>{for(let j=0;j<te;j++)i.spawn(D.x,D.y,D.z,(Math.random()-.5)*ce,Math.random()*ce*.8,(Math.random()-.5)*ce,q,Y,.5+Math.random()*.4,8,1.5)};function re(D,q,te,ce,Y){let j=u.map(()=>0);for(let H of f){H.alive||(H.timer-=D,H.timer<=0&&(H.alive=!0));let Z=Math.sin(q*3+H.s)*.12;m.setFromEuler(x.set(0,q*2.6+H.s*.1,0));let se=H.alive?1:0;d.compose(a.copy(H.pos).setY(H.pos.y+Z),m,g.set(se,se,se)),H.mesh.setMatrixAt(H.idx,d)}u.forEach(H=>{H.instanceMatrix.needsUpdate=!0});for(let H of v){H.alive||(H.timer-=D,H.timer<=0&&(H.alive=!0)),m.setFromEuler(x.set(q*1.1+H.ph,q*1.7+H.ph,0));let Z=H.alive?1:0;d.compose(a.copy(H.pos).setY(H.pos.y+Math.sin(q*2.4+H.ph)*.18),m,g.set(Z,Z,Z)),S.setMatrixAt(H.idx,d),b.setMatrixAt(H.idx,d)}S.instanceMatrix.needsUpdate=b.instanceMatrix.needsUpdate=!0,b.material.color.setHSL(q*.25%1,1,.75).multiplyScalar(2.2);for(let H of y)if(H.type==="train"){H.d=Math.sin(q*(H.speed/H.range)+H.phase)*H.range;let Z=rt(e,H.s,o);H.mesh.position.copy(ai(e,H.s,H.d,0,a)),H.mesh.rotation.y=Math.atan2(Z.fx,Z.fz)+Math.PI/2}else{H.t+=D;let Z=nn(e,H.s0,H.s1),se=H.t*H.speed%Math.abs(Z);H.s=Mn(e,H.s0-se),H.d=Math.sin(H.t*.9)*4.5;let Me=rt(e,H.s,o);H.mesh.position.copy(ai(e,H.s,H.d,2.6,a)),H.mesh.rotation.set(0,Math.atan2(Me.fx,Me.fz),0),H.mesh.rotateZ(Math.PI/2),H.mesh.rotateY(H.t*H.speed/2.6)}for(let H=B.length-1;H>=0;H--){let Z=B[H];if(Z.life-=D,Z.arm-=D,Z.type==="frisbee"){Z.s+=Z.v*D;let Me=rt(e,Z.s,o);Math.abs(Z.d)>Me.hw+Me.off-.5&&(Z.d=Math.sign(Z.d)*(Me.hw+Me.off-.5)),Z.mesh.rotation.y+=D*18}else if(Z.type==="firework"){if(Z.s+=Z.v*D,Z.target&&!Z.target.finished){let je=nn(e,Z.target.s,Z.s);Z.d+=(Z.target.d-Z.d)*Math.min(1,D*(je<40?6:1.5)),Z.h+=(Z.target.h+1-Z.h)*Math.min(1,D*4),je<-8&&(Z.target=null)}let Me=rt(e,Z.s,o);Z.mesh.rotation.y=Math.atan2(Me.fx,Me.fz),i.spawn(Z.mesh.position.x,Z.mesh.position.y,Z.mesh.position.z,(Math.random()-.5)*2,Math.random()*2,(Math.random()-.5)*2,Math.random()>.5?"#ffd84f":"#ff5f5f",.9,.45,0,1)}else Z.mesh.rotation.y+=D*.5;Z.mesh.position.copy(ai(e,Z.s,Z.d,Z.h,a));let se=Z.life<=0;for(let Me of te){if(se)break;if(Me===Z.owner&&Z.arm>0||Z.type==="firework"&&Z.target&&Me!==Z.target)continue;let je=nn(e,Me.s,Z.s);if(Math.abs(je)<1.8&&Math.abs(Me.d-Z.d)<1.5&&Me.h<2.6){let N=_r(Me,Z.type);N!=="ignored"&&(se=!0,J(Z.mesh.position,Z.type==="peel"?"#d6e04a":"#ffb040",22,9,.9),Me.events.push({type:"hitBy",by:Z.type,result:N}),Z.owner?.events.push({type:"scored",on:Me.id,by:Z.type}))}}if(!se&&Z.type!=="peel")for(let Me of B)Me.type==="peel"&&Math.abs(nn(e,Me.s,Z.s))<1.5&&Math.abs(Me.d-Z.d)<1.4&&(Me.life=0,se=!0,J(Me.mesh.position,"#d6e04a",16,7));se&&(r.remove(Z.mesh),B.splice(H,1))}for(let H of te){if(H.rescue>0)continue;let Z=Mn(e,H.s);for(let se of f){if(!se.alive)continue;let Me=nn(e,Z,se.s);if(Math.abs(Me)<1.7&&Math.abs(H.d-se.d)<1.7&&Math.abs(H.h+.9-se.h)<1.9){se.alive=!1,se.timer=9;let je=Ed(H);H.events.push({type:"cake",total:je}),H.isPlayer&&J(se.pos,"#ffd36b",10,5,.6)}}for(let se of v){if(!se.alive)continue;let Me=nn(e,Z,se.s);Math.abs(Me)<1.8&&Math.abs(H.d-se.d)<1.8&&H.h<3&&(se.alive=!1,se.timer=2.4,J(se.pos,"#ff9ae8",18,8,.8),!H.item&&!H.rolling&&(H.rolling=!0,H.roulette=H.isPlayer?1.2:.8,H.events.push({type:"box"})))}if(H.rolling&&H.roulette<=0){H.rolling=!1;let se=ce.indexOf(H)+1;H.item=_d(se,Math.random,te.length),H.itemCount=H.item==="boost3"?3:1,H.aiItemTimer=.8+Math.random()*3/Y.itemRate,H.events.push({type:"gotItem",item:H.item})}for(let se of w){let Me=nn(e,Z,se.s);if(Math.abs(Me)<se.r+.6&&Math.abs(H.d-se.d)<se.r+.5&&H.h<1.2){let je=_r(H,se.type);je!=="ignored"&&(H.events.push({type:"hitBy",by:se.type,result:je}),J(se.mesh.position,"#c9cfd8",14,7))}}for(let se of y){let Me=nn(e,Z,se.s);if(se.type==="train"){if(Math.abs(Me)<2.2&&Math.abs(H.d-se.d)<4.8&&H.h<3.2){let je=_r(H,"train");je!=="ignored"&&H.events.push({type:"hitBy",by:"train",result:je})}}else if(Math.abs(Me)<2.4&&Math.abs(H.d-se.d)<2.4&&H.h<4.5){let je=_r(H,"rollcake");je!=="ignored"&&H.events.push({type:"hitBy",by:"rollcake",result:je})}}for(let se of t.pads){let Me=nn(e,Z,se.s);Math.abs(Me)<3&&Math.abs(H.d-se.d)<se.w/2+.3&&H.h<.6&&H.spin<=0&&(H.boost<dt.padTime-.1&&H.events.push({type:"pad"}),H.boost=Math.max(H.boost,dt.padTime))}}}function me(){for(let D of f)D.alive=!0,D.timer=0;for(let D of v)D.alive=!0,D.timer=0;for(let D of B)r.remove(D.mesh);B.length=0;for(let D of y)D.t=0}return{update:re,useItem:O,reset:me,cakes:f,boxes:v,hazards:w,movers:y,shots:B,group:r}}var Jd={},Jy={},Ky={},lc=(n,e,t)=>n<e?e:n>t?t:n;function Kd(n,e,t,i,s,r,o){let a=rt(e,n.s,Jd),c=rt(e,n.s+14+n.v*.25,Jy),l=n.ai,h=Math.sign(c.k)*Math.min(1,Math.abs(c.k)*28)*a.hw*.6+n.bias,u=Mn(e,n.s);if(l.aimT-=r,l.aimT<=0){if(l.aimT=.4,l.aim=null,!n.item&&!n.rolling)for(let v of t.boxes){let T=nn(e,v.s,u);if(v.alive&&T>6&&T<45&&Math.abs(v.d-n.d)<6){l.aim=v.d;break}}if(l.aim===null&&n.cakes<dt.maxCakes&&Math.random()<.6)for(let v of t.cakes){let T=nn(e,v.s,u);if(v.alive&&T>4&&T<26&&Math.abs(v.d-n.d)<4&&v.h<2){l.aim=v.d;break}}}l.aim!==null&&l.aim!==void 0&&(h=l.aim);let f=(v,T,S)=>{let b=nn(e,v,u);b>2&&b<30&&Math.abs(T-h)<S&&(h=T+(h>=T?S:-S)*1.15)};for(let v of t.hazards)f(v.s,v.d,v.r+1.8);for(let v of t.shots)v.type==="peel"&&f(v.s,v.d,2.4);for(let v of t.movers){let T=nn(e,v.s,u);v.type==="train"&&T>0&&T<40?h=-Math.sign(v.d||1)*a.hw*.75:v.type==="rollcake"&&f(v.s,v.d,3.6)}for(let v of i){if(v===n)continue;let T=nn(e,v.s,n.s);T>0&&T<7&&Math.abs(v.d-n.d)<1.8&&(h+=n.d>=v.d?2.2:-2.2)}let d=a.edge===1?a.hw*.3:a.hw-1.2;h=lc(h,-d,d);let m=lc(n.v/24,.25,1),x=(n.drift?dt.driftSteer:dt.steerMax)*m,g=(h-n.d)*.3+n.push/Math.max(1,x)-n.vLat*.02,p=!1,M=!1,E=a.edge===1;for(let v=8;v<=40&&!E;v+=8)E=rt(e,n.s+v,Ky).edge===1;return E&&(l.holdDrift=!1),!E&&Math.random()<s.aiDrift*r*3&&!l.holdDrift&&Math.abs(c.k)>.018&&n.v>26&&n.grounded&&(l.holdDrift=!0,l.driftT=.9+Math.random()*1.6,M=!0,g=Math.sign(c.k)),l.holdDrift&&(l.driftT-=r,p=l.driftT>0,p||(l.holdDrift=!1),n.drift&&(g=lc(g*.6+n.drift*.4,-1,1))),{steer:lc(g,-1,1),drift:p,driftEdge:M,trickEdge:!n.grounded&&Math.random()<s.aiDrift*.3}}function jd(n,e,t,i,s,r,o){if(!n.item||n.finished||(n.aiItemTimer-=o,n.aiItemTimer>0))return;let a=n.s,c=n.item,l=!1;c==="boost"||c==="boost3"?l=Math.abs(rt(s,n.s+20,Jd).k)<.015||Math.random()<.02:c==="peel"?l=e.some(h=>h!==n&&nn(s,a,h.s)>0&&nn(s,a,h.s)<16)||Math.random()<.01:c==="frisbee"?l=e.some(h=>h!==n&&nn(s,h.s,a)>3&&nn(s,h.s,a)<45&&Math.abs(h.d-n.d)<2.4)||Math.random()<.006:l=!0,l&&Math.random()<r.itemRate+.2?(i.useItem(n,e,t),n.aiItemTimer=.5):n.aiItemTimer=.25}var Oo=[{id:"player",name:"\u6A58\u5B50",title:"\u6A58\u732B",fur:"orange",scarf:"#e8363c",kind:"cat",color:"#ff8a2e"},{id:"rabbit",name:"\u7389\u5154",title:"\u6708\u5BAB\u6765\u5BA2",fur:"rabbit",scarf:"#ffcf3a",kind:"rabbit",color:"#f4f4ff"},{id:"coal",name:"\u7164\u7403",title:"\u9ED1\u732B",fur:"black",scarf:"#34e0ff",kind:"cat",color:"#34e0ff"},{id:"calico",name:"\u4E09\u82B1",title:"\u4E09\u82B1\u732B",fur:"calico",scarf:"#ff6fb8",kind:"cat",color:"#ff6fb8"},{id:"cow",name:"\u5976\u76D6",title:"\u5976\u725B\u732B",fur:"cow",scarf:"#6fe36f",kind:"cat",color:"#6fe36f"},{id:"tabby",name:"\u963F\u798F",title:"\u72F8\u82B1\u732B",fur:"tabby",scarf:"#b07bff",kind:"cat",color:"#b07bff"}],Ms=new ot(1,24,16),Es=new ot(1,12,8),Qd=new xn(1,1,4);function fn(n,e,t,i,s,r,o=r,a=r){let c=new W(n,e);return c.position.set(t,i,s),c.scale.set(r,o,a),c}function jy(n){let[e,t]=Xt(64,64);return t.fillStyle=n,t.beginPath(),t.arc(32,32,30,0,6.3),t.fill(),t.fillStyle="#111",t.beginPath(),t.ellipse(32,34,13,22,0,0,6.3),t.fill(),t.fillStyle="#fff",t.beginPath(),t.arc(24,20,8,0,6.3),t.fill(),t.beginPath(),t.arc(40,42,4,0,6.3),t.fill(),new ft({map:kt(e),roughness:.2,metalness:.1,emissive:2236962,emissiveMap:kt(e),emissiveIntensity:.35})}function Qy(){let n=new ke,[e,t]=Xt(128,128),i=t.createLinearGradient(0,128,0,0);i.addColorStop(0,"#fff2b0"),i.addColorStop(1,"#ff8a3a"),t.fillStyle=i,t.fillRect(0,0,128,128),t.font="900 64px KaiTi, 'Microsoft YaHei'",t.textAlign="center",t.textBaseline="middle",t.fillStyle="#c8102e",t.fillText("\u798F",64,70);let s=kt(e),r=new W(new Je(1.25,.85,2.1,12,1,!0),new ft({map:s,emissiveMap:s,emissive:16777215,emissiveIntensity:1.3,side:St,roughness:.9}));r.position.y=3.6;let o=new W(new _i(1.25,12),new ft({map:s,emissiveMap:s,emissive:16777215,emissiveIntensity:1}));o.rotation.x=-Math.PI/2,o.position.y=4.65;let a=new W(Es,Ve("#ffd35c",5));a.scale.setScalar(.3),a.position.y=2.6,n.add(r,o,a);let c=new nr({color:5583650});for(let l=0;l<4;l++){let h=l/4*Math.PI*2,u=new ut().setFromPoints([new I(Math.cos(h)*.85,2.55,Math.sin(h)*.85),new I(0,1.25,0)]);n.add(new lo(u,c))}return n}function nu(n,{tag:e=!0}={}){let t=new ke,i=new ke;t.add(i);let s=O=>new ft({map:O,emissiveMap:O,emissive:16777215,emissiveIntensity:n.fur==="rabbit"?.12:.2,roughness:.75}),r=s(Qh(n.fur)),o=Re(n.fur==="black"?3880770:n.fur==="rabbit"?16777215:16773596,{roughness:.8,emissive:n.fur==="black"?0:3814704,emissiveIntensity:1}),a=Re(16752056,{roughness:.6}),c=n.kind==="rabbit",l=n.fur==="siamese"?Re(5914158):s(Qh(n.fur,"head"));i.add(fn(Ms,r,0,.78,0,.62,.56,.86)),i.add(fn(Ms,o,0,.66,.16,.46,.42,.62));let h=new ke;h.position.set(0,1.38,.55),i.add(h),h.add(fn(Ms,l,0,0,0,.62,.56,.58)),h.add(fn(Ms,o,0,-.16,.38,.34,.24,.24)),h.add(fn(Es,a,0,-.06,.6,.075,.055,.05));let u=jy(c?"#ff5a78":n.fur==="black"?"#ffd84f":n.fur==="siamese"?"#6fc8ff":"#8ed16f");for(let O of[-1,1]){let J=fn(Ms,u,O*.23,.07,.45,.14,.17,.1);J.rotation.y=O*.35,h.add(J),h.add(fn(Es,Ve("#ff8fb0",.9),O*.38,-.14,.4,.1,.06,.04))}let f=[];if(c)for(let O of[-1,1]){let J=new ke;J.position.set(O*.22,.4,-.05),J.add(fn(Ms,r,0,.55,0,.14,.6,.1)),J.add(fn(Ms,a,0,.55,.05,.07,.45,.06)),J.rotation.z=-O*.15,h.add(J),f.push(J)}else for(let O of[-1,1]){let J=new ke;J.position.set(O*.36,.42,-.02);let re=fn(Qd,l,0,.12,0,.2,.34,.12);re.rotation.y=Math.PI/4;let me=fn(Qd,a,0,.1,.04,.12,.24,.06);me.rotation.y=Math.PI/4,J.add(re,me),J.rotation.z=-O*.35,h.add(J),f.push(J)}let d=Re(n.scarf,{roughness:.6,emissive:n.scarf,emissiveIntensity:.25}),m=new W(new Bn(.42,.11,8,20),d);m.position.set(0,1.04,.36),m.rotation.x=Math.PI/2-.4,i.add(m);let x=new W(new Ht(.28,.9,1,4),new ft({color:n.scarf,side:St,emissive:n.scarf,emissiveIntensity:.2}));x.geometry.translate(0,-.45,0);let g=new ke;g.position.set(.18,1.08,.05),g.add(x),i.add(g);let p=new ft({map:ki("\u6708"),roughness:.6}),M=new W(new Je(.3,.3,.14,20),[Re(12614198),p,p]);M.position.set(-.52,.86,-.1),M.rotation.z=Math.PI/2,i.add(M);let E=[],v=new si(.13,.36,4,8);v.translate(0,-.26,0);for(let[O,J,re]of[[-.3,.42,1],[.3,.42,1],[-.3,-.45,0],[.3,-.45,0]]){let me=new ke;me.position.set(O,.6,J),me.add(new W(v,r)),me.add(fn(Es,o,0,-.52,.05,.15,.1,.18)),i.add(me),E.push({pivot:me,front:re})}let T=[],S=i,b=new ke;b.position.set(0,.95,-.78),i.add(b),S=b;let w=c?1:6;for(let O=0;O<w;O++){let J=new ke;O>0&&(J.position.y=.2);let re=c?.3:.1-O*.004;J.add(fn(Es,c?o:r,0,c?0:.1,0,re,c?re:.14,re)),S.add(J),T.push(J),S=J}b.rotation.x=c?0:-.6;let y=Qy();y.visible=!1,t.add(y);let _=new ke;for(let O=0;O<3;O++){let J=new ke,re=O/3*Math.PI*2;J.position.set(Math.cos(re)*1.5,1.1,Math.sin(re)*1.5),J.add(fn(Es,Ve("#fff4f8",2.6),0,0,0,.35,.3,.42));for(let me of[-1,1])J.add(fn(Es,Ve("#ffc2d6",2),me*.12,.36,0,.07,.24,.05));_.add(J)}_.visible=!1,t.add(_);let C=new ke,U=Ve("#ffe46b",3);for(let O=0;O<4;O++){let J=fn(new Mo(1,0),U,0,0,0,.14);C.add(J)}C.position.y=2.2,C.visible=!1,t.add(C);let L=null;e&&n.id!=="player"&&(L=Zd(n.name,{color:"#fff",bg:"rgba(20,12,40,0.7)",border:n.color,font:40}),L.material.sizeAttenuation=!1,L.scale.multiplyScalar(.032),L.position.y=2.7,t.add(L)),bn(h,f),bn(i,[h,b,g,...E.map(O=>O.pivot)]);for(let O of E)bn(O.pivot);let z=Math.random()*6,G=[b,g,...f,...E.map(O=>O.pivot)],B=!1;return{root:t,body:i,head:h,lantern:y,shield:_,stars:C,nameTag:L,scale:1,setFar(O){if(O!==B){B=O;for(let J of G)J.visible=!O}},update(O,J,re,me={}){let D=O.v||0,q=!O.grounded&&!me.glide;z+=J*(3+D*.32);let te=Math.min(1,D/18);for(let Z of E){let se=Z.front?0:Math.PI*.9,Me=q?Z.front?-.9:.8:me.glide?Z.front?.5:-.4:Math.sin(z+se)*.95*te;Z.pivot.rotation.x+=(Me-Z.pivot.rotation.x)*Math.min(1,J*18)}i.position.y=q||me.glide?0:Math.abs(Math.sin(z))*.14*te,i.rotation.x=q?-.15:Math.sin(z*2)*.05*te;let ce=wh.clamp(-(O.vLat-O.push)*.04-(O.drift||0)*.35,-.6,.6);i.rotation.z+=(ce-i.rotation.z)*Math.min(1,J*8),h.rotation.y=Math.sin(re*1.3)*.08-(O.drift||0)*.3,h.rotation.x=Math.sin(z*2)*.05;for(let[Z,se]of f.entries())se.rotation.x=-.15-te*.35+Math.sin(re*7+Z)*.04;T.forEach((Z,se)=>{Z.rotation.x=(c?0:-.15)+Math.sin(re*5-se*.7)*.18*(1-te*.4),Z.rotation.z=Math.sin(re*3-se*.6)*.14}),g.rotation.x=-1.1-te*.4+Math.sin(re*14)*.15*te,g.rotation.z=Math.sin(re*9)*.2;let Y=O.lantern>0||me.glide;y.visible=Y,Y&&(y.rotation.y+=J*.8,y.position.y=Math.sin(re*3)*.1),_.visible=O.shield>0,_.visible&&(_.rotation.y+=J*3.5),C.visible=O.spin>0||O.dazed>0,C.visible&&C.children.forEach((Z,se)=>{let Me=re*6+se*Math.PI/2;Z.position.set(Math.cos(Me)*.7,Math.sin(re*8+se)*.1,Math.sin(Me)*.7),Z.rotation.y=re*4});let j=O.invuln>0&&O.spin<=0&&O.rescue<=0&&Math.floor(re*16)%2?.35:1;i.visible=j>.5||O.invuln<=0;let H=this.scale*(me.squash||1);t.scale.set(H,H/(me.squash||1)**2,H)}}}var bs=-.7;function ep(n){let e=new W(new ot(2400,48,24),Hd());e.renderOrder=-10,e.frustumCulled=!1,e.layers.enable(En),n.add(e);let t=new W(new Ht(1,1),kd(Ud()));t.frustumCulled=!1,t.renderOrder=-9,t.layers.enable(En),n.add(t);let i=new is(new Ni({map:Sr("rgba(255,214,140,0.55)",.05),blending:Zn,depthWrite:!1,fog:!1}));i.renderOrder=-8,i.layers.enable(En),n.add(i);let s=1900;return{sky:e,moon:t,setPhase(r){t.material.uniforms.phase.value=r,i.material.opacity=.35+r*.65},update(r){e.position.copy(r.position);let o=un.moonDir.value;t.position.copy(r.position).addScaledVector(o,s),t.lookAt(r.position),t.scale.setScalar(210),i.position.copy(t.position).addScaledVector(o,10),i.scale.setScalar(560)}}}function tp(n,e){let t=[],i=[],s=[];for(let d=0;d<Dt.length-1;d++){let[m,x]=Dt[d],[g,p]=Dt[d+1],M=Math.ceil(Math.hypot(g-m,p-x)/10);for(let E=0;E<M;E++)s.push([m+(g-m)*(E/M),x+(p-x)*(E/M)])}s.push(Dt[Dt.length-1]);let r=vn+6;s.forEach(([d,m],x)=>{let[g,p]=s[Math.max(0,x-1)],[M,E]=s[Math.min(s.length-1,x+1)],v=M-g,T=E-p,S=Math.hypot(v,T);v/=S,T/=S;let b=-T,w=v;t.push(d+b*r,bs,-(m+w*r),d-b*r,bs,-(m-w*r))});for(let d=0;d<s.length-1;d++){let m=d*2;i.push(m,m+2,m+1,m+1,m+2,m+3)}let o=new ut;o.setAttribute("position",new Ye(t,3)),o.setIndex(i),o.computeVertexNormals();let a=ac(e?.target),c=new W(o,a);c.name="river",n.add(c);let l=[],h=[],u=Re(9077392,{roughness:.9,side:St});for(let d of[1,-1]){let m=l.length/3;s.forEach(([x,g],p)=>{let[M,E]=s[Math.max(0,p-1)],[v,T]=s[Math.min(s.length-1,p+1)],S=v-M,b=T-E,w=Math.hypot(S,b);S/=w,b/=w;let y=x-b*vn*d,_=g+S*vn*d;l.push(y,.05,-_,y,bs-2,-_)});for(let x=0;x<s.length-1;x++){let g=m+x*2;h.push(g,g+2,g+1,g+1,g+2,g+3)}}let f=new ut;return f.setAttribute("position",new Ye(l,3)),f.setIndex(h),f.computeVertexNormals(),n.add(new W(f,u)),{water:c,mat:a}}function np(n,e){let t=new Ht(3600,3600,1,1);t.rotateX(-Math.PI/2);let i=Gd(),s=new W(t,i);return s.position.set(-40,0,40),s.receiveShadow=!1,n.add(s),s}function ip(n,e,t){let i=_s(0),s=_s(1),r=_s(2),o=new Ge(1,1,1);o.translate(0,.5,0);let a=new Ge(1,1,1);a.translate(0,.5,0);let c=new zn,l=Re(2762296,{roughness:.8}),h=Ve("#ff3b3b",3),u=new ot(.6,6,4),[f,d]=Si(200,50),m=27,x=0;for(let p=-700;p<=620;p+=m)for(let M=-560;M<=620;M+=m){let E=p+(fe()-.5)*10,v=M+(fe()-.5)*10,T=-v;if(rc(E,T)<vn+30)continue;let S=yr(e,E,v,3),b=S.i>=0?e.hw[S.i]+e.off[S.i]+13:0;if(S.dist<b||t.some(Q=>Math.hypot(E-Q.x,v-Q.z)<Q.r))continue;let w=Math.hypot(E-f,T-d),y=E>40&&!(E<120&&T>100),_=E<-330,C,U,L,z,G;y&&w<190?(C=45+fe()*80*(1-w/260),U=14+fe()*10,L=14+fe()*10,z=i,G=new Ee().setHSL(.55+fe()*.12,.35,.42+fe()*.15)):y?(C=18+fe()*45,U=12+fe()*12,L=12+fe()*12,z=fe()>.5?i:s,G=z===i?new Ee().setHSL(.58,.3,.45):new Ee().setHSL(.05+fe()*.08,.25,.55)):_?(C=7+fe()*12,U=10+fe()*8,L=10+fe()*8,z=fe()>.3?r:s,G=new Ee().setHSL(.03+fe()*.08,.35,.5+fe()*.15)):(C=14+fe()*30,U=12+fe()*12,L=12+fe()*10,z=fe()>.35?s:r,G=new Ee().setHSL(.02+fe()*.1,.3,.48+fe()*.18)),S.dist<b+20&&(C=Math.min(C,30));let B=Math.round(fe()*3)*(Math.PI/2)+(y?fe()*.4:0);c.add(o,z,Gt(E,0,v,U,C,L,B),G),c.add(a,l,Gt(E,C,v,U*.6,1.2+fe()*2,L*.6,B)),C>60&&c.add(u,h,Gt(E,C+3,v)),x++}let g=c.build(n,{reflect:!0,name:"city"});return{count:x,meshes:g}}function sp(n,e,t){let i=new zn,s={},r=new Je(.12,.16,1,6);r.translate(0,.5,0);let o=Re(2959930,{metalness:.6,roughness:.4}),a=new ot(.45,10,8),c=Ve("#ffd9a0",3.2),l=Ve("#e8f4ff",2.6),h=Ve("#ff3b2f",2.4),u=Re(14199098,{metalness:.8,roughness:.3}),f=new Je(.28,.4,1,6);f.translate(0,.5,0);let d=Re(5981750),m=new ls(1,1),x={wukang:Re(10464829,{roughness:.9}),pudong:Re(4164172,{roughness:.9}),bund:Re(5213258,{roughness:.9}),yuyuan:Re(4094533,{roughness:.9}),nanjing:Re(4950613,{roughness:.9})},g=new ot(.62,12,8);g.scale(1,.82,1);let p=new Je(.28,.28,.16,8),M=new Je(.035,.035,1,4);M.rotateZ(Math.PI/2);let E=Re(2236962),v=new ot(.12,4,3),T=Ve("#ffe7a6",3.5),S={bund:16,nanjing:20,wukang:22,yuyuan:18,nanpu:14,pudong:20,lujiazui:16},b={wukang:9,pudong:13,bund:22,yuyuan:20,nanjing:30};for(let w=0;w<e.length;w+=2){let y=rt(e,w,s),_=Wt[y.zone].id;if(_==="tunnel"||_==="glide")continue;let C=y.hw+y.off+1.6,U=Math.atan2(y.fx,y.fz),L=S[_];if(L&&Math.round(w)%L<2)for(let B of[-1,1]){let Q=y.x+y.rx*C*B,O=y.z+y.rz*C*B,J=_==="bund"?6:_==="nanpu"?5:7;if(i.add(r,o,Gt(Q,y.y,O,1,J,1)),_==="yuyuan")i.add(g,h,Gt(Q,y.y+J-.6,O,.9,.9,.9)),i.add(p,u,Gt(Q,y.y+J-.05,O));else if(_==="bund")for(let re of[-.7,.7])i.add(a,c,Gt(Q+y.fx*re,y.y+J,O+y.fz*re,.8,1,.8));else i.add(a,_==="lujiazui"||_==="nanpu"?l:c,Gt(Q-y.rx*B*.9,y.y+J,O-y.rz*B*.9,.8,.5,.8))}let z=b[_];if(z&&Math.round(w)%z<2&&y.y<3)for(let B of[-1,1]){if(_==="bund"&&B<0)continue;let Q=C+2.5+fe()*3,O=y.x+y.rx*Q*B,J=y.z+y.rz*Q*B,re=yr(e,O,J,2);if(re.dist<e.hw[re.i]+e.off[re.i]+2)continue;let me=_==="wukang"?5+fe()*2:3+fe()*2;i.add(f,d,Gt(O,0,J,1,me,1));let D=_==="wukang"?3.4+fe():2.2+fe();if(i.add(m,x[_],Gt(O,me+D*.6,J,D,D*.85,D,fe()*3)),_==="wukang"||_==="pudong")for(let q=0;q<6;q++){let te=fe()*6.28,ce=D*(.8+fe()*.25);i.add(v,T,Gt(O+Math.cos(te)*ce,me+D*.4+fe()*D*.6,J+Math.sin(te)*ce))}}let G={nanjing:34,yuyuan:22,bund:60,wukang:48}[_];if(G&&Math.round(w)%G<2){let B=C*2+1,Q=y.y+7.6;i.add(M,E,Gt(y.x,Q,y.z,B,1,1,U+Math.PI/2));let O=Math.max(4,Math.round(B/3));for(let J=0;J<=O;J++){let re=J/O-.5,me=(.25-re*re)*2.2,D=y.x+y.rx*B*re,q=y.z+y.rz*B*re,te=_==="nanjing"&&J%2?Ve("#ffcf4a",2.4):h;i.add(g,te,Gt(D,Q-.9-me,q,.75,.75,.75)),i.add(p,u,Gt(D,Q-.3-me,q,.8,1,.8))}}}i.build(n,{name:"dressing"})}var zo=class{constructor(e,t=3e3,{reflect:i=!1,sizeScale:s=1}={}){this.cap=t,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.max=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.base=new Float32Array(t),this.next=0;let r=new ut;r.setAttribute("position",new Ot(this.pos,3).setUsage(Uo)),r.setAttribute("color",new Ot(this.col,3).setUsage(Uo)),r.setAttribute("size",new Ot(this.size,1).setUsage(Uo));let o=new At({uniforms:{map:{value:Sr("#ffffff",.15)},scale:{value:400*s}},vertexShader:`attribute float size; varying vec3 vC; uniform float scale;
        void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * scale / max(1.0, -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform sampler2D map; varying vec3 vC; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC * t.a, t.a); }",blending:Zn,depthWrite:!1,transparent:!0,vertexColors:!0});this.points=new co(r,o),this.points.frustumCulled=!1,i&&this.points.layers.enable(En),e.add(this.points),this.geo=r}setPixelScale(e){this.points.material.uniforms.scale.value=e*.55}spawn(e,t,i,s,r,o,a,c=.6,l=.8,h=0,u=.5){let f=this.next;this.next=(this.next+1)%this.cap;let d=a instanceof Ee?a:e_.set(a);this.pos.set([e,t,i],f*3),this.vel.set([s,r,o],f*3),this.col.set([d.r,d.g,d.b],f*3),this.base[f]=c,this.size[f]=c,this.life[f]=l,this.max[f]=l,this.grav[f]=h,this.drag[f]=u}update(e){for(let t=0;t<this.cap;t++){if(this.life[t]<=0){this.size[t]!==0&&(this.size[t]=0);continue}this.life[t]-=e;let i=t*3,s=Math.max(0,1-this.drag[t]*e);this.vel[i]*=s,this.vel[i+1]=this.vel[i+1]*s-this.grav[t]*e,this.vel[i+2]*=s,this.pos[i]+=this.vel[i]*e,this.pos[i+1]+=this.vel[i+1]*e,this.pos[i+2]+=this.vel[i+2]*e;let r=Math.max(0,this.life[t]/this.max[t]);this.size[t]=this.base[t]*(.3+.7*r),this.life[t]<=0&&(this.size[t]=0)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0}},e_=new Ee,cc=["#ff5f7a","#ffd84f","#5ff2ff","#ff8fe0","#9dff6f","#ffffff","#ffb04a","#b48cff"],hc=class{constructor(e){this.p=new zo(e,5e3,{reflect:!0,sizeScale:2.2}),this.rockets=[],this.timer=1,this.onBoom=null}launch(e,t,i=90+fe()*50,s=null){this.rockets.push({x:e,y:2,z:t,vy:55+fe()*12,top:i,color:s||cc[Math.floor(fe()*cc.length)],shape:Math.floor(fe()*3)})}burst(e,t,i,s,r=0,o=140){let a=new Ee(s).multiplyScalar(2.2),c=new Ee(cc[Math.floor(fe()*cc.length)]).multiplyScalar(2.2);for(let l=0;l<o;l++){let h=fe()*2-1,u=fe()*Math.PI*2,f=Math.sqrt(1-h*h),d=26+fe()*4;r===1&&(d*=.6+.4*Math.abs(Math.sin(u*3))),r===2&&l%2&&(d*=.55),this.p.spawn(e,t,i,Math.cos(u)*f*d,h*d,Math.sin(u)*f*d,l%5===0?c:a,2.6,1.6+fe()*.8,9,1.4)}this.onBoom?.(e,t,i)}update(e,t,i=!0,s=1){if(this.timer-=e,i&&this.timer<=0){this.timer=(1.6+fe()*2.6)/s;let r=new I;t.getWorldDirection(r);let o=Math.floor(fe()*(Dt.length-1)),[a,c]=Dt[o],[l,h]=Dt[o+1],u=null,f=-1e9;for(let d=0;d<8;d++){let m=Math.floor(fe()*(Dt.length-1)),x=fe(),g=Dt[m][0]+(Dt[m+1][0]-Dt[m][0])*x,p=-(Dt[m][1]+(Dt[m+1][1]-Dt[m][1])*x),M=g-t.position.x,E=p-t.position.z,v=Math.hypot(M,E),T=(M*r.x+E*r.z)/(v+1)-Math.abs(v-260)/400;T>f&&(f=T,u=[g,p])}u&&this.launch(u[0]+(fe()-.5)*vn,u[1]+(fe()-.5)*vn)}for(let r=this.rockets.length-1;r>=0;r--){let o=this.rockets[r];o.y+=o.vy*e,this.p.spawn(o.x+(fe()-.5)*.4,o.y,o.z,0,-4,0,"#ffd9a0",1.2,.5,0,1),o.y>=o.top&&(this.burst(o.x,o.y,o.z,o.color,o.shape),this.rockets.splice(r,1))}this.p.update(e)}};function rp(n,e=180){let t=new Je(1.1,.75,1.9,8,1),i=new xt({color:new Ee(2.4,1.3,.55)}),s=new gn(t,i,e);s.layers.enable(En);let r=[];for(let u=0;u<e;u++)r.push({x:-620+fe()*1100,z:-520+fe()*1e3,y:30+fe()*220,sp:1.2+fe()*1.8,ph:fe()*6.3,s:.8+fe()*.8});let o=new et,a=new Yt,c=new rn,l=new I,h=new I;return s.frustumCulled=!1,n.add(s),{update(u,f){for(let d=0;d<e;d++){let m=r[d];m.y+=m.sp*u,m.y>280&&(m.y=20);let x=Math.sin(f*.6+m.ph)*2;a.setFromEuler(c.set(Math.sin(f+m.ph)*.08,0,Math.cos(f*.8+m.ph)*.08)),o.compose(l.set(m.x+x,m.y,m.z+Math.cos(f*.5+m.ph)*2),a,h.setScalar(m.s)),s.setMatrixAt(d,o)}s.instanceMatrix.needsUpdate=!0}}}function op(n){let e=[],t=Re(15921399,{roughness:.5}),i=[Ve("#ff5fd2",3),Ve("#5ff2ff",3),Ve("#ffd84f",3)];for(let o=0;o<5;o++){let a=new ke,c=new W(new Ge(5,2,18),t);c.position.y=.6,a.add(c);let l=new W(new Ge(4.2,2.2,12),Re(2761792));l.position.y=2.7,a.add(l);let h=i[o%3];for(let f of[1.65,3.85]){let d=new W(new Ge(5.2,.18,18.2),h);d.position.y=f,a.add(d)}let u=new W(new Ge(4.3,.7,11),Ve("#ffe2a0",2.4));u.position.y=2.8,a.add(u),a.traverse(f=>f.layers.enable(En)),a.name="boat",n.add(a),bn(a),e.push({g:a,t:fe(),speed:(.004+fe()*.004)*(o%2?1:-1)})}let s=Dt,r=(o,a)=>{let c=(o%1+1)%1*(s.length-1),l=Math.floor(c),h=c-l,[u,f]=s[l],[d,m]=s[Math.min(s.length-1,l+1)],x=d-u,g=m-f,p=Math.hypot(x,g);return[u+x*h-g/p*a,-(f+g*h+x/p*a),Math.atan2(x,-g)]};return{update(o,a){for(let[c,l]of e.entries()){l.t+=l.speed*o*.3;let[h,u,f]=r(l.t,(c%2?1:-1)*vn*.4);l.g.position.set(h,bs+Math.sin(a*1.3+c)*.1,u),l.g.rotation.y=f+(l.speed<0?Math.PI:0)}}}}var ap=[[0,1,62],[1,1,67],[2,2,65],[4,1,72],[5,1,67],[6,2,65],[8,1.5,72],[9.5,.5,74],[10,1.5,72],[11.5,.5,74],[12,0,72],[12,1,69],[13,1,67],[14,2,65],[16,1,62],[17,1,70],[18,2,67],[20,1,74],[21,1,70],[22,2,67],[24,1,72],[25,2,77],[27,.75,74],[27.75,.25,72],[28,4,70],[32,1,62],[33,1,67],[34,2,65],[36,1,72],[37,1,67],[38,2,65],[40,1.5,72],[41.5,.5,74],[42,1.5,72],[43.5,.5,74],[44,0,72],[44,1,69],[45,1,67],[46,2,65],[48,1,62],[49,1,70],[50,2,67],[52,1,74],[53,1,70],[54,2,67],[56,1,72],[57,2,77],[59,.75,74],[59.75,.25,72],[60,4,70],[64,1.5,77],[65.5,.5,74],[66,1,72],[67,1,70],[68,.5,69],[68.5,.5,67],[69,.5,65],[69.5,.5,67],[70,2,70],[72,1,62],[73,1,72],[74,1,69],[75,.5,67],[75.5,.5,65],[76,1,62],[77,.5,65],[77.5,.5,67],[78,1.5,69],[79.5,.5,67],[80,4,65],[84,3,65],[88,1.5,77],[89.5,.5,74],[90,1,72],[91,1,70],[92,.5,69],[92.5,.5,67],[93,.5,65],[93.5,.5,67],[94,1,70],[95,1,70],[96,1,62],[97,1,72],[98,1,69],[99,.5,67],[99.5,.5,65],[100,1,62],[101,.5,65],[101.5,.5,67],[102,1.5,69],[103.5,.5,70],[104,.75,72],[104.75,.25,74],[105,.5,72],[105.5,.5,70],[106,.75,69],[106.75,.25,67],[107,.5,69],[107.5,.5,70],[108,1,72],[109,1,65]],lp=112;var t_=[[46,50,53],[46,50,53],[41,45,48,51],[41,45,48,51],[46,50,53],[43,46,50],[48,51,55],[41,45,48,51],[46,50,53],[46,50,53],[41,45,48,51],[41,45,48,51],[46,50,53],[43,46,50],[48,51,55],[41,45,48,51],[51,55,58],[51,55,58],[46,50,53],[43,46,50],[48,51,55],[41,45,48,51],[46,50,53],[43,46,50],[48,51,55],[41,45,48,51],[46,50,53],[41,45,48,51]];async function n_(n,e=32e3){let t=n==="title"?100:n==="final"?158:140,i=n==="final"?1:0,s=60/t,r=lp*s,o=window.OfflineAudioContext||window.webkitOfflineAudioContext,a=new o(2,Math.ceil(r*e),e),c=a.createDynamicsCompressor();c.threshold.value=-14,c.ratio.value=3;let l=a.createBiquadFilter();l.type="lowpass",l.frequency.value=n==="title"?3800:6200;let h=a.createGain();h.gain.value=.62,l.connect(c),c.connect(h),h.connect(a.destination);let u=new Float32Array(16),f=new Float32Array(16);for(let T=1;T<16;T++)u[T]=2/(T*Math.PI)*Math.sin(T*Math.PI*.25);let d=a.createPeriodicWave(u,f),m=T=>440*Math.pow(2,(T+i-69)/12);function x(T,S,b,w,y="pulse",_=0,C=.006){let U=S*s,L=Math.max(.04,b*s);if(U>=r)return;let z=a.createOscillator(),G=a.createGain(),B=a.createStereoPanner();y==="pulse"?z.setPeriodicWave(d):z.type=y,z.frequency.value=m(T),B.pan.value=_,G.gain.setValueAtTime(0,U),G.gain.linearRampToValueAtTime(w,U+C),G.gain.exponentialRampToValueAtTime(Math.max(1e-4,w*.6),U+Math.min(.08,L*.4)),G.gain.setValueAtTime(w*.6,U+L*.8),G.gain.linearRampToValueAtTime(0,U+L),z.connect(G),G.connect(B),B.connect(l),z.start(U),z.stop(Math.min(r,U+L+.02))}let g=a.createBuffer(1,Math.ceil(e*.25),e),p=g.getChannelData(0),M=717;for(let T=0;T<p.length;T++)M=M*1664525+1013904223>>>0,p[T]=M/4294967296*2-1;function E(T,S){let b=T*s;if(b>=r)return;if(S==="kick"){let L=a.createOscillator(),z=a.createGain();L.frequency.setValueAtTime(150,b),L.frequency.exponentialRampToValueAtTime(42,b+.12),z.gain.setValueAtTime(.5,b),z.gain.exponentialRampToValueAtTime(.001,b+.18),L.connect(z),z.connect(c),L.start(b),L.stop(b+.2);return}let w=a.createBufferSource(),y=a.createGain(),_=a.createBiquadFilter();w.buffer=g,_.type=S==="hat"?"highpass":"bandpass",_.frequency.value=S==="hat"?7e3:1800;let C=S==="hat"?.03:.12,U=S==="hat"?.04:.13;y.gain.setValueAtTime(C,b),y.gain.exponentialRampToValueAtTime(1e-4,b+U),w.connect(_),_.connect(y),y.connect(c),w.start(b),w.stop(b+.2)}let v=n==="title"?.075:.085;for(let[T,S,b]of ap)S===0?x(b,Math.max(0,T-.1),.1,v*.6,"pulse",-.1):(x(b,T,S*.92,v,"pulse",-.1),n!=="title"&&x(b+12,T,Math.min(S,.5)*.8,v*.28,"square",.3));for(let T=0;T<28;T++){let S=t_[T],b=T*4;if(n==="title"){for(let w=0;w<4;w++)x(S[w%2?2:0]-12,b+w,.9,.11,"triangle",.1);for(let w=0;w<8;w++)x(S[w%S.length]+12,b+w*.5,.4,.03,"triangle",w%2?.4:-.4);for(let w of[0,2])E(b+w,"kick");for(let w=0;w<4;w++)E(b+w+.5,"hat")}else{for(let w=0;w<8;w++)x(S[0]-12+(w%2?12:0),b+w*.5,.42,.12,"triangle",.05);for(let w=0;w<16;w++)x(S[w%S.length]+12+(w%4===3?12:0),b+w*.25,.2,.028,"square",w%2?.45:-.45);for(let w of[0,1.5,2,3.5])E(b+w,"kick");for(let w of[1,3])E(b+w,"snare");for(let w=0;w<8;w++)E(b+w*.5+.25,"hat");if(T%4===3)for(let w=0;w<4;w++)E(b+3+w*.25,"snare")}}return a.startRendering()}function cp(){let n=null,e,t,i,s,r,o,a={},c={},l=null,h=null,u=!1,f=.5,d=()=>{if(n)return n;n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain(),e.gain.value=u?0:1,e.connect(n.destination),t=n.createGain(),t.gain.value=f,t.connect(e),i=n.createGain(),i.gain.value=.7,i.connect(e);let M=n.sampleRate*2,E=n.createBuffer(1,M,n.sampleRate),v=E.getChannelData(0),T=0;for(let S=0;S<M;S++)T=T*.97+(Math.random()*2-1)*.03,v[S]=T*6;return s=n.createBufferSource(),s.buffer=E,s.loop=!0,o=n.createBiquadFilter(),o.type="bandpass",o.frequency.value=500,o.Q.value=.6,r=n.createGain(),r.gain.value=0,s.connect(o),o.connect(r),r.connect(i),s.start(),n},m=M=>c[M]??(c[M]=n_(M).then(E=>a[M]=E).catch(E=>{console.warn("music",E),delete c[M]}));function x(M,E,{type:v="square",vol:T=.2,slide:S=null,delay:b=0,attack:w=.005}={}){if(!n)return;let y=n.currentTime+b,_=n.createOscillator(),C=n.createGain();_.type=v,_.frequency.setValueAtTime(M,y),S&&_.frequency.exponentialRampToValueAtTime(S,y+E),C.gain.setValueAtTime(0,y),C.gain.linearRampToValueAtTime(T,y+w),C.gain.exponentialRampToValueAtTime(1e-4,y+E),_.connect(C),C.connect(i),_.start(y),_.stop(y+E+.05)}function g(M,{f:E=1200,q:v=.8,vol:T=.2,type:S="bandpass",sweep:b=null,delay:w=0}={}){if(!n)return;let y=n.currentTime+w,_=Math.ceil(n.sampleRate*M),C=n.createBuffer(1,_,n.sampleRate),U=C.getChannelData(0);for(let B=0;B<_;B++)U[B]=Math.random()*2-1;let L=n.createBufferSource(),z=n.createBiquadFilter(),G=n.createGain();L.buffer=C,z.type=S,z.frequency.setValueAtTime(E,y),z.Q.value=v,b&&z.frequency.exponentialRampToValueAtTime(b,y+M),G.gain.setValueAtTime(T,y),G.gain.exponentialRampToValueAtTime(1e-4,y+M),L.connect(z),z.connect(G),G.connect(i),L.start(y)}let p={beep:()=>x(440,.28,{vol:.25}),go:()=>{x(880,.6,{vol:.28}),x(1320,.6,{vol:.12,type:"triangle"})},cake:M=>{let E=988*Math.pow(2,M%5*2/12);x(E,.08,{vol:.12}),x(E*1.5,.16,{vol:.1,delay:.06})},box:()=>{for(let M=0;M<8;M++)x(600+M*90,.05,{vol:.06,delay:M*.12,type:"triangle"})},gotItem:()=>{x(784,.1,{vol:.15}),x(1175,.2,{vol:.15,delay:.08})},boost:()=>{g(.6,{f:400,sweep:3e3,vol:.25}),x(220,.5,{slide:660,vol:.08,type:"sawtooth"})},turbo:M=>{g(.35+M*.12,{f:600,sweep:4e3,vol:.2+M*.05}),x(330*M,.3,{slide:990*M,vol:.07,type:"sawtooth"})},driftLevel:M=>x([0,1200,1600,2100][M],.08,{vol:.07,type:"triangle"}),hop:()=>x(300,.1,{slide:520,vol:.08,type:"triangle"}),land:()=>g(.12,{f:300,vol:.12,type:"lowpass"}),bump:()=>{g(.16,{f:200,vol:.3,type:"lowpass"}),x(110,.12,{vol:.1})},spin:()=>{x(700,.5,{slide:120,vol:.18}),g(.3,{f:900,vol:.2})},shield:()=>{x(1800,.3,{slide:600,vol:.12,type:"triangle"}),g(.25,{f:5e3,vol:.12,type:"highpass"})},fall:()=>{x(500,.6,{slide:90,vol:.18,type:"triangle"}),g(.5,{f:700,sweep:200,vol:.28,delay:.35})},rescue:()=>{for(let M=0;M<3;M++)x(660+M*220,.12,{vol:.1,delay:M*.08,type:"triangle"})},throw:()=>g(.25,{f:1500,sweep:400,vol:.18}),firework:()=>{x(300,.6,{slide:1500,vol:.06,type:"triangle"})},boom:(M=.3)=>{g(.9,{f:180,vol:M,type:"lowpass"}),g(.5,{f:3e3,vol:M*.3,type:"highpass",delay:.05})},lap:()=>{[784,988,1175].forEach((M,E)=>x(M,.18,{vol:.14,delay:E*.1}))},finalLap:()=>{[523,659,784,1047,784,1047].forEach((M,E)=>x(M,.22,{vol:.16,delay:E*.12}))},finish:()=>{[523,659,784,1047,1319,1568].forEach((M,E)=>x(M,.3,{vol:.16,delay:E*.1,type:E%2?"square":"triangle"}))},moon:()=>{for(let M=0;M<10;M++)x(1400+M*120,.4,{vol:.05,delay:M*.04,type:"sine"})},ramp:()=>x(260,.3,{slide:700,vol:.1,type:"triangle"}),trick:()=>{x(880,.08,{vol:.12}),x(1320,.12,{vol:.12,delay:.07})},pad:()=>g(.3,{f:800,sweep:3e3,vol:.14}),click:()=>x(1e3,.05,{vol:.08,type:"triangle"}),fullmoon:()=>{[659,784,988,1319,1568,1976].forEach((M,E)=>x(M,.5,{vol:.1,delay:E*.09,type:"sine"}))}};return{unlock(){d(),n.resume?.()},preload(M){n&&m(M)},async play(M,{restart:E=!0}={}){d(),await n.resume?.(),await m(M);let v=a[M];if(!v||h===M&&l&&!E)return;let T=l;if(T)try{T.stop(n.currentTime+.05)}catch{}let S=n.createBufferSource();S.buffer=v,S.loop=!0,S.connect(t),S.start(),l=S,h=M},stopMusic(){if(l){try{l.stop()}catch{}l=null,h=null}},duck(M){t&&t.gain.setTargetAtTime(M*f,n.currentTime,.1)},setMuted(M){u=M,e&&e.gain.setTargetAtTime(M?0:1,n.currentTime,.02)},get muted(){return u},suspend(){n?.suspend?.()},resume(){n?.resume?.()},wind(M,E){r&&(r.gain.setTargetAtTime(Math.min(.5,M*.12+(E?.12:0)),n.currentTime,.15),o.frequency.setTargetAtTime(300+M*900+(E?600:0),n.currentTime,.2))},sfx:new Proxy(p,{get:(M,E)=>(...v)=>{n&&!u&&M[E]?.(...v)}}),get ready(){return!!n}}}var Jt=n=>document.getElementById(n);function Gi(n){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");return n(t),e.toDataURL()}function uc(n,e,t,i){n.fillStyle="#ffcf3a";for(let s=0;s<4;s++){let r=s/4*Math.PI*2+.4;n.beginPath(),n.ellipse(e+Math.cos(r)*i*.55,t+Math.sin(r)*i*.55,i*.5,i*.34,r,0,6.3),n.fill()}n.fillStyle="#ff8a1c",n.beginPath(),n.arc(e,t,i*.25,0,6.3),n.fill()}var fc={boost:Gi(n=>{n.fillStyle="#ff9d1c",n.beginPath(),n.moveTo(20,80),n.lineTo(64,20),n.lineTo(108,80),n.lineTo(84,80),n.lineTo(84,112),n.lineTo(44,112),n.lineTo(44,80),n.fill(),uc(n,64,70,34)}),boost3:Gi(n=>{uc(n,36,44,26),uc(n,92,44,26),uc(n,64,92,26)}),peel:Gi(n=>{n.fillStyle="#d6e04a",n.beginPath(),n.arc(64,52,46,.1,Math.PI-.1),n.fill(),n.fillStyle="#fff6d8",n.beginPath(),n.arc(64,56,34,.15,Math.PI-.15),n.fill(),n.fillStyle="#f7a8a0";for(let e=0;e<5;e++)n.beginPath(),n.ellipse(34+e*15,72,5,10,0,0,6.3),n.fill()}),frisbee:Gi(n=>{let e=n.createRadialGradient(56,50,8,64,64,56);e.addColorStop(0,"#ffd88a"),e.addColorStop(1,"#b56a24"),n.fillStyle=e,n.beginPath(),n.arc(64,64,52,0,6.3),n.fill(),n.strokeStyle="#7a3f14",n.lineWidth=5,n.beginPath(),n.arc(64,64,34,0,6.3),n.stroke(),n.fillStyle="#7a3f14",n.font="900 44px KaiTi,serif",n.textAlign="center",n.textBaseline="middle",n.fillText("\u6708",64,68)}),firework:Gi(n=>{n.save(),n.translate(64,64),n.rotate(-.7),n.fillStyle="#e8363c",n.fillRect(-12,-34,24,56),n.fillStyle="#ffd84f",n.beginPath(),n.moveTo(-14,-34),n.lineTo(0,-58),n.lineTo(14,-34),n.fill(),n.fillStyle="#ff9d1c",n.beginPath(),n.moveTo(-10,22),n.lineTo(0,50),n.lineTo(10,22),n.fill(),n.restore(),n.fillStyle="#fff4a0";for(let e=0;e<7;e++)n.beginPath(),n.arc(20+Math.random()*30,80+Math.random()*30,4,0,6.3),n.fill()}),shield:Gi(n=>{n.fillStyle="#fff4f8",n.beginPath(),n.ellipse(64,74,38,30,0,0,6.3),n.fill();for(let e of[-1,1])n.beginPath(),n.ellipse(64+e*14,32,8,26,e*.2,0,6.3),n.fill();n.fillStyle="#ff8fb8";for(let e of[-1,1])n.beginPath(),n.ellipse(64+e*14,32,4,18,e*.2,0,6.3),n.fill();n.fillStyle="#e8363c",n.beginPath(),n.arc(52,68,5,0,6.3),n.arc(76,68,5,0,6.3),n.fill(),n.strokeStyle="#ffcf3a",n.lineWidth=6,n.beginPath(),n.arc(64,74,50,0,6.3),n.stroke()}),lantern:Gi(n=>{let e=n.createLinearGradient(0,110,0,18);e.addColorStop(0,"#fff2b0"),e.addColorStop(1,"#ff7a2a"),n.fillStyle=e,n.beginPath(),n.moveTo(30,20),n.lineTo(98,20),n.lineTo(86,100),n.lineTo(42,100),n.closePath(),n.fill(),n.fillStyle="#c8102e",n.font="900 46px KaiTi,serif",n.textAlign="center",n.textBaseline="middle",n.fillText("\u798F",64,62),n.fillStyle="#ffd84f",n.beginPath(),n.arc(64,112,8,0,6.3),n.fill()}),moon:Gi(n=>{let e=n.createRadialGradient(64,64,10,64,64,62);e.addColorStop(0,"#fffbe8"),e.addColorStop(.75,"#ffe39a"),e.addColorStop(1,"rgba(255,210,100,0)"),n.fillStyle=e,n.beginPath(),n.arc(64,64,62,0,6.3),n.fill(),n.fillStyle="rgba(200,150,80,.35)",n.beginPath(),n.arc(50,52,10,0,6.3),n.arc(78,76,7,0,6.3),n.fill()})},hp=Object.keys(fc);function up(n,e){let t={hud:Jt("hud"),lap:Jt("lap"),time:Jt("time"),itemSlot:Jt("itemSlot"),itemImg:Jt("itemImg"),itemCount:Jt("itemCount"),itemName:Jt("itemName"),place:Jt("place"),cakes:Jt("cakes"),moonText:Jt("moonText"),moonIcon:Jt("moonIcon"),center:Jt("center"),sub:Jt("sub"),toast:Jt("toast"),zoneTag:Jt("zoneTag"),zoneName:Jt("zoneName"),zoneSub:Jt("zoneSub"),minimap:Jt("minimap"),flash:Jt("flash")},i=1/0,s=-1/0,r=1/0,o=-1/0;for(let T=0;T<n.n;T++)i=Math.min(i,n.px[T]),s=Math.max(s,n.px[T]),r=Math.min(r,n.pz[T]),o=Math.max(o,n.pz[T]);let a=26,c=(T,S)=>{let b=Math.min((T-a*2)/(s-i),(S-a*2)/(o-r)),w=(T-(s-i)*b)/2,y=(S-(o-r)*b)/2,_=B=>w+(B-i)*b,C=B=>y+(B-r)*b,U=document.createElement("canvas");U.width=T,U.height=S;let L=U.getContext("2d");L.fillStyle="rgba(20,11,46,0.55)",L.beginPath(),L.roundRect(0,0,T,S,28),L.fill(),L.save(),L.beginPath(),L.roundRect(0,0,T,S,28),L.clip(),L.strokeStyle="rgba(80,150,255,0.45)",L.lineWidth=vn*2*b,L.lineCap="round",L.lineJoin="round",L.beginPath(),Dt.forEach(([B,Q],O)=>O?L.lineTo(_(B),C(-Q)):L.moveTo(_(B),C(-Q))),L.stroke(),L.restore();let z=()=>{L.beginPath();for(let B=0;B<n.n;B+=3)B?L.lineTo(_(n.px[B]),C(n.pz[B])):L.moveTo(_(n.px[B]),C(n.pz[B]));L.closePath()};L.lineJoin="round",z(),L.strokeStyle="#2a0f45",L.lineWidth=14,L.stroke(),z(),L.strokeStyle="#fff",L.lineWidth=8,L.stroke();let G=["#ffe39a","#ff8fe0","#b8f07a","#ff8a7a","#9fd8ff","#ffffff","#9dff9a","#8ff6ff","#c9a2ff"];L.lineWidth=4;for(let B=0;B<n.n-3;B+=3)L.strokeStyle=G[n.zone[B]],L.beginPath(),L.moveTo(_(n.px[B]),C(n.pz[B])),L.lineTo(_(n.px[B+3]),C(n.pz[B+3])),L.stroke();L.fillStyle="#fff",L.fillRect(_(n.px[0])-9,C(n.pz[0])-3,18,6),L.fillStyle="#111";for(let B=0;B<3;B++)L.fillRect(_(n.px[0])-9+B*6,C(n.pz[0])-3+B%2*3,3,3);return{base:U,X:_,Y:C,scale:b}},l=c(t.minimap.width,t.minimap.height),h=t.minimap.getContext("2d"),u=c(480,360);Jt("introMap").getContext("2d").drawImage(u.base,0,0);let d,m=0,x=0,g=0,p=-1,M=t.moonIcon.getContext("2d"),E=T=>{let S=M;S.clearRect(0,0,68,68),S.fillStyle="#2a2450",S.beginPath(),S.arc(34,34,30,0,6.3),S.fill(),S.save(),S.beginPath(),S.arc(34,34,30,0,6.3),S.clip(),S.fillStyle=T>=1?"#fff3b0":"#ffe39a";let b=1-2*Math.min(1,T);S.beginPath();for(let w=-30;w<=30;w++){let y=Math.sqrt(900-w*w);S.rect(34+b*y,34+w,30+y,1)}S.fill(),S.restore(),S.strokeStyle="#ffd84f",S.lineWidth=3,S.beginPath(),S.arc(34,34,30,0,6.3),S.stroke()};E(0);let v=-1;return{show(T){t.hud.classList.toggle("hidden",!T)},update(T,S,b,w,y,_,C,U){t.lap.innerHTML=`\u5708 ${Math.min(w,y)}<small>/${y}</small>`,t.time.textContent=Mr(_),t.place.innerHTML=`${S}<sup>\u540D</sup>`,t.cakes.textContent=`\xD7${T.cakes}`;let L=T.totalCakes;t.moonText.textContent=L>=100?"\u6EE1\u6708\uFF01":`\u6708\u997C ${L}/100`;let z=Math.min(1,L/100);Math.abs(z-v)>.004&&(E(z),v=z),T.rolling?(m+=U,t.itemSlot.classList.add("rolling"),t.itemImg.src=fc[hp[Math.floor(m*14)%hp.length]],t.itemName.textContent="",t.itemCount.textContent="",d="rolling"):d!==T.item+":"+T.itemCount&&(t.itemSlot.classList.remove("rolling"),d=T.item+":"+T.itemCount,T.item?(t.itemImg.src=fc[T.item],t.itemImg.style.visibility="visible",t.itemName.textContent=yd[T.item].name+" \xB7 \u6309 E",t.itemCount.textContent=T.itemCount>1?"\xD7"+T.itemCount:""):(t.itemImg.style.visibility="hidden",t.itemName.textContent="",t.itemCount.textContent="")),h.clearRect(0,0,t.minimap.width,t.minimap.height),h.drawImage(l.base,0,0);let G=[...C].sort((B,Q)=>(B.isPlayer?1:0)-(Q.isPlayer?1:0));for(let B of G){let Q=l.X(B.wx),O=l.Y(B.wz);h.fillStyle="#2a0f45",h.beginPath(),h.arc(Q,O,B.isPlayer?13:9,0,6.3),h.fill(),h.fillStyle=B.color,h.beginPath(),h.arc(Q,O,B.isPlayer?10:6.5,0,6.3),h.fill(),B.isPlayer&&(h.fillStyle="#fff",h.beginPath(),h.arc(Q,O,4,0,6.3),h.fill())}T.zone!==p&&T.zone!==void 0&&(p=T.zone,t.zoneName.textContent=Wt[T.zone].name,t.zoneSub.textContent=Wt[T.zone].sub,t.zoneTag.classList.add("show"),g=2.2),g>0&&(g-=U,g<=0&&t.zoneTag.classList.remove("show"))},resetZone(){p=-1,t.zoneTag.classList.remove("show")},center(T,S="",b=1200){t.center.innerHTML=T,t.center.classList.remove("pop"),t.center.offsetWidth,t.center.classList.add("pop"),t.sub.textContent=S,clearTimeout(this._ct),b>0&&(this._ct=setTimeout(()=>{t.center.innerHTML="",t.sub.textContent=""},b))},toast(T){let S=document.createElement("div");for(S.textContent=T,t.toast.prepend(S);t.toast.children.length>3;)t.toast.lastChild.remove();setTimeout(()=>S.remove(),2700),x++},flash(T="#fff",S=.6,b=260){t.flash.style.background=T,t.flash.style.transition="none",t.flash.style.opacity=S,requestAnimationFrame(()=>{t.flash.style.transition=`opacity ${b}ms`,t.flash.style.opacity=0})},icons:fc}}function fp(){let n=new Set,e={left:!1,right:!1,drift:!1},t={drift:!1,item:!1,pause:!1,any:!1},i=a=>{a.repeat||(n.add(a.code),t.any=!0,["Space","ShiftLeft","ShiftRight","KeyK","ArrowUp","KeyW"].includes(a.code)&&(t.drift=!0),["KeyE","KeyX","KeyJ","Enter","KeyL"].includes(a.code)&&(t.item=!0),["Escape","KeyP"].includes(a.code)&&(t.pause=!0),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(a.code)&&a.preventDefault())},s=a=>n.delete(a.code);window.addEventListener("keydown",i,{passive:!1}),window.addEventListener("keyup",s),window.addEventListener("blur",()=>{n.clear(),e.left=e.right=e.drift=!1});function r(a,c){if(!a)return;let l=u=>{u.preventDefault(),e[c]=!0,t.any=!0,c==="drift"&&(t.drift=!0),a.classList.add("on"),a.setPointerCapture?.(u.pointerId)},h=u=>{u.preventDefault(),e[c]=!1,a.classList.remove("on")};a.addEventListener("pointerdown",l),a.addEventListener("pointerup",h),a.addEventListener("pointercancel",h),a.addEventListener("lostpointercapture",h)}function o(a,c){a&&a.addEventListener("pointerdown",l=>{l.preventDefault(),t[c]=!0,t.any=!0,a.classList.add("on"),setTimeout(()=>a.classList.remove("on"),120)})}return{bindTouch(a){r(a.left,"left"),r(a.right,"right"),r(a.drift,"drift"),o(a.item,"item")},read(){let a=n.has("ArrowLeft")||n.has("KeyA")||e.left,c=n.has("ArrowRight")||n.has("KeyD")||e.right,l=n.has("Space")||n.has("ShiftLeft")||n.has("ShiftRight")||n.has("KeyK")||n.has("ArrowUp")||n.has("KeyW")||e.drift,h={steer:(c?1:0)-(a?1:0),drift:l,driftEdge:t.drift,trickEdge:t.drift,item:t.item,pause:t.pause,any:t.any};return t.drift=t.item=t.pause=t.any=!1,h},peekAny(){return t.any},clear(){t.drift=t.item=t.pause=t.any=!1}}}var wr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},i_=new hs(-1,1,1,-1,0,1),iu=class extends ut{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}},s_=new iu,Vi=class{constructor(e){this._mesh=new W(s_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,i_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ar=class extends Ln{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bi.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Vi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ho=class extends Ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},dc=class extends Ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var pc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ue);this._width=i.width,this._height=i.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ar(wr),this.copyPass.material.blending=Yn,this.clock=new Ao}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ho!==void 0&&(o instanceof Ho?i=!0:o instanceof dc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var mc=class extends Ln{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ee}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var dp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ee(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Rr=class n extends Ln{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new Ee(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(r,o,{type:cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Zt(r,o,{type:cn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Zt(r,o,{type:cn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=dp;this.highPassUniforms=bi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ue(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=bi.clone(wr.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:wr.vertexShader,fragmentShader:wr.fragmentShader,blending:Zn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ee,this._oldClearAlpha=1,this._basic=new xt,this._fsQuad=new Vi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ue(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new At({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new At({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Rr.BlurDirectionX=new ue(1,0);Rr.BlurDirectionY=new ue(0,1);var ko={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var gc=class extends Ln{constructor(){super(),this.uniforms=bi.clone(ko.uniforms),this.material=new bo({name:ko.name,uniforms:this.uniforms,vertexShader:ko.vertexShader,fragmentShader:ko.fragmentShader}),this._fsQuad=new Vi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mt.getTransfer(this._outputColorSpace)===Et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ul?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===cr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ml?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===dl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var r_={uniforms:{tDiffuse:{value:null},strength:{value:0},time:{value:0},flash:{value:new gt(1,1,1,0)},aspect:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float strength; uniform float time; uniform vec4 flash; uniform float aspect;
    varying vec2 vUv;
    float h(float x){ return fract(sin(x * 91.7) * 43758.5453); }
    void main(){
      vec2 c = vUv - vec2(0.5, 0.46);
      float r = length(c * vec2(aspect, 1.0));
      vec2 dir = normalize(c + 1e-5);
      vec3 col = vec3(0.0);
      float s = strength * smoothstep(0.12, 0.7, r);
      const int N = 6;
      for (int i = 0; i < N; i++) {
        float k = float(i) / float(N);
        col += texture2D(tDiffuse, vUv - c * s * 0.12 * k).rgb;
      }
      col /= float(N);
      // Chromatic fringe when boosting.
      float ca = s * 0.0032;
      col.r = mix(col.r, texture2D(tDiffuse, vUv + dir * ca).r, 0.6);
      col.b = mix(col.b, texture2D(tDiffuse, vUv - dir * ca).b, 0.6);
      // Speed streaks.
      float ang = atan(c.y, c.x);
      float id = floor(ang * 40.0);
      float lane = h(id);
      float streak = step(0.8, lane) * smoothstep(0.42, 0.85, r) * fract(r * 3.0 - time * (4.0 + lane * 6.0) + lane);
      streak = smoothstep(0.8, 1.0, streak) * smoothstep(0.3, 1.0, strength);
      col += vec3(1.0, 0.95, 0.85) * streak * 0.6;
      // Vignette.
      col *= 1.0 - smoothstep(0.55, 1.15, r) * 0.55;
      col = mix(col, flash.rgb, flash.a);
      gl_FragColor = vec4(col, 1.0);
    }`};function pp(n,e,t,i){let s=n.getSize(new ue),r=new Zt(s.x,s.y,{type:cn,samples:i.msaa?4:0}),o=new pc(n,r);o.addPass(new mc(e,t));let a=new Rr(new ue(s.x,s.y),.62,.42,1.05);a.enabled=i.bloom,o.addPass(a);let c=new Ar(r_);return o.addPass(c),o.addPass(new gc),{composer:o,bloom:a,speed:c,setSize(l,h,u){o.setPixelRatio(u),o.setSize(l,h),c.uniforms.aspect.value=l/h},render(l){c.uniforms.time.value+=l,o.render(l)}}}var mp={bund:"bund",nanjing:"nanjing",wukang:"wukang",yuyuan:"yuyuan",nanpu:"bridge",pudong:"asphalt",lujiazui:"ring",tunnel:"tunnel"},gp={wukang:"leafy",pudong:"grass",yuyuan:"gravel",bund:"grass"},xp={bund:"stone",nanjing:"kart",wukang:"hedge",yuyuan:"red",nanpu:"steel",pudong:"hedge",lujiazui:"glass",tunnel:"kart"};function vp(n,e,t){let i=new ke;i.name="roads",n.add(i);let s=D=>Wt[e.zone[D]].id,r={},o={},a=D=>{if(!o[D]){let q=Kh(D),te=D==="tunnel"||D==="ring";o[D]=new ft({map:q,roughness:D==="bund"||D==="nanjing"?.55:.42,metalness:.08,emissive:te?16777215:0,emissiveMap:te?q:null,emissiveIntensity:te?.35:0,envMapIntensity:.9,polygonOffset:!0,polygonOffsetFactor:-1})}return o[D]};for(let D of Object.keys(mp))for(let[q,te]of Kn(e,ce=>s(ce)===D)){let ce=on(e,q,te+.01,j=>[[-j.hw,.02],[j.hw,.02]],{vScale:.0625}),Y=new W(ce,a(mp[D]));i.add(Y)}for(let D of Object.keys(gp)){let q=new ft({map:Kh(gp[D]),roughness:.95});for(let[te,ce]of Kn(e,Y=>s(Y)===D&&e.off[Y]>.3))i.add(new W(on(e,te,ce,Y=>[[Y.hw,0],[Y.hw+Y.off,0]],{vScale:1/12}),q)),i.add(new W(on(e,te,ce,Y=>[[-Y.hw-Y.off,0],[-Y.hw,0]],{vScale:1/12}),q))}let c=new ft({map:Id(),roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2});for(let[D,q]of Kn(e,te=>Math.abs(e.k[te])>.013&&e.edge[te]===0&&!["tunnel","lujiazui"].includes(s(te))))q-D<6||(i.add(new W(on(e,D,q,te=>[[te.hw-1.2,.05],[te.hw+.1,.05]],{vScale:1/4}),c)),i.add(new W(on(e,D,q,te=>[[-te.hw-.1,.05],[-te.hw+1.2,.05]],{vScale:1/4}),c)));let l={},h=D=>{if(!l[D]){let q=Pd(D);l[D]=new ft({map:q,roughness:.6,side:St,transparent:D==="glass",opacity:D==="glass"?.85:1,emissive:D==="glass"||D==="steel"?16777215:0,emissiveMap:D==="glass"||D==="steel"?q:null,emissiveIntensity:D==="glass"?.8:D==="steel"?.25:0})}return l[D]},u=1.25,f=.55;for(let D of Object.keys(xp))if(D!=="tunnel")for(let[q,te]of Kn(e,ce=>s(ce)===D&&e.edge[ce]===0)){let ce=H=>H.y>3?-1.5:-H.y,Y=h(xp[D]),j={vScale:1/6,uScale:1/1.6,swap:!0};i.add(new W(on(e,q,te,H=>{let Z=H.hw+H.off;return[[Z,ce(H)],[Z,u],[Z+f,u],[Z+f,ce(H)]]},j),Y)),i.add(new W(on(e,q,te,H=>{let Z=H.hw+H.off;return[[-Z-f,ce(H)],[-Z-f,u],[-Z,u],[-Z,ce(H)]]},j),Y))}let d=Re(7301762,{roughness:.8,side:St});for(let[D,q]of Kn(e,te=>e.py[te]>2.4&&e.edge[te]!==2))i.add(new W(on(e,D,q,te=>{let ce=te.hw+te.off+(te.edge===0?f:.2);return[[-ce,-.02],[-ce,-1.6],[ce,-1.6],[ce,-.02]]}),d));let m=Re(11117222,{roughness:.85,side:St});for(let[D,q]of Kn(e,te=>e.edge[te]===1))i.add(new W(on(e,D,q,te=>[[-te.hw,.02],[-te.hw,-1.8],[te.hw,-1.8],[te.hw,.02]]),m));let x=new zn,g=new Je(1,1.2,1,12),p=new Ge(1,1,1),M=Re(13223126,{roughness:.6}),E=(D,q,te)=>{for(let ce=0;ce<e.n;ce+=2){if(e.py[ce]>te-.5)continue;if(Math.hypot(e.px[ce]-D,e.pz[ce]-q)<e.hw[ce]+e.off[ce]+1.4)return!1}return!0};for(let D=0;D<e.length;D+=13){let q=rt(e,D,r);if(q.y<3.5||q.edge===2||Wt[q.zone].id==="tunnel")continue;let te=rc(q.x,-q.z)<vn;if(te&&Wt[q.zone].id==="nanpu"&&q.y>25)continue;let ce=te?-.8:0,Y=q.y-.8-ce,j=q.hw+q.off+1.9,H=0;for(let Z of[-j,j]){let se=q.x+q.rx*Z,Me=q.z+q.rz*Z;E(se,Me,q.y)&&(x.add(g,M,Gt(se,ce+Y/2,Me,.75,Y,.75)),H++)}H&&x.add(p,M,Gt(q.x,q.y-1.95,q.z,j*2+1.2,.8,1.4,Math.atan2(q.fx,q.fz)))}x.build(i,{reflect:!0});let v=Vd();v.side=St;let T=new At({uniforms:{time:un.time},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform float time; varying vec2 vUv;
      void main(){ vec3 c = 0.5 + 0.5*cos(6.2831*(vec3(0.0,0.33,0.67) + vUv.y*0.35 - time*0.6)); gl_FragColor = vec4(c*1.5, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`,side:St});for(let[D,q]of Kn(e,te=>s(te)==="tunnel")){let te=ce=>Y=>{let j=Y.hw+1.6-ce,H=[];for(let Z=-.12;Z<=Math.PI+.121;Z+=Math.PI/14)H.push([Math.cos(Z)*j,1.2+Math.sin(Z)*j*.78]);return H};i.add(new W(on(e,D-4,q+4,te(0),{vScale:1/60,step:2}),v));for(let ce=D+6;ce<q-2;ce+=11){let Y=on(e,ce,ce+.9,te(.25),{step:.9,vScale:.09090909090909091}),j=Y.attributes.uv;for(let H=0;H<j.count;H++)j.setY(H,ce/11);i.add(new W(Y,T))}for(let[ce,Y]of[[D-4,"\u5916\u6EE9\u89C2\u5149\u96A7\u9053"],[q+4,"\u5916\u6EE9\u89C2\u5149\u96A7\u9053"]]){let j=rt(e,ce,r),H=new ke,Z=j.hw+2.6,se=Re(2826560,{roughness:.5}),Me=new W(new Ge(2.2,12,3),se);Me.position.set(-Z,6,0);let je=Me.clone();je.position.x=Z;let N=new W(new Ge(Z*2+2.2,3.4,3),se);N.position.y=12.5;let de=new W(new Ht(Z*1.6,2.4),new xt({map:br(Y,{bg:"#1b0f3a",fg:"#7ff7ff",stroke:"#3a1a7a",border:"#ff6fd8"})}));de.position.set(0,12.5,1.55);let le=de.clone();le.rotation.y=Math.PI,le.position.z=-1.55;let oe=new W(new Ge(Z*2+2.4,.3,3.2),Ve("#ff6fd8",3));oe.position.y=10.8,H.add(Me,je,N,de,le,oe),H.position.set(j.x,j.y,j.z),H.rotation.y=Math.atan2(j.fx,j.fz)+Math.PI,i.add(H)}}let S=rt(e,0,r),b=new ft({map:jh(10),roughness:.5,polygonOffset:!0,polygonOffsetFactor:-3});i.add(new W(on(e,-1.6,1.6,D=>[[-D.hw,.06],[D.hw,.06]],{step:.8,vScale:1/3.2}),b));let w=Ve("#ffffff",1.1);for(let D=0;D<6;D++){let q=-6-Math.floor(D/2)*8,te=D%2?3.6:-3.6;i.add(new W(on(e,q-.25,q+.25,()=>[[te-1.6,.07],[te+1.6,.07]],{step:.5}),w))}let y=new ke,_=S.hw+3,C=Re(14012646,{metalness:.5,roughness:.3});for(let D of[-_,_]){let q=new W(new Ge(1.4,13,1.4),C);q.position.set(D,6.5,0),y.add(q);for(let te=1.5;te<12;te+=1.6){let ce=new W(new ot(.28,8,6),Ve(te%3.2<1.6?"#ffd35c":"#ff5f7a",3));ce.position.set(D+(D>0?-.8:.8),te,.8),y.add(ce)}}let U=new W(new Ge(_*2+1.4,3.6,1.6),Re(13111342,{roughness:.5}));U.position.y=13.2,y.add(U);let L=br("\u4E0A\u6D77\u6708\u5149\u676F \xB7 \u4E2D\u79CB\u5927\u5956\u8D5B",{w:1536,h:200,font:120});for(let D of[.82,-.82]){let q=new W(new Ht(_*2,3.1),new xt({map:L,color:14540253}));q.position.set(0,13.2,D),D<0&&(q.rotation.y=Math.PI),y.add(q)}let z=new W(new Ge(_*2+1.4,.8,1.7),new xt({map:jh(24)}));z.position.y=11.1,y.add(z);for(let D=-_+2;D<=_-2;D+=2.6){let q=new W(new ot(.55,12,8),Ve("#ff3b2f",2.2));q.scale.y=.8,q.position.set(D,10.1,0),y.add(q)}y.position.set(S.x,S.y,S.z),y.rotation.y=Math.atan2(S.fx,S.fz),li(y),i.add(y);let G=tu(),B=new xt({map:G,color:new Ee(1.8,1.4,.8),transparent:!0,polygonOffset:!0,polygonOffsetFactor:-4});for(let D of t.pads)i.add(new W(on(e,D.s-3,D.s+3,()=>[[D.d-D.w/2,.08],[D.d+D.w/2,.08]],{step:1,vScale:-1/6}),B));let Q=new ft({map:tu(),color:8370431,emissive:3170559,emissiveIntensity:.6,roughness:.4});for(let D of t.ramps)i.add(new W(on(e,D.s-7,D.s,(te,ce)=>{let Y=(ce-(D.s-7))/7,j=.05+Y*Y*1;return[[-te.hw,j],[te.hw,j]]},{step:.7,vScale:-1/7}),Q)),i.add(new W(on(e,D.s-.1,D.s,te=>[[-te.hw,1.05],[-te.hw,0],[te.hw,0],[te.hw,1.05]],{step:.1}),Re(2833018)));let O={1:new xt({map:eu(1),color:new Ee(1.6,1.6,1.6)}),[-1]:new xt({map:eu(-1),color:new Ee(1.6,1.6,1.6)})},J=new Ht(3.2,1.6),re=new zn;for(let D of t.chevrons){let q=rt(e,D.s,r),te=q.hw+q.off+.9,ce=q.x+q.rx*te*D.side,Y=q.z+q.rz*te*D.side,j=Math.atan2(-q.fx,-q.fz);re.add(J,O[D.dir],Gt(ce,q.y+2.2,Y,1,1,1,j))}re.build(i);let me=bn(i);return{group:i,stats:me,update(D){G.offset.y-=D*1.6}}}var jn=(n,e,t=0)=>{let[i,s]=Si(n,e);return new I(i,t,-s)};function ru(n,e=0,t=0){return new ft({color:n,metalness:.85,roughness:.18,emissive:e,emissiveIntensity:t,envMapIntensity:1.4})}function o_(){let n=new ke,e=Re(14275818,{metalness:.4,roughness:.35}),t=new ft({color:14170239,metalness:.55,roughness:.25,emissive:16723338,emissiveIntensity:.55,envMapIntensity:1.3}),i=Ve("#ff66c4",3.2),s=Ve("#dff4ff",3);for(let d=0;d<3;d++){let m=d/3*Math.PI*2,x=new W(new Je(2.1,2.3,112,16),e);x.position.set(Math.cos(m)*4.6,56,Math.sin(m)*4.6),n.add(x);let g=new W(new Je(1.6,2.2,44,12),e);g.position.set(Math.cos(m)*13,18,Math.sin(m)*13),g.lookAt(Math.cos(m)*4.6,38,Math.sin(m)*4.6),g.rotateX(Math.PI/2),n.add(g)}let r=new W(new ot(14,40,28),t);r.position.y=40,n.add(r);let o=new W(new ot(9,36,24),t);o.position.y=110,n.add(o);let a=new W(new ot(3.6,20,14),t);a.position.y=142,n.add(a);for(let d of[62,72,82,92]){let m=new W(new ot(3.3,16,10),t);m.position.y=d,n.add(m)}for(let[d,m]of[[40,14.1],[110,9.1]])for(let x=-2;x<=2;x++){let g=d+x*m*.33,p=Math.sqrt(m*m-(x*m*.33)**2),M=new W(new Bn(p,.28,6,48),i);M.rotation.x=Math.PI/2,M.position.y=g,n.add(M)}let c=new W(new Je(11,11,1.2,32),s);c.position.y=124,n.add(c);let l=new W(new Je(2.4,3,30,12),e);l.position.y=127,n.add(l);let h=new W(new Je(.4,1.4,42,8),e);h.position.y=166,n.add(h);let u=new W(new ot(1,8,6),Ve("#ff3030",5));u.position.y=188,n.add(u);for(let d=8;d<112;d+=8){let m=new W(new Bn(7.2,.18,4,24),s);m.rotation.x=Math.PI/2,m.position.y=d,n.add(m)}let f=new W(new Je(22,24,4,24),Re(10194864));return f.position.y=2,n.add(f),n}function a_(){let i=[],s=[],r=[];for(let u=0;u<=72;u++){let f=u/72,d=f*232,m=21*(1-.52*f)*(1-.1*f*f),x=f*(Math.PI*2/3);for(let g=0;g<=48;g++){let p=g/48*Math.PI*2,M=1+.09*Math.cos(3*p),E=1-.07*Math.exp(-((p-Math.PI*.5)**2)*40),v=m*M*E;i.push(Math.cos(p+x)*v,d,Math.sin(p+x)*v),r.push(g/48,f)}}for(let u=0;u<72;u++)for(let f=0;f<48;f++){let d=u*49+f,m=d+1,x=d+48+1,g=x+1;s.push(d,x,m,m,x,g)}let o=new ut;o.setAttribute("position",new Ye(i,3)),o.setAttribute("uv",new Ye(r,2)),o.setIndex(s),o.computeVertexNormals();let a=ru(5932712,7334143,.05);a.onBeforeCompile=u=>{u.uniforms.time=un.time,u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vTU;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTU = uv;`),u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
uniform float time; varying vec2 vTU;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float zoneLine = smoothstep(0.985, 1.0, sin(vTU.y * 3.1416 * 9.0 * 2.0));
        float fl = smoothstep(0.75, 1.0, sin(vTU.y * 3.1416 * 140.0)) * 0.12;
        float notch = smoothstep(0.012, 0.0, abs(vTU.x - 0.25));
        float sweepL = smoothstep(0.97, 1.0, sin(vTU.y * 12.0 - time * 1.2));
        totalEmissiveRadiance += vec3(0.6, 0.9, 1.0) * (zoneLine * 1.4 + fl + notch * 2.0) + vec3(0.4, 0.8, 1.0) * sweepL * 0.7;`)};let c=new ke;c.add(new W(o,a));let l=new W(new Je(8,9.5,12,24,1,!0),new xt({color:new Ee(.6,1.4,2),side:St,wireframe:!0}));l.position.y=236,c.add(l);let h=new W(new ot(1.2,8,6),Ve("#ff3030",5));return h.position.y=244,c.add(h),c}function l_(){let t=new os;t.moveTo(-20/2,0),t.lineTo(20/2,0),t.lineTo(20/2,200),t.lineTo(-20/2,200),t.closePath();let i=new rs;i.moveTo(-6.5,174),i.lineTo(6.5,174),i.lineTo(5.2,193),i.lineTo(-5.2,193),i.closePath(),t.holes.push(i);let s=new or(t,{depth:20,bevelEnabled:!1,steps:1});s.translate(0,0,-20/2);let r=s.attributes.position;for(let h=0;h<r.count;h++){let u=r.getY(h),f=u/200;r.setZ(h,r.getZ(h)*(1-.86*f)),r.setX(h,r.getX(h)*(1-.08*f))}s.computeVertexNormals();let o=ru(8032440,10471679,.08);o.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vOP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOP = position;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vOP;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float fl = smoothstep(0.8, 1.0, sin(vOP.y * 1.9)) * 0.35;
        float edge = smoothstep(0.35, 0.0, abs(abs(vOP.x) - ${(20/2).toFixed(1)} * (1.0 - 0.08 * vOP.y / 200.0)));
        totalEmissiveRadiance += vec3(0.7, 0.85, 1.0) * (fl + edge * 1.8);`)};let a=new ke;a.add(new W(s,o));let c=new W(new Bn(6.2,.35,4,4),Ve("#8fd8ff",4));c.position.y=200-16.5,c.rotation.z=Math.PI/4,c.scale.set(1.35,1,1),a.add(c);let l=new W(new ot(1,8,6),Ve("#ff3030",5));return l.position.y=202,a.add(l),a}function c_(){let n=new ke,e=ru(10920885,0,0),t=Ve("#ffd18a",3.2),i=0,s=13;for(let c=0;c<15;c++){let l=c<4?20:14-c*.45,h=new W(new Je(s*.94,s,l,8),e);h.position.y=i+l/2,h.rotation.y=Math.PI/8,n.add(h);let u=new W(new Je(s*.97,s*.97,.5,8),t);u.position.y=i+l-.3,u.rotation.y=Math.PI/8,n.add(u),i+=l,s*=c<4?.95:.9}let r=new W(new Je(1,s,16,8),Re(14275784,{metalness:.7,roughness:.3,emissive:16760944,emissiveIntensity:.6}));r.position.y=i+8,r.rotation.y=Math.PI/8,n.add(r);let o=new W(new Je(.2,.9,22,6),Re(15261904,{metalness:.8}));o.position.y=i+26,n.add(o);let a=new W(new ot(.8,8,6),Ve("#ff3030",5));return a.position.y=i+37,n.add(a),n}function h_(n,e,t,i){let s=o_();s.position.copy(jn(118,92)),n.add(li(s));let r=a_();r.position.copy(jn(284,26)),n.add(li(r));let o=l_();o.position.copy(jn(266,88)),o.rotation.y=-.5,n.add(li(o));let a=c_();a.position.copy(jn(242,52)),n.add(li(a)),t.push({name:"\u4E1C\u65B9\u660E\u73E0",pos:s.position.clone().setY(60)},{name:"\u4E0A\u6D77\u4E2D\u5FC3",pos:r.position.clone().setY(120)},{name:"\u73AF\u7403\u91D1\u878D\u4E2D\u5FC3",pos:o.position.clone().setY(110)},{name:"\u91D1\u8302\u5927\u53A6",pos:a.position.clone().setY(90)}),i.push({x:s.position.x,z:s.position.z,r:34},{x:r.position.x,z:r.position.z,r:30},{x:o.position.x,z:o.position.z,r:26},{x:a.position.x,z:a.position.z,r:22});let c=jn(170,40),l=new W(new Bn(29.5,.5,6,96),Ve("#8ff6ff",3));l.rotation.x=Math.PI/2,l.position.set(c.x,.3,c.z),n.add(l);let h=new W(new _i(27,64),Re(3686496,{roughness:.4,metalness:.3}));h.rotation.x=-Math.PI/2,h.position.set(c.x,.05,c.z),n.add(h);let u=new W(new Je(7,7,3,32),Re(14260805,{emissive:10508816,emissiveIntensity:.4}));u.position.set(c.x,1.5,c.z),n.add(u),i.push({x:c.x,z:c.z,r:40});let f=new W(new Ht(26,13),new xt({map:Nd(["\u4E2D\u79CB\u5FEB\u4E50","\u4E0A\u6D77\u6708\u5149\u676F"]),color:new Ee(1.6,1.6,1.6)})),d=jn(196,120);f.position.set(d.x,36,d.z),f.rotation.y=Math.PI*.8,n.add(f);let m=new W(new Ge(28,60,12),_s(0));return m.position.set(d.x,0,d.z),m.geometry.translate(0,30,0),m.rotation.y=Math.PI*.8,m.translateZ(-6.2),n.add(m),i.push({x:d.x,z:d.z,r:20}),{pearl:s,swfc:o}}function u_(n,e,t){let i=new ke,s=[0,1,2,3].map(f=>{let d=Ld(f);return new ft({map:d,emissiveMap:d,emissive:16769200,emissiveIntensity:.3,roughness:.7})}),r=Re(14206888,{roughness:.8}),o=Re(7297610,{roughness:.7}),a=Re(4168326,{roughness:.5,metalness:.3,emissive:3129242,emissiveIntensity:.35}),c=Re(9076586,{roughness:.5,metalness:.3,emissive:13148256,emissiveIntensity:.4}),l=-66*.82-16,h=-236,u=0;for(;h<38;){let f=18+fe()*12,d=22+fe()*12,m=22,[,x]=Si(0,h),g=-(x+f/2*.82),p=s[u%4],M=[p,r,o,o,r,r],E=new W(new Ge(m,d,f*.82),M);E.position.set(l-m/2,d/2,g),i.add(E);let v=u===3?"customs":u===5?"dome":h>10?"peace":null;if(v==="customs"){let S=new W(new Ge(9,22,9),p);S.position.set(l-6,d+11,g),i.add(S);let b=new W(new _i(3.2,32),Ve("#fff3d0",2.4));b.position.set(l-1.4,d+15,g),b.rotation.y=Math.PI/2,i.add(b);let w=new W(new xn(5,7,4),c);w.position.set(l-6,d+25.5,g),w.rotation.y=Math.PI/4,i.add(w),e.push({name:"\u6D77\u5173\u5927\u697C",pos:new I(l,d+15,g)})}else if(v==="dome"){let S=new W(new ot(8,24,12,0,Math.PI*2,0,Math.PI/2),c);S.position.set(l-11,d+2,g),i.add(S);let b=new W(new Je(8.2,8.2,4,24),p);b.position.set(l-11,d,g),i.add(b)}else if(v==="peace"){let S=new W(new xn(8,12,4),a);S.position.set(l-8,d+10,g),S.rotation.y=Math.PI/4,i.add(S);let b=new W(new Ge(12,6,12),p);b.position.set(l-8,d+3,g),i.add(b),e.push({name:"\u548C\u5E73\u996D\u5E97",pos:new I(l,d+12,g)})}let T=new W(new Ge(.6,.4,f*.7),Ve("#ffe2a0",2.5));T.position.set(l+.5,.3,g),i.add(T),t.push({x:l-m/2,z:g,r:Math.max(m,f)*.75}),h+=f+2.5,u++}n.add(li(i)),e.push({name:"\u5916\u6EE9\u4E07\u56FD\u5EFA\u7B51",pos:new I(l,20,-Si(0,-80)[1])})}function f_(n,e){let t=rt(e,0,{}),i=new ke,s=Re(3882858,{roughness:.6}),r=[],o=new ot(.5,8,6),a=new xn(.18,.35,4),c=[15895086,2762286,16117990,10256485,15720648,14211296];for(let b=0;b<4;b++){let w=new W(new Ge(3,1.2+b*1.2,70),s);w.position.set(17+b*3,(1.2+b*1.2)/2,0),i.add(w)}let l=new W(new Ge(14,.5,72),Re(13111342));l.position.set(22,9.5,0),i.add(l);for(let b=-34;b<=34;b+=5){let w=new W(new Je(.2,.2,9.5,6),Re(14540253));w.position.set(28.5,4.75,b),i.add(w)}let h=new W(new Ge(.3,.3,70),Ve("#ffd35c",3));h.position.set(15.2,9.2,0),i.add(h);for(let b=0;b<4;b++)for(let w=-33;w<=33;w+=1.6)fe()<.15||r.push({x:16.5+b*3,y:1.2+b*1.2+.6,z:w+(fe()-.5)*.6,phase:fe()*6.28,color:new Ee(c[Math.floor(fe()*c.length)])});let u=new ft({roughness:.8,emissive:2103320}),f=new gn(o,u,r.length),d=new gn(o,u,r.length),m=new gn(a,u,r.length*2);r.forEach((b,w)=>{f.setColorAt(w,b.color),d.setColorAt(w,b.color),m.setColorAt(w*2,b.color),m.setColorAt(w*2+1,b.color)}),i.add(f,d,m),i.position.set(t.x,0,t.z),i.rotation.y=Math.atan2(t.fx,t.fz)+Math.PI,i.name="stand",n.add(i),bn(i,[f,d,m]);let x=new et,g=new Yt,p=new I,M=new I(1,1.2,1),E=new I(.8,.8,.8),v=new I(1,1,1),T=(b,w)=>{r.forEach((y,_)=>{let C=y.y+Math.max(0,Math.sin(b*(6+w*6)+y.phase))*(.25+w*.5);f.setMatrixAt(_,x.compose(p.set(y.x,C,y.z),g,M)),d.setMatrixAt(_,x.compose(p.set(y.x,C+.85,y.z),g,E)),m.setMatrixAt(_*2,x.compose(p.set(y.x,C+1.25,y.z-.22),g,v)),m.setMatrixAt(_*2+1,x.compose(p.set(y.x,C+1.25,y.z+.22),g,v))}),f.instanceMatrix.needsUpdate=d.instanceMatrix.needsUpdate=m.instanceMatrix.needsUpdate=!0};T(0,0);for(let b of[f,d,m])b.computeBoundingSphere(),b.frustumCulled=!1;let S=0;return{update(b,w){S+=1,S%2&&T(b,w)}}}function d_(n,e,t,i){let r=[["\u5357\u4EAC\u8DEF","#ff5fd2"],["\u4E2D\u79CB\u5FEB\u4E50","#ffd84f"],["\u6708\u997C","#ff7a3d"],["\u767E\u8D27","#5ff2ff"],["\u8001\u5B57\u53F7","#ffe07a"],["\u8336\u98DF","#7dff9a"],["\u949F\u8868","#b48cff"],["\u7167\u76F8\u9986","#ff5f7a"],["\u4E1D\u7EF8","#ff9ad5"],["\u7CD5\u56E2","#ffd84f"],["\u5496\u5561","#7ff7ff"],["\u4E66\u5E97","#b3ff6f"],["\u9152\u5BB6","#ff6060"],["\u70B9\u5FC3","#ffb04a"],["\u620F\u9662","#ff5fd2"],["\u7CD6\u679C","#8fe3ff"]].map(([b,w])=>Bo(b,w,!0)),o=[Bo("\u5357\u4EAC\u4E1C\u8DEF\u6B65\u884C\u8857","#ffd84f",!1),Bo("\u4E2D\u79CB\u56E2\u5706","#ff5fd2",!1),Bo("\u4E0A\u6D77\u7B2C\u4E00\u98DF\u54C1","#5ff2ff",!1)],a=_s(1),c=new Ge(1,1,1);c.translate(0,.5,0);let l=new zn,h={},u=new ke,f=r.map(b=>new xt({map:b.texture,color:new Ee(1.25,1.25,1.25),side:St})),d=o.map(b=>new xt({map:b.texture,color:new Ee(1.15,1.15,1.15),side:St}));for(let[b,w]of Kn(e,y=>Wt[e.zone[y]].id==="nanjing")){let y=0;for(let _=b+6;_<w-4;_+=15){rt(e,_,h);let C=Math.atan2(h.fx,h.fz);for(let U of[-1,1]){let L=h.hw+h.off+9.5,z=h.x+h.rx*L*U,G=h.z+h.rz*L*U,B=16+fe()*20;l.add(c,a,Gt(z,0,G,14,B,13,C),new Ee().setHSL(.02+fe()*.1,.3,.5+fe()*.15)),i.push({x:z,z:G,r:10});let Q=y++%r.length,O=r[Q],J=7+fe()*3,re=new W(new Ht(J*O.aspect,J),f[Q]),me=L-7.5;if(re.position.set(h.x+h.rx*me*U,6+J/2+fe()*3,h.z+h.rz*me*U),re.rotation.y=C+Math.PI,u.add(re),fe()<.35){let D=Math.floor(fe()*d.length),q=o[D],te=new W(new Ht(3*q.aspect,3),d[D]),ce=L-6.4;te.position.set(h.x+h.rx*ce*U,B*.6+4,h.z+h.rz*ce*U),te.rotation.y=C+(U>0?Math.PI/2:-Math.PI/2),u.add(te)}}}}l.build(n,{name:"nanjing"});let m=rt(e,e.length*0+ou(e,"nanjing")+8,h),x=new ke,g=m.hw+4,p=Re(13111342,{roughness:.5}),M=Re(14725200,{metalness:.7,roughness:.3,emissive:8409104,emissiveIntensity:.5});for(let b of[-g,g]){let w=new W(new Je(.8,.9,11,12),p);w.position.set(b,5.5,0),x.add(w)}let E=new W(new Ge(g*2+4,2.2,1.6),p);E.position.y=11.5,x.add(E);let v=new W(new Ge(g*2+6,.8,3.4),M);v.position.y=12.9,x.add(v);let T=new W(new Ht(g*1.4,1.9),new xt({map:br("\u5357\u4EAC\u8DEF\u6B65\u884C\u8857",{bg:"#8a0c1c"}),color:new Ee(1.4,1.4,1.4)}));T.position.set(0,11.5,.85),x.add(T);let S=T.clone();S.rotation.y=Math.PI,S.position.z=-.85,x.add(S),x.position.set(m.x,m.y,m.z),x.rotation.y=Math.atan2(m.fx,m.fz)+Math.PI,n.add(x),n.add(u),t.push({name:"\u5357\u4EAC\u8DEF\u6B65\u884C\u8857",pos:new I(m.x,20,m.z)})}function ou(n,e){for(let t=0;t<n.n;t++)if(Wt[n.zone[t]].id===e)return t*n.step;return 0}function su(n,e,t,i){let s=new xn(1,1,4,1,!0);s.rotateY(Math.PI/4);let r=new W(s,i);return r.scale.set(n*.72,t,e*.72),r}function p_(n,e,t){let i=new ke,s=Re(15250500,{metalness:.85,roughness:.25,emissive:16752672,emissiveIntensity:.55}),r=Re(15260080,{roughness:.7,emissive:6965792,emissiveIntensity:.2}),o=Re(11022893),a=new W(new Ge(46,3,40),Re(13616040));a.position.y=1.5,i.add(a);for(let[f,d,m,x,g]of[[0,0,22,16,10],[-15,-8,10,10,7],[15,-8,10,10,7],[-15,10,10,10,7],[15,10,10,10,7]]){let p=new W(new Ge(m,g,x),r);p.position.set(f,3+g/2,d),i.add(p);for(let E=0;E<4;E++){let v=new W(new Je(.4,.4,g,8),o);v.position.set(f-m/2+1+E*(m-2)/3,3+g/2,d+x/2+.6),i.add(v)}let M=su(m*1.35,x*1.35,4.5,s);M.position.set(f,3+g+2.2,d),i.add(M)}let c=3,l=9;for(let f=0;f<5;f++){let d=new W(new Ge(l,5,l),r);d.position.set(0,c+2.5+13,-2),i.add(d);let m=su(l*1.5,l*1.5,2.5,s);m.position.set(0,c+5.8+13,-2),i.add(m),c+=6,l*=.84}let h=new W(new xn(1.4,9,8),s);h.position.set(0,c+18,-2),i.add(h);let u=jn(-588,136);i.position.copy(u),i.rotation.y=.7,n.add(i),e.push({name:"\u9759\u5B89\u5BFA",pos:u.clone().setY(30)}),t.push({x:u.x,z:u.z,r:34})}function m_(n,e,t){let i=new os;i.moveTo(0,0),i.lineTo(34,-8),i.lineTo(34,8),i.lineTo(2,3),i.closePath();let s=new or(i,{depth:32,bevelEnabled:!1});s.rotateX(-Math.PI/2);let r=Bd();r.repeat.set(.12,.12);let o=new ft({map:r,roughness:.85});o.onBeforeCompile=u=>{u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vOP; varying vec3 vON;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOP = position; vON = normal;`),u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vOP; varying vec3 vON;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (abs(vON.y) < 0.5) {
          float u = vOP.x + vOP.z;
          vec2 f = vec2(fract(u / 3.0), fract(vOP.y / 3.6));
          float win = step(0.3, f.x) * step(f.x, 0.7) * step(0.25, f.y) * step(f.y, 0.75) * step(4.0, vOP.y);
          float lit = step(0.35, fract(sin(floor(u / 3.0) * 12.9 + floor(vOP.y / 3.6) * 78.2) * 43758.5));
          float arcade = step(vOP.y, 4.0) * step(0.2, f.x) * step(f.x, 0.8);
          totalEmissiveRadiance += vec3(1.0, 0.75, 0.42) * (win * lit * 1.5 + arcade * 1.2);
        }`)};let a=new W(s,o),c=new ke;c.add(a);let l=new W(new Ge(6,3,8),Re(8011310));l.position.set(4,33.5,0),c.add(l);let h=jn(-556,-290);return c.position.copy(h),c.rotation.y=-2.36,n.add(c),e.push({name:"\u6B66\u5EB7\u5927\u697C",pos:h.clone().setY(24)}),t.push({x:h.x-12,z:h.z+12,r:26}),c}function g_(n,e,t,i,s){let r=new ke,o=jn(-273,-296),a=new _i(1,64);a.rotateX(-Math.PI/2);let c=new W(a,s());c.scale.set(48,1,30),c.position.set(o.x,.14,o.z),r.add(c);let l=new W(new Bn(1,.03,6,64),Re(9407122));l.rotation.x=Math.PI/2,l.scale.set(48,30,30),l.position.set(o.x,.2,o.z),r.add(l),i.push({x:o.x,z:o.z,r:56});let h=new ft({map:Od("#3a3742"),roughness:.6}),u=Ve("#ffcf6a",3),f=Re(11022893,{roughness:.6}),d=Fd(),m=new ft({map:d,emissiveMap:d,emissive:16777215,emissiveIntensity:.9}),x=(U,L,z,G,B,Q=0,O=1)=>{let J=new ke,re=new W(new Ge(z,B,G),[f,f,f,f,m,m]);re.position.y=B/2,J.add(re);let me=B;for(let D=0;D<O;D++){let q=1-D*.28,te=su(z*1.5*q,G*1.6*q,3.2*q,h);te.position.y=me+1.6*q,J.add(te);let ce=new W(new Ge(z*1.1*q,.2,G*1.15*q),u);if(ce.position.y=me+.1,J.add(ce),D<O-1){let Y=new W(new Ge(z*.6,3,G*.6),m);Y.position.y=me+3.4,J.add(Y),me+=4.5}}for(let D of[-1,1]){let q=new W(new ot(.6,10,8),Ve("#ff3b2f",2.4));q.position.set(D*z*.4,B-.6,G/2+.9),J.add(q)}J.position.set(U,0,L),J.rotation.y=Q,r.add(J)},g=jn(-266,-326);x(g.x,g.z,9,9,4,.3,2);let p=new W(new Je(7,7,1,8),Re(10130588));p.position.set(g.x,.3,g.z),r.add(p),t.push({name:"\u8C6B\u56ED \xB7 \u6E56\u5FC3\u4EAD",pos:new I(g.x,12,g.z)});let M={};for(let U=0;U<22;U++){let L=fe()*Math.PI*2,z=48+fe()*45,G=o.x+Math.cos(L)*z,B=o.z+Math.sin(L)*z*.8;yr(e,G,B,3).dist<22||(x(G,B,10+fe()*8,8+fe()*4,5+fe()*3,L+Math.PI/2,fe()>.6?2:1),i.push({x:G,z:B,r:14}))}let E=new ke,v=new ft({color:16051960,emissive:16770800,emissiveIntensity:.55,roughness:.6}),T=Ve("#ff8fb8",2),S=new W(new ot(4,20,16),v);S.scale.set(1,.85,1.2),S.position.y=4,E.add(S);let b=new W(new ot(2.6,20,16),v);b.position.set(0,7.8,3.2),E.add(b);for(let U of[-1,1]){let L=new W(new si(.7,4,6,10),v);L.position.set(U*1.1,11.2,2.6),L.rotation.z=-U*.2,E.add(L);let z=new W(new si(.35,3.2,4,8),T);z.position.set(U*1.1,11.2,3.1),z.rotation.z=-U*.2,E.add(z);let G=new W(new ot(.35,8,6),Ve("#ff3050",3));G.position.set(U*1,8.2,5.6),E.add(G)}let w=new W(new Je(2.2,2.2,.8,24),Re(14721612,{emissive:12611616,emissiveIntensity:.8}));w.position.set(0,5.2,5.3),w.rotation.x=Math.PI/2,E.add(w);let y=jn(-292,-262);E.position.set(y.x,.2,y.z),E.rotation.y=Math.PI*.85,r.add(E);let _=new xn(.9,.7,8,1,!0),C=new zn;for(let U=0;U<40;U++){let L=fe()*6.28,z=Math.sqrt(fe()),G=o.x+Math.cos(L)*z*44,B=o.z+Math.sin(L)*z*27;yr(e,G,B,2).dist<8||C.add(_,Ve(fe()>.5?"#ff8fc8":"#ffc36b",2.4),Gt(G,.45,B,1,1,1,0,Math.PI))}C.build(r);for(let[U,L]of Kn(e,z=>e.edge[z]===1))for(let z=U;z<=L;z+=14){rt(e,z,M);for(let G of[-1,1]){let B=M.x+M.rx*(M.hw+.7)*G,Q=M.z+M.rz*(M.hw+.7)*G,O=new W(new Je(.15,.15,3,6),Re(3355443));O.position.set(B,M.y-.3,Q),r.add(O);let J=new W(new ot(.5,10,8),Ve("#ff3b2f",2.6));J.position.set(B,M.y+1.5,Q),r.add(J)}}return n.add(r),t.push({name:"\u4E5D\u66F2\u6865",pos:new I(o.x,6,o.z)}),{rabbit:E}}function x_(n,e,t,i){let s=new ke,r=Re(15264498,{roughness:.4,metalness:.2,emissive:6324416,emissiveIntensity:.15}),o=Ve("#dff0ff",2.2),a={},c=[];for(let y of[-10,88]){let[_,C]=Si(y,-444),U=32,L=new ke;for(let G of[-1,1]){let B=new W(new Ge(3,100,3.4),r);B.position.set(0,49,G*12.5),L.add(B)}for(let G of[U-3,92]){let B=new W(new Ge(3,3,28),r);B.position.y=G,L.add(B)}let z=new W(new Ge(3.4,1,28.5),Ve("#9fd8ff",3));z.position.y=94,L.add(z);for(let G of[20,45,70])for(let B of[-1,1]){let Q=new W(new Ge(3.3,.4,3.7),Ve("#bfe6ff",2.5));Q.position.set(0,G,B*12.5),L.add(Q)}L.position.set(_,0,-C),s.add(L),c.push({x:_,z:-C}),i.push({x:_,z:-C,r:20})}let l=new Je(.09,.09,1,4),h=new zn,u=new I,f=new I,d=new I,m=new I,x=new I(0,1,0),g=new Yt,p=new I,M=new et;for(let y of c)for(let _=1;_<=11;_++)for(let C of[-1,1])for(let U of[-1,1]){u.set(y.x,88-_*2.4,y.z+U*12.5),f.set(y.x+C*_*6.2,33,y.z+U*10.5),d.addVectors(u,f).multiplyScalar(.5),m.subVectors(f,u);let L=m.length();m.normalize(),g.setFromUnitVectors(x,m),h.add(l,o,M.compose(d,g,p.set(1,L,1)))}h.build(s),n.add(li(s)),t.push({name:"\u5357\u6D66\u5927\u6865",pos:new I(c[0].x,60,c[0].z)});let E=ou(e,"glide"),v=rt(e,E-.5,a),T=new ke,S=v.hw+1;for(let y of[-S,S]){let _=new W(new Je(.4,.4,7,8),Re(16765788,{emissive:16751136,emissiveIntensity:.8}));_.position.set(y,3.5,0),T.add(_)}let b=new W(new Ht(S*2,2),new xt({map:br("\u5B54\u660E\u706F\u6ED1\u7FD4 \xB7 \u8D77\u98DE\uFF01",{bg:"#1b2f7a",fg:"#ffe9a8",stroke:"#0d1a44",border:"#8ff6ff"}),color:new Ee(1.5,1.5,1.5),side:St}));b.position.y=7,T.add(b),T.position.set(v.x,v.y,v.z),T.rotation.y=Math.atan2(v.fx,v.fz)+Math.PI,n.add(T);let w=new ke;for(let y=0;y<5;y++){let _=rt(e,E+12+y*18,a),C=new W(new Bn(6.5,.35,8,40),Ve(y%2?"#ffcf6a":"#8ff6ff",3));C.position.set(_.x,_.y+3,_.z),C.rotation.y=Math.atan2(_.fx,_.fz),w.add(C)}n.add(li(w))}function v_(n,e,t,i){let s=new ke,r=ou(e,"pudong"),o=rt(e,r+90,{}),a=1,c=o.hw+o.off+16,l=o.x+o.rx*c*a,h=o.z+o.rz*c*a,u=new W(new Je(7,7,4.5,40),Re(14721612,{emissive:12085792,emissiveIntensity:.6,roughness:.5}));u.rotation.z=Math.PI/2,u.rotation.y=Math.atan2(o.fx,o.fz),u.position.set(l,7,h),s.add(u);let f=new W(new ot(2.4,12,8),Re(16765788,{emissive:16756768,emissiveIntensity:1.2}));f.position.set(l,7,h),s.add(f),i.push({x:l,z:h,r:12}),t.push({name:"\u6D66\u4E1C\u6EE8\u6C5F",pos:new I(l,12,h)}),n.add(s)}function yp(n,e,t){let i=[],s=[],r=new ke;r.name="landmarks",n.add(r),u_(r,i,s);let o=f_(n,e);d_(r,e,i,s),p_(r,i,s);let a=m_(r,i,s),c=g_(r,e,i,s,t);x_(r,e,i,s),v_(r,e,i,s);let l=h_(r,e,i,s),h=bn(r,[c.rabbit,l.swfc,a]);return{labels:i,excl:s,stand:o,rabbit:c.rabbit,pearl:l.pearl,stats:h}}var Tt=n=>document.getElementById(n),Ss=()=>new Promise(n=>setTimeout(n,0)),ci=(n,e,t)=>n<e?e:n>t?t:n,wi=new URLSearchParams(location.search);window.__errors=[];addEventListener("error",n=>window.__errors.push(String(n.message)));var bp=wi.has("autotick")?n=>setTimeout(()=>n(performance.now()),16):requestAnimationFrame,lu=matchMedia("(pointer: coarse)").matches;lu&&(document.body.classList.add("touch-on"),Tt("howText").innerHTML="\u5DE6\u4E0B \u25C0 \u25B6 \u8F6C\u5411\u3000\u53F3\u4E0B\u6309\u4F4F\u300C\u8DF3 / \u6F02\u79FB\u300D\u8FC7\u5F2F\uFF0C\u706B\u82B1\u53D8\u8272\u540E\u677E\u5F00\u51B2\u523A\u3000\u300C\u9053\u5177\u300D\u53D1\u5C04<br>\u5403\u6708\u997C\u63D0\u901F\uFF0C\u88AB\u51FB\u4E2D\u4F1A\u6389\u6708\u997C\u3002\u5012\u8BA1\u65F6 GO \u7684\u77AC\u95F4\u6309\u300C\u8DF3\u300D\uFF1A\u8D77\u8DD1\u51B2\u523A\uFF01");var Qn={level:wi.get("q")||(lu?"medium":"high"),get pixelRatio(){let n=window.devicePixelRatio||1;return this.level==="high"?Math.min(n,1.75):this.level==="medium"?Math.min(n,1.25):.85},get bloom(){return this.level!=="low"},get reflect(){return this.level==="high"||this.level==="medium"},get msaa(){return this.level==="high"}},Vt;try{Vt=new ic({antialias:!1,powerPreference:"high-performance"})}catch(n){let e=document.createElement("div");throw e.className="error",e.textContent="\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u542F\u52A8 3D \u753B\u9762\uFF0C\u8BF7\u4F7F\u7528\u652F\u6301 WebGL \u7684 Chrome\u3001Edge \u6216 Safari \u6253\u5F00\u3002",document.body.append(e),n}Vt.setPixelRatio(Qn.pixelRatio);Vt.setSize(innerWidth,innerHeight);Vt.outputColorSpace=Kt;Vt.toneMapping=cr;Vt.toneMappingExposure=1;Vt.info.autoReset=!1;Tt("world").append(Vt.domElement);var yt=new js;yt.fog=new oo(2759236,.0017);var ht=new jt(66,innerWidth/innerHeight,.3,5e3);ht.position.set(0,60,200);var Wi=(n,e)=>{Tt("loadBar").style.width=Math.round(n*100)+"%",e&&(Tt("loadText").textContent=e)};function y_(){let n=new js,e=new ot(50,32,16),t=[],i=e.attributes.position,s=new Ee;for(let c=0;c<i.count;c++){let l=i.getY(c)/50;l>.25?s.setRGB(.06,.07,.22):l>0?s.setRGB(.9-l*2.4,.45-l,.55):s.setRGB(.25,.14,.2),t.push(s.r,s.g,s.b)}e.setAttribute("color",new Ye(t,3)),n.add(new W(e,new xt({vertexColors:!0,side:$t})));for(let c=0;c<16;c++){let l=new W(new Ge(6,2+Math.random()*5,1),new xt({color:new Ee().setHSL(Math.random()>.5?.08:.85,1,.6).multiplyScalar(3)})),h=c/16*Math.PI*2;l.position.set(Math.cos(h)*40,1+Math.random()*4,Math.sin(h)*40),l.lookAt(0,2,0),n.add(l)}let r=new W(new ot(4,16,8),new xt({color:new Ee(4,3.4,2.2)}));r.position.copy(un.moonDir.value).multiplyScalar(40),n.add(r);let o=new gr(Vt),a=o.fromScene(n,.02);return o.dispose(),a.texture}var Mt,Go,ct={},Hn,Xi,Pr,Sp,Tp,Ut,Cr,Ir,wp=[],He=cp(),Wo=fp();Wo.bindTouch({left:Tt("tLeft"),right:Tt("tRight"),drift:Tt("tDrift"),item:Tt("tItem")});async function __(){Wi(.05,"\u94FA\u8BBE\u8D5B\u9053"),await Ss(),Mt=xd(),Go=vd(Mt),yt.environment=y_(),yt.environmentIntensity=.55,yt.add(new To(8359167,3809336,.85));let n=new lr(13161727,1.35);n.position.copy(un.moonDir.value).multiplyScalar(300),yt.add(n);let e=new lr(16752752,.6);e.position.set(-200,80,300),yt.add(e),Wi(.15,"\u70B9\u4EAE\u591C\u7A7A"),await Ss(),ct.sky=ep(yt),Ir=Qn.reflect?qd(Vt,bs,Qn.level==="high"?.4:.28):null,ct.water=tp(yt,Ir),ct.ground=np(yt,Mt),Wi(.3,"\u642D\u5EFA\u5916\u6EE9\u3001\u5357\u4EAC\u8DEF\u4E0E\u8C6B\u56ED"),await Ss();let t=()=>{let s=ac(null);return ct.pondMats=[...ct.pondMats||[],s],s};ct.landmarks=yp(yt,Mt,t),Wi(.5,"\u7AD6\u8D77\u9646\u5BB6\u5634\u5929\u9645\u7EBF"),await Ss(),ct.roads=vp(yt,Mt,Go),ct.courseGlow=D_();let i=[...ct.landmarks.excl];ct.city=ip(yt,Mt,i),Wi(.65,"\u6302\u706F\u7B3C\u3001\u79CD\u68A7\u6850"),await Ss(),sp(yt,Mt,Go),Xi=new zo(yt,3e3),Pr=new hc(yt),Pr.onBoom=(s,r,o)=>{let a=ht.position.distanceTo(new I(s,r,o));F.mode!=="loading"&&He.sfx.boom(ci(60/a,.04,.3))},Sp=rp(yt,lu?110:180),Tp=op(yt),Wi(.78,"\u6A58\u732B\u70ED\u8EAB\u4E2D"),await Ss(),Hn=$d(yt,Mt,Go,Xi,He);for(let s of Oo){let r=nu(s);r.def=s,r.root.name="racer",yt.add(r.root);let o=new W(new Ht(2.2,2.8),new xt({map:Sr("rgba(10,5,30,0.75)",.2),transparent:!0,depthWrite:!1}));o.rotation.x=-Math.PI/2,yt.add(o),r.shadow=o,wp.push(r)}ct.playerLight=new wo(16769728,40,26,1.6),yt.add(ct.playerLight),ct.signal=M_(),yt.add(ct.signal.group),Ut=up(Mt,Oo),Cr=pp(Vt,yt,ht,Qn),fu(),Wi(.92,"\u9884\u70ED\u753B\u9762"),Vt.compile(yt,ht),await Ss(),Wi(1,"\u5B8C\u6210")}function M_(){let n=new ke,e=Re(16777215,{emissive:13160703,emissiveIntensity:.4,roughness:1});for(let[h,u,f,d]of[[0,0,0,1.4],[1.3,-.2,.2,1.1],[-1.3,-.2,0,1.1],[.6,.5,-.4,1],[-.7,.4,.3,.9]]){let m=new W(new ot(d,16,12),e);m.position.set(h,u,f),n.add(m)}let t=nu(Oo[1],{tag:!1});t.root.scale.setScalar(.8),t.root.position.y=.8,t.root.rotation.y=Math.PI,n.add(t.root);let i=new W(new Je(.06,.06,3,6),Re(4473924));i.position.set(1.4,2.2,.4),n.add(i);let s=[],r=Re(2761792,{roughness:.4}),o=new W(new Ge(.9,2.5,.35),Re(1773616));o.position.set(1.4,4.2,.4),n.add(o);for(let h=0;h<3;h++){let u=new W(new ot(.32,14,10),r);u.position.set(1.4,5-h*.78,.62),n.add(u),s.push(u)}n.visible=!1;let a=Ve("#ff3030",4),c=Ve("#50ff70",4),l=Ve("#ffd84f",4);return{group:n,rab:t,set(h){s.forEach((u,f)=>{u.material=h===4?c:f<h?a:r})}}}var F={mode:"loading",cup:localStorage.getItem("mooncat.cup")||"normal",t:0,raceTime:0,countdown:0,racers:[],player:null,ranks:[],introT:0,finishT:0,startPress:null,shake:0,paused:!1,finalLap:!1,camDir:new I(0,0,-1),camPos:new I,camLook:new I,fov:66,fullMoonDone:!1,frameMs:16,frames:0,slow:1};function Xo(){let n=Hi[F.cup],e={rabbit:n.ai[4],coal:n.ai[3],calico:n.ai[2],cow:n.ai[1],tabby:n.ai[0]},t={rabbit:0,coal:1,calico:2,cow:3,player:4,tabby:5};F.racers=Oo.map((i,s)=>{let r=t[i.id],o=Md(i.id,{name:i.name,isPlayer:i.id==="player",skill:e[i.id]??1,bias:(Math.random()-.5)*3,s:-6-Math.floor(r/2)*8,d:r%2?3.6:-3.6});return o.color=i.color,o.model=wp[s],o}),F.player=F.racers[0],F.ranks=$h(F.racers)}function E_(n){let e=n.s-F.player.s;return 1-ci(e/500,-.1,.07)}function qo(n){for(let e of["loading","title","intro","hud","pause","results"])Tt(e).classList.toggle("hidden",!n.includes(e));document.body.classList.toggle("racing",n.includes("hud"))}function Ap(){let n=Tt("cups");n.innerHTML="";for(let e of Object.values(Hi)){let t=document.createElement("button");t.className="cup"+(e.id===F.cup?" sel":"");let i=JSON.parse(localStorage.getItem("mooncat.best."+e.id)||"null");t.innerHTML=`<b>${e.name}</b><span>${e.desc}</span><span>${i?`\u6700\u4F73 \u7B2C${i.place}\u540D \xB7 ${Mr(i.time)}`:"\u5C1A\u672A\u6311\u6218"}</span>`,t.onclick=()=>{F.cup=e.id,localStorage.setItem("mooncat.cup",e.id),He.sfx.click(),Ap()},n.append(t)}}function cu(){F.mode="title",qo(["title"]),Ap(),ct.signal.group.visible=!1,Hn.reset(),Xo(),uu(0),He.ready&&He.play("title")}function _c(){He.unlock(),He.play("title",{restart:!1}),He.preload("race"),He.preload("final"),Hn.reset(),Xo(),F.mode="intro",F.introT=0,Tt("introCup").textContent=Hi[F.cup].name+" \xB7 3 \u5708",qo(["intro"]),Wo.clear()}function Ts(){F.mode="countdown",F.countdown=0,F.lastCount=-1,F.startPress=null,F.raceTime=0,F.finalLap=!1,F.fullMoonDone=!1,yt.fog.density=.0017,ct.courseGlow.visible=!1,qo(["hud"]),Ut.resetZone(),Ut.center("","",0),ct.signal.group.visible=!0,ct.signal.set(0),He.stopMusic(),Wo.clear()}function Rp(){F.startDone=!0,F.player.boost=1.4,F.player.v=30,Ut.center("\u8D77\u8DD1\u51B2\u523A\uFF01","",900),He.sfx.boost()}function b_(){F.mode="race",F.startDone=!1,He.play("race");let n=Sd(F.startPress,3);n==="rocket"?Rp():n==="stall"?(F.startDone=!0,F.player.spin=.7,Ut.center("\u62A2\u8DD1\u6253\u6ED1\u2026","",900)):F.startPress!==null&&(F.startDone=!0);for(let e of F.racers)!e.isPlayer&&Math.random()<Hi[F.cup].aiDrift*.7&&(e.boost=1+Math.random()*.4,e.v=26)}function S_(){F.mode="finish",F.finishT=0,He.sfx.finish();let n=F.ranks.indexOf(F.player)+1;Ut.center(n===1?"\u51A0\u519B\uFF01":`\u7B2C ${n} \u540D`,"\u51B2\u7EBF\uFF01",2400);for(let e=0;e<6;e++)setTimeout(()=>{let t=F.player.model.root.position;Pr.launch(t.x+(Math.random()-.5)*120,t.z+(Math.random()-.5)*120-40,60+Math.random()*40)},e*260)}function T_(){F.mode="results",qo(["results"]);let n=Hi[F.cup],e=vs*Mt.length,t=F.racers.map(u=>({r:u,time:u.finished?u.finishTime:Ad(u,F.raceTime,e,n.vmax)}));t.sort((u,f)=>u.time-f.time);let i=t.findIndex(u=>u.r.isPlayer)+1,s=F.player;Tt("resTitle").textContent=i===1?"\u7B2C 1 \u540D\uFF01\u6708\u5149\u676F\u51A0\u519B":i<=3?`\u7B2C ${i} \u540D\uFF01\u767B\u4E0A\u9886\u5956\u53F0`:`\u7B2C ${i} \u540D`;let r=Td[i-1]+Math.floor(s.totalCakes/10);Tt("resScore").textContent=`${n.name} \xB7 \u7528\u65F6 ${Mr(s.finishTime)} \xB7 \u5403\u5230\u6708\u997C ${s.totalCakes} \u679A \xB7 \u79EF\u5206 ${r}`,Tt("resRows").innerHTML=t.map((u,f)=>`<div class="row ${u.r.isPlayer?"me":""}"><span class="pl">${f+1}</span><span><i class="dot" style="background:${u.r.color}"></i>${u.r.name}${u.r.isPlayer?"\uFF08\u4F60\uFF09":""}</span><span class="t">${Mr(u.time)}${u.r.finished?"":"*"}</span><span class="c">\u{1F96E}${u.r.totalCakes}</span></div>`).join("");let o=wd(s,i);Tt("resBadges").innerHTML=o.length?o.map(u=>`<span class="badge"><b>${u.name}</b> ${u.desc}</span>`).join(""):'<span class="badge">\u63D0\u793A\uFF1A\u5F2F\u9053\u6309\u4F4F\u7A7A\u683C\u6F02\u79FB\uFF0C\u706B\u82B1\u53D8\u91D1\u8272\u518D\u677E\u5F00</span>';let a="mooncat.best."+F.cup,c=JSON.parse(localStorage.getItem(a)||"null");(!c||i<c.place||i===c.place&&s.finishTime<c.time)&&localStorage.setItem(a,JSON.stringify({place:i,time:s.finishTime}));let l=["easy","normal","hard"],h=l[Math.min(2,l.indexOf(F.cup)+1)];Tt("nextCupBtn").textContent=F.cup==="hard"?"\u518D\u6218\u6EE1\u6708\u676F":`\u6311\u6218${Hi[h].name}`,Tt("nextCupBtn").onclick=()=>{F.cup=h,localStorage.setItem("mooncat.cup",h),_c()},He.play("title")}function Lr(n){!["race","countdown"].includes(F.mode)&&!F.paused||(F.paused=n,Tt("pause").classList.toggle("hidden",!n),n?He.suspend():(He.resume(),Wo.clear()))}var hu={},yc=new I,Cp=new I,NS=new I(0,1,0),w_=Wt.findIndex(n=>n.id==="glide"),A_=Wt.findIndex(n=>n.id==="tunnel");function uu(n){for(let e of F.racers){let t=e.model,i=rt(Mt,e.s,hu),s=i.zone===w_,r=e.h;s&&(r+=.3+Math.sin(F.t*2+e.bias)*.25),ai(Mt,e.s,e.d,r,t.root.position),e.rescue>0&&(t.root.position.y=i.y+e.h);let o=Math.atan2(i.fx,i.fz);t.root.rotation.set(0,o+e.yaw,0),t.scale=e.isPlayer?1.2:1.1;let a=ht.position.distanceTo(t.root.position);t.setFar(a>55),t.nameTag&&(t.nameTag.visible=a>5&&a<140&&F.mode!=="title");let c=e.landT>0?1+e.landT*.6:1;e.landT>0&&(e.landT-=n),t.update(e,n,F.t,{glide:s,squash:c}),e.wx=t.root.position.x,e.wz=t.root.position.z;let l=t.shadow;l.visible=!s&&e.rescue<=0,ai(Mt,e.s,e.d,.1,l.position),l.rotation.z=-o;let h=ci(1-e.h*.12,.3,1);l.scale.set(h,h,h)}}function R_(n,e){let t=n.model.root,i=yc.set(0,0,-1).applyQuaternion(t.quaternion),s=Cp.set(1,0,0).applyQuaternion(t.quaternion),r=t.position.x+i.x*.9,o=t.position.y+.15,a=t.position.z+i.z*.9;if(n.drift&&n.grounded){let c=n.driftLevel===3?"#ff6fe8":n.driftLevel===2?"#ffa21c":n.driftLevel===1?"#5fc8ff":"#f0f0ff",l=n.isPlayer?3:1;for(let h=0;h<l;h++)for(let u of[-1,1])Xi.spawn(r+s.x*.45*u,o,a+s.z*.45*u,(Math.random()-.5)*4+i.x*3,2+Math.random()*3,(Math.random()-.5)*4+i.z*3,c,n.driftLevel?.55:.35,.28,12,2)}if(n.boost>0||n.lantern>0){let c=n.isPlayer?3:1;for(let l=0;l<c;l++)Xi.spawn(r+(Math.random()-.5)*.6,o+.5+Math.random()*.5,a+(Math.random()-.5)*.6,i.x*10,1,i.z*10,Math.random()>.4?"#ffb03a":"#ffe46b",.9,.3,-2,3)}n.offroad&&n.v>10&&Math.random()<.5&&Xi.spawn(r,o,a,(Math.random()-.5)*3,2,(Math.random()-.5)*3,"#8a7a5a",.8,.5,4,2)}var _p={peel:"\u67DA\u5B50\u76AE",frisbee:"\u6708\u997C\u98DE\u76D8",firework:"\u8FFD\u8E2A\u70DF\u82B1",trash:"\u5783\u573E",cone:"\u8DEF\u9525",train:"\u94DB\u94DB\u8F66",rollcake:"\u6EDA\u52A8\u5927\u6708\u997C",moon:"\u6EE1\u6708\u4E4B\u5149"};function C_(n){let e=n.isPlayer;for(let t of n.events)switch(t.type){case"cake":if(e&&(He.sfx.cake(t.total),t.total===100&&!F.fullMoonDone)){F.fullMoonDone=!0,Ut.center("\u6EE1\u6708\u52CB\u7AE0\uFF01","\u5355\u573A\u5403\u5230 100 \u679A\u6708\u997C",2200),He.sfx.fullmoon();for(let i=0;i<5;i++)setTimeout(()=>{let s=F.player.model.root.position;Pr.launch(s.x+(Math.random()-.5)*160,s.z-60-Math.random()*80,80+Math.random()*40,"#ffd84f")},i*200)}break;case"box":e&&He.sfx.box();break;case"gotItem":e&&He.sfx.gotItem();break;case"turbo":e&&(He.sfx.turbo(t.level),t.level>=2&&Ut.center(t.level===3?"\u8D85\u7EA7\u6F02\u79FB\u51B2\u523A\uFF01":"\u6F02\u79FB\u51B2\u523A\uFF01","",700),F.shake=Math.max(F.shake,.15));break;case"driftLevel":e&&He.sfx.driftLevel(t.level);break;case"hop":e&&He.sfx.hop();break;case"land":n.landT=t.hard?.22:.12,e&&t.hard&&(He.sfx.land(),F.shake=Math.max(F.shake,.25));break;case"bump":e&&(He.sfx.bump(),F.shake=Math.max(F.shake,.3));break;case"spin":if(e&&(He.sfx.spin(),F.shake=Math.max(F.shake,.5),t.lost&&Ut.center("",`\u6389\u4E86 ${t.lost} \u679A\u6708\u997C`,900)),t.lost){let i=n.model.root.position;for(let s=0;s<t.lost*4;s++)Xi.spawn(i.x,i.y+1,i.z,(Math.random()-.5)*8,5+Math.random()*4,(Math.random()-.5)*8,"#e0a24c",1,.8,16,.5)}break;case"hitBy":e&&t.result==="hit"&&Ut.toast(`\u88AB${_p[t.by]||t.by}\u7ECA\u5012\u4E86\uFF01`),e&&t.result==="blocked"&&Ut.toast("\u5154\u5B50\u706F\u62A4\u76FE\u6321\u4F4F\u4E86\uFF01");break;case"scored":e&&Ut.toast(`${_p[t.by]||""}\u547D\u4E2D ${F.racers.find(i=>i.id===t.on)?.name}\uFF01`);break;case"shieldBreak":e&&He.sfx.shield();break;case"fall":e&&(He.sfx.fall(),Ut.center("\u6251\u901A\uFF01","\u7389\u5154\u628A\u4F60\u635E\u56DE\u6765",1500));break;case"rescued":e&&He.sfx.rescue();break;case"useItem":e&&((t.item==="peel"||t.item==="frisbee")&&He.sfx.throw(),t.item==="firework"&&He.sfx.firework(),t.item==="shield"&&He.sfx.gotItem(),t.item==="lantern"&&(He.sfx.boost(),Ut.center("\u5B54\u660E\u706F\u8D77\u98DE\uFF01","",900))),t.item==="firework"&&Hn.shots[Hn.shots.length-1]?.target?.isPlayer&&Ut.toast(`\u26A0 ${n.name} \u7684\u8FFD\u8E2A\u70DF\u82B1\u6765\u4E86\uFF01`);break;case"moonFlash":He.sfx.moon(),Ut.flash("#fff3b0",.7,700),e?Ut.center("\u6EE1\u6708\u4E4B\u5149\uFF01","\u524D\u65B9\u9009\u624B\u5168\u88AB\u6643\u6655",1200):Ut.toast(`${n.name} \u653E\u51FA\u6EE1\u6708\u4E4B\u5149\uFF01`);break;case"boostItem":e&&He.sfx.boost();break;case"pad":e&&He.sfx.pad();break;case"ramp":e&&He.sfx.ramp();break;case"trick":e&&(He.sfx.trick(),Ut.center("","\u7A7A\u4E2D\u82B1\u5F0F\uFF01",600));break;case"trickBoost":e&&He.sfx.boost();break}}function I_(n){let e=Mt.length,t=oc(n.s,e);t>n.lastLap&&!n.finished&&(n.lapTimes.push(F.raceTime),n.lastLap=t,t>vs?(n.finished=!0,n.finishTime=F.raceTime,n.isPlayer&&S_()):n.isPlayer&&(t===vs?(Ut.center("\u6700\u540E\u4E00\u5708\uFF01","",1600),He.sfx.finalLap(),He.play("final"),F.finalLap=!0):(Ut.center(`\u7B2C ${t} \u5708`,"",1100),He.sfx.lap())))}function P_(n,e,t=!1){let i=rt(Mt,e.s,hu),s=e.model.root.position,r=i.zone===A_,o=Math.atan2(i.fx,i.fz)+(e.spin>0?0:ci(e.yaw,-.9,.9)*.35),a=Math.sin(o),c=Math.cos(o),l=t?1:1-Math.exp(-n*5);F.camDir.x+=(a-F.camDir.x)*l,F.camDir.z+=(c-F.camDir.z)*l,F.camDir.y=0,F.camDir.normalize();let h=e.v/50,u=(r?5.8:6.4)+h*1.1+(e.boost>0?.9:0),f=(r?2.5:2.9)+(e.lantern>0?1.5:0),d=yc.set(s.x-F.camDir.x*u,Math.max(s.y,i.y)+f,s.z-F.camDir.z*u),m=t?1:1-Math.exp(-n*9);F.camPos.lerp(d,m),F.camPos.y=Math.max(F.camPos.y,i.y+1.2);let x=Cp.set(s.x+F.camDir.x*7,s.y+1.4,s.z+F.camDir.z*7);F.camLook.lerp(x,t?1:1-Math.exp(-n*12)),ht.position.copy(F.camPos),F.shake>0&&(ht.position.x+=(Math.random()-.5)*F.shake,ht.position.y+=(Math.random()-.5)*F.shake,F.shake=Math.max(0,F.shake-n*1.6)),ht.up.set(0,1,0),ht.lookAt(F.camLook),ht.rotateZ(-(e.drift||0)*.04-ci(e.vLat-e.push,-12,12)*.003);let g=66+ci(e.v-40,0,40)*.25+(e.boost>0||e.lantern>0?9:0);F.fov+=(g-F.fov)*Math.min(1,n*4),ht.fov=F.fov,ht.updateProjectionMatrix()}var vt=(n,e,t)=>{let[i,s]=Si(n,e);return new I(i,t,-s)},vc=[{overview:!0,dur:3.4,name:"\u4E0A\u6D77\u6708\u5149\u73AF\u7EBF",sub:"\u6D66\u897F \u21C4 \u6D66\u4E1C \xB7 \u4E00\u5708\u4E03\u666F"},{a:vt(24,-340,64),b:vt(28,-210,80),la:vt(190,50,70),lb:vt(200,60,90),name:"\u5916\u6EE9 \xD7 \u9646\u5BB6\u5634",sub:"\u8D77\u70B9 \xB7 \u4E07\u56FD\u5EFA\u7B51\u4E0E\u9EC4\u6D66\u6C5F"},{a:vt(-100,124,24),b:vt(-240,121,19),la:vt(-300,116,8),lb:vt(-460,112,6),name:"\u5357\u4EAC\u8DEF\u6B65\u884C\u8857",sub:"\u9713\u8679 \xB7 \u94DB\u94DB\u8F66"},{a:vt(-600,60,40),b:vt(-600,-200,34),la:vt(-540,0,5),lb:vt(-520,-250,10),name:"\u9759\u5B89\u5BFA \xB7 \u6B66\u5EB7\u8DEF",sub:"\u68A7\u6850\u5927\u9053 \xB7 \u6B66\u5EB7\u5927\u697C"},{a:vt(-340,-220,32),b:vt(-220,-226,28),la:vt(-280,-296,2),lb:vt(-250,-300,2),name:"\u8C6B\u56ED \xB7 \u4E5D\u66F2\u6865",sub:"\u522B\u6389\u8FDB\u8377\u82B1\u6C60"},{a:vt(-250,-500,44),b:vt(-60,-520,70),la:vt(-150,-410,18),lb:vt(40,-444,40),name:"\u5357\u6D66\u5927\u6865",sub:"\u87BA\u65CB\u5F15\u6865 \xB7 \u5B54\u660E\u706F\u6ED1\u7FD4"},{a:vt(110,-80,18),b:vt(210,-70,55),la:vt(200,40,40),lb:vt(250,50,110),name:"\u9646\u5BB6\u5634",sub:"\u73AF\u5F62\u5929\u6865 \xB7 \u4E09\u4EF6\u5957"},{a:vt(84,-46,-6),b:vt(46,-98,-10.5),la:vt(42,-104,-12),lb:vt(6,-170,-12),name:"\u5916\u6EE9\u89C2\u5149\u96A7\u9053",sub:"\u7A7F\u8D8A\u6C5F\u5E95\u56DE\u5230\u5916\u6EE9"},{a:vt(-20,-300,46),b:vt(-66,-238,7),la:vt(-66,-150,10),lb:vt(-66,-200,2),name:"\u4E0A\u6D77\u6708\u5149\u676F",sub:"\u4E09\u5708\u5B9A\u80DC\u8D1F \xB7 \u51C6\u5907\u8D77\u8DD1"}],Ip=2.15,Vo=[];{let n=0;for(let e of vc)Vo.push(n),n+=e.dur||Ip;Vo.push(n)}function L_(n){F.introT+=n;let e=Vo[vc.length],t=0;for(;t<vc.length-1&&F.introT>=Vo[t+1];)t++;let i=vc[t],s=ci((F.introT-Vo[t])/(i.dur||Ip),0,1),r=s*s*(3-2*s);ht.up.set(0,1,0);let o=!!i.overview;if(ct.courseGlow.visible=o,i.overview){let c=ct.courseCenter,l=F.introT*.12;ht.position.set(c.x+Math.sin(l)*(420-r*90),620-r*170,c.z+Math.cos(l)*(420-r*90)),ht.lookAt(c.x,0,c.z),yt.fog.density=45e-5,ct.courseGlow.material.opacity=.55+.35*Math.sin(F.introT*5)}else yt.fog.density=.0017,ht.position.lerpVectors(i.a,i.b,r),yc.lerpVectors(i.la,i.lb,r),ht.lookAt(yc);ht.fov=58,ht.updateProjectionMatrix();let a=Tt("introCaption");a.dataset.i!==String(t)&&(a.dataset.i=String(t),a.innerHTML=`${i.name}<small>${i.sub}</small>`,a.classList.remove("pop"),a.offsetWidth),F.introT>=e&&Ts()}function D_(){let n=[],e=[],t={},i=Math.ceil(Mt.length/3);for(let h=0;h<=i;h++){rt(Mt,h/i*Mt.length,t);let u=t.hw+3;if(n.push(t.x-t.rx*u,Math.max(t.y,0)+2,t.z-t.rz*u,t.x+t.rx*u,Math.max(t.y,0)+2,t.z+t.rz*u),h<i){let f=h*2;e.push(f,f+1,f+2,f+1,f+3,f+2)}}let s=new ut;s.setAttribute("position",new Ye(n,3)),s.setIndex(e);let r=new W(s,new xt({color:new Ee(2.4,1.7,.6),transparent:!0,opacity:.8,blending:Zn,depthWrite:!1,depthTest:!1,side:St,fog:!1}));r.renderOrder=5,r.visible=!1,r.frustumCulled=!1,yt.add(r);let o=1/0,a=-1/0,c=1/0,l=-1/0;for(let h=0;h<Mt.n;h++)o=Math.min(o,Mt.px[h]),a=Math.max(a,Mt.px[h]),c=Math.min(c,Mt.pz[h]),l=Math.max(l,Mt.pz[h]);return ct.courseCenter=new I((o+a)/2,0,(c+l)/2),r}function U_(n){let e=F.t*.07,t=vt(22,-90,0);ht.position.set(t.x+Math.cos(e)*26,26+Math.sin(F.t*.2)*4,t.z+Math.sin(e)*26),ht.up.set(0,1,0),ht.lookAt(vt(190,60,62)),ht.fov=58,ht.updateProjectionMatrix()}function N_(n){let e=F.player,t=e.model.root.position,i=rt(Mt,e.s,hu),s=ci(F.countdown/1.6,0,1),r=s*s*(3-2*s),o=.9*(1-r),a=Math.atan2(i.fx,i.fz)+o,c=7+(1-r)*5;ht.position.set(t.x-Math.sin(a)*c,t.y+3.1+(1-r)*3,t.z-Math.cos(a)*c),ht.up.set(0,1,0),ht.lookAt(t.x+i.fx*7*r,t.y+1.4,t.z+i.fz*7*r),ht.fov=66,ht.updateProjectionMatrix(),F.camPos.copy(ht.position),F.camLook.set(t.x+i.fx*7,t.y+1.4,t.z+i.fz*7),F.camDir.set(i.fx,0,i.fz);let l=ct.signal.group;l.position.set(t.x+i.fx*9+i.rx*2.6,t.y+4.2,t.z+i.fz*9+i.rz*2.6),l.rotation.y=Math.atan2(i.fx,i.fz)+Math.PI,ct.signal.rab.update({v:0,vLat:0,push:0,grounded:!0},n,F.t)}function Mp(n){let e=F.player.model.root.position;F.finishT+=n;let t=F.finishT*.6+Math.atan2(F.camDir.x,F.camDir.z)+Math.PI;ht.position.set(e.x+Math.sin(t)*8,e.y+3+F.finishT*.4,e.z+Math.cos(t)*8),ht.lookAt(e.x,e.y+1.2,e.z)}var Ep=performance.now();function Pp(n){bp(Pp);let e=Math.min(.05,(n-Ep)/1e3);if(Ep=n,F.mode==="loading")return;F.frameMs=F.frameMs*.95+e*1e3*.05;let t=Wo.read();if(t.pause&&["race","countdown"].includes(F.mode)&&Lr(!F.paused),F.paused){Cr.render(0);return}if(F.mode==="finish"&&(e*=F.finishT<1.2?.4:1),F.t+=e,un.time.value=F.t,F.mode==="title")U_(e);else if(F.mode==="intro")L_(e),t.any&&F.introT>.4&&Ts();else if(F.mode==="countdown"){F.countdown+=e,t.driftEdge&&F.startPress===null&&(F.startPress=F.countdown);let l=Math.floor(F.countdown);l!==F.lastCount&&(F.lastCount=l,l>=0&&l<3&&(Ut.center(String(3-l),"",900),He.sfx.beep(),ct.signal.set(l+1)),l===3&&(Ut.center("GO!","",900),He.sfx.go(),ct.signal.set(4),b_())),N_(e),uu(e)}(F.mode==="race"||F.mode==="finish"||F.mode==="results")&&F_(e,t),F.mode==="race"?P_(e,F.player):F.mode==="finish"?(Mp(e),F.finishT>4&&T_()):F.mode==="results"&&Mp(e*.3),F.mode!=="countdown"&&ct.signal.group.visible&&F.mode==="race"&&F.raceTime>1.5&&F.player.rescue<=0&&(ct.signal.group.visible=!1),ct.sky.update(ht);let i=F.player?F.player.totalCakes:0;ct.sky.setPhase(F.mode==="title"||F.mode==="intro"?1:.22+.78*Math.min(1,i/100)),ct.roads.update(e),Sp.update(e,F.t),Tp.update(e,F.t),Pr.update(e,ht,!0,F.finalLap||F.mode==="finish"?2.2:F.mode==="title"?1.4:1),Xi.update(e),ct.landmarks.stand.update(F.t,F.mode==="countdown"||F.mode==="finish"?1:.3),ct.landmarks.rabbit.rotation.y+=e*.2;let s=ct.water.mat;s.uniforms.fogColor.value.copy(yt.fog.color),s.uniforms.fogDensity.value=yt.fog.density;for(let l of ct.pondMats||[])l.uniforms.fogColor.value.copy(yt.fog.color),l.uniforms.fogDensity.value=yt.fog.density;let r=F.player,o=r&&(r.boost>0||r.lantern>0)&&F.mode==="race",a=r&&F.mode==="race"?ci((r.v-45)/40,0,.15):0,c=Cr.speed.uniforms;c.strength.value+=((o?1:a)-c.strength.value)*Math.min(1,e*6),r&&F.mode==="race"?He.wind(ci(r.v/60,0,1),o):He.wind(0,!1),Vt.info.reset(),Ir&&(Ir.render(yt,ht),s.uniforms.reflectMatrix.value.copy(Ir.matrix)),Cr.render(e),B_()}function F_(n,e){let t=Hi[F.cup],i=F.mode==="race";i&&(F.raceTime+=n),i&&!F.startDone&&(e.driftEdge&&F.raceTime<=dt.startWindow?Rp():F.raceTime>dt.startWindow&&(F.startDone=!0));let s={vmax:t.vmax,ramps:Go.ramps,locked:!1,rubber:E_,itemRate:t.itemRate},r=n>.034?2:1,o=n/r;for(let c=0;c<r;c++)for(let l of F.racers){let h;l.isPlayer&&i&&!l.finished&&!wi.has("autopilot")?h=c===0?e:{...e,driftEdge:!1,trickEdge:!1,item:!1}:h=Kd(l,Mt,Hn,F.racers,t,o,F.t);let u=c>0?[...l.events]:null;Rd(l,h,Mt,o,s),u&&l.events.unshift(...u)}Cd(F.racers,n),F.ranks=$h(F.racers),Hn.update(n,F.t,F.racers,F.ranks,s),i&&e.item&&!F.player.finished&&Hn.useItem(F.player,F.racers,F.ranks);for(let c of F.racers)(!c.isPlayer||c.finished||wi.has("autopilot"))&&jd(c,F.racers,F.ranks,Hn,Mt,t,n),I_(c),C_(c),R_(c,n);if(F.player.finished&&F.player.grounded&&F.mode!=="race"&&(F.player.vh=7,F.player.grounded=!1,F.player.h=.05),ct.playerLight.position.set(F.player.model.root.position.x,F.player.model.root.position.y+4,F.player.model.root.position.z),F.player.rescue>0){let c=ct.signal.group;c.visible=!0,ct.signal.set(0);let l=F.player.model.root.position;c.position.set(l.x,l.y+3.2,l.z)}uu(n);let a=F.ranks.indexOf(F.player)+1;Ut.update(F.player,a,F.racers.length,oc(F.player.s,Mt.length),vs,F.player.finished?F.player.finishTime:F.raceTime,F.racers,n)}var xc=0,au=0;function B_(){if(F.mode!=="race"||wi.get("q")||(xc++,au+=F.frameMs,xc<120))return;let n=au/xc;xc=0,au=0,n>26&&Qn.level!=="low"&&(Qn.level=Qn.level==="high"?"medium":"low",Vt.setPixelRatio(Qn.pixelRatio),Cr.bloom.enabled=Qn.bloom,fu(),console.info("\u753B\u8D28\u81EA\u52A8\u8C03\u6574\u4E3A",Qn.level))}function fu(){let n=innerWidth,e=innerHeight;Vt.setSize(n,e),ht.aspect=n/e,ht.updateProjectionMatrix(),Cr?.setSize(n,e,Vt.getPixelRatio()),Ir?.resize(n*Vt.getPixelRatio(),e*Vt.getPixelRatio()),Xi?.setPixelScale(e*Vt.getPixelRatio()),Pr?.p.setPixelScale(e*Vt.getPixelRatio())}addEventListener("resize",fu);document.addEventListener("visibilitychange",()=>{document.hidden&&!wi.has("autotick")&&["race","countdown"].includes(F.mode)&&Lr(!0)});Tt("startBtn").onclick=()=>{He.unlock(),He.sfx.click(),_c()};Tt("intro").addEventListener("pointerdown",()=>{F.mode==="intro"&&F.introT>.4&&Ts()});Tt("intro").style.pointerEvents="auto";Tt("pauseBtn").onclick=()=>Lr(!0);Tt("resumeBtn").onclick=()=>Lr(!1);Tt("restartBtn").onclick=()=>{Lr(!1),Hn.reset(),Xo(),Ts()};Tt("quitBtn").onclick=()=>{Lr(!1),cu()};Tt("againBtn").onclick=()=>{Hn.reset(),Xo(),Ts()};Tt("titleBtn").onclick=()=>cu();Tt("muteBtn").onclick=()=>{He.unlock(),He.setMuted(!He.muted),Tt("muteBtn").textContent=He.muted?"\u2715":"\u266A"};document.addEventListener("pointerdown",()=>{F.mode==="title"&&!He.ready&&(He.unlock(),He.play("title"))},{once:!0});addEventListener("keydown",n=>{F.mode==="title"&&(n.code==="Enter"||n.code==="Space")?(He.unlock(),_c()):F.mode==="results"&&n.code==="Enter"&&(Hn.reset(),Xo(),Ts())});window.__mooncat={getState:()=>({mode:F.mode,cup:F.cup,raceTime:F.raceTime,quality:Qn.level,frameMs:F.frameMs,player:F.player&&{s:F.player.s,d:F.player.d,v:F.player.v,lap:oc(F.player.s,Mt.length),cakes:F.player.cakes,total:F.player.totalCakes,item:F.player.item,place:F.ranks.indexOf(F.player)+1,finished:F.player.finished,zone:Wt[rt(Mt,F.player.s,{}).zone].id},trackLength:Mt?.length,drawCalls:Vt.info.render.calls,triangles:Vt.info.render.triangles}),skipIntro:()=>{F.mode==="intro"&&Ts()},start:n=>{n&&(F.cup=n),_c()},debugTeleport:wi.has("debug")?n=>{F.player.s=n}:void 0,debugFinish:wi.has("debug")?()=>{F.player.s=vs*Mt.length-30,F.player.lastLap=vs}:void 0,debugStats:wi.has("debug")?()=>{let n={};for(let e of yt.children){let t=0;e.traverseVisible(s=>{(s.isMesh||s.isPoints||s.isSprite||s.isLine)&&(t+=Array.isArray(s.material)?s.material.length:1)});let i=e.name||e.type;n[i]=(n[i]||0)+t}return n}:void 0};__().then(()=>{qo(["title"]),cu(),bp(Pp)}).catch(n=>{console.error(n);let e=document.createElement("div");e.className="error",e.textContent="\u753B\u9762\u52A0\u8F7D\u5931\u8D25\uFF1A"+(n?.message||n),document.body.append(e)});})();
