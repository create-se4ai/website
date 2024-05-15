import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";

//import  icons
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

// import pictures
import AfiyaFahmidaSarahImage from "../component/team/photos/Afiya-Fahmida-Sarah.jpg";
import AkalankaGalappaththiImage from "../component/team/photos/Akalanka-Galappaththi.jpg";
import AlorEbubeImage from "../component/team/photos/Alor-Ebube.jpg";
import AltafAllahAbbassiImage from "../component/team/photos/Altaf-Allah-Abbassi.jpg";
import AmandaKolopanisImage from "../component/team/photos/Amanda-Kolopanis.jpg";
import AntonioCollanteImage from "../component/team/photos/Antonio-Collante.jpg";
import AurelLucrichIkamaHoneyImage from "../component/team/photos/Aurel-Lucrich-Ikama-Honey.jpg";
import ChunliYuImage from "../component/team/photos/Chunli-Yu.jpg";
import DavidabImage from "../component/team/photos/David- ab.jpg";
import defaultImage from "../component/team/photos/default.png";

import DrGillesSavardImage from "../component/team/photos/Dr-Gilles-Savard.jpg";
import DrJeanSamuelChenardImage from "../component/team/photos/Dr-Jean-Samuel-Chenard.jpg";
// import DrJinqiuYangImage from "../component/team/photos/Dr-Jinqiu-Yang.jpg";
import DrJulienCroweImage from "../component/team/photos/Dr-Julien-Crowe.jpg";
import DrLataNarayananImage from "../component/team/photos/Dr-Lata-Narayanan.jpg";
import DrLimingZhuImage from "../component/team/photos/Dr-Liming-Zhu.jpg";
import DrLyseLangloisImage from "../component/team/photos/Dr-Lyse-Langlois.jpg";
import DrMariePierreHabasGerardImage from "../component/team/photos/Dr-Marie-Pierre-Habas-Gerard.jpg";
import DrRenjiButalidImage from "../component/team/photos/Dr-Renji-Butalid.jpg";
// import DrSarahNadiImage from "../component/team/photos/Dr-Sarah-Nadi.jpg";
import DrStefanWagnerImage from "../component/team/photos/Dr-Stefan-Wagner.jpg";
// import DrTanjaTajmelImage from "../component/team/photos/Dr-Tanja-Tajmel.jpg";
// import DrYingJennyZouImage from "../component/team/photos/Dr-Ying-Jenny-Zou.jpg";
import FangjianLeiImage from "../component/team/photos/Fangjian-Lei.jpg";
import FazleRabbiImage from "../component/team/photos/Fazle-Rabbi.jpg";
import ForoughMajidiImage from "../component/team/photos/Forough-Majidi.jpg";
import HayaSamaanaImage from "../component/team/photos/Haya-Samaana.jpg";
import JaskiratSinghImage from "../component/team/photos/Jaskirat-Singh.jpg";
import JasmineLatendresseImage from "../component/team/photos/Jasmine-Latendresse.jpg";
import JiawenLiuImage from "../component/team/photos/Jiawen-Liu.jpg";
import JunjieLiImage from "../component/team/photos/Junjie-Li.jpg";
import KatherineHeighingtonImage from "../component/team/photos/Katherine-Heighington.jpg";
import KhouloudOueslatiImage from "../component/team/photos/Khouloud-Oueslati.jpg";
import LailaMahmoudDawAbodinarImage from "../component/team/photos/Laila-Mahmoud Daw-Abodinar.jpg";
import LorenaPachecoImage from "../component/team/photos/Lorena-Pacheco.jpg";
import MayraRuizImage from "../component/team/photos/Mayra-Ruiz.jpg";
import MohamedElGeishImage from "../component/team/photos/Mohamed-El-Geish.jpg";
import mohayeminulislamImage from "../component/team/photos/mohayeminul-islam.jpg";
import MrDerekTruongImage from "../component/team/photos/Mr-Derek-Truong.jpg";
import MrJesseVincentHerscoviciImage from "../component/team/photos/Mr-Jesse-Vincent-Herscovici.jpg";
import MrPierreDumouchelImage from "../component/team/photos/Mr-Pierre-Dumouchel.jpg";
import MrSergeOlignyImage from "../component/team/photos/Mr-Serge-Oligny.jpg";
import MusfiqurRahmanImage from "../component/team/photos/Musfiqur-Rahman.jpg";
import PapeWadeImage from "../component/team/photos/Pape-Wade.jpg";
import PatrickLoicFoalemImage from "../component/team/photos/Patrick-Loic-Foalem.jpg";
import PouyaFathollahzadehImage from "../component/team/photos/Pouya-Fathollahzadeh.jpg";
import PrasadGarigipatiImage from "../component/team/photos/Prasad-Garigipati.jpg";
import SamuelAbeduImage from "../component/team/photos/Samuel-Abedu.jpg";
import SaurabhKumarImage from "../component/team/photos/Saurabh-Kumar.jpg";
import ShenyuZhengImage from "../component/team/photos/Shenyu-Zheng.jpg";
import StephaneCaronImage from "../component/team/photos/Stephane-Caron.jpg";
import VahidMajdinasabImage from "../component/team/photos/Vahid-Majdinasab.jpg";
import YangLiuImage from "../component/team/photos/Yang-Liu.jpg";
import YipingJiaImage from "../component/team/photos/Yiping-Jia.jpg";
import ZhiminZhaoImage from "../component/team/photos/Zhimin-Zhao.jpg";
import SharonHoImage from "../component/team/photos/Sharon-Ho.jpg";
import LinLingImage from "../component/team/photos/Lin-Ling.jpg";
import Mohammadhossein_MalekpourImage from "../component/team/photos/Mohammadhossein_Malekpour.jpg";
import Anirban_DeyImage from "../component/team/photos/Anirban_Dey.jpg";
import Rachna_RajImage from "../component/team/photos/Rachna_Raj.jpg";
import Iren_MazloomzadehImage from "../component/team/photos/Iren_Mazloomzadeh.jpg";
import Gideon_PetersImage from "../component/team/photos/Gideon_Peters.jpg";
import Muhammed_Yusuf_DadaImage from "../component/team/photos/Muhammed_Yusuf_Dada.jpg";
import Mohamed_RiahiImage from "../component/team/photos/Mohamed_Riahi.jpg";
import Adekunle_AjibodeImage from "../component/team/photos/Adekunle_Ajibode.jpg";
import Hicham_MasriImage from "../component/team/photos/Hicham_Masri.jpg";
import Genevieve_CaumartinImage from "../component/team/photos/Genevieve_Caumartin.jpg";
import Jean_Carlors_PaulImage from "../component/team/photos/Jean_Carlors_Paul.jpg";


