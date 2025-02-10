import React, {useEffect, useRef, useState} from 'react';
import {useAnimations, useFBX, useGLTF, useVideoTexture, useTexture} from '@react-three/drei';
import gsap from "gsap";

const Avatar = ({animationName, ...props}) => {
   const videoRef = useRef();
   const group = useRef();
   const desktop = useRef();
   const phone = useRef();
   const person = useRef();

   const {nodes, materials} = useGLTF('models/last.glb');

   const {animations: wavingAnimation} = useFBX('animations/Waving.fbx');
   const {animations: breathAnimation} = useFBX('animations/Typing.fbx');
   const {animations: fallingAnimation} = useFBX('animations/Gesture.fbx');
   const {animations: textingAnimation} = useFBX('animations/Texting2.fbx');

   wavingAnimation[0].name = 'waving';
   breathAnimation[0].name = 'typing';
   fallingAnimation[0].name = 'falling';
   textingAnimation[0].name = 'texting';

   const {actions} = useAnimations([wavingAnimation[0], breathAnimation[0], fallingAnimation[0], textingAnimation[0]], group);

   const txt = useVideoTexture('/textures/texture.mp4', { autoplay: true, loop: true });


   useEffect(() => {
      // console.log('Current Animation:', animationName);
      if (actions[animationName]) {
         actions[animationName].reset().fadeIn(.5).play();
         return () => actions[animationName].fadeOut(0.9);
      }
   }, [actions[animationName]]);

   useEffect(() => {
      if (desktop.current) {
         desktop.current.visible = animationName === "typing";

      }
      if (phone.current) {
         phone.current.visible = animationName === "texting";
      }
   }, [animationName]);

   useEffect(() => {

      let targetConfig = {
         scale: 2.9,
         position: [0, -3.3, 0],
         rotation: [0, 0, 0],
      };

     if(animationName === "typing"){
        gsap.from(desktop.current.rotation, {
           y: Math.PI / 2,
           duration: 1.51,
           ease: 'power3.out',
        });
     }
      if(animationName === "texting"){
         gsap.from(phone.current.rotation, {
            x: Math.PI / 2,
            duration: 1.51,
            ease: 'power3.out',
         });
      }


      if (animationName === "typing") {
         targetConfig = {
            scale: 3,
            position: [1.8, -2.4, 0.5],
            rotation: [0, -2.5, 0],
         };
      } else if (animationName === "texting") {
         targetConfig = {
            scale: 2.8,
            position: [0, -3.3, 0],
            rotation: [0, 0.5, 0],
         };
      }

      gsap.to(person.current.scale, {
         x: targetConfig.scale,
         y: targetConfig.scale,
         z: targetConfig.scale,
         duration: 1.1,
         ease: "power3.out",
      });

      gsap.to(person.current.position, {
         x: targetConfig.position[0],
         y: targetConfig.position[1],
         z: targetConfig.position[2],
         duration: 1.41,
         ease: "power3.out",
      });

      gsap.to(person.current.rotation, {
         x: targetConfig.rotation[0],
         y: targetConfig.rotation[1],
         z: targetConfig.rotation[2],
         duration: 1.41,
         ease: "power3.out",
      });
   },[animationName]);

   return (<group ref={group} {...props} dispose={null}>
         {/*---person---*/}

            <group
               ref={person}
               scale={2.9}
               position={[0, -3.3, 0]}
               rotation={[0, 0, 0]}>
               <group name="Armature">
                  <skinnedMesh
                     frustumCulled={false}
                     name="EyeLeft"
                     geometry={nodes.EyeLeft.geometry}
                     material={materials['Wolf3D_Eye.001']}
                     skeleton={nodes.EyeLeft.skeleton}
                     morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                     morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
                  />
                  <skinnedMesh
                     frustumCulled={false}
                     name="EyeRight"
                     geometry={nodes.EyeRight.geometry}
                     material={materials['Wolf3D_Eye.001']}
                     skeleton={nodes.EyeRight.skeleton}
                     morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                     morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
                  />
                  <skinnedMesh
                     frustumCulled={false}
                     name="Wolf3D_Body"
                     geometry={nodes.Wolf3D_Body.geometry}
                     material={materials['Wolf3D_Body.001']}
                     skeleton={nodes.Wolf3D_Body.skeleton}
                  />
                  <skinnedMesh
                     frustumCulled={false}
                     name="Wolf3D_Hair"
                     geometry={nodes.Wolf3D_Hair.geometry}
                     material={materials['Wolf3D_Hair.001']}
                     skeleton={nodes.Wolf3D_Hair.skeleton}
                  />
                  <skinnedMesh
                     frustumCulled={false}
                     name="Wolf3D_Head"
                     geometry={nodes.Wolf3D_Head.geometry}
                     material={materials['Wolf3D_Skin.001']}
                     skeleton={nodes.Wolf3D_Head.skeleton}
                     morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                     morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
                  />
                  <skinnedMesh
                     frustumCulled={false}
                     name="Wolf3D_Outfit_Bottom"
                     geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                     material={materials['Wolf3D_Outfit_Bottom.001']}
                     skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
                  />
                  <skinnedMesh
                     frustumCulled={false}
                     name="Wolf3D_Outfit_Footwear"
                     geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                     material={materials['Wolf3D_Outfit_Footwear.001']}
                     skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
                  />
                  <skinnedMesh
                     frustumCulled={false}
                     name="Wolf3D_Outfit_Top"
                     geometry={nodes.Wolf3D_Outfit_Top.geometry}
                     material={materials['Wolf3D_Outfit_Top.001']}
                     skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
                  />
                  <skinnedMesh
                     frustumCulled={false}
                     name="Wolf3D_Teeth"
                     geometry={nodes.Wolf3D_Teeth.geometry}
                     material={materials['Wolf3D_Teeth.001']}
                     skeleton={nodes.Wolf3D_Teeth.skeleton}
                     morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                     morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
                  />
                  <primitive object={nodes.Hips}/>
               </group>
            </group>



         {/*----cellphone----*/}
         <group ref={phone}>
            <group
               name="Sketchfab_model001"
               rotation={[-0.69, 0.3, 0.29]}
               position={[0.365, 0.27, 0.79]}
               scale={3.59}>
               <group>
                  <group name="USDRoot" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                     <mesh
                        name="ttmRoLdJipiIOmf"
                        castShadow
                        receiveShadow
                        geometry={nodes.ttmRoLdJipiIOmf.geometry}
                        material={materials['hUlRcbieVuIiOXG.001']}
                     />
                     <mesh
                        name="AdjkxvMXIDEHBMM"
                        castShadow
                        receiveShadow
                        geometry={nodes.AdjkxvMXIDEHBMM.geometry}
                        material={materials['eShKpuMNVJTRrgg.001']}
                     />
                     <mesh
                        name="AwsQCWysocWlYzN"
                        castShadow
                        receiveShadow
                        geometry={nodes.AwsQCWysocWlYzN.geometry}
                        material={materials['xNrofRCqOXXHVZt.001']}
                     />
                     <mesh
                        name="drpRvcOgsocXGbn"
                        castShadow
                        receiveShadow
                        geometry={nodes.drpRvcOgsocXGbn.geometry}
                        material={materials['PpwUTnTFZJXxCoE.001']}
                     />
                     <mesh
                        name="FFAjDZTPwYrUKAV"
                        castShadow
                        receiveShadow
                        geometry={nodes.FFAjDZTPwYrUKAV.geometry}
                        material={materials['xNrofRCqOXXHVZt.001']}
                     />
                     <mesh
                        name="KXVnYLSfTdVnSOf"
                        castShadow
                        receiveShadow
                        geometry={nodes.KXVnYLSfTdVnSOf.geometry}
                        material={materials['jlzuBkUzuJqgiAK.001']}
                     />
                     <mesh
                        name="nnqwwoLVdMJlHIF"
                        castShadow
                        receiveShadow
                        geometry={nodes.nnqwwoLVdMJlHIF.geometry}
                        material={materials['fkUApOHLQsMUdfd.001']}
                     />
                     <mesh
                        name="SRYqzKwamLGuEGm"
                        castShadow
                        receiveShadow
                        geometry={nodes.SRYqzKwamLGuEGm.geometry}
                        material={materials['EszxgwYUTxbhBrC.001']}
                     />
                     <mesh
                        name="wJqHahKxdxecSAC"
                        castShadow
                        receiveShadow
                        geometry={nodes.wJqHahKxdxecSAC.geometry}
                        material={materials['EuTsEfyoAnyJIih.001']}
                     />
                     <mesh
                        name="xtMgDHhPqFLAHyB"
                        castShadow
                        receiveShadow
                        geometry={nodes.xtMgDHhPqFLAHyB.geometry}
                        material={materials['hUlRcbieVuIiOXG.001']}
                     />
                     <mesh
                        name="yxqQUnbopbiRvZr"
                        castShadow
                        receiveShadow
                        geometry={nodes.yxqQUnbopbiRvZr.geometry}
                        material={materials['yQQySPTfbEJufve.001']}
                     />
                     <mesh
                        name="IkoiNqATMVoZFKD"
                        castShadow
                        receiveShadow
                        geometry={nodes.IkoiNqATMVoZFKD.geometry}
                        material={materials['hiVunnLeAHkwGEo.001']}
                     />
                     <mesh
                        name="npMJxzurVJQlumk"
                        castShadow
                        receiveShadow
                        geometry={nodes.npMJxzurVJQlumk.geometry}
                        material={materials['JJvGZqtXqnnFakR.001']}
                     />
                     <mesh
                        name="rqgRAGHOwnuBypi"
                        castShadow
                        receiveShadow
                        geometry={nodes.rqgRAGHOwnuBypi.geometry}
                        material={materials['HGhEhpqSBZRnjHC.001']}
                     />
                     <mesh
                        name="eWbcqPskBBXuZDe"
                        castShadow
                        receiveShadow
                        geometry={nodes.eWbcqPskBBXuZDe.geometry}
                        material={materials['fkUApOHLQsMUdfd.001']}
                     />
                     <mesh
                        name="FjtgRCsnzEoHpCy"
                        castShadow
                        receiveShadow
                        geometry={nodes.FjtgRCsnzEoHpCy.geometry}
                        material={materials['xNrofRCqOXXHVZt.001']}
                     />
                     <mesh
                        name="gJeeYWdxrKsnsVD"
                        castShadow
                        receiveShadow
                        geometry={nodes.gJeeYWdxrKsnsVD.geometry}
                        material={materials['xNrofRCqOXXHVZt.001']}
                     />
                     <mesh
                        name="gTmqYtKthFeRVJL"
                        castShadow
                        receiveShadow
                        geometry={nodes.gTmqYtKthFeRVJL.geometry}
                        material={materials['xNrofRCqOXXHVZt.001']}
                     />
                     <mesh
                        name="hGKQDeRmDnGNdjb"
                        castShadow
                        receiveShadow
                        geometry={nodes.hGKQDeRmDnGNdjb.geometry}
                        material={materials['eShKpuMNVJTRrgg.001']}
                     />
                     <mesh
                        name="KOgQmlOdVEyKocf"
                        castShadow
                        receiveShadow
                        geometry={nodes.KOgQmlOdVEyKocf.geometry}
                        material={materials['jlzuBkUzuJqgiAK.001']}
                     />
                     <mesh
                        name="lfXEACUihtLFGfq"
                        castShadow
                        receiveShadow
                        geometry={nodes.lfXEACUihtLFGfq.geometry}
                        material={materials['hUlRcbieVuIiOXG.001']}
                     />
                     <mesh
                        name="obVkazjvaXyXFtA"
                        castShadow
                        receiveShadow
                        geometry={nodes.obVkazjvaXyXFtA.geometry}
                        material={materials['EuTsEfyoAnyJIih.001']}
                     />
                     <mesh
                        name="ooeiSEXgcJckXsp"
                        castShadow
                        receiveShadow
                        geometry={nodes.ooeiSEXgcJckXsp.geometry}
                        material={materials['yQQySPTfbEJufve.001']}
                     />
                     <mesh
                        name="oOTDgAlTGbFYzBo"
                        castShadow
                        receiveShadow
                        geometry={nodes.oOTDgAlTGbFYzBo.geometry}
                        material={materials['PpwUTnTFZJXxCoE.001']}
                     />
                     <mesh
                        name="PRPzbUhYhabBDYt"
                        castShadow
                        receiveShadow
                        geometry={nodes.PRPzbUhYhabBDYt.geometry}
                        material={materials['jlzuBkUzuJqgiAK.001']}
                     />
                     <mesh
                        name="XRoKUoMkItkzNYL"
                        castShadow
                        receiveShadow
                        geometry={nodes.XRoKUoMkItkzNYL.geometry}
                        material={materials['jlzuBkUzuJqgiAK.001']}
                     />
                     <mesh
                        name="zFlMfSCaOdRDBFx"
                        castShadow
                        receiveShadow
                        geometry={nodes.zFlMfSCaOdRDBFx.geometry}
                        material={materials['EszxgwYUTxbhBrC.001']}
                     />
                     <mesh
                        name="fdZyCEcqJDKBWVW"
                        castShadow
                        receiveShadow
                        geometry={nodes.fdZyCEcqJDKBWVW.geometry}
                        material={materials['hUlRcbieVuIiOXG.001']}
                     />
                     <mesh
                        name="pXBNoLiaMwsDHRF"
                        castShadow
                        receiveShadow
                        geometry={nodes.pXBNoLiaMwsDHRF.geometry}
                        material={materials['yiDkEwDSyEhavuP.001']}
                     />
                     <mesh
                        name="SCoTCDlNLPQMMyt"
                        castShadow
                        receiveShadow
                        geometry={nodes.SCoTCDlNLPQMMyt.geometry}
                        material={materials['yiDkEwDSyEhavuP.001']}
                     />
                     <mesh
                        name="bpqFtgUKAOOPYpk"
                        castShadow
                        receiveShadow
                        geometry={nodes.bpqFtgUKAOOPYpk.geometry}
                        material={materials['yQQySPTfbEJufve.001']}
                     />
                     <mesh
                        name="bxjlJpbNESedyat"
                        castShadow
                        receiveShadow
                        geometry={nodes.bxjlJpbNESedyat.geometry}
                        material={materials['xNrofRCqOXXHVZt.001']}
                     />
                     <mesh
                        name="CdalkzDVnwgdEhS"
                        castShadow
                        receiveShadow
                        geometry={nodes.CdalkzDVnwgdEhS.geometry}
                        material={materials['jlzuBkUzuJqgiAK.001']}
                     />
                     <mesh
                        name="dxVZiHfQBLkPYHO"
                        castShadow
                        receiveShadow
                        geometry={nodes.dxVZiHfQBLkPYHO.geometry}
                        material={materials['hUlRcbieVuIiOXG.001']}
                     />
                     <mesh
                        name="ehFpgEdYijLjwka"
                        castShadow
                        receiveShadow
                        geometry={nodes.ehFpgEdYijLjwka.geometry}
                        material={materials['xNrofRCqOXXHVZt.001']}
                     />
                     <mesh
                        name="guvLdFXlBjMoNra"
                        castShadow
                        receiveShadow
                        geometry={nodes.guvLdFXlBjMoNra.geometry}
                        material={materials['fkUApOHLQsMUdfd.001']}
                     />
                     <mesh
                        name="IXWuqsIeTqBFLIy"
                        castShadow
                        receiveShadow
                        geometry={nodes.IXWuqsIeTqBFLIy.geometry}
                        material={materials['EuTsEfyoAnyJIih.001']}
                     />
                     <mesh
                        name="NtjcIgolNGgYlCg"
                        castShadow
                        receiveShadow
                        geometry={nodes.NtjcIgolNGgYlCg.geometry}
                        material={materials['PpwUTnTFZJXxCoE.001']}
                     />
                     <mesh
                        name="qlwPlhojsxIgqwa"
                        castShadow
                        receiveShadow
                        geometry={nodes.qlwPlhojsxIgqwa.geometry}
                        material={materials['EszxgwYUTxbhBrC.001']}
                     />
                     <mesh
                        name="zOPceDOPdLNSscX"
                        castShadow
                        receiveShadow
                        geometry={nodes.zOPceDOPdLNSscX.geometry}
                        material={materials['eShKpuMNVJTRrgg.001']}
                     />
                     <mesh
                        name="IykfmVvLplTsTEW"
                        castShadow
                        receiveShadow
                        geometry={nodes.IykfmVvLplTsTEW.geometry}
                        material={materials['dwrMminMXjXXeek.001']}
                     />
                     <mesh
                        name="TakBsdEjEytCAMK"
                        castShadow
                        receiveShadow
                        geometry={nodes.TakBsdEjEytCAMK.geometry}
                        material={materials['ZQfGMLaFcpPaLMU.001']}
                     />
                     <mesh
                        name="cibcwsZWGgGfpme"
                        castShadow
                        receiveShadow
                        geometry={nodes.cibcwsZWGgGfpme.geometry}
                        material={materials['ZQfGMLaFcpPaLMU.001']}
                     />
                     <mesh
                        name="DCLCbjzqejuvsqH"
                        castShadow
                        receiveShadow
                        geometry={nodes.DCLCbjzqejuvsqH.geometry}
                        material={materials['vhaEJjZoqGtyLdo.001']}
                     />
                     <mesh
                        name="dkQXkqysxzfHFiP"
                        castShadow
                        receiveShadow
                        geometry={nodes.dkQXkqysxzfHFiP.geometry}
                        material={materials['hUlRcbieVuIiOXG.001']}
                     />
                     <mesh
                        name="FscwyiLIVNWUuKe"
                        castShadow
                        receiveShadow
                        geometry={nodes.FscwyiLIVNWUuKe.geometry}
                        material={materials['fkUApOHLQsMUdfd.001']}
                     />
                     <mesh
                        name="WJwwVjsahIXbJpU"
                        castShadow
                        receiveShadow
                        geometry={nodes.WJwwVjsahIXbJpU.geometry}
                        material={materials['yhcAXNGcJWCqtIS.001']}
                     />
                     <mesh
                        name="wLfSXtbwRlBrwof"
                        castShadow
                        receiveShadow
                        geometry={nodes.wLfSXtbwRlBrwof.geometry}
                        material={materials['oZRkkORNzkufnGD.001']}
                     />
                     <mesh
                        name="YfrJNXgMvGOAfzz"
                        castShadow
                        receiveShadow
                        geometry={nodes.YfrJNXgMvGOAfzz.geometry}
                        material={materials['bCgzXjHOanGdTFV.001']}
                     />
                     <mesh
                        name="buRWvyqhBBgcJFo"
                        castShadow
                        receiveShadow
                        geometry={nodes.buRWvyqhBBgcJFo.geometry}
                        material={materials['eHgELfGhsUorIYR.001']}
                     />
                     <mesh
                        name="DjsDkGiopeiEJZK"
                        castShadow
                        receiveShadow
                        geometry={nodes.DjsDkGiopeiEJZK.geometry}
                        material={materials['iCxrnlRvbVOguYp.001']}
                     />
                     <mesh
                        name="KVYuugCtKRpLNRG_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.KVYuugCtKRpLNRG_0.geometry}
                        material={materials['mvjnAONQuIshyfX.001']}
                     />
                     <mesh
                        name="MrMmlCAsAxJpYqQ_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.MrMmlCAsAxJpYqQ_0.geometry}
                        material={materials['dxCVrUCvYhjVxqy.001']}
                     />
                     <mesh
                        name="wqbHSzWaUxBCwxY_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.wqbHSzWaUxBCwxY_0.geometry}
                        material={materials['MHFGNLrDQbTNima.001']}
                     />
                     <mesh
                        name="zraMDXCGczVnffU"
                        castShadow
                        receiveShadow
                        geometry={nodes.zraMDXCGczVnffU.geometry}
                        material={materials['hUlRcbieVuIiOXG.001']}
                     />
                     <mesh
                        name="CfghdUoyzvwzIum"
                        castShadow
                        receiveShadow
                        geometry={nodes.CfghdUoyzvwzIum.geometry}
                        material={materials['jpGaQNgTtEGkTfo.001']}
                     />
                     <mesh
                        name="MHfUXxLdYldKhVJ_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.MHfUXxLdYldKhVJ_0.geometry}
                        material={materials['dxCVrUCvYhjVxqy.001']}
                     />
                     <mesh
                        name="pvdHknDTGDzVpwc"
                        castShadow
                        receiveShadow
                        geometry={nodes.pvdHknDTGDzVpwc.geometry}
                        material={materials['xdyiJLYTYRfJffH.001']}
                     />
                     <mesh
                        name="TxLQyfBdakwBPHu_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.TxLQyfBdakwBPHu_0.geometry}
                        material={materials['eShKpuMNVJTRrgg.001']}
                     />
                     <mesh
                        name="TvgBVmqNmSrFVfW"
                        castShadow
                        receiveShadow
                        geometry={nodes.TvgBVmqNmSrFVfW.geometry}
                        material={materials['pIhYLPqiSQOZTjn.001']}
                     />
                     <mesh
                        name="evAxFwhaQUwXuua"
                        castShadow
                        receiveShadow
                        geometry={nodes.evAxFwhaQUwXuua.geometry}
                        material={materials['KSIxMqttXxxmOYl.001']}
                     />
                     <mesh
                        name="fjHkOQLEMoyeYKr"
                        castShadow
                        receiveShadow
                        geometry={nodes.fjHkOQLEMoyeYKr.geometry}
                        material={materials['AhrzSsKcKjghXhP.001']}
                     />
                     <mesh
                        name="MGPAkjCLsByKXcN"
                        castShadow
                        receiveShadow
                        geometry={nodes.MGPAkjCLsByKXcN.geometry}
                        material={materials['kUhjpatHUvkBwfM.001']}
                     />
                     <mesh
                        name="QvGDcbDApaGssma"
                        castShadow
                        receiveShadow
                        geometry={nodes.QvGDcbDApaGssma.geometry}
                        material={materials['kUhjpatHUvkBwfM.001']}
                     />
                     <mesh
                        name="RvfXLdAOBoQdZkP"
                        castShadow
                        receiveShadow
                        geometry={nodes.RvfXLdAOBoQdZkP.geometry}
                        material={materials['hUlRcbieVuIiOXG.001']}
                     />
                     <mesh
                        name="USxQiqZgxHbRvqB"
                        castShadow
                        receiveShadow
                        geometry={nodes.USxQiqZgxHbRvqB.geometry}
                        material={materials['mcPrzcBUcdqUybC.001']}
                     />
                     <mesh
                        name="vFwJFNASGvEHWhs"
                        castShadow
                        receiveShadow
                        geometry={nodes.vFwJFNASGvEHWhs.geometry}
                        material={materials['RJoymvEsaIItifI.001']}
                     />
                     <mesh
                        name="VTXyqxbrBeQSTEt"
                        castShadow
                        receiveShadow
                        geometry={nodes.VTXyqxbrBeQSTEt.geometry}
                        material={materials['eHgELfGhsUorIYR.001']}
                     />
                     <mesh
                        name="cnreaSmJRdAuFia"
                        castShadow
                        receiveShadow
                        geometry={nodes.cnreaSmJRdAuFia.geometry}
                        material={materials['eShKpuMNVJTRrgg.001']}
                     />
                     <mesh
                        name="DOjZomXdJsbbvcr"
                        castShadow
                        receiveShadow
                        geometry={nodes.DOjZomXdJsbbvcr.geometry}
                        material={materials['eShKpuMNVJTRrgg.001']}
                     />
                     <mesh
                        name="eYSJBzbqIfsHPsw"
                        castShadow
                        receiveShadow
                        geometry={nodes.eYSJBzbqIfsHPsw.geometry}
                        material={materials['hUlRcbieVuIiOXG.001']}
                     />
                     <mesh
                        name="GuYJryuYunhpphO"
                        castShadow
                        receiveShadow
                        geometry={nodes.GuYJryuYunhpphO.geometry}
                        material={materials['eShKpuMNVJTRrgg.001']}
                     />
                     <mesh
                        name="KbMHiTYyrBmkZwz"
                        castShadow
                        receiveShadow
                        geometry={nodes.KbMHiTYyrBmkZwz.geometry}
                        material={materials['dxCVrUCvYhjVxqy.001']}
                     />
                     <mesh
                        name="sVqcZvpZKhwSmoN"
                        castShadow
                        receiveShadow
                        geometry={nodes.sVqcZvpZKhwSmoN.geometry}
                        material={materials['dxCVrUCvYhjVxqy.001']}
                     />
                     <mesh
                        name="xJhdvBbfHMKCBPl"
                        castShadow
                        receiveShadow
                        geometry={nodes.xJhdvBbfHMKCBPl.geometry}
                        material={materials['dxCVrUCvYhjVxqy.001']}
                     />
                     <mesh
                        name="HKHhmqmAZAOaaKY"
                        castShadow
                        receiveShadow
                        geometry={nodes.HKHhmqmAZAOaaKY.geometry}
                        material={materials['dxCVrUCvYhjVxqy.001']}
                     />
                     <mesh
                        name="IZQgEjTfhbNtjHR"
                        castShadow
                        receiveShadow
                        geometry={nodes.IZQgEjTfhbNtjHR.geometry}
                        material={materials['eShKpuMNVJTRrgg.001']}
                     />
                     <mesh
                        name="DjdhycfQYjKMDyn"
                        castShadow
                        receiveShadow
                        geometry={nodes.DjdhycfQYjKMDyn.geometry}
                        material={materials['ujsvqBWRMnqdwPx.001']}
                     />
                     <mesh
                        name="usFLmqcyrnltBUr"
                        castShadow
                        receiveShadow
                        geometry={nodes.usFLmqcyrnltBUr.geometry}
                        material={materials['sxNzrmuTqVeaXdg.001']}
                     />
                     <mesh
                        name="IZbjANwSMLfgcvD"
                        castShadow
                        receiveShadow
                        geometry={nodes.IZbjANwSMLfgcvD.geometry}
                        material={materials['hUlRcbieVuIiOXG.001']}
                     />
                     <mesh
                        name="SysBlPspVQNIcce"
                        castShadow
                        receiveShadow
                        geometry={nodes.SysBlPspVQNIcce.geometry}
                        material={materials['ujsvqBWRMnqdwPx.001']}
                     />
                     <mesh
                        name="vELORlCJixqPHsZ"
                        castShadow
                        receiveShadow
                        geometry={nodes.vELORlCJixqPHsZ.geometry}
                        material={materials['zFdeDaGNRwzccye.001']}
                     />
                     <mesh
                        name="xXDHkMplTIDAXLN"
                        castShadow
                        receiveShadow
                        geometry={nodes.xXDHkMplTIDAXLN.geometry}
                        material={materials['pIJKfZsazmcpEiU.001']}
                     />
                     <mesh
                        name="AQkWXGdRSkSZMav"
                        castShadow
                        receiveShadow
                        geometry={nodes.AQkWXGdRSkSZMav.geometry}
                        material={materials['ujsvqBWRMnqdwPx.001']}
                     />
                     <mesh
                        name="aGrbyjnzqoVJenz"
                        castShadow
                        receiveShadow
                        geometry={nodes.aGrbyjnzqoVJenz.geometry}
                        material={materials['xNrofRCqOXXHVZt.001']}
                     />
                     <mesh
                        name="EbQGKrWAqhBHiMv"
                        castShadow
                        receiveShadow
                        geometry={nodes.EbQGKrWAqhBHiMv.geometry}
                        material={materials['TBLSREBUyLMVtJa.001']}
                     />
                     <mesh
                        name="EddVrWkqZTlvmci"
                        castShadow
                        receiveShadow
                        geometry={nodes.EddVrWkqZTlvmci.geometry}
                        material={materials['xNrofRCqOXXHVZt.001']}
                     />
                     <mesh
                        name="IMPDFDiRXhPIUMV"
                        castShadow
                        receiveShadow
                        geometry={nodes.IMPDFDiRXhPIUMV.geometry}
                        material={materials['hUlRcbieVuIiOXG.001']}
                     />
                     <mesh
                        name="KSWlaxBcnPDpFCs"
                        castShadow
                        receiveShadow
                        geometry={nodes.KSWlaxBcnPDpFCs.geometry}
                        material={materials['yQQySPTfbEJufve.001']}
                     />
                  </group>
               </group>
            </group>
         </group>


         {/*----pc setup-----*/}
         <group ref={desktop}>

            {/*----chair-----*/}
            <group
               name="whole_boundary_Plane004"
               rotation={[0, -2.7, 0]}
               position={[1.6, -2.9, 0.65]}
               scale={0.29}>
               <mesh
                  name="whole_boundary_Plane004__white_metal_0"

                  geometry={nodes.whole_boundary_Plane004__white_metal_0.geometry}
                  material={materials['white_metal.001']}
               />
               <mesh
                  name="whole_boundary_Plane004_black_metal_0"

                  geometry={nodes.whole_boundary_Plane004_black_metal_0.geometry}
                  material={materials['black_metal.001']}
               />
               <mesh
                  name="whole_boundary_Plane004_chair_material_0"

                  geometry={nodes.whole_boundary_Plane004_chair_material_0.geometry}
                  material={materials['chair_material.001']}
               />
               <mesh
                  name="whole_boundary_Plane004_plastic_0"

                  geometry={nodes.whole_boundary_Plane004_plastic_0.geometry}
                  material={materials['plastic.003']}
               />
            </group>

            {/*----desktop-----*/}
            <group
               rotation={[0, 0.9, 0]}
               position={[0, -2.6, -2]}
               scale={2.8}>

               <mesh
                  name="Cube_Material014_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_Material014_0.geometry}
                  material={materials['Material.028']}
               />
               <mesh
                  name="Cylinder_plastic002_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder_plastic002_0.geometry}
                  material={materials['plastic.001']}
               />
               <mesh
                  name="Cylinder_screen002_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder_screen002_0.geometry}
                  material={materials.Cylinder_screen_material}
               />
               <mesh
                  name="desk_Material001_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.desk_Material001_0.geometry}
                  material={materials['Material.008']}
               />
               <mesh
                  name="desk_Material002_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.desk_Material002_0.geometry}
                  material={materials['Material.007']}
               />
               <mesh
                  name="pad_Material_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pad_Material_0.geometry}
                  material={materials['Material.024']}
               />
               <mesh
                  name="Plane_Material003_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane_Material003_0.geometry}
                  material={materials['Material.025']}
               />
               <mesh
                  name="Plane001_Material005_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane001_Material005_0.geometry}
                  material={materials['Material.027']}
               />
               <mesh
                  name="Plane002_Material004_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane002_Material004_0.geometry}
                  material={materials['Material.026']}
               />
               <mesh
                  name="Plane003_Material005_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane003_Material005_0.geometry}
                  material={materials['Material.027']}
               />
               <mesh
                  name="Plane006_Material009_0"
                  // castShadow
                  // receiveShadow
                  geometry={nodes.Plane006_Material009_0.geometry}
                  material={materials['Material.012']}>
                  <meshBasicMaterial map={txt} toneMapped={false}/>
               </mesh>
               <mesh
                  name="Plane006_Material010_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane006_Material010_0.geometry}
                  material={materials['Material.013']}
               />
               <mesh
                  name="Plane_Plane001_Material011_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane_Plane001_Material011_0.geometry}
                  material={materials['Material.017']}
               />
               <mesh
                  name="Plane_Plane001_Material018_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane_Plane001_Material018_0.geometry}
                  material={materials['Material.021']}
               />
               <mesh
                  name="Plane_Plane001_Material019_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane_Plane001_Material019_0.geometry}
                  material={materials['Material.022']}
               />
               <mesh
                  name="Plane_Plane001_Material020_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane_Plane001_Material020_0.geometry}
                  material={materials['Material.023']}
               />
               <mesh
                  name="Cube002_Material015_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube002_Material015_0.geometry}
                  material={materials['Material.029']}
               />
               <mesh
                  name="Cube003_Material016_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube003_Material016_0.geometry}
                  material={materials['Material.030']}
               />
               <mesh
                  name="Cube004_Material015_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube004_Material015_0.geometry}
                  material={materials['Material.029']}
                  position={[-0.426, 0, 0.149]}
                  rotation={[0.043, -0.818, 0.012]}
               />
            </group>
         </group>
      </group>
   )
};

export default Avatar;
useGLTF.preload('models/last.glb');

useFBX.preload('animations/Waving.fbx');
useFBX.preload('animations/Typing.fbx');
useFBX.preload('animations/Gesture.fbx');
useFBX.preload('animations/Texting2.fbx');