////import Students data
import { Grid } from "@mui/material";

// const students = [
//   {
//     name: "Yiping Jia",
//     University: "Queen's University",
//     img: YipingJiaImage,
//     website: "",
//     linkedin: "",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Fangjian Lei",
//     University: "Queen's University",
//     img: FangjianLeiImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/fangjian-lei-5b110b204/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Junjie Li",
//     University: "Concordia University",
//     img: JunjieLiImage,
//     website: "",
//     linkedin: "",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Sharon Ho",
//     University: "Concordia University",
//     img: SharonHoImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/sharon-ho/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Amanda Kolopanis",
//     University: "Concordia University",
//     img: AmandaKolopanisImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/amanda-kolopanis/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Mohayeminul Islam",
//     University: "University of Alberta",
//     img: mohayeminulislamImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/mohayemin/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Akalanka Galappaththi",
//     University: "University of Alberta",
//     img: AkalankaGalappaththiImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/akalanka-galappaththi-67580719/",
//     twitter: "https://twitter.com/boney_ag",
//     email: "akalanka@ualberta.ca",
//   },
//   {
//     name: "Aurel Lucrich Ikama Honey",
//     University: "Ecole Polytechnique",
//     img: AurelLucrichIkamaHoneyImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/aurel-i-345a91ba/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Pierre-Olivier Cote",
//     University: "Ecole Polytechnique",
//     img: PierreOlivierCoteImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/pierre-olivier-c%C3%B4t%C3%A9/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Vahid Majdinasab",
//     University: "Ecole Polytechnique",
//     img: VahidMajdinasabImage,
//     website: "",
//     linkedin: "",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Patrick Loic Foalem",
//     University: "Ecole Polytechnique",
//     img: PatrickLoicFoalemImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/patrick-loïc-foalem-37281a100",
//     twitter: "https://twitter.com/Patrick_Loic_F",
//     email: "",
//   },
//   {
//     name: "Forough Majidi",
//     University: "Ecole Polytechnique",
//     img: ForoughMajidiImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/forough-majidi-8a35b8227",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Chunli Yu",
//     University: "Queen's University",
//     img: ChunliYuImage,
//     website: "",
//     linkedin: "",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Divya Kamath",
//     University: "Queen's University",
//     img: DivyaKamathImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/divyamkamath/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Antonio Collante",
//     University: "Concordia University",
//     img: AntonioCollanteImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/antonio-c-737aa566/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Khaled Badran",
//     University: "Concordia University",
//     img: KhaledBadranImage,
//     website: "https://das.encs.concordia.ca/members/khaled-badran",
//     linkedin: "https://www.linkedin.com/in/khaled-badran-6b0908174/",
//     twitter: "https://twitter.com/khaled_badran9",
//     email: "",
//   },
//   {
//     name: "Rached Bouchoucha",
//     University: "Ecole Polytechnique",
//     img: RachedBouchouchaImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/rached-bouchoucha-1061997/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Ahmed Haj Yahmed",
//     University: "Ecole Polytechnique",
//     img: AhmedHajYahmedImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/ahmed-haj-yahmed/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Musfiqur Rahman",
//     University: "Concordia University",
//     img: MusfiqurRahmanImage,
//     website: "https://das.encs.concordia.ca/members/musfiqur-rahman",
//     linkedin: "https://www.linkedin.com/in/musfiqur-rahman-37596444/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Jasmine Latendresse",
//     University: "Concordia University",
//     img: JasmineLatendresseImage,
//     website: "https://jaslatendresse.github.io/",
//     linkedin: "https://www.linkedin.com/in/jasmine-latendresse-2835561a6/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Jiawen Liu",
//     University: "Queen's University",
//     img: JiawenLiuImage,
//     website: "https://seal-queensu.github.io/member-current.html",
//     linkedin: "https://www.linkedin.com/in/jiawen-liu-691906178/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Pouya Fathollahzadeh",
//     University: "Queen's University",
//     img: PouyaFathollahzadehImage,
//     website: "https://seal-queensu.github.io/member-current.html",
//     linkedin: "",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Akshat Malik",
//     University: "Queen's University",
//     img: AkshatMalikImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/akshat-malik/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Harsh Patel",
//     University: "Queen's University",
//     img: HarshPatelImage,
//     website: "https://alacrity.dev/",
//     linkedin: "https://www.linkedin.com/in/harsh8398/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Jaskirat Singh",
//     University: "Queen's University",
//     img: JaskiratSinghImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/jaskirat409/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Shenyu Zheng",
//     University: "Queen's University",
//     img: ShenyuZhengImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/shenyu-zheng-31146524b/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Afiya Fahmida Sarah",
//     University: "University of Alberta",
//     img: AfiyaFahmidaSarahImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/afiya-sarah-039007179",
//     twitter: "",
//     email: "afiya-sarah-039007179",
//   },
//   {
//     name: "Fazle Rabbi",
//     University: "Concordia University",
//     img: FazleRabbiImage,
//     website: "https://frabbisw.github.io/",
//     linkedin: "https://www.linkedin.com/in/fazle-rabbi-720139207/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Lorena Pacheco",
//     University: "Concordia University",
//     img: LorenaPachecoImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/lorenasimedo/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Samuel Abedu",
//     University: "Concordia University",
//     img: SamuelAbeduImage,
//     website: "",
//     linkedin: "https://linkedin.com/in/samuel-abedu-42b755103/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Khouloud Oueslati",
//     University: "Ecole Polytechnique",
//     img: KhouloudOueslatiImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/khouloud-ouesleti/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Yang Liu",
//     University: "Ecole Polytechnique",
//     img: YangLiuImage,
//     website: "",
//     linkedin: "",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Laila Mahmoud Daw Abodinar",
//     University: "Ecole Polytechnique",
//     img: LailaMahmoudDawAbodinarImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/laila-abodinar-2541491ba/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Altaf Allah Abbassi",
//     University: "Ecole Polytechnique",
//     img: AltafAllahAbbassiImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/altafallahabbassi/",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Alor Ebube",
//     University: "Concordia University",
//     img: AlorEbubeImage,
//     website: "https://das.encs.concordia.ca/members/alor-ebube",
//     linkedin: "https://www.linkedin.com/in/alor-ebubechukwu//",
//     twitter: "",
//     email: "",
//   },
//   {
//     name: "Mayra Ruiz",
//     University: "Concordia University",
//     img: MayraRuizImage,
//     website: "",
//     linkedin: "https://www.linkedin.com/in/mruiz27/",
//     twitter: "",
//     email: "",
//   },
//    {  name: "Lin Ling ",
//   University: "Concordia University",
//   img: LinLingImage,
//   website: "",
//   linkedin: "https://www.linkedin.com/in/lin-ling-4705b0260/",
//   twitter: "",
//   email: "",}
// ];
// const Students = () => {
//   const { isDarkMode } = useContext(DarkModeContext);

//   return (
//     <MiddContainer isDarkMode={isDarkMode}>
//       {students.map((student, index) => (
//         <MiniContainer key={index} isDarkMode={isDarkMode}>
//           <Img src={student.img} alt={student.name} />
//           <Name>{student.name}</Name>
//           <University>{student.University}</University>
//           <Links>
//             <ul>
//               {" "}
//               {student.website && (
//                 <SocialMedia isDarkMode={isDarkMode}>
//                   <li>
//                     <a
//                       href={student.website}
//                       target="_blank"
//                       style={{ textDecoration: "none" }}
//                     >
//                       <FaArrowUpRightFromSquare />
//                       <SmallIcon isDarkMode={isDarkMode}>
//                         <KnowMore isDarkMode={isDarkMode}>Know more</KnowMore>
//                       </SmallIcon>
//                     </a>
//                   </li>
//                 </SocialMedia>
//               )}
//               {student.linkedin && (
//                 <SocialMedia isDarkMode={isDarkMode}>
//                   {" "}
//                   <li>
//                     <a
//                       href={student.linkedin}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <SmallIcon isDarkMode={isDarkMode}>
//                         <AiFillLinkedin />
//                       </SmallIcon>
//                     </a>
//                   </li>
//                 </SocialMedia>
//               )}
//               {student.twitter && (
//                 <SocialMedia isDarkMode={isDarkMode}>
//                   <li>
//                     <a
//                       href={student.twitter}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <SmallIcon isDarkMode={isDarkMode}>
//                         <BsTwitter />
//                       </SmallIcon>
//                     </a>
//                   </li>{" "}
//                 </SocialMedia>
//               )}
//               {student.email && (
//                 <SocialMedia isDarkMode={isDarkMode}>
//                   <li>
//                     <a href={`mailto:${student.email}`}>
//                       <SmallIcon isDarkMode={isDarkMode}>
//                         <MdEmail />
//                       </SmallIcon>
//                     </a>
//                   </li>
//                 </SocialMedia>
//               )}
//             </ul>
//           </Links>
//         </MiniContainer>
//       ))}
//     </MiddContainer>
//   );
// };
// export default Students;
// //css part

// const MiddContainer = styled.div`
//    display: flex;
//    flex-direction:row;
//    flex-wrap:wrap;
// gap:30px;
  
  
//     @media (max-width: 995px) {


//     }
// `;

// const Img = styled.img`
//   width:100%;
//   height: 290px;
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px;
//   @media (max-width: 995px) {
//     height: 350px;
// /* margin-left:-0px;   width: 350px;  height: 320px; */

//  }
// `;

// const MiniContainer = styled.div`
//  margin-top: 20px; /* Change this value to decrease the margin */
//   border-radius: 10px;
//   border: ${(props) =>
//     props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"};
//   background-color: ${(props) => (props.isDarkMode ? "#404040" : "white")};
//   color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
//   /* ... other styles ... */
//   /* margin-left: -5px;  */
// width:310px;  /* width:100vw; */
// /* border:5px solid orange;  */
// @media (max-width: 995px) {
//     flex-direction:column;
// width:90vw;
// margin-left:1px; 
// border-left:none;
//  }
// `;

// const Name = styled.div`
//   font-weight: bold;
//   font-size: 20px;
//   margin-top: 20px;
//   margin-left: 15px;
// `;

// const University = styled.div`
//   margin-left: 15px;
// `;

// const Links = styled.div`
//   color: #404040;
//   font-weight: bold;
//   padding-right: 40px;

//   ul {
//     display: flex;
//     flex-direction: row;
//     width: 190px;
//     list-style: none;
//     margin: 0;
//     padding: 0;
//     color: #404040;
//   }
//   /* li {
//     width: 80px;
//   } */
// `;

// const SocialMedia = styled.div`
//   /* padding-top: 10px; */
//   display: flex;
//   align-items: center;
//   flex-direction: row;
//   list-style: none;
//   height: 50px;
//   color: ${(props) => (props.isDarkMode ? "white" : "#585858")};

//   margin-left: 15px;

//   a {
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     color: #404040;
//     padding: 5px 5px;
//     transition: background-color 0.3s;
//     border-radius: 5px;
//     /* margin-right: 5px; */
//   }

//   a:hover {
//     background-color: #e8e8e8;
//   }
// `;
// const SmallIcon = styled.span`
//   font-size: 20px;
//   color: #585858;
//   font-weight: bold;
//   margin-right: 7px;
//   color: ${(props) => (props.isDarkMode ? "white" : "#585858")};
// `;

// const KnowMore = styled.span`
//   margin-right: 3px;
//   color: #585858;
//   font-size: 15px;
//   align-items: center;
//   align-items: center;
//   color: ${(props) => (props.isDarkMode ? "white" : "#585858")};
// `;

const Students=()=>{
  const { isDarkMode } = useContext(DarkModeContext);
  return(

<Container>
<Grid item lg={12} xl={12}>
  <Main>
<Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={YipingJiaImage} alt= "Yiping Jia Image"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Yiping Jia</h3><Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Queen's University</CardBody>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={FangjianLeiImage} alt= "Fangjian Lei Image"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Fangjian Lei</h3><Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Queen's University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
   
<li >
  <a target="_blank"  href="https://www.linkedin.com/in/fangjian-lei-5b110b204/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={JunjieLiImage} alt= "Junjie LiI mage"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Junjie Li</h3> <Bold>PhD Student at</Bold>Concordia University</CardBody>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={SharonHoImage} alt= "Sharon Ho Image"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Sharon Ho</h3> <Bold isDarkMode={isDarkMode}>Master's Student at</Bold>Concordia University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
   
<li >
  <a target="_blank"  href="https://www.linkedin.com/in/sharon-ho/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>

</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={AmandaKolopanisImage} alt= "Amanda Kolopanis"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Amanda Kolopanis</h3> <Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Concordia University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
   
<li >
  <a target="_blank"  href="https://www.linkedin.com/in/amanda-kolopanis/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={mohayeminulislamImage} alt= "Mohayeminul Islam"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Mohayeminul Islam</h3><Bold isDarkMode={isDarkMode}>PhD Student at</Bold>University of Alberta</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    
<li >
  <a target="_blank"  href="https://www.linkedin.com/in/mohayemin/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
    
    
</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={AkalankaGalappaththiImage} alt= "Akalanka Galappaththi"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Akalanka Galappaththi</h3><Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Concordia University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
   
<li >
  <a target="_blank"  href="https://www.linkedin.com/in/akalanka-galappaththi-67580719/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
    <li>  <a href="https://twitter.com/boney_ag" target="blank">
      <svg aria-hidden="true" 
        width=" 0.875em"
      focusable="false" 
      data-prefix="fab"
       data-icon="twitter"
       class="svg-inline--fa fa-twitter fa-w-16 " 
       role="img" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"><path fill="currentColor"
         d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
      </path></svg>
      </a></li>
    <li>
      <a target="_blank" href="mailto:akalanka@ualberta.ca">
        <svg aria-hidden="true"
        width="1em"
         focusable="false"
          data-prefix="fas"
           data-icon="envelope"
            class="svg-inline--fa fa-envelope fa-w-16 " 
            role="img" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"><path fill="currentColor"
             d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 
             48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg></a></li>
</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={AurelLucrichIkamaHoneyImage} alt= "Aurel Lucrich Ikama Honey Image"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Aurel Lucrich Ikama Honey</h3> <Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Ecole Polytechnique</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
   
<li >
  <a target="_blank"  href="https://www.linkedin.com/in/aurel-i-345a91ba/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>

   
    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={ VahidMajdinasabImage} alt= "Vahid Majdinasab"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Vahid Majdinasab</h3><Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Ecole Polytechnique</CardBody>
    
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={ PatrickLoicFoalemImage} alt= "Patrick Loic Foalem"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Patrick Loic Foalem</h3><Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Ecole Polytechnique</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    
<li >
  <a target="_blank"  href="https://www.linkedin.com/in/patrick-loïc-foalem-37281a100"
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
    <li>  <a href="https://twitter.com/Patrick_Loic_F" target="blank">
      <svg aria-hidden="true" 
        width=" 0.875em"
      focusable="false" 
      data-prefix="fab"
       data-icon="twitter"
       class="svg-inline--fa fa-twitter fa-w-16 " 
       role="img" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"><path fill="currentColor"
         d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
      </path></svg>
      </a></li>
    
</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={ForoughMajidiImage} alt= "Forough Majidi"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Forough Majidi</h3> <Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Ecole Polytechnique</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
  
<li >
  <a target="_blank"  href="https://www.linkedin.com/in/forough-majidi-8a35b8227" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
    
</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={ChunliYuImage} alt= "Chunli Yu Image"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Chunli Yu</h3> <Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Queen's University</CardBody>
    
    </SmallDiv></Div>

   

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={AntonioCollanteImage} alt= "Antonio Collante"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Antonio Collante</h3><Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Concordia University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
   
<li >
  <a target="_blank"  href="https://www.linkedin.com/in/antonio-c-737aa566/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
    
</ul></CardFooter>
    </SmallDiv></Div>

  

   
  

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={MusfiqurRahmanImage} alt= "Musfiqur Rahman"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Musfiqur Rahman</h3><Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Concordia University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    <li >
  <a href="https://das.encs.concordia.ca/members/musfiqur-rahman">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
<li ><a target="_blank"  href="https://www.linkedin.com/in/musfiqur-rahman-37596444/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
    
</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={JasmineLatendresseImage} alt= "Jasmine Latendresse"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Jasmine Latendresse</h3><Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Concordia University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    <li >
  <a href="https://jaslatendresse.github.io/">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
<li ><a target="_blank"  href="https://www.linkedin.com/in/jasmine-latendresse-2835561a6/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
    
</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={JiawenLiuImage} alt= "Jiawen Liu"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Jiawen Liu</h3> <Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Queen's University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    <li >
  <a href="https://seal-queensu.github.io/member-current.html">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
<li ><a target="_blank"  href="https://www.linkedin.com/in/jiawen-liu-691906178/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
    
</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={PouyaFathollahzadehImage} alt= "Pouya Fathollahzadeh"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Pouya Fathollahzadeh</h3> <Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Queen's University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    <li >
  <a href="https://seal-queensu.github.io/member-current.html">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>

</ul></CardFooter>
    </SmallDiv></Div>


    

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={JaskiratSinghImage} alt= "Jaskirat Singh"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Jaskirat Singh</h3><Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Queen's University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    
<li ><a target="_blank"  href="https://www.linkedin.com/in/jaskirat409/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>

</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={ShenyuZhengImage} alt= "Shenyu Zheng"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Shenyu Zheng</h3> <Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Queen's University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
  
<li ><a target="_blank"  href="https://www.linkedin.com/in/shenyu-zheng-31146524b/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
    
</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={AfiyaFahmidaSarahImage} alt= "Afiya Fahmida Sarah"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Afiya Fahmida Sarah</h3> <Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>University of Alberta</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    
<li ><a target="_blank"  href="https://www.linkedin.com/in/afiya-sarah-039007179" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
   
</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={FazleRabbiImage} alt= "Fazle Rabbi"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Fazle Rabbi</h3> <Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Concordia University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    <li >
  <a href="https://frabbisw.github.io/">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
<li ><a target="_blank"  href="https://www.linkedin.com/in/fazle-rabbi-720139207/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
    
</ul></CardFooter>
    </SmallDiv></Div>



    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={LorenaPachecoImage} alt= "Lorena Pacheco"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Lorena Pacheco</h3><Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Concordia University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    
<li ><a target="_blank"  href="https://www.linkedin.com/in/lorenasimedo/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>
    
    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={SamuelAbeduImage} alt= "Samuel Abedu"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Samuel Abedu</h3> <Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Concordia University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    
<li ><a target="_blank"  href="https://linkedin.com/in/samuel-abedu-42b755103/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>
    
    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={KhouloudOueslatiImage} alt= "Khouloud Oueslati"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Khouloud Oueslati</h3><Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Ecole Polytechnique</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    
<li ><a target="_blank"  href="https://www.linkedin.com/in/khouloud-ouesleti/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={YangLiuImage} alt= "Yang Liu"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Yang Liu</h3><Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Ecole Polytechnique</CardBody>
  
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={LailaMahmoudDawAbodinarImage} alt= "Laila Mahmoud Daw Abodinar"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Laila Mahmoud Daw Abodinar</h3><Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Ecole Polytechnique</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    
<li ><a target="_blank"  href="https://www.linkedin.com/in/laila-abodinar-2541491ba/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
    
</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={AltafAllahAbbassiImage} alt= "Altaf Allah Abbassi"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Altaf Allah Abbassi</h3><Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Ecole Polytechnique</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    
<li ><a target="_blank"  href="https://www.linkedin.com/in/altafallahabbassi/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
     
</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={AlorEbubeImage} alt= "Alor Ebube"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Alor Ebube</h3><Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Concordia University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    <li >
  <a href="https://das.encs.concordia.ca/members/alor-ebube">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
<li ><a target="_blank"  href="https://www.linkedin.com/in/alor-ebubechukwu//" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>
    
    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={MayraRuizImage} alt= "Mayra Ruiz"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Mayra Ruiz</h3><Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Concordia University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
    <li >
  <a href="https://das.encs.concordia.ca/members/mayra-ruiz">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
<li ><a target="_blank"  href="https://www.linkedin.com/in/mruiz27/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={LinLingImage} alt= "Lin Ling "/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Lin Ling </h3><Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Concordia University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
   
<li ><a target="_blank"  href="https://www.linkedin.com/in/lin-ling-4705b0260/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>

    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={Mohammadhossein_MalekpourImage} alt= "Mohammadhossein_MalekpourImage"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Mohammadhossein Malekpour</h3> <Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Polytechnique Montréal
</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    ><li >
  <a href="https://github.com/mh-malekpour">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
<li ><a target="_blank"  href="https://www.linkedin.com/in/mh-malekpour/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>
    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={Anirban_DeyImage} alt= "Anirban_DeyImage"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Anirban Dey</h3><Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Queen's University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    ><li >
  <a href="https://github.com/anirbandey303">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
<li ><a target="_blank"  href="https://www.linkedin.com/in/anirbandey303//" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>
    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={Rachna_RajImage} alt= "Rachna_RajImage"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Rachna Raj
</h3><Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Concordia University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    ><li >
  <a href="https://github.com/rachnaraj">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
<li ><a target="_blank"  href="https://www.linkedin.com/in/rachna-raj/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>
    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={Iren_MazloomzadehImage} alt= "Iren_MazloomzadehImage"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Iren Mazloomzadeh
</h3><Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Polytechnique Montréal
</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    ><li >
  <a href="https://swat.polymtl.ca/members.html">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
<li ><a target="_blank"  href="https://www.linkedin.com/in/iren-mazloomzadeh-a6175839/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>
    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={Gideon_PetersImage} alt= "Gideon_PetersImage"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Gideon Peters
</h3><Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Concordia University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    ><li >
  <a href="https://das.encs.concordia.ca/members/gideon-peters">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
<li ><a target="_blank"  href="https://www.linkedin.com/in/gideonpeters/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>
    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={Muhammed_Yusuf_DadaImage} alt= "Muhammed_Yusuf_DadaImage"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Muhammed Yusuf Dada</h3><Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Queen's University
</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    ><li >
  <a href="https://github.com/muhammedyusuf678">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
<li ><a target="_blank"  href="https://www.linkedin.com/in/muhammed-yusuf-dada/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>
    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={ Mohamed_RiahiImage} alt= " Mohamed_RiahiImage"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Mohamed Riahi
</h3><Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Polytechnique Montréal
</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
<li ><a target="_blank"  href="https://www.linkedin.com/in/mohamed-riahi-51a6401b3/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>
    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={Adekunle_AjibodeImage} alt= "Adekunle_AjibodeImage"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Adekunle Ajibode
</h3><Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Queen's University
</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    ><li >
  <a href="https://eyinlojuoluwa.github.io/">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
<li ><a target="_blank"  href="https://www.linkedin.com/in/eyinlojuoluwa/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>
    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={Hicham_MasriImage} alt= "Hicham_MasriImage"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Hicham Masri
</h3><Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Queen's University
</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
<li ><a target="_blank"  href="https://www.linkedin.com/in/hicham-masri/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>
    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={Genevieve_CaumartinImage} alt= "Genevieve_CaumartinImage"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Genevieve Caumartin
</h3><Bold isDarkMode={isDarkMode}>Master's Student at
</Bold>Concordia University</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    ><li >
  <a href="https://github.com/gencau">
    <svg overflow="visible"
    width="1em"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="external-link-alt"
      class="svg-inline--fa fa-external-link-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
      ></path>
    </svg>
    Know more
  </a>
</li>
<li ><a target="_blank"  href="https://www.linkedin.com/in/cbgen/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>
    <Div >
<SmallDiv isDarkMode={isDarkMode}>
    <CardImage><Image src={Jean_Carlors_PaulImage} alt= "Jean_Carlors_PaulImage"/></CardImage>
    <CardBody isDarkMode={isDarkMode}><h3>Jean Carlors Paul

</h3><Bold isDarkMode={isDarkMode}>PhD Student at</Bold>Polytechnique Montréal
</CardBody>
    <CardFooter isDarkMode={isDarkMode}><ul class="pills"    >
<li ><a target="_blank"  href="https://www.linkedin.com/in/jean-carlors-paul-9994b16a/" 
          
>
  <svg aria-hidden="true" 
  width=" 0.875em"
  focusable="false"
   data-prefix="fab" 
  data-icon="linkedin" 
  class="svg-inline--fa fa-linkedin fa-w-14 "
   role="img" 
   xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
  <path fill="currentColor" 
  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
    </path>
    </svg>
    </a>
    </li>
   
</ul></CardFooter>
    </SmallDiv></Div>



    </Main></Grid>
</Container>
    )

}
export default Students;
const Container=styled.div`
margin-left:0px;


`

const Div=styled.div`
max-width: 25%;
text-align: left;
margin-top:15px;
/* margin-left:-165px; */
margin-right:2rem;
/* flex:0 0 100%; */
@media (max-width: 1000px) {

  max-width:358.4px;
}



`
const SmallDiv=styled.div`
border:${(props) => (props.isDarkMode ? "": "2px solid #eef0f2")};

width:298px; 
/* height:438.2px; */
background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")};
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
border-radius:20px;
box-shadow:0 1 2 0 rgb(0 0 0 1);
/* margin-top:20px;
margin-left:100px;  */
display:flex; 
flex-wrap:wrap;
@media (max-width: 1000px) {
    margin-right: 0; /* Remove right margin for mobile screens */
  width:358.4px;
}
`
const CardImage=styled.div`
@media (max-width: 1000px) {
  width:358.4px;
}
  border-radius:calc(0.4rem*2);`
const CardBody=styled.div`
  padding:0.15rem 1rem ;
width:100%;
h3{
  color: ${(props) => (props.isDarkMode ? "white" : "black")};

  display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-bottom: 0;

}  
margin-bottom:0.25rem;
padding-bottom:0.75rem;

`
const CardFooter=styled.div` 
font-weight:700;
  margin-top: auto;
  padding:0.25rem 1rem;
ul{
  /* border:2px solid green; */
  margin-left:-0.75rem;
  padding-left:0.15rem;

}
li{
  border-radius: 0.5rem;
  /* border:2px solid yellow; */

    cursor: pointer;
    display: inline-block;
    margin-left:0rem;
    padding: 0.25rem 1rem;
    :hover {
 
    background-color: ${(props) => (props.isDarkMode ? "#484848" : "#f1f2f5")};

    border-radius: 0.5rem;
  }
}
a {
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
text-decoration:none;
  /* margin-left:-30px; */
 
}`
const Image =styled.img`
width:298px; 
height:298px; 
border-top-right-radius :15px; 
border-top-left-radius:15px;
@media (max-width: 1000px) {
 width:358.4px;
 height:358.4px;
 /* width:100%; */
 }
`


const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  /* width:100%; */
  margin-bottom:80px;

  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;
const Bold=styled.div`
font-weight:700;
color: ${(props) => (props.isDarkMode ? "white" : "black")};
`






